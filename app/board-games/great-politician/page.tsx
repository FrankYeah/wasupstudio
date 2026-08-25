import type { Metadata } from "next";
import {
  ProductGallery,
  type GalleryImage,
} from "@/app/_components/ProductGallery";
import { YouTubeEmbed } from "@/app/_components/YouTubeEmbed";
import { Container } from "@/app/_components/Container";
import { SiteImage, withBasePath } from "@/app/_components/SiteImage";

// ⚠️ 2026-08-26 合併：**本頁併入了原站 /greatpoliticians.html 的內容**。
// 原站同一款桌遊有兩個網址——/2282325919278352347836984251363908038642.html（本頁的來源）跟
// /greatpoliticians.html（另一個孤兒頁，原始碼在 01-content-raw/pages/board-games/great-politician-main/）。
// 同一款已完售商品沒理由有兩個 URL，所以不另開第二個路由，直接把 /greatpoliticians.html 的內容併進來。
// 擷取紀錄仍保留在 00-plan/sitemap.tsv 的 board-games/great-politician-main 那一筆（label 已註明併入本頁）。
//
// 併入時實測比對出的**重複**（都以資訊較完整的版本為準，沒有並列兩份）：
//   1. /greatpoliticians.html 的〈這款遊戲可以配合公民課的什麼單元或主題?〉整段本文，跟本頁既有的
//      〈遊戲特色：呼應國、高中公民課本內容〉**逐字元完全相同**（含「交際應 酬」「年 金改革」這類
//      原站自己的斷行空格）。只有 h2 標題不同 → 保留本頁既有標題，本文不重複。
//   2. 同理，〈玩完這款遊戲，學生可以學到什麼?〉的三條清單跟本頁〈遊戲實作：學生可以學到什麼？〉
//      也是逐字元相同 → 不重複。
//   3. /greatpoliticians.html 的 hero 圖 photo-1.jpg（318x430）是本頁 gallery-1.jpg（412x800）的
//      **低解析度裁切版**（同一張主視覺）→ 不採用，沿用既有的 gallery-1.jpg。原圖已補存到
//      02-assets/images/photo-1.jpg 存檔（原站 9 月底關站）。
//   4. /greatpoliticians.html 的〈新推出！「課堂操作手冊」〉標題跟本頁頁尾的教案操作手冊區塊是同一件
//      商品 → 標題不重複，但它底下那張圖是手冊第 8–9 頁的**跨頁**（既有 manual-4.png 只有第 8 頁），
//      第 9 頁是新內容 → 併進 manualImages 相簿當第 7 張。
//
// 另外，/greatpoliticians.html 的〈​遊戲特色​〉與〈遊戲流程〉兩個 h2 在原始碼裡**底下完全沒有元素**
// （空標題，Weebly 編輯器殘留），不是內容藏在圖片裡——該頁全部只有 4 張圖，都已逐張確認過。
// 空標題不重建；「遊戲特色」本頁本來就有更完整的一節。
//
// 2026-08-26 補建：這頁是「孤兒頁」——原站網址 /2282325919278352347836984251363908038642.html
// （頁內的標題連結另外指向 /greatpoliticians.html，同一款商品的另一個網址），只從「買桌遊」總覽頁的
// 「＊已完售」區塊被連到，沒掛在導覽列，所以 Phase 0 的頁面清單漏掉、從來沒被擷取。
// 原始碼在 01-content-raw/pages/board-games/great-politician/page.html（解碼後才搜得到中文）。
//
// 原站區塊結構（依 .wsite-section 的 background-color 實測，不是憑視覺切）：跟姊妹頁 crazy-news 一樣
// 整頁只有 2 個 section——
//   section 0 = 598px 高的 CSS background-image hero（背景圖 + 置中引言）
//   section 1 = #323D3F 深灰底，hero 以下**一路包到頁尾**（遊戲特色／遊戲實作／遊戲資訊／教案手冊
//               全在裡面，原始碼裡的 font color 幾乎都是 #ffffff / #d5d5d5），不是白底。

export const metadata: Metadata = {
  title: "大政治家：選戰風雲",
  description:
    "民主 × 人權 × 代議政治。妥善利用黨內的人物卡以及資金、名望，與其他玩家爭取僅有的18席次，在這次的選戰中奪下最多的席次，成為最有影響力的政黨！一次弄懂什麼叫「單一選區兩票制」。",
};

