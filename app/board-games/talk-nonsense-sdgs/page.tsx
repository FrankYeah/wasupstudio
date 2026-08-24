import type { Metadata } from "next";
import { ProductGallery, type GalleryImage } from "@/app/_components/ProductGallery";
import { YouTubeEmbed } from "@/app/_components/YouTubeEmbed";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "瞎掰王SDGs教育版",
  description:
    "SDGs 聯合國17項永續發展目標 × 瞎掰王。以SDGs 17項永續發展目標設計題目的派對遊戲，一盒就能全班分組進行，寓教於樂訓練口條與自信表達。",
};

const features = [
  "以SDGs17項永續發展目標來設計題目，共150題。",
  "只需要一盒就可以全班分組進行，老師操作無負擔！",
  "教育版增加許多方便課堂操作的配件。",
  "培養學生對議題的敏感度，並訓練玩家口語表達及邏輯思考能力。",
];

const info = [
  ["適合人數", "3-6人(組)"],
  ["適合年齡", "10歲以上"],
  ["遊戲時間", "30-45分鐘（一堂課內能夠操作完畢）"],
  ["售價", "690元（消費滿2000免運）"],
];

const galleryImages: GalleryImage[] = [
  { src: "/images/products/talk-nonsense-sdgs/gallery-1.jpg", alt: "瞎掰王SDGs教育版桌遊實物照 1" },
  { src: "/images/products/talk-nonsense-sdgs/gallery-2.jpg", alt: "瞎掰王SDGs教育版桌遊實物照 2" },
  { src: "/images/products/talk-nonsense-sdgs/gallery-3.jpg", alt: "瞎掰王SDGs教育版桌遊實物照 3" },
  { src: "/images/products/talk-nonsense-sdgs/gallery-4.jpg", alt: "瞎掰王SDGs教育版桌遊實物照 4" },
  { src: "/images/products/talk-nonsense-sdgs/gallery-5.jpg", alt: "瞎掰王SDGs教育版桌遊實物照 5" },
  { src: "/images/products/talk-nonsense-sdgs/gallery-6.jpg", alt: "瞎掰王SDGs教育版桌遊實物照 6" },
  { src: "/images/products/talk-nonsense-sdgs/gallery-7.jpg", alt: "瞎掰王SDGs教育版桌遊實物照 7" },
];

export default function TalkNonsenseSdgsPage() {
  return (
    <Container className="py-16">
      {/* 原站手機版是「文字先、圖庫在後」，桌機版才是圖庫在左；用 order- 讓兩種螢幕各自對齊原站順序 */}
      <div className="grid gap-12 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <ProductGallery images={galleryImages} />
        </div>

        <div className="order-1 md:order-2">
        <p className="text-sm font-semibold text-brand-green">SDGs 聯合國17項永續發展目標</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">瞎掰王SDGs教育版</h1>
        <p className="mt-4 text-ink/70">
          千奇百怪的冷知識＋瞎掰人瘋狂胡扯＋SDGs 17項永續發展目標＝寓教於樂的派對遊戲
        </p>

        <h2 className="mt-8 text-lg font-bold text-ink">遊戲介紹</h2>
        <p className="mt-2 text-ink/70">
          本桌遊是以「永續發展目標」為主軸設計題目。為求人類和地球的現在與未來的和平與繁榮，人們做了不少努力，也必須面對許多未知和威脅。讓我們在遊戲中學習相關的議題，並且在其中訓練口條與自信表達。
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
            href="https://forms.gle/94eFhwcHEQG1hAWS6"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
          >
            購買桌遊
          </a>
          <a
            href="https://forms.gle/EdEpqW4dK4GH5Pmg8"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink px-6 py-3 font-semibold text-ink"
          >
            邀約課程
          </a>
        </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="text-lg font-bold text-ink">遊戲介紹影片</h2>
        <div className="mt-4">
          <YouTubeEmbed id="43xpnsuzx0A" title="瞎掰王SDGs教育版桌遊教學影片" />
        </div>
      </div>
    </Container>
  );
}
