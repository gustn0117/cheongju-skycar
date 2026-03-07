import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1a2744] text-white mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Company Info */}
          <div>
            <h3 className="flex items-center gap-2 font-bold text-lg mb-4">
              <span className="text-2xl">☁️</span>
              청주스카이차
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              청주 지역 최고의 고소작업차 전문 렌탈 업체입니다.<br/>
              신속한 배차와 안전한 작업을 약속드립니다.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 충청북도 청주시</p>
              <p>📞 010-1234-5678</p>
              <p>⏰ 08:00 ~ 17:00 (연중무휴)</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#f59e0b] transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f59e0b] transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#f59e0b] transition-colors">
                  서비스안내
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f59e0b] transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">서비스</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>✓ 1톤 스카이차 (18m)</li>
              <li>✓ 3.5톤 스카이차 (30m)</li>
              <li>✓ 5톤 스카이차 (45m)</li>
              <li>✓ 25톤 크레인</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2a3f5f]"></div>

        {/* Bottom */}
        <div className="py-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 청주스카이차. All rights reserved.</p>
          <p className="mt-2">청주 고소작업차 전문 | 24시간 신속배차 | KC안전인증</p>
        </div>
      </div>
    </footer>
  );
}
