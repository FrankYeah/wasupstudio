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
    image: "/images/courses/inquiry-practice-1.jpg",
    grade: "國小高年級、國中、高中、大學",
    hours: "3 小時",
    goals: [
      "初步認識各式社會議題，喚起學生對議題的興趣。",
      "學習運用討論技巧，培養思辨力。",
    ],
    content: [
      "學生擔任不同政黨的成員，在遊戲中針對各種社會議題展開激烈的辯論。透過支持或反對的立場，提出主張、回應質疑，並努力影響他人的觀點。腦力激盪中培養討論技巧，啟發對議題的深入思考。",
    ],
  },
  {
    title: "議題探究與實作工作坊",
    subtitle: "激發行動力，引導實踐之路！",
    image: "/images/courses/inquiry-practice-2.jpg",
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
    // ⚠️ 2026-08-26 重做版面。原站只有 1 個 wsite-section（白底），裡面兩塊：
    // ①一列三欄「36.5% 標題（24px 靠左）／43.9% 導言／19.7% 邀約課程按鈕」
    // ②一組分頁籤（議題思辨課／議題探究與實作工作坊）。
    // 重建站原本的淡灰 hero、綠色圓角按鈕、21:9 橫幅大圖、上下兩張卡，原站都沒有。
    <section className="py-16">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-[36fr_44fr_20fr]">
          <h1 className="text-2xl font-bold text-ink">
            🌐 議題探究與實作
            <br />
            激發思辨力，啟發實踐力 🌟
          </h1>
          <p className="text-base leading-[30px] text-ink">
            培育學生在思辨中建構自己的價值觀，激發對社會議題的興趣，成為能夠主動參與社會變革的未來領袖。
          </p>
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
                    subtitle={course.subtitle}
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
