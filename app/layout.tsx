import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Providers } from "@/components/Providers";
import "./globals.css";

const geistSans = GeistSans;

export const metadata: Metadata = {
  title: "佐藤健一 | Kenichi Sato - Portfolio",
  description:
    "フルスタック開発者 / AIエンジニア 佐藤健一のポートフォリオサイト。システム設計、リーダーシップ、クラウドネイティブ開発の実績を紹介します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} font-sans antialiased transition-colors duration-500`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