// ⚠️ 已完售商品（site-data.ts 的 soldOutBoardGames 有它）。原站的購買按鈕本身就寫著
// 「購買桌遊 ( 已售完 )」、但連結仍指向同一份購買表單，所以照原站原樣保留文字與連結。
const BUY_LABEL = "購買桌遊 ( 已售完 )";
const BUY_HREF =
  "https://docs.google.com/forms/d/e/1FAIpQLSeNjwzit1cjicwRAKBiZfYBmvYPlf8z7C4FX6mtrHeE4nO0TQ/viewform";
const COURSE_HREF =
  "https://docs.google.com/forms/d/e/1FAIpQLScTpdFbaeh221rvaEMgG_1vrh0RC_9rOEx1j8ActjGE4PiM7A/viewform";
// 教案操作手冊是另一份表單（手冊沒有標示售完）
const MANUAL_HREF = "https://goo.gl/forms/PeWPnnnayz4P6r112";

// 原站三行標語的符號是 ▽ / ▼ / ▽ 交錯，照原樣保留
const highlights = [
  ["▽", "一次弄懂什麼叫「單一選區兩票制」"],
  ["▼", "收錄最台灣味的選舉事件"],
  ["▽", "享受與朋友競爭、結盟，遍地插旗的樂趣"],
];

// 原站「遊戲特色：呼應國、高中公民課本內容」是一整塊 paragraph，用粗體的
// <宣傳階段>／<競選階段>／<開票階段> 當小標分段（text.txt 把這三個小標吃掉了，是從原始 HTML 補回的）
const stages = [
  {
    heading: "<宣傳階段>",
    paragraphs: [
      "(1)  學生必須觀察選區的屬性，並判斷自己所屬政黨在不同選區分別屬於優勢或劣勢，才能進一步地決定政黨在該選區應派出多少能力值的候選人?又該在這一選區挹注多少資金?要孤注一擲嗎?還是要按兵不動呢?因此，在此階段，新聞上常出現的「鐵票倉」、「艱困選區」、「棄保」等概念，就可以藉由遊戲體會到。",
      "(2)  宣傳階段最重要的一環是挹注資金。每個政黨一開始所拿到的資金是固定的，但在遊戲過程中可能因為事件卡與錦囊卡等各項因素有所增減(如:「政治獻金」事件、「交際應酬」事件、「黨產」錦囊等)。學生必須學著在有限資源的情況下，盡可能讓資金發揮最大功能;教師也可藉此說明選舉經費的最高限額、政治獻金法等概念。",
    ],
  },
  {
    heading: "<競選階段>",
    bullets: ["競選階段會經歷各項事件。"],
    paragraphs: [
      "《大政治家:選戰風雲》總共有 51 張事件卡，包含選舉中常發生的各種事件(如:工程弊案、誹聞、慈善行程等)，也可能是時事改編之事件(如:消費券、一例一休、年金改革等)，還有一些事件用詞相對比較專業(如:肉桶立法、拔樁、固樁等)。學生對於一般性的事件應該耳熟能詳;而時事改編之事件，教師可以運用來簡略說明時事始末；最後，專有名詞的部分，學生更可以在教師的引導下，藉由遊戲的方式來學習。",
    ],
  },
  {
    heading: "<開票階段>",
    bullets: [
      "如何決定哪個政黨奪下這一選區?必須綜合考量選區屬性、投入資金、候選人聲望和能力。由加總最高的政黨取得席次。若有兩個以上政黨同時最高分，則擲骰決定，此為對應《公職人員選舉罷免法》第 67 條之規定:「公職人員選舉，除另有規定外，按各選舉區應選出之名額，以候選人得票比較多數者為當選;票數相同時，以抽籤決定之。」",
    ],
    paragraphs: [
      "最後，宣傳、競選與開票三階段，都有各式各樣的錦囊卡可供學生在關鍵時刻運用。錦囊卡也都具有一定涵義。例如:「選舉無效」的效果是「本區從宣傳階段重新開始進行補選」，而與「當選無效」的效果是「由積分總和第二名的候選人當選該席區域立委」，無非是希望學生能在遊戲過程中，體驗兩種選舉訴訟的差異。",
    ],
  },
];

// ▼ 以下 4 組來自 /greatpoliticians.html，是本頁原本沒有的內容 ▼

// 〈遊戲介紹〉——/greatpoliticians.html 的開場白，本頁原本沒有這段。
const INTRO =
  "這是一款結合選舉制度、選戰行銷、策略應用的桌遊。玩家將擔任黨主席，運用錦囊卡、籌措政治獻金，面對各種選舉突發狀況！取得最多選區的黨，就能掌握台灣的未來！";

