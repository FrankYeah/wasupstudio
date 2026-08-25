import type { Metadata } from "next";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "買數位教材",
  description:
    "人際衝突 X 預防霸凌，共創友善校園：啟動學生正面力量！專為國小校園設計的數位教材，互動式影片，一套帶全班。",
};

const stories = [
  {
    title: "《萌虎怎麼了》",
    image: "/images/digital-materials/story-1.png",
    summary: "萌虎有過動症，某天因為不滿同學的玩笑，難以控制情緒而引發衝突。",
    need: "生理需求",
    grade: "中、高年級",
    time: "10 分鐘＋一節課",
    video: "https://youtu.be/s1wnJW_FH7Q",
  },
  {
    title: "《為什麼不跟我玩》",
    image: "/images/digital-materials/story-2.png",
    summary: "俏鼠想要跟同學玩，卻不知道「一直戳」同學，會讓他人感到不舒服。",
    need: "玩樂需求",
    grade: "中、高年級",
    time: "10 分鐘 x2＋一節課",
    video: "https://youtu.be/kzlXfCGB8WA",
  },
  {
    title: "《金馬的秘密》",
    image: "/images/digital-materials/story-3.png",
    summary:
      "金馬為了融入群體，卻不知道該如何拒絕不合理的要求，反而傷害了原本要好的同學。",
    need: "同儕歸屬",
    grade: "中、高年級",
    time: "10 分鐘 x3＋一節課",
    video: "https://youtu.be/D0nARp55Gfc",
  },
  {
    title: "《班長是公僕還是國王》",
    image: "/images/digital-materials/story-4.png",
    summary:
      "班長為了提升班級競賽的名次，與同學們制定了班規，卻在執行期間逐漸累積了「民怨」。",
    need: "權力與掌握",
    grade: "高年級",
    time: "10 分鐘 x4＋一節課",
    video: "https://youtu.be/eVqf20UyEJM",
  },
];

const includes = [
  "可下載的教學簡報檔案 x4",
  "可下載的學習單檔案 x4",
  "線上故事影片 x26",
  "線上計分系統",
  "線上詳細操作說明",
];

