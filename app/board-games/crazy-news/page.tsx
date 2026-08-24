import type { Metadata } from "next";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "抓誑新聞 Crazy News",
  description:
    "全球第一款媒體識讀桌遊。合作對抗類遊戲，收錄30則台灣時事新聞，結合108課綱跨領域學習，培養媒體識讀能力。",
};

const highlights = [
  "結合108課綱跨領域學習，培養媒體識讀能力",
  "合作對抗類遊戲",
  "收錄30則台灣時事新聞",
];

const features = [
  ["角色扮演", "玩家可擔任媒體或是閱聽人，體驗媒體生態中不同角色的立場與能力。"],
  ["即時對戰", "玩家們需使用僅有的手牌，安排本回合的戰術。"],
  ["團隊合作", "與隊友相互合作，提升擊倒問題新聞的成功率！"],
  ["媒體識讀", "學會分辨「置入」「誤導」「標籤」「刺激」的錯誤報導方式，並培養主動參與的公民意識！"],
];

const info = [
  ["遊戲人數", "3-7人"],
  ["遊戲時間", "30-50 分鐘"],
  ["遊戲年齡", "10＋"],
  ["遊戲設計", "Wa'sup 阿普蛙工作室有限公司"],
  ["共同出版", "台灣少年權益與福利促進聯盟"],
];

export default function CrazyNewsPage() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold text-brand-green">全球第一款媒體識讀桌遊</p>
        <h1 className="mt-2 text-3xl font-bold text-ink">抓誑新聞 Crazy News</h1>

        <p className="mt-4 text-ink/70">
          從前從前，求知若渴的人類為了得到更多的資訊，創造了「媒體」。由媒體當他們的眼、當他們的嘴，甚至是……當他們的腦。後來，人類越來越依賴媒體而失去自主性、忘記該如何思考，而漸漸「誑化」的媒體成了指引方向的主人，使用者則成了盲目跟隨的奴隸……
        </p>
        <p className="mt-4 text-ink/70">
          遊戲中，你將成為「識讀者」同盟的一員，聆聽報導並破除藏匿其中的四大毒物！在媒體徹底誑化之前，號召你的夥伴升級各種特殊技、打擊怪獸，一起讓誑化的媒體恢復正常！
        </p>

        <div className="relative mt-8 aspect-2/1 overflow-hidden rounded-2xl bg-black/[0.03]">
          <Image
            src="/images/products/crazy-news.png"
            alt="抓誑新聞 Crazy News 桌遊"
            fill
            className="object-contain p-4"
          />
        </div>

        <ul className="mt-8 space-y-1 text-ink/70">
          {highlights.map((h) => (
            <li key={h}>▽ {h}</li>
          ))}
        </ul>

        <p className="mt-4 text-ink/70">售價：750元（消費滿2000免運）</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://forms.gle/n4eqD2xcKHgPUwrS7"
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

        <p className="mt-4 text-sm text-ink/50">
          ＊購買桌遊即可獲得線上播報新聞之功能。＊第一刷買家，可來信索取註冊碼。
        </p>

        <h2 className="mt-12 text-lg font-bold text-ink">遊戲理念</h2>
        <p className="mt-2 text-ink/70">
          打開電視，聳動、即時的新聞畫面總是牽動著我們的眼球，而我們的每一次轉台，也都展現了我們的喜好，也形塑著媒體的報導風格。我們發現，缺乏求證、監督精神的閱聽人，與追逐流量、利潤而罔顧第四權責任的媒體，形成一種「共惡關係」。當媒體環境越來越壞時，我們沒有人能成為真正的贏家。
        </p>
        <p className="mt-4 text-ink/70">
          我們在遊戲中藏入許多社會現況的比喻，像是誑化媒體的四種毒物、滋生的社會亂象怪獸、識讀者的特殊技能……留待玩家去細細體會。《抓誑新聞》雖然只分為媒體與識讀者兩大陣營，但其實媒體、閱聽人、社會三者不是競爭對立，而是相互影響的。因此，我們希望培養閱聽人的自主性與識讀能力，並透過檢舉及申訴行動督促媒體自律，形成一個更健全的媒體生態。
        </p>

        <h2 className="mt-12 text-lg font-bold text-ink">遊戲特色</h2>
        <ul className="mt-2 space-y-2 text-ink/70">
          {features.map(([label, desc]) => (
            <li key={label}>
              <span className="font-semibold text-ink">{label}：</span>
              {desc}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-lg font-bold text-ink">遊戲資訊</h2>
        <dl className="mt-2 grid grid-cols-2 gap-y-1 text-sm text-ink/70">
          {info.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="font-semibold text-ink">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Container>
  );
}
