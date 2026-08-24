import type { Metadata } from "next";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "提升溝通力｜入班授課",
  description:
    "認識並發揮個人的勇者風格，遊戲中培養團隊協作的技能。覺察並改善個人的溝通方式與盲點，學習正向溝通的四大步驟。",
};

const INVITE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScTpdFbaeh221rvaEMgG_1vrh0RC_9rOEx1j8ActjGE4PiM7A/viewform";

const courses = [
  {
    title: "冒險者之旅（勇者風格）",
    image: "/images/courses/communication-1.jpg",
    grade: "國小中高年級、國中、高中、大學",
    hours: "3-6 小時",
    goals: [
      "認識並發揮個人的勇者風格",
      "深入了解每位冒險者的獨特之處",
      "培養與他人和諧相處的溝通與合作能力",
    ],
    content: [
      "透過遊戲體驗，讓學員展現真實自我",
      "探索不同風格間的差異，學習與他人建立良好的互動模式",
      "遊戲中培養團隊協作的技能，發揮每位冒險者的獨特風采",
    ],
  },
  {
    title: "正向溝通工作坊",
    image: "/images/courses/communication-2.jpg",
    grade: "國小中高年級、國中、高中、大學",
    hours: "3-18 小時",
    goals: ["覺察並改善個人的溝通方式與盲點", "學習正向溝通的四大要素", "提升溝通效能，有效化解衝突"],
    content: [
      "透過遊戲，學員反思個人的溝通方式及盲點",
      "講師帶領學員掌握正向溝通的四要素：觀察、感受、需求、請求",
      "在實際遊戲與討論中，練習正向溝通技巧，培養協同合作的精神",
    ],
  },
];

export default function CommunicationPage() {
  return (
    <>
      <section className="bg-black/[0.03] py-16">
        <Container>
          <p className="text-sm font-semibold text-brand-green">入班授課｜青少年培力課程</p>
          <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">
            🚀 提升溝通力，啟發潛能！ 🗣️
          </h1>
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
            src="/images/courses/communication-1.jpg"
            alt="提升溝通力 課程實況"
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
            <div className="relative mb-6 aspect-16/9 w-full overflow-hidden rounded-xl bg-black/[0.03]">
              <Image
                src={course.image}
                alt={`《${course.title}》課程實況`}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-xl font-bold text-ink">{course.title}</h2>

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
      </Container>
    </>
  );
}