// 〈你不可不買的三大理由〉——原站是一個 paragraph 用 <br> 斷成三行，
// 「1. 」「2. 」「3. 」的編號是**寫死在文字裡**的，所以不能用 list-decimal（會變成兩層編號）。
const buyReasons = [
  "1. 體驗台灣風味的選戰，享受與朋友競爭、結盟，遍地插旗的樂趣。",
  "2. 搞懂「單一選區兩票制」及臺灣「選舉現象」毫不費力，適合公民、社會科操作，之後也會展開「教案版帶領工作坊」唷~",
  "3. 支持阿普蛙持續挖掘更多議題，並創作更多遊戲，一起打造更美好的公民社會！",
];

// 〈課堂使用版〉——這三個提問正好就是底下三節的標題（原站的敘事結構：先拋問題再逐一回答），
// 所以合併後把這塊放在「遊戲特色 / 遊戲實作 / 我該怎麼應用到課堂」之前當作整段的引言。
// 提問 1、2 的答案就是本頁既有的兩節，提問 3 的答案是下面 classroomAnswers（原站獨有）。
const CLASSROOM_LEAD = "這是一款可應用於國、高中生 跨科領域教學的教具，你可能會好奇：";
const classroomQuestions = [
  "這款遊戲可以配合公民科的什麼單元呢？",
  "玩完這款遊戲，學生可以學到什麼呢？",
  "這麼複雜的遊戲，我該怎麼應用到課堂呢？",
];

// 〈這麼複雜的遊戲，我該怎麼應用到課堂呢？〉的答案，原站獨有。
const classroomAnswers = [
  "阿普蛙工作室將配合班級人數，將2~4人的桌遊機制，修改為以組別為單位、適合團體的班級帶領模式。",
  "阿普蛙在教師研習、教學現場有十足的團體帶領經驗，請放心交給我們吧！",
];

// ▲ 以上 4 組來自 /greatpoliticians.html ▲

const learnings = [
  "學生能理解多數決制、比例代表制、混合制的內涵，並能實際操作與計算席次。",
  "學生能理解選區政治偏好、候選人能力、資金、選舉期間發生的種種事件，都有可能影響選情。",
  "學生能理解我國選舉活動存在的問題與弊病，並確實體會其重要性，例如:事件卡「貪汙」的效果很嚴重──候選人被捕入獄，失去選舉資格，在本區的人物為視為「棄權」。",
];

const info = [
  ["遊戲人數", "3-4人。"],
  ["遊戲時間", "90-120 分鐘。"],
  ["遊戲年齡", "10＋。"],
  ["遊戲設計", "簡廷豐、林詩舷"],
  ["遊戲編輯與出版", "阿普蛙工作室有限公司"],
];

const galleryImages: GalleryImage[] = [
  {
    src: "/images/products/great-politician/gallery-1.jpg",
    alt: "《大政治家：選戰風雲》盒面主視覺",
  },
  {
    src: "/images/products/great-politician/gallery-2.png",
    alt: "《大政治家：選戰風雲》遊戲圖板與四個政黨的候選人卡配置",
  },
  {
    src: "/images/products/great-politician/gallery-3.jpg",
    alt: "《大政治家：選戰風雲》遊戲進行中：選區圖板、候選人卡、資金代幣與骰子",
  },
];

