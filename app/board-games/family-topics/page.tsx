import type { Metadata } from "next";
import {
  ProductGallery,
  type GalleryImage,
} from "@/app/_components/ProductGallery";
import { SiteImage as Image, withBasePath } from "@/app/_components/SiteImage";
import { YouTubeEmbed } from "@/app/_components/YouTubeEmbed";
import { Container } from "@/app/_components/Container";

// 2026-08-26 補建：這頁是「孤兒頁」——原站網址 /234782099838988.html，只從課程頁的內文被連到，
// 沒掛在導覽列，所以 Phase 0 的頁面清單漏掉、Phase 1/2 都沒重建。原始碼在
// 01-content-raw/pages/board-games/family-topics/page.html（解碼後才搜得到中文）。
//
// 原站區塊結構（依 .wsite-section 的 background-color 實測，不是憑視覺切）：
//   section 0 = 430px 高的 CSS background-image hero（背景圖 + 左引言、右影片）
//   section 1 = #fceeb0 淡黃底，本頁所有內容都在這一段裡（不是白底！）
//   section 2 = #323D3F，wsite-section-elements 是空的，只是頁尾前的一條深色空白，故不重建

export const metadata: Metadata = {
  title: "家分題",
  description:
    "家分題，全球第一款性別平等教育意義桌遊。遊戲中你將放置更多的個人板塊從事娛樂活動、實踐自我價值，但家務卻不斷增加，到底是要清除家務還是推給別人呢？與家人討論，讓家庭生活更加分！",
};

// ⚠️ 已完售商品（site-data.ts 的 soldOutBoardGames 有它）。但原站這頁的購買按鈕就是寫「購買桌遊」、
// 沒有像《大政治家》那頁一樣加註「( 已售完 )」，表單連結也還活著，所以照原站原樣保留、不自行加註記。
const BUY_HREF =
  "https://docs.google.com/forms/d/e/1FAIpQLSeNjwzit1cjicwRAKBiZfYBmvYPlf8z7C4FX6mtrHeE4nO0TQ/viewform";
const COURSE_HREF =
  "https://docs.google.com/forms/d/e/1FAIpQLScTpdFbaeh221rvaEMgG_1vrh0RC_9rOEx1j8ActjGE4PiM7A/viewform";

// 原站三行標語的符號是 ▽ / ▼ / ▽ 交錯，照原樣保留
const highlights = [
  ["▽", "結合108課綱跨領域學習，性別平等教育"],
  ["▼", "區域圈地/版圖拼放遊戲"],
  ["▽", "擴充-劇情體驗版，體驗不同家庭樣貌"],
];

const specs = [
  ["遊戲人數", "2-6人"],
  ["適合年紀", "7歲以上"],
  ["遊戲時間", "20-40分鐘"],
];

const concept = [
  "「家分題」的遊戲目標，是希望促進家庭成員間有更多的對話。玩家可以每天放鬆、玩樂拿積分，也可為家人做家事，就像是現實生活中，每個人都需要在實踐人生價值與維繫家庭之間取得平衡。",
  "遊戲中的「家事」，隱喻著維繫家庭而需要承擔、付出意志力與愛的一切投入。若遇到各種突發事件（如加班、停電、接送小孩等等），更需要家庭成員彼此的愛，才能體諒每位家人的付出方式、能力、時間都有所限制，克服困難、創造幸福。",
  "雖然說，遊戲想要得高分就需要玩家費心思量，但在「家分題」的世界裡，如果玩家們以合作取代獨佔，全體玩家的總得分將會最高，玩家們也能體驗互相分享、成全的感受，也反應現實中不一定是「爭贏輸」就會比較快樂。另外，變體玩法中的「關卡模式」，也把勵馨基金會服務的家庭的生命故事化為遊戲劇本，邀請您認識其他家庭的樣貌。「家」分題的諧音為「加」分題，我們將自己的生活「加入」 家庭生活，成為「家」的一份子。",
  "透過遊戲也想告訴大家，我們可能因為性別或角色身份而承擔過多的家務，但也別忘了照顧自己的需要，才能共同維繫健康的家庭。",
];

