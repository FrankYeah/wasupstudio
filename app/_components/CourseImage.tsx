import { SiteImage } from "@/app/_components/SiteImage";
import { courseImageSize } from "@/app/_lib/course-image-sizes";

/**
 * 課程頁分頁籤 pane 裡的圖片。
 *
 * ⚠️ 2026-08-26：原站是 `width:auto; max-width:100%`——**照原比例縮到欄寬、不裁切**，
 * 上下各留 10px。重建站原本用 `fill` + `aspect-16/9 object-cover`，把每張課程實照
 * 都裁成 16:9（原圖大多是 4:3），人臉跟白板上的字常常被切掉。
 *
 * 尺寸從 `_lib/course-image-sizes.ts` 查表（腳本量出來的），查不到就退回 4:3，
 * 這樣新增圖片忘了重跑腳本時只是比例可能不準，不會整個 build 掛掉。
 */
export function CourseImage({ src, alt }: { src: string; alt: string }) {
  const [width, height] = courseImageSize[src] ?? [1200, 900];
  return (
    <SiteImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="h-auto w-full py-[10px]"
    />
  );
}
