import type { Metadata } from "next";
import { birdseye, montserrat } from "@/app/fonts";
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";
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
      </body>
    </html>
  );
}
