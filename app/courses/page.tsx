import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/app/_components/Container";
import { courseNav } from "@/app/_lib/site-data";

export const metadata: Metadata = {
  title: "找課程",
  description:
    "阿普蛙的課程特色「邊玩邊學」。教師研習、青少年培力課程、教育訓練、家庭教育課程，透過議題遊戲讓學員在體驗中學習、在引導反思中內化知識。",
};

const features = [
  "在遊戲中，學員可扮演不同角色，以模擬社會中的現實狀況，例如貧富差距、資訊不對等、階級不流動等模擬真實情境，用遊戲比喻人生。",
  "體驗議題遊戲，探討遊戲影射的現實情境，提升社會議題的敏銳度與好奇心。",
  "藉由遊戲中學員的策略運用、情緒展現，協助學員了解自我。",
  "促進團隊內部合作，學習團隊間的協調，協助學員建立更好的合作、溝通模式。",
];

export default function CoursesPage() {
  return (
    <>
      <section className="bg-black/[0.03] py-20">
        <Container>
          <h1 className="text-3xl font-bold text-ink md:text-4xl">在遊戲中學習</h1>
          <p className="mt-2 font-semibold text-brand-green">阿普蛙的課程特色「邊玩邊學」！</p>
          <p className="mt-6 max-w-2xl text-ink/70">
            傳統的教育方式傾向於將知識單向地傳遞給學習者，但學習者往往會喪失學習動機，或是無法理解該課程主題與自身的連結。阿普蛙透過遊戲，讓學習者在輕鬆愉快的氛圍中開始學習，在投入遊戲歷程中，去發掘該主題、議題與自身的連結性。
          </p>
          <p className="mt-4 max-w-2xl text-ink/70">
            更重要的是遊戲後，講師帶領學習者進行引導反思，整理自己的遊戲經驗，並思考下一步及相關知識可以如何應用。
          </p>
          <a
            href="https://goo.gl/forms/6jmASQjVdaqPHapA2"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-brand-green px-8 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
          >
            邀約課程
          </a>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-ink">課程類型</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {courseNav.map((nav) => (
              <div key={nav.href} className="rounded-2xl border border-black/5 p-6 shadow-sm">
                <Link href={nav.href} className="text-lg font-bold text-ink hover:text-brand-green">
                  {nav.title}
                </Link>
                {nav.children && nav.children.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm">
                    {nav.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="text-ink/70 hover:text-brand-green">
                          ・{child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-black/[0.03] py-16">
        <Container>
          <h2 className="text-2xl font-bold text-ink">阿普蛙的遊戲特色</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="rounded-xl bg-white p-6 text-sm text-ink/70 shadow-sm">
                {f}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
