import Twocolproject from "@/components/Twocolproject/Twocolproject";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

const projectData = {
  title: "Fantasy Postcard",
  type: "CONCEPT DESIGN",
  programsUsed: "ADOBE PHOTOSHOP",
  images: {
    body: "/assets/images/postcard.png",
  },
  summary: (
    <div className="font-DMSans 1600xl:text-[18px] flex flex-col gap-y-5">
      <p>
        This fantasy postcard design showcases a whimsical creature named
        Faelora, a delicate fusion of a rabbit, lamb, deer antlers, and
        butterfly wings. Set against a moody celestial backdrop, the design is
        framed in a vintage-inspired postcard style, complete with aged textures
        and postal stamps, reinforcing its nostalgic and magical aesthetic.
      </p>
      <p>
        Created by a conceptual print company, Faerietale Printpress, this piece
        embodies the essence of folklore and fantasy, it brings folklore and
        fantasy to life.
      </p>
    </div>
  ),
};

export default function Page() {
  return (
    <main className="relative">
      <Twocolproject {...projectData} />
    </main>
  );
}