// 教案操作手冊的相簿：6 張手冊內頁掃描。原站相簿順序照抄（第 1 張不是封面，是背景故事那一頁）。
// 這些是「文字畫在圖片裡」的內容，圖檔本身是透明背景，合成到原站區塊底色 #323D3F 後才判讀得出來。
const manualImages: GalleryImage[] = [
  {
    src: "/images/products/great-politician/manual-1.png",
    alt: "教案操作手冊內頁：遊戲背景故事，並標示團體版規格「遊戲時間 90 分鐘、遊戲人數 6-60 人、適合年齡 12 歲以上」",
  },
  {
    src: "/images/products/great-politician/manual-2.png",
    alt: "《大政治家：選戰風雲》教學手冊封面",
  },
  {
    src: "/images/products/great-politician/manual-3.png",
    alt: "教案操作手冊第 4 頁：遊戲目標（區域立委選戰插旗 5 席、不分區席次 2 席）",
  },
  {
    src: "/images/products/great-politician/manual-4.png",
    alt: "教案操作手冊第 8 頁：第一部分「區域立委選戰」的回合說明",
  },
  {
    src: "/images/products/great-politician/manual-5.png",
    alt: "教案操作手冊第 11 頁：第二部分「不分區立委計算」的計票範例",
  },
  {
    src: "/images/products/great-politician/manual-6.png",
    alt: "教案操作手冊第 16 頁：教學應用 Q&A，說明可搭配的公民課單元",
  },
  // 併自 /greatpoliticians.html（原檔 165891250_orig.png，掛在該頁〈新推出！「課堂操作手冊」〉底下）。
  // 是第 8–9 頁的跨頁：第 8 頁與上面 manual-4.png 重複，但第 9 頁（登記參選／挹注資金【宣傳階段】／
  // 遭遇事件【競選階段】）是既有 6 張裡沒有的內容，所以整張跨頁收進來當第 7 張。
  {
    src: "/images/products/great-politician/manual-spread-p8-9.png",
    alt: "教案操作手冊第 8–9 頁跨頁：第一部分「區域立委選戰（5席）」的回合順序，以及登記參選、挹注資金【宣傳階段】、遭遇事件【競選階段】的操作說明",
  },
];

// 原站 2 支影片分屬 2 個位置：「遊戲實作」右欄 1 支、「遊戲資訊」右欄 1 支，都沒有自己的標題。
const PRACTICE_VIDEO = "dq2i0pLqrLo";
const INFO_VIDEO = "nM-3IEkVCYk";

function Buttons({
  buyLabel = BUY_LABEL,
  buyHref = BUY_HREF,
  courseLabel,
}: {
  buyLabel?: string;
  buyHref?: string;
  courseLabel: string;
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href={buyHref}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
      >
        {buyLabel}
      </a>
      <a
        href={COURSE_HREF}
        target="_blank"
        rel="noreferrer"
        className="rounded-full border border-white px-6 py-3 font-semibold text-white"
      >
        {courseLabel}
      </a>
    </div>
  );
}

