import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-16">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg">청주 스카이차</h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              청주를 중심으로 충북 전 지역에서 스카이차·사다리차 고소작업 서비스를 제공하는 전문 업체입니다.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">메뉴</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: '홈', href: '/' },
                { label: '회사소개', href: '/about' },
                { label: '서비스 안내', href: '/services' },
                { label: '문의하기', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-500 hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">연락처</h4>
            <div className="space-y-3 text-sm">
              <p>
                <a href="tel:010-5811-5297" className="text-accent hover:text-accent-light font-bold text-lg transition-colors">
                  010-5811-5297
                </a>
              </p>
              <p className="text-gray-500">24시간 365일 상담 가능</p>
              <p className="text-gray-500">충청북도 청주시</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] py-6 text-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} 청주 스카이차. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