export default function DigitalMaterialsPage() {
  return (
    <>
      <section className="bg-black/[0.03] py-16">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold text-brand-green md:text-4xl">
              人際衝突 X 預防霸凌，
              <br />
              共創友善校園：啟動學生正面力量！
            </h1>
            <p className="mt-3 font-semibold text-ink">
              數位教材｜互動式影片｜一套帶全班
            </p>
            <p className="mt-4 text-ink/70">
              專為國小校園設計的全新數位教材！透過融入 4
              個人際衝突的故事，學生們練習在事件中做出關鍵選擇，推進發展，共同決定故事的最終結局。
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/digital-materials/hero.png"
              alt="萌虎、俏鼠與貓頭鷹老師的教室情境插畫"
              width={746}
              height={533}
              className="h-auto w-full"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-[#248d6c]">故事內容</h2>
          <p className="mt-2 text-ink/70">
            本教材共有 4 個故事，每個故事長短不一，且分別呈現了人際衝突中常見的
            4 種需求。
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {stories.map((s) => (
              <div
                key={s.title}
                className="overflow-hidden rounded-xl border border-black/5"
              >
                <div className="relative aspect-video w-full bg-black/5">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{s.summary}</p>
                  <dl className="mt-3 space-y-0.5 text-xs text-ink/60">
                    <p>需求類型：{s.need}</p>
                    <p>適合年級：{s.grade}</p>
                    <p>操作時間：{s.time}</p>
                  </dl>
                  <a
                    href={s.video}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-brand-green underline"
                  >
                    第一天影片試播
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-black/[0.03] py-16">
        <Container>
          {/* 2026-08-25 量測 font color 才發現：這句跟「故事內容」都是青綠 #248d6c，不是重建站
              原本的一般深色字；下面 3 張 Day 卡的標題原站也各自有色（橘 #c2743b／橘 #c2743b／
              紅 #c23b3b），且是「Day X」跟時數各自一行，不是用「・」接在同一行。 */}
          <h2 className="text-2xl font-bold text-[#248d6c]">
            操作方式：以《為什麼不跟我玩》為例
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6">
              <h3 className="font-bold text-[#c2743b]">
                Day 1
                <br />
                10 分鐘
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                播放故事影片，讓學生了解劇情，並發放學習單，讓學生帶回去與家長討論。
              </p>
            </div>
            <div className="rounded-xl bg-white p-6">
              <h3 className="font-bold text-[#c2743b]">
                Day 2
                <br />
                10 分鐘
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                在課堂上統計各組的答案，填入網站系統。接著播放第二日故事影片，並發放學習單。
              </p>
            </div>
            <div className="rounded-xl bg-white p-6">
              <h3 className="font-bold text-[#c23b3b]">
                Day 3
                <br />
                一節課
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                在課堂上統計各組的答案，填入網站系統。網站將根據前 2
                天的答案給出不同的結局（結局共有 4
                種）。接著發放學習單，討論結局故事中角色的需求，以及該如何因應。
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_260px] md:items-center">
            <p className="text-xs text-ink/50">
              ＊4
              則故事的複雜度各不相同，所以進行天數也不同，例如《萌虎怎麼了》的故事比較單純，只需要操作
              2
              天，適合國小中年級或老師們第一次操作；《班長是公僕還是國王》的故事最為複雜且跟學生的人際發展有關，要進行
              5 天，適合國小高年級或較熟悉流程的老師操作。
            </p>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/digital-materials/classroom-testing.jpg"
                alt="阿普蛙帶領學生實際測試教材"
                width={1280}
                height={720}
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 2026-08-25 全站逐頁核對 section 背景才發現：這段原站是墨綠 #396d50 底、白字，價格數字用
          金黃 #dab844（量測 font color 屬性得到），不是重建站原本的純白底。 */}
      <section className="bg-[#396d50] py-16">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[#dab844]">
              NT.1200{" "}
              <span className="text-base font-normal text-white/60">
                (原價1500)
              </span>
            </h2>
            <p className="mt-2 text-sm text-white/80">
              *本教材可使用折扣碼。首賣折扣碼「nobullying」，再折 300 元。
            </p>
            <p className="mt-4 text-white/80">
              本教材皆為數位內容（無實體教材），內含：
            </p>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
              {includes.map((i, idx) => (
                <li key={i}>
                  {idx + 1}. {i}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-bold text-white">
              ＊＊＊購買一套即可全班操作＊＊＊
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeNjwzit1cjicwRAKBiZfYBmvYPlf8z7C4FX6mtrHeE4nO0TQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-brand-green px-8 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
            >
              立即購買（匯款/ATM轉帳）
            </a>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/digital-materials/classroom-group-work.jpg"
                alt="學生分組討論學習單"
                width={1280}
                height={720}
                className="h-auto w-full"
              />
            </div>

            <h3 className="mt-8 font-bold text-white">｜課程目標｜</h3>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
              <li>深入了解人際衝突中的情感與需求。</li>
              <li>探討旁觀者的力量，如何影響事件發展。</li>
              <li>共同思考衝突事件的聰明因應策略。</li>
            </ul>
            <h3 className="mt-6 font-bold text-white">｜課程內容｜</h3>
            <p className="mt-2 text-sm text-white/80">
              戲劇體驗：融入虛構的叢林班日常，透過生動戲劇影片，一同探討角色未來的選擇。
            </p>
            <p className="mt-2 text-sm text-white/80">
              引導反思：從角色感受與需求出發，引導深入討論合理的因應策略，讓學生更理解彼此的情感需求。
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/digital-materials/teaching-slides.png"
                    alt="教學簡報檔預覽"
                    width={1100}
                    height={552}
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-2 text-center text-xs text-white/60">
                  ↑教學簡報檔
                </p>
              </div>
              <div>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/images/digital-materials/worksheet-day1.jpg"
                    alt="每日學習單預覽"
                    width={419}
                    height={595}
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-2 text-center text-xs text-white/60">
                  ↑每日學習單
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 這段原站是淡黃 #fffcd2 底、內文維持一般深色（量測 font color 是 #2a2a2a，
          跟深色主題那幾段不同，不用換成白字）。 */}
      <section className="bg-[#fffcd2] py-16">
        <Container className="text-sm text-ink/70">
          <p className="font-bold text-ink">【媒體報導】</p>
          <p className="mt-1">
            20240503 Right Plus 多多益善｜
            <a
              href="https://rightplus.org/2024/05/03/wasup/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              我們班的叢林法則：不只為學生設計的反霸凌教材，親師生共同決定命運
            </a>
          </p>
          <p className="mt-6 font-bold text-ink">【感謝名單】</p>
          <p className="mt-1">感謝財團法人 RC 教育基金會支持本教材開發！</p>
          <p>感謝基隆市中和國小、仁愛國小協助遊戲測試！</p>
          <p>
            感謝蘇明進老師、杜佳憲主任、王振皓老師、陳俞君老師協助測試，並提供寶貴意見！
          </p>
        </Container>
      </section>
    </>
  );
}
