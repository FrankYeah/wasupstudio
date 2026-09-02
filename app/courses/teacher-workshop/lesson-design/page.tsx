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
  title: "教案、教材設計",
  description:
    "遊戲不只是娛樂，更是一種強大的教學工具！探索桌遊設計的魅力，讓您不僅是教育者，更是一位遊戲設計師！課程含遊戲化教學（六大策略）、遊戲化教案工作坊、教育桌遊設計工作坊。",
};

const CTA_HREF =
  "https://docs.google.com/forms/d/e/1FAIpQLScTpdFbaeh221rvaEMgG_1vrh0RC_9rOEx1j8ActjGE4PiM7A/viewform";

const gamification = {
  title: "遊戲化教學（六大策略）",
  audience: "國小、國中、高中、大學階段教師",
  subject: "所有科目",
  hours: "2~6 小時",
  lead: "遊戲不只是娛樂，更是一種強大的教學工具！本課程將引領您探索遊戲化教學的六大策略，讓您能在課堂中融入遊戲元素，激發學生的學習動機。透過遊戲化的體驗，您將學會如何巧妙地結合知識點，提升學生參與度。",
  experience: [
    {
      label: "遊戲體驗",
      desc: "實際參與簡單而有趣的遊戲模組，輕鬆掌握如何將遊戲元素融入不同科目的教學。",
    },
    {
      label: "引導反思",
      desc: "深入理解遊戲化與遊戲的區別，並探討如何激發學生的動機，使其熱衷於學習。",
    },
  ],
  outline: [
    {
      label: "遊戲化六大設計策略",
      desc: "深入探討 2~6 個遊戲化設計策略，為您的課堂注入新鮮元素。",
    },
    {
      label: "簡單模組體驗",
      desc: "實際體驗已設計好的簡單模組，理解遊戲化在不同學科的靈活運用。",
    },
    {
      label: "系統化概念",
      desc: "有系統地探討遊戲化的核心概念，打開更多教學可能性。",
    },
  ],
};

const workshop = {
  title: "遊戲化教案工作坊",
  audience: "國小、國中、高中、大學階段教師",
  subject: "所有科目",
  hours: "3 小時",
  lead: "讓我們一同打破傳統教學框架，進入充滿趣味與挑戰的遊戲教學世界！本工作坊將帶您深入了解遊戲化與遊戲的微妙區別，並實際演練遊戲教案的設計，讓您在教學中增添更多元的元素。",
  experience: [
    { label: "遊戲體驗", desc: "深入體驗簡單遊戲模組，理解遊戲化的核心思維。" },
    {
      label: "引導反思",
      desc: "探討遊戲化與遊戲的區別，學習如何激發學生參與的動機。",
    },
    {
      label: "實作練習",
      desc: "利用所學知識，實際動手設計教學遊戲，並即時獲得專業回饋。",
    },
  ],
  outline: [
    {
      label: "遊戲化六大設計策略",
      desc: "深入探討 2~6 個遊戲化設計策略，為您的課堂注入新鮮元素。",
    },
    {
      label: "簡單模組體驗",
      desc: "實際體驗已設計好的簡單模組，理解遊戲化在不同學科的靈活運用。",
    },
    {
      label: "系統化概念",
      desc: "有系統地探討遊戲化的核心概念，打開更多教學可能性。",
    },
    { label: "實作練習", desc: "學員進行教案設計，並獲得即時回饋。" },
  ],
};

const designWorkshop = {
  title: "教育桌遊設計工作坊",
  audience: "國小、國中、高中、大學階段教師",
  subject: "所有科目",
  lead: "探索桌遊設計的魅力，讓您不僅是教育者，更是一位遊戲設計師！本工作坊將從遊戲的基本概念出發，透過實際案例分析、遊戲體驗和設計練習，引導您完成一款屬於自己的教育桌遊。",
  tiers: [
    {
      title: "1. 桌遊設計概要",
      hours: "3 小時",
      outline: [
        { label: "對答討論", desc: "一同探討什麼是真正的遊戲。" },
        { label: "知識講座", desc: "深入了解遊戲設計的基本概念。" },
        { label: "案例分析", desc: "剖析成功的教育桌遊，汲取靈感。" },
      ],
    },
    {
      title: "2. 桌遊設計概要＋改做練習",
      hours: "6 小時",
      outline: [
        { label: "基本課程", desc: "定義遊戲、遊戲設計概要、剖析議題桌遊。" },
        { label: "知識講座", desc: "常見遊戲機制解析。" },
        { label: "遊戲體驗", desc: "玩 1-2 款桌遊。" },
        { label: "案例分析", desc: "拆解體驗過的桌遊機制。" },
        { label: "實作練習", desc: "學員練習與講師引導討論、回饋。" },
      ],
    },
    {
      title: "3. 桌遊設計工作坊（12-18 小時）",
      // 原站就是寫「授課時數：6小時」，重建時被自行補寫成「6 小時／場，依總時數安排場次」
      hours: "6 小時",
      outline: [
        { label: "基本課程", desc: "定義遊戲、遊戲設計概要、剖析議題桌遊。" },
        { label: "知識講座", desc: "常見遊戲機制解析。" },
        { label: "遊戲體驗", desc: "玩 1-2 款桌遊。" },
        { label: "案例分析", desc: "拆解體驗過的桌遊機制。" },
        { label: "實作練習", desc: "學員創作、成果發表與講師引導討論、回饋。" },
      ],
    },
  ],
};

