import Link from "next/link";
import { Container } from "@/app/_components/Container";
import { ContactForm } from "@/app/_components/ContactForm";
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
            <a href={studioContact.blog} target="_blank" rel="noreferrer" className="underline">
              部落格
            </a>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 text-ink">
          <h3 className="text-base font-bold">聯絡表單</h3>
          <p className="mt-1 text-xs text-ink/60">
            歡迎留下聯絡資料，我們將主動通知您最新活動資訊。如果對我們的課程有興趣，或想跟我們合作，請務必填寫。
          </p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        <Link href="/">Wa&apos;s up studio © Copyright {new Date().getFullYear()}</Link>
      </div>
    </footer>
  );
}
