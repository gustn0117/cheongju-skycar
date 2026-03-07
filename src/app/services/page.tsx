'use client';

export default function Services() {
  const equipment = [
    {
      name: '1톤 스카이차',
      height: '18m',
      icon: '🚗',
      specs: [
        { label: '작업 높이', value: '18m' },
        { label: '작업 반경', value: '약 15m' },
        { label: '최대 적재', value: '약 1톤' },
        { label: '기동 시간', value: '약 30분' },
      ],
      pricing: [
        { duration: '1시간', price: '25만원' },
        { duration: '2시간', price: '45만원' },
        { duration: '반나절', price: '50만원' },
      ],
      features: ['간판작업', '외벽작업', '경량 장비', '소규모 작업'],
      description: '소규모 간판 및 외벽 작업에 최적화된 장비입니다.',
    },
    {
      name: '3.5톤 스카이차',
      height: '30m',
      icon: '🚙',
      specs: [
        { label: '작업 높이', value: '30m' },
        { label: '작업 반경', value: '약 20m' },
        { label: '최대 적재', value: '약 3.5톤' },
        { label: '기동 시간', value: '약 30분' },
      ],
      pricing: [
        { duration: '1시간', price: '35만원' },
        { duration: '2시간', price: '65만원' },
        { duration: '반나절', price: '70만원' },
      ],
      features: ['철거작업', '설치작업', '중량 장비', '일반 건설'],
      description: '중규모 건설 및 유지보수 작업에 많이 이용됩니다.',
    },
    {
      name: '5톤 스카이차',
      height: '45m',
      icon: '🚕',
      specs: [
        { label: '작업 높이', value: '45m' },
        { label: '작업 반경', value: '약 25m' },
        { label: '최대 적재', value: '약 5톤' },
        { label: '기동 시간', value: '약 40분' },
      ],
      pricing: [
        { duration: '1시간', price: '45만원' },
        { duration: '2시간', price: '85만원' },
        { duration: '반나절', price: '90만원' },
      ],
      features: ['대형작업', '교량점검', '최대 적재', '특수작업'],
      description: '대형 프로젝트 및 고층 건물 작업에 적합합니다.',
    },
    {
      name: '25톤 크레인',
      height: '40m',
      icon: '🏗️',
      specs: [
        { label: '작업 높이', value: '약 40m' },
        { label: '최대 양중', value: '25톤' },
        { label: '작업 반경', value: '약 30m' },
        { label: '기동 시간', value: '약 50분' },
      ],
      pricing: [
        { duration: '1시간', price: '80만원' },
        { duration: '2시간', price: '150만원' },
        { duration: '반나절', price: '200만원' },
      ],
      features: ['중장비 이동', '건설장비', '건축자재', '특수양중'],
      description: '초중량 물품의 양중이 필요한 대규모 프로젝트용입니다.',
    },
  ];

  const workProcess = [
    {
      step: '01',
      title: '상담',
      description: '전화 또는 온라인으로 프로젝트 내용 상담',
      icon: '📞',
    },
    {
      step: '02',
      title: '현장 확인',
      description: '무료 현장 방문하여 작업 계획 수립',
      icon: '🔍',
    },
    {
      step: '03',
      title: '견적 제시',
      description: '합리적인 가격으로 상세 견적 안내',
      icon: '💵',
    },
    {
      step: '04',
      title: '계약 및 배차',
      description: '계약 후 신속한 장비 배차',
      icon: '📋',
    },
    {
      step: '05',
      title: '작업 진행',
      description: '전문 기술자와 함께 안전한 작업 진행',
      icon: '⚙️',
    },
    {
      step: '06',
      title: '사후 관리',
      description: '작업 완료 후 철저한 사후 관리',
      icon: '✅',
    },
  ];

  const additionalServices = [
    {
      title: '기술자 파견',
      description: '경험 많은 전문 기술자 파견 가능',
      icon: '👨‍🔧',
    },
    {
      title: '안전 교육',
      description: '현장 안전 교육 및 지도',
      icon: '🛡️',
    },
    {
      title: '24시간 배차',
      description: '긴급 상황 대응 신속배차',
      icon: '⏰',
    },
    {
      title: '전국 배차',
      description: '청주 및 인근 지역 전국 배차 가능',
      icon: '🚚',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1a2744] to-[#2a3f5f] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            서비스 안내
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            최고의 고소작업차와 크레인 렌탈 서비스를 제공합니다
          </p>
        </div>
      </section>

      {/* Equipment Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            보유 장비 상세 사양
          </h2>
          <div className="space-y-12">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-[#1a2744] to-[#2a3f5f] text-white p-6 md:p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-5xl mb-3">{item.icon}</div>
                      <h3 className="text-3xl font-bold">{item.name}</h3>
                      <p className="text-[#f59e0b] text-lg font-bold mt-2">
                        최대 높이: {item.height}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-gray-700 mb-6 text-lg">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Specs */}
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-[#1a2744]">
                        기술 사양
                      </h4>
                      <div className="space-y-3">
                        {item.specs.map((spec, i) => (
                          <div key={i} className="flex justify-between py-2 border-b border-gray-200">
                            <span className="font-medium text-gray-700">
                              {spec.label}
                            </span>
                            <span className="text-[#f59e0b] font-bold">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-[#1a2744]">
                        기본 요금
                      </h4>
                      <div className="space-y-3">
                        {item.pricing.map((price, i) => (
                          <div key={i} className="flex justify-between py-2 border-b border-gray-200">
                            <span className="font-medium text-gray-700">
                              {price.duration}
                            </span>
                            <span className="text-[#f59e0b] font-bold">
                              {price.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-[#1a2744]">
                      적용 작업
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {item.features.map((feature, i) => (
                        <span
                          key={i}
                          className="bg-[#f59e0b] text-[#1a2744] px-4 py-2 rounded-full font-semibold text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            작업 진행 절차
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workProcess.map((process, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{process.icon}</div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-[#f59e0b] mb-2">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                      {process.title}
                    </h3>
                    <p className="text-gray-600">
                      {process.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            추가 서비스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a2744] to-[#2a3f5f] text-white p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="bg-blue-50 border-l-4 border-[#f59e0b] py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-bold text-[#1a2744] mb-4">
            📌 요금 안내
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm md:text-base">
            <p className="text-gray-700">
              ✓ 위 요금은 기본 요금이며, 지역 및 상황에 따라 변동될 수 있습니다
            </p>
            <p className="text-gray-700">
              ✓ 야간, 공휴일 할증료가 적용될 수 있습니다
            </p>
            <p className="text-gray-700">
              ✓ 자세한 견적은 전화 또는 온라인 상담을 통해 안내해드립니다
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#1a2744] to-[#2a3f5f] text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            상세한 상담이 필요하신가요?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            전문 팀이 맞춤형 솔루션을 제공합니다
          </p>
          <a
            href="tel:010-1234-5678"
            className="bg-[#f59e0b] text-[#1a2744] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#f97316] transition-all transform hover:scale-105 inline-block"
          >
            ☎️ 010-1234-5678
          </a>
        </div>
      </section>
    </div>
  );
}
