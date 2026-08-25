import type { Metadata } from "next";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";
import { YouTubeEmbed } from "@/app/_components/YouTubeEmbed";

export const metadata: Metadata = {
  title: "關於我們",
  description:
    "用遊戲，創造一個更好的公民社會。阿普蛙工作室成立於 2014 年，用遊戲影響教育、提升台灣整體公民素養。",
};

const stats = [
  { label: "相關課程場次", value: "1,913" },
  { label: "影響人數", value: "53,190" },
  { label: "授課總時數", value: "6,809" },
];

// 2026-08-25 內容稽核：5 個類別逐條跟原站核對過都在。原站結尾寫成「....etc.」「...etc.」「...等。」
// （同一段裡三種寫法混用），這裡統一成「⋯等」，屬刻意的標點正規化、不還原。
const clientCategories = [
  {
    title: "教師研習",
    examples: "建國中學、台南公民學科中心、彰化女中、台中一中⋯等",
  },
  {
    title: "青少年營隊",
    examples:
      "台中一中寒假兩日營、新科國中暑假五日營、土城國小寒假學生兩日營⋯等",
  },
  {
    title: "青少年培力課程",
    examples:
      "彰化縣兒少代表培力、家扶中心—青年發聲方案、苗栗縣兒少代表培力、新竹市兒少代表培力⋯等",
  },
  {
    title: "社區創生與志工教育訓練",
    examples:
      "基隆市文安社區鄉土課、新北市家扶志工訓練、文山社區大學志工服務培訓⋯等",
  },
  {
    title: "企業及政府部門教育訓練",
    examples:
      "彰化縣社會處兒少科、新竹科管局、朱銘美術館、十大傑出青年基金會、燃點公民平台⋯等",
  },
];

// 原站「授課講師」區塊每位講師的名字上方都直接放著本人的照片（4 欄表格，圖片對應名字一對一），
// 已依原始 HTML 逐一核對比對圖檔內容，順序與對應如下。
const team = [
  {
    name: "吳健毅 Henry Wu",
    photo: "/images/about/team-photo-3.jpg",
    bio: "腦內多巴胺總是處於分泌不足的狀態，所以得不斷尋求改變與刺激的過動男子。認為「拯救世界」的關鍵就在於「建構公民社會」，致力於實踐具有「自主性」與「同理心」的生活，並轉化為遊戲課程，影響更多人。",
    tags: ["興趣：教育、哲學、心靈成長、社會創新", "專長：遊戲設計、創作劇本"],
  },
  {
    name: "林侃眉 Anny Lin",
    photo: "/images/about/team-photo-1.jpg",
    bio: "曾經擔任過五年的社工師，堅信用生命影響生命。在社會工作中，看見人的善良，也看見大環境的限制，讓許多人找不到讓自己快樂的鑰匙。成為阿普蛙，走進教育第一線、踏入社會，將鑰匙交給更多的人們。",
    tags: [
      "關注議題：自我探索與成長、親子溝通與教養、兒童權利",
      "擅長領域：桌遊及課程帶領、幼兒及兒童發展、團體動力",
    ],
  },
  {
    name: "杜冠賢 Alex Tu",
    photo: "/images/about/team-photo-2.jpg",
    bio: "不只是個乖乖牌。出社會後不斷轉換跑道，探索自我。進到長照領域後體會到社福領域的限制，選擇加入社企。期望自己的存在能影響身邊的人，為社會帶來一些改變。Be the change you wanna see.",
    tags: [
      "關注議題：高齡社會、貧富差距、貧窮、環境保育",
      "擅長領域：課程帶領、議題研究",
    ],
  },
  {
    name: "林鉞 Luke Lin",
    photo: "/images/about/team-photo-4.jpg",
    bio: "不是老師卻熱愛教學，把知識與技術轉換成最貼近生活的話語與概念分享給每個人，喜歡跟著不同的團體一起學習與成長，把從遊戲中學到的機制轉化成現實運用的版本，期待自己的分享可以帶給教室真正的改變。",
    tags: ["興趣：心靈成長、教學、遊戲", "專長：多元學習、遊戲化課程"],
  },
];

