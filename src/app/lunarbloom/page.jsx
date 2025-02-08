import Showcase from "@/components/Showcase/Showcase";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

const projectData = {
  title: 'Lunar Bloom',
  type: 'PACKAGING DESIGN PROJECT',
  programsUsed: 'ADOBE ILLUSTRATOR, ADOBE PHOTOSHOP',
  images : {
    header: '/assets/images/lunarbanner.png',
    body: '/assets/images/lunarmock.png'
  },
  summary: 
  <div className="font-VisbyCF flex flex-col gap-y-5">
    <p>Lunar Bloom is a line of sour ales inspired by the moon's phases and delicate floral flavors. The design combines celestial elements with botanical motifs, reflecting the unique blend of tart and floral notes in every sip.</p>
    <p>Lunar Bloom was designed for those who want to embrace the magic of nature and the cosmos in a refreshing, adventurous way.</p>
    <p>As a potentially new brand, Lunar Bloom needed a visual identity that would instantly connect consumers. The soft pastel color scheme, paired with celestial and floral elements, evokes a sense of calm and wonder, while the bold brand name remains the focal point. The illustrative design ensures that consumers immediately know they're in for a unique, flavorful experience, all while appealing to those who appreciate subtle sophistication and modern aesthetics.</p>
  </div>,
  slides: [
    '/assets/images/lunar1.png',
    '/assets/images/lunar2.png',
    '/assets/images/lunar3.png'
  ],
  // 3 image gallery:
  // gallery: [
  //   '/assets/images/lunar1.png',
  //   '/assets/images/lunar2.png',
  //   '/assets/images/lunar3.png'
  // ]
}

export default function Page() {
  return (
    <main className="relative">
      <Showcase {...projectData} />
    </main>
  )
}
