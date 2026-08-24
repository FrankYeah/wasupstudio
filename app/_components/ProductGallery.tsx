"use client";

import { useState } from "react";
import { SiteImage as Image } from "@/app/_components/SiteImage";

export type GalleryImage = {
  src: string;
  alt: string;
};

// 商品頁圖庫：原站是 Weebly 相簿元件（縮圖列 + 可切換大圖），
// 這裡用同樣的互動模式重建，取代原本只放單張圖的做法。
export function ProductGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState(0);
  const current = images[Math.min(active, images.length - 1)];

  if (images.length === 0) return null;

  return (
    <div>
      <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black/[0.03]">
        <Image src={current.src} alt={current.alt} fill priority className="object-contain p-6" />
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                i === active
                  ? "border-brand-green"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              aria-label={`顯示第 ${i + 1} 張圖片`}
              aria-current={i === active}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