// 2026-08-25 內容稽核：原站每一則報導的標題都是超連結，重建站原本一律只留純文字，並在下方註記
// 「原站每則報導都連結到個別的縮網址（goo.gl）」。逐條核對解碼後的原始碼後發現這個說法不完全正確：
// 14 則裡有 2 則（中時電子報、鏡週刊）原本就是可直接還原的完整網址，不是縮網址，因此先把這 2 條
// 連結補回去。其餘 12 則確實是 goo.gl 縮網址（Google 已停用轉址服務、無法還原目的地），維持純文字。
type PressItem = { text: string; href?: string };

const pressNews: PressItem[] = [
  { text: "2015/07/09 親子天下《開發還是環保？阿普蛙用桌遊玩出公民意識》" },
  {
    text: "2015/09/24 聯合新聞網《這堂桌遊課真實的可怕！反制電玩時代 阿普蛙用桌遊訓練獨立思考》",
  },
  { text: "2015/10/22 親子天下《改良桌遊玩法 種下公民種子》" },
  { text: "2016/03/13 大愛電視-年輕人讚起來《玩一場桌上公民課》" },
  { text: "2016/05/03 PeoPo公民新聞《創業理財當老闆 幸福捧在手掌心》" },
  { text: "2016/08/09 自由時報電子報《雞籠中元祭 就是邀你來搞怪》" },
  { text: "2016/08/09 中嘉新聞《中元怪奇博物館13日開張 情境劇場邀您互動》" },
  { text: "2016/10/31 TVBS新聞網《新教育！桌遊培養程式邏輯 推廣公民意識》" },
  {
    text: "2017/04/24 中時電子報《桌遊連結教案 阿普蛙玩出頭》",
    href: "http://www.chinatimes.com/newspapers/20170424000333-260107",
  },
  {
    text: "2017/10/06 鏡週刊《【專訪阿普蛙】合作與對抗的兩難：遊戲桌上的人性百態》",
    href: "https://www.mirrormedia.mg/story/20171006game_wasupstudio/",
  },
];

const pressMagazines: PressItem[] = [
  { text: "2015/08 親子天下70期《改良桌遊玩法 種下公民種子》" },
  { text: "2015/05 天下雜誌基隆款款行《阿普蛙 桌遊翻轉教育》" },
  { text: "2015/10 英語島《玩一場「World Peace Game」》" },
  {
    text: "2016春季號 魅力基隆《因為愛鄉，成就夢想的基石-在地青年勇於說出家鄉故事》",
  },
];

