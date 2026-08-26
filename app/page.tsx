import { SiteImage as Image } from "@/app/_components/SiteImage";
import Link from "next/link";
import { Container } from "@/app/_components/Container";

const audiences = [
  {
    title: "遊戲設計",
    tagline: "議題 × 機制 × 測試",
    image: "/images/home/audience-1.png",
    audience: ["基金會、公部門", "學校、企業、社福組織"],
    href: "/design-consulting",
    cta: "了解設計流程",
  },
  {
    title: "課程與工作坊",
    tagline: "遊戲 × 對話 × 引導",
    image: "/images/home/audience-2.png",
    audience: ["學校、教師研習、親子活動", "社福單位、企業訓練"],
    href: "/courses",
    cta: "查看課程主題",
  },
  {
    title: "教材與推廣",
    tagline: "桌遊 × 教案 × 推廣",
    image: "/images/home/audience-3.png",
    audience: ["教師、講師", "活動承辦、教育工作者"],
    href: "/board-games",
    cta: "查看桌遊作品",
  },
];

// 原站「如何把議題變成可以玩的學習體驗？」六步驟流程圖，圖片本身就把標題／說明文字都做進去了，
// 這裡直接沿用原圖，不用另外拆文字重排。原站是左右兩欄、由上往下各排 3 張（01-03 在左欄、04-06 在右欄）。
const designSteps = [
  { step: "01", title: "理解議題", src: "/images/home/step-1.png" },
  { step: "02", title: "轉譯機制", src: "/images/home/step-2.png" },
  { step: "03", title: "遊戲測試", src: "/images/home/step-3.png" },
  { step: "04", title: "視覺設計", src: "/images/home/step-4.png" },
  { step: "05", title: "印刷製作", src: "/images/home/step-5.png" },
  { step: "06", title: "課程推廣", src: "/images/home/step-6.png" },
];

