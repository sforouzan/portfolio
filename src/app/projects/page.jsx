import Gallery from "@/components/Gallery/Gallery";
import Navigation from "@/components/Navigation/Navigation";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

const items = [
  {
    'link': '/beep',
    'image': '/assets/images/beepsmallbanner2.png',
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
  {
    'link': '/bassguitar',
    'image': '/assets/images/bassguitar3.png',
    'title': 'BASS GUITAR',
    'type': 'DIGITAL ILLUSTRATION'
  },
  {
    'link': '/fantasypostcard',
    'image': '/assets/images/postcard-1.png',
    'title': 'FANTASY POSTCARD',
    'type': 'CONCEPT DESIGN'
  },
]

export default function Page() {
  return (
    <div className="pb-20 px-[18vw] 2xl:px-[17vw]">
      <section className="pt-[100px] pb-[120px] xl:pt-[188px] xl:pb-[250px]">
        <h1 className="select-none font-CocoGothic text-[12vw] xl:text-[12.5vw] text-milk-white leading-[86%] uppercase animate-fade-up animate-once animate-delay-[500ms]">Projects</h1>
        {/* <h2 className="font-VisbyMed">Filter by: Graphic Design  /  UX/UI Design  / Development</h2> */}
        <div className="pt-[56px]">
          <Gallery items={items} />
          <p className="font-VisbyMed mt-10">Note: More projects to be added soon, stay tuned ✨</p>
        </div>
      </section>
    </div>
  )
}
