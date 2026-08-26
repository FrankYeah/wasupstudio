"use client";

import { useId, useState, type ReactNode } from "react";

/**
 * 原站（Weebly）的「分頁籤」platform element（`135397292802228534-1.3.6`）。
 *
 * ⚠️ 2026-08-26 補建：6 個課程頁（家庭教育、提升溝通力、議題探究與實作、在遊戲中學議題、
 * 教案/教材設計、教材應用）原站都用這個元件——**一個分類 = 一組分頁籤，底下每個課程/教材
 * = 一個籤，一次只顯示一個 pane**。重建站原本把所有 pane 攤平成卡片直列（圖在上、文字在下、
 * 綠色圓角按鈕），跟原站是兩種完全不同的版面。
 *
 * 為什麼會漏：分頁籤的內容**全部都在靜態 HTML 裡**，擷取腳本抓文字時一個字都沒少，
 * 所以「內容比對」永遠是綠燈；真正掉的是**互動型態**——沒被顯示的 pane 在 DOM 裡是
 * `display:none`，純文字擷取讀起來就是一長串，看不出它們原本是分頁。要抓這種漏，
 * 得比對「元件清單」而不是比對文字。查法見
 * ~/.claude/skills/site-migration-audit/references/visual-fidelity-audit.md 陷阱 12。
 *
 * 以下尺寸/顏色全部是量原站 computed style 得來的（1280px 視窗、內容寬 1120px）：
 *   ul（籤列）  border-left + border-bottom 1px #ccc，上、右不畫
 *   li（籤）    min-width 19%、height 60px、border-top/right/bottom 1px #ccc、左邊不畫
 *               idle   背景 #f7f7f7
 *               active 背景 #fff，且 border-bottom 改成白色，跟底下內容框連成一體
 *   籤文字      16px 粗體、line-height 60px、置中、左右各留 20px、nowrap
 *   內容框      border-left/right/bottom 1px #ccc（上緣交給籤列）、背景透明
 *   pane        padding 40px 20px
 */
export function TabbedBox({
  tabs,
}: {
  tabs: { label: string; content: ReactNode }[];
}) {
  const [active, setActive] = useState(0);
  const id = useId();

  if (tabs.length === 0) return null;

  return (
    <div>
      {/* 籤列。原站的籤是 min-width:19% 且內容決定寬度（不撐滿整列），
          右邊剩下的空白由 ul 自己的 border-bottom 把線接到底。 */}
      <ul
        role="tablist"
        className="flex flex-wrap border-b border-l border-[#ccc]"
      >
        {tabs.map((t, i) => (
          <li key={t.label} role="presentation" className="min-w-[19%]">
            <button
              type="button"
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`${id}-pane-${i}`}
              onClick={() => setActive(i)}
              // -mb-px：讓籤自己的下邊框疊在 ul 的下邊框上，選到的那個才能用白色把線切開
              className={`-mb-px h-[60px] w-full cursor-pointer whitespace-nowrap border-y border-r border-[#ccc] px-5 text-base font-bold text-ink ${
                i === active ? "border-b-white bg-white" : "bg-[#f7f7f7]"
              }`}
            >
              {t.label}
            </button>
          </li>
        ))}
      </ul>

      <div
        role="tabpanel"
        id={`${id}-pane-${active}`}
        aria-labelledby={`${id}-tab-${active}`}
        className="border-x border-b border-[#ccc] px-5 py-10"
      >
        {tabs[active].content}
      </div>
    </div>
  );
}

/**
 * 分頁籤 pane 內的版面：原站每個 pane 都是同一種 `wsite-multicol`——
 * 左欄 28.7%（置中的圖片，上下各 10px；圖片底下有時候接一顆按鈕）、右欄 71.3%（文字）。
 * 欄與欄之間是各自 padding 0 15px（＝間距 30px）、垂直對齊靠上。
 */
export function TabPane({
  media,
  children,
}: {
  media?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-y-6 md:grid-cols-[287fr_713fr] md:items-start md:gap-x-[30px]">
      {media ? <div className="text-center">{media}</div> : null}
      <div className={media ? "" : "md:col-span-2"}>{children}</div>
    </div>
  );
}

/**
 * 原站 pane 裡的按鈕是 `wsite-button-small wsite-button-normal`：
 * 透明底、黑字、1px 黑框、直角、14px、最小 112×42。
 * （跟 DESIGN-SPEC.md 記的 `wsite-button-highlight` 黑底白字是不同的變體。）
 */
export function WeeblyOutlineButton({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex h-[42px] min-w-[112px] items-center justify-center border border-black px-4 text-sm text-black transition hover:bg-black hover:text-white"
    >
      {children}
    </a>
  );
}
