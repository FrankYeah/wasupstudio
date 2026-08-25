# 阿普蛙工作室官網（wasupstudio.com 重建版）

客戶「阿普蛙工作室」的官網從 Weebly 搬遷過來的重建版，Next.js 16（App Router）+ TypeScript + Tailwind v4。背景與完整規劃見 `../00-plan/MIGRATION-PLAN.md`（這是整個搬遷案的主文件，不只是這個 repo）。

## 本機開發

```bash
npm install
npm run dev
```

開 [http://localhost:3000](http://localhost:3000)。

```bash
npm run build   # 靜態匯出（output: "export"），輸出到 out/
npm run lint    # ESLint，這個專案沒有自動化測試，驗收靠 build+lint+肉眼視覺檢查
```

## 技術棧與關鍵設定

- **內容即程式碼**：不接 CMS，客戶內容/文案直接寫在各 `app/**/page.tsx` 裡，未來要改文字/擴功能就是直接改這些檔案（用 Claude Code）。共用結構資料（導覽選單、商品清單、課程清單）在 `app/_lib/site-data.ts`。
- **靜態匯出**（`output: "export"`，見 `next.config.ts`）：目前沒有需要伺服器運算的頁面（聯絡表單後端還沒接，見 `app/_components/ContactForm.tsx` 的 TODO），整站是純 HTML/CSS/JS。
- **圖片一律從 `app/_components/SiteImage.tsx` 引入，不要直接 `import Image from "next/image"`**：靜態匯出 + `images.unoptimized: true` 的組合下，`public/` 資料夾的圖片不會自動套用 `basePath`（Next.js 官方文件裡的已知行為），`SiteImage` 補上這一層，全站的圖片元件都要走這裡，不然在 GitHub Pages 這種子路徑部署下圖片會讀不到。**CSS `background-image: url(...)` 這種非 `next/image` 的用法**（例如 [PageBanner.tsx](app/_components/PageBanner.tsx) 的 banner 底圖）**不能用 `SiteImage` 元件，要改用同一個檔案 export 出來的 `withBasePath()` 函式**包住路徑字串，邏輯跟 `SiteImage` 一致，只是給非 `<img>` 的場景用。
- **設計系統**：品牌綠 `#007854`（`bg-brand-green`/`text-brand-green`）、亮綠 `#00ab84`（`-bright`，hover 用）、內文色 `#2a2a2a`（`text-ink`），字型見 `app/fonts/`（自架 Birdseye + Google Fonts Montserrat），容器寬度用 `<Container>` 元件（`app/_components/Container.tsx`），不要各頁自己重寫 max-width。

## 部署

**GitHub Pages（客戶預覽用，非正式站）**：push 到 `main` 會自動用 `.github/workflows/deploy-gh-pages.yml` 部署到 `https://frankyeah.github.io/wasupstudio/`。這個模式需要 `GITHUB_PAGES=true` 環境變數（workflow 裡已經設好）讓 `next.config.ts` 套用 `/wasupstudio` 這個 basePath；本機 `npm run dev`／一般 `npm run build` 不需要這個變數。

**正式站（規劃中，尚未執行）**：技術架構決定是部署到 Cloudflare、網域用 `wasupstudio.com` 根目錄（basePath 空字串），細節見 `../00-plan/MIGRATION-PLAN.md` 的「技術架構決定」與「Phase 3」。GitHub repo 跟 Cloudflare 帳號最終都要轉移到客戶名下，接案方用協作者身分操作，不要長期留在自己名下（見同一份文件的「帳號歸屬原則」）。
