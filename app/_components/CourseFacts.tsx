import { type ReactNode } from "react";

export type FactSectionItem = string | { label: string; items: string[] };

/**
 * 課程頁分頁籤 pane 右欄的文字。原站每一個 pane 都是同一塊 `.paragraph`，格式固定：
 *
 *   （可有可無的一行標語）
 *   **適合年級：** 值        ← 粗體標籤 #0e121d，值接在同一行
 *   **授課時間：** 值
 *   **課程目標：**
 *   • 條列……                 ← <ul>，項目文字 #2a3140
 *   **課程內容：**
 *   • 條列……
 *
 * 全部 16px／行高 30px（原站 `.tabbed-box-content .paragraph { line-height: 30px }`）。
 * 6 個課程頁的標籤名稱不一樣（適合年級／適合年紀／適合對象／主題／適合科目…），
 * 所以標籤是傳進來的，不寫死。
 */
export function CourseFacts({
  subtitle,
  facts,
  sections,
  footer,
}: {
  subtitle?: string;
  facts?: { label: string; value: string }[];
  sections?: { label: string; items: FactSectionItem[] }[];
  footer?: ReactNode;
}) {
  return (
    <div className="text-base leading-[30px] text-ink">
      {subtitle && <p className="font-bold">{subtitle}</p>}

      {facts?.map((f) => (
        <p key={f.label}>
          <strong className="text-[#0e121d]">{f.label}：</strong> {f.value}
        </p>
      ))}

      {sections?.map((s) => (
        <div key={s.label}>
          <p className="mt-2">
            <strong className="text-[#0e121d]">{s.label}：</strong>
          </p>
          <ul className="list-disc pl-6 text-[#2a3140]">
            {s.items.map((item) =>
              typeof item === "string" ? (
                <li key={item}>{item}</li>
              ) : (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  <ul className="list-[circle] pl-6">
                    {item.items.map((sub) => (
                      <li key={sub}>{sub}</li>
                    ))}
                  </ul>
                </li>
              ),
            )}
          </ul>
        </div>
      ))}

      {footer}
    </div>
  );
}
