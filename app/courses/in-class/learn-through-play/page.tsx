import type { Metadata } from "next";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "在遊戲中學議題｜入班授課",
  description:
    "阿普蛙用遊戲比喻現實情境，青少年透過遊戲便能理解該主題的重要性及與自身的連結，進而去思考回到生活中我們可以怎麼做，形塑與他人共好的社會。",
};

const INVITE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScTpdFbaeh221rvaEMgG_1vrh0RC_9rOEx1j8ActjGE4PiM7A/viewform";

type Course = {
  title: string;
  tag?: string;
  subtitle?: string;
  image?: string;
  grade: string;
  hours: string;
  goals: string[];
  content: string[];
};

type Category = {
  label: string;
  courses: Course[];
};

const categories: Category[] = [
  {
    label: "一、人際關係與溝通",
    courses: [
      {
        title: "我們班的叢林法則",
        subtitle: "班級挑戰，解密人際關係的叢林之謎！",
        image: "/images/courses/learn-through-play-2.png",
        grade: "三年級至七年級",
        hours: "2-3 小時",
        goals: [
          "深入了解人際衝突中的情感與需求。",
          "探討旁觀者的力量，如何影響事件發展。",
          "共同思考衝突事件的聰明因應策略。",
        ],
        content: [
          "戲劇體驗：融入虛構的叢林班日常，透過生動戲劇影片，一同探討角色未來的選擇，體驗合作與反思的奇妙旅程。",
          "引導反思：從角色感受與需求出發，引導深入討論合理的因應策略，讓學生更理解彼此的情感需求。",
        ],
      },
      {
        title: "情緒謎語",
        image: "/images/courses/learn-through-play-3.jpg",
        grade: "國小三年級以上、國中、高中、大學",
        hours: "2-3 小時",
        goals: [
          "認識與理解情緒：學生將學習辨識不同的情緒及其強度，並了解情緒如何影響我們的行為和決策。",
          "增進人際關係技巧：透過遊戲中的模擬情境，學生將提升察言觀色的能力，學習如何透過溝通來解決人際衝突。",
          "培養同理心與情緒管理：學生將學會理解他人的感受，並探索在不同情境下的適當反應，以改善人際互動。",
          "應用生活情境學習：學生能夠將課堂上學到的技能應用到日常生活中，改善班級氛圍，增強班級凝聚力。",
        ],
        content: [
          "暖身引言：引導學生思考對不同情緒表現的理解，並簡介遊戲規則與所使用的桌遊配件（情緒卡、情緒圖版等）。",
          "遊戲體驗：學生分組進行遊戲，每組輪流演出事件卡，模擬生活化的對話情境，小組討論猜測扮演者的情緒。",
          "反思與分享：反思遊戲中的學習經驗，討論在現實生活中如何應對類似情境，邀請學生分享他們在遊戲中的觀察和學習，並討論如何應用到日常生活中。",
        ],
      },
    ],
  },
  {
    label: "二、性別平等",
    courses: [
      {
        title: "練愛猜心",
        tag: "性別平等 × 情感教育",
        subtitle: "猜心遊戲，解鎖感情密碼！",
        image: "/images/courses/learn-through-play-4.jpg",
        grade: "國小高年級、國中、高中、大學",
        hours: "2-3 小時",
        goals: [
          "透過遊戲深入了解不同人的感受和想法，培養同理心。",
          "學習正確表達情緒，促進有效溝通。",
          "探討遇到困境時可以尋求哪些單位協助。",
        ],
        content: [
          "遊戲體驗：每回合抽取事件，挑戰各組成為「當事人」，讓其他組猜測情緒，深度傾聽他人心聲。",
          "引導反思：思考並討論不同人的感受和背後的需求，強調溝通的關鍵性。",
        ],
      },
      {
        title: "家分題",
        tag: "性別平等 × 家務分工",
        subtitle: "為家庭生活加分！",
        image: "/images/courses/learn-through-play-5.jpg",
        grade: "國小中高年級、國中、高中、大學",
        hours: "3 小時",
        goals: [
          "引導學生思考家務分工的重要性，打破傳統角色刻板印象。",
          "探討幸福家庭的自主和他人連結的平衡。",
          "透過遊戲看見自我與他人的互動關係，學習正向溝通方式。",
        ],
        content: [
          "遊戲體驗：扮演同住的家人、朋友，戰勝家務挑戰，同時思考家務分工的重要性，共同討論策略。",
          "引導反思：思考當人改變目標，進而影響人們的心態及作法，進而領悟家務分工的重要性。",
        ],
      },
    ],
  },
  {
    label: "三、媒體素養",
    courses: [
      {
        title: "抓誑新聞",
        subtitle: "識讀勇者的冒險！",
        image: "/images/courses/learn-through-play-6.jpg",
        grade: "國小高年級、國中、高中、大學",
        hours: "3 小時",
        goals: [
          "學習辨識新聞中的陷阱——標籤、置入、誤導、刺激。",
          "體驗媒體混亂、媒體與閱聽人資訊不對等，引發對媒體與社會互動的思考。",
          "培養閱聽人的自主性、提升識讀能力，透過檢舉促使媒體自律。",
        ],
        content: [
          "學生成為「識讀勇者」，挑戰聽新聞、破除藏匿的四大毒物！升級能力、與夥伴協作，共同打擊媒體怪獸，既考驗識讀能力，也考驗學員的協作分工。",
        ],
      },
      {
        title: "童話村命案",
        subtitle: "探索真相的媒體大戰！",
        image: "/images/courses/learn-through-play-7.jpg",
        grade: "國小高年級、國中、高中、大學",
        hours: "3 小時",
        goals: [
          "透過調查、採訪、新聞撰寫到播報，培養邏輯思考、閱讀理解、作文及口語表達能力。",
          "學習透過提出、驗證、修正假設的步驟來判讀媒體。",
          "引導思考媒體與閱聽人之間的關聯性，將兩者視為相互影響的夥伴。",
        ],
        content: [
          "學生組成媒體公司，競爭成為影響力最大的媒體。童話村發生命案，各媒體需找真相、搶收視，考驗採訪技巧，哪家媒體能獲得最大影響力，誰了解事情的真相？",
        ],
      },
      {
        title: "犯罪現場",
        subtitle: "媒體解謎的思辨之旅",
        image: "/images/courses/learn-through-play-8.jpg",
        grade: "國中、高中、大學",
        hours: "3 小時",
        goals: [
          "透過桌遊模擬現實生活事件，培養媒體辨識能力。",
          "以不同角色體驗媒體背後的不同角度，探討媒體對社會的影響。",
          "引導思考自媒體在日常生活中的影響，對社會造成的影響。",
        ],
        content: [
          "學生扮演不同角色，體驗在案件中對同樣資訊的不同解讀，學習思辨能力。透過不同角色的對比，探討現實中媒體的書寫者、帶風向者、大眾在資訊落差時的解讀差異。",
        ],
      },
    ],
  },
  {
    label: "四、兒童權利公約",
    courses: [
      {
        title: "CRC偵探事件簿",
        subtitle: "兒童權利偵探啟程！",
        image: "/images/courses/learn-through-play-9.jpg",
        grade: "國中、高中、大學",
        hours: "3 小時",
        goals: [
          "認識兒童權利公約（CRC），培養學生辨識能力。",
          "從遊戲中學會資訊彙整與判斷，深化對事情真相的理解，避免盲目跟風，培養獨立思考的能力。",
          "提升學生的溝通表達技巧，由情報討論到最終表決，真實展現表意權的實質影響。",
        ],
        content: [
          "透過模擬學生會的運作，以情境體驗方式深度思考每個案件。蒐集、釐清事件資訊，討論是否侵權，實際申訴與否。通過討論，學生深入了解兒童權利公約賦予孩子的各種權利，從表意權、受保護權、勞動權、隱私權等方面，以真實案例改編的故事，讓學生看到校園可能發生的事情，提升對兒童權利的意識感。",
        ],
      },
      {
        title: "CRC糾察隊",
        subtitle: "CRC 糾察特訓，守護兒童權利！",
        image: "/images/courses/learn-through-play-10.jpg",
        grade: "國小、國中",
        hours: "2 小時",
        goals: [
          "認識兒童權利公約（CRC），深入了解各項權利的重要性。",
          "透過辨識每個事件對兒童權利的傷害，培養學生的辨識能力。",
        ],
        content: [
          "以繪本形式生動介紹兒童權利公約的四大原則與八項重要權利。",
          "透過有趣的遊戲，讓學生們組成團隊，討論每個事件對兒童的哪項權利造成傷害。結合現實生活，提升學生對於周遭可能侵害兒童權利的敏感度。",
        ],
      },
      {
        title: "未來議會",
        image: "/images/courses/learn-through-play-11.jpg",
        grade: "國小高年級、國中、高中",
        hours: "2-3 小時",
        goals: [
          "理解兒少議題與權利：學生將學習並理解當代兒少生活中的重要議題，如教育、健康、心理健康等，並認識兒少權利的基本概念。",
          "提升批判性思維與討論能力：學生將透過遊戲中的議題競猜及討論環節，培養獨立思考和發表意見的能力，並學會從多角度思考問題。",
          "促進團隊合作與溝通技巧：學生將在小組內進行角色扮演，學習如何表達自己的意見並與他人溝通，達成共識。",
        ],
        content: [
          "階段一・競猜遊戲（30 分鐘）：學生分組（每組代表一個黨派），針對從議題卡中抽出的兒少議題進行下注競猜，根據認為的正確答案，下注手上的「民意支持」點數；講師根據兒少數據調查公佈正確答案並計算得分，最高分的團隊獲得最多民意支持。",
          "階段二・討論議案：每組抽取新的議題卡，根據該議題發表黨派立場意見，並試圖說服其他黨派同意觀點；討論結束後投票，最受支持的黨派獲得額外分數，最終分數最高者成為未來議會中最具影響力的政黨。",
        ],
      },
    ],
  },
  {
    label: "五、全球議題",
    courses: [
      {
        title: "我們的福爾摩沙",
        subtitle: "融入聯合國 17 項指標，共創永續發展的未來！",
        image: "/images/courses/learn-through-play-12.jpg",
        grade: "國小高年級、國中、高中、大學",
        hours: "3 小時",
        goals: [
          "透過桌遊，使孩子深入認識包括貧窮、城鄉差距、海洋資源、垃圾污染等 17 項指標。",
          "強調第 17 項指標的「永續發展與全球合作」，培養孩子合作解決問題的能力，體會彼此為夥伴而非敵人的重要性。",
        ],
        content: [
          "學生組成社會企業，面對各種社會議題如空氣污染、人口老化等。透過思考公司營運方式，同時改善社會問題，實踐永續發展的理念。",
        ],
      },
      {
        title: "碳排危機",
        subtitle: "體驗生活中的每個選擇，深刻了解減碳對生活和環境的影響！",
        image: "/images/courses/learn-through-play-13.jpg",
        grade: "國中、高中、大學",
        hours: "3 小時",
        goals: [
          "認識減碳和不減碳的行為，了解碳排放對生活及環境的影響。",
          "反思個人行為對環境的影響，提升學生環境意識，促使友善環境的行動。",
        ],
        content: [
          "透過具競爭性的桌遊，讓玩家深刻理解每個生活選擇的重要性。遊戲中的選擇將影響不同結局，玩家能否安然度過碳排危機呢？",
        ],
      },
      {
        title: "紅黑戰爭",
        subtitle: "媒體處於戰爭陰影中的抉擇！",
        image: "/images/courses/learn-through-play-14.jpg",
        grade: "國小高年級、國中、高中、大學",
        hours: "3 小時",
        goals: [
          "學習戰爭中產生的假訊息，了解其對戰爭的影響。",
          "學習判別假訊息的方法，提升媒體素養。",
        ],
        content: [
          "方塊國面臨紅心國與黑桃國的戰爭，學生扮演方塊國的媒體，必須在真實與吸引之間取得平衡，以最佳方式報導戰爭情勢。",
        ],
      },
      {
        title: "方塊國會議",
        subtitle: "決策與合作的思辨之旅！",
        image: "/images/courses/learn-through-play-15.jpg",
        grade: "國小高年級、國中、高中、大學",
        hours: "3 小時",
        goals: [
          "訓練學生獨立思考、邏輯推理及表達的能力。",
          "針對戰爭相關議題，深度思考並學習非攻擊性的討論方式。",
        ],
        content: [
          "學生以方塊國代表身份，面對戰爭的各種挑戰，包括是否參戰、對待難民等。在議會中做出決策，同時說服其他代表支持，是一場充滿挑戰的思辨之旅。",
        ],
      },
    ],
  },
  {
    label: "六、文化教育",
    courses: [
      {
        title: "拚陣頭",
        subtitle: "探索藝陣文化的熱血之旅！",
        image: "/images/courses/learn-through-play-16.jpg",
        grade: "國小高年級、國中、高中、大學",
        hours: "2 小時",
        goals: [
          "透過桌遊《拚陣頭》，融入教育與娛樂，讓學生在遊戲中深入認識藝陣文化。",
          "通過各種陣頭的特徵，讓學生親身體驗不同元素，發現藝陣的趣味之處。",
        ],
        content: [
          "學生擔任鄉里的「頭人」，面對即將到來的廟會盛事，號召人才共同參與跳陣頭。在比拼中領略「輸人毋輸陣，輸陣歹看面」的文化精神，探索村子陣頭的獨特之處。",
        ],
      },
      {
        title: "鬥陣度中元",
        subtitle: "解密雞籠中元祭的智慧之旅！",
        image: "/images/courses/learn-through-play-17.jpg",
        grade: "國小高年級、國中",
        hours: "2 小時",
        goals: [
          "認識雞籠中元祭的起源，並深刻理解其背後的歷史背景。",
          "反思械鬥和競爭對社會帶來的負面影響，以及前人如何智慧地轉化競爭為祭典。",
        ],
        content: [
          "透過遊戲，生動介紹雞籠中元祭的起源，引導學生深刻反思械鬥對社會的影響。同時，遊戲中展現競爭的轉化，探討如何透過智慧和節慶的方式凝聚社區。",
        ],
      },
    ],
  },
];

