import Gallery from "@/components/Gallery/Gallery";
import Navigation from "@/components/Navigation/Navigation";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

const items = [
  {
    'link': '/beep',
    'image': '/assets/images/beepsmallbanner.png',
    'title': 'BEEP',
    'type': 'APP DEVELOPMENT'
  },
  {
    'link': '/lunarbloom',
    'image': '/assets/images/cans.png',
    'title': 'LUNAR BLOOM',
    'type': 'PACKAGING DESIGN'
  },
  {
    'link': '/cosmiccomfort',
    'image': '/assets/images/cc2.png',
    'title': 'COSMIC COMFORT',
    'type': 'BRAND DESIGN'
  },
  {
    'link': '/taylorswift',
    'image': '/assets/images/ts_mockup.png',
    'title': 'TAYLOR SWIFT',
    'type': 'POSTER DESIGN'
  },

]

export default function Page() {
  return (
    <>
      <section className="pt-[188px] pb-[400px]">
        <h1 className="font-CocoGothic text-[12vw] xl:text-[12.5vw] text-milk-white leading-[86%] uppercase">Projects</h1>
        {/* <h2 className="font-VisbyMed">Filter by: Graphic Design  /  UX/UI Design  / Development</h2> */}
        <div className="pt-[56px]">
          <Gallery items={items} />
        </div>
      </section>
    </>
  )
}
