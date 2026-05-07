import Image from "next/image";
import BeforeAfter from "./BeforeAfter";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

export default function Page() {
  return (
    <div className="pb-20 px-[18vw] 2xl:px-[17vw]">
      <section className="pt-[190px] pb-[55px]">
        <h1 className="select-none font-CocoGothic text-[12vw] text-milk-white leading-[86%] uppercase">
          Jeto Redesign
        </h1>
        <p className="select-none font-DMSans uppercase text-[30px] pt-2">
          Brand Evolution – B2B SaaS Platform
        </p>
        <p className="select-none font-DMSans uppercase italic pt-2 pb-[50px]">
          Programs used: WordPress, Figma, Adobe Photoshop, Adobe Illustrator
        </p>
        <Image
          src="/assets/images/jeto-redesign-hero.png"
          alt="Jeto redesign hero"
          width={2560}
          height={1300}
          quality={95}
          sizes="64vw"
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
          Jeto is a B2B SaaS platform that helps marketing operations teams
          automate Marketo campaign execution. Over the course of a year, I
          managed their WordPress site and led a visual refresh of their
          homepage and key marketing pages — evolving the brand away from
          cartoon illustrations toward a cleaner, more professional aesthetic
          suited to their enterprise audience. I also designed and maintained
          supporting graphic assets across the site.
        </p>
      </section>

      <section className="pt-[100px] md:pt-[140px]">
        <BeforeAfter />
      </section>

      <section className="pt-[60px] md:pt-[90px] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-6 md:gap-y-0 md:gap-x-10">
        <h2 className="select-none font-DMSans uppercase text-[20px] md:text-[24px] tracking-wide leading-tight">
          Challenge &amp; Solution
        </h2>
        <div className="font-DMSans text-[15px] md:text-[16px] leading-relaxed text-milk-white flex flex-col gap-y-5">
          <p>
            Jeto&apos;s team came to me with a clear constraint: no full
            rebrand, no dramatic overhaul. Their cartoon illustration style
            had served them in their early days, but it was reading as too
            casual for the enterprise buyers and MOPs professionals they were
            increasingly targeting. The brief was to modernize within their
            existing identity; working directly in WordPress, within their
            existing theme, without disrupting the site structure their team
            already knew.
          </p>
          <p>
            The approach was strategic restraint. Rather than pushing for
            changes the client wasn&apos;t ready for, I worked within their
            comfort zone by replacing the illustrative characters with
            professional photography, tightening the typography hierarchy,
            and introducing a more refined use of their existing green
            palette. The homepage structure stayed familiar while the visual
            language shifted upmarket. Every change was client-approved and
            rolled out incrementally over the course of a year, which also
            meant managing ongoing updates, new graphics, and page builds as
            their needs evolved.
          </p>
        </div>
      </section>

      <section className="pt-[100px] md:pt-[140px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {[1, 2, 3].map((n) => (
            <Image
              key={n}
              src={`/assets/images/jeto-redesign-icon-${n}.png`}
              alt={`Jeto redesign icon ${n}`}
              width={1000}
              height={1000}
              quality={95}
              sizes="(min-width: 640px) 21vw, 64vw"
              className="select-none w-full h-auto rounded-[10px]"
            />
          ))}
        </div>
      </section>

      <section className="pt-[40px] md:pt-[60px] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-6 md:gap-y-0 md:gap-x-10">
        <h2 className="select-none font-DMSans uppercase text-[20px] md:text-[24px] tracking-wide leading-tight">
          Icon Design
        </h2>
        <p className="font-DMSans text-[15px] md:text-[16px] leading-relaxed text-milk-white">
          Custom icon set designed to complement Jeto&apos;s existing brand
          palette, created for the site&apos;s main navigation cards
          representing use cases, features, and integrations. Soft gradients
          and geometric forms add visual personality while maintaining the
          clean, airy aesthetic expected by their enterprise audience.
        </p>
      </section>

      <section className="pt-[100px] md:pt-[140px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 items-center">
          {[1, 2, 3].map((n) => (
            <Image
              key={n}
              src={`/assets/images/jeto-redesign-cutom-graphic-${n}.png`}
              alt={`Jeto redesign custom graphic ${n}`}
              width={1000}
              height={1000}
              quality={95}
              sizes="(min-width: 640px) 21vw, 64vw"
              className="select-none w-full h-auto"
            />
          ))}
        </div>
      </section>

      <section className="pt-[40px] md:pt-[60px] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-6 md:gap-y-0 md:gap-x-10">
        <h2 className="select-none font-DMSans uppercase text-[20px] md:text-[24px] tracking-wide leading-tight">
          Custom Graphics
        </h2>
        <div className="font-DMSans text-[15px] md:text-[16px] leading-relaxed text-milk-white flex flex-col gap-y-5">
          <p>
            Custom graphics and photography created throughout the site to
            communicate Jeto&apos;s software capabilities and brand story
            visually. Working within a defined brand system of bright green,
            teal blue, and warm grey, the graphics lean into a
            technology-forward aesthetic, with stylized UI elements and
            node-based flow diagrams that reflect how the platform actually
            works.
          </p>
          <p>
            The dot grid pattern woven throughout references a signature
            motif from Jeto&apos;s existing brand identity, giving each
            graphic a cohesive, intentional feel despite the constrained
            palette. Photography used across supporting pages was also
            intentionally chosen, colour graded and stylized to match,
            creating a consistent visual tone across the site.
          </p>
        </div>
      </section>

      <section className="pt-[100px] md:pt-[140px]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {[1, 2, 3].map((n) => (
            <Image
              key={n}
              src={`/assets/images/jeto-redesign-key-takeaways-${n}.png`}
              alt={`Jeto redesign key takeaway ${n}`}
              width={1000}
              height={1200}
              quality={95}
              sizes="(min-width: 640px) 21vw, 64vw"
              className="select-none w-full h-auto"
            />
          ))}
        </div>
      </section>

      <section className="pt-[40px] md:pt-[60px] grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-6 md:gap-y-0 md:gap-x-10">
        <h2 className="select-none font-DMSans uppercase text-[20px] md:text-[24px] tracking-wide leading-tight">
          Key Takeaways
        </h2>
        <div className="font-DMSans text-[15px] md:text-[16px] leading-relaxed text-milk-white flex flex-col gap-y-5">
          <p>
            Jeto was my first client, and looking back, it was one of the
            most formative experiences of my design career so far. Knowing
            when to push for a bolder direction and when to adapt to what
            the client is ready for is as much a part of the craft as the
            visual work itself. With Jeto, the brief demanded restraint,
            and finding ways to elevate the brand meaningfully within those
            boundaries was its own creative challenge, one that pushed me
            well outside my own aesthetic comfort zone and made me a more
            versatile designer for it.
          </p>
          <p>
            A year of managing their WordPress site also taught me
            something that a single project rarely does: what it means to
            truly understand a brand from the inside out. Long-term client
            relationships build a kind of trust and familiarity that makes
            the design work sharper over time, and that consistency showed
            in the work.
          </p>
        </div>
      </section>
    </div>
  );
}
