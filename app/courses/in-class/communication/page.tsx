import type { Metadata } from "next";
import { Container } from "@/app/_components/Container";
import { CourseFacts } from "@/app/_components/CourseFacts";
import { CourseImage } from "@/app/_components/CourseImage";
import {
  TabbedBox,
  TabPane,
  WeeblyOutlineButton,
} from "@/app/_components/TabbedBox";

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
    goals: [
      "覺察並改善個人的溝通方式與盲點",
      "學習正向溝通的四大要素",
      "提升溝通效能，有效化解衝突",
    ],
    content: [
      "透過遊戲，學員反思個人的溝通方式及盲點",
      "講師帶領學員掌握正向溝通的四要素：觀察、感受、需求、請求",
      "在實際遊戲與討論中，練習正向溝通技巧，培養協同合作的精神",
    ],
  },
];

export default function CommunicationPage() {
  return (
    // ⚠️ 2026-08-26 重做版面。原站這頁量起來只有 1 個 wsite-section、背景透明（＝白），
    // 裡面只有兩塊：①「80.3% 標題 / 19.7% 按鈕」一列 ②一組分頁籤。
    // 重建站原本自己加了淡灰 hero 底、「入班授課｜青少年培力課程」小標籤、一張 21:9 橫幅
    // 大圖（拿課程照去裁的）、綠色圓角按鈕，並把兩個課程攤平成上下兩張卡——原站都沒有。
    <section className="py-16">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-[80fr_20fr]">
          {/* 原站量測：24px 粗體黑字、置中 */}
          <h1 className="text-center text-2xl font-bold text-ink">
            🚀 提升溝通力，啟發潛能！ 🗣️
          </h1>
          <div className="text-center">
            <WeeblyOutlineButton href={INVITE_FORM_URL} external>
              邀約課程
            </WeeblyOutlineButton>
          </div>
        </div>

        <div className="mt-12">
          <TabbedBox
            tabs={courses.map((course) => ({
              label: course.title,
              content: (
                <TabPane
                  media={
                    <CourseImage
                      src={course.image}
                      alt={`《${course.title}》課程實況`}
                    />
                  }
                >
                  <CourseFacts
                    facts={[
                      { label: "適合年級", value: course.grade },
                      { label: "授課時間", value: course.hours },
                    ]}
                    sections={[
                      { label: "課程目標", items: course.goals },
                      { label: "課程內容", items: course.content },
                    ]}
                  />
                </TabPane>
              ),
            }))}
          />
        </div>
      </Container>
    </section>
  );
}
