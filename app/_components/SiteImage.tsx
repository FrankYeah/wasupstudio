import NextImage, { type ImageProps } from "next/image";

// GitHub Pages 部署在 /wasupstudio 子路徑底下，但 Next.js 官方文件明講：
// public/ 資料夾裡的靜態資源不會自動套用 basePath（這跟頁面路由/next/image 的圖片優化 loader 是兩條不同路徑，
// 我們又因為靜態匯出關掉了圖片優化、直接走原圖，所以完全繞過了那條會自動加 basePath 的邏輯）。
// 這裡包一層，讓全站只要用這個元件取代 next/image，就不用每個地方各自處理子路徑問題；
// 之後正式上 Cloudflare（跑在 wasupstudio.com 根目錄）basePath 會是空字串，這層直接不生效，不用拆掉。
const basePath = process.env.GITHUB_PAGES === "true" ? "/wasupstudio" : "";

export function SiteImage({ src, ...rest }: ImageProps) {
  const resolvedSrc = typeof src === "string" && src.startsWith("/") ? `${basePath}${src}` : src;
  return <NextImage src={resolvedSrc} {...rest} />;
}
