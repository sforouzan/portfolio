import Showcase from "@/components/Showcase/Showcase";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

const projectData = {
  title: 'Taylor Swift',
  type: 'POSTER DESIGN PROJECT',
  programsUsed: 'ADOBE PHOTOSHOP',
  images : {
    header: '/assets/images/ts_mockup.png',
    body: '/assets/images/ts-train.png'
  },
  summary: 
  <div className="font-VisbyCF flex flex-col gap-y-5">
    <p>A 3-series poster design inspired by Taylor Swift's black and white albums — Reputation, Folklore, and The Tortured Poets Department. </p>
    <p>Each design captures the unique essence of its respective album through a blend of poetic and grunge-inspired aesthetics. The typography and graphics reflect the sonic and emotional depth of each album, drawing from the themes and moods that define them. </p>
    <p>Reputation's bold, rebellious undertones are echoed in striking contrasts, while Folklore's nostalgic and introspective qualities are conveyed through subtle, ethereal visuals. The Tortured Poets Department's raw, poetic expression comes to life with textured, fragmented designs that evoke the album's haunting narrative. Each design encapsulates the distinct mood and narrative of the albums, creating a visual representation that complements their sound.</p>
  </div>,
  gallery: [
    '/assets/images/ts1.png',
    '/assets/images/ts2.png',
    '/assets/images/ts3.png'
  ]
}

export default function Page() {
  return (
    <main className="relative">
      <Showcase {...projectData} />
    </main>
  )
}
