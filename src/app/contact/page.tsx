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

  const inputClass = "w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber focus:bg-white transition-all placeholder:text-gray-400";

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image src="/images/worker.jpg" alt="엔지니어링" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/98 via-navy/90 to-navy/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
          <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in-up">Contact</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 animate-fade-in-up delay-100">
            문의 &<br /><span className="text-gradient">상담하기</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-lg animate-fade-in-up delay-200">전화 한 통이면 30분 내 견적을 안내해드립니다</p>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-amber">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-navy-dark font-bold text-sm">급하신가요? 전화 상담이 가장 빠릅니다.</p>
            <a href="tel:010-1234-5678" className="inline-flex items-center gap-2 bg-navy-dark text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-navy transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
              010-1234-5678
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Online Inquiry</p>
              <h2 className="text-3xl font-bold mb-3">온라인 문의</h2>
              <p className="text-gray-500 mb-10">아래 양식을 작성해 주시면 빠르게 연락드리겠습니다.</p>

              {submitted && (
                <div className="mb-8 p-5 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  문의가 접수되었습니다. 빠르게 연락드리겠습니다!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2.5">이름 <span className="text-red-500">*</span></label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="성함을 입력해주세요" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2.5">연락처 <span className="text-red-500">*</span></label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="010-0000-0000" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2.5">작업 내용 <span className="text-red-500">*</span></label>
                  <textarea name="content" value={form.content} onChange={handleChange} required placeholder="필요한 작업 내용을 상세히 설명해주세요&#10;(예: 장비 종류, 작업 장소, 작업 내용, 예상 시간 등)" rows={6} className={`${inputClass} resize-none`} />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2.5">희망 작업 일자</label>
                  <input type="date" name="date" value={form.date} onChange={handleChange} className={inputClass} />
                </div>
                <button type="submit" className="w-full bg-amber hover:bg-amber-dark text-navy-dark py-4.5 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-amber/25 text-base">
                  문의 제출하기
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-5">제출하신 정보는 상담 목적으로만 사용되며, 개인정보 보호정책에 따라 관리됩니다.</p>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-navy text-white rounded-3xl overflow-hidden">
                <div className="relative h-40">
                  <Image src="/images/about-hero.jpg" alt="" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy to-navy/30" />
                </div>
                <div className="p-8 -mt-8 relative">
                  <h3 className="text-xl font-bold mb-6">직접 연락하기</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1.5">전화</p>
                      <a href="tel:010-1234-5678" className="text-2xl font-black text-gradient hover:opacity-80 transition-opacity">
                        010-1234-5678
                      </a>
                    </div>
                    <div className="border-t border-white/10" />
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1.5">상담 시간</p>
                        <p className="font-semibold">08:00 ~ 17:00</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1.5">긴급배차</p>
                        <p className="font-semibold text-amber">24시간 가능</p>
                      </div>
                    </div>
                    <div className="border-t border-white/10" />
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1.5">위치</p>
                      <p className="font-semibold">충청북도 청주시</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="font-bold mb-5">서비스 지역</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {['청주시 전지역', '충청북도 인근 (세종, 대전, 천안)', '전국 배차 가능 (별도 협의)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5"><CheckIcon />{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-dark text-white p-8 rounded-2xl">
                <h3 className="font-bold mb-3">빠른 견적을 원하시나요?</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  전화 상담 시 아래 내용을 알려주시면 즉시 견적을 안내해드립니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {['필요한 장비 종류 (톤수)', '작업 장소 (주소)', '작업 내용 및 예상 시간', '희망 작업 날짜'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">자주 묻는 질문</h2>
            <p className="text-gray-500">궁금한 점을 빠르게 확인하세요</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-7 md:p-8 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-amber/20 transition-all">
                <h3 className="font-bold mb-3 flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-amber/10 text-amber text-xs font-black shrink-0">Q</span>
                  <span>{faq.q}</span>
                </h3>
                <div className="flex items-start gap-3 pl-10">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image src="/images/skyline.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 to-navy/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            궁금한 점이<br />있으신가요?
          </h2>
          <p className="text-gray-400 text-lg mb-10">언제든지 전화 또는 온라인으로 상담받으세요</p>
          <a
            href="tel:010-1234-5678"
            className="inline-flex items-center justify-center gap-2.5 bg-amber hover:bg-amber-dark text-navy-dark px-10 py-5 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-amber/30 animate-pulse-glow"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
            010-1234-5678
          </a>
        </div>
      </section>
    </div>
  );
}
