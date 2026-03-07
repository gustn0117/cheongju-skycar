import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const equipment = [
    {
      name: '1톤 스카이차',
      height: 18,
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
      badge: '가장 인기',
    },
    {
      name: '3.5톤 스카이차',
      height: 30,
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
      badge: '',
    },
    {
      name: '5톤 스카이차',
      height: 45,
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
      badge: '최대 높이',
    },
    {
      name: '25톤 크레인',
      height: 40,
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
      badge: '최대 양중',
    },
  ];

  const process = [
    { step: '01', title: '상담', desc: '전화 또는 온라인으로 프로젝트 내용 상담', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
    )},
    { step: '02', title: '현장 확인', desc: '무료 현장 방문하여 작업 계획 수립', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
    )},
    { step: '03', title: '견적 제시', desc: '합리적인 가격으로 상세 견적 안내', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>
    )},
    { step: '04', title: '계약·배차', desc: '계약 후 신속한 장비 배차', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
    )},
    { step: '05', title: '작업 진행', desc: '전문 기술자와 함께 안전하게 작업', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>
    )},
    { step: '06', title: '사후 관리', desc: '작업 완료 후 철저한 사후 관리', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
    )},
  ];

  const extras = [
    { title: '기술자 파견', desc: '경험 많은 전문 기술자 파견 가능', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    )},
    { title: '안전 교육', desc: '현장 안전 교육 및 지도', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    )},
    { title: '24시간 배차', desc: '긴급 상황 대응 신속배차', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    )},
    { title: '전국 배차', desc: '청주 및 인근 지역 전국 배차 가능', icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
    )},
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image src="/images/hero.jpg" alt="건설 현장" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/98 via-navy/90 to-navy/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
          <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in-up">Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 animate-fade-in-up delay-100">
            장비 &<br /><span className="text-gradient">서비스 안내</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-lg animate-fade-in-up delay-200">최고의 고소작업차와 크레인 렌탈 서비스를 합리적인 가격으로 제공합니다</p>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Equipment</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">보유 장비 상세</h2>
            <p className="text-gray-500">각 장비의 사양과 요금을 확인하세요</p>
          </div>
          <div className="space-y-8">
            {equipment.map((eq, i) => (
              <div key={i} className="group rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all hover:border-amber/30">
                <div className="bg-navy group-hover:bg-navy-light transition-colors px-6 md:px-10 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-amber/20 flex items-center justify-center shrink-0">
                      <span className="text-amber font-black text-xl">{eq.height}m</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-white">{eq.name}</h3>
                        {eq.badge && (
                          <span className="text-xs font-bold bg-amber text-navy-dark px-3 py-1 rounded-full">{eq.badge}</span>
                        )}
                      </div>
                      <p className="text-gray-400 mt-1 text-sm">{eq.desc}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                        <span className="w-6 h-px bg-amber" />기술 사양
                      </h4>
                      <div className="space-y-3">
                        {eq.specs.map((s, j) => (
                          <div key={j} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
                            <span className="text-gray-500 text-sm">{s.label}</span>
                            <span className="font-bold text-sm">{s.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                        <span className="w-6 h-px bg-amber" />기본 요금
                      </h4>
                      <div className="space-y-3">
                        {eq.pricing.map((p, j) => (
                          <div key={j} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
                            <span className="text-gray-500 text-sm">{p.duration}</span>
                            <span className="font-bold text-amber text-sm">{p.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                        <span className="w-6 h-px bg-amber" />적용 작업
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {eq.tags.map((tag, j) => (
                          <span key={j} className="bg-gray-50 text-gray-600 text-xs px-3.5 py-2 rounded-xl font-medium border border-gray-100">
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
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image src="/images/construction.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy-dark/97" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">작업 진행 절차</h2>
            <p className="text-gray-400">전화 한 통으로 시작되는 체계적인 프로세스</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((p, i) => (
              <div key={i} className="group glass rounded-2xl p-8 hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber/10 text-amber flex items-center justify-center group-hover:bg-amber group-hover:text-navy-dark transition-all">
                    {p.icon}
                  </div>
                  <span className="text-3xl font-black text-white/10 group-hover:text-amber/20 transition-colors">{p.step}</span>
                </div>
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
          <div className="text-center mb-20">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Additional</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">추가 서비스</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extras.map((ex, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:bg-navy transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-amber/10 text-amber flex items-center justify-center mb-5 group-hover:bg-amber/20 transition-colors">
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
      <section className="bg-amber/5 border-y border-amber/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-amber/10 text-amber flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
            </div>
            <div>
              <h3 className="font-bold mb-2">요금 안내</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• 위 요금은 기본 요금이며, 지역 및 상황에 따라 변동될 수 있습니다</li>
                <li>• 야간, 공휴일 할증료가 적용될 수 있습니다</li>
                <li>• 자세한 견적은 전화 또는 온라인 상담을 통해 안내해드립니다</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image src="/images/skyline.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 to-navy/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">상세한 상담이 필요하신가요?</h2>
          <p className="text-gray-400 text-lg mb-10">전문 팀이 맞춤형 솔루션을 제공합니다</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-1234-5678"
              className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-navy-dark px-10 py-5 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-amber/30 animate-pulse-glow"
            >
              010-1234-5678
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center glass text-white hover:bg-white/15 px-10 py-5 rounded-xl font-semibold text-lg transition-all"
            >
              온라인 문의
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
