'use client';

export default function About() {
  const values = [
    {
      title: '안전',
      description: 'KC안전인증 기준을 초과하는 안전 규정 준수',
      icon: '🛡️'
    },
    {
      title: '신속성',
      description: '24시간 신속한 배차와 즉각적인 대응',
      icon: '⚡'
    },
    {
      title: '전문성',
      description: '15년 이상의 경험 있는 전문 기술자',
      icon: '🎯'
    },
    {
      title: '신뢰',
      description: '고객 만족을 최우선으로 하는 서비스',
      icon: '✅'
    },
  ];

  const timeline = [
    {
      year: '2009',
      title: '회사 설립',
      description: '청주 지역에서 고소작업차 렌탈 사업 시작'
    },
    {
      year: '2012',
      title: 'KC안전인증 획득',
      description: '국내 최고 기준의 안전 인증 취득'
    },
    {
      year: '2016',
      title: '장비 확대',
      description: '25톤 크레인을 포함한 다양한 장비 추가'
    },
    {
      year: '2020',
      title: '지역 최고 평가',
      description: '고객 만족도 99% 달성'
    },
    {
      year: '2024',
      title: '기술력 강화',
      description: '최신 안전 기술과 IoT 시스템 도입'
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1a2744] to-[#2a3f5f] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            청주스카이차를 소개합니다
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            15년 이상의 경험과 신뢰로 세워진 전문 렌탈 업체
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a2744]">
                우리의 사명
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                청주스카이차는 고객의 신뢰를 바탕으로 최고의 품질의 고소작업차 렌탈 서비스를 제공하는 것을 사명으로 삼고 있습니다.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                안전과 신속성, 합리적 가격으로 지역 발전에 기여하며 고객 만족도 최우선의 경영 철학을 실천합니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#1a2744] to-[#2a3f5f] text-white p-8 md:p-12 rounded-xl">
              <div className="text-6xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold mb-4">비전</h3>
              <p className="text-gray-300 mb-4">
                청주 지역의 최고 고소작업차 전문 렌탈 업체로 자리매김하여 고객의 신뢰 받는 기업이 되는 것입니다.
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ 고객 만족도 100% 달성</li>
                <li>✓ 최신 기술 장비 확보</li>
                <li>✓ 전국 확대 계획</li>
                <li>✓ 지속 가능한 성장</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            핵심 가치
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#1a2744]">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            회사 연혁
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1a2744] to-[#f59e0b]"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <div className="text-3xl font-bold text-[#f59e0b] mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-5 h-5 bg-[#f59e0b] rounded-full border-4 border-white"></div>
                  </div>
                  <div className="md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#1a2744] to-[#2a3f5f] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-2">
                15+
              </div>
              <p className="text-lg">년간의 경험</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-2">
                5,000+
              </div>
              <p className="text-lg">누적 시공</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-2">
                99%
              </div>
              <p className="text-lg">고객 만족도</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-2">
                24H
              </div>
              <p className="text-lg">신속배차</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            지금 바로 상담받으세요
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            청주스카이차의 전문 팀이 최적의 솔루션을 제공합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-1234-5678"
              className="bg-[#f59e0b] text-[#1a2744] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#f97316] transition-all transform hover:scale-105"
            >
              ☎️ 010-1234-5678
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
