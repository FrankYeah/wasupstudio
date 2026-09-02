import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 站上沒有需要伺服器運算的頁面，整站純靜態匯出：一次 build 產出純 HTML/CSS/JS。
  // 聯絡表單走客戶自己的 Google 表單（見 MIGRATION-PLAN 偏離清單第 13 條），所以不需要後端。
  // 之後如果真的要加需要伺服器運算的功能（線上計分系統、課程報名），要回來改這裡：
  // 在 wrangler.jsonc 加一個 main 入口讓 Workers 靜態資產旁邊掛一支 Worker，
  // 或改用 OpenNext 讓整個 Next app 跑在 Workers 上。
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