const testimonials = [
  {
    name: "小六林同學",
    quote: "我覺得猜別人情緒很難，原來別人跟我想的不一樣。",
    avatar: "/images/home/testimonial-1.png",
  },
  {
    name: "國中專輔老師 Dora",
    quote: "可以運用在人際關係小團體上，增進覺察他人情緒。",
    avatar: "/images/home/testimonial-2.png",
  },
  {
    name: "高中藝術江老師",
    quote: "利用問問題來推敲情緒，可以訓練高中生有更多的推理與歸納能力。",
    avatar: "/images/home/testimonial-3.png",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      {/* 原站首頁 header banner 其實是一張 2000×1001 的合成底圖（灰底+蛙圖+標題文字全部畫在圖裡），
          量測後背景是純色 #e6e6e6（不是漸層），蛙圖貼齊瀏覽器左邊緣、被裁掉一截，標題文字是灰色
          #5b5959 中等字重、**字身是正的、整塊往右上旋轉 -6.2°**（2026-08-26 直接量圖檔像素得到；
          先前寫成「#3f3f3f＋斜體」是錯的，見下方 h1 的註解），跟站內其他標題（700、無旋轉，見
          DESIGN-SPEC.md）不是同一套樣式——這是首頁 hero 專屬的一次性裝飾排版，不是全站字體規則。
          這裡標題文字保留成真正的 DOM 文字（SEO 考量，原站是圖片、不是文字，這是新站故意不照抄的地方）；
          header 是透明疊在這個區塊上面（見 Header.tsx 的 overlay 模式），所以要留 padding-top 讓內容
          不被導覽列蓋到。
          手機版沿用既有的 grid-cols-[auto_1fr] 並排小圖排版（原站手機版蛙圖跟文字並排、圖較小），
          桌機版（md 以上）改用貼齊左邊緣的大圖，跟手機版是兩組獨立的圖，用 md:hidden／hidden md:block 切換。 */}
      <section className="relative overflow-hidden bg-[#e6e6e6] pt-24 pb-10 sm:pt-28 sm:pb-14 md:pt-48 md:pb-24">
        <div className="pointer-events-none absolute -left-10 bottom-0 hidden h-72 w-72 md:block lg:h-80 lg:w-80">
          <Image
            src="/images/brand/hero-bg.png"
            alt=""
            fill
            className="object-contain"
            aria-hidden
          />
        </div>
        <Container className="relative grid grid-cols-[auto_1fr] items-center gap-4 sm:gap-6 md:block">
          <div className="relative h-24 w-24 shrink-0 sm:h-40 sm:w-40 md:hidden">
            <Image
              src="/images/brand/hero-bg.png"
              alt="阿普蛙"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="md:ml-[38%] md:w-[62%]">
            {/* ⚠️ 2026-08-26 更正：這行字在原站是**畫在 banner 圖裡**（441779519.png，2000×1001），
                沒有任何 DOM 元素——所以歷次用 getComputedStyle 做的量測，這行字從頭到尾不會出現在
                任何報表裡，落差才會一直沒被發現（見 skill visual-fidelity-audit.md「文字畫在圖裡時，DOM 量測
                不是量錯」那節；用標題不用編號指過去，編號會隨插入漂移）。
                這次直接量圖檔像素得到：文字色 #5b5959（不是先前寫的 #3f3f3f）、筆畫/字高比 0.10
                ＝中等字重（font-medium 是對的）、字高 40px／字寬 44px（＝ 2000px 圖寬的 2.2%，
                cover 背景會隨視窗等比縮放，所以這裡用 2.2vw 還原）、行高 66/44 ≈ 1.5。
                **最關鍵的一項：原站不是斜體，是整塊往右上「旋轉」-6.2°**——字身本身是正的。
                先前寫成 italic（合成傾斜字身）才會看起來又黑又粗又歪。
                文字本身保留成真正的 DOM 文字（SEO，原站是圖片），是刻意的偏離。 */}
            <h1 className="origin-left rotate-[-6.2deg] text-[15px] leading-[1.5] font-medium whitespace-nowrap text-[#5b5959] sm:text-2xl md:text-[clamp(1.25rem,2.2vw,3rem)]">
              <span className="block">我們把重要但不容易說的事</span>
              {/* 原圖裡兩行不是左右對齊也不是置中：把整塊轉正後量，第二行左緣比第一行左 82px，
                  字寬 44px → 1.86em。手機版的圖文並排欄很窄，負縮排會擠出去，所以只在 md 以上套用。 */}
              <span className="block md:-ml-[1.86em]">設計成可以玩的學習體驗</span>
            </h1>
          </div>
        </Container>
      </section>

      {/* 議題變成可參與的學習現場 */}
      {/* 原站這一段背景是 linear-gradient(白 0% → #e6e6e6 100%)，量測 .wsite-section 的
          computed backgroundImage 得到，不是純白（見 DESIGN-SPEC.md）。 */}
      <section className="bg-gradient-to-b from-white to-[#e6e6e6] py-20">
        <Container>
          <h2 className="text-center text-2xl font-bold text-ink md:text-3xl">
            「議題」變成可參與的學習現場
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink/70">
            從一款桌遊、一堂課，到一整套教育推廣方案，阿普蛙將重要議題設計成容易進入、願意討論、能留下感受的體驗。
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {audiences.map((a) => (
              <div
                key={a.href}
                className="flex flex-col items-center text-center"
              >
                <div className="relative h-40 w-40">
                  <Image
                    src={a.image}
                    alt={`${a.title}：${a.tagline}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-6 text-sm font-bold text-ink">適合對象</h3>
                <p className="mt-1 text-sm text-ink/70">
                  {a.audience.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                {/* 原站這顆按鈕（wsite-button-highlight）預設就是黑底白字、直角，不是外框、
                    也不是 hover 才變黑——量測 computed style 得到，跟站內其他圓角按鈕是不同樣式。 */}
                <Link
                  href={a.href}
                  className="mt-4 bg-black px-[30px] py-3.5 text-sm font-bold text-white transition hover:bg-ink/80"
                >
                  {a.cta}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 原站從「如何把議題變成可以玩的學習體驗？」一路到「見證」，其實是同一個 wsite-section，
          共用同一片純色 #cccccc 灰底（量測得到，不是漸層也不是 bg-black/[0.03] 這種極淡的疊色），
          底下這幾個區塊改成同一個 <section> 底下的多個 <Container>，不要拆成各自獨立、背景各異的
          section，不然接縫處的顏色落差看得出來。 */}
      <section className="relative overflow-hidden bg-[#cccccc] py-20">
        <Container>
          <h2 className="text-center text-2xl font-bold text-ink md:text-3xl">
            如何把議題變成可以玩的學習體驗？
          </h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
            {[0, 1, 2].map((row) => (
              <div key={row} className="contents">
                <div className="relative aspect-[3072/651] w-full overflow-hidden rounded-xl">
                  <Image
                    src={designSteps[row].src}
                    alt={`${designSteps[row].step} ${designSteps[row].title}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative aspect-[3072/651] w-full overflow-hidden rounded-xl">
                  <Image
                    src={designSteps[row + 3].src}
                    alt={`${designSteps[row + 3].step} ${designSteps[row + 3].title}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>

        {/* 從「全方位服務」到「見證」其實是同一個 colored-box 元件（原站量測 .colored-box-content
            得到兩截：上半綠色 rgb(0,120,84)、只有上緣圓角 10px 10px 0 0；下半米白 rgb(244,247,248)
            （#f4f7f8，不是純白也不是灰底！）、只有下緣圓角 0 0 10px 10px——兩截接在一起看起來是
            一整張卡片，寬度等於 Container 扣掉自身 padding 後的內容寬（1120/1200），不用再另外內縮）。
            重建站原本完全沒有這張卡片，商品亮點／三步驟圖／見證全部直接畫在外層 #cccccc 灰底上，
            這是「畫面看起來不一樣」的主因之一，用 overflow-hidden + rounded-2xl 包住上下兩截還原。 */}
        <Container className="mt-16">
          <div className="overflow-hidden rounded-2xl">
            <div className="flex flex-col items-center gap-6 bg-brand-green px-8 py-8 sm:flex-row sm:gap-10 sm:px-10">
              <div className="relative h-28 w-28 shrink-0 sm:h-32 sm:w-32">
                <Image
                  src="/images/brand/hero-bg.png"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden
                />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  從設計到推廣的全方位服務
                </h2>
                <p className="mt-2 text-[#f8eaa9]">
                  從議題轉譯到教學推廣，阿普蛙陪你走整段路
                </p>
              </div>
            </div>

            <div className="bg-[#f4f7f8] px-6 pt-10 pb-16 sm:px-10">
              {/* 商品亮點：情緒謎語 —— 原站是「欄」不是「列」：左欄由上而下＝標題＋兩段文字，
                  右欄由上而下＝孩子指認情緒卡照片；下面另一列左欄＝商品封面照，右欄＝商品資訊＋按鈕。
                  重建站原本把「標題＋照片＋文字」全塞進左欄、右欄整個換成商品卡，欄位配置整個是錯的，
                  量測每個文字/圖片元素的 x 座標才抓到（照片 x 落在右欄範圍、不是左欄）。 */}
              <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-bold text-ink">
                    一款桌遊，如何讓孩子開始談情緒？
                  </h2>
                  <p className="mt-6 font-semibold text-brand-green">
                    情緒很重要，卻不一定容易說出口
                  </p>
                  <p className="mt-2 text-ink/70">
                    我們把情緒辨識、同理感受與人際互動，設計成孩子能遊玩的桌遊體驗，讓情緒教育從講解變成觀察、猜測、表達與討論。
                  </p>
                  <p className="mt-4 font-semibold text-brand-green">
                    透過遊戲創造一個低壓力的討論環境
                  </p>
                  <p className="mt-2 text-ink/70">
                    孩子可以從角色、情境和線索出發，慢慢說出自己的猜測，也聽見別人如何理解同一個情境。也許我們的感受與想法不一樣，透過遊戲我們有機會看見彼此的不一樣。
                  </p>
                </div>
                <div>
                  <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl">
                    <Image
                      src="/images/home/emotion-cards.jpg"
                      alt="孩子們一起指認情緒卡的照片"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-white">
                    <Image
                      src="/images/home/riddle-me-feelings-box.png"
                      alt="情緒謎語（雙語版）桌遊封面"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-green">
                    情緒謎語
                  </h3>
                  <p className="mt-1 text-xs font-semibold tracking-wide text-brand-green">
                    SEL
                  </p>
                  <p className="mt-3 text-sm text-ink/70">
                    這是一款將校園人際衝突與情緒理解，設計成可以觀察、推理與表達的雙語桌遊。孩子在遊戲中練習辨識情緒、理解他人反應，也讓老師能輕鬆把
                    SEL、人際溝通與表演活動帶進課堂。
                  </p>
                  <div className="mt-6 flex gap-3">
                    <Link
                      href="/board-games/riddle-me-feelings"
                      className="rounded-full bg-brand-green px-5 py-2 text-sm font-semibold text-white"
                    >
                      了解更多
                    </Link>
                    <a
                      href="https://forms.gle/EdEpqW4dK4GH5Pmg8"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-ink px-5 py-2 text-sm font-semibold text-ink"
                    >
                      課程邀約
                    </a>
                  </div>
                </div>
              </div>

              {/* 情緒謎語的設計脈絡：從議題出發→轉化成遊戲→延伸到課堂 */}
              <div className="mt-10 flex justify-center">
                <div className="relative aspect-[1123/540] w-full max-w-3xl">
                  <Image
                    src="/images/home/design-process.png"
                    alt="從議題出發、轉化成遊戲、延伸到課堂"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* 見證：這三則量測起來確實在同一張米白卡片裡（跟卡片外的灰底是兩個不同背景），
                  但文字本身沒有另外包白色小卡片／陰影，維持直接放在卡片背景上。 */}
              <div className="mt-10 grid gap-8 md:grid-cols-3">
                {testimonials.map((t) => (
                  <blockquote key={t.name} className="text-center md:text-left">
                    <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full md:mx-0">
                      <Image
                        src={t.avatar}
                        alt=""
                        fill
                        className="object-cover"
                        aria-hidden
                      />
                    </div>
                    <p className="mt-4 text-ink/80">「{t.quote}」</p>
                    <footer className="mt-4 text-sm font-semibold text-brand-green">
                      {t.name}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA ＋ 合作夥伴：原站這兩塊也是同一個 wsite-section，純色亮綠 #00ab84 底、白字，
          按鈕是透明底＋白色外框＋直角（不是重建站原本的實心綠／黑框圓角），「合作夥伴」標題
          也在同一片綠底上，不是獨立的白底 section——都是量測 computed style 得到，不是憑印象。 */}
      <section className="relative overflow-hidden bg-[#00ab84] py-24 text-white">
        <Container className="relative text-center">
          <div className="relative mx-auto h-20 w-20">
            <Image
              src="/images/brand/hero-bg.png"
              alt=""
              fill
              className="object-contain"
              aria-hidden
            />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">
            有個重要但不容易說的議題？
          </h2>
          <p className="mt-3 text-white/90">
            讓我們一起把它設計成可以玩的學習體驗
          </p>
          <p className="mt-1 text-white/90">
            你可以從一堂課、一款桌遊，或一個完整的教育推廣專案開始
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://forms.gle/gipvxKXwpi1iFizs8"
              target="_blank"
              rel="noreferrer"
              className="border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-brand-green-bright"
            >
              聊聊你的議題
            </a>
            <Link
              href="/design-consulting"
              className="border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-brand-green-bright"
            >
              了解設計流程
            </Link>
          </div>
        </Container>

        {/* 2026-08-25 使用者又抓到一次落差：logo 牆其實有包一張白色 colored-box 卡片
            （量測 .colored-box-content 得到 bg #ffffff、四角 10px 圓角、padding 20px 10px），
            上一輪判斷「沒有包白卡」是漏看了——這個元素在原站 fetch 下來的 page.html 裡完全沒有
            （擷取腳本抓的那份是舊版內容，這段是之後才用即時瀏覽器 DOM 補回來的，補的時候只查了
            logo 圖檔本身背景透明，沒有再往上一層查有沒有卡片容器），這次改用即時瀏覽器把
            .colored-box-content 完整清單重新掃一次才抓到。標題「合作夥伴」在卡片外面、白字、
            置中，卡片本身才裝 logo 圖。 */}
        <Container className="relative mt-20">
          <h2 className="text-center text-2xl font-bold tracking-[0.3em] text-white md:text-3xl">
            合作夥伴
          </h2>
          <div className="mx-auto mt-10 max-w-4xl rounded-[10px] bg-white px-2.5 py-5">
            <div className="relative aspect-[946/528] w-full">
              <Image
                src="/images/home/partners.png"
                alt="合作夥伴：為台灣而教、台灣主婦聯盟生活消費合作社、國立臺灣圖書館、小公視、家扶基金會、台灣股票博物館、基隆市文化觀光局、台少盟、公視兒少、公視主題之夜SHOW、勵馨基金會、彭婉如文教基金會、AIC、金車文教基金會、康軒文教事業、臺南市政府文化局、翰林出版"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
