import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 目前站上沒有真正需要伺服器運算的頁面（聯絡表單後端還沒接，見
  // app/_components/ContactForm.tsx 的 TODO），所以先整站用純靜態匯出：
  // 一次 build 產出純 HTML/CSS/JS，GitHub Pages、Cloudflare Pages 都能直接當靜態站放。
  // 之後如果聯絡表單要接 Server Action 或其他需要伺服器運算的功能，要回來改這裡
  // （改用 Cloudflare Pages Functions 補一支獨立的 API，或改用 OpenNext 讓整個 Next app 跑在 Workers 上）。
  output: "export",

  // 部署目標是 Cloudflare Workers 靜態資產（設定在 wrangler.jsonc）。
  // 2026-09-02 正式站上線後，GitHub Pages 的 basePath 切換已移除：站台跑在
  // wasupstudio.com 根目錄，不再有子路徑，那段環境變數判斷沒有作用對象了。
  // Next.js 內建的 Image Optimization API 需要一個常駐的 Node server 才能動態轉檔，
  // 靜態匯出模式本來就不支援，先關掉走原圖。
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
