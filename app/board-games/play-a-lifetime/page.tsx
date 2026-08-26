import type { Metadata } from "next";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import Link from "next/link";
import { Container } from "@/app/_components/Container";
import { YouTubeEmbed } from "@/app/_components/YouTubeEmbed";

export const metadata: Metadata = {
  title: "玩一世人",
  description:
    "佛法 × 人生觀。以模擬現實人生的追求為基底，加入佛教輪迴、善惡業觀點，體會俗世追求可能帶來的額外影響的桌遊。",
};

const info = [
  ["適合人數", "3-5 人"],
  ["適合年齡", "10 歲以上"],
  ["遊戲時間", "45 分鐘"],
  ["售價", "860元（消費滿2000元免運）"],
];

export default function PlayALifetimePage() {
  return (
    <Container className="py-16">
      {/* 這頁跟其他商品頁不一樣：原站的兩欄**各自都有圖有文**（2026-08-26 讀原站 <td> 順序確認）——
          左欄＝標題＋介紹＋遊戲資訊，遊戲內容物照放在文字**之後**；右欄＝盒裝封面圖在最上，
          底下接「☆桌遊製作緣起」。重建站原本做成「單張圖在左、文字全在右」，還把製作緣起整段
          移到頁尾另一個區塊，左右跟區塊結構都跟原站不同，2026-08-26 改回。
          影片位置沒動：原站也是接在這張兩欄表格之後、整寬置中。
          見 MIGRATION-PLAN.md Phase 2「圖文左右順序」。 */}
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold text-brand-green">佛法 × 人生觀</p>
          <h1 className="mt-2 text-3xl font-bold text-ink">玩一世人</h1>
          <p className="mt-4 text-ink/70">
            看到這段文字的你，是個怎麼樣的人？正過著怎麼樣的人生呢？在有限的人生當中，你會汲汲營營地追求理想中的幸福；或是單純隨波逐流地體驗發生的一切嗎？不論選擇「為與不為」，如果你能想像……人死後不是結束，而是還有「來生」，且我們今生的所有作為，都會像種下種子一樣，在來生某世開花結果。你這一世的選擇，是否會改變呢？
          </p>
          <p className="mt-4 text-ink/70">
            本桌遊以模擬「現實人生的追求」為基底，加入佛教中關於「輪迴」、「善惡業」的觀點，讓玩家可以在遊戲中體會「俗世的追求」可能帶來的額外影響；也讓玩家有機會一窺佛家眼中，世界運作的真相。
          </p>

          <h2 className="mt-8 text-lg font-bold text-ink">遊戲資訊</h2>
          <dl className="mt-2 grid grid-cols-2 gap-y-1 text-sm text-ink/70">
            {info.map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="font-semibold text-ink">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <Link
              href="/board-games"
              className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
            >
              查看更多桌遊
            </Link>
          </div>

          <div className="relative mt-8 aspect-4/3 overflow-hidden rounded-2xl bg-black/[0.03]">
            <Image
              src="/images/products/play-a-lifetime.jpg"
              alt="玩一世人遊戲內容物：輪迴圖板、個人圖板、人生結果牌、業點指示物、玩家指示物、有緣人指示物、資訊卡、骰子"
              fill
              className="object-contain p-6"
            />
          </div>
        </div>

        <div>
          <Image
            src="/images/products/play-a-lifetime/box-cover.png"
            alt="玩一世人桌遊盒裝封面"
            width={800}
            height={799}
            className="mx-auto h-auto w-full max-w-md"
          />
          <h2 className="mt-8 text-lg font-bold text-ink">☆桌遊製作緣起</h2>
          <p className="mt-2 text-ink/70">
            世界上有好人壞人、有好運壞運、動物有可以吃的動物和不能吃的寵物、性別有男有女、有錢就等於快樂.....？當初其實很貪心，想要塞一些心靈雞湯或知識進到桌遊裡，後來透過阿普蛙的深入訪談與專業建議，設計出【玩一世人】來激起大家反思、一個沒有標準答案或遊戲路徑的遊戲，透過遊戲體驗人生苦樂、追求財富、福報、名聲、幸福的桌遊。希望非推廣某特定宗教，而是意在推廣獨立思考、反思、探討每個人生命價值，不囉嗦直接開局，做你自己人生主人的導演！
          </p>
          <p className="mt-2 text-right text-sm font-semibold text-ink">——桌遊發起人 王麥克</p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="text-lg font-bold text-ink">遊戲介紹影片</h2>
        <div className="mt-4">
          <YouTubeEmbed id="_Jr39lCaxaU" title="玩一世人桌遊教學影片" />
        </div>
      </div>
    </Container>
  );
}
