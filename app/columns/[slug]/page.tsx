import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";
import { columns, displayDate, excerpt, getColumn } from "@/app/_lib/columns";

export function generateStaticParams() {
  return columns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/columns/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const column = getColumn(slug);
  if (!column) return {};
  return { title: column.title, description: excerpt(column) };
}

export default async function ColumnPage({ params }: PageProps<"/columns/[slug]">) {
  const { slug } = await params;
  const column = getColumn(slug);
  if (!column) notFound();

  return (
    <article className="py-14">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Link href="/columns" className="text-sm text-brand-green hover:underline">
            ← 回專欄
          </Link>

          <h1 className="mt-4 font-heading text-3xl leading-snug font-bold text-ink">
            {column.title}
          </h1>
          {column.date ? (
            <p className="mt-2 text-sm text-ink/50">{displayDate(column.date)}</p>
          ) : null}

          <div className="mt-8 space-y-5">
            {column.blocks.map((block, i) =>
              block.type === "image" ? (
                // 寬高用圖檔實際尺寸，讓瀏覽器先留好位置不要版面跳動。
                // 限制最大高度是因為原站這些圖多半是插圖或截圖，撐滿內文寬度會蓋過文字。
                // alt 留空：原站沒有替代文字，硬編一段等於自己發明圖說，
                // 對讀螢幕的人來說「跳過」比「聽到錯的描述」好。
                <Image
                  key={i}
                  src={block.src}
                  alt=""
                  width={block.w}
                  height={block.h}
                  className="mx-auto h-auto max-h-[520px] w-auto max-w-full rounded-xl"
                />
              ) : block.type === "h" ? (
                <h2
                  key={i}
                  className="pt-4 font-heading text-xl font-bold text-ink"
                >
                  {block.text}
                </h2>
              ) : (
                <p key={i} className="leading-relaxed text-ink/80">
                  {block.text}
                </p>
              ),
            )}
          </div>
        </div>
      </Container>
    </article>
  );
}
