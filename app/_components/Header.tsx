"use client";

import Link from "next/link";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { useState } from "react";
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
  const pathname = usePathname();
  // 原站首頁的 header 是透明的、疊在灰底蛙圖 banner 上面（導覽字/選單icon是白色、
  // 目前頁的選單項目有一個白色外框）；其他頁面 header 才是實心白底、黑字、黑色外框。
  // 用 pathname 判斷是不是首頁來切換這兩種模式，同時做出「目前頁面」的外框標示（原站也有）。
  const overlay = pathname === "/";
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-50 bg-transparent"
          : "sticky top-0 z-50 border-b border-black/5 bg-white"
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
                    (overlay
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
