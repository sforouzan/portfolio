import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Navigation from "@/components/Navigation/Navigation";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

const items = [
  {
    'link': '/lunarbloom',
    'image': '/assets/images/lunarbanner.png'
  },
  {
    'link': '/',
    'image': 'https://placehold.co/600x400.svg'
  },
  {
    'link': '/',
    'image': 'https://placehold.co/600x400.svg'
  },
  {
    'link': '/',
    'image': 'https://placehold.co/600x400.svg'
  },
]

export default function Page() {
  return (
    <main>
      <Navigation />
      <section className="pt-[188px] max-w-[1400px] m-auto px-8 md:px-[100px] lg:px-[12vw] xxl:px-0">
        <h1 className="text-hero text-custom-black leading-[86%] uppercase">Projects</h1>
        <h2>Filter by: Graphic Design  /  UX/UI Design  / Development</h2>
        <div className="pt-[56px]">
          <Gallery items={items} />
        </div>
      </section>
      <div className="pt-[400px] max-w-[1400px] m-auto px-8 md:px-[100px] lg:px-[12vw] xxl:px-0">
        <Footer theme={'light'} />
      </div>
    </main>
  )
}
