import Link from 'next/link';

export default function Home() {
  const features = [
    { title: '신속배차', description: '24시간 신속한 배차 서비스', icon: '⚡' },
    { title: '안전최우선', description: 'KC안전인증 장비 및 전문가', icon: '🛡️' },
    { title: '합리적 가격', description: '최고의 가격대 보장', icon: '💰' },
    { title: '전문 기술력', description: '15년 이상의 경험과 노하우', icon: '🔧' },
  ];

  const equipment = [
    {
      name: '1톤 스카이차',
      height: '18m',
      price: '시간 25-30만원',
      features: ['간판작업', '외벽작업', '경량 장비'],
      icon: '🚗'
    },
    {
      name: '3.5톤 스카이차',
      height: '30m',
      price: '시간 35-40만원',
      features: ['철거작업', '설치작업', '중량 장비'],
      icon: '🚙'
    },
    {
      name: '5톤 스카이차',
      height: '45m',
      price: '시간 45-50만원',
      features: ['대형작업', '교량점검', '최대 적재'],
      icon: '🚕'
    },
    {
      name: '25톤 크레인',
      height: '40m',
      price: '시간 80-100만원',
      features: ['중장비 이동', '건설', '특수작업'],
      icon: '🏗️'
    },
  ];

  const workAreas = [
    { title: '간판작업', emoji: '🪧' },
    { title: '외벽작업', emoji: '🏢' },
    { title: '철거작업', emoji: '🔨' },
    { title: '태양광 설치', emoji: '☀️' },
    { title: '교량/터널 점검', emoji: '🌉' },
    { title: 'CCTV 설치', emoji: '📹' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1a2744] to-[#2a3f5f] text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6 animate-bounce">
            <span className="text-6xl md:text-8xl">☁️</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            청주 고소작업차 전문
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            24시간 신속배차 • 안전최우선 • 합리적 가격
          </p>
          <p className="text-gray-400 mb-8">
            청주 지역 최고의 고소작업차 전문 렌탈 업체입니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-1234-5678"
              className="bg-[#f59e0b] text-[#1a2744] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#f97316] transition-all transform hover:scale-105"
            >
              ☎️ 지금 전화하기
            </a>
            <Link
              href="/contact"
              className="bg-white text-[#1a2744] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              📝 온라인 문의
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            왜 청주스카이차를 선택하나요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-[#1a2744]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            보유 장비
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-[#1a2744] to-[#2a3f5f] p-6 text-white">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-[#f59e0b] font-bold text-lg">{item.height}</p>
                </div>
                <div className="p-6">
                  <p className="text-lg font-bold text-[#f59e0b] mb-4">
                    {item.price}
                  </p>
                  <div className="space-y-2">
                    {item.features.map((feature, i) => (
                      <p key={i} className="text-gray-700">
                        ✓ {feature}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            작업 분야
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {workAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a2744] to-[#2a3f5f] text-white p-6 md:p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl md:text-5xl mb-3">{area.emoji}</div>
                <h3 className="font-bold text-base md:text-lg">{area.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#1a2744] to-[#2a3f5f] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            지금 바로 상담받으세요
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            청주스카이차의 전문 팀이 최적의 솔루션을 제공합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-1234-5678"
              className="bg-[#f59e0b] text-[#1a2744] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#f97316] transition-all transform hover:scale-105"
            >
              ☎️ 010-1234-5678
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1a2744] transition-all"
            >
              📝 문의하기
            </Link>
          </div>
          <p className="text-gray-400 mt-8">
            ⏰ 24시간 신속배차 | 08:00 ~ 17:00 상담시간
          </p>
        </div>
      </section>
    </div>
  );
}
