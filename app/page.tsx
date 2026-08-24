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
  { name: "小六林同學", quote: "我覺得猜別人情緒很難，原來別人跟我想的不一樣。", avatar: "/images/home/testimonial-1.png" },
  { name: "國中專輔老師 Dora", quote: "可以運用在人際關係小團體上，增進覺察他人情緒。", avatar: "/images/home/testimonial-2.png" },
  { name: "高中藝術江老師", quote: "利用問問題來推敲情緒，可以訓練高中生有更多的推理與歸納能力。", avatar: "/images/home/testimonial-3.png" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      {/* 原站首頁 header banner 其實是一張 2000×1001 的合成底圖（灰底+蛙圖+標題文字全部畫在圖裡），
          量測後背景是純色 #e6e6e6（不是漸層），蛙圖貼齊瀏覽器左邊緣、被裁掉一截，標題文字是深灰
          （約 #3f3f3f）中等字重＋斜體，跟站內其他標題（正常字重、無斜體，見 DESIGN-SPEC.md）不是
          同一套樣式——這是首頁 hero 專屬的一次性裝飾排版，不是全站字體規則。這裡標題文字保留成真正的
          DOM 文字（SEO 考量，原站是圖片、不是文字，這是新站故意不照抄的地方），視覺上比照顏色/字重還原；
          header 是透明疊在這個區塊上面（見 Header.tsx 的 overlay 模式），所以要留 padding-top 讓內容
          不被導覽列蓋到。
          手機版沿用既有的 grid-cols-[auto_1fr] 並排小圖排版（原站手機版蛙圖跟文字並排、圖較小），
          桌機版（md 以上）改用貼齊左邊緣的大圖，跟手機版是兩組獨立的圖，用 md:hidden／hidden md:block 切換。 */}
      <section className="relative overflow-hidden bg-[#e6e6e6] pt-24 pb-10 sm:pt-28 sm:pb-14 md:pt-48 md:pb-24">
        <div className="pointer-events-none absolute -left-10 bottom-0 hidden h-72 w-72 md:block lg:h-80 lg:w-80">
          <Image src="/images/brand/hero-bg.png" alt="" fill className="object-contain" aria-hidden />
        </div>
        <Container className="relative grid grid-cols-[auto_1fr] items-center gap-4 sm:gap-6 md:block">
          <div className="relative h-24 w-24 shrink-0 sm:h-40 sm:w-40 md:hidden">
            <Image src="/images/brand/hero-bg.png" alt="阿普蛙" fill className="object-contain" priority />
          </div>
          <div className="md:ml-[38%] md:w-[62%]">
            <h1 className="text-lg leading-snug font-medium text-[#3f3f3f] italic sm:text-2xl md:text-3xl lg:text-4xl">
              我們把重要但不容易說的事
              <br />
              設計成可以玩的學習體驗
            </h1>
          </div>
        </Container>
      </section>

      {/* 議題變成可參與的學習現場 */}
      <section className="py-20">
        <Container>
          <h2 className="text-center text-2xl font-bold text-ink md:text-3xl">
            「議題」變成可參與的學習現場
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink/70">
            從一款桌遊、一堂課，到一整套教育推廣方案，阿普蛙將重要議題設計成容易進入、願意討論、能留下感受的體驗。
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {audiences.map((a) => (
              <div key={a.href} className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40">
                  <Image src={a.image} alt={`${a.title}：${a.tagline}`} fill className="object-contain" />
                </div>
                <h3 className="mt-6 text-sm font-bold text-ink">適合對象</h3>
                <p className="mt-1 text-sm text-ink/70">
                  {a.audience.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <Link
                  href={a.href}
                  className="mt-4 rounded-full border border-ink px-5 py-2 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                >
                  {a.cta}
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 如何把議題變成可以玩的學習體驗？ */}
      <section className="relative overflow-hidden bg-black/[0.03] py-20">
        <div className="absolute -right-10 -bottom-10 h-56 w-56 opacity-10 md:h-72 md:w-72">
          <Image src="/images/brand/hero-bg.png" alt="" fill className="object-contain" aria-hidden />
        </div>
        <Container className="relative">
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
      </section>

      {/* 全方位服務 */}
      <section className="py-20">
        <Container>
          <h2 className="text-center text-2xl font-bold text-ink md:text-3xl">
            從設計到推廣的全方位服務
          </h2>
          <p className="mt-3 text-center text-ink/70">從議題轉譯到教學推廣，阿普蛙陪你走整段路</p>
        </Container>
      </section>

      {/* 商品亮點：情緒謎語 */}
      <section className="py-20">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink">一款桌遊，如何讓孩子開始談情緒？</h2>
            <div className="relative mt-6 aspect-square w-full max-w-xs overflow-hidden rounded-2xl">
              <Image
                src="/images/home/emotion-cards.jpg"
                alt="孩子們一起指認情緒卡的照片"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-6 font-semibold text-brand-green">情緒很重要，卻不一定容易說出口</p>
            <p className="mt-2 text-ink/70">
              我們把情緒辨識、同理感受與人際互動，設計成孩子能遊玩的桌遊體驗，讓情緒教育從講解變成觀察、猜測、表達與討論。
            </p>
            <p className="mt-4 font-semibold text-brand-green">透過遊戲創造一個低壓力的討論環境</p>
            <p className="mt-2 text-ink/70">
              孩子可以從角色、情境和線索出發，慢慢說出自己的猜測，也聽見別人如何理解同一個情境。也許我們的感受與想法不一樣，透過遊戲我們有機會看見彼此的不一樣。
            </p>
          </div>
          <div className="rounded-2xl bg-black/[0.03] p-8">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-white">
              <Image
                src="/images/home/riddle-me-feelings-box.png"
                alt="情緒謎語（雙語版）桌遊封面"
                fill
                className="object-contain p-4"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-ink">情緒謎語</h3>
            <p className="mt-1 text-xs font-semibold tracking-wide text-brand-green">SEL</p>
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
        </Container>
      </section>

      {/* 情緒謎語的設計脈絡：從議題出發→轉化成遊戲→延伸到課堂 */}
      <section className="py-4">
        <Container className="flex justify-center">
          <div className="relative aspect-[1123/540] w-full max-w-3xl">
            <Image src="/images/home/design-process.png" alt="從議題出發、轉化成遊戲、延伸到課堂" fill className="object-contain" />
          </div>
        </Container>
      </section>

      {/* 見證 */}
      <section className="bg-black/[0.03] py-20">
        <Container className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-xl bg-white p-6 shadow-sm">
              <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full">
                <Image src={t.avatar} alt="" fill className="object-cover" aria-hidden />
              </div>
              <p className="mt-4 text-ink/80">「{t.quote}」</p>
              <footer className="mt-4 text-sm font-semibold text-brand-green">{t.name}</footer>
            </blockquote>
          ))}
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <Container className="relative text-center">
          <div className="relative mx-auto h-20 w-20">
            <Image src="/images/brand/hero-bg.png" alt="" fill className="object-contain" aria-hidden />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-ink md:text-3xl">有個重要但不容易說的議題？</h2>
          <p className="mt-3 text-ink/70">讓我們一起把它設計成可以玩的學習體驗</p>
          <p className="mt-1 text-ink/70">你可以從一堂課、一款桌遊，或一個完整的教育推廣專案開始</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://forms.gle/gipvxKXwpi1iFizs8"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-green px-8 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
            >
              聊聊你的議題
            </a>
            <Link
              href="/design-consulting"
              className="rounded-full border border-ink px-8 py-3 font-semibold text-ink"
            >
              了解設計流程
            </Link>
          </div>
        </Container>
      </section>

      {/* 合作夥伴 */}
      <section className="py-16">
        <Container>
          <h2 className="text-center text-2xl font-bold text-ink md:text-3xl">合作夥伴</h2>
          <div className="relative mx-auto mt-10 aspect-[946/528] w-full max-w-4xl">
            <Image src="/images/home/partners.png" alt="合作夥伴：為台灣而教、台灣主婦聯盟生活消費合作社、國立臺灣圖書館、小公視、家扶基金會、台灣股票博物館、基隆市文化觀光局、台少盟、公視兒少、公視主題之夜SHOW、勵馨基金會、彭婉如文教基金會、AIC、金車文教基金會、康軒文教事業、臺南市政府文化局、翰林出版" fill className="object-contain" />
          </div>
        </Container>
      </section>
    </>
  );
}
