import Image from "next/image";
import Navigation from "../Navigation/Navigation";

const Hero = () => {
  return (
    <section className="p-[30px] border-2 border-custom-black rounded-[28px] h-[92vh] flex flex-col justify-between">
      <Navigation isSticky={false} />
      <div className="">
        <h1 className="text-hero text-custom-black leading-[86%]"><span className="flex gap-4">SHIRIN<Image className="max-w-[40px] lg:max-w-[83px]" src={'assets/images/star.svg'} alt="starsymbol" height="100" width="83" layout="responsive" />
        </span> FOROUZAN</h1>
        <h2 className="text-4xl lg:text-[70px] leading-tight">
          UX/UI & GRAPHIC DESIGNER
        </h2>
      </div>
    </section>
  )
}

export default Hero;
