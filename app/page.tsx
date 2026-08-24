import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/_components/Container";

const audiences = [
  {
    title: "遊戲設計",
    tagline: "議題 × 機制 × 測試",
    audience: ["基金會、公部門", "學校、企業、社福組織"],
    href: "/design-consulting",
    cta: "了解設計流程",
  },
  {
    title: "課程與工作坊",
    tagline: "遊戲 × 對話 × 引導",
    audience: ["學校、教師研習、親子活動", "社福單位、企業訓練"],
    href: "/courses",
    cta: "查看課程主題",
  },
  {
    title: "教材與推廣",
    tagline: "桌遊 × 教案 × 推廣",
    audience: ["教師、講師", "活動承辦、教育工作者"],
    href: "/board-games",
    cta: "查看桌遊作品",
  },
];

const testimonials = [
  { name: "小六林同學", quote: "我覺得猜別人情緒很難，原來別人跟我想的不一樣。" },
  { name: "國中專輔老師 Dora", quote: "可以運用在人際關係小團體上，增進覺察他人情緒。" },
  { name: "高中藝術江老師", quote: "利用問問題來推敲情緒，可以訓練高中生有更多的推理與歸納能力。" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black/5 to-white">
        <Container className="grid items-center gap-10 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h1 className="text-3xl leading-snug font-bold text-ink md:text-5xl">
              我們把重要但不容易說的事
              <br />
              設計成可以玩的學習體驗
            </h1>
          </div>
          <div className="relative mx-auto h-64 w-64 md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-full bg-brand-green-bright/20" />
            <div className="absolute inset-6 rounded-full bg-brand-green/80" />
            <Image
              src="/images/brand/logo-mark.png"
              alt="阿普蛙"
              fill
              className="relative object-contain p-10"
              priority
            />
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
                <div className="flex h-40 w-40 flex-col items-center justify-center rounded-2xl bg-brand-green text-white">
                  <span className="text-lg font-bold tracking-wide">{a.title}</span>
                  <span className="mt-2 text-xs text-white/80">{a.tagline}</span>
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

      {/* 全方位服務 */}
      <section className="bg-black/[0.03] py-20">
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
            <p className="mt-4 font-semibold text-brand-green">情緒很重要，卻不一定容易說出口</p>
            <p className="mt-2 text-ink/70">
              我們把情緒辨識、同理感受與人際互動，設計成孩子能遊玩的桌遊體驗，讓情緒教育從講解變成觀察、猜測、表達與討論。
            </p>
            <p className="mt-4 font-semibold text-brand-green">透過遊戲創造一個低壓力的討論環境</p>
            <p className="mt-2 text-ink/70">
              孩子可以從角色、情境和線索出發，慢慢說出自己的猜測，也聽見別人如何理解同一個情境。也許我們的感受與想法不一樣，透過遊戲我們有機會看見彼此的不一樣。
            </p>
          </div>
          <div className="rounded-2xl bg-black/[0.03] p-8">
            <h3 className="text-xl font-bold text-ink">情緒謎語</h3>
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

      {/* 見證 */}
      <section className="bg-black/[0.03] py-20">
        <Container className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-ink/80">「{t.quote}」</p>
              <footer className="mt-4 text-sm font-semibold text-brand-green">{t.name}</footer>
            </blockquote>
          ))}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">有個重要但不容易說的議題？</h2>
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
    </>
  );
}