// 原站分頁籤 pane 的右欄格式：導言 →「研習內容：」→ 條列 →「研習大綱：」→ 條列，
// 條列都是「粗體標籤： 說明」。左欄則是圖片＋適合對象／適合科目／授課時數。
function Outline({ items }: { items: { label: string; desc: string }[] }) {
  return (
    <ul className="list-disc pl-6 text-[#2a3140]">
      {items.map((o) => (
        <li key={o.label}>
          <strong>{o.label}：</strong> {o.desc}
        </li>
      ))}
    </ul>
  );
}

const tabs = [
  {
    label: "遊戲化教學（六大策略）",
    image: "/images/courses/lesson-design-1.jpg",
    alt: "教師分組進行遊戲化教學研習",
    course: gamification,
  },
  {
    label: "遊戲化教案工作坊",
    image: "/images/courses/lesson-design-2.jpg",
    alt: "教師分組進行遊戲化教案工作坊實作練習",
    course: workshop,
  },
];

export default function LessonDesignPage() {
  return (
    // ⚠️ 2026-08-26 重做版面。原站這頁只有 1 個 wsite-section（白底），裡面兩塊：
    // ①一列兩欄「71.6% 標題（33.6px 置中）／28.4% 邀約課程按鈕（黑框直角）」
    // ②一組**三個籤**的分頁籤（遊戲化教學（六大策略）／遊戲化教案工作坊／教育桌遊設計工作坊）。
    // 重建站原本把三個籤攤成三段深淺交錯的獨立區塊、標題自己加了「一、二、三、」編號、
    // 還多了一張 hero 圖、一段自己寫的導言、以及結尾自製 CTA——原站都沒有。
    <section className="py-16">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-[72fr_28fr]">
          <h1 className="text-center text-[28px] font-bold text-ink md:text-[34px]">
            📖 教案、教材設計
          </h1>
          <div className="text-center">
            <WeeblyOutlineButton href={CTA_HREF} external>
              邀約課程
            </WeeblyOutlineButton>
          </div>
        </div>

        <div className="mt-12">
          <TabbedBox
            tabs={[
              ...tabs.map(({ label, image, alt, course }) => ({
                label,
                content: (
                  <TabPane media={<CourseImage src={image} alt={alt} />}>
                    <CourseFacts
                      facts={[
                        { label: "適合對象", value: course.audience },
                        { label: "適合科目", value: course.subject },
                        { label: "授課時數", value: course.hours },
                      ]}
                    />
                    <div className="mt-3 text-base leading-[30px] text-ink">
                      <p>{course.lead}</p>
                      <p className="mt-2">
                        <strong className="text-[#0e121d]">研習內容：</strong>
                      </p>
                      <Outline items={course.experience} />
                      <p className="mt-2">
                        <strong className="text-[#0e121d]">研習大綱：</strong>
                      </p>
                      <Outline items={course.outline} />
                    </div>
                  </TabPane>
                ),
              })),
              {
                label: "教育桌遊設計工作坊",
                content: (
                  <TabPane
                    media={
                      <CourseImage
                        src="/images/courses/lesson-design-3.jpg"
                        alt="學員分組進行教育桌遊設計工作坊實作練習"
                      />
                    }
                  >
                    <CourseFacts
                      facts={[
                        { label: "適合對象", value: designWorkshop.audience },
                        { label: "適合科目", value: designWorkshop.subject },
                      ]}
                    />
                    <div className="mt-3 text-base leading-[30px] text-ink">
                      <p>{designWorkshop.lead}</p>
                      {/* 原站這一籤是三種規格上下排列（不是重建站原本的三張並排卡片） */}
                      {designWorkshop.tiers.map((tier) => (
                        <div key={tier.title} className="mt-4">
                          <p className="font-bold">{tier.title}</p>
                          <p>授課時數：{tier.hours}</p>
                          <p>
                            <strong className="text-[#0e121d]">
                              研習大綱：
                            </strong>
                          </p>
                          <Outline items={tier.outline} />
                        </div>
                      ))}
                    </div>
                  </TabPane>
                ),
              },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
