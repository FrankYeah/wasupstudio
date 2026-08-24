import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

// 品牌內文字型「Birdseye」，從原站 Weebly CSS 擷取下來的自架字型（6 個字重/樣式）。
export const birdseye = localFont({
  src: [
    { path: "./2e3f5cb9-101f-46cf-a7b3-dfaa58261e03.woff2", weight: "100", style: "normal" },
    { path: "./1c6c1881-23c9-4d6a-a018-759d1c9ded15.woff2", weight: "100", style: "italic" },
    { path: "./2cd55546-ec00-4af9-aeca-4a3cd186da53.woff2", weight: "500", style: "normal" },
    { path: "./7377dbe6-f11a-4a05-b33c-bc8ce1f60f84.woff2", weight: "500", style: "italic" },
    { path: "./627fbb5a-3bae-4cd9-b617-2f923e29d55e.woff2", weight: "600", style: "normal" },
    { path: "./3f380a53-50ea-4a62-95c5-d5d8dba03ab8.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-birdseye",
  display: "swap",
});

// 標題字型，原站用 Montserrat。
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});