const features = [
  ["角色扮演", "玩家可擔任家中不同的成員身分，體驗家庭生活中不同角色的立場。"],
  [
    "區域圈地",
    "玩家必須利用個人板塊擴張自己的領地，以從事更多的娛樂活動，獲得更高的積分！",
  ],
  ["合作OR競爭", "象徵家庭的互動樣貌，反映每個人在做家事與玩樂間的權衡。"],
  [
    "兩性平權",
    "據統計，台灣已婚女性從事家務的時間比男性多三倍的時間，藉由此款桌遊，讓大眾體會家人共同承擔家務的重要性，去除性別刻版印象與偏見。",
  ],
];

const credits = [
  ["遊戲設計", "Wa'sup 阿普蛙工作室有限公司"],
  ["遊戲編輯", "鹿言設計工作室"],
  ["美術設計", "鄭媛元(少女阿妙)"],
];

const galleryImages: GalleryImage[] = [
  { src: "/images/products/family-topics/gallery-1.jpg", alt: "家分題桌遊實物照 1" },
  { src: "/images/products/family-topics/gallery-2.jpg", alt: "家分題桌遊實物照 2" },
  { src: "/images/products/family-topics/gallery-3.jpg", alt: "家分題桌遊實物照 3" },
  {
    src: "/images/products/family-topics/gallery-4.png",
    alt: "家分題遊戲圖板：從上方俯視的住家平面圖，含臥室、客廳、餐廳、廚房、浴室",
  },
];

// 原站 4 支影片分屬 3 個位置：hero 右欄 1 支（無標題）、「遊戲特色」右欄 1 支（無標題），
// 最後「完整教學影片」「短教學及試玩影片」各 1 支。這裡照原站位置擺，不要全部堆到頁尾。
const HERO_VIDEO = "D05fHTx3ETM";
const FEATURE_VIDEO = "hadl8DrDhR8";
const FULL_TUTORIAL_VIDEO = "MTd3QplHIYM";
const SHORT_TUTORIAL_VIDEO = "TWwAJ1o2XOw";

