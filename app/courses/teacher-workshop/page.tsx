import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "教師研習",
  description:
    "阿普蛙教師研習課程，分為「教材應用－議題桌遊應用於課堂」與「教案、教材設計」兩大類，協助教師掌握議題桌遊的引導技巧，或動手設計屬於自己的遊戲化教案。",
};

const materialTopics = [
  {
    group: "一、人際關係與溝通",
    items: [
      { name: "遊戲教材《我們班的叢林法則》", tags: "人際衝突、班級經營" },
      { name: "桌遊《情緒謎語》", tags: "人際衝突、社會情緒學習（SEL）、表演藝術" },
    ],
  },
  {
    group: "二、性別平等",
    items: [
      { name: "桌遊《練愛猜心》", tags: "性別平等、情感教育" },
      { name: "桌遊《家分題》", tags: "性別平等、家庭教育" },
    ],
  },
  {
    group: "三、媒體素養",
    items: [
      { name: "桌遊《抓誑新聞》", tags: "媒體識讀、資訊素養" },
      { name: "桌遊《犯罪現場》", tags: "媒體識讀、資訊素養" },
    ],
  },
  {
    group: "四、全球議題",
    items: [
      { name: "桌遊《碳排危機》", tags: "減碳、SDGs、環境" },
      { name: "桌遊《我們的福爾摩沙》", tags: "SDGs、環境、國際觀" },
      { name: "桌遊《瞎掰王SDGs教育版》", tags: "SDGs" },
    ],
  },
  {
    group: "五、兒童權利公約",
    items: [{ name: "桌遊《未來議會》", tags: "兒童權利公約、校園議題討論" }],
  },
  {
    group: "六、議題思辨課",
    items: [{ name: "不用購買教材，可設定各種議題", tags: "人權、議題思辨" }],
  },
];

const lessonDesignTopics = [
  "遊戲化教學（六大策略）",
  "遊戲化教案工作坊",
  "教育桌遊設計工作坊",
];

export default function TeacherWorkshopPage() {
  return (
    <>
      <section className="bg-black/[0.03] py-20">
        <Container>
          <h1 className="text-3xl font-bold text-ink md:text-4xl">教師研習</h1>
          <p className="mt-6 max-w-2xl text-ink/70">
            阿普蛙的教師研習課程分為兩大類：把議題桌遊帶進課堂的「教材應用」，以及帶老師動手設計遊戲化教案、教材的「教案、教材設計」。歡迎依教學現場的需求邀約課程。
          </p>
          <a
            href="https://forms.gle/7FqM18Ei29dgTnh96"
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
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-bold text-ink">🎲 教材應用－議題遊戲應用於課堂</h2>
              <p className="mt-3 text-ink/70">
                以下遊戲教材可依主題應用於課堂，每款遊戲的教師研習時間約 2~3 小時。
              </p>
              <div className="mt-6 space-y-5">
                {materialTopics.map((g) => (
                  <div key={g.group}>
                    <h3 className="font-bold text-ink">{g.group}</h3>
                    <ul className="mt-1 space-y-1 text-sm text-ink/70">
                      {g.items.map((it) => (
                        <li key={it.name}>
                          {it.name}
                          <span className="text-ink/40">　{it.tags}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link
                href="/courses/teacher-workshop/material-application"
                className="mt-8 inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
              >
                進一步瞭解課程
              </Link>
            </div>

            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black/[0.03]">
              <Image
                src="/images/courses/teacher-workshop-1.jpg"
                alt="教師研習現場，講師帶領教師分組進行議題桌遊教材應用"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-black/[0.03] py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black/[0.05] md:order-2">
              <Image
                src="/images/courses/teacher-workshop-2.jpg"
                alt="教師分組進行遊戲化教案設計工作坊"
                fill
                className="object-cover"
              />
            </div>

            <div className="md:order-1">
              <h2 className="text-2xl font-bold text-ink">📖 教案、教材設計</h2>
              <ul className="mt-6 space-y-2">
                {lessonDesignTopics.map((t, i) => (
                  <li key={t} className="font-semibold text-ink">
                    {["一", "二", "三"][i]}、{t}
                  </li>
                ))}
              </ul>
              <Link
                href="/courses/teacher-workshop/lesson-design"
                className="mt-8 inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
              >
                進一步了解課程
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
