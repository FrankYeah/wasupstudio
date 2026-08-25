import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";
import { PageBanner } from "@/app/_components/PageBanner";
import { YouTubeEmbed } from "@/app/_components/YouTubeEmbed";

export const metadata: Metadata = {
  title: "想設計",
  description:
    "阿普蛙協助基金會、公部門、學校、企業與內容團隊，將教育議題、倡議理念、地方文化或組織需求，轉化為桌遊、實境遊戲、遊戲化活動與推廣教材。",
};

const serviceScopes = [
  {
    title: "個 up",
    subtitle: "議題遊戲與教材設計專案",
    groups: [
      {
        title: "社會情緒與人際溝通",
        titleLines: ["社會情緒", "與人際溝通"],
        tags: ["情緒教育｜人際關係", "職場溝通｜家庭互動"],
        clients: [
          {
            name: "勵馨基金會｜桌遊",
            photo: "/images/design-consulting/client-family-topics.png",
          },
          {
            name: "勞動部｜桌遊",
            photo: "/images/design-consulting/client-honest-honor.png",
          },
        ],
      },
      {
        title: "教育與人權",
        titleLines: ["教育與人權"],
        tags: ["兒童權利｜校園霸凌", "民主參與｜性別平等"],
        clients: [
          {
            name: "兒福聯盟｜桌遊",
            photo: "/images/design-consulting/client-future-parliament.png",
          },
          {
            name: "RC 基金會｜數位教材",
            photo: "/images/design-consulting/client-rc-digital.png",
          },
        ],
      },
      {
        title: "環境永續與公共議題",
        titleLines: ["環境永續", "與公共議題"],
        tags: ["SDGs｜媒體識讀", "公民參與｜社會倡議"],
        clients: [
          {
            name: "金車文教基金會｜桌遊",
            photo: "/images/design-consulting/client-workplace-crisis.png",
          },
          {
            name: "公視主題之夜 SHOW｜影視節目",
            photo: "/images/design-consulting/client-political-correct.png",
          },
        ],
      },
      {
        title: "地方文化與實境體驗",
        titleLines: ["地方文化", "與實境體驗"],
        tags: ["地方文化｜城市探索", "實境遊戲｜展覽互動"],
        clients: [
          {
            name: "台南文化局｜桌遊",
            photo: "/images/design-consulting/client-pin-zhentou.png",
          },
          {
            name: "星濱山共創工作室｜實境遊戲",
            photo: "/images/design-consulting/client-star-beach.png",
          },
        ],
      },
    ],
  },
  {
    title: "場 up",
    subtitle: "課程、工作坊與推廣活動",
    groups: [],
  },
];

// 原站在「從一個想法，到一套能被使用的遊戲教材」深綠色區塊裡，用純圖片（web20/21/22_orig.png）
// 呈現這 3 張服務範圍卡片，文字是畫在圖片裡的，擷取腳本抓不到，這裡依圖片內容重建成一般文字卡片。
const pricingTiers = [
  {
    title: "議題桌遊設計",
    desc: "將教育議題、倡議理念或培訓需求，轉化成可遊玩、可討論、可帶領的桌遊體驗。",
    budget: "20 萬元起，完整開發與印刷製作多落在 40 萬元以上",
    timeline: "3–6 個月起",
    audience: "基金會、公部門、學校、社福組織、企業培訓、出版社、教育單位",
  },
  {
    title: "實境遊戲與遊戲化活動",
    desc: "依場域、故事、任務與參與者動線，設計展覽互動、地方探索、活動闖關或城市走讀體驗。",
    budget: "15 萬元起，依場域、道具與互動規模調整",
    timeline: "2–4 個月起",
    audience: "文化單位、圖書館、博物館、學校、地方創生團隊、活動策畫單位",
  },
  {
    title: "內容企劃與節目遊戲化",
    desc: "協助內容團隊設計節目單元、互動橋段、遊戲規則、討論題與觀眾參與機制。",
    budget: "單次企劃 5 萬元起，系列合作另行評估",
    timeline: "2–8 週起",
    audience: "電視台、Podcast、活動製作團隊、影音團隊、內容平台、教育媒體",
  },
];

