import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: '간판 설치, 철거 작업',
      desc: '흔들림 없는 수평 작업대를 기반으로 간판 설치, 교체, 철거를 안전하고 정밀하게 수행합니다.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: '유리 시공, 샷시 작업',
      desc: '정밀한 상하좌우 조정으로 세밀한 유리 부착 및 교체가 가능하며, 2인 작업 또는 최대 400kg까지 안정적으로 이동할 수 있습니다.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="12" y1="3" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: '페인트, 도장 공사',
      desc: '작업대를 외벽에 10cm까지 밀착시켜 바람 영향을 줄이며, 정확하고 빠르게 도색 작업을 진행해 공사 시간을 단축합니다.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22l1-1h3l9-9" /><path d="M14.5 3.5l6 6" /><path d="M16 2l6 6-9.5 9.5a2 2 0 01-1.4.6H8v-3.1a2 2 0 01.6-1.4L16 2z" />
        </svg>
      ),
    },
    {
      title: '건물 외벽 청소, 보수 작업',
      desc: '장시간 흔들림 없이 유지되는 작업대로 정확한 외벽 청소가 가능하며, 기존 외줄 청소 방식보다 훨씬 안전하고 효율적입니다.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: '조립식 건물 및 패널 공사',
      desc: '고층 및 협소 지역에서도 안정적인 패널 설치·보수가 가능하며 크레인 접근이 어려운 현장에서 효과적인 작업 수행이 가능합니다.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="6" width="22" height="12" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /><line x1="8" y1="6" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="18" />
        </svg>
      ),
    },
    {
      title: '판넬 방수, 보수 작업',
      desc: '세밀한 작업이 필요한 방수 공사에서 뛰어난 조작성과 안정성을 제공해 작업 효율과 완성도를 높입니다.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image src="/images/hero.jpg" alt="건설 현장" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/98 via-navy/90 to-navy/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
          <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in-up">Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in-up delay-100">
            <span className="text-gradient">서비스</span> 안내
          </h1>
          <p className="text-gray-300 text-lg max-w-xl animate-fade-in-up delay-200">
            스카이차·사다리차를 활용한 다양한 고소작업 서비스를 안전하고 체계적으로 수행합니다.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group relative rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all">
                <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-9">
                  <div className="w-14 h-14 rounded-2xl bg-navy text-amber flex items-center justify-center mb-7 group-hover:bg-amber group-hover:text-navy-dark transition-all">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
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
