import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "關於我們",
  description: "用遊戲，創造一個更好的公民社會。阿普蛙工作室成立於 2014 年，用遊戲影響教育、提升台灣整體公民素養。",
};

const stats = [
  { label: "相關課程場次", value: "1,913" },
  { label: "影響人數", value: "53,190" },
  { label: "授課總時數", value: "6,809" },
];

const clientCategories = [
  { title: "教師研習", examples: "建國中學、台南公民學科中心、彰化女中、台中一中⋯等" },
  { title: "青少年營隊", examples: "台中一中寒假兩日營、新科國中暑假五日營、土城國小寒假學生兩日營⋯等" },
  {
    title: "青少年培力課程",
    examples: "彰化縣兒少代表培力、家扶中心—青年發聲方案、苗栗縣兒少代表培力、新竹市兒少代表培力⋯等",
  },
  { title: "社區創生與志工教育訓練", examples: "基隆市文安社區鄉土課、新北市家扶志工訓練、文山社區大學志工服務培訓⋯等" },
  { title: "企業及政府部門教育訓練", examples: "彰化縣社會處兒少科、新竹科管局、朱銘美術館、十大傑出青年基金會、燃點公民平台⋯等" },
];

const team = [
  {
    name: "吳健毅 Henry Wu",
    bio: "腦內多巴胺總是處於分泌不足的狀態，所以得不斷尋求改變與刺激的過動男子。認為「拯救世界」的關鍵就在於「建構公民社會」，致力於實踐具有「自主性」與「同理心」的生活，並轉化為遊戲課程，影響更多人。",
    tags: ["興趣：教育、哲學、心靈成長、社會創新", "專長：遊戲設計、創作劇本"],
  },
  {
    name: "林侃眉 Anny Lin",
    bio: "曾經擔任過五年的社工師，堅信用生命影響生命。在社會工作中，看見人的善良，也看見大環境的限制，讓許多人找不到讓自己快樂的鑰匙。成為阿普蛙，走進教育第一線、踏入社會，將鑰匙交給更多的人們。",
    tags: ["關注議題：自我探索與成長、親子溝通與教養、兒童權利", "擅長領域：桌遊及課程帶領、幼兒及兒童發展、團體動力"],
  },
  {
    name: "杜冠賢 Alex Tu",
    bio: "不只是個乖乖牌。出社會後不斷轉換跑道，探索自我。進到長照領域後體會到社福領域的限制，選擇加入社企。期望自己的存在能影響身邊的人，為社會帶來一些改變。Be the change you wanna see.",
    tags: ["關注議題：高齡社會、貧富差距、貧窮、環境保育", "擅長領域：課程帶領、議題研究"],
  },
  {
    name: "林鉞 Luke Lin",
    bio: "不是老師卻熱愛教學，把知識與技術轉換成最貼近生活的話語與概念分享給每個人，喜歡跟著不同的團體一起學習與成長，把從遊戲中學到的機制轉化成現實運用的版本，期待自己的分享可以帶給教室真正的改變。",
    tags: ["興趣：心靈成長、教學、遊戲", "專長：多元學習、遊戲化課程"],
  },
];

// 原站這 4 張團隊照片是放在同一個相簿區塊，跟每位講師的文字介紹沒有明確的一對一對應關係，
// 為避免張冠李戴（把照片配錯人名），這裡先當團隊環境照片呈現，不個別標名字。
// TODO：上線前請客戶確認每張照片對應哪位講師，再改成一對一配對。
const teamPhotos = [
  "/images/about/team-photo-1.jpg",
  "/images/about/team-photo-2.jpg",
  "/images/about/team-photo-3.jpg",
  "/images/about/team-photo-4.jpg",
];

const pressNews = [
  "2015/07/09 親子天下《開發還是環保？阿普蛙用桌遊玩出公民意識》",
  "2015/09/24 聯合新聞網《這堂桌遊課真實的可怕！反制電玩時代 阿普蛙用桌遊訓練獨立思考》",
  "2015/10/22 親子天下《改良桌遊玩法 種下公民種子》",
  "2016/03/13 大愛電視-年輕人讚起來《玩一場桌上公民課》",
  "2016/05/03 PeoPo公民新聞《創業理財當老闆 幸福捧在手掌心》",
  "2016/08/09 自由時報電子報《雞籠中元祭 就是邀你來搞怪》",
  "2016/08/09 中嘉新聞《中元怪奇博物館13日開張 情境劇場邀您互動》",
  "2016/10/31 TVBS新聞網《新教育！桌遊培養程式邏輯 推廣公民意識》",
  "2017/04/24 中時電子報《桌遊連結教案 阿普蛙玩出頭》",
  "2017/10/06 鏡週刊《【專訪阿普蛙】合作與對抗的兩難：遊戲桌上的人性百態》",
];

