import type { MetadataRoute } from "next";

// 靜態匯出（output: "export"）要求所有 route handler 明確標成靜態。
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.wasupstudio.com/sitemap.xml",
  };
}
