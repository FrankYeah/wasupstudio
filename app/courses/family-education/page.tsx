import type { Metadata } from "next";
import { Container } from "@/app/_components/Container";
import { CourseFacts } from "@/app/_components/CourseFacts";
import { CourseImage } from "@/app/_components/CourseImage";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import {
  TabbedBox,
  TabPane,
  WeeblyOutlineButton,
} from "@/app/_components/TabbedBox";

export const metadata: Metadata = {
  title: "家庭教育課程",
  description:
    "阿普蛙家庭教育課程，含親子共學、親職課程：如何與孩子好好溝通、用遊戲討論家務分工、玩桌遊認識兒童氣質，透過遊戲體驗增進親子關係與家庭功能。",
};

const CTA_HREF =
  "https://docs.google.com/forms/d/e/1FAIpQLScTpdFbaeh221rvaEMgG_1vrh0RC_9rOEx1j8ActjGE4PiM7A/viewform";

type Topic = {
  title: string;
  image: string;
  alt: string;
  age: string;
  hours: string;
  goals: string[];
  content: string[];
  // 原站只有「用遊戲討論家務分工」這一格在圖片下方有一顆站內連結按鈕
  link?: { label: string; href: string };
  // 原站只有「玩桌遊認識兒童氣質」這一格的 pane 裡面還接了【遇兒魔導師】商品介紹
  product?: boolean;
};

const topics: Topic[] = [
  {
    title: "如何與孩子好好溝通",
    image: "/images/courses/family-education-1.jpg",
    alt: "親子共學課程現場，孩子與家長一起玩桌遊",
    age: "國小學童至成人",
    hours: "3-18 小時（依照課程期待調整）",
    goals: [
      "認識並發揮親子的溝通潛能",
      "學習非暴力溝通的四大要素：觀察、感受、需求、請求",
      "透過遊戲體驗，提升親子間溝通品質",
    ],
    content: [
      "探索「非暴力溝通：愛的語言」，學習觀察、感受、需求、請求的四要素",
      "透過遊戲互動，實際應用四要素，深化親子間的理解與連結",
      "反思個人溝通模式，培養更有效的親子對話技巧",
    ],
  },
  {
    title: "用遊戲討論家務分工",
    image: "/images/courses/family-education-2.jpg",
    alt: "家長與孩子一起體驗桌遊《家分題》，討論家務分工",
    // 2026-08-25 內容稽核發現：原站這一格（tabbed-box tab-1）圖片下方還有一顆「桌遊介紹」按鈕，
    // 連到 /234782099838988.html（《家分題》桌遊介紹頁），重建站漏掉。當時 board-games/ 底下還沒有
    // 對應頁面，所以先擱著沒補。2026-08-26 已把那頁孤兒頁補建成 /board-games/family-topics，
    // 這裡把按鈕接回去（原站按鈕文字就是「桌遊介紹」，已核對過原始 HTML）。
    link: { label: "桌遊介紹", href: "/board-games/family-topics" },
    age: "國小中年級學童至成人",
    hours: "3-18 小時（依照課程期待調整）",
    goals: [
      "透過桌遊【家分題】體驗家務分工的挑戰與重要性",
      "反思家庭成員間的互動與合作，討論家務分工的制度",
      "重新設計遊戲目標，啟發學員思考幸福家庭的平衡點",
    ],
    content: [
      "以【家分題】桌遊為媒介，模擬現實家庭狀況",
      "分享遊戲歷程，討論家務分工的挑戰與需求",
      "改變遊戲目標，引導學員重新思考家庭成員之間的合作模式",
    ],
  },
  {
    title: "玩桌遊認識兒童氣質",
    product: true,
    image: "/images/courses/family-education-3.jpg",
    alt: "學員體驗桌遊《遇兒魔導師》，透過角色扮演認識兒童氣質",
    age: "家有幼兒的家庭、國小高年級學童可以一起參與",
    hours: "3-18 小時（依照課程期待調整）",
    goals: [
      "透過【遇兒魔導師】桌遊，探索兒童氣質的多樣性",
      "認識角色扮演的價值，思考教養風格與孩子性格的契合度",
      "提供正向教養方式，建立親子之間的積極互動",
    ],
    content: [
      "以【遇兒魔導師】桌遊引導學員體驗角色扮演",
      "討論遊戲中的親子互動模式，深入認識兒童氣質",
      "教導家長因應孩子氣質，打造正向親子互動的家庭氛圍",
    ],
  },
];