export default function FamilyTopicsPage() {
  return (
    <>
      {/* 原站 hero：430px 高的 CSS background-image（第 3 種擷取盲區——掛在 CSS 上、不是 <img>、
          也不在相簿 JSON 裡），底圖 background-images/609930081.jpg 已於 2026-08-26 補抓，
          存成 public/images/banners/family-topics-hero.jpg。引言文字原站是 #fafafa（近白），
          底下墊 bg-[#323D3F] 當圖片載入前/載入失敗時的備援色，確保白字不會消失。 */}
      <section
        className="flex min-h-[430px] items-center bg-[#323D3F] bg-cover bg-center py-16"
        style={{
          backgroundImage: `url(${withBasePath("/images/banners/family-topics-hero.jpg")})`,
        }}
      >
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <blockquote className="text-center font-bold text-[#fafafa]">
              難得的星期天，當你想和家人一起玩桌遊，
              <br />
              卻發現客廳擺滿了餐盤和衣服…
              <br />
              <br />
              身為家庭的一份子，你該怎麼辦呢？
              <br />
              <br />
              運用你的智慧，整理空間讓家裡變得更舒適，
              <br />
              也別忘了和家人一起開心玩樂，拿到更多的積分！
            </blockquote>
            <YouTubeEmbed id={HERO_VIDEO} title="家分題桌遊介紹影片" />
          </div>
        </Container>
      </section>

      {/* 原站 hero 以下整段都是 #fceeb0 淡黃底（不是白底），一路包到頁尾 */}
      <section className="bg-[#fceeb0]">
        <Container className="py-16">
          {/* 原站是「文字在左、圖庫＋按鈕在右」，但全站 8 款商品頁刻意統一成「圖片在左、
              文字＋購買資訊在右」；用 order- 讓手機版仍照原站 DOM 順序（文字先、圖庫在後）。*/}
          <div className="grid gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <ProductGallery images={galleryImages} />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-sm font-semibold text-ink/70">性別平等教育桌遊</p>
              <h1 className="mt-2 text-3xl font-bold text-ink">家分題</h1>
              <hr className="mt-4 w-4/5 border-ink/20" />

              <p className="mt-4 text-ink/70">
                遊戲中，你將放置更多的個人板塊，以從事娛樂活動，來實踐自我價值！但是家務卻不斷增加，到底是要清除家務，還是推給別人呢？
                <br />
                運用你的智慧，讓你獲得最高的分數！
                <br />
                與家人討論，讓家庭生活更加分！
              </p>
              <ul className="mt-4 space-y-1 text-ink/70">
                {highlights.map(([marker, text]) => (
                  <li key={text}>
                    {marker} {text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <p className="text-sm text-ink/70">
                  定價：1080元。
                  <br />
                  單筆達10盒，每盒9折
                  <br />
                  全館金額達2000免運費
                </p>
                <dl className="grid grid-cols-2 gap-y-1 text-sm text-ink/70">
                  {specs.map(([k, v]) => (
                    <div key={k} className="contents">
                      <dt className="font-semibold text-ink">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={BUY_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
                >
                  購買桌遊
                </a>
                <a
                  href={COURSE_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink px-6 py-3 font-semibold text-ink"
                >
                  邀約課程
                </a>
              </div>
            </div>
          </div>

          <hr className="mx-auto mt-12 w-4/5 border-ink/20" />

          <div className="mx-auto mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-ink">遊戲理念</h2>
            {concept.map((p) => (
              <p key={p.slice(0, 12)} className="mt-4 text-ink/70">
                {p}
              </p>
            ))}
          </div>

          {/* 遊戲特色：原站左欄文字、右欄一支影片（沒有標題） */}
          <div className="mx-auto mt-16 grid max-w-4xl gap-10 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <h2 className="text-2xl font-bold text-ink">遊戲特色</h2>
              <ul className="mt-4 space-y-2 text-ink/70">
                {features.map(([label, desc]) => (
                  <li key={label}>
                    <span className="font-semibold text-ink">{label}：</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-[320px]">
              <YouTubeEmbed id={FEATURE_VIDEO} title="家分題桌遊遊戲特色影片" />
            </div>
          </div>

          {/* 遊戲資訊：原站左欄規格＋按鈕、右欄一張玩家實拍照 */}
          <div className="mx-auto mt-16 grid max-w-4xl gap-10 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <h2 className="text-2xl font-bold text-ink">遊戲資訊</h2>
              <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm text-ink/70">
                {[...specs, ...credits].map(([k, v]) => (
                  <div key={k} className="contents">
                    <dt className="font-semibold text-ink">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={BUY_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
                >
                  購買桌遊
                </a>
                <a
                  href={COURSE_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink px-6 py-3 font-semibold text-ink"
                >
                  邀約課程
                </a>
              </div>
            </div>
            <Image
              src="/images/products/family-topics/play-photo.jpg"
              alt="三位玩家圍著桌子體驗《家分題》，桌面上有住家圖板、板塊與家務卡"
              width={827}
              height={800}
              className="h-auto w-full rounded-2xl md:w-[328px]"
            />
          </div>

          {/* 兩支教學影片，原站是並排兩欄、各有自己的標題 */}
          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-lg font-bold text-ink">完整教學影片</h2>
              <div className="mt-4">
                <YouTubeEmbed
                  id={FULL_TUTORIAL_VIDEO}
                  title="家分題桌遊完整教學影片"
                />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-ink">短教學及試玩影片</h2>
              <div className="mt-4">
                <YouTubeEmbed
                  id={SHORT_TUTORIAL_VIDEO}
                  title="家分題桌遊短教學及試玩影片"
                />
              </div>
            </div>
          </div>

          <hr className="mt-16 border-ink/20" />
        </Container>
      </section>
    </>
  );
}
