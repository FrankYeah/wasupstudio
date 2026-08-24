import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "拚陣頭",
  description:
    "阿普蛙工作室攜手台南市文化局年度文化力作。認識8種藝陣及台灣特有傳統文化的多人派對桌遊，也是國中小鄉土課程的補充教材。",
};

const features = [
  "認識 8 種藝陣及台灣特有傳統文化",
  "節奏明快的多人派對遊戲",
  "國中小鄉土課程的補充教材",
];

const info = [
  ["遊戲年紀", "7歲以上"],
  ["遊戲人數", "2-6人"],
  ["遊戲時間", "20-30分鐘"],
  ["售價", "450元（消費滿2000免運）"],
];

export default function PinZhentouPage() {
  return (
    <Container className="py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black/[0.03]">
          <Image
            src="/images/products/pin-zhentou.png"
            alt="拚陣頭桌遊封面"
            fill
            className="object-contain p-6"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-brand-green">阿普蛙工作室 攜手 台南市文化局 年度文化力作！</p>
          <h1 className="mt-2 text-3xl font-bold text-ink">《拚陣頭》</h1>
          <p className="mt-4 text-ink/70">
            即將舉辦一年一度的廟會盛事，你是鄉里重要的「頭人」，要在村子裡號召人才一起來跳陣頭。俗話說「輸人毋輸陣，輸陣歹看面」，每個村子的陣頭無不盡全力拚館，究竟哪個村子的陣頭最棒呢？作伙來拚陣頭！
          </p>

          <h2 className="mt-8 text-lg font-bold text-ink">遊戲特色</h2>
          <ul className="mt-2 space-y-1 text-ink/70">
            {features.map((f) => (
              <li key={f}>{f}</li>
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

          <h2 className="mt-8 text-lg font-bold text-ink">遊戲玩法</h2>
          <p className="mt-2 text-ink/70">
            從你的手牌中，找出可以湊成陣頭的鄉民牌，只要能夠組成越華麗、越強大的陣頭，就能夠讓神明開心、獲得神明保佑！鄉里也將因你（頭人）而感到光榮！
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://goo.gl/forms/PeWPnnnayz4P6r112"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
            >
              購買桌遊
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScTpdFbaeh221rvaEMgG_1vrh0RC_9rOEx1j8ActjGE4PiM7A/viewform"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink px-6 py-3 font-semibold text-ink"
            >
              邀約課程
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-xl bg-black/[0.03] px-6 py-5 text-sm text-ink/60">
        <p className="font-semibold text-ink/70">遊戲勘誤說明</p>
        <p className="mt-2">
          規則書第八頁第三行，獲得一張成就牌，可額外加3分。原幫助卡的跳鼓陣和宋江陣之顏色錯置，跳鼓陣為藍色、宋江陣為紅色。已製作新的幫助卡，會連同桌遊附上。
        </p>
        <p className="mt-2">
          雖然在發行前，阿普蛙已努力校稿，但難免仍有疏漏，我們未來會格外細心，使桌遊更加完備。阿普蛙團隊在此致上最高歉意！
        </p>
      </div>
    </Container>
  );
}
