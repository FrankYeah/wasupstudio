import type { Metadata } from "next";
import { SiteImage as Image, withBasePath } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";
import { PageBanner } from "@/app/_components/PageBanner";
import { YouTubeEmbed } from "@/app/_components/YouTubeEmbed";

export const metadata: Metadata = {
  title: "想設計",
  description:
    "阿普蛙協助基金會、公部門、學校、企業與內容團隊，將教育議題、倡議理念、地方文化或組織需求，轉化為桌遊、實境遊戲、遊戲化活動與推廣教材。",
};

// 「我們設計遊戲，也深入教學現場」底下的兩個數字。
//
// ⚠️ 2026-08-26 更正：前一輪寫成「.counter-number 渲染出來是空的（客戶當初沒填數字），
// 所以只做標籤、要不要補數字要問客戶」——這是錯的。原站這兩個是 Weebly 的 counter
// 平台元件，數字**不在 HTML 裡**，是 JS 讀元件設定後跑動畫寫進 DOM 的；靜態抓下來的
// page.html 裡 `<div class="counter-number"><div></div></div>` 當然是空的。
// 真正的值就在同一份 HTML 的元件設定 JSON 裡：`"end":60` / `"end":3000`。
// 查法：`python3 -c 'import html;print(html.unescape(open("page.html").read()))' | grep -o '"end":[0-9]*'`
// 見 ~/.claude/skills/site-migration-audit/references/visual-fidelity-audit.md 陷阱 11。
//
// 原站數字會在捲到畫面內時從 0 跑動畫到目標值（Weebly CounterElement）；這裡只做靜態
// 數字，沒有還原那個 count-up 動畫（要做得多一個 client component，視覺結果一樣）。
const counters = [
  {
    number: "60",
    unit: "個up",
    label: "議題遊戲與教材設計專案",
    // 原站兩個 counter 用的綠色不一樣：60 是亮綠 #00ab84、3000 是深綠 #007854
    color: "text-brand-green-bright",
  },
  {
    number: "3000",
    unit: "場up",
    label: "課程、工作坊與推廣活動",
    color: "text-brand-green",
  },
];

// 「協助合作單位進行議題遊戲化」的 4 個分類。
//
// ⚠️ 2026-08-26 更正版面：原站每一個分類是**獨立一列（一個 wsite-multicol）**，欄寬
// 19% / 41% / 40%——左欄是綠色圓角色塊（只放分類標題，18px 白字置中）、色塊**下方**
// 另外有一段置中的分類標籤（16px 黑字，不在色塊裡），右邊兩欄各是一張白色 10px 圓角
// 卡片，裡面放**大張**產品照（實際渲染 155～366px 寬）＋置中的合作單位說明。
// 前一輪重建成「2×2 網格、標題+標籤都塞在綠色 header 裡、產品照縮成 48px 小圖示」，
// 跟原站完全是兩種版面。
const partnerGroups = [
  {
    titleLines: ["社會情緒", "與人際溝通"],
    tagLines: ["情緒教育｜人際關係", "職場溝通｜家庭互動"],
    clients: [
      {
        name: "勵馨基金會｜桌遊",
        photo: "/images/design-consulting/client-family-topics.png",
        width: 242,
        height: 230,
      },
      {
        name: "勞動部｜桌遊",
        photo: "/images/design-consulting/client-honest-honor.png",
        width: 276,
        height: 233,
      },
    ],
  },
  {
    titleLines: ["教育與人權"],
    tagLines: ["兒童權利｜校園霸凌", "民主參與｜性別平等"],
    clients: [
      {
        name: "兒福聯盟｜桌遊",
        photo: "/images/design-consulting/client-future-parliament.png",
        width: 316,
        height: 257,
      },
      {
        name: "RC 基金會｜數位教材",
        photo: "/images/design-consulting/client-rc-digital.png",
        width: 366,
        height: 260,
      },
    ],
  },
  {
    titleLines: ["環境永續", "與公共議題"],
    tagLines: ["SDGs｜媒體識讀", "公民參與｜社會倡議"],
    clients: [
      {
        name: "金車文教基金會｜桌遊",
        photo: "/images/design-consulting/client-workplace-crisis.png",
        width: 267,
        height: 207,
      },
      {
        name: "公視主題之夜 SHOW｜影視節目",
        photo: "/images/design-consulting/client-political-correct.png",
        width: 1050,
        height: 600,
      },
    ],
  },
  {
    titleLines: ["地方文化", "與實境體驗"],
    tagLines: ["地方文化｜城市探索", "實境遊戲｜展覽互動"],
    clients: [
      {
        name: "台南文化局｜桌遊",
        photo: "/images/design-consulting/client-pin-zhentou.png",
        width: 155,
        height: 231,
      },
      {
        name: "星濱山共創工作室｜實境遊戲",
        photo: "/images/design-consulting/client-star-beach.png",
        width: 247,
        height: 229,
      },
    ],
  },
];

