import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: '청주 스카이차 - 스카이차·사다리차 고소작업 전문',
  description: '청주를 중심으로 충북 전 지역 스카이차·사다리차 고소작업 전문 업체. 간판 설치·철거, 외벽 공사, 유리 시공, 도장, 방수, 패널 공사. 24시간 365일 상담. 010-5811-5297',
  keywords: ['청주', '스카이차', '사다리차', '고소작업', '간판설치', '외벽공사', '청주스카이차'],
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
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
