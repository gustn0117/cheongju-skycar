import Link from 'next/link';

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export default function Home() {
  const features = [
    {
      title: '신속배차',
      desc: '24시간 언제든 빠른 배차 서비스를 제공합니다.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: '안전최우선',
      desc: 'KC안전인증 장비와 전문 기술자가 함께합니다.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: '합리적 가격',
      desc: '투명한 견적과 최고의 가격 대비 서비스.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
    },
    {
      title: '전문 기술력',
      desc: '15년 이상의 경험과 노하우를 보유하고 있습니다.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
  ];

  const equipment = [
    { name: '1톤 스카이차', height: '최대 18m', price: '시간 25~30만원', uses: ['간판작업', '외벽작업', '소규모 설치'] },
    { name: '3.5톤 스카이차', height: '최대 30m', price: '시간 35~40만원', uses: ['철거작업', '설치작업', '중규모 건설'] },
    { name: '5톤 스카이차', height: '최대 45m', price: '시간 45~50만원', uses: ['대형작업', '교량점검', '고층 작업'] },
    { name: '25톤 크레인', height: '최대 40m', price: '시간 80~100만원', uses: ['중장비 이동', '건설 양중', '특수작업'] },
  ];

  const workAreas = [
    '간판 설치·철거', '외벽 보수·도장', '철거 작업', '태양광 설치', '교량·터널 점검', 'CCTV·통신 설치',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.15),_transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-4">24시간 신속배차 · 안전최우선</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              청주 고소작업차<br />전문 렌탈
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
              1톤부터 25톤 크레인까지, 청주 지역 최고의 장비와<br className="hidden md:block" />
              15년 경험의 전문 기술진이 함께합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:010-1234-5678"
                className="inline-flex items-center justify-center gap-2.5 bg-amber hover:bg-amber-dark text-navy-dark px-7 py-3.5 rounded-lg font-bold text-base transition-colors"
              >
                <PhoneIcon className="w-5 h-5" />
                지금 전화하기
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white hover:bg-white/10 px-7 py-3.5 rounded-lg font-semibold text-base transition-colors"
              >
                온라인 문의
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">왜 청주스카이차인가요?</h2>
            <p className="text-gray-500 text-lg">고객이 신뢰하는 4가지 이유</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-amber/30 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-amber/10 text-amber mb-6 group-hover:bg-amber group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">보유 장비</h2>
            <p className="text-gray-500 text-lg">작업 규모에 맞는 최적의 장비를 제공합니다</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipment.map((eq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-navy p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{eq.name}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-amber font-bold">{eq.height}</span>
                    <span className="text-gray-400 text-sm">|</span>
                    <span className="text-amber font-bold">{eq.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {eq.uses.map((use, j) => (
                      <span key={j} className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-lg font-medium">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">작업 분야</h2>
            <p className="text-gray-500 text-lg">다양한 고소작업 분야에서 활약하고 있습니다</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {workAreas.map((area, i) => (
              <div key={i} className="bg-navy text-white p-6 md:p-8 rounded-2xl text-center font-semibold hover:bg-navy-light transition-colors">
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">지금 바로 상담받으세요</h2>
          <p className="text-gray-400 text-lg mb-10">전문 팀이 최적의 솔루션을 제공합니다</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-1234-5678"
              className="inline-flex items-center justify-center gap-2.5 bg-amber hover:bg-amber-dark text-navy-dark px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              <PhoneIcon />
              010-1234-5678
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              온라인 문의하기
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-8">상담시간 08:00 ~ 17:00 | 24시간 긴급배차 가능</p>
        </div>
      </section>
    </div>
  );
}
