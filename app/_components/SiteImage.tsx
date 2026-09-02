import NextImage, { type ImageProps } from "next/image";

// 站台跑在 wasupstudio.com 根目錄，basePath 是空字串，所以這層目前不做任何事。
// 保留它是為了「之後如果又要部署到某個子路徑」時只要改這一個常數，不用全站改回 next/image。
// 當初存在的理由：Next.js 官方文件明講 public/ 的靜態資源不會自動套 basePath
//（那是頁面路由與圖片優化 loader 的邏輯，而靜態匯出關掉了圖片優化、直接走原圖，完全繞過它）。
const basePath = "";

// 給非 next/image 的用法用（例如 CSS background-image: url(...)），邏輯跟下面 SiteImage 一致，
// 抽出來共用避免兩處各自維護一份 basePath 判斷。
export function withBasePath(src: string) {
  return src.startsWith("/") ? `${basePath}${src}` : src;
}

export function SiteImage({ src, ...rest }: ImageProps) {
  const resolvedSrc = typeof src === "string" ? withBasePath(src) : src;
  return <NextImage src={resolvedSrc} {...rest} />;
}
