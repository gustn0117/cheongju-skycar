import Link from 'next/link';
import Image from 'next/image';

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function Home() {
  const features = [
    {
      title: '신속배차',
      desc: '24시간 언제든 빠른 배차. 전화 한 통이면 30분 내 출동합니다.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      highlight: '30분 내 출동',
    },
    {
      title: '안전최우선',
      desc: 'KC안전인증 장비와 전문 기술자. 무사고 안전 관리 시스템.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      highlight: 'KC안전인증',
    },
    {
      title: '합리적 가격',
      desc: '투명한 견적 시스템. 숨겨진 비용 없이 합리적인 가격을 보장합니다.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
      highlight: '투명한 견적',
    },
    {
      title: '전문 기술력',
      desc: '15년 이상의 경험과 노하우. 어떤 현장이든 최적의 솔루션을 제공합니다.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      highlight: '15년+ 경험',
    },
  ];

  const equipment = [
    { name: '1톤 스카이차', height: 18, maxHeight: 45, price: '25~30만원/h', uses: ['간판작업', '외벽작업', '소규모 설치'] },
    { name: '3.5톤 스카이차', height: 30, maxHeight: 45, price: '35~40만원/h', uses: ['철거작업', '설치작업', '중규모 건설'] },
    { name: '5톤 스카이차', height: 45, maxHeight: 45, price: '45~50만원/h', uses: ['대형작업', '교량점검', '고층 작업'] },
    { name: '25톤 크레인', height: 40, maxHeight: 45, price: '80~100만원/h', uses: ['중장비 이동', '건설 양중', '특수작업'] },
  ];

  const workAreas = [
    { title: '간판 설치·철거', desc: '상업용·산업용 간판 설치 및 철거' },
    { title: '외벽 보수·도장', desc: '건물 외벽 보수, 도장, 방수 작업' },
    { title: '철거 작업', desc: '건축물 해체 및 철거 지원' },
    { title: '태양광 설치', desc: '태양광 패널 설치 및 유지보수' },
    { title: '교량·터널 점검', desc: '교량, 터널 안전 점검 및 보수' },
    { title: 'CCTV·통신 설치', desc: 'CCTV, 통신장비 고소 설치' },
  ];

  const reviews = [
    { name: '김OO 대표', company: '간판 업체', text: '급하게 연락드렸는데 30분 만에 와주셨어요. 작업도 깔끔하고 가격도 합리적이었습니다.' },
    { name: '이OO 현장소장', company: '건설업체', text: '5톤 스카이차로 교량 점검 작업을 진행했는데, 안전하고 전문적이었습니다. 다음에도 이용할게요.' },
    { name: '박OO 사장', company: '태양광 업체', text: '매달 정기적으로 이용하고 있습니다. 항상 시간 약속 잘 지켜주시고 기사님도 친절하세요.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <Image src="/images/skyline.jpg" alt="고층 건물" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/98 via-navy/90 to-navy/50" />
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber/3 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber/15 text-amber px-4 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-amber/20 animate-fade-in-up">
                <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
                24시간 신속배차 · 청주 전지역
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 animate-fade-in-up delay-100">
                청주<br />
                <span className="text-gradient">고소작업차</span><br />
                전문 렌탈
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-md animate-fade-in-up delay-200">
                1톤부터 25톤 크레인까지, 15년 경험의 전문 기술진이 안전하게 작업합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <a
                  href="tel:010-1234-5678"
                  className="inline-flex items-center justify-center gap-2.5 bg-amber hover:bg-amber-dark text-navy-dark px-8 py-4 rounded-xl font-bold text-base transition-all hover:shadow-lg hover:shadow-amber/30 animate-pulse-glow"
                >
                  <PhoneIcon />
                  지금 전화하기
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 glass text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-base transition-all"
                >
                  온라인 문의
                  <ArrowRight />
                </Link>
              </div>
            </div>

            {/* Hero Stats Card */}
            <div className="hidden lg:block animate-slide-right delay-400">
              <div className="glass rounded-3xl p-8 space-y-6">
                <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">실시간 현황</p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '15+', label: '년간 경험', color: 'text-amber' },
                    { value: '5,000+', label: '누적 시공', color: 'text-green-400' },
                    { value: '99%', label: '고객 만족도', color: 'text-blue-400' },
                    { value: '24H', label: '긴급배차', color: 'text-purple-400' },
                  ].map((s, i) => (
                    <div key={i} className={`animate-count-up delay-${(i + 4) * 100}`}>
                      <div className={`text-3xl font-black ${s.color}`}>{s.value}</div>
                      <p className="text-gray-400 text-sm mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <p className="text-gray-300 text-sm">현재 배차 가능</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm text-gray-400">
            <span className="flex items-center gap-2 font-medium">
              <svg className="w-5 h-5 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              KC안전인증
            </span>
            <span className="flex items-center gap-2 font-medium">
              <svg className="w-5 h-5 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              24시간 운영
            </span>
            <span className="flex items-center gap-2 font-medium">
              <svg className="w-5 h-5 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              만족도 99%
            </span>
            <span className="flex items-center gap-2 font-medium">
              <svg className="w-5 h-5 text-amber" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>
              15년+ 경험
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">왜 청주스카이차인가요?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">선택의 이유가 분명한 전문 렌탈 서비스</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group relative p-8 rounded-2xl border border-gray-100 hover:border-transparent transition-all hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-navy text-amber flex items-center justify-center group-hover:bg-amber group-hover:text-navy-dark transition-all">
                      {f.icon}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold">{f.title}</h3>
                      <span className="text-xs font-bold text-amber bg-amber/10 px-2.5 py-1 rounded-full">{f.highlight}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment with Height Bars */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image src="/images/construction.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy-dark/97" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Equipment</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">보유 장비</h2>
            <p className="text-gray-400 max-w-xl mx-auto">작업 규모에 맞는 최적의 장비를 제공합니다</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {equipment.map((eq, i) => (
              <div key={i} className="group glass rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-1">
                {/* Height visualization */}
                <div className="flex items-end gap-3 mb-6 h-32">
                  <div className="w-full bg-white/5 rounded-lg relative overflow-hidden h-full">
                    <div
                      className="height-bar absolute bottom-0 left-0 right-0 transition-all duration-700 group-hover:opacity-90"
                      style={{ height: `${(eq.height / eq.maxHeight) * 100}%` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white font-black text-2xl drop-shadow-lg">{eq.height}m</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{eq.name}</h3>
                <p className="text-amber font-bold text-sm mb-4">{eq.price}</p>
                <div className="flex flex-wrap gap-1.5">
                  {eq.uses.map((use, j) => (
                    <span key={j} className="text-gray-400 text-xs bg-white/5 px-2.5 py-1 rounded-md">
                      {use}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-6 py-3 rounded-xl font-semibold text-sm border border-white/10 transition-all"
            >
              장비 상세 사양 및 요금 보기
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Work Areas - Photo Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Work Areas</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">작업 분야</h2>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                간판 설치부터 교량 점검까지, 전문 장비와 기술력으로 다양한 고소작업을 수행합니다.
              </p>
              <div className="space-y-3">
                {workAreas.map((area, i) => (
                  <div key={i} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-amber/10 text-amber flex items-center justify-center shrink-0 group-hover:bg-amber group-hover:text-white transition-all">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">{area.title}</h3>
                      <p className="text-gray-400 text-xs">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/crane.jpg" alt="작업 현장" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/hero.jpg" alt="건설 작업" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/construction.jpg" alt="중장비" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/about-hero.jpg" alt="설계" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">고객 후기</h2>
            <p className="text-gray-500">실제 고객님들의 생생한 후기</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-amber fill-amber" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">&quot;{r.text}&quot;</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.company}</p>
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              지금 바로<br /><span className="text-gradient">상담받으세요</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">전문 팀이 현장에 맞는 최적의 장비와 솔루션을 제공합니다</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:010-1234-5678"
                className="inline-flex items-center justify-center gap-2.5 bg-amber hover:bg-amber-dark text-navy-dark px-10 py-5 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-amber/30 animate-pulse-glow"
              >
                <PhoneIcon className="w-6 h-6" />
                010-1234-5678
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 glass text-white hover:bg-white/15 px-10 py-5 rounded-xl font-semibold text-lg transition-all"
              >
                온라인 문의하기
                <ArrowRight />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 mt-10 text-sm text-gray-500">
              <span>상담시간 08:00~17:00</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <span>24시간 긴급배차</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <span>무료 현장 상담</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
