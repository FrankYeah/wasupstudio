import type { ReactNode } from "react";
import { Container } from "@/app/_components/Container";
import { withBasePath } from "@/app/_components/SiteImage";

// 原站「想設計／買桌遊／找課程」這三個總覽頁的 header banner，跟首頁一樣是 wsite-header-section
// 掛 CSS background-image（不是 <img> 標籤，fetch-content.sh 抓不到，屬性同一種擷取盲區，
// 見 MIGRATION-PLAN.md 首頁那筆記錄）。差別是這三頁的底圖本身「沒有」把標題文字畫進去
// （量測 DOM 發現標題是真正的 <h2 class="wsite-content-title">，white／80px／font-weight:100，
// 疊在透明 header 底下），所以這裡直接把原始底圖（灰底+蛙圖或圓形圖騰，貼齊左或右邊緣裁切）
// 存成檔案當背景圖用，上面疊真正的 DOM 標題文字，不用像首頁那樣費工拆解重畫。
type PageBannerProps = {
  image: string;
  imagePosition?: string;
  title?: ReactNode;
  align?: "left" | "right";
  className?: string;
};

export function PageBanner({
  image,
  imagePosition = "center",
  title,
  align = "left",
  className = "h-[260px] md:h-[360px]",
}: PageBannerProps) {
  return (
    <section
      className={`relative overflow-hidden bg-[#e6e6e6] ${className}`}
      style={{
        backgroundImage: `url(${withBasePath(image)})`,
        backgroundSize: "cover",
        backgroundPosition: imagePosition,
      }}
    >
      {title && (
        <Container className="relative flex h-full items-center pt-20 md:pt-24">
          <h1
            className={
              "w-full text-3xl leading-none font-thin text-white sm:text-5xl md:text-6xl lg:text-7xl " +
              (align === "right" ? "text-right" : "text-left")
            }
          >
            {title}
          </h1>
        </Container>
      )}
    </section>
  );
}
