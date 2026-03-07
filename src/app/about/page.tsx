import Image from 'next/image';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <Image src="/images/crane.jpg" alt="작업 현장" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/98 via-navy/90 to-navy/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
          <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-4 animate-fade-in-up">About Us</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 animate-fade-in-up delay-100">
            청주 지역 고소작업의 기준,<br /><span className="text-gradient">청주 스카이차</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl animate-fade-in-up delay-200">
            청주스카이차는 청주를 중심으로 충북 전 지역에서 스카이차·사다리차 고소작업 서비스를 제공하는 전문 업체입니다.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Text */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <div className="w-12 h-1 bg-amber rounded-full mb-8" />
                <p className="text-gray-700 text-lg leading-[1.9]">
                  청주스카이차는 청주를 중심으로 충북 전 지역에서 스카이차와 사다리차를 활용한 각종 고소작업 서비스를 제공하는 전문 업체로
                  간판 설치 및 철거, 외벽 공사, 유리 시공, 페인트 도장, 방수 작업, 건물 외벽 청소, 조립식 건물 및 판넬 시공,
                  각종 건축 자재 상·하차, 촬영 및 특수 작업 등 다양한 현장 업무를 안전하고 체계적으로 수행하고 있습니다.
                </p>
              </div>

              <p className="text-gray-700 text-lg leading-[1.9]">
                오랜 기간 현장에서 축적해온 실무 경험과 노하우를 바탕으로 숙련된 전문 기사들이 직접 장비를 운용하며,
                단순히 장비만 제공하는 방식이 아닌 현장 조건과 작업 목적에 맞춘 맞춤형 작업 방식을 제안함으로써
                작업 효율을 높이고 불필요한 위험 요소를 최소화하고 있습니다. 모든 작업은 사전 상담과 현장 상황 분석을 통해 진행되며,
                작업 높이와 접근성, 주변 구조물 및 도로 환경 등을 종합적으로 고려하여 가장 적합한 장비와 공법을
                선택함으로써 공사 시간 단축과 비용 절감을 동시에 실현하고 있습니다.
              </p>

              <p className="text-gray-700 text-lg leading-[1.9]">
                청주스카이차는 자동 수평 작업대와 최신 안전 센서가 장착된 장비를 운영하고 있으며,
                정기적인 점검과 철저한 관리로 항상 안정적인 작업 환경을 유지하고 있어 장시간 고소작업에서도
                흔들림 없는 정밀한 시공이 가능합니다. 또한 주·야간 작업 모두 대응 가능한 운영 체계를 갖추고 있어
                급하게 발생하는 긴급 작업이나 일정 조정이 필요한 현장에도 신속하게 대응할 수 있으며,
                지역 기반의 빠른 출동 시스템을 통해 고객의 불편을 최소화하고 있습니다.
              </p>

              <p className="text-gray-700 text-lg leading-[1.9]">
                무엇보다도 청주스카이차는 모든 작업에서 &lsquo;안전&rsquo;을 최우선 가치로 두고 작업자와
                현장 주변의 안전 확보를 가장 중요한 기준으로 삼고 있으며, 작업 전·중·후 철저한 안전 관리와 책임 있는 시공을 통해
                신뢰받는 서비스를 제공하고자 노력하고 있습니다. 앞으로도 청주스카이차는 청주 지역을 대표하는
                고소작업 전문 업체로서 고객의 요구에 성실하게 응답하고, 보다 안전하고 효율적인 작업 환경을
                만들기 위해 끊임없이 장비와 기술을 개선하며 고객 만족을 넘어 신뢰로 보답하는 기업이 되겠습니다.
              </p>
            </div>

            {/* Image sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="relative h-72 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/hero.jpg" alt="건설 현장" fill className="object-cover" />
                </div>
                <div className="relative h-56 rounded-2xl overflow-hidden shadow-xl">
                  <Image src="/images/about-hero.jpg" alt="전문 설계" fill className="object-cover" />
                </div>
                <div className="bg-navy rounded-2xl p-8 text-center">
                  <p className="text-amber font-black text-3xl mb-2">24 / 365</p>
                  <p className="text-gray-400 text-sm">주·야간 작업 대응 가능</p>
                </div>
              </div>
            </div>
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
