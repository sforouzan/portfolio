import Casestudy from "@/components/Casestudy/Casestudy";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

const projectData = {
  title: "Beep",
  type: "APP DEVELOPMENT | CASE STUDY",
  programsUsed: "REACT NATIVE, EXPO GO, ADOBE ILLUSTRATOR, FIGMA",
  projectRole: "Frontend Designer",
  images: {
    header: "/assets/images/beepbanner.png",
    body: "/",
  },
  summary: (
    <div className="font-DMSans flex flex-col gap-y-5">
      <p>
        Cosmic Comfort is a conceptual furniture brand that draws inspiration
        from celestial elements and dreamy aesthetics, offering imaginative
        designs that blend cosmic motifs with functional luxury. Each ad in this
        3-part series highlights a unique furniture piece framed by ethereal
        graphics and soft, muted gradients that evoke a serene, dreamlike
        atmosphere.
      </p>
      <p>
        Created for those seeking a fusion of artistry and comfort, Cosmic
        Comfort captures the essence of celestial beauty in everyday living.
      </p>
      <p>
        To visually represent the brand’s identity, elegant, elongated
        typography was chosen to reflect the expansive and mysterious nature of
        the cosmos. The minimalist yet whimsical logo features an abstract
        figure seated on a crescent moon, cleverly doubling as both a stylized
        chair and the initials "C" and "C." The tagline titles—"Stellar,"
        "Celestial," and "Ethereal" — reinforce Cosmic Comfort's vision to blend
        imaginative design with timeless comfort.
      </p>
    </div>
  ),
};

export default function Page() {
  return (
    <main className="relative">
      <Casestudy {...projectData} />
    </main>
  );
}
