import type { NextConfig } from "next";

// GitHub Pages 專案頁會被放在 https://<帳號>.github.io/<repo>/ 這種子路徑底下，
// 不是網域根目錄，所以要另外告訴 Next.js 每個內部連結/資源前面要多接一段 /wasupstudio。
// 用環境變數切換，這樣同一份程式碼平常（本機開發、之後正式上 Cloudflare 用 wasupstudio.com 網域）
// 都維持在根目錄運作，只有跑 GitHub Pages 專用的 build 指令時才加上這段路徑。
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/wasupstudio";

const nextConfig: NextConfig = {
  // 目前站上沒有真正需要伺服器運算的頁面（聯絡表單後端還沒接，見
  // app/_components/ContactForm.tsx 的 TODO），所以先整站用純靜態匯出：
  // 一次 build 產出純 HTML/CSS/JS，GitHub Pages、Cloudflare Pages 都能直接當靜態站放。
  // 之後如果聯絡表單要接 Server Action 或其他需要伺服器運算的功能，要回來改這裡
  // （改用 Cloudflare Pages Functions 補一支獨立的 API，或改用 OpenNext 讓整個 Next app 跑在 Workers 上）。
  output: "export",

  basePath: isGithubPages ? repoBasePath : "",
  assetPrefix: isGithubPages ? `${repoBasePath}/` : "",

  // 部署目標是 Cloudflare（見 00-plan/MIGRATION-PLAN.md 技術架構決定）。
  // Next.js 內建的 Image Optimization API 需要一個常駐的 Node server 才能動態轉檔，
  // 靜態匯出模式本來就不支援，先關掉走原圖。
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
