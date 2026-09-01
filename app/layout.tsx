import type { Metadata } from "next";
import { birdseye, montserrat } from "@/app/fonts";
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";
import { Analytics } from "@/app/_components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wasupstudio.com"),
  title: {
    default: "阿普蛙工作室｜遊戲,公民,教育 - 阿普蛙 Wa's UP",
    template: "%s - 阿普蛙工作室｜遊戲,公民,教育",
  },
  description:
    "阿普蛙致力於用遊戲影響教育，透過「理論」結合「遊戲機制」並且「實際行動」，培養現代公民「慎思明辨」及「關懷社會」之能力。",
  keywords: [
    "阿普蛙",
    "阿普蛙工作室",
    "遊戲",
    "教育",
    "遊戲化",
    "wa's up",
    "公民",
    "獨立思考",
    "批判性思考",
    "議題桌遊",
  ],
  // 原站首頁有這張 google-site-verification meta（值照抄），另外 DNS 上還有一筆
  // 4muqbk3t4xrn 的 CNAME 也是 Google 網域驗證用的。兩種驗證方式都要保留，
  // 否則 Search Console / Workspace 的網域驗證會失效。
  verification: {
    google: "6hxDApw91mv30j6kMZulR1XyVl6A93F3wSj7Z_k88uc",
  },
  openGraph: {
    title: "阿普蛙 Wa's UP",
    description:
      "阿普蛙致力於用遊戲影響教育，透過「理論」結合「遊戲機制」並且「實際行動」，培養現代公民「慎思明辨」及「關懷社會」之能力。",
    url: "https://www.wasupstudio.com",
    siteName: "阿普蛙工作室｜遊戲,公民,教育",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-Hant" className={`${birdseye.variable} ${montserrat.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