const pressMagazines = [
  "2015/08 親子天下70期《改良桌遊玩法 種下公民種子》",
  "2015/05 天下雜誌基隆款款行《阿普蛙 桌遊翻轉教育》",
  "2015/10 英語島《玩一場「World Peace Game」》",
  "2016春季號 魅力基隆《因為愛鄉，成就夢想的基石-在地青年勇於說出家鄉故事》",
];

const pressRadio = [
  "2015/10/8 寶島新聲-寶島有意思《談用桌遊做公民獨立思考訓練 阿普蛙工作室曾榮輝》",
  "2015/10/10 復興廣播電台-淳．靜時光",
  "2015/10/31 教育廣播電台-教育行動家",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-black/[0.03] py-16">
        <Container className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Image
              src="/images/brand/logo-mark.png"
              alt="阿普蛙工作室"
              width={160}
              height={160}
              className="h-32 w-32"
            />
            <h1 className="mt-6 text-2xl font-bold text-ink md:text-3xl">用遊戲，創造一個更好的公民社會</h1>
          </div>
          <a
            href="mailto:wasupstudio@gmail.com"
            className="rounded-full bg-ink px-8 py-3 font-semibold text-white shrink-0"
          >
            聯繫阿普蛙
          </a>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl">
          <p className="text-ink/70">
            阿普蛙於 2014 年成立，在經歷過太陽花運動之後，我們開始反思，在各種重大議題發生之前，我們能夠做些甚麼？我們開始以遊戲的方法影響教育，期待提升台灣整體公民素養。
          </p>
          <p className="mt-4 text-ink/70">
            我們採用體驗式教育，以桌遊、遊戲等機制，培養現代公民「慎思明辨」及「關懷社會」的能力。我們以公民應具備的各種素養——從自我到群體、社會——將人權、自我成長、政治與媒體素養、性別平等、社會關懷、環境議題等融入遊戲，設計相關教材與教案。
          </p>
        </Container>
      </section>

      {/* 數據 */}
      <section className="bg-brand-green py-16 text-white">
        <Container>
          <p className="text-center text-sm text-white/70">
            阿普蛙工作室設計不同的桌遊、大型遊戲，帶領教師研習、青少年培力工作坊或各部門教育訓練等課程。（數據統計至 2024 年 11 月）
          </p>
          <div className="mt-8 grid gap-8 text-center sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold">{s.value}</p>
                <p className="mt-2 text-sm text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 服務對象 */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {clientCategories.map((c) => (
              <div key={c.title} className="rounded-xl border border-black/5 p-5">
                <h3 className="font-bold text-ink">{c.title}</h3>
                <p className="mt-1 text-sm text-ink/60">{c.examples}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 團隊照片 */}
      <section className="bg-black/[0.03] py-16">
        <Container>
          <h2 className="text-2xl font-bold text-ink">授課講師</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            {teamPhotos.map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={src} alt="阿普蛙授課講師" fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {team.map((t) => (
              <div key={t.name} className="rounded-xl bg-white p-6">
                <h3 className="font-bold text-ink">{t.name}</h3>
                <p className="mt-2 text-sm text-ink/70">{t.bio}</p>
                <div className="mt-3 space-y-0.5 text-xs text-ink/50">
                  {t.tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 媒體報導 */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-ink">媒體報導</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-ink">網路</h3>
              <ul className="mt-2 space-y-2 text-sm text-ink/70">
                {pressNews.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-ink">雜誌</h3>
              <ul className="mt-2 space-y-2 text-sm text-ink/70">
                {pressMagazines.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-ink">廣播</h3>
              <ul className="mt-2 space-y-2 text-sm text-ink/70">
                {pressRadio.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-xs text-ink/40">
            原站每則報導都連結到個別的縮網址（goo.gl），因為沒辦法逐一還原每個縮網址實際指向哪篇報導，這裡先列出報導標題文字，之後如果需要逐篇補回原始連結，需要客戶協助提供或請人逐一點開原站的縮網址核對。
          </p>
        </Container>
      </section>
    </>
  );
}