// 原站在「從一個想法，到一套能被使用的遊戲教材」深綠色區塊裡，用純圖片（web20/21/22_orig.png）
// 呈現這 3 張服務範圍卡片，文字是畫在圖片裡的，擷取腳本抓不到，這裡依圖片內容重建成一般文字卡片
// （保留成文字而不是直接貼原圖，是為了讓內容可被搜尋、可選取、可在手機上重排）。
//
// ⚠️ 2026-08-26 更正配色：既然決定重建成文字，就要照著原圖的樣子做。原圖是**淺灰卡片**
// （#e6e6e7，圓角約佔卡寬 5%）＋綠色標題（#008e66）＋深灰內文（#535151）＋綠框綠字的
// 標籤（#007855，值跟標籤**同一列**排在右邊）＋整塊實心綠的「適合對象」（#007855 白字，
// 10px 圓角）。前一輪憑印象做成「深綠底半透明深色卡＋白標題＋金色標籤＋值換行在標籤下面」，
// 明暗完全相反。色值是把原圖用 `magick ... -format %c histogram:info:` 取樣出來的。
// 標題與「適合對象」的斷行位置也照原圖（原圖是手動斷行，不是自動 wrap）。
const pricingTiers = [
  {
    titleLines: ["議題桌遊設計"],
    desc: "將教育議題、倡議理念或培訓需求，轉化成可遊玩、可討論、可帶領的桌遊體驗。",
    budget: "20 萬元起，完整開發與印刷製作多落在 40 萬元以上",
    timeline: "3–6 個月起",
    audienceLines: [
      "基金會、公部門、學校、社福組織",
      "企業培訓、出版社、教育單位",
    ],
  },
  {
    titleLines: ["實境遊戲", "與遊戲化活動"],
    desc: "依場域、故事、任務與參與者動線，設計展覽互動、地方探索、活動闖關或城市走讀體驗。",
    budget: "15 萬元起，依場域、道具與互動規模調整",
    timeline: "2–4 個月起",
    audienceLines: [
      "文化單位、圖書館、博物館、學校",
      "地方創生團隊、活動策畫單位",
    ],
  },
  {
    titleLines: ["內容企劃", "與節目遊戲化"],
    desc: "協助內容團隊設計節目單元、互動橋段、遊戲規則、討論題與觀眾參與機制。",
    budget: "單次企劃 5 萬元起，系列合作另行評估",
    timeline: "2–8 週起",
    audienceLines: [
      "電視台、Podcast、活動製作團隊",
      "影音團隊、內容平台、教育媒體",
    ],
  },
];

