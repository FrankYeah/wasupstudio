import type { Metadata } from "next";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "十分機靈",
  description:
    "10 選 1 的緊湊問答遊戲。每道題目都有10個可能的答案，運動、常識、歷史、動漫應有盡有，一定有一種能夠考倒你！",
};

const info = [
  ["遊戲人數", "2-8 人"],
  ["遊戲時間", "20+ 分鐘"],
  ["適合年齡", "10+ 歲"],
  ["售價", "590元（消費滿2000元免運）"],
];

export default function SharpTenPage() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold text-ink">《十分機靈》</h1>
        <p className="mt-4 text-ink/70">
          《十分機靈》是一款問答遊戲。每道題目都有10個可能的答案，所有玩家都可以在緊湊的遊戲過程，享受刺激的答題樂趣。問題可能是運動、常識、歷史、動漫等，一定有一種能夠考倒你！
        </p>
        <p className="mt-4 text-sm text-ink/50">＊本款桌遊由柏龍玩具代理，阿普蛙協助設計部分題目。</p>

        <h2 className="mt-8 text-lg font-bold text-ink">桌遊資訊</h2>
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSeNjwzit1cjicwRAKBiZfYBmvYPlf8z7C4FX6mtrHeE4nO0TQ/viewform"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
          >
            購買桌遊
          </a>
        </div>
      </div>
    </Container>
  );
}
