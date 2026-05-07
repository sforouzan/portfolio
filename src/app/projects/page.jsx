import FilterableGallery from "@/components/FilterableGallery/FilterableGallery";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

const items = [
  {
    link: "/beep",
    image: "/assets/images/beepsmallbanner2.png",
    title: "BEEP",
    type: "APP DEVELOPMENT",
    category: "app-website",
  },
  {
    link: "/jetoredesign",
    image: "/assets/images/jeto-redesign-banner.png",
    title: "JETO REDESIGN",
    type: "BRAND EVOLUTION",
    category: "app-website",
  },
  {
    link: "/reverie",
    image: "/assets/images/reverie-banner.png",
    title: "REVERIE",
    type: "MAGAZINE DESIGN",
    category: "graphic-design",
  },
  {
    link: "/jetoarticle",
    image: "/assets/images/jeto-article-banner.png",
    title: "JETO ARTICLE",
    type: "PUBLICATION DESIGN",
    category: "graphic-design",
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
  {
    link: "/cosmiccomfort",
    image: "/assets/images/cc2.png",
    title: "COSMIC COMFORT",
    type: "BRAND DESIGN",
    category: "graphic-design",
  },
  {
    link: "/taylorswift",
    image: "/assets/images/ts_mockup.png",
    title: "TAYLOR SWIFT",
    type: "POSTER DESIGN",
    category: "graphic-design",
  },
  {
    link: "/bassguitar",
    image: "/assets/images/bassguitar3.png",
    title: "BASS GUITAR",
    type: "DIGITAL ILLUSTRATION",
    category: "graphic-design",
  },
  {
    link: "/fantasypostcard",
    image: "/assets/images/postcard-1.png",
    title: "FANTASY POSTCARD",
    type: "CONCEPT DESIGN",
    category: "graphic-design",
  },
];

export default function Page() {
  return (
    <div className="pb-20 px-[18vw] 2xl:px-[17vw]">
      <section className="pt-[100px] pb-[120px] xl:pt-[188px] xl:pb-[250px]">
        <h1 className="select-none font-CocoGothic text-[12vw] xl:text-[12.5vw] text-milk-white leading-[86%] uppercase text-center animate-fade-up animate-once animate-delay-[500ms]">
          Projects
        </h1>
        <div className="pt-[24px]">
          <FilterableGallery items={items} />
        </div>
      </section>
    </div>
  );
}
