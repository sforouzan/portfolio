import Image from "next/image";
import Navigation from "../Navigation/Navigation";

const Hero = () => {
  return (
    <section className="p-[30px] border-2 border-custom-black rounded-[28px]">
      <Navigation />
      <h1 className="text-[157px] text-custom-black"><span className="flex gap-4 leading-[86%]">SHIRIN<Image src={'assets/images/star.svg'} alt="starsymbol" height="100" width="83"  />
        </span> FOROUZAN</h1>
        <h2 className="text-[70px]">
          UX/UI & GRAPHIC DESIGNER
        </h2>
    </section>
  )
}

export default Hero;