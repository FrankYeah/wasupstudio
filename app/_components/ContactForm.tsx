"use client";

import { useState, type FormEvent } from "react";

// TODO(Phase 1 收尾)：原站的聯絡表單是 Weebly 內建元件（+ Google reCAPTCHA），
// 這裡先做前端 UI 復刻，還沒接實際的送信後端。上線前要決定要接哪一種：
//   1) Next.js Server Action + Resend/SendGrid 這類寄信服務
//   2) 或比照「買桌遊/教材」現有流程，直接換成一個 Google 表單（客戶最熟悉、免後端維運）
// 決定前先讓客戶知道現在這個表單「還沒有真的送出去」，別在上線後才發現漏接。
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <p className="rounded-lg bg-brand-green/10 px-4 py-3 text-sm text-brand-green">
        已收到您的訊息，我們會盡快回覆！
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <p className="text-xs text-ink/60">* 表示必填欄位</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          required
          type="text"
          name="firstName"
          placeholder="姓 *"
          className="rounded border border-black/15 px-3 py-2 text-sm"
        />
        <input
          required
          type="text"
          name="lastName"
          placeholder="名 *"
          className="rounded border border-black/15 px-3 py-2 text-sm"
        />
      </div>
      <input
        required
        type="email"
        name="email"
        placeholder="電子郵件 *"
        className="rounded border border-black/15 px-3 py-2 text-sm"
      />
      <textarea
        required
        name="message"
        placeholder="想說的話 *"
        rows={4}
        className="rounded border border-black/15 px-3 py-2 text-sm"
      />
      <label className="flex items-center gap-2 text-xs text-ink/70">
        <input type="checkbox" name="marketingConsent" />
        我同意接收營銷和宣傳材料
      </label>
      <button
        type="submit"
        className="mt-1 self-start rounded-full bg-brand-green px-6 py-2 text-sm font-semibold text-white transition hover:bg-brand-green-bright"
      >
        提交
      </button>
    </form>
  );
}
