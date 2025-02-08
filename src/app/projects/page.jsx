import Gallery from "@/components/Gallery/Gallery";
import Navigation from "@/components/Navigation/Navigation";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

const items = [
  {
    'link': '/lunarbloom',
    'image': '/assets/images/lunarbanner.png',
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
    'image': '/assets/images/ts-train.png',
    'title': 'TAYLOR SWIFT',
    'type': 'POSTER DESIGN'
  },
  {
    'link': '/',
    'image': 'https://placehold.co/600x400.svg'
  },
]

export default function Page() {
  return (
    <>
      <section className="pt-[188px] pb-[400px]">
        <h1 className="font-CocoGothic text-[12vw] xl:text-[12.5vw] text-milk-white leading-[86%] uppercase">Projects</h1>
        <h2 className="font-VisbyMed">Filter by: Graphic Design  /  UX/UI Design  / Development</h2>
        <div className="pt-[56px]">
          <Gallery items={items} />
        </div>
      </section>
    </>
  )
}
