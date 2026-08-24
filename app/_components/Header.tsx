"use client";

import Link from "next/link";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav, boardGames, courseNav } from "@/app/_lib/site-data";

const dropdowns: Record<string, { title: string; href: string }[]> = {
  "/board-games": boardGames.map((g) => ({ title: g.title, href: g.href })),
  "/courses": courseNav.flatMap((c) =>
    c.children ? [{ title: c.title, href: c.href }, ...c.children] : [{ title: c.title, href: c.href }]
  ),
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // 原站的「header-page」（有自己的 header banner 底圖）跟「no-header-page」（純白底）是兩種
  // 不同的頁面模板，逐頁量測 body class 後確認：首頁／想設計／買桌遊總覽／找課程總覽這 4 個
  // 總覽型頁面是 header-page（header 透明疊在底圖上，導覽字/選單icon白色、目前頁面白色外框），
  // 其餘 20 頁（關於我們、買數位教材、8 款商品頁、10 個課程子頁）都是 no-header-page（實心白底、
  // 黑字、黑色外框）。這裡用完整路徑（不含子路徑）比對這 4 個總覽頁，其他頁面一律 solid 模式。
  const overlayRoutes = ["/", "/design-consulting", "/board-games", "/courses"];
  const overlay = overlayRoutes.includes(pathname);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  // 原站 header 全站都是 position:fixed（捲動時永遠釘在最上面，不是原本重建站用的 sticky/absolute），
  // 而且首頁這類透明疊層的頁面，捲過 banner 之後 header 會變成跟其他頁一樣的實心白底／黑字，
  // 不會維持透明疊在下面的白色內文上（不然捲下去導覽字會看不見）。用 scrollY 判斷是否已經捲動，
  // 疊層模式 + 已捲動 = 套用跟 solid 模式一樣的白底樣式，但定位仍維持 fixed（不像 solid 頁用 sticky，
  // 這裡改用 fixed 是因為疊層模式的 header 一開始要脫離文件流讓 hero 從螢幕最上面開始，sticky 做不到這件事）。
  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const showOverlayStyle = overlay && !scrolled;

  return (
    <header
      className={
        "z-50 transition-colors duration-200 " +
        (overlay
          ? "fixed inset-x-0 top-0 " + (showOverlayStyle ? "bg-transparent" : "border-b border-black/5 bg-white")
          : "sticky top-0 border-b border-black/5 bg-white")
      }
    >
      <div className="container-content flex items-center justify-between px-6 py-3 md:px-10">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/brand/logo-horizontal.png"
            alt="阿普蛙工作室 Wa's UP Studio"
            width={627}
            height={100}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {mainNav.map((item) => {
            const sub = dropdowns[item.href];
            const active = isActive(item.href);
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={
                    "rounded border px-3 py-2 text-sm font-semibold transition " +
                    (showOverlayStyle
                      ? active
                        ? "border-white text-white"
                        : "border-transparent text-white hover:border-white/60"
                      : active
                        ? "border-ink text-ink"
                        : "border-transparent text-ink hover:text-brand-green")
                  }
                >
                  {item.title}
                </Link>
                {sub && (
                  <div className="invisible absolute left-0 top-full min-w-[220px] rounded-lg border border-black/5 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                    {sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2 text-sm text-ink hover:bg-brand-green/10 hover:text-brand-green"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded md:hidden"
          aria-label="開啟選單"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">選單</span>
          <div className="flex flex-col gap-1.5">
            <span className="h-0.5 w-6 bg-ink" />
            <span className="h-0.5 w-6 bg-ink" />
            <span className="h-0.5 w-6 bg-ink" />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-black/5 bg-white px-6 py-4 md:hidden">
          {mainNav.map((item) => (
            <div key={item.href} className="border-b border-black/5 py-2 last:border-none">
              <Link
                href={item.href}
                className="block py-1 text-sm font-semibold text-ink"
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </Link>
              {dropdowns[item.href] && (
                <div className="ml-3 mt-1 flex flex-col gap-1">
                  {dropdowns[item.href].map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="py-1 text-sm text-ink/70"
                      onClick={() => setMobileOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
