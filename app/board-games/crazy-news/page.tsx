import type { Metadata } from "next";
import {
  ProductGallery,
  type GalleryImage,
} from "@/app/_components/ProductGallery";
import { YouTubeEmbed } from "@/app/_components/YouTubeEmbed";
import { Container } from "@/app/_components/Container";
import { withBasePath } from "@/app/_components/SiteImage";

export const metadata: Metadata = {
  title: "抓誑新聞 Crazy News",
  description:
    "全球第一款媒體識讀桌遊。合作對抗類遊戲，收錄30則台灣時事新聞，結合108課綱跨領域學習，培養媒體識讀能力。",
};

const highlights = [
  "結合108課綱跨領域學習，培養媒體識讀能力",
  "合作對抗類遊戲",
  "收錄30則台灣時事新聞",
];

const features = [
  [
    "角色扮演",
    "玩家可擔任媒體或是閱聽人，體驗媒體生態中不同角色的立場與能力。",
  ],
  ["即時對戰", "玩家們需使用僅有的手牌，安排本回合的戰術。"],
  ["團隊合作", "與隊友相互合作，提升擊倒問題新聞的成功率！"],
  [
    "媒體識讀",
    "學會分辨「置入」「誤導」「標籤」「刺激」的錯誤報導方式，並培養主動參與的公民意識！",
  ],
];

const info = [
  ["遊戲人數", "3-7人"],
  ["遊戲時間", "30-50 分鐘"],
  ["遊戲年齡", "10＋"],
  ["遊戲設計", "Wa'sup 阿普蛙工作室有限公司"],
  ["共同出版", "台灣少年權益與福利促進聯盟"],
];

const galleryImages: GalleryImage[] = [
  { src: "/images/products/crazy-news.png", alt: "抓誑新聞二刷修訂說明" },
  {
    src: "/images/products/crazy-news/gallery-1.png",
    alt: "抓誑新聞桌遊實物照 1",
  },
  {
    src: "/images/products/crazy-news/gallery-2.jpg",
    alt: "抓誑新聞桌遊實物照 2",
  },
  {
    src: "/images/products/crazy-news/gallery-3.jpg",
    alt: "抓誑新聞桌遊實物照 3",
  },
  {
    src: "/images/products/crazy-news/gallery-4.jpg",
    alt: "抓誑新聞桌遊實物照 4",
  },
  {
    src: "/images/products/crazy-news/gallery-5.png",
    alt: "抓誑新聞桌遊實物照 5",
  },
  {
    src: "/images/products/crazy-news/gallery-6.png",
    alt: "抓誑新聞桌遊實物照 6",
  },
];

const videos = ["Hq73q3RjOMU", "fGWV-wUCpHQ", "kk9nf5SMw5A", "ByQtfzyXpX0"];

export default function CrazyNewsPage() {
  return (
    <>
      {/* 2026-08-25 全站逐頁核對 section 背景才發現：這頁跟其他 7 款商品頁不一樣，原站有自己專屬的
          兩段式開場——先是一張 430px 底圖（不是 <img>，掛在 .wsite-body-section 的 CSS
          background-image，同一種擷取盲區）疊白/淺灰文字的引言，再接一段近深灰 #323D3F 底的
          標語+書名區塊，不是重建站原本套用的通用商品頁純白單欄排版。 */}
      <section
        className="relative flex min-h-[430px] items-center bg-[#1a1a1a] bg-cover bg-center py-16"
        style={{
          backgroundImage: `url(${withBasePath("/images/banners/crazy-news-hero.jpg")})`,
        }}
      >
        <Container className="max-w-3xl">
          <p className="text-lg leading-relaxed text-white sm:text-xl">
            從前從前，求知若渴的人類為了得到更多的資訊，創造了「媒體」。
            <br />
            由媒體當他們的眼、當他們的嘴，甚至是……當他們的腦。
            <br />
            後來，人類越來越依賴媒體而失去自主性、忘記該如何思考，
            <br />
            而漸漸「誑化」的媒體成了指引方向的主人，使用者則成了盲目跟隨的奴隸……
          </p>
        </Container>
      </section>

      <section className="bg-[#323D3F] py-16">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold text-[#d5d5d5]">
            全球第一款媒體識讀桌遊
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white">
            抓誑新聞 Crazy News
          </h1>
          <p className="mt-4 text-[#d5d5d5]">
            遊戲中，你將成為「識讀者」同盟的一員，聆聽報導並破除藏匿其中的四大毒物！在媒體徹底誑化之前，號召你的夥伴升級各種特殊技、打擊怪獸，一起讓誑化的媒體恢復正常！
          </p>
          <ul className="mt-4 space-y-1 text-[#d5d5d5]">
            {highlights.map((h) => (
              <li key={h}>▽ {h}</li>
            ))}
          </ul>
        </Container>
      </section>

      <Container className="py-16">
        <div className="mx-auto max-w-3xl">
          <div className="max-w-md">
            <ProductGallery images={galleryImages} />
          </div>

          <p className="mt-4 text-ink/70">售價：750元（消費滿2000免運）</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://forms.gle/n4eqD2xcKHgPUwrS7"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
            >
              購買桌遊
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

          <p className="mt-4 text-sm text-ink/50">
            ＊購買桌遊即可獲得線上播報新聞之功能。＊第一刷買家，可來信索取註冊碼。
          </p>

          <h2 className="mt-12 text-lg font-bold text-ink">遊戲理念</h2>
          <p className="mt-2 text-ink/70">
            打開電視，聳動、即時的新聞畫面總是牽動著我們的眼球，而我們的每一次轉台，也都展現了我們的喜好，也形塑著媒體的報導風格。我們發現，缺乏求證、監督精神的閱聽人，與追逐流量、利潤而罔顧第四權責任的媒體，形成一種「共惡關係」。當媒體環境越來越壞時，我們沒有人能成為真正的贏家。
          </p>
          <p className="mt-4 text-ink/70">
            我們在遊戲中藏入許多社會現況的比喻，像是誑化媒體的四種毒物、滋生的社會亂象怪獸、識讀者的特殊技能……留待玩家去細細體會。《抓誑新聞》雖然只分為媒體與識讀者兩大陣營，但其實媒體、閱聽人、社會三者不是競爭對立，而是相互影響的。因此，我們希望培養閱聽人的自主性與識讀能力，並透過檢舉及申訴行動督促媒體自律，形成一個更健全的媒體生態。
          </p>

          <h2 className="mt-12 text-lg font-bold text-ink">遊戲特色</h2>
          <ul className="mt-2 space-y-2 text-ink/70">
            {features.map(([label, desc]) => (
              <li key={label}>
                <span className="font-semibold text-ink">{label}：</span>
                {desc}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-lg font-bold text-ink">遊戲資訊</h2>
          <dl className="mt-2 grid grid-cols-2 gap-y-1 text-sm text-ink/70">
            {info.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="font-semibold text-ink">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-12 text-lg font-bold text-ink">遊戲介紹影片</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {videos.map((id, i) => (
              <YouTubeEmbed
                key={id}
                id={id}
                title={`抓誑新聞 Crazy News 介紹影片 ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
