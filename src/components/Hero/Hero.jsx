import Image from "next/image";
import Navigation from "../Navigation/Navigation";

const Hero = () => {
  return (
    <section className="md:h-[80vh] flex flex-col justify-end md:mb-40">
      <div className="pt-20 md:pt-0">
        <h1 className="font-CocoGothic text-[14vw] xl:text-hero leading-[60%] md:leading-[57%] relative text-center"><span className="flex flex-col items-center justify-center md:flex-row-reverse"><Image className="mb-4 max-w-[80px] md:max-w-[9vw] md:absolute -top-3 md:left-[2vw] 2xl:left-[40px] md:mb-0" src={'assets/images/stargroup.svg'} alt="starsymbol" height="100" width="83" layout="responsive" /><span className="text-center">shirin</span>
        </span> <span>forouzan</span></h1>
        <h2 className="font-VisbyCF text-[22px] md:text-heroSub leading-tight text-center md:text-center pt-1 md:pt-0">
          UX/UI & GRAPHIC DESIGNER.
        </h2>
      </div>
    </section>
  )
}

export default Hero;
