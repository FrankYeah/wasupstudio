import type { Metadata } from "next";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "情緒謎語（雙語版）",
  description:
    "人際溝通 × 社會情緒學習 × 表演藝術。校園人際衝突雙語桌遊，練習辨識情緒、理解他人反應，讓 SEL、人際溝通與表演活動輕鬆帶進課堂。",
};

const features = [
  "中英對照，雙語教學也很罩",
  "18 張情緒卡及情緒圖版，認識不同情緒的強度",
  "包含邏輯推理、表情及肢體語言觀察情緒等玩法",
  "精華事件卡題庫，結合生活化的對話情境",
  "只需要一盒就可以全班分組進行，老師操作無負擔",
];

const info = [
  ["遊戲年紀", "10 歲以上"],
  ["遊戲時間", "30-45 分鐘"],
  ["遊戲人數", "3-6 人（組）"],
  ["售價", "960 元（消費滿 2000 免運）"],
];

export default function RiddleMeFeelingsPage() {
  return (
    <Container className="py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black/[0.03]">
          <Image
            src="/images/products/riddle-me-feelings.png"
            alt="情緒謎語（雙語版）桌遊封面"
            fill
            className="object-contain p-6"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-brand-green">人際溝通 × 社會情緒學習（SEL） × 表演藝術</p>
          <h1 className="mt-2 text-3xl font-bold text-ink">情緒謎語（雙語版）</h1>
          <p className="mt-4 text-ink/70">
            本遊戲適合教師於課堂作為雙語教學、人際溝通、社會情緒學習（SEL）、表演藝術教材使用，說明書有另外說明課堂操作模式。
          </p>

          <h2 className="mt-8 text-lg font-bold text-ink">遊戲介紹</h2>
          <p className="mt-2 text-ink/70">
            在這款校園人際衝突遊戲中，玩家將體驗到現實生活中的情感挑戰。想像一下，有個同學把你送他的禮物丟掉，你的感受會是什麼？是難過？生氣？或者討厭？
            遊戲中，玩家要察言觀色，猜測他人的情緒，並了解他們在面對類似情況時可能的反應。透過遊戲，我們希望玩家可以更好地理解人際關係的複雜性，並學會更好地溝通與理解他人。
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
              href="https://forms.gle/7VRyuppQovMcmSC28"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
            >
              購買連結
            </a>
            <a
              href="https://forms.gle/7FqM18Ei29dgTnh96"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink px-6 py-3 font-semibold text-ink"
            >
              課程邀約
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
