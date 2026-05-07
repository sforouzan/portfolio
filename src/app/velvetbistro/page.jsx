import Image from "next/image";
import MenuOverlay from "./MenuOverlay";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

export default function Page() {
  return (
    <div className="pb-20 px-[18vw] 2xl:px-[17vw]">
      <section className="pt-[190px] pb-[55px]">
        <h1 className="select-none font-CocoGothic text-[12vw] text-milk-white leading-[86%] uppercase">
          Velvet Bistro
        </h1>
        <p className="select-none font-DMSans uppercase text-[30px] pt-2">
          Menu Design
        </p>
        <p className="select-none font-DMSans uppercase italic pt-2 pb-[27px]">
          Programs used: Adobe InDesign, Adobe Photoshop, Adobe Illustrator
        </p>
        <Image
          src="/assets/images/velvet-bistro-hero.png"
          alt="Velvet Bistro menu hero"
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
          The Velvet Bistro brunch menu was designed with an elegant Parisian
          casual dining aesthetic in mind. A soft lavender and cream palette
          sets a quietly sophisticated tone, evoking the warmth of a
          neighbourhood bistro. Original hand-drawn botanical line art adds
          an artisanal, intimate quality throughout, while a considered
          sans-serif typographic system keeps the hierarchy clear and the
          tone refined. The two-column grid accommodates a dense,
          chef-driven offering without ever feeling cluttered, guiding diners
          naturally from lighter bites to shareable meals. Full-bleed food
          photography grounds the airy design in something tactile and real.
        </p>
      </section>

      <section className="pt-[60px] md:pt-[90px]">
        <MenuOverlay />
      </section>
    </div>
  );
}
