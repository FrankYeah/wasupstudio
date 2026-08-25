import type { Metadata } from "next";
import Link from "next/link";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";

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
  // 2026-08-25 全站逐頁核對 section 背景才發現：這頁原站從頭到尾只有「一個」wsite-section，
  // 整頁背景是近深灰 #323D3F（不是重建站原本每隔一段淺灰/白交錯），標題白色、內文淺灰 #d5d5d5
  // （量測 font color 屬性得到，跟 about 頁「授課講師」、crazy-news 頁開場是同一種深色主題套用）。
  return (
    <div className="bg-[#323D3F]">
      <section className="py-20">
        <Container>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            🏡 家庭教育課程
          </h1>
          <p className="mt-2 font-semibold text-brand-green-bright">
            親子共學，共創幸福家庭！
          </p>
          <p className="mt-6 max-w-2xl text-[#d5d5d5]">
            透過遊戲體驗及課程教學，增進親子關係與家庭功能。課程類型包含親子共學、親職課程。
          </p>
          <a
            href={CTA_HREF}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-brand-green px-8 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
          >
            邀約課程
          </a>
        </Container>
      </section>

      {topics.map((topic, i) => (
        <section key={topic.title} className="py-16">
          <Container>
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white/5">
                  <Image
                    src={topic.image}
                    alt={topic.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* 原站這顆按鈕就放在圖片下方 */}
                {topic.link && (
                  <Link
                    href={topic.link.href}
                    className="mt-4 inline-block rounded-full border border-white px-6 py-2 text-sm font-semibold text-white"
                  >
                    {topic.link.label}
                  </Link>
                )}
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="text-2xl font-bold text-white">{topic.title}</h2>
                <dl className="mt-3 space-y-1 text-sm text-[#d5d5d5]">
                  <div>
                    <dt className="inline font-semibold text-white">
                      適合年紀：
                    </dt>
                    <dd className="inline">{topic.age}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-white">
                      授課時數：
                    </dt>
                    <dd className="inline">{topic.hours}</dd>
                  </div>
                </dl>

                <h3 className="mt-5 text-sm font-bold text-white">
                  🎯 課程目標
                </h3>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-[#d5d5d5]">
                  {topic.goals.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>

                <h3 className="mt-5 text-sm font-bold text-white">
                  🚀 課程內容
                </h3>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-[#d5d5d5]">
                  {topic.content.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* 兒童氣質桌遊《遇兒魔導師》產品介紹 */}
      <section className="py-16">
        <Container>
          <div className="grid gap-10 rounded-2xl border border-white/10 bg-white/5 p-8 md:grid-cols-2 md:items-center">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-white/5">
              <Image
                src="/images/courses/family-education-4.jpg"
                alt="兒童氣質桌遊《遇兒魔導師》遊戲內容物：遊戲盒、棋盤、卡牌與說明書"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-brand-green-bright">
                --兒童氣質桌遊--
              </p>
              <h2 className="mt-1 text-2xl font-bold text-white">
                【遇兒魔導師】
              </h2>
              <p className="mt-3 text-sm text-[#d5d5d5]">
                這是一套為了支持各界爸媽，有能力「做孩子一輩子的家人」而產生的桌遊。
              </p>
              <h3 className="mt-4 text-sm font-bold text-white">★桌遊介紹</h3>
              <p className="mt-1 text-sm text-[#d5d5d5]">
                在這個以小孩為本的魔法陣裡，處處遇見兒童不稀奇，能夠解開童心之謎才是讓魔力提升的關鍵。為了好好施展生活的魔法，從闇黑向光明快速奔跑吧！
                本遊戲需每位玩家輪流擔任「兒童」的角色與其他玩家互動，藉由角色扮演來探討玩家的教養風格。想成為「開明權威」的家長，你必需認識先天氣質、更要勇敢去愛，設法穿梭在眾多「遇兒事件」與「氣質魔藥」間，施展你的專屬魔力，將有機會贏得「遇兒魔導師」的明亮尊榮！
              </p>
              {/* 2026-08-25 內容稽核：底下 7 項規格（遊戲人數／時間／建議年齡／出版單位／遊戲設計／
                  美術設計／遊戲顧問）原站是「►遊戲人數：3-6人(建議4人以上)」這種一行到底的寫法，
                  這裡拆成 dt/dd 並把半形括號數字改成全形＋空格。內容逐項核對過都在，掃描器是因為
                  比對整行字串才誤報成缺漏。 */}
              <dl className="mt-4 grid grid-cols-2 gap-y-1 text-sm text-[#d5d5d5]">
                <dt className="font-semibold text-white">遊戲人數</dt>
                <dd>3-6 人（建議 4 人以上）</dd>
                <dt className="font-semibold text-white">遊戲時間</dt>
                <dd>60-90 分鐘</dd>
                <dt className="font-semibold text-white">建議年齡</dt>
                <dd>12 歲以上</dd>
                <dt className="font-semibold text-white">出版單位</dt>
                <dd>忠義基金會</dd>
                <dt className="font-semibold text-white">遊戲設計</dt>
                <dd>阿普蛙工作室</dd>
                <dt className="font-semibold text-white">美術設計</dt>
                <dd>畫家 SEVEN</dd>
                <dt className="font-semibold text-white">遊戲顧問</dt>
                <dd>張黛眉 臨床心理師</dd>
              </dl>
              <a
                href="https://bit.ly/2022magicparents"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
              >
                購買桌遊
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 2026-08-26：這裡原本有一段自製的結尾 CTA（「想幫家庭安排一場親子共學？」＋邀約課程按鈕），
          已依使用者決定移除——原站沒有這段：解碼後的 HTML 裡「購買桌遊」按鈕之後直接接
          <div class="footer-wrap">，拿該段標題/內文去搜都是 0 筆（以「【遇兒魔導師】」當對照組
          是 3 筆，證明搜尋方法有效）。/courses/corporate-training 結尾同款的自製 CTA 也一併移除。 */}
    </div>
  );
}
