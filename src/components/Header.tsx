'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: '홈', href: '/' },
    { label: '회사소개', href: '/about' },
    { label: '서비스안내', href: '/services' },
    { label: '문의하기', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1a2744] text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:text-[#f59e0b] transition-colors">
            <span className="text-2xl">☁️</span>
            <span>청주스카이차</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#f59e0b] transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:block">
            <a
              href="tel:010-1234-5678"
              className="bg-[#f59e0b] text-[#1a2744] px-6 py-2 rounded-full font-bold hover:bg-[#f97316] transition-colors"
            >
              ☎️ 010-1234-5678
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl hover:text-[#f59e0b] transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-[#2a3f5f]">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-4 hover:bg-[#2a3f5f] hover:text-[#f59e0b] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:010-1234-5678"
              className="block py-3 px-4 text-[#f59e0b] font-bold hover:bg-[#2a3f5f] transition-colors"
            >
              ☎️ 010-1234-5678
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
