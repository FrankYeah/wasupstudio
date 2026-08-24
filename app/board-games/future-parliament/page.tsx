import type { Metadata } from "next";
import { ProductGallery, type GalleryImage } from "@/app/_components/ProductGallery";
import { YouTubeEmbed } from "@/app/_components/YouTubeEmbed";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "未來議會｜兒少表意桌遊",
  description:
    "兒童人權 × 兒少生活議題 × 表達意見。結合最新台灣兒少數據調查，並附贈教案PPT的團體桌遊，一盒就能帶著走進教室，練習表達與聆聽。",
};

const features = [
  "36個跟台灣兒少生活相關的議題及研究數據",
  "分組下注競猜，讓數據和議題添加趣味和吸引力",
  "以6頂思考帽子原型，讓參與者體驗每一個意見都同樣重要",
  "教案PPT結合兒童人權相關資訊，讓參與者在輕鬆狀態下了解兒童人權資訊",
  "只需要一盒就可以全班分組進行，更附贈教案PPT，老師操作無負擔",
];

const info = [
  ["遊戲年紀", "10歲以上"],
  ["遊戲人數", "建議4-6人（組）24-30人（團體）"],
  ["遊戲時間", "約40-100分鐘（一至兩節課）"],
  ["售價", "990元（消費滿2000元免運）"],
];

const galleryImages: GalleryImage[] = [
  { src: "/images/products/future-parliament/gallery-1.jpg", alt: "未來議會桌遊實物照 1" },
  { src: "/images/products/future-parliament/gallery-2.jpg", alt: "未來議會桌遊實物照 2" },
  { src: "/images/products/future-parliament/gallery-3.jpg", alt: "未來議會桌遊實物照 3" },
  { src: "/images/products/future-parliament/gallery-4.jpg", alt: "未來議會桌遊實物照 4" },
  { src: "/images/products/future-parliament/gallery-5.jpg", alt: "未來議會桌遊實物照 5" },
  { src: "/images/products/future-parliament/gallery-6.jpg", alt: "未來議會桌遊實物照 6" },
  { src: "/images/products/future-parliament/gallery-7.jpg", alt: "未來議會桌遊實物照 7" },
  { src: "/images/products/future-parliament/gallery-8.jpg", alt: "未來議會桌遊實物照 8" },
  { src: "/images/products/future-parliament/gallery-9.jpg", alt: "未來議會桌遊實物照 9" },
];

export default function FutureParliamentPage() {
  return (
    <Container className="py-16">
      {/* 原站手機版是「文字先、圖庫在後」，桌機版才是圖庫在左；用 order- 讓兩種螢幕各自對齊原站順序 */}
      <div className="grid gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <ProductGallery images={galleryImages} />
        </div>

        <div className="order-1 md:order-2">
        <p className="text-sm font-semibold text-brand-green">兒童人權 × 兒少生活議題 × 表達意見</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">《未來議會｜兒少表意桌遊》</h1>
        <p className="mt-4 text-ink/70">
          《未來議會》是一套針對兒少生活議題而設計的團體桌遊遊戲。希望讓老師和兒少工作者只須帶著一盒桌遊和一個教案，就能輕鬆走進教室上課；兒少也能從一場遊戲中，擴展自己的視野，了解跟自己有關的生活議題；與此同時，大人和兒少也能透過一場討論，同時練習如何好好表達自己和聆聽他人。
        </p>

        <h2 className="mt-8 text-lg font-bold text-ink">遊戲介紹</h2>
        <p className="mt-2 text-ink/70">
          這是一套結合最新台灣兒少數據調查，並附贈教案PPT的桌遊活動，可以小團體或班級方式進行活動。同時，活動的配件及遊戲可分拆進行，教案PPT也提供外國兒童人權的資料簡介及延伸活動指引，讓教師及兒少工作者可依教學需要及團體動力情況自行調整使用。
        </p>

        <h2 className="mt-8 text-lg font-bold text-ink">遊戲特色</h2>
        <ul className="mt-2 space-y-1 text-ink/70">
          {features.map((f, i) => (
            <li key={f}>
              {i + 1}. {f}
            </li>
          ))}
        </ul>

        <h2 className="mt-8 text-lg font-bold text-ink">遊戲資訊</h2>
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
            購買連結
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScTpdFbaeh221rvaEMgG_1vrh0RC_9rOEx1j8ActjGE4PiM7A/viewform"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink px-6 py-3 font-semibold text-ink"
          >
            邀約課程
          </a>
        </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-2xl">
        <h2 className="text-lg font-bold text-ink">遊戲方式</h2>
        <p className="mt-2 text-ink/70">
          遊戲以分組形式進行（最多為6組），時間約為2節課（約100分鐘）。參與者將化為不同黨派的成員，在未來議會裡進行2個回合的遊戲活動。
        </p>
        <ul className="mt-2 space-y-2 text-ink/70">
          <li>
            <span className="font-semibold text-ink">第一回合－競猜遊戲：</span>
            參與者須對每個抽出的議題的選項下注競猜，誰最了解兒少情況便能得到最多民意支持。
          </li>
          <li>
            <span className="font-semibold text-ink">第二回合－討論議案：</span>
            參與者須對議題發表自己黨派的立場意見，盡量爭取不同黨派的理解來獲取分數，成為未來議會裡有影響力的政黨。
          </li>
        </ul>

        <h2 className="mt-12 text-lg font-bold text-ink">遊戲介紹影片</h2>
        <div className="mt-4">
          <YouTubeEmbed id="IwaV9r-Buzw" title="未來議會桌遊教學影片" />
        </div>
      </div>
    </Container>
  );
}
