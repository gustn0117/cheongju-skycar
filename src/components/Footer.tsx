import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-14">
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-3">청주스카이차</h3>
            <p className="text-sm leading-relaxed">
              청주 지역 최고의 고소작업차 전문 렌탈 업체.
              신속한 배차와 안전한 작업을 약속드립니다.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">메뉴</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: '홈', href: '/' },
                { label: '회사소개', href: '/about' },
                { label: '서비스안내', href: '/services' },
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
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">보유 장비</h4>
            <ul className="space-y-2.5 text-sm">
              <li>1톤 스카이차 (18m)</li>
              <li>3.5톤 스카이차 (30m)</li>
              <li>5톤 스카이차 (45m)</li>
              <li>25톤 크레인 (40m)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">연락처</h4>
            <ul className="space-y-2.5 text-sm">
              <li>충청북도 청주시</li>
              <li>
                <a href="tel:010-1234-5678" className="text-amber hover:text-amber-dark font-semibold transition-colors">
                  010-1234-5678
                </a>
              </li>
              <li>상담시간 08:00 ~ 17:00</li>
              <li>24시간 긴급배차 가능</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs">
          <p>&copy; 2026 청주스카이차. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