// 同一深綠色區塊裡，還有一組 7 步驟的工作流程（需求釐清→...→課程推廣），
// 也是純圖片（web-23~29_orig.png），文字同樣是畫在圖片裡的，一併重建。
//
// ⚠️ 2026-08-25 修正：這裡原本只有 7 個標題、沒有描述文字，是**讀圖時漏看**造成的。
// 這 10 張圖都是「透明背景 PNG」，描述文字是白色的、卡片外框是淡綠白色的——用一般圖片
// 檢視器打開時透明背景會被渲染成白色，白字白框在白底上完全看不見，只剩金色標題看得到，
// 於是被誤判成「原站只有標題」。正確做法是先把圖合成到原站真正的底色（#00573f）再讀：
//   magick web-23_orig.png -background "#00573f" -flatten out.png
// 詳見 ~/.claude/skills/site-migration-audit/references/visual-fidelity-audit.md 陷阱 8。
const designSteps = [
  {
    no: "01",
    title: "需求釐清",
    desc: "了解議題目標、使用對象、活動場域、預算與期程",
  },
  {
    no: "02",
    title: "議題轉譯",
    desc: "將抽象概念、倡議理念，整理成玩家能理解的情境、衝突與選擇",
  },
  {
    no: "03",
    title: "遊戲設計",
    desc: "設計玩法、規則、卡牌、任務、角色或關卡讓參與者在遊戲中理解議題",
  },
  {
    no: "04",
    title: "原型測試",
    desc: "製作測試版本，透過試玩觀察玩家的反應，調整難度、節奏與討論深度",
  },
  {
    no: "05",
    title: "視覺美術",
    desc: "規劃遊戲風格、卡牌版面、圖像系統、說明書與整體視覺呈現",
  },
  {
    no: "06",
    title: "印刷製作",
    desc: "協助規格評估、材質建議、打樣確認、印刷製作與成品管理",
  },
  {
    no: "07",
    title: "課程推廣",
    desc: "依需求設計教案、培訓活動、體驗會或推廣方案，讓遊戲真正進入現場",
  },
];

// 代表案例。
//
// ⚠️ 2026-08-26 更正版面：原站每一則案例是**獨立一列**、欄寬 23% / 41% / 36%——
// 左欄是案例標題（32px 粗體黑）＋一組「標籤在上、值在下」的欄位（標籤 16px 粗體 #00573f），
// 中欄是白色 10px 圓角卡片（大圖或 YouTube 影片＋置中的合作單位名稱），
// 右欄才是合作重點／案例目標／實際應用。列與列之間、以及標題底下都有一條
// 1px rgba(0,0,0,0.13) 的分隔線。
// 前一輪重建成「兩欄卡片網格、圖片在卡片頂端、所有欄位擠在卡片內文」，版面完全不同。
// 另外「合作類型」在原站是左欄的第一個欄位，不是卡片上方的小標籤。
type CaseFact = { label: string; values: string[]; note?: string };
const cases: {
  title: string;
  image: string | null;
  imageWidth: number;
  imageHeight: number;
  video: string | null;
  facts: CaseFact[];
  partner: string;
  scope: string;
  goal: string;
  result: string;
}[] = [
  {
    title: "抓誑新聞",
    image: "/images/design-consulting/case-crazy-news.png",
    imageWidth: 382,
    imageHeight: 274,
    video: null,
    facts: [
      { label: "合作類型", values: ["媒體識讀桌遊"] },
      { label: "桌遊銷售", values: ["達 3000 盒"] },
      {
        label: "授課場次",
        values: ["200 場"],
        note: "（含教師研習、入班授課、一般民眾媒體識讀課程）",
      },
    ],
    partner: "台灣少年權益與福利促進聯盟",
    scope: "議題轉譯、遊戲設計、視覺與印刷、教案設計、課堂帶領、師資培訓",
    goal: "將媒體識讀轉化成遊戲任務，讓玩家在辨識、討論與判斷中，練習識別假新聞、置入、標籤與誤導訊息，成為更有意識的閱聽人。",
    result:
      "成品交付後應用於校園課程、教師研習與媒體識讀推廣活動，讓議題能以更容易參與的方式進入學習現場。",
  },
  {
    title: "誰是政治正確王",
    // 原站這則案例的媒體是 YouTube 影片（不是靜態圖）——重建站原本把這支影片放到頁面上方
    // 「你有個重要議題」那段（原站那裡根本沒有影片），這裡才是它真正的位置。
    image: null,
    imageWidth: 0,
    imageHeight: 0,
    video: "TZBL1wHPi8Y",
    facts: [
      { label: "合作類型", values: ["影視節目遊戲化企劃"] },
      {
        label: "觀看次數",
        values: [
          "第一集 Youtube 觀看次數 27 萬",
          "第二集 Youtube 觀看次數 6.7 萬",
        ],
      },
    ],
    partner: "公視主題之夜 SHOW",
    scope: "節目主題轉譯、討論題設計、互動橋段設計、觀眾參與機制",
    goal: "將具有高度資訊量的紀錄片與公共議題轉化為可討論、可互動的橋段設計，讓觀眾不只是觀看內容，也能進一步參與議題思考。",
    result:
      "透過節目互動設計，讓公共議題不只停留在觀看，而能延伸成觀眾可參與、可思考、可討論的內容體驗。",
  },
];

