'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
}

export default function Portfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    fetch('/api/portfolio')
      .then((res) => res.json())
      .then((data) => setItems(data.items))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image src="/images/construction.jpg" alt="시공 현장" fill className="object-cover scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark/85 to-dark-light/70" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/3 left-[10%] w-72 h-72 bg-accent/10 rounded-full blur-[80px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="section-divider mb-8 animate-fade-in-up" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in-up delay-100">
            <span className="text-gradient">시공</span>사례
          </h1>
          <p className="text-white/60 text-lg max-w-xl animate-fade-in-up delay-200">
            청주 스카이차가 수행한 다양한 고소작업 현장을 확인해보세요.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-28 md:py-36 bg-slate-50 bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20">
              <div className="w-10 h-10 border-3 border-accent/30 border-t-accent rounded-full animate-spin mx-auto" />
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <p className="text-gray-400 text-lg">아직 등록된 시공사례가 없습니다.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelected(item)}
                  className="group relative bg-white rounded-2xl overflow-hidden card-lift border border-gray-100/80 text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={`/api/uploads/${item.image}`}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-dark text-lg mb-1">{item.title}</h3>
                    {item.description && (
                      <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">궁금한 점은 언제든 편하게 물어보세요!</h2>
          <p className="text-white/80 text-lg mb-10">24시간 365일 친절 상담, 클릭시 전화 연결!</p>
          <a
            href="tel:010-5811-5297"
            className="inline-flex items-center justify-center gap-3 bg-dark hover:bg-dark-light text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:shadow-2xl active:scale-[0.98]"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
            010-5811-5297
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-dark/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-dark/70 hover:bg-dark text-white rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={`/api/uploads/${selected.image}`}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-black text-xl md:text-2xl text-dark mb-2">{selected.title}</h3>
              {selected.description && (
                <p className="text-gray-500 leading-relaxed">{selected.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
