'use client';

import { useState } from 'react';
import Image from 'next/image';

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-amber shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', content: '', date: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm({ name: '', phone: '', content: '', date: '' });
      setSubmitted(false);
    }, 3000);
  };

  const faqs = [
    { q: '야간에도 배차가 가능한가요?', a: '네, 24시간 신속배차 서비스를 제공합니다. 긴급 상황에도 빠르게 대응해드립니다.' },
    { q: '기술자 파견이 가능한가요?', a: '네, 경험 많은 전문 기술자 파견이 가능합니다. 안전한 작업을 위해 기술자 파견을 권장합니다.' },
    { q: '서비스 지역은 어디까지인가요?', a: '청주시 전지역 및 인근 지역입니다. 전국 배차도 가능하니 문의해주세요.' },
    { q: '현장 점검 및 상담이 무료인가요?', a: '네, 무료 현장 확인과 상담을 제공합니다. 전화로 문의해주세요.' },
  ];

  const inputClass = "w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber focus:bg-white transition-all";

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <Image src="/images/worker.jpg" alt="엔지니어링" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">문의하기</h1>
          <p className="text-gray-300 text-lg max-w-lg">청주스카이차에 언제든지 편하게 연락주세요</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Online Inquiry</p>
              <h2 className="text-2xl font-bold mb-8">온라인 문의</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  문의가 접수되었습니다. 빠르게 연락드리겠습니다!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2">이름 <span className="text-red-500">*</span></label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="성함을 입력해주세요" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">연락처 <span className="text-red-500">*</span></label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="010-0000-0000" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">작업 내용 <span className="text-red-500">*</span></label>
                  <textarea name="content" value={form.content} onChange={handleChange} required placeholder="필요한 작업 내용을 상세히 설명해주세요 (장비 종류, 작업 장소, 작업 내용 등)" rows={5} className={`${inputClass} resize-none`} />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">희망 작업 일자</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} className={inputClass} />
                </div>
                <button type="submit" className="w-full bg-amber hover:bg-amber-dark text-navy-dark py-4 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-amber/25">
                  문의 제출하기
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-4">제출하신 정보는 상담 목적으로만 사용됩니다.</p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-navy text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6">직접 연락하기</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1.5">전화</p>
                    <a href="tel:010-1234-5678" className="text-2xl font-bold text-amber hover:text-amber-light transition-colors">
                      010-1234-5678
                    </a>
                  </div>
                  <div className="border-t border-white/10" />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1.5">상담 시간</p>
                    <p className="font-semibold">08:00 ~ 17:00</p>
                    <p className="text-gray-400 text-sm mt-0.5">24시간 긴급배차 가능</p>
                  </div>
                  <div className="border-t border-white/10" />
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wider mb-1.5">위치</p>
                    <p className="font-semibold">충청북도 청주시</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="font-bold mb-4">서비스 지역</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {['청주시 전지역', '충청북도 인근', '전국 배차 가능'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5"><CheckIcon />{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="font-bold mb-4">빠른 상담 안내</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  전화 상담이 가장 빠릅니다. 작업 일시, 장소, 필요 장비를 알려주시면 즉시 견적을 안내해드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold">자주 묻는 질문</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-3 flex items-start gap-3">
                  <span className="text-amber font-black text-sm mt-0.5">Q</span>
                  {faq.q}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image src="/images/skyline.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">궁금한 점이 있으신가요?</h2>
          <p className="text-gray-400 text-lg mb-10">언제든지 전화 또는 온라인으로 상담받으세요</p>
          <a
            href="tel:010-1234-5678"
            className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-navy-dark px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-amber/25"
          >
            010-1234-5678
          </a>
        </div>
      </section>
    </div>
  );
}