export default function LearnThroughPlayPage() {
  return (
    <>
      <section className="bg-black/[0.03] py-16">
        <Container>
          <p className="text-sm font-semibold text-brand-green">入班授課｜青少年培力課程</p>
          <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">
            🎲 在遊戲中學議題
          </h1>
          <p className="mt-4 max-w-3xl text-ink/70">
            阿普蛙用遊戲比喻現實情境，青少年透過遊戲便能理解該主題的重要性及與自身的連結，進而去思考回到生活中我們可以怎麼做，形塑與他人共好的社會。
          </p>

          <dl className="mt-8 grid gap-y-2 text-sm text-ink/70 sm:grid-cols-[auto_1fr] sm:gap-x-3">
            <dt className="font-semibold text-ink">課程主題</dt>
            <dd>人際關係與溝通、性別平等、媒體素養、兒童權利公約、全球議題、文化教育</dd>
            <dt className="font-semibold text-ink">適合年齡</dt>
            <dd>國小高年級、國中生、高中生、大學生、成人</dd>
            <dt className="font-semibold text-ink">課程時間</dt>
            <dd>每一主題建議安排三小時，亦可針對營隊或帶狀課程，進行多元主題搭配。</dd>
          </dl>

          <div className="mt-8">
            <a
              href={INVITE_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
            >
              邀約課程
            </a>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        <div className="relative aspect-21/9 w-full overflow-hidden rounded-2xl bg-black/[0.03]">
          <Image
            src="/images/courses/learn-through-play-1.jpg"
            alt="在遊戲中學議題 課程實況"
            fill
            className="object-cover"
          />
        </div>
      </Container>

      <Container className="space-y-20 pb-24">
        {categories.map((category) => (
          <section key={category.label}>
            <h2 className="text-2xl font-bold text-ink">{category.label}</h2>

            <div className="mt-8 space-y-8">
              {category.courses.map((course) => (
                <article
                  key={course.title}
                  className="rounded-2xl border border-black/5 p-6 shadow-sm md:p-8"
                >
                  {course.image && (
                    <div className="relative mb-6 aspect-16/9 w-full overflow-hidden rounded-xl bg-black/[0.03]">
                      <Image
                        src={course.image}
                        alt={`《${course.title}》遊戲實照`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  {course.tag && (
                    <p className="text-xs font-semibold text-brand-green">{course.tag}</p>
                  )}
                  <h3 className="mt-1 text-xl font-bold text-ink">《{course.title}》</h3>
                  {course.subtitle && (
                    <p className="mt-1 text-ink/70">{course.subtitle}</p>
                  )}

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-ink/70">
                    <span>
                      <span className="font-semibold text-ink">適合年級：</span>
                      {course.grade}
                    </span>
                    <span>
                      <span className="font-semibold text-ink">授課時間：</span>
                      {course.hours}
                    </span>
                  </div>

                  <h4 className="mt-5 text-sm font-bold text-ink">課程目標</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/70">
                    {course.goals.map((goal) => (
                      <li key={goal}>{goal}</li>
                    ))}
                  </ul>

                  <h4 className="mt-5 text-sm font-bold text-ink">課程內容</h4>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink/70">
                    {course.content.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        ))}
      </Container>

      <section className="bg-black/[0.03] py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-ink">想邀請阿普蛙入班授課？</h2>
          <p className="mt-3 text-ink/70">
            歡迎填寫邀約表單，我們會盡快與您聯繫，討論適合的主題與時段。
          </p>
          <div className="mt-6">
            <a
              href={INVITE_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
            >
              邀約課程
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
