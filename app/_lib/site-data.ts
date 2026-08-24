// 全站共用的結構資料（導覽選單、商品清單、課程清單）。
// 個別頁面的實際內文直接寫在各自的 page.tsx 裡（內容即程式碼，方便之後直接用 Claude Code 改文字），
// 這份檔案只放「會在多處重複用到」的清單資料，避免到處複製貼上。

export type BoardGame = {
  slug: string;
  title: string;
  tagline: string;
  price: number;
  image: string | null; // 少數幾款原站就沒有專屬產品照，null 代表照實維持沒有圖
  href: string;
};

export const boardGames: BoardGame[] = [
  {
    slug: "riddle-me-feelings",
    title: "情緒謎語（雙語版）",
    tagline: "人際溝通 × 社會情緒學習 × 表演藝術",
    price: 960,
    image: "/images/products/riddle-me-feelings.png",
    href: "/board-games/riddle-me-feelings",
  },
  {
    slug: "talk-nonsense-sdgs",
    title: "瞎掰王SDGs教育版",
    tagline: "冷知識 × 瞎掰胡扯 × SDGs 17項永續發展目標",
    price: 690,
    image: null,
    href: "/board-games/talk-nonsense-sdgs",
  },
  {
    slug: "practice-for-love",
    title: "練愛猜心",
    tagline: "性別平等 × 人際溝通",
    price: 690,
    image: "/images/products/practice-for-love.png",
    href: "/board-games/practice-for-love",
  },
  {
    slug: "crazy-news",
    title: "抓誑新聞",
    tagline: "全球第一款媒體識讀桌遊",
    price: 750,
    image: "/images/products/crazy-news.png",
    href: "/board-games/crazy-news",
  },
  {
    slug: "future-parliament",
    title: "未來議會",
    tagline: "兒童人權 × 兒少生活議題 × 表達意見",
    price: 990,
    image: null,
    href: "/board-games/future-parliament",
  },
  {
    slug: "play-a-lifetime",
    title: "玩一世人",
    tagline: "佛法 × 人生觀",
    price: 860,
    image: "/images/products/play-a-lifetime.jpg",
    href: "/board-games/play-a-lifetime",
  },
  {
    slug: "pin-zhentou",
    title: "拚陣頭",
    tagline: "認識台灣傳統藝陣文化的派對遊戲",
    price: 450,
    image: "/images/products/pin-zhentou.png",
    href: "/board-games/pin-zhentou",
  },
  {
    slug: "sharp-ten",
    title: "十分機靈",
    tagline: "10 選 1 的緊湊問答遊戲",
    price: 590,
    image: null,
    href: "/board-games/sharp-ten",
  },
];

export type CourseLink = {
  title: string;
  href: string;
  children?: CourseLink[];
};

export const courseNav: CourseLink[] = [
  {
    title: "教師研習",
    href: "/courses/teacher-workshop",
    children: [
      { title: "教材應用", href: "/courses/teacher-workshop/material-application" },
      { title: "教案/教材設計", href: "/courses/teacher-workshop/lesson-design" },
    ],
  },
  {
    title: "入班授課｜青少年培力課程",
    href: "/courses/in-class",
    children: [
      { title: "在遊戲中學議題", href: "/courses/in-class/learn-through-play" },
      { title: "議題探究與實作", href: "/courses/in-class/inquiry-practice" },
      { title: "提升溝通力", href: "/courses/in-class/communication" },
      { title: "民主從開會開始", href: "/courses/in-class/democracy-in-meetings" },
    ],
  },
  { title: "教育訓練", href: "/courses/corporate-training" },
  { title: "家庭教育課程", href: "/courses/family-education" },
];

export const mainNav = [
  { title: "首頁", href: "/" },
  { title: "想設計", href: "/design-consulting" },
  { title: "買桌遊", href: "/board-games" },
  { title: "買數位教材", href: "/digital-materials" },
  { title: "找課程", href: "/courses" },
  { title: "關於我們", href: "/about" },
];

export const studioContact = {
  name: "阿普蛙工作室有限公司",
  taxId: "24883973",
  address: "200 基隆市仁愛區忠三路 34 號",
  email: "wasupstudio@gmail.com",
  partnership: { name: "林侃眉", phone: "0933-769550" },
  courses: { name: "杜冠賢", phone: "0917-629597" },
  facebook: "https://facebook.com/Wasupstudio",
  blog: "http://wasupthink.blogspot.tw/",
};