const process = [
  {
    step: "01",
    title: "初步諮詢",
    desc: "了解你的議題、目標對象、預算、期程與想完成的形式。",
  },
  {
    step: "02",
    title: "需求評估",
    desc: "判斷適合做成桌遊、課程、實境遊戲、活動企劃，或其他遊戲化形式。",
  },
  {
    step: "03",
    title: "提案與報價",
    desc: "依照合作範圍，提出設計方向、工作項目、時程與費用。",
  },
  {
    step: "04",
    title: "設計執行",
    desc: "進行內容轉譯、遊戲設計、測試修正、美術製作與印刷規劃。",
  },
  {
    step: "05",
    title: "交付與推廣",
    desc: "依需求交付遊戲成品、教案、講師手冊、培訓課程或推廣活動。",
  },
];

export default function DesignConsultingPage() {
  return (
    <>
      <PageBanner
        image="/images/banners/design-consulting-banner.png"
        imagePosition="50% 53%"
        title="想　設計"
        align="left"
      />

      {/* 2026-08-25 使用者回報「這個頁面也長不一樣」後用即時瀏覽器重新逐一量測才發現：標題其實是
          3 行不是 2 行（原始碼是「把你的議題<br>設計成<br>能參與的遊戲體驗」，中間多一個換行），
          按鈕跟段落文字是同一列並排（按鈕窄欄在左、段落文字在右），不是重建站原本的「標題+段落+
          按鈕」整個垂直堆疊；按鈕本身也是黑底白字直角（`wsite-button-highlight`，跟首頁「適合對象」
          卡片按鈕、DESIGN-SPEC.md 已經記錄過的同一種），不是品牌綠圓角按鈕。 */}
      {/* 2026-08-25 再次量測原站：這段跟下面「你有個重要議題」其實是**同一個** .wsite-section，
          computed background 是 rgba(0,0,0,0)（＝白），重建站原本這段套了 bg-black/[0.03] 極淡灰，
          跟下一段的白底之間會有一條看得出來的接縫。改回白底、合併成一段連續的白色區域。 */}
      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold text-brand-green md:text-4xl">
            把你的議題
            <br />
            設計成
            <br />
            能參與的遊戲體驗
          </h2>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
            <a
              href="https://forms.gle/gipvxKXwpi1iFizs8"
              target="_blank"
              rel="noreferrer"
              className="inline-block shrink-0 bg-black px-[30px] py-3.5 text-sm font-bold text-white transition hover:bg-ink/80"
            >
              填寫合作需求
            </a>
            <p className="max-w-2xl text-ink/70">
              阿普蛙協助基金會、公部門、學校、企業與內容團隊，將教育議題、倡議理念、地方文化或組織需求，轉化為桌遊、實境遊戲、遊戲化活動與推廣教材。我們設計遊戲，也能夠協助完成視覺設計、印刷製作、課程應用與後續推廣，讓一個好概念真正落地被使用。
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-ink md:text-4xl">
                你有個重要議題，卻不知道怎麼讓人靠近嗎？
              </h2>
              <p className="mt-4 text-ink/70">
                議題，有時候太抽象、太嚴肅，或太難在短時間內說清楚。阿普蛙擅長把內容轉化成有情境、有選擇、有互動的遊戲體驗，讓參與者不是被動接收資訊，而是在遊戲中理解、討論與產生感受。
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/design-consulting/banner-question.png"
                alt="擔心受眾不容易理解議題？想開發教具、桌遊或好玩的機制？希望參與者有感？"
                width={757}
                height={413}
                className="h-auto w-full"
              />
            </div>
          </div>
          {/* 2026-08-25：這裡原本嵌了 TZBL1wHPi8Y，但原站這一段只有左文右圖、沒有任何影片，
              那支影片實際上屬於下面「代表案例／誰是政治正確王」那則案例，已移到正確位置。 */}
        </Container>
      </section>

      {/* 從一個想法，到一套能被使用的遊戲教材（原站深綠色區塊：7 步驟流程 + 3 張服務範圍卡片，
          內容全部畫在圖片裡，擷取腳本沒抓到文字，這裡依圖片內容重建） */}
      <section className="bg-[#00573f] py-16 text-white">
        <Container>
          {/* 原站這個區塊的兩個標題量測起來都是 32px 白色粗體 */}
          <h2 className="text-[28px] font-bold md:text-[32px]">
            從一個想法，到一套能被使用的遊戲教材
          </h2>

          {/* 原站是兩欄的 wsite-multicol table：左欄放 01-04、右欄放 05-07（欄內由上往下，
              不是橫向排列），所以這裡用兩個 column 各自 slice，而不是 grid 的 row-major。
              色值都是從原圖合成到 #00573f 底色後取樣出來的：標題金 #fddc95、外框 #b2ccc5、
              描述文字純白。 */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[designSteps.slice(0, 4), designSteps.slice(4)].map((col, ci) => (
              <ol key={ci} className="space-y-5">
                {col.map((s) => (
                  <li
                    key={s.no}
                    className="flex items-start gap-5 rounded-[18px] border border-[#b2ccc5] px-6 py-5"
                  >
                    <span className="shrink-0 border-b border-[#fddc95] pb-1 text-xl text-[#fddc95] md:text-2xl">
                      {s.no}
                      <span className="ml-2 tracking-[0.12em]">{s.title}</span>
                    </span>
                    <p className="text-sm leading-relaxed text-white">
                      {s.desc}
                    </p>
                  </li>
                ))}
              </ol>
            ))}
          </div>

          <h2 className="mt-16 text-[28px] font-bold md:text-[32px]">
            我們提供的不只是遊戲，而是一套讓議題落地的設計服務
          </h2>

          <div className="mt-8 grid items-stretch gap-6 md:grid-cols-3">
            {/* 原圖右上角有一塊很淡的幾何裝飾（#fafafa 之於 #e6e6e7 底），CSS 畫不出來，
                直接把原圖上緣裁下來當底圖：`magick web20_orig.png -crop 788x264+0+0 ...`。
                三張卡的裝飾一模一樣，共用同一張；寬度 100% 讓它跟著卡片等比縮放。 */}
            {pricingTiers.map((t) => (
              <div
                key={t.titleLines.join("")}
                style={{
                  backgroundImage: `url(${withBasePath(
                    "/images/design-consulting/pricing-card-decor.png",
                  )})`,
                }}
                className="flex h-full flex-col rounded-[18px] bg-[#e6e6e7] bg-[length:100%_auto] bg-top bg-no-repeat p-8"
              >
                <h3 className="text-[26px] font-bold leading-[1.35] text-[#008e66] md:text-[28px]">
                  {t.titleLines.map((line, i) => (
                    <span key={line}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.9] text-[#535151]">
                  {t.desc}
                </p>
                <dl className="mt-7 space-y-3">
                  {[
                    { label: "常見預算", value: t.budget },
                    { label: "常見時程", value: t.timeline },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-3">
                      <dt className="shrink-0 rounded-md border border-[#007855] px-2 py-1 text-[13px] leading-none text-[#007855]">
                        {row.label}
                      </dt>
                      <dd className="text-[15px] leading-[1.6] text-[#007855]">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-auto pt-8">
                  <div className="rounded-[10px] bg-[#007855] px-6 py-5 text-[15px] leading-[1.8] text-white">
                    <p>適合對象：</p>
                    {t.audienceLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 原站量測：13px 純白（不是淡化的白），不是重建站原本的 14px white/60 */}
          <p className="mt-8 text-[13px] leading-[1.75] text-white">
            以上為常見合作區間，實際費用與時程會依議題複雜度、設計範圍、測試次數、視覺美術規格、印刷數量與推廣需求調整。若目前還不確定適合做成什麼形式，也歡迎先與我們討論。
          </p>
        </Container>
      </section>

      {/* 合作領域：2026-08-25 逐頁核對才發現原站這裡也是 colored-box 元件（跟首頁「情緒謎語」
          那次踩的坑同一種），每個分類各自一個綠色（#007854，四角 20px 圓角）標題色塊，
          底下才是白色（#ffffff，四角 10px 圓角）卡片——量測 15 個 colored-box-content 的
          background-color／border-radius 抓到規律：綠、白、白，重複 4 次。
          2026-08-26 補正：那個「綠、白、白」其實是**同一列的三個欄位**（左標題、右兩張卡），
          不是「一張卡的 header + body」，見上面 partnerGroups 的註解。 */}
      <section className="bg-[#e6e6e6] py-16">
        <Container>
          {/* 標題是「我們設計遊戲／也深入教學現場」兩行、品牌綠 32px。
              ⚠️ 2026-08-25 更正前一輪的錯誤判斷：底下那段「阿普蛙長期耕耘校園…」**是原站真的有的
              內容**，前一輪用 `grep 阿普蛙長期耕耘校園 page.html` 找不到就當成虛構段落刪掉了——
              但 Weebly 原始碼把中文存成 HTML 數值字元參照（&#38463;&#26222;&#34521;…），
              中文字串直接 grep 本來就一定找不到，是查證方法壞掉、不是內容不存在。
              （text.txt 裡其實看得到這段，當時也沒交叉核對。）已還原。
              查證原始碼一律要先 html.unescape() 再搜尋，見 skill 陷阱 9。 */}
          <h2 className="text-[28px] font-bold text-brand-green md:text-[32px]">
            我們設計遊戲
            <br />
            也深入教學現場
          </h2>

          {/* 原站這段文字跟兩個數字是**同一列**的 4 個欄位（39% 文字 / 8.5% 空欄 /
              21% 個up / 31.7% 場up），不是重建站原本的「文字整段在上、數字另起一列」。
              數字 120px、line-height 130px、置中；標籤 24px 粗體、說明 16px #515151。 */}
          <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-center md:gap-0">
            <p className="text-ink/70 md:w-[39%] md:pr-8">
              阿普蛙長期耕耘校園、教師研習、社福與公共議題現場。
              我們理解不同年齡、對象與帶領者的使用需求，除了考慮「好不好玩」，也在意遊戲能否被理解、被帶領，並真正進入課堂與活動現場。
            </p>
            <div aria-hidden className="hidden md:block md:w-[8.5%]" />
            {counters.map((c, i) => (
              <div
                key={c.unit}
                className={`text-center ${i === 0 ? "md:w-[21%]" : "md:w-[31.5%]"}`}
              >
                <p
                  className={`text-[80px] leading-none md:text-[120px] md:leading-[130px] ${c.color}`}
                >
                  {c.number}
                </p>
                <p className={`text-2xl font-bold ${c.color}`}>{c.unit}</p>
                <p className="mt-1 text-base text-[#515151]">{c.label}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-16 text-[28px] font-bold text-brand-green md:text-[32px]">
            協助合作單位
            <br />
            進行議題遊戲化
          </h2>

          <div className="mt-10 space-y-10">
            {partnerGroups.map((g) => (
              <div
                key={g.titleLines.join("")}
                className="grid gap-6 md:grid-cols-[19fr_41fr_40fr] md:items-start md:gap-8"
              >
                <div className="text-center">
                  <div className="flex min-h-[110px] items-center justify-center rounded-[20px] bg-brand-green px-5 py-6">
                    <h3 className="text-lg font-bold text-white">
                      {g.titleLines.map((line, i) => (
                        <span key={line}>
                          {i > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </h3>
                  </div>
                  {/* 分類標籤在原站是綠色色塊**外面**、置中的 16px 黑字 */}
                  <p className="mt-6 text-base leading-[28px] text-ink">
                    {g.tagLines.map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
                {g.clients.map((c) => (
                  <div
                    key={c.name}
                    className="flex h-full flex-col rounded-[10px] bg-white px-5 py-6"
                  >
                    <div className="flex flex-1 items-center justify-center">
                      {/* w-auto 會讓 next/image 在載入完成前量不到寬度、整張塌成 0x0
                          （版面跳動）。改成 w-full + maxWidth=原圖寬：小圖停在原尺寸，
                          比卡片寬的（政治正確王 1050px）才縮到卡片寬，跟原站一致。 */}
                      <Image
                        src={c.photo}
                        alt={c.name}
                        width={c.width}
                        height={c.height}
                        style={{ maxWidth: c.width }}
                        className="h-auto w-full"
                      />
                    </div>
                    <p className="mt-5 text-center text-base text-ink">
                      {c.name}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 代表案例：跟上一段「合作領域」量測起來是相鄰兩個 section、背景色同樣是 #e6e6e6
          （不是重建站原本以為的白底），維持兩個 <section> 各自套色就好，顏色一致銜接處不會有接縫。 */}
      <section className="bg-[#e6e6e6] py-16">
        <Container>
          {/* 量測 font 得到 36px、品牌綠，不是重建站原本的 24px 黑字。 */}
          <h2 className="text-4xl font-bold text-brand-green">代表案例</h2>

          {cases.map((c, i) => (
            <div key={c.title}>
              {/* 原站的 hr：1px、rgba(0,0,0,0.13)。標題底下一條、案例之間一條 */}
              <hr
                className={`h-px border-0 bg-black/[0.13] ${
                  i === 0 ? "mt-8 mb-14" : "mt-10 mb-20"
                }`}
              />
              <div className="grid gap-8 md:grid-cols-[23fr_41fr_36fr] md:items-start">
                <div>
                  <h3 className="text-2xl font-bold text-ink md:text-[32px]">
                    {c.title}
                  </h3>
                  <dl className="mt-6 space-y-5 text-base">
                    {c.facts.map((f) => (
                      <div key={f.label}>
                        <dt className="font-bold text-[#00573f]">{f.label}</dt>
                        {f.values.map((v) => (
                          <dd key={v} className="text-ink">
                            {v}
                          </dd>
                        ))}
                        {f.note && (
                          <dd className="text-[13px] leading-relaxed text-ink">
                            {f.note}
                          </dd>
                        )}
                      </div>
                    ))}
                  </dl>
                </div>

                {/* 中欄：白色 10px 圓角卡片，裡面是大圖或影片＋置中的合作單位名稱。
                    原站影片那張卡的底色是 #f4f7f8（跟圖片卡的純白不同），照抄。 */}
                <div
                  className={`flex h-full flex-col rounded-[10px] px-5 py-6 ${
                    c.video ? "bg-[#f4f7f8]" : "bg-white"
                  }`}
                >
                  <div className="flex flex-1 items-center justify-center">
                    {c.video ? (
                      <div className="w-full">
                        <YouTubeEmbed id={c.video} title={c.title} />
                      </div>
                    ) : (
                      <Image
                        src={c.image as string}
                        alt={c.title}
                        width={c.imageWidth}
                        height={c.imageHeight}
                        style={{ maxWidth: c.imageWidth }}
                        className="h-auto w-full"
                      />
                    )}
                  </div>
                  <p className="mt-5 text-center text-base text-ink">
                    {c.partner}
                  </p>
                </div>

                <div className="space-y-5 text-base text-ink">
                  <p>
                    <span className="font-bold text-[#00573f]">合作重點｜</span>
                    {c.scope}
                  </p>
                  <p>
                    <span className="font-bold text-[#00573f]">案例目標｜</span>
                    {c.goal}
                  </p>
                  <p>
                    <span className="font-bold text-[#00573f]">實際應用｜</span>
                    {c.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* 更多服務範圍（原站舊版「桌遊設計服務」頁的內容，內容跟現行頁不重複的部分整併進來，
          原始網址 /2481935373353361.html 沒有掛在導覽選單上，判斷是舊版頁面，見 00-plan/MIGRATION-PLAN.md */}
      <section className="py-16">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-ink">桌遊設計</h2>
            <p className="mt-3 text-ink/70">
              當你們想要推廣一個重要議題，擔心原本的倡議方式無法引發人們的興趣，設計一款桌遊或許是你的好選擇！
            </p>
            <p className="mt-3 text-sm text-ink/60">
              阿普蛙目前設計的桌遊或協助桌遊編輯到製作的桌遊有：情緒謎語、碳排危機、綠能變富能、抓誑新聞、家分題、拚陣頭、大政治家：選戰風雲、紳商建廟志、我們的福爾摩沙⋯⋯等。
            </p>
            <h3 className="mt-6 font-bold text-ink">
              找阿普蛙設計桌遊有什麼優勢？
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-ink/70">
              <li>
                阿普蛙關注各類社會議題，因此能夠妥善將議題融入到遊戲當中。
              </li>
              <li>
                使用「機制即訊息」的設計方式，讓玩家在遊戲時就能理解遊戲想要傳遞的重要訊息。
              </li>
              <li>
                協助從桌遊設計到印刷的完整產製流程，讓你不用自行與美術、印刷廠等溝通。
              </li>
              <li>
                阿普蛙擁有豐富教學經驗，不只協助你設計，未來到校園推廣，阿普蛙亦能持續協助。
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-ink">遊戲化活動</h2>
            <p className="mt-3 text-ink/70">
              你覺得自己辦的活動已經缺乏新意了嗎？阿普蛙可以協助你創造新的活動形式、打造耳目一新的感受！
            </p>
            <p className="mt-3 text-sm text-ink/60">
              曾協助舉辦過活動：公視主題之夜 SHOW
              節目、桌上型密室脫逃、社區活動「天橋不見了」、實境遊戲「怪奇博物館」、社會科知識達人競賽等。
            </p>
          </div>

          <div className="md:col-span-2">
            <YouTubeEmbed id="mtvM0cfxePY" title="阿普蛙桌遊設計服務介紹影片" />
          </div>
        </Container>
      </section>

      {/* 合作流程：量測發現這裡其實是「亮綠 #00ab84 外層 section（跟首頁 CTA 同一色）＋白色標題
          ＋裡面再疊一張米白 #f4f7f8、10px 圓角的 colored-box 卡片裝 5 個步驟」，不是重建站原本
          以為的極淡灰底＋純文字。外層綠底 + 卡片兩層都要還原，不能只補卡片漏了外層顏色。

          2026-08-25：原站最後的 CTA「有個重要但不容易說的議題？」其實**就在這同一個綠色 section
          裡面**（不是另外一段白底置中區塊），而且只有一顆「填寫合作需求」按鈕、跟段落文字左右並排
          （原站欄寬 81% 文字 / 14% 按鈕），沒有重建站自己多加的「查看桌遊作品」按鈕。已合併修正。 */}
      <section className="bg-[#00ab84] py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white">合作怎麼開始？</h2>
          <div className="mt-8 rounded-[10px] bg-[#f4f7f8] p-8 md:p-10">
            <ol className="grid gap-6 md:grid-cols-5">
              {process.map((p) => (
                <li key={p.step}>
                  <span className="text-2xl font-bold text-brand-green">
                    {p.step}
                  </span>
                  <h3 className="mt-2 font-bold text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>

          <h2 className="mt-16 text-2xl font-bold text-white md:text-3xl">
            有個重要但不容易說的議題？
          </h2>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
            <p className="text-white/90">
              告訴我們你想推動的議題、對象與使用情境，讓我們一起把它設計成最合適的體驗模式
            </p>
            <a
              href="https://forms.gle/gipvxKXwpi1iFizs8"
              target="_blank"
              rel="noreferrer"
              className="inline-block shrink-0 self-start bg-black px-[30px] py-3.5 text-sm font-bold text-white transition hover:bg-ink/80"
            >
              填寫合作需求
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
