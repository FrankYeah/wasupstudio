// 原站商品/課程頁大多嵌有 YouTube 介紹影片，Phase 1 重建時漏掉了這個區塊，
// 這裡統一補一個 16:9 響應式的嵌入元件。
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-black/[0.03]">
      <iframe
        // 見 MIGRATION-PLAN 偏離清單第 16 條。
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