export default function GreatPoliticianPage() {
  return (
    <>
      {/* 原站 hero：598px 高的 CSS background-image（第 3 種擷取盲區——掛在 CSS 上、不是 <img>、
          也不在相簿 JSON 裡），底圖 background-images/1470399465.jpg 已於 2026-08-26 補抓，
          存成 public/images/banners/great-politician-hero.jpg。引言原站**沒有** font color 屬性、
          繼承 main_style.css 的 body { color:#000000 }（深字），所以備援色用淺灰 #e6e6e6。 */}
      <section
        className="flex min-h-[598px] items-center bg-[#e6e6e6] bg-cover bg-center py-16"
        style={{
          backgroundImage: `url(${withBasePath("/images/banners/great-politician-hero.jpg")})`,
        }}
      >
        <Container>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-ink">
            &ldquo;勾心鬥角的選戰，就是一場人性的考驗。
            <br />
            擁有金錢、名聲、智慧的你
            <br />
            當鐵票倉被人攻陷時，要如何扳回一城？
            <br />
            眼看下一個事件即將爆發，但你卻已經孤注一擲……
            <br />
            最後一道民主的高牆，岌岌可危，就要傾垮.....&rdquo;
          </p>
        </Container>
      </section>

      {/* 原站 hero 以下整段都是 #323D3F 深灰底、白字，一路包到頁尾 */}
      <section className="bg-[#323D3F]">
        <Container className="py-16">
          {/* 原站是「文字在左、圖庫＋按鈕在右」，但全站 8 款商品頁刻意統一成「圖片在左、
              文字＋購買資訊在右」；用 order- 讓手機版仍照原站 DOM 順序（文字先、圖庫在後）。*/}
          <div className="grid gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <ProductGallery images={galleryImages} />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-sm font-semibold text-[#fbf8f8]">
                民主 x 人權 x 代議政治
              </p>
              <h1 className="mt-2 text-3xl font-bold text-white">
                大政治家：選戰風雲
                <br />
                <span className="text-[#d5d5d5]">The Great Politician</span>
              </h1>
              <hr className="mt-4 w-1/2 border-white/20" />

              <p className="mt-4 text-[#d5d5d5]">
                妥善利用黨內的人物卡以及資金、名望，與其他玩家爭取僅有的18席次（分區立委12席＋不分區立委6席），在這次的選戰中奪下最多的席次，成為最有影響力的政黨！
              </p>
              <ul className="mt-4 space-y-1 text-white">
                {highlights.map(([marker, text]) => (
                  <li key={text}>
                    {marker} {text}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm text-white">
                  <dt className="font-semibold">遊戲時間</dt>
                  <dd>90-120min。</dd>
                  <dt className="font-semibold">遊戲人數</dt>
                  <dd>3-4人。</dd>
                  <dt className="font-semibold">適合年齡</dt>
                  <dd>10＋。</dd>
                </dl>
                <p className="text-sm text-[#d5d5d5]">
                  價格：NT 1500元/盒。
                  <br />
                  <span className="text-white">單筆達10盒，每盒9折</span>
                  <br />
                  <span className="text-white">全館金額達2000免運費</span>
                </p>
              </div>

              <p className="mt-6 text-sm text-[#d5d5d5]">
                * 本桌遊另有開發適合團體活動、課堂教學的「兩大四小黨--政黨操盤版」。歡迎邀約阿普蛙帶領遊戲工作坊，或是購買教案操作手冊，就可以直接帶學生們操作囉！（手冊介紹在網頁最下方）
              </p>

              <Buttons courseLabel="邀約遊戲課程" />
            </div>
          </div>

          <hr className="mt-12 border-white/20" />

          {/* 〈遊戲介紹〉＋〈你不可不買的三大理由〉：併自 /greatpoliticians.html。
              原站這兩塊之間還夾著〈​遊戲特色​〉〈遊戲流程〉兩個**空標題**（底下沒有任何元素）跟
              〈新推出！「課堂操作手冊」〉（＝頁尾教案手冊區塊的重複），都不重建，見檔頭說明。
              原站〈三大理由〉底下有一顆「我要購買」按鈕，連到 https://goo.gl/forms/FagYBzsR6T4hw4iZ2
              （goo.gl 短網址，與本頁 BUY_HREF 是同一份購買表單的短連結）。本頁上下已經有兩組
              購買／邀約按鈕，不再重複第三組。*/}
          <div className="mx-auto mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">遊戲介紹</h2>
            <p className="mt-4 text-[#d5d5d5]">{INTRO}</p>

            <h2 className="mt-10 text-2xl font-bold text-white">
              你不可不買的三大理由
            </h2>
            <ul className="mt-4 space-y-2 text-[#d5d5d5]">
              {buyReasons.map((r) => (
                <li key={r.slice(0, 4)}>{r}</li>
              ))}
            </ul>
          </div>

          <hr className="mt-12 border-white/20" />

          {/* 〈課堂使用版〉：併自 /greatpoliticians.html。
              這塊拋出的三個提問，正好就是接下來三節的主題（原站也是先問再逐一回答）：
                提問 1 →〈遊戲特色：呼應國、高中公民課本內容〉（本頁既有）
                提問 2 →〈遊戲實作：學生可以學到什麼？〉（本頁既有）
                提問 3 →〈這麼複雜的遊戲，我該怎麼應用到課堂呢？〉（原站獨有，見下方）
              所以放在這三節前面當引言，而不是另起一個平行區塊。*/}
          <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <SiteImage
                src="/images/products/great-politician/classroom-setup.jpg"
                alt="教室桌上鋪開的《大政治家：選戰風雲》：選區圖板、候選人卡、成堆的資金代幣與骰子，遊戲盒立在後方"
                width={1100}
                height={733}
                className="h-auto w-full rounded-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-white">課堂使用版</h2>
              <p className="mt-4 text-[#d5d5d5]">{CLASSROOM_LEAD}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-white">
                {classroomQuestions.map((q) => (
                  <li key={q.slice(0, 8)}>{q}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              遊戲特色：呼應國、高中公民課本內容
            </h2>
            <p className="mt-4 text-white">
              《大政治家:選戰風雲》這款遊戲主要可以配合高中公民與社會第二冊第六課「人民的參政」單元，試圖將複雜的「選舉制度」藉由遊戲化的方式讓學生體驗、感受與學習。
              <br />
              遊戲的進行主要分為三階段：
              <strong className="font-bold">
                宣傳階段、競選階段、開票階段
              </strong>
              。
              <br />
              簡單整理三個階段蘊涵的公民課程概念如下:
            </p>

            {stages.map((stage) => (
              <div key={stage.heading} className="mt-6">
                <p className="font-bold text-white">{stage.heading}</p>
                {stage.bullets && (
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-white">
                    {stage.bullets.map((b) => (
                      <li key={b.slice(0, 12)}>{b}</li>
                    ))}
                  </ul>
                )}
                {stage.paragraphs.map((p) => (
                  <p key={p.slice(0, 12)} className="mt-3 text-white">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* 遊戲實作：原站左欄編號清單、右欄一支影片（沒有標題） */}
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">
              遊戲實作：學生可以學到什麼？
            </h2>
            <div className="mt-4 grid gap-8 md:grid-cols-2 md:items-start">
              <ol className="list-decimal space-y-2 pl-5 text-white">
                {learnings.map((l) => (
                  <li key={l.slice(0, 12)}>{l}</li>
                ))}
              </ol>
              <YouTubeEmbed
                id={PRACTICE_VIDEO}
                title="大政治家：選戰風雲遊戲實作影片"
              />
            </div>
          </div>

          {/* 〈這麼複雜的遊戲，我該怎麼應用到課堂呢？〉：併自 /greatpoliticians.html，本頁原本沒有。
              這是上面〈課堂使用版〉三個提問的第 3 個答案，也是那頁獨有的教學應用指引重點。
              原站這塊右欄是 dsc9637_orig.jpg ＋ 一顆「想要購買」按鈕（連到與 BUY_HREF 同一份表單的
              goo.gl 短網址）；按鈕不重複，理由同上。*/}
          <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <SiteImage
                src="/images/products/great-politician/classroom-play.jpg"
                alt="學生們圍在教室桌邊實際遊玩《大政治家：選戰風雲》，手上拿著卡牌討論，桌面攤著卡片與資金代幣"
                width={1100}
                height={733}
                className="h-auto w-full rounded-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-white">
                這麼複雜的遊戲，我該怎麼應用到課堂呢？
              </h2>
              {classroomAnswers.map((a) => (
                <p key={a.slice(0, 8)} className="mt-4 text-[#d5d5d5]">
                  {a}
                </p>
              ))}
            </div>
          </div>

          {/* 遊戲資訊：原站左欄規格＋按鈕、右欄一支影片（沒有標題） */}
          <div className="mx-auto mt-16 max-w-4xl">
            <h2 className="text-2xl font-bold text-white">遊戲資訊</h2>
            <div className="mt-4 grid gap-8 md:grid-cols-2 md:items-start">
              <div>
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm text-white">
                  {info.map(([k, v]) => (
                    <div key={k} className="contents">
                      <dt className="font-semibold">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <Buttons courseLabel="邀約課程" />
              </div>
              <YouTubeEmbed
                id={INFO_VIDEO}
                title="大政治家：選戰風雲遊戲介紹影片"
              />
            </div>
          </div>

          {/* 頁尾的教案操作手冊區塊（另一件商品，原站排版同上：文字左、相簿＋按鈕右） */}
          <hr className="mt-16 border-white/20" />

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <ProductGallery images={manualImages} />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-sm font-semibold text-[#fbf8f8]">
                民主政治 x 台灣立委選舉 x 班級經營
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                大政治家：選戰風雲
                <br />
                <span className="text-[#d5d5d5]">
                  「兩大四小黨－政黨操盤版」教案操作手冊
                </span>
              </h2>
              <hr className="mt-4 w-1/2 border-white/20" />

              <p className="mt-4 text-white">
                「班級好多人，一套桌遊不夠用怎麼辦？」
                <br />
                經過三個月來數場測試、搜集老師給的意見，蛙蛙針對團體活動、課堂教學所設計的「兩大四小黨—政黨操盤版」，可讓一個班級共享一套桌遊教具，就可以在兩節課內操作完成唷！
              </p>
              <p className="mt-4 text-white">
                #手冊特色
                <br />▼ 完整說明教案版操作步驟，收錄蛙蛙實戰精華
                <br />▽ 詳細補充相對應的教學內容，掌握應考趨勢
                <br />▼ 加值提供兩種變體玩法規則，一套桌遊多種享受
              </p>
              <p className="mt-4 text-sm text-[#d5d5d5]">
                價格：NT 250元/本。
                <br />
                *如果搭配桌遊加購教案手冊，可享優惠價： NT 200元/本。
              </p>

              <Buttons
                buyLabel="購買手冊"
                buyHref={MANUAL_HREF}
                courseLabel="邀約遊戲課程"
              />
            </div>
          </div>

          <hr className="mt-16 border-white/20" />
        </Container>
      </section>
    </>
  );
}
