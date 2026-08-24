import type { MetadataRoute } from "next";
import { boardGames, courseNav } from "@/app/_lib/site-data";

// 靜態匯出（output: "export"）要求所有 route handler 明確標成靜態，
// sitemap/robots 這種內建產生器也不例外。
export const dynamic = "force-static";

const BASE_URL = "https://www.wasupstudio.com";

// 課程頁的巢狀路徑（含子項目）攤平成一維清單。
function flattenCourseHrefs(): string[] {
  const hrefs: string[] = ["/courses"];
  for (const item of courseNav) {
    hrefs.push(item.href);
    if (item.children) {
      for (const child of item.children) hrefs.push(child.href);
    }
  }
  return hrefs;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/design-consulting",
    "/board-games",
    "/digital-materials",
    "/about",
  ];

  const productPaths = boardGames.map((g) => g.href);
  const coursePaths = flattenCourseHrefs();

  const allPaths = [...staticPaths, ...productPaths, ...coursePaths];

  return allPaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
