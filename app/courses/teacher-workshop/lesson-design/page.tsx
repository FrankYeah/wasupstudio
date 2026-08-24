import type { Metadata } from "next";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "教案、教材設計",
  description:
    "阿普蛙教案、教材設計課程，包含遊戲化教學（六大策略）、遊戲化教案工作坊、教育桌遊設計工作坊，帶老師動手設計屬於自己的遊戲化教案與教育桌遊。",
};

const CTA_HREF =
  "https://docs.google.com/forms/d/e/1FAIpQLScTpdFbaeh221rvaEMgG_1vrh0RC_9rOEx1j8ActjGE4PiM7A/viewform";

const gamification = {
  title: "一、遊戲化教學（六大策略）",
  audience: "國小、國中、高中、大學階段教師",
  subject: "所有科目",
  hours: "2~6 小時",
  lead: "遊戲不只是娛樂，更是一種強大的教學工具！本課程將引領您探索遊戲化教學的六大策略，讓您能在課堂中融入遊戲元素，激發學生的學習動機。透過遊戲化的體驗，您將學會如何巧妙地結合知識點，提升學生參與度。",
  experience: [
    { label: "遊戲體驗", desc: "實際參與簡單而有趣的遊戲模組，輕鬆掌握如何將遊戲元素融入不同科目的教學。" },
    { label: "引導反思", desc: "深入理解遊戲化與遊戲的區別，並探討如何激發學生的動機，使其熱衷於學習。" },
  ],
  outline: [
    { label: "遊戲化六大設計策略", desc: "深入探討 2~6 個遊戲化設計策略，為您的課堂注入新鮮元素。" },
    { label: "簡單模組體驗", desc: "實際體驗已設計好的簡單模組，理解遊戲化在不同學科的靈活運用。" },
    { label: "系統化概念", desc: "有系統地探討遊戲化的核心概念，打開更多教學可能性。" },
  ],
};

const workshop = {
  title: "二、遊戲化教案工作坊",
  audience: "國小、國中、高中、大學階段教師",
  subject: "所有科目",
  hours: "3 小時",
  lead: "讓我們一同打破傳統教學框架，進入充滿趣味與挑戰的遊戲教學世界！本工作坊將帶您深入了解遊戲化與遊戲的微妙區別，並實際演練遊戲教案的設計，讓您在教學中增添更多元的元素。",
  experience: [
    { label: "遊戲體驗", desc: "深入體驗簡單遊戲模組，理解遊戲化的核心思維。" },
    { label: "引導反思", desc: "探討遊戲化與遊戲的區別，學習如何激發學生參與的動機。" },
    { label: "實作練習", desc: "利用所學知識，實際動手設計教學遊戲，並即時獲得專業回饋。" },
  ],
  outline: [
    { label: "遊戲化六大設計策略", desc: "深入探討 2~6 個遊戲化設計策略，為您的課堂注入新鮮元素。" },
    { label: "簡單模組體驗", desc: "實際體驗已設計好的簡單模組，理解遊戲化在不同學科的靈活運用。" },
    { label: "系統化概念", desc: "有系統地探討遊戲化的核心概念，打開更多教學可能性。" },
    { label: "實作練習", desc: "學員進行教案設計，並獲得即時回饋。" },
  ],
};

const designWorkshop = {
  title: "三、教育桌遊設計工作坊",
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
      hours: "6 小時／場，依總時數安排場次",
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

function InfoRow({ audience, subject, hours }: { audience: string; subject: string; hours?: string }) {
  return (
    <dl className="mt-3 grid grid-cols-1 gap-y-1 text-sm text-ink/70 sm:grid-cols-3 sm:gap-x-4">
      <div>
        <dt className="inline font-semibold text-ink">適合對象：</dt>
        <dd className="inline">{audience}</dd>
      </div>
      <div>
        <dt className="inline font-semibold text-ink">適合科目：</dt>
        <dd className="inline">{subject}</dd>
      </div>
      {hours && (
        <div>
          <dt className="inline font-semibold text-ink">授課時數：</dt>
          <dd className="inline">{hours}</dd>
        </div>
      )}
    </dl>
  );
}

function OutlineList({ items }: { items: { label: string; desc: string }[] }) {
  return (
    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/70">
      {items.map((o) => (
        <li key={o.label}>
          <span className="font-semibold text-ink">{o.label}：</span>
          {o.desc}
        </li>
      ))}
    </ul>
  );
}

export default function LessonDesignPage() {
  return (
    <>
      <section className="bg-black/[0.03] py-20">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold text-brand-green">教師研習</p>
            <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">📖 教案、教材設計</h1>
            <p className="mt-6 text-ink/70">
              從掌握遊戲化教學策略、動手設計遊戲教案，到完成一款屬於自己的教育桌遊，帶老師一步步把「遊戲化」內化成可以帶回課堂的能力。
            </p>
            <a
              href={CTA_HREF}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-brand-green px-8 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
            >
              邀約課程
            </a>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black/[0.05]">
            <Image
              src="/images/courses/lesson-design-1.jpg"
              alt="教師分組進行遊戲化教案設計工作坊"
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-ink">{gamification.title}</h2>
          <InfoRow audience={gamification.audience} subject={gamification.subject} hours={gamification.hours} />
          <p className="mt-4 text-ink/70">{gamification.lead}</p>

          <h3 className="mt-6 text-sm font-bold text-ink">研習內容</h3>
          <ul className="mt-1 space-y-2 text-sm text-ink/70">
            {gamification.experience.map((e) => (
              <li key={e.label}>
                <span className="font-semibold text-ink">{e.label}：</span>
                {e.desc}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-bold text-ink">研習大綱</h3>
          <OutlineList items={gamification.outline} />
        </Container>
      </section>

      <section className="bg-black/[0.03] py-16">
        <Container className="grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black/[0.05]">
            <Image
              src="/images/courses/lesson-design-2.jpg"
              alt="教師分組進行遊戲化教案工作坊實作練習"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink">{workshop.title}</h2>
            <InfoRow audience={workshop.audience} subject={workshop.subject} hours={workshop.hours} />
            <p className="mt-4 text-ink/70">{workshop.lead}</p>

            <h3 className="mt-6 text-sm font-bold text-ink">研習內容</h3>
            <ul className="mt-1 space-y-2 text-sm text-ink/70">
              {workshop.experience.map((e) => (
                <li key={e.label}>
                  <span className="font-semibold text-ink">{e.label}：</span>
                  {e.desc}
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-sm font-bold text-ink">研習大綱</h3>
            <OutlineList items={workshop.outline} />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black/[0.05]">
            <Image
              src="/images/courses/lesson-design-3.jpg"
              alt="學員分組進行教育桌遊設計工作坊實作練習"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink">{designWorkshop.title}</h2>
            <InfoRow audience={designWorkshop.audience} subject={designWorkshop.subject} />
            <p className="mt-4 max-w-3xl text-ink/70">{designWorkshop.lead}</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {designWorkshop.tiers.map((tier) => (
                <div key={tier.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-ink">{tier.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">授課時數：{tier.hours}</p>
                  <h4 className="mt-4 text-sm font-bold text-ink">研習大綱</h4>
                  <OutlineList items={tier.outline} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-black/[0.03] py-16 text-center">
        <Container>
          <h2 className="text-2xl font-bold text-ink">想邀請阿普蛙帶教案／教材設計工作坊？</h2>
          <p className="mt-3 text-ink/70">依教師需求與可用時數，選擇合適的課程規格，我們會協助安排研習內容。</p>
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
