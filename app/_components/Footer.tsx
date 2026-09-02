import Link from "next/link";
import { Container } from "@/app/_components/Container";
import { studioContact } from "@/app/_lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 bg-[#2a2a2a] text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-bold text-white">{studioContact.name}</h2>
          <dl className="mt-4 space-y-1 text-sm text-white/80">
            <p>統編：{studioContact.taxId}</p>
            <p>地址：{studioContact.address}</p>
            <p>
              E-mail：
              <a href={`mailto:${studioContact.email}`} className="underline">
                {studioContact.email}
              </a>
            </p>
            <p>
              合作洽談 {studioContact.partnership.name}：{studioContact.partnership.phone}
            </p>
            <p>
              課程窗口 {studioContact.courses.name}：{studioContact.courses.phone}
            </p>
          </dl>
          <div className="mt-6 flex gap-4 text-sm">
            <a href={studioContact.facebook} target="_blank" rel="noreferrer" className="underline">
              Facebook
            </a>
            {/* 原站頁尾這顆「部落格」連的是外部 Blogspot，照抄保留。 */}
            <a href={studioContact.blog} target="_blank" rel="noreferrer" className="underline">
              部落格
            </a>
            {/* 站內專欄。主導覽也有同一個入口，見 MIGRATION-PLAN 偏離清單第 15 條。 */}
            <Link href="/columns" className="underline">
              專欄
            </Link>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 text-ink">
          <h3 className="text-base font-bold">聯絡表單</h3>
          {/* 原站原文：「…最新活動資訊呦。…更請務必填寫，我們會進一步。」
              2026-08-25 還原被改掉的語氣詞「呦」跟強調字「更」——這兩個是品牌語氣，不是錯字，
              先前重建時一併「校正」掉了，屬於不該動的改寫。
              最後那句「我們會進一步。」原站就是斷在這裡、句子沒寫完（客戶自己的疏漏），
              照抄會讓新站看起來像壞掉，先維持不放。 */}
          <p className="mt-1 text-xs leading-relaxed text-ink/60">
            歡迎留下聯絡資料，我們將主動通知您最新活動資訊呦。如果對我們的課程有興趣，或想跟我們合作，更請務必填寫。
          </p>
          {/* 見 MIGRATION-PLAN 偏離清單第 13 條。 */}
          <a
            href={studioContact.contactForm}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-full bg-brand-green px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-green-bright"
          >
            填寫聯絡表單
          </a>
          <p className="mt-3 text-xs leading-relaxed text-ink/60">
            表單會在新分頁開啟，共 10 題，包含您的聯絡方式與需求。
            也可以直接來信{" "}
            <a href={`mailto:${studioContact.email}`} className="underline">
              {studioContact.email}
            </a>
            。填寫前請先閱讀
            <Link href="/privacy" className="underline">
              隱私權政策
            </Link>
            。
          </p>
        </div>
      </Container>

      <div className="flex flex-col items-center gap-2 border-t border-white/10 py-6 text-center text-xs text-white/50 sm:flex-row sm:justify-center sm:gap-4">
        <Link href="/">Wa&apos;s up studio &copy; Copyright {new Date().getFullYear()}</Link>
        <Link href="/privacy" className="underline hover:text-white/80">
          隱私權政策
        </Link>
      </div>
    </footer>
  );
}
