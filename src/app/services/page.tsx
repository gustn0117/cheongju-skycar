import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const equipment = [
    {
      name: '1톤 스카이차',
      desc: '소규모 간판 및 외벽 작업에 최적화된 장비입니다.',
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
      tags: ['간판작업', '외벽작업', '경량 장비', '소규모 작업'],
    },
    {
      name: '3.5톤 스카이차',
      desc: '중규모 건설 및 유지보수 작업에 많이 이용됩니다.',
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
      tags: ['철거작업', '설치작업', '중량 장비', '일반 건설'],
    },
    {
      name: '5톤 스카이차',
      desc: '대형 프로젝트 및 고층 건물 작업에 적합합니다.',
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
      tags: ['대형작업', '교량점검', '최대 적재', '특수작업'],
    },
    {
      name: '25톤 크레인',
      desc: '초중량 물품의 양중이 필요한 대규모 프로젝트용입니다.',
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
      tags: ['중장비 이동', '건설장비', '건축자재', '특수양중'],
    },
  ];

  const process = [
    { step: '01', title: '상담', desc: '전화 또는 온라인으로 프로젝트 내용 상담' },
    { step: '02', title: '현장 확인', desc: '무료 현장 방문하여 작업 계획 수립' },
    { step: '03', title: '견적 제시', desc: '합리적인 가격으로 상세 견적 안내' },
    { step: '04', title: '계약·배차', desc: '계약 후 신속한 장비 배차' },
    { step: '05', title: '작업 진행', desc: '전문 기술자와 함께 안전하게 작업' },
    { step: '06', title: '사후 관리', desc: '작업 완료 후 철저한 사후 관리' },
  ];

  const extras = [
    {
      title: '기술자 파견',
      desc: '경험 많은 전문 기술자 파견 가능',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: '안전 교육',
      desc: '현장 안전 교육 및 지도',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: '24시간 배차',
      desc: '긴급 상황 대응 신속배차',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: '전국 배차',
      desc: '청주 및 인근 지역 전국 배차 가능',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center">
        <Image src="/images/hero.jpg" alt="건설 현장" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Services</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">서비스 안내</h1>
          <p className="text-gray-300 text-lg max-w-lg">최고의 고소작업차와 크레인 렌탈 서비스를 제공합니다</p>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Equipment</p>
            <h2 className="text-3xl md:text-4xl font-bold">보유 장비 상세</h2>
          </div>
          <div className="space-y-6">
            {equipment.map((eq, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all group">
                <div className="bg-navy group-hover:bg-navy-light transition-colors px-6 md:px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{eq.name}</h3>
                    <p className="text-gray-400 mt-1 text-sm">{eq.desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {eq.specs.slice(0, 1).map((s, j) => (
                      <span key={j} className="bg-amber/20 text-amber px-4 py-1.5 rounded-lg text-sm font-bold">{s.label} {s.value}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">기술 사양</h4>
                      <div className="space-y-3">
                        {eq.specs.map((s, j) => (
                          <div key={j} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                            <span className="text-gray-500 text-sm">{s.label}</span>
                            <span className="font-bold text-sm">{s.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">기본 요금</h4>
                      <div className="space-y-3">
                        {eq.pricing.map((p, j) => (
                          <div key={j} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                            <span className="text-gray-500 text-sm">{p.duration}</span>
                            <span className="font-bold text-amber text-sm">{p.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">적용 작업</h4>
                      <div className="flex flex-wrap gap-2">
                        {eq.tags.map((tag, j) => (
                          <span key={j} className="bg-amber/10 text-amber-dark text-xs px-3 py-1.5 rounded-lg font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image src="/images/construction.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/95" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">작업 진행 절차</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((p, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
                <div className="text-4xl font-black text-amber/20 mb-3">{p.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Additional</p>
            <h2 className="text-3xl md:text-4xl font-bold">추가 서비스</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extras.map((ex, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-gray-100 hover:border-navy hover:bg-navy transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber/10 text-amber mb-5 group-hover:bg-amber/20 transition-colors">
                  {ex.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">{ex.title}</h3>
                <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">{ex.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="bg-amber/5 border-l-4 border-amber">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 className="font-bold mb-3">요금 안내</h3>
          <ul className="space-y-1.5 text-sm text-gray-600">
            <li>• 위 요금은 기본 요금이며, 지역 및 상황에 따라 변동될 수 있습니다</li>
            <li>• 야간, 공휴일 할증료가 적용될 수 있습니다</li>
            <li>• 자세한 견적은 전화 또는 온라인 상담을 통해 안내해드립니다</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">상세한 상담이 필요하신가요?</h2>
          <p className="text-gray-400 text-lg mb-10">전문 팀이 맞춤형 솔루션을 제공합니다</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-1234-5678"
              className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-navy-dark px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-amber/25"
            >
              010-1234-5678
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white/10 border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              온라인 문의
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
