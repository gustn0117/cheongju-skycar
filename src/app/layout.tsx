import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: '청주스카이차 - 고소작업차 전문 렌탈',
  description: '청주 지역 최고의 고소작업차 전문 렌탈 업체. 24시간 신속배차, 안전최우선, 합리적 가격. 1톤~5톤 스카이차, 25톤 크레인 보유.',
  keywords: ['청주', '스카이차', '고소작업차', '크레인', '렌탈', '청주스카이차'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-navy">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
