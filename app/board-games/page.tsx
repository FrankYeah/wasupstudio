import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/app/_components/Container";
import { boardGames } from "@/app/_lib/site-data";

export const metadata: Metadata = {
  title: "買桌遊",
  description: "桌遊，把議題變好玩了。阿普蛙設計的議題型桌遊作品一覽。",
};

export default function BoardGamesPage() {
  return (
    <>
      <section className="bg-black/[0.03] py-16">
        <Container>
          <h1 className="text-3xl font-bold text-ink md:text-4xl">桌遊 把議題變好玩了</h1>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {boardGames.map((game) => (
            <Link
              key={game.slug}
              href={game.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-4/3 w-full bg-black/[0.04]">
                {game.image ? (
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-contain p-4 transition group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-ink/40">
                    {game.title}
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs text-ink/50">{game.tagline}</p>
                <h2 className="mt-1 text-lg font-bold text-ink">{game.title}</h2>
                <p className="mt-auto pt-4 text-brand-green font-semibold">NT$ {game.price}</p>
              </div>
            </Link>
          ))}
        </Container>
      </section>
    </>
  );
}
