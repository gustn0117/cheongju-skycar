import Image from 'next/image';

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-amber shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function About() {
  const values = [
    {
      title: '안전',
      desc: 'KC안전인증 기준을 초과하는 안전 규정 준수. 무사고 기록 유지.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      number: '01',
    },
    {
      title: '신속성',
      desc: '24시간 신속한 배차와 즉각적인 대응. 전화 후 30분 내 출동.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      number: '02',
    },
    {
      title: '전문성',
      desc: '15년 이상의 경험 있는 전문 기술자. 어떤 현장이든 안전하게.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
        </svg>
      ),
      number: '03',
    },
    {
      title: '신뢰',
      desc: '고객 만족을 최우선으로 하는 서비스. 99% 고객 만족도 달성.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      number: '04',
    },
  ];

  const timeline = [
    { year: '2009', title: '회사 설립', desc: '청주 지역에서 고소작업차 렌탈 사업 시작' },
    { year: '2012', title: 'KC안전인증 획득', desc: '국내 최고 기준의 안전 인증 취득' },
    { year: '2016', title: '장비 확대', desc: '25톤 크레인을 포함한 다양한 장비 추가' },
    { year: '2020', title: '지역 최고 평가', desc: '고객 만족도 99% 달성' },
    { year: '2024', title: '기술력 강화', desc: '최신 안전 기술과 IoT 시스템 도입' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image src="/images/crane.jpg" alt="작업 현장" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/98 via-navy/90 to-navy/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
          <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in-up">About Us</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 animate-fade-in-up delay-100">
            신뢰로 세워진<br /><span className="text-gradient">15년의 역사</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-lg animate-fade-in-up delay-200">
            청주 지역 고소작업차 전문 렌탈 업체로서 안전과 신뢰를 최우선 가치로 삼고 있습니다.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">우리의 사명</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                청주스카이차는 고객의 신뢰를 바탕으로 최고 품질의 고소작업차 렌탈 서비스를 제공하는 것을 사명으로 삼고 있습니다.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                안전과 신속성, 합리적 가격으로 지역 발전에 기여하며 고객 만족도 최우선의 경영 철학을 실천합니다.
              </p>

              <div className="bg-amber/5 border border-amber/20 rounded-2xl p-6 mb-8">
                <p className="text-amber font-bold text-sm uppercase tracking-wider mb-3">Vision</p>
                <p className="text-gray-700 font-medium">청주 지역 최고의 고소작업차 전문 렌탈 업체로서 고객에게 신뢰받는 기업</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {['고객 만족도 100%', '최신 기술 장비', '전국 서비스 확대', '지속 가능한 성장'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckIcon />
                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/about-hero.jpg" alt="전문 설계" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <div className="text-4xl font-black text-amber">15+</div>
                <p className="text-gray-500 text-sm font-medium mt-1">년간의 경험</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-navy rounded-2xl shadow-xl p-6 text-white">
                <div className="text-4xl font-black text-amber">99%</div>
                <p className="text-gray-400 text-sm font-medium mt-1">고객 만족도</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Core Values</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">핵심 가치</h2>
            <p className="text-gray-500">청주스카이차가 지켜온 4가지 원칙</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="group relative bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden">
                <div className="absolute top-6 right-6 text-6xl font-black text-gray-100 group-hover:text-amber/10 transition-colors">{v.number}</div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-amber/10 text-amber flex items-center justify-center mb-5 group-hover:bg-amber group-hover:text-white transition-all">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">History</p>
            <h2 className="text-3xl md:text-4xl font-bold">회사 연혁</h2>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber via-amber/50 to-gray-200" />
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex items-center mb-16 last:mb-0 ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${i % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="bg-gray-50 hover:bg-white hover:shadow-lg transition-all rounded-2xl p-6 border border-gray-100">
                      <span className="text-amber font-black text-lg">{item.year}</span>
                      <h3 className="text-lg font-bold mt-1 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-amber rounded-full border-4 border-white shadow-md z-10" />
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden relative border-l-2 border-gray-200 ml-4">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-10 pb-12 last:pb-0">
                <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-amber border-4 border-white shadow-md" />
                <div className="bg-gray-50 rounded-xl p-5">
                  <span className="text-amber font-bold text-sm">{item.year}</span>
                  <h3 className="text-lg font-bold mt-1 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden">
        <Image src="/images/hero.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy-dark/93" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: '년간의 경험', sub: 'Since 2009' },
              { value: '5,000+', label: '누적 시공', sub: '현장 작업 완료' },
              { value: '99%', label: '고객 만족도', sub: '재이용률 기준' },
              { value: '24H', label: '신속배차', sub: '연중무휴 운영' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-gradient mb-2">{s.value}</div>
                <p className="text-white font-medium">{s.label}</p>
                <p className="text-gray-500 text-xs mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