const pressRadio: PressItem[] = [
  {
    text: "2015/10/8 寶島新聲-寶島有意思《談用桌遊做公民獨立思考訓練 阿普蛙工作室曾榮輝》",
  },
  // 原站這兩則本來就沒有連結，不是我們拿掉的。
  { text: "2015/10/10 復興廣播電台-淳．靜時光" },
  { text: "2015/10/31 教育廣播電台-教育行動家" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-black/[0.03] py-16">
        <Container className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/brand/logo-mark.png"
                alt="阿普蛙工作室"
                width={160}
                height={160}
                className="h-32 w-32"
              />
              <Image
                src="/images/about/innovation-award-2018.png"
                alt="2018 教育創新 100 阿普蛙工作室有限公司 親子天下"
                width={100}
                height={100}
                className="h-20 w-20 shrink-0"
              />
            </div>
            <h1 className="mt-6 text-2xl font-bold text-[#3ab890] md:text-3xl">
              用遊戲，創造一個更好的公民社會
            </h1>
          </div>
          {/* 2026-08-25 內容稽核：原站這顆按鈕連到 https://goo.gl/nEzoeN（Google 已停用 goo.gl
              轉址、無法還原目的地），重建站改成 mailto。屬刻意替代，若客戶記得原本指向哪裡再改回。 */}
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
            阿普蛙於 2014
            年成立，在經歷過太陽花運動之後，我們開始反思，在各種重大議題發生之前，我們能夠做些甚麼？我們開始以遊戲的方法影響教育，期待提升台灣整體公民素養。
          </p>
          <p className="mt-4 text-ink/70">
            我們採用體驗式教育，以桌遊、遊戲等機制，培養現代公民「慎思明辨」及「關懷社會」的能力。我們以公民應具備的各種素養——從自我到群體、社會——將人權、自我成長、政治與媒體素養、性別平等、社會關懷、環境議題等融入遊戲，設計相關教材與教案。
          </p>

          {/* ⚠️ 2026-08-25 內容稽核：影片 ID 跟原站一致（0ZLsiE24i_w），但位置不對——原站這支
              wsite-youtube 是放在「媒體報導」區塊裡、「網路」那一列右半欄（左 50% 是報導清單、
              右 50% 是影片），不是放在開場簡介底下。內容沒有漏，但要完全比照原站的話得把它搬到
              媒體報導區；那會動到目前「網路／雜誌／廣播」三欄並排的版面結構，屬版型決定，
              先標註不擅自改。 */}
          <div className="mt-8">
            <YouTubeEmbed id="0ZLsiE24i_w" title="阿普蛙工作室介紹影片" />
          </div>
        </Container>
      </section>

      {/* 數據：2026-08-25 量測才發現這段其實跟上下段落是同一片白底（原始碼裡跟前一段落同一個
          section，沒有另外的綠底），重建站原本自己加了品牌綠底＋白字。數字是金黃 #dab844、
          說明文字是藍綠 #24678d，不是白色。 */}
      <section className="py-16">
        <Container>
          <p className="text-center text-sm text-ink/60">
            阿普蛙工作室設計不同的桌遊、大型遊戲，帶領教師研習、青少年培力工作坊或各部門教育訓練等課程。（數據統計至
            2024 年 11 月）
          </p>
          <div className="mt-8 grid gap-8 text-center sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-[#dab844]">{s.value}</p>
                <p className="mt-2 text-sm text-[#24678d]">{s.label}</p>
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
              <div
                key={c.title}
                className="rounded-xl border border-black/5 p-5"
              >
                <h3 className="font-bold text-ink">{c.title}</h3>
                <p className="mt-1 text-sm text-ink/60">{c.examples}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 授課講師：2026-08-25 逐頁核對 section 背景色才發現原站這裡是近黑色 #020202 底、
          白色姓名／淺灰 #d5d5d5 內文（量測 font color 屬性得到），重建站原本用極淡灰底＋深色字，
          明暗完全反過來，是這次「全站檢查對照」抓到的落差之一。 */}
      <section className="bg-[#020202] py-16">
        <Container>
          <h2 className="text-2xl font-bold text-white">授課講師</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div key={t.name} className="overflow-hidden rounded-xl">
                <div className="relative aspect-square">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white">{t.name}</h3>
                  <p className="mt-2 text-sm text-[#d5d5d5]">{t.bio}</p>
                  <div className="mt-3 space-y-0.5 text-xs text-[#d5d5d5]/70">
                    {t.tags.map((tag) => (
                      <p key={tag}>{tag}</p>
                    ))}
                  </div>
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
            {[
              { label: "網路", items: pressNews },
              { label: "雜誌", items: pressMagazines },
              { label: "廣播", items: pressRadio },
            ].map((group) => (
              <div key={group.label}>
                <h3 className="font-bold text-ink">{group.label}</h3>
                <ul className="mt-2 space-y-2 text-sm text-ink/70">
                  {group.items.map((p) => (
                    <li key={p.text}>
                      {p.href ? (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:text-ink"
                        >
                          {p.text}
                        </a>
                      ) : (
                        p.text
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-ink/40">
            原站報導標題大多連結到個別的 goo.gl
            縮網址，Google 已停用該轉址服務、無法還原目的地，因此那些條目先只保留報導標題文字；其中中時電子報、鏡週刊兩則原站本來就是完整網址，已還原連結。之後如需補齊其餘連結，需要客戶協助提供或請人逐一核對。
          </p>
        </Container>
      </section>
    </>
  );
}
