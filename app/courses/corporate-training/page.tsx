import type { Metadata } from "next";
import { SiteImage as Image } from "@/app/_components/SiteImage";
import { Container } from "@/app/_components/Container";

export const metadata: Metadata = {
  title: "教育訓練",
  description:
    "阿普蛙教育訓練課程－提升團隊及個人溝通力，透過遊戲帶團隊認識學習風格、練習非暴力溝通、鍛鍊有感表達，協助企業與組織建立更好的合作與溝通模式。",
};

const CTA_HREF = "https://forms.gle/EHb993prKutffjnc8";

export default function CorporateTrainingPage() {
  return (
    <>
      <section className="bg-black/[0.03] py-20">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-ink md:text-4xl">教育訓練</h1>
            <p className="mt-2 font-semibold text-brand-green">提升團隊及個人溝通力</p>
            <p className="mt-6 text-ink/70">
              讓成員認識自己的學習風格，人與人之間的相處、合作容易發生衝突，主要是因為人接受訊息的方式及轉化訊息的行動不同，因此課程目標主要讓成員了解自己並理解他人。再透過遊戲的方式，成員會在遊戲中展現真實的自己，藉此可以理解自己的風格展現，並學習如何與他人互動。
            </p>
            <a
              href={CTA_HREF}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-brand-green px-8 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
            >
              邀約課程
            </a>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black/[0.05]">
            <Image
              src="/images/courses/corporate-training-1.jpg"
              alt="教育訓練現場，學員分組進行溝通遊戲"
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-bold text-ink">主題一：學習風格</h2>
              <p className="mt-4 text-ink/70">
                學習風格分成「聚斂型、適應型、同化型、發散型」。再透過遊戲的方式，成員會在遊戲中展現真實的自己，藉此可以理解自己的風格展現，並學習如何與他人互動。
              </p>
              <a
                href={CTA_HREF}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-full border border-brand-green px-6 py-2.5 text-sm font-semibold text-brand-green transition hover:bg-brand-green hover:text-white"
              >
                邀約課程
              </a>
            </div>
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black/[0.03]">
              <Image
                src="/images/courses/corporate-training-2.jpg"
                alt="學習風格四象限圖：聚斂型（弓箭手）、適應型（劍士）、同化型（煉金術士）、發散型（吟遊詩人）"
                fill
                className="object-contain p-6"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-black/[0.03] py-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-black/[0.05] md:order-2">
              <Image
                src="/images/courses/corporate-training-3.jpg"
                alt="學員在白板上練習檢視自己的感受與觀點"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-2xl font-bold text-ink">主題二：非暴力溝通</h2>
              <p className="mt-4 text-ink/70">
                透過遊戲，讓成員覺察自己的溝通樣貌及盲點，重新思考為何人們容易發生衝突，難以有效溝通。講師將教導正向溝通的四個要素——觀察、感受、需求跟請求，以提昇大家溝通能力。
              </p>
              <p className="mt-3 text-sm text-ink/60">
                觀察是透過具體客觀的事實，我們在溝通時，常會太快評論對方，而引發衝突。感受源自於需求，當需求被滿足時，人會有正向的感受，當需求未被滿足，則會有負向情緒。人之所以會產生衝突，是因為各自想要滿足自己的需求，所以要先看見自己的需求，才能思考雙方都可接受的方案。「請求」是提出具體可行的請求，讓彼此可以互相協助。
              </p>
              <a
                href={CTA_HREF}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block rounded-full border border-brand-green px-6 py-2.5 text-sm font-semibold text-brand-green transition hover:bg-brand-green hover:text-white"
              >
                課程邀約
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-2xl">
          <h2 className="text-2xl font-bold text-ink">主題三：用遊戲帶你有感表達</h2>
          <h3 className="mt-6 text-sm font-bold text-ink">課程目的</h3>
          <p className="mt-1 text-ink/70">
            表達力是一種需要練習編排的技術，這門課程從理解不同人對一段「表達」——無論是對話、文字或肢體層面——帶來的感受出發練習做解讀，也帶領學員練習設計屬於自己的編排。
          </p>
          <h3 className="mt-6 text-sm font-bold text-ink">課程大綱</h3>
          <p className="mt-1 text-ink/70">
            用遊戲的方式讓學員體驗到好的表達讓接受的一方感受有很大的落差，無論是情緒或是內容的接受上都會有所不同，進一步與學員們深入探討過往自己的表達上面所缺乏的區塊，進一步完善具自己風格且有效有感的表達系統。
          </p>
          <a
            href={CTA_HREF}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full border border-brand-green px-6 py-2.5 text-sm font-semibold text-brand-green transition hover:bg-brand-green hover:text-white"
          >
            課程邀約
          </a>
        </Container>
      </section>

      <section className="bg-black/[0.03] py-16 text-center">
        <Container>
          <h2 className="text-2xl font-bold text-ink">想幫團隊安排教育訓練？</h2>
          <p className="mt-3 text-ink/70">
            訓練成員認識自己的學習風格、練習非暴力溝通、鍛鍊有感表達，促進團隊內部合作，建立更好的合作、溝通模式。
          </p>
          <a
            href={CTA_HREF}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-brand-green px-8 py-3 font-semibold text-white transition hover:bg-brand-green-bright"
          >
            邀約課程
          </a>
        </Container>
      </section>
    </>
  );
}
