import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "공성태 | 공부 성향 테스트",
  description:
    "[공]부 [성]향 [태]스트! 12가지 질문으로 알아보는 나의 공부 유형과 찰떡 공부법을 확인해보세요.",
  openGraph: {
    title: "공성태 - 공부 성향 테스트",
    description: "12가지 질문으로 알아보는 나의 공부 DNA와 맞춤형 공부 꿀팁!",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#4f46e5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full bg-slate-100 text-slate-900 select-none">
        {children}
      </body>
    </html>
  );
}
