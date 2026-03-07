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
      desc: 'KC안전인증 기준을 초과하는 안전 규정 준수',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: '신속성',
      desc: '24시간 신속한 배차와 즉각적인 대응',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      title: '전문성',
      desc: '15년 이상의 경험 있는 전문 기술자',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
        </svg>
      ),
    },
    {
      title: '신뢰',
      desc: '고객 만족을 최우선으로 하는 서비스',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ];

  const timeline = [
    { year: '2009', title: '회사 설립', desc: '청주 지역에서 고소작업차 렌탈 사업 시작' },
    { year: '2012', title: 'KC안전인증 획득', desc: '국내 최고 기준의 안전 인증 취득' },
    { year: '2016', title: '장비 확대', desc: '25톤 크레인을 포함한 다양한 장비 추가' },
    { year: '2020', title: '지역 최고 평가', desc: '고객 만족도 99% 달성' },
    { year: '2024', title: '기술력 강화', desc: '최신 안전 기술과 IoT 시스템 도입' },
  ];

  const stats = [
    { value: '15+', label: '년간의 경험' },
    { value: '5,000+', label: '누적 시공' },
    { value: '99%', label: '고객 만족도' },
    { value: '24H', label: '신속배차' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <Image src="/images/crane.jpg" alt="작업 현장" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3 animate-fade-in-up">About Us</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 animate-fade-in-up delay-100">회사소개</h1>
          <p className="text-gray-300 text-lg max-w-lg animate-fade-in-up delay-200">15년 이상의 경험과 신뢰로 세워진 전문 렌탈 업체</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">우리의 사명</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                청주스카이차는 고객의 신뢰를 바탕으로 최고 품질의 고소작업차 렌탈 서비스를 제공하는 것을 사명으로 삼고 있습니다.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                안전과 신속성, 합리적 가격으로 지역 발전에 기여하며 고객 만족도 최우선의 경영 철학을 실천합니다.
              </p>
              <div className="space-y-3">
                {['고객 만족도 100% 달성', '최신 기술 장비 확보', '전국 서비스 확대', '지속 가능한 성장'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckIcon />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/about-hero.jpg" alt="전문 설계" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-2 bg-amber text-navy-dark px-4 py-2 rounded-lg font-bold text-sm">
                  비전 — 지역 최고의 신뢰받는 기업
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Core Values</p>
            <h2 className="text-3xl md:text-4xl font-bold">핵심 가치</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="group bg-white p-8 rounded-2xl border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber/10 text-amber mb-5 group-hover:bg-amber group-hover:text-white transition-all">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">History</p>
            <h2 className="text-3xl md:text-4xl font-bold">회사 연혁</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-gray-200 ml-4 md:ml-0">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-10 pb-14 last:pb-0">
                  <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-amber border-4 border-white shadow-md" />
                  <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <span className="text-amber font-bold text-sm">{item.year}</span>
                    <h3 className="text-lg font-bold mt-1 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden">
        <Image src="/images/hero.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black text-amber mb-2">{s.value}</div>
                <p className="text-gray-400 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
