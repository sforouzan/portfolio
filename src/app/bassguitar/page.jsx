import Twocolproject from "@/components/Twocolproject/Twocolproject";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

const projectData = {
  title: 'Bass Guitar',
  type: 'DIGITAL ILLUSTRATION',
  programsUsed: 'ADOBE ILLUSTRATOR',
  images : {
    body: '/assets/images/bassguitar-4.png'
  },
  summary: 
  <div className="font-VisbyCF 1600xl:text-[18px] flex flex-col gap-y-5">
    <p>This detailed vector illustration captures the intricate design of a Yamaha TRBX174 bass guitar; focusing on photorealism through precise shape drawing, shading, and gradient techniques. </p>
    <p>This project served as an exercise in digital illustration using vector-based tools, demonstrating an understanding of form, lighting and material rendering.</p>
  </div>,
}

export default function Page() {
  return (
    <main className="relative">
      <Twocolproject {...projectData} />
    </main>
  )
}
