import Image from 'next/image';

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image src="/images/worker.jpg" alt="엔지니어링" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/98 via-navy/90 to-navy/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
          <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in-up">Contact</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in-up delay-100">
            <span className="text-gradient">문의</span>하기
          </h1>
          <p className="text-gray-300 text-lg max-w-lg animate-fade-in-up delay-200">
            궁금한 점은 언제든 편하게 물어보세요. 친절하게 상담해드리겠습니다.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-navy rounded-3xl p-12 md:p-16 shadow-2xl">
            <div className="w-20 h-20 rounded-full bg-amber/20 flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">전화 상담</h2>
            <p className="text-gray-400 text-lg mb-3">24시간 365일 친절 상담</p>
            <p className="text-gray-500 mb-10">클릭시 전화 연결!</p>
            <a
              href="tel:010-5811-5297"
              className="inline-flex items-center justify-center gap-3 bg-amber hover:bg-amber-dark text-navy-dark px-12 py-6 rounded-2xl font-black text-3xl transition-all hover:shadow-lg hover:shadow-amber/30 animate-pulse-glow"
            >
              010-5811-5297
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-navy-dark mb-4">궁금한 점은 언제든 편하게 물어보세요!</h2>
          <p className="text-navy-dark/70 text-lg mb-10">24시간 365일 친절 상담, 클릭시 전화 연결!</p>
          <a
            href="tel:010-5811-5297"
            className="inline-flex items-center justify-center gap-3 bg-navy-dark hover:bg-navy text-white px-10 py-5 rounded-xl font-bold text-xl transition-all hover:shadow-xl"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
            010-5811-5297
          </a>
        </div>
      </section>
    </div>
  );
}
