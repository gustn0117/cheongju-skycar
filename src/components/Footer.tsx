import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-14">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">청주 스카이차</h3>
            <p className="text-sm leading-relaxed">
              청주를 중심으로 충북 전 지역에서 스카이차·사다리차 고소작업 서비스를 제공하는 전문 업체입니다.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">메뉴</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: '홈', href: '/' },
                { label: '회사소개', href: '/about' },
                { label: '서비스 안내', href: '/services' },
                { label: '문의하기', href: '/contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">연락처</h4>
            <div className="space-y-2.5 text-sm">
              <p>
                <a href="tel:010-5811-5297" className="text-amber hover:text-amber-dark font-bold text-lg transition-colors">
                  010-5811-5297
                </a>
              </p>
              <p>24시간 365일 상담 가능</p>
              <p>충청북도 청주시</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} 청주 스카이차. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