export default function FamilyEducationPage() {
  return (
    // ⚠️ 2026-08-26 重做版面。2026-08-25 那輪寫「這頁原站從頭到尾只有一個 wsite-section、
    // 整頁 #323D3F」——量錯了。原站其實是**兩個** section：
    //   ① 深灰 #323D3F 的標題區（一列兩欄：36.4% 標題＋按鈕、63.6% 導言）
    //   ② 白底（computed 是 rgba(0,0,0,0)）的分頁籤區
    // 而且三個課程是**分頁籤**、不是上下三段左右交錯的區塊；【遇兒魔導師】的商品介紹
    // 也不是獨立一段，它在第三個籤「玩桌遊認識兒童氣質」的 pane 裡面。
    <>
      <section className="bg-[#323D3F] py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-[36fr_64fr] md:items-center">
            <div className="text-center">
              {/* 原站量測：33.6px 白字置中 */}
              <h1 className="text-[28px] font-bold text-white md:text-[34px]">
                🏡 家庭教育課程
              </h1>
              <div className="mt-6">
                {/* 原站是 wsite-button-large wsite-button-highlight：白底黑字、1px 白框、
                    直角、18px、112×42——不是重建站原本的品牌綠圓角按鈕 */}
                <a
                  href={CTA_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-[42px] min-w-[112px] items-center justify-center border border-white bg-white px-4 text-lg text-black transition hover:bg-transparent hover:text-white"
                >
                  邀約課程
                </a>
              </div>
            </div>
            {/* 原站量測：16px／行高 28px、色 #d5d5d5、靠左 */}
            <div className="text-base leading-[28px] text-[#d5d5d5]">
              <p>親子共學，共創幸福家庭！</p>
              <p>透過遊戲體驗及課程教學，增進親子關係與家庭功能。</p>
              <p>★課程類型包含親子共學、親職課程。</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <TabbedBox
            tabs={topics.map((topic) => ({
              label: topic.title,
              content: (
                <TabPane
                  media={
                    <>
                      <CourseImage src={topic.image} alt={topic.alt} />
                      {topic.link && (
                        <div className="mt-2">
                          <WeeblyOutlineButton href={topic.link.href}>
                            {topic.link.label}
                          </WeeblyOutlineButton>
                        </div>
                      )}
                    </>
                  }
                >
                  <CourseFacts
                    facts={[
                      { label: "適合年紀", value: topic.age },
                      { label: "授課時數", value: topic.hours },
                    ]}
                    sections={[
                      { label: "🎯 課程目標", items: topic.goals },
                      { label: "🚀 課程內容", items: topic.content },
                    ]}
                    footer={topic.product ? <MagicParents /> : null}
                  />
                </TabPane>
              ),
            }))}
          />
        </Container>
      </section>
    </>
  );
}

// 【遇兒魔導師】商品介紹。原站不是獨立一段，而是接在第三個分頁籤 pane 的 28.7/71.3 那列後面，
// 再開一列 50/50：左欄是「--兒童氣質桌遊--／【遇兒魔導師】」標題（原站自己還切成 34.5/65.5
// 兩欄）＋介紹文＋遊戲人數/時間/年齡；右欄是實體照片＋出版單位等四項＋「購買桌遊」按鈕。
function MagicParents() {
  return (
    <div className="mt-10 grid gap-8 md:grid-cols-2">
      <div>
        <div className="grid gap-2 md:grid-cols-[34fr_66fr] md:items-baseline">
          <p className="font-bold">--兒童氣質桌遊--</p>
          <p className="text-xl font-bold">【遇兒魔導師】</p>
        </div>
        <p className="mt-3">
          這是一套為了支持各界爸媽，有能力「做孩子一輩子的家人」而產生的桌遊。
        </p>
        <p className="mt-3">
          ★桌遊介紹：在這個以小孩為本的魔法陣裡，處處遇見兒童不稀奇，能夠解開童心之謎才是讓魔力提升的關鍵。為了好好施展生活的魔法，從闇黑向光明快速奔跑吧！本遊戲需每位玩家輪流擔任「兒童」的角色與其他玩家互動，藉由角色扮演來探討玩家的教養風格。想成為「開明權威」的家長，你必需認識先天氣質、更要勇敢去愛，設法穿梭在眾多「遇兒事件」與「氣質魔藥」間，施展你的專屬魔力，將有機會贏得「遇兒魔導師」的明亮尊榮！
        </p>
        <p className="mt-3">►遊戲人數：3-6人(建議4人以上)</p>
        <p>►遊戲時間：60-90分鐘</p>
        <p>►建議年齡：12歲以上</p>
      </div>
      <div>
        <Image
          src="/images/courses/family-education-4.jpg"
          alt="兒童氣質桌遊《遇兒魔導師》遊戲內容物：遊戲盒、棋盤、卡牌與說明書"
          width={1100}
          height={735}
          className="h-auto w-full"
        />
        <div className="mt-4 grid gap-4 md:grid-cols-2 md:items-start">
          <div>
            <p>►出版單位：忠義基金會</p>
            <p>►遊戲設計：阿普蛙工作室</p>
            <p>►美術設計：畫家SEVEN</p>
            <p>►遊戲顧問：張黛眉 臨床心理師</p>
          </div>
          <div>
            <WeeblyOutlineButton
              href="https://bit.ly/2022magicparents"
              external
            >
              購買桌遊
            </WeeblyOutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
}
