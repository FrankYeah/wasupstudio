import type { Metadata } from "next";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "議題探究與實作｜入班授課",
  description:
    "培育學生在思辨中建構自己的價值觀，激發對社會議題的興趣，成為能夠主動參與社會變革的未來領袖。",
};

const INVITE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScTpdFbaeh221rvaEMgG_1vrh0RC_9rOEx1j8ActjGE4PiM7A/viewform";

const courses = [
  {
    title: "議題思辨課",
    subtitle: "探索議題，啟發討論之樂趣！",
    grade: "國小高年級、國中、高中、大學",
    hours: "3 小時",
    goals: ["初步認識各式社會議題，喚起學生對議題的興趣。", "學習運用討論技巧，培養思辨力。"],
    content: [
      "學生擔任不同政黨的成員，在遊戲中針對各種社會議題展開激烈的辯論。透過支持或反對的立場，提出主張、回應質疑，並努力影響他人的觀點。腦力激盪中培養討論技巧，啟發對議題的深入思考。",
    ],
  },
  {
    title: "議題探究與實作工作坊",
    subtitle: "激發行動力，引導實踐之路！",
    grade: "國小高年級、國中、高中、大學",
    hours: "18-36 小時，可依成員程度及課程需求彈性調整。",
    goals: [
      "初步認識多元議題，引發學生對社會的關注。",
      "學習議題討論技巧，培養思辨力。",
      "探索並確定感興趣的議題，制定行動方案，進行實踐。",
    ],
    content: [
      "以議題遊戲點燃學生對社會問題的熱情，引導青少年發現自身關心的主題。透過文獻搜集、實地踏查，系統整理議題相關資料。在擬定行動方案的同時，更可以透過設計桌遊等方式，以有趣的方式呈現他們所在意的社會問題。培養領袖潛力，啟發未來社會的變革者。",
    ],
  },
];

export default function InquiryPracticePage() {
  return (
    <>
      <section className="bg-black/[0.03] py-16">
        <Container>
          <p className="text-sm font-semibold text-brand-green">入班授課｜青少年培力課程</p>
          <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">
            🌐 議題探究與實作
          </h1>
          <p className="mt-4 max-w-3xl text-ink/70">
            激發思辨力，啟發實踐力 🌟
            培育學生在思辨中建構自己的價值觀，激發對社會議題的興趣，成為能夠主動參與社會變革的未來領袖。
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
            src="/images/courses/inquiry-practice-1.jpg"
            alt="議題探究與實作 課程實況"
            fill
            className="object-cover"
          />
        </div>
      </Container>

      <Container className="space-y-8 pb-24">
        {courses.map((course) => (
          <article
            key={course.title}
            className="rounded-2xl border border-black/5 p-6 shadow-sm md:p-8"
          >
            <h2 className="text-xl font-bold text-ink">{course.title}</h2>
            <p className="mt-1 text-ink/70">{course.subtitle}</p>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink/70">
              <span>
                <span className="font-semibold text-ink">適合年級：</span>
                {course.grade}
              </span>
              <span>
                <span className="font-semibold text-ink">授課時間：</span>
                {course.hours}
              </span>
            </div>

            <h3 className="mt-5 text-sm font-bold text-ink">課程目標</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/70">
              {course.goals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>

            <h3 className="mt-5 text-sm font-bold text-ink">課程內容</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/70">
              {course.content.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        ))}

        <div className="rounded-2xl bg-black/[0.03] p-6 md:p-8">
          <h2 className="text-sm font-bold text-ink">授課經歷</h2>
          <p className="mt-2 text-sm text-ink/70">
            台北兒少代表培力課程、新竹兒少代表培力課程、基隆家扶釣竿方案、台東家扶釣竿方案、世界展望會議題營...等。
          </p>
        </div>
      </Container>
    </>
  );
}
