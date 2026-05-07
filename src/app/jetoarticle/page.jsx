import Image from "next/image";
import PageGallery from "./PageGallery";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

export default function Page() {
  return (
    <div className="pb-20 px-[18vw] 2xl:px-[17vw]">
      <section className="pt-[190px] pb-[55px]">
        <h1 className="select-none font-CocoGothic text-[12vw] text-milk-white leading-[86%] uppercase">
          Jeto Article
        </h1>
        <p className="select-none font-DMSans uppercase text-[30px] pt-2">
          Publication Design – B2B SaaS Platform
        </p>
        <p className="select-none font-DMSans uppercase italic pt-2 pb-[27px]">
          Programs used: Figma, Adobe Photoshop
        </p>
        <Image
          src="/assets/images/jeto-article-hero.png"
          alt="Jeto governance article hero"
          width={2560}
          height={1300}
          className="select-none rounded-[10px] w-full h-auto"
          priority
        />
      </section>

      <section className="pt-[40px] md:pt-[60px] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-6 md:gap-y-0 md:gap-x-10">
        <div className="select-none">
          <h2 className="font-DMSans uppercase text-[20px] md:text-[24px] tracking-wide">
            Summary
          </h2>
          <div className="flex gap-x-1 mt-3 md:mt-4">
            <Image
              src="/assets/images/whitestar.svg"
              width={50}
              height={60}
              alt=""
              aria-hidden="true"
            />
            <Image
              src="/assets/images/whitestar.svg"
              width={50}
              height={60}
              alt=""
              aria-hidden="true"
            />
            <Image
              src="/assets/images/whitestar.svg"
              width={50}
              height={60}
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
        <p className="font-DMSans text-[15px] md:text-[16px] leading-relaxed text-milk-white">
          Distributed Marketing at Scale is a 14-page whitepaper designed for
          Jeto, a B2B marketing automation platform &amp; a client I have been
          working closely with. The project required translating dense
          technical content into a visually engaging article, balancing
          structured data tables and pull quotes with dynamic full-bleed
          photography and a cohesive two-tone brand palette of deep forest
          green and warm cream. Typography was structured to guide readers
          through complex subject matter without losing visual momentum.
          Layout was built in Figma, with image compositing handled in Adobe
          Photoshop.
        </p>
      </section>

      <section className="pt-[60px] md:pt-[90px]">
        <Image
          src="/assets/images/jeto-article-body-top.png"
          alt="Jeto article page composition"
          width={2560}
          height={1600}
          className="select-none w-full h-auto"
        />
        <div className="flex justify-center md:justify-end mt-6 md:mt-8">
          <a
            href="#"
            className="select-none font-DMSans font-medium uppercase border-2 border-milk-white rounded-full px-[24px] md:px-[28px] py-[12px] text-[14px] md:text-[16px] leading-snug bg-custom-black hover:bg-milk-white hover:text-custom-black transition-colors duration-300"
          >
            View Full Article
          </a>
        </div>
      </section>

      <section className="pt-[60px] md:pt-[90px] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-6 md:gap-y-0 md:gap-x-10">
        <h2 className="select-none font-DMSans uppercase text-[20px] md:text-[24px] tracking-wide leading-tight">
          Challenge &amp; Solution
        </h2>
        <div className="font-DMSans text-[15px] md:text-[16px] leading-relaxed text-milk-white flex flex-col gap-y-5">
          <p>
            The primary hurdle was managing high-density information,
            specifically a complex 13-row optimization table that required
            clear categorization without overwhelming the reader. I also
            needed to source and treat diverse photography to meet the
            professional standards of the MERGE and Jeto brands.
          </p>
          <p>
            I utilized a high-contrast color system and layered typography to
            establish a clear hierarchy, making technical sections highly
            scannable. To ensure a premium feel, I applied custom color
            grading and compositing to imagery where needed, creating a
            cohesive, enterprise-grade visual narrative that anchors the
            14-page spread.
          </p>
        </div>
      </section>

      <section className="pt-[40px] md:pt-[60px]">
        <PageGallery
          images={[
            "/assets/images/jeto-article-body-bottom-a.png",
            "/assets/images/jeto-article-body-bottom-b.png",
            "/assets/images/jeto-article-body-bottom-c.png",
            "/assets/images/jeto-article-body-bottom-d.png",
          ]}
        />
      </section>
    </div>
  );
}
