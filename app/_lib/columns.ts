import raw from "./columns-data.json";

export type ColumnBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "image"; src: string; w: number; h: number };

export type Column = {
  /** 網址用的 slug。**沿用原站的 slug**（`blog-orid` → `orid`、`column3-2` → `column3-2`），
   *  這樣舊網址 `/blog/orid` 可以一對一 301 到 `/columns/orid`，搜尋引擎比較容易把新舊頁面接起來。
   *  代價是像 `8083650` 這種數字 slug 不好看，但原站本來就是這樣，改成可讀的中文轉寫等於自己發明網址。 */
  slug: string;
  title: string;
  /** 原站的發佈日期字串。兩篇獨立專欄頁（column1-6／column3-2）原站就沒有日期。 */
  date: string;
  blocks: ColumnBlock[];
  /** 內文字元數，總覽頁用來標示長度。 */
  words: number;
};

const all = (raw as Column[]).map((c) => ({
  ...c,
  slug: c.slug.replace(/^blog-/, ""),
}));

/** 原站的日期字串是 `M/D/YYYY`（例如 `9/2/2021`），直接用字串比大小會排錯
 *  （"9/2/2021" > "3/8/2017" 剛好對，但 "10/1/2020" < "9/2/2017" 就錯了）。
 *  轉成可比較的數字再排。 */
function dateValue(d: string): number {
  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(d.trim());
  if (!m) return 0;
  return Number(m[3]) * 10000 + Number(m[1]) * 100 + Number(m[2]);
}

/** 顯示用的日期，統一成 YYYY-MM-DD。 */
export function displayDate(d: string): string {
  const v = dateValue(d);
  if (!v) return "";
  const y = Math.floor(v / 10000);
  const mo = Math.floor((v % 10000) / 100);
  const day = v % 100;
  return `${y}-${String(mo).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/** 有日期的照日期新到舊，沒日期的排最後（依字數）。 */
export const columns: Column[] = [...all].sort((a, b) => {
  const av = dateValue(a.date);
  const bv = dateValue(b.date);
  if (av && bv) return bv - av;
  if (av) return -1;
  if (bv) return 1;
  return b.words - a.words;
});

export function getColumn(slug: string): Column | undefined {
  return columns.find((c) => c.slug === slug);
}

/** 總覽頁的摘要，截到 90 個字。
 *
 * ⚠️ 一定要用 `[...text]` 逐「字」切，不能用 `text.slice(0, 90)`。
 * JS 的字串索引是 UTF-16 單位，emoji 這種 BMP 以外的字元佔兩個單位，
 * slice 有機會剛好切在代理對（surrogate pair）中間、產生一個孤立代理字元。
 * 那個字元序列化進 HTML 跟客戶端重建出來的結果不一樣，會觸發
 * React error #418（hydration 文字不符）——畫面看起來完全正常，只有 console 冒一個
 * minified error，很難聯想到是某一篇文章裡的 emoji 造成的。
 * 本站踩到的實例：`/columns/9248536`（【蛙馬麻時間】居家工作的日常）內文有 🤫🤬😭😱。
 */
export function excerpt(c: Column): string {
  const text = c.blocks
    .filter((b): b is Extract<ColumnBlock, { type: "p" | "h" }> => b.type !== "image")
    .map((b) => b.text)
    .join(" ");
  const chars = [...text];
  return chars.length > 90 ? `${chars.slice(0, 90).join("")}…` : text;
}
