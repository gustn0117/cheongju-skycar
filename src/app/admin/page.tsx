'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  visible: boolean;
  sort_order: number;
  created_at: string;
}

export default function AdminDashboard() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState<PortfolioItem | null>(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', images: [] as string[] });
  const fileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const res = await fetch('/api/auth');
    const data = await res.json();
    if (!data.authenticated) {
      router.push('/admin/login');
      return;
    }
    setAuthenticated(true);
    loadItems();
  };

  const loadItems = async () => {
    setLoading(true);
    const res = await fetch('/api/portfolio?all=true');
    const data = await res.json();
    setItems(data.items);
    setLoading(false);
  };

  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'logout' }),
    });
    router.push('/admin/login');
  };

  const handleUpload = async (files: FileList) => {
    setUploading(true);
    const newImages: string[] = [];
    for (const file of Array.from(files)) {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.filename) newImages.push(data.filename);
    }
    setFormData((prev) => ({ ...prev, images: [...prev.images, ...newImages] }));
    setUploading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length) handleUpload(files);
    e.target.value = '';
  };

  const removeImage = (idx: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== idx),
    }));
  };

  const openForm = (item?: PortfolioItem) => {
    if (item) {
      setEditItem(item);
      setFormData({ title: item.title, description: item.description, images: [...item.images] });
    } else {
      setEditItem(null);
      setFormData({ title: '', description: '', images: [] });
    }
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditItem(null);
    setFormData({ title: '', description: '', images: [] });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.images.length) return;

    if (editItem) {
      await fetch(`/api/portfolio/${editItem.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } else {
      await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    }

    closeForm();
    loadItems();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    await fetch(`/api/portfolio/${id}`, { method: 'DELETE' });
    loadItems();
  };

  const toggleVisible = async (item: PortfolioItem) => {
    await fetch(`/api/portfolio/${item.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ visible: !item.visible }),
    });
    loadItems();
  };

  if (!authenticated) return null;

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-100 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-dark">시공사례 관리</h1>
            <p className="text-gray-400 text-sm">총 {items.length}개</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => openForm()}
              className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              새 시공사례
            </button>
            <button
              onClick={handleLogout}
              className="text-gray-400 hover:text-gray-600 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
            >
              로그아웃
            </button>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-20">
            <div className="w-10 h-10 border-3 border-accent/30 border-t-accent rounded-full animate-spin mx-auto" />
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <p className="text-gray-400 mb-4">등록된 시공사례가 없습니다.</p>
            <button
              onClick={() => openForm()}
              className="text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
            >
              첫 시공사례 등록하기
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {items.map((item) => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl overflow-hidden border transition-all ${
                  item.visible ? 'border-gray-100' : 'border-dashed border-gray-300 opacity-60'
                }`}
              >
                <div className="relative aspect-[4/3] bg-gray-100">
                  <img
                    src={`/api/uploads/${item.images[0]}`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {!item.visible && (
                    <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                      <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full font-medium">숨김</span>
                    </div>
                  )}
                  {item.images.length > 1 && (
                    <div className="absolute top-2 right-2 bg-dark/70 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                      {item.images.length}장
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-dark text-sm mb-1 truncate">{item.title}</h3>
                  {item.description && (
                    <p className="text-gray-400 text-xs line-clamp-1 mb-3">{item.description}</p>
                  )}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => openForm(item)}
                      className="flex-1 text-xs font-medium text-gray-500 hover:text-accent bg-gray-50 hover:bg-accent/5 py-2 rounded-lg transition-colors"
                    >
                      수정
                    </button>
                    <button
                      onClick={() => toggleVisible(item)}
                      className="flex-1 text-xs font-medium text-gray-500 hover:text-accent bg-gray-50 hover:bg-accent/5 py-2 rounded-lg transition-colors"
                    >
                      {item.visible ? '숨기기' : '보이기'}
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex-1 text-xs font-medium text-gray-500 hover:text-red-500 bg-gray-50 hover:bg-red-50 py-2 rounded-lg transition-colors"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[100] bg-dark/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-black text-dark">
                {editItem ? '시공사례 수정' : '새 시공사례 등록'}
              </h2>
              <button
                onClick={closeForm}
                className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Images */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  이미지 ({formData.images.length}장)
                </label>

                {/* Uploaded images grid */}
                {formData.images.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {formData.images.map((img, idx) => (
                      <div key={idx} className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 group">
                        <img src={`/api/uploads/${img}`} alt="" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removeImage(idx)}
                          className="absolute top-1.5 right-1.5 w-6 h-6 bg-dark/70 hover:bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                        {idx === 0 && (
                          <div className="absolute bottom-1.5 left-1.5 bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                            대표
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Add more button */}
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  disabled={uploading}
                  className="w-full py-4 rounded-xl border-2 border-dashed border-gray-200 hover:border-accent/50 bg-gray-50 hover:bg-accent/5 flex items-center justify-center gap-2 transition-all"
                >
                  {uploading ? (
                    <div className="w-6 h-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
                  ) : (
                    <>
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      <span className="text-gray-400 text-sm">
                        {formData.images.length === 0 ? '클릭하여 이미지 업로드' : '이미지 추가'}
                      </span>
                    </>
                  )}
                </button>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">제목</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-dark"
                  placeholder="예: 청주시 OO빌딩 간판 교체 작업"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">설명 (선택)</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-dark resize-none"
                  rows={3}
                  placeholder="작업 내용을 간략하게 설명해주세요"
                />
              </div>

              {/* Submit */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeForm}
                  className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-500 font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={!formData.title || !formData.images.length}
                  className="flex-1 py-3 rounded-xl bg-accent hover:bg-accent-dark text-white font-bold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {editItem ? '수정 완료' : '등록하기'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
