import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    { title: '간판 설치, 철거 작업', desc: '흔들림 없는 수평 작업대를 기반으로 간판 설치, 교체, 철거를 안전하고 정밀하게 수행합니다.' },
    { title: '유리 시공, 샷시 작업', desc: '정밀한 상하좌우 조정으로 세밀한 유리 부착 및 교체가 가능하며, 최대 400kg까지 안정적으로 이동할 수 있습니다.' },
    { title: '페인트, 도장 공사', desc: '작업대를 외벽에 10cm까지 밀착시켜 바람 영향을 줄이며, 정확하고 빠르게 도색 작업을 진행합니다.' },
    { title: '건물 외벽 청소, 보수 작업', desc: '장시간 흔들림 없이 유지되는 작업대로 정확한 외벽 청소가 가능합니다.' },
    { title: '조립식 건물 및 패널 공사', desc: '고층 및 협소 지역에서도 안정적인 패널 설치·보수가 가능합니다.' },
    { title: '판넬 방수, 보수 작업', desc: '세밀한 작업이 필요한 방수 공사에서 뛰어난 조작성과 안정성을 제공합니다.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <Image src="/images/skyline.jpg" alt="고층 건물" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/98 via-navy/90 to-navy/50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber/15 text-amber px-4 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm border border-amber/20 animate-fade-in-up">
              <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
              24시간 365일 친절 상담
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 animate-fade-in-up delay-100">
              청주 지역<br />
              <span className="text-gradient">고소작업</span>의 기준
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-lg animate-fade-in-up delay-200">
              청주를 중심으로 충북 전 지역에서 스카이차·사다리차 고소작업 서비스를 제공하는 전문 업체입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a
                href="tel:010-5811-5297"
                className="inline-flex items-center justify-center gap-2.5 bg-amber hover:bg-amber-dark text-navy-dark px-8 py-4 rounded-xl font-bold text-base transition-all hover:shadow-lg hover:shadow-amber/30 animate-pulse-glow"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                010-5811-5297
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 glass text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-base transition-all"
              >
                서비스 안내
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">서비스 안내</h2>
            <p className="text-gray-500 max-w-xl mx-auto">스카이차·사다리차를 활용한 다양한 고소작업 서비스</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="group relative p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl hover:-translate-y-1 transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-navy text-amber flex items-center justify-center mb-6 group-hover:bg-amber group-hover:text-navy-dark transition-all">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 text-amber hover:text-amber-dark font-semibold transition-colors">
              자세히 보기
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image src="/images/construction.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy-dark/97" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-amber font-semibold text-sm tracking-wider uppercase mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">청주 스카이차</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                오랜 기간 현장에서 축적해온 실무 경험과 노하우를 바탕으로 숙련된 전문 기사들이 직접 장비를 운용하며,
                현장 조건과 작업 목적에 맞춘 맞춤형 작업 방식을 제안합니다.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                자동 수평 작업대와 최신 안전 센서가 장착된 장비를 운영하고 있으며,
                정기적인 점검과 철저한 관리로 항상 안정적인 작업 환경을 유지하고 있습니다.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-navy-dark px-6 py-3 rounded-xl font-bold text-sm transition-all">
                회사소개 보기
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/crane.jpg" alt="작업 현장" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
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
