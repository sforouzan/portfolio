import ParallaxHero from "@/components/Hero/ParallaxHero";
import FilterableGallery from "@/components/FilterableGallery/FilterableGallery";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

const items = [
  {
    link: "/jetoarticle",
    image: "/assets/images/jeto-article-banner1.png",
    title: "JETO ARTICLE",
    type: "PUBLICATION DESIGN",
    category: "graphic-design",
  },
  {
    link: "/jetoredesign",
    image: "/assets/images/jeto-redesign-banner3.png",
    title: "JETO REDESIGN",
    type: "BRAND EVOLUTION",
    category: "app-website",
  },
  {
    link: "/reverie",
    image: "/assets/images/reverie-banner.png",
    title: "REVERIE",
    type: "PRINT DESIGN",
    category: "graphic-design",
  },
  {
    link: "/beep",
    image: "/assets/images/beepsmallbanner2.png",
    title: "BEEP",
    type: "APP DEVELOPMENT",
    category: "app-website",
  },
  {
    link: "/velvetbistro",
    image: "/assets/images/velvet-bistro-project.png",
    title: "VELVET BISTRO",
    type: "MENU DESIGN",
    category: "graphic-design",
  },
  {
    link: "/lunarbloom",
    image: "/assets/images/cans.png",
    title: "LUNAR BLOOM",
    type: "PACKAGING DESIGN",
    category: "graphic-design",
  },
];

export default function Home() {
  return (
    <>
      <ParallaxHero />
      <div className="pb-20 px-[18vw] 2xl:px-[17vw] mt-0 md:mt-[150px]">
        <section className="pt-[40px] md:pt-[110px] pb-[86px]">
          <h2 className="font-CocoGothic uppercase text-[6vw] md:text-[7vw] lg:text-heading leading-[86%] text-milk-white text-center md:text-left">
            Featured Work
          </h2>
          <FilterableGallery items={items} />
          <div className="flex justify-center mt-10 md:mt-12">
            <a
              href="/projects"
              className="select-none font-DMSans font-medium uppercase border-2 border-milk-white rounded-full px-[24px] md:px-[28px] py-[12px] text-[14px] md:text-[16px] leading-snug bg-custom-black hover:bg-milk-white hover:text-custom-black transition-colors duration-300"
            >
              View More
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
