import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const services = [
    {
      title: '간판 설치, 철거 작업',
      desc: '흔들림 없는 수평 작업대를 기반으로 간판 설치, 교체, 철거를 안전하고 정밀하게 수행합니다.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: '유리 시공, 샷시 작업',
      desc: '정밀한 상하좌우 조정으로 세밀한 유리 부착 및 교체가 가능하며, 최대 400kg까지 안정적으로 이동할 수 있습니다.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="12" y1="3" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      title: '페인트, 도장 공사',
      desc: '작업대를 외벽에 10cm까지 밀착시켜 바람 영향을 줄이며, 정확하고 빠르게 도색 작업을 진행합니다.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22l1-1h3l9-9" /><path d="M16 2l6 6-9.5 9.5a2 2 0 01-1.4.6H8v-3.1a2 2 0 01.6-1.4L16 2z" />
        </svg>
      ),
    },
    {
      title: '건물 외벽 청소, 보수 작업',
      desc: '장시간 흔들림 없이 유지되는 작업대로 정확한 외벽 청소가 가능합니다.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: '조립식 건물 및 패널 공사',
      desc: '고층 및 협소 지역에서도 안정적인 패널 설치·보수가 가능합니다.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="6" width="22" height="12" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /><line x1="8" y1="6" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="18" />
        </svg>
      ),
    },
    {
      title: '판넬 방수, 보수 작업',
      desc: '세밀한 작업이 필요한 방수 공사에서 뛰어난 조작성과 안정성을 제공합니다.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image src="/images/skyline.jpg" alt="고층 건물" fill className="object-cover scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark/85 to-dark-light/70" />
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Decorative blobs */}
        <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-accent/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-[5%] w-72 h-72 bg-blue/8 rounded-full blur-[80px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 bg-white/10 text-white/90 px-5 py-2.5 rounded-full text-sm font-medium mb-10 backdrop-blur-md border border-white/10 animate-fade-in-up">
              <span className="w-2 h-2 bg-accent rounded-full" />
              24시간 365일 친절 상담
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.08] mb-8 animate-fade-in-up delay-100">
              청주 지역<br />
              <span className="text-gradient">고소작업</span>의 기준
            </h1>
            <p className="text-white/60 text-lg md:text-xl mb-12 leading-relaxed max-w-lg animate-fade-in-up delay-200">
              청주를 중심으로 충북 전 지역에서 스카이차·사다리차 고소작업 서비스를 제공하는 전문 업체입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a
                href="tel:010-5811-5297"
                className="inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-2xl font-bold text-base transition-all hover:shadow-xl hover:shadow-accent/25 animate-pulse-glow"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                010-5811-5297
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-base transition-all"
              >
                서비스 안내
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 md:py-36 bg-slate-50 bg-dots relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="section-divider mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5">서비스 안내</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">스카이차·사다리차를 활용한 다양한 고소작업 서비스</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="group relative bg-white p-8 rounded-2xl card-lift border border-gray-100/80">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-dark to-dark-lighter text-accent flex items-center justify-center mb-7 group-hover:from-accent group-hover:to-accent-dark group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 text-dark">{s.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/services" className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold text-[15px] transition-colors group">
              전체 서비스 보기
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-dark bg-grid" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <div className="section-divider mb-8" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                안전하고 체계적인<br />
                <span className="text-gradient">전문 고소작업</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-7">
                오랜 기간 현장에서 축적해온 실무 경험과 노하우를 바탕으로 숙련된 전문 기사들이 직접 장비를 운용하며,
                현장 조건과 작업 목적에 맞춘 맞춤형 작업 방식을 제안합니다.
              </p>
              <p className="text-white/40 leading-relaxed mb-10">
                자동 수평 작업대와 최신 안전 센서가 장착된 장비를 운영하고 있으며,
                정기적인 점검과 철저한 관리로 항상 안정적인 작업 환경을 유지하고 있습니다.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/10 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all group">
                회사소개 보기
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-blue/20 rounded-3xl blur-2xl opacity-40" />
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image src="/images/crane.jpg" alt="작업 현장" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">궁금한 점은 언제든 편하게 물어보세요!</h2>
          <p className="text-white/80 text-lg mb-10">24시간 365일 친절 상담, 클릭시 전화 연결!</p>
          <a
            href="tel:010-5811-5297"
            className="inline-flex items-center justify-center gap-3 bg-dark hover:bg-dark-light text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:shadow-2xl active:scale-[0.98]"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
            010-5811-5297
          </a>
        </div>
      </section>
    </div>
  );
}
