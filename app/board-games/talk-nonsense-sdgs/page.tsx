import type { Metadata } from "next";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "瞎掰王SDGs教育版",
  description:
    "SDGs 聯合國17項永續發展目標 × 瞎掰王。以SDGs 17項永續發展目標設計題目的派對遊戲，一盒就能全班分組進行，寓教於樂訓練口條與自信表達。",
};

const features = [
  "以SDGs17項永續發展目標來設計題目，共150題。",
  "只需要一盒就可以全班分組進行，老師操作無負擔！",
  "教育版增加許多方便課堂操作的配件。",
  "培養學生對議題的敏感度，並訓練玩家口語表達及邏輯思考能力。",
];

const info = [
  ["適合人數", "3-6人(組)"],
  ["適合年齡", "10歲以上"],
  ["遊戲時間", "30-45分鐘（一堂課內能夠操作完畢）"],
  ["售價", "690元（消費滿2000免運）"],
];

export default function TalkNonsenseSdgsPage() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold text-brand-green">SDGs 聯合國17項永續發展目標</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">瞎掰王SDGs教育版</h1>
        <p className="mt-4 text-ink/70">
          千奇百怪的冷知識＋瞎掰人瘋狂胡扯＋SDGs 17項永續發展目標＝寓教於樂的派對遊戲
        </p>

        <h2 className="mt-8 text-lg font-bold text-ink">遊戲介紹</h2>
        <p className="mt-2 text-ink/70">
          本桌遊是以「永續發展目標」為主軸設計題目。為求人類和地球的現在與未來的和平與繁榮，人們做了不少努力，也必須面對許多未知和威脅。讓我們在遊戲中學習相關的議題，並且在其中訓練口條與自信表達。
        </p>

        <h2 className="mt-8 text-lg font-bold text-ink">遊戲特色</h2>
        <ul className="mt-2 space-y-1 text-ink/70">
          {features.map((f, i) => (
            <li key={f}>
              {i + 1}. {f}
            </li>
          ))}
        </ul>

        <h2 className="mt-8 text-lg font-bold text-ink">遊戲資訊</h2>
        <dl className="mt-2 grid grid-cols-2 gap-y-1 text-sm text-ink/70">
          {info.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="font-semibold text-ink">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://forms.gle/94eFhwcHEQG1hAWS6"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
          >
            購買桌遊
          </a>
          <a
            href="https://forms.gle/EdEpqW4dK4GH5Pmg8"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-ink px-6 py-3 font-semibold text-ink"
          >
            邀約課程
          </a>
        </div>
      </div>
    </Container>
  );
}
