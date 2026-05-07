import Image from "next/image";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

export default function Page() {
  return (
    <div className="pb-20 px-[18vw] 2xl:px-[17vw]">
      <section className="pt-[190px] pb-[55px]">
        <h1 className="select-none font-CocoGothic text-[12vw] text-milk-white leading-[86%] uppercase">
          Reverie
        </h1>
        <p className="select-none font-DMSans uppercase text-[30px] pt-2">
          Magazine Design
        </p>
        <p className="select-none font-DMSans uppercase italic pt-2 pb-[27px]">
          Programs used: Adobe InDesign, Adobe Photoshop
        </p>
        <Image
          src="/assets/images/reverie-hero.png"
          alt="Reverie magazine hero"
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
          Reverie is a gothic architecture editorial magazine designed to
          mirror the awe and grandeur of its subject matter. A strict black
          and white palette channels the timeless, monumental quality of
          gothic structures, while dramatic full-bleed photography pulls
          readers into shadowed naves, soaring spires, and intricate stone
          facades. The typographic system does significant expressive work
          throughout: an oversized high-contrast serif anchors section
          headers and article titles with a sense of weight and verticality
          that echoes the architecture itself, while a clean, minimal body
          typeface keeps the editorial content grounded and readable.
        </p>
      </section>

      <section className="pt-[60px] md:pt-[90px]">
        <div className="relative w-full overflow-hidden rounded-[10px]">
          <Image
            src="/assets/images/reverie-body-bg.png"
            alt=""
            fill
            aria-hidden="true"
            className="object-cover"
            sizes="100vw"
          />
          <div className="relative px-[6%] py-[8%] md:px-[10%] md:py-[6%]">
            <div className="mx-auto w-full aspect-[16/10] shadow-2xl">
              <iframe
                src="https://indd.adobe.com/view/440872a1-fcfc-4443-9a28-ccecda95fd31"
                title="Reverie magazine InDesign embed"
                className="w-full h-full border-0 rounded-[2px]"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mt-6 md:mt-8">
          <a
            href="#"
            className="select-none font-DMSans font-medium uppercase border-2 border-milk-white rounded-full px-[24px] md:px-[28px] py-[12px] text-[14px] md:text-[16px] leading-snug bg-custom-black hover:bg-milk-white hover:text-custom-black transition-colors duration-300"
          >
            View Full PDF
          </a>
        </div>
      </section>
    </div>
  );
}
