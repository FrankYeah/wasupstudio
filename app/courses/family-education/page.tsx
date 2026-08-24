import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "家庭教育課程",
  description:
    "阿普蛙家庭教育課程，含親子共學、親職課程：如何與孩子好好溝通、用遊戲討論家務分工、玩桌遊認識兒童氣質，透過遊戲體驗增進親子關係與家庭功能。",
};

const CTA_HREF =
  "https://docs.google.com/forms/d/e/1FAIpQLScTpdFbaeh221rvaEMgG_1vrh0RC_9rOEx1j8ActjGE4PiM7A/viewform";

const topics = [
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
  return (
    <>
      <section className="bg-black/[0.03] py-20">
        <Container>
          <h1 className="text-3xl font-bold text-ink md:text-4xl">🏡 家庭教育課程</h1>
          <p className="mt-2 font-semibold text-brand-green">親子共學，共創幸福家庭！</p>
          <p className="mt-6 max-w-2xl text-ink/70">
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
        <section key={topic.title} className={i % 2 === 1 ? "bg-black/[0.03] py-16" : "py-16"}>
          <Container>
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black/[0.05]">
                  <Image src={topic.image} alt={topic.alt} fill className="object-cover" />
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="text-2xl font-bold text-ink">{topic.title}</h2>
                <dl className="mt-3 space-y-1 text-sm text-ink/70">
                  <div>
                    <dt className="inline font-semibold text-ink">適合年紀：</dt>
                    <dd className="inline">{topic.age}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-ink">授課時數：</dt>
                    <dd className="inline">{topic.hours}</dd>
                  </div>
                </dl>

                <h3 className="mt-5 text-sm font-bold text-ink">🎯 課程目標</h3>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-ink/70">
                  {topic.goals.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>

                <h3 className="mt-5 text-sm font-bold text-ink">🚀 課程內容</h3>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-ink/70">
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
          <div className="grid gap-10 rounded-2xl border border-black/5 p-8 shadow-sm md:grid-cols-2 md:items-center">
            <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-black/[0.03]">
              <Image
                src="/images/courses/family-education-4.jpg"
                alt="兒童氣質桌遊《遇兒魔導師》遊戲內容物：遊戲盒、棋盤、卡牌與說明書"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-brand-green">--兒童氣質桌遊--</p>
              <h2 className="mt-1 text-2xl font-bold text-ink">【遇兒魔導師】</h2>
              <p className="mt-3 text-sm text-ink/70">
                這是一套為了支持各界爸媽，有能力「做孩子一輩子的家人」而產生的桌遊。
              </p>
              <h3 className="mt-4 text-sm font-bold text-ink">★桌遊介紹</h3>
              <p className="mt-1 text-sm text-ink/70">
                在這個以小孩為本的魔法陣裡，處處遇見兒童不稀奇，能夠解開童心之謎才是讓魔力提升的關鍵。為了好好施展生活的魔法，從闇黑向光明快速奔跑吧！
                本遊戲需每位玩家輪流擔任「兒童」的角色與其他玩家互動，藉由角色扮演來探討玩家的教養風格。想成為「開明權威」的家長，你必需認識先天氣質、更要勇敢去愛，設法穿梭在眾多「遇兒事件」與「氣質魔藥」間，施展你的專屬魔力，將有機會贏得「遇兒魔導師」的明亮尊榮！
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-y-1 text-sm text-ink/70">
                <dt className="font-semibold text-ink">遊戲人數</dt>
                <dd>3-6 人（建議 4 人以上）</dd>
                <dt className="font-semibold text-ink">遊戲時間</dt>
                <dd>60-90 分鐘</dd>
                <dt className="font-semibold text-ink">建議年齡</dt>
                <dd>12 歲以上</dd>
                <dt className="font-semibold text-ink">出版單位</dt>
                <dd>忠義基金會</dd>
                <dt className="font-semibold text-ink">遊戲設計</dt>
                <dd>阿普蛙工作室</dd>
                <dt className="font-semibold text-ink">美術設計</dt>
                <dd>畫家 SEVEN</dd>
                <dt className="font-semibold text-ink">遊戲顧問</dt>
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

      <section className="bg-black/[0.03] py-16 text-center">
        <Container>
          <h2 className="text-2xl font-bold text-ink">想幫家庭安排一場親子共學？</h2>
          <p className="mt-3 text-ink/70">告訴我們家庭的期待與孩子的年紀，我們會協助安排合適的課程內容與時數。</p>
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
    </>
  );
}
