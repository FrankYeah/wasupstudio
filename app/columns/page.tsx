import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/app/_components/Container";
import { columns, displayDate, excerpt } from "@/app/_lib/columns";

export const metadata: Metadata = {
  title: "專欄",
  description:
    "阿普蛙工作室的專欄文章，主題涵蓋媒體識讀、議題思辨、遊戲化教學、親子共學與課程引導心法。",
};

export default function ColumnsPage() {
  return (
    <>
      <section className="bg-brand-green py-16 text-white">
        <Container>
          <h1 className="font-heading text-4xl font-bold">專欄</h1>
          <p className="mt-4 max-w-2xl text-white/80">
            蛙蛙們寫的文章，關於媒體識讀、議題思辨、遊戲化教學，還有把這些帶進課堂與家庭的實作心得。
          </p>
          <p className="mt-2 font-heading text-sm text-white/60">
            {columns.length} 篇
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <ul className="grid gap-5 md:grid-cols-2">
            {columns.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/columns/${c.slug}`}
                  className="flex h-full flex-col rounded-2xl border border-black/10 p-6 transition hover:border-brand-green hover:shadow-md"
                >
                  <h2 className="font-heading text-lg font-bold text-ink">
                    {c.title}
                  </h2>
                  {c.date ? (
                    <p className="mt-1 text-xs text-ink/50">{displayDate(c.date)}</p>
                  ) : null}
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {excerpt(c)}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
