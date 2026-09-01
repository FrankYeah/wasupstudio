import Script from "next/script";

// 原站裝的是 Universal Analytics（客戶的 UA-92829267-1 ＋ Weebly 平台自己的 UA-7870337-1），
// 不是 GA4。UA 在 2023-07 就停止收資料、property 也已經被 Google 關閉，所以
// **沒有「沿用同一個 property」這個選項**，要繼續看流量得由客戶新開一個 GA4 property。
//
// 這支元件先把接線做好：拿到 measurement ID 之後，在部署平台設一個
// NEXT_PUBLIC_GA_ID 環境變數（G-XXXXXXXXXX）就會自動掛上，不用再改程式。
// 沒設的時候整支不輸出任何東西，本機開發與預覽站也就不會送出假流量。
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
