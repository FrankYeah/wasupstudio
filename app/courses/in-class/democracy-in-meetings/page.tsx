import type { Metadata } from "next";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "民主從開會開始｜入班授課",
  description:
    "透過模擬開會，讓學生深刻體驗會議中的挑戰與亮點，不僅能發現隱藏的領導力，還能學習應對各種場景的靈活策略。我們將協助學生們調整成最適合的會議模式，讓會議更順利推進。",
};

const INVITE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScTpdFbaeh221rvaEMgG_1vrh0RC_9rOEx1j8ActjGE4PiM7A/viewform";

const goals = [
  "探索會議中各種角色，深入了解功能與工作內容",
  "學習明確設定會議目的，掌握會議策劃的技巧",
  "培養營造討論環境的能力，促進小組工作的順利進行",
];

const content = [
  "啟發思考：引導成員重新思考開會的意義，設定明確的會議目標",
  "實際操作：即場實作開會，提供即時回饋，調整會議進行方式",
  "帶領成員發現適合團隊的會議模式，促進更有效率的合作",
];

export default function DemocracyInMeetingsPage() {
  return (
    <>
      <section className="bg-black/[0.03] py-16">
        <Container>
          <p className="text-sm font-semibold text-brand-green">入班授課｜青少年培力課程</p>
          <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">
            🤝 民主從「開會」開始
          </h1>
          <p className="mt-4 max-w-3xl text-ink/70">
            透過模擬開會，讓學生深刻體驗會議中的挑戰與亮點，不僅能發現隱藏的領導力，還能學習應對各種場景的靈活策略。我們將協助學生們調整成最適合的會議模式，讓會議更順利推進。
          </p>
          <div className="mt-8">
            <a
              href={INVITE_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
            >
              邀約課程
            </a>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="relative aspect-21/9 w-full overflow-hidden rounded-2xl bg-black/[0.03]">
          <Image
            src="/images/courses/democracy-in-meetings-1.jpg"
            alt="民主從開會開始 課程實況"
            fill
            className="object-cover"
          />
        </div>
      </Container>

      <Container className="pb-24">
        <article className="rounded-2xl border border-black/5 p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink/70">
            <span>
              <span className="font-semibold text-ink">適合年級：</span>
              國小中高年級、國中、高中、大學
            </span>
            <span>
              <span className="font-semibold text-ink">授課時間：</span>
              3 小時
            </span>
          </div>

          <h2 className="mt-5 text-sm font-bold text-ink">課程目標</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/70">
            {goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>

          <h2 className="mt-5 text-sm font-bold text-ink">課程內容</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/70">
            {content.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </article>
      </Container>
    </>
  );
}
