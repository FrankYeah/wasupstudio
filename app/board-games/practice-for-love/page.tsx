import type { Metadata } from "next";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "練愛猜心",
  description:
    "性別平等 × 人際溝通。透過情緒卡與事件卡題庫，練習傾聽與同理，適合教師於課堂作為情感教育、性平教育教材使用。",
};

const features = [
  "七張情緒卡，讓玩家熟悉人的基本情緒。",
  "互動中了解不同人的感受、想法，培養同理心。",
  "大量事件卡題庫，接地氣又有教育意義。",
  "標示性平事件及尋求哪些單位合作，提供老師參考。",
  "只需要一盒就可以全班分組進行，老師操作無負擔！",
];

const info = [
  ["遊戲人數", "3-6人（組）"],
  ["適合年紀", "10歲以上"],
  ["遊戲時間", "30-45分鐘（一節課）"],
  ["售價", "690元（消費滿2000免運）"],
];

export default function PracticeForLovePage() {
  return (
    <Container className="py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black/[0.03]">
          <Image
            src="/images/products/practice-for-love.png"
            alt="練愛猜心桌遊封面"
            fill
            className="object-contain p-6"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-brand-green">性別平等 × 人際溝通</p>
          <h1 className="mt-2 text-3xl font-bold text-ink">練愛猜心</h1>
          <p className="mt-4 text-ink/70">
            每天在心儀對象家樓下站崗一定很浪漫？生日突襲式告白是驚喜還是驚嚇？情侶吃飯該誰買單？放下你心中立刻出現的標準答案，試著傾聽眼前的人的心聲吧。不理會對方心情的「愛」，可能只是對方眼中的「礙」。
          </p>
          <p className="mt-4 text-ink/70">
            想戀愛？先來「練愛猜心」大作戰！適合教師於課堂作為情感教育、性平教育教材使用，規則書特別說明課堂版操作方式。
          </p>

          <h2 className="mt-8 text-lg font-bold text-ink">桌遊特色</h2>
          <ul className="mt-2 space-y-1 text-ink/70">
            {features.map((f, i) => (
              <li key={f}>
                {i + 1}. {f}
              </li>
            ))}
          </ul>

          <h2 className="mt-8 text-lg font-bold text-ink">桌遊資訊</h2>
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
          </div>
        </div>
      </div>
    </Container>
  );
}
