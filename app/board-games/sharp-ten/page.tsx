import type { Metadata } from "next";
import { ProductGallery, type GalleryImage } from "@/app/_components/ProductGallery";
import { YouTubeEmbed } from "@/app/_components/YouTubeEmbed";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "十分機靈",
  description:
    "10 選 1 的緊湊問答遊戲。每道題目都有10個可能的答案，運動、常識、歷史、動漫應有盡有，一定有一種能夠考倒你！",
};

const info = [
  ["遊戲人數", "2-8 人"],
  ["遊戲時間", "20+ 分鐘"],
  ["適合年齡", "10+ 歲"],
  ["售價", "590元（消費滿2000元免運）"],
];

const galleryImages: GalleryImage[] = [
  { src: "/images/products/sharp-ten/gallery-1.png", alt: "十分機靈桌遊實物照 1" },
  { src: "/images/products/sharp-ten/gallery-2.png", alt: "十分機靈桌遊實物照 2" },
];

export default function SharpTenPage() {
  return (
    <Container className="py-16">
      {/* 原站手機版是「文字先、圖庫在後」，桌機版才是圖庫在左；用 order- 讓兩種螢幕各自對齊原站順序 */}
      <div className="grid gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <ProductGallery images={galleryImages} />
        </div>

        <div className="order-1 md:order-2">
        <h1 className="text-3xl font-bold text-ink">十分機靈</h1>
        <p className="mt-4 text-ink/70">
          《十分機靈》是一款問答遊戲。每道題目都有10個可能的答案，所有玩家都可以在緊湊的遊戲過程，享受刺激的答題樂趣。問題可能是運動、常識、歷史、動漫等，一定有一種能夠考倒你！
        </p>
        <p className="mt-4 text-sm text-ink/50">＊本款桌遊由柏龍玩具代理，阿普蛙協助設計部分題目。</p>

        <h2 className="mt-8 text-lg font-bold text-ink">桌遊資訊</h2>
        <dl className="mt-2 grid grid-cols-2 gap-y-1 text-sm text-ink/70">
          {info.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="font-semibold text-ink">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeNjwzit1cjicwRAKBiZfYBmvYPlf8z7C4FX6mtrHeE4nO0TQ/viewform"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
          >
            購買桌遊
          </a>
        </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-2xl">
        <h2 className="text-lg font-bold text-ink">遊戲介紹影片</h2>
        <div className="mt-4">
          <YouTubeEmbed id="-zIuPb21tHc" title="十分機靈桌遊教學影片" />
        </div>
      </div>
    </Container>
  );
}