// 同一深綠色區塊裡，還有一組 7 步驟的工作流程（需求釐清→...→課程推廣），
// 也是純圖片（web-23~29_orig.png），文字同樣是畫在圖片裡的，一併重建。
const designSteps = [
  "需求釐清",
  "議題轉譯",
  "遊戲設計",
  "原型測試",
  "視覺美術",
  "印刷製作",
  "課程推廣",
];

const cases = [
  {
    title: "抓誑新聞",
    type: "媒體識讀桌遊",
    image: "/images/design-consulting/case-crazy-news.png",
    stats: [
      { label: "桌遊銷售", value: "達 3000 盒" },
      {
        label: "授課場次",
        value: "200 場（含教師研習、入班授課、一般民眾媒體識讀課程）",
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
    type: "影視節目遊戲化企劃",
    image: "/images/design-consulting/client-political-correct.png",
    stats: [
      { label: "第一集 YouTube 觀看次數", value: "27 萬" },
      { label: "第二集 YouTube 觀看次數", value: "6.7 萬" },
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
      <section className="bg-black/[0.03] py-20">
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

          <div className="mt-12">
            <YouTubeEmbed
              id="TZBL1wHPi8Y"
              title="阿普蛙議題遊戲設計服務介紹影片"
            />
          </div>
        </Container>
      </section>

      {/* 從一個想法，到一套能被使用的遊戲教材（原站深綠色區塊：7 步驟流程 + 3 張服務範圍卡片，
          內容全部畫在圖片裡，擷取腳本沒抓到文字，這裡依圖片內容重建） */}
      <section className="bg-[#00573f] py-16 text-white">
        <Container>
          <h2 className="text-2xl font-bold md:text-3xl">
            從一個想法，到一套能被使用的遊戲教材
          </h2>

          <ol className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {designSteps.map((title, i) => (
              <li key={title} className="border-b border-white/20 pb-3">
                <span className="text-2xl font-bold text-[#f5cf7e]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ml-3 text-lg font-semibold text-[#f5cf7e]">
                  {title}
                </span>
              </li>
            ))}
          </ol>

          <h2 className="mt-16 text-2xl font-bold md:text-3xl">
            我們提供的不只是遊戲，而是一套讓議題落地的設計服務
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <h3 className="text-lg font-bold text-white">{t.title}</h3>
                <p className="mt-2 text-sm text-white/70">{t.desc}</p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div>
                    <dt className="inline rounded border border-[#f5cf7e]/60 px-2 py-0.5 text-xs text-[#f5cf7e]">
                      常見預算
                    </dt>
                    <dd className="mt-1 text-white/80">{t.budget}</dd>
                  </div>
                  <div>
                    <dt className="inline rounded border border-[#f5cf7e]/60 px-2 py-0.5 text-xs text-[#f5cf7e]">
                      常見時程
                    </dt>
                    <dd className="mt-1 text-white/80">{t.timeline}</dd>
                  </div>
                </dl>
                <div className="mt-4 rounded-xl bg-black/20 p-4 text-sm">
                  <p className="font-semibold text-white">適合對象：</p>
                  <p className="mt-1 text-white/80">{t.audience}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-white/60">
            以上為常見合作區間，實際費用與時程會依議題複雜度、設計範圍、測試次數、視覺美術規格、印刷數量與推廣需求調整。若目前還不確定適合做成什麼形式，也歡迎先與我們討論。
          </p>
        </Container>
      </section>

      {/* 合作領域：2026-08-25 逐頁核對才發現原站這裡也是 colored-box 元件（跟首頁「情緒謎語」
          那次踩的坑同一種），每個分類各自一個綠色（#007854，四角 20px 圓角）標題色塊，
          底下才是白色（#ffffff，四角 10px 圓角）логo 卡片——量測 15 個 colored-box-content 的
          background-color／border-radius 抓到規律：綠、白、白，重複 4 次。重建站原本把每個分類
          直接畫成一張白卡（標題+logo 都在同一張卡裡），沒有綠色標題色塊，一併補上。 */}
      <section className="bg-[#e6e6e6] py-16">
        <Container>
          {/* 2026-08-25 重新量測發現：標題其實是「我們設計遊戲／也深入教學現場」兩行、品牌綠
              32px（不是重建站原本的一行黑字），下面接著還有一句同樣風格的兩行副標「協助合作單位／
              進行議題遊戲化」，重建站原本完全沒有這句、卻多寫了一段原站沒有的段落文字
              （「阿普蛙長期耕耘校園...」在原始碼裡找不到，是虛構補上去的），已拿掉換成真正的副標。 */}
          <h2 className="text-3xl font-bold text-brand-green md:text-4xl">
            我們設計遊戲
            <br />
            也深入教學現場
          </h2>
          <h2 className="mt-6 text-3xl font-bold text-brand-green md:text-4xl">
            協助合作單位
            <br />
            進行議題遊戲化
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {serviceScopes[0].groups.map((g) => (
              <div key={g.title} className="overflow-hidden rounded-[20px]">
                <div className="bg-brand-green px-6 py-4">
                  <h3 className="font-bold text-white">
                    {g.titleLines.map((line, i) => (
                      <span key={line}>
                        {i > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </h3>
                  <p className="mt-1 text-xs text-white/70">
                    {g.tags.join("　")}
                  </p>
                </div>
                <ul className="space-y-3 rounded-b-[10px] bg-white p-6 shadow-sm">
                  {g.clients.map((c) => (
                    <li key={c.name} className="flex items-center gap-3">
                      <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-black/5">
                        <Image
                          src={c.photo}
                          alt={c.name}
                          fill
                          className="object-cover"
                        />
                      </span>
                      <span className="text-sm text-brand-green">{c.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 代表案例：跟上一段「合作領域」量測起來是相鄰兩個 section、背景色同樣是 #e6e6e6
          （不是重建站原本以為的白底），維持兩個 <section> 各自套色就好，顏色一致銜接處不會有接縫。 */}
      <section className="bg-[#e6e6e6] py-16">
        <Container>
          {/* 量測 font 得到 48px、品牌綠，不是重建站原本的 24px 黑字。 */}
          <h2 className="text-4xl font-bold text-brand-green md:text-5xl">
            代表案例
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {cases.map((c) => (
              <div
                key={c.title}
                className="overflow-hidden rounded-2xl border border-black/5"
              >
                <div className="relative aspect-video w-full bg-black/5">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-brand-green">
                    {c.type}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-ink">{c.title}</h3>
                  <p className="mt-1 text-sm text-ink/50">
                    合作單位：{c.partner}
                  </p>
                  <dl className="mt-4 space-y-1 text-sm text-ink/70">
                    {c.stats.map((s) => (
                      <div key={s.label}>
                        <dt className="inline font-semibold text-ink">
                          {s.label}：
                        </dt>
                        <dd className="inline">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-sm text-ink/70">
                    <span className="font-semibold text-ink">合作重點｜</span>
                    {c.scope}
                  </p>
                  <p className="mt-2 text-sm text-ink/70">
                    <span className="font-semibold text-ink">案例目標｜</span>
                    {c.goal}
                  </p>
                  <p className="mt-2 text-sm text-ink/70">
                    <span className="font-semibold text-ink">實際應用｜</span>
                    {c.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 合作流程：量測發現這裡其實是「亮綠 #00ab84 外層 section（跟首頁 CTA 同一色）＋白色標題
          ＋裡面再疊一張米白 #f4f7f8、10px 圓角的 colored-box 卡片裝 5 個步驟」，不是重建站原本
          以為的極淡灰底＋純文字。外層綠底 + 卡片兩層都要還原，不能只補卡片漏了外層顏色。 */}
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

      <section className="py-20 text-center">
        <Container>
          <h2 className="text-2xl font-bold text-ink md:text-3xl">
            有個重要但不容易說的議題？
          </h2>
          <p className="mt-3 text-ink/70">
            告訴我們你想推動的議題、對象與使用情境，讓我們一起把它設計成最合適的體驗模式
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://forms.gle/gipvxKXwpi1iFizs8"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-green px-8 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
            >
              填寫合作需求
            </a>
            <Link
              href="/board-games"
              className="rounded-full border border-ink px-8 py-3 font-semibold text-ink"
            >
              查看桌遊作品
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
