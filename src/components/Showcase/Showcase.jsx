import { CarouselCustomNavigation } from "../Carousel/Carousel";
import Image from "next/image";

const Showcase = (props) => {
  const { title, type, programsUsed, images, summary, slides } = props;
return (
    <div className="pt-[190px] max-w-[1400px] m-auto px-8 md:px-[100px] lg:px-[12vw] xxl:px-0">
      <h1 className="text-hero text-custom-black leading-[86%] uppercase">{title}</h1>
      <p className="uppercase text-[30px] pt-2">{type}</p>
      <p className="uppercase italic pt-2 pb-[27px]">Programs used: {programsUsed}</p>
      <Image
        src={images?.header || 'https://placehold.co/1140x450.svg'}
        alt="portfolio item"
        layout="responsive"
        width={1000}
        height={1000}
        className="rounded-[10px]"
      />
      <div className="md:flex pt-[30px] gap-x-[30px]">
        <div className="xl:w-1/2 flex-shrink-0">
          <Image
            src={images?.body || 'https://placehold.co/590x572.svg'}
            alt="portfolio item"
            layout="responsive"
            width={1000}
            height={1000}
            className="rounded-[10px] w-full"
          />
        </div>
        <div>
          
          <div className="flex pt-[50px]">
            <Image src={'assets/images/star.svg'} height='100' width='83' alt="star icon" />
            <Image src={'assets/images/star.svg'} height='100' width='83' alt="star icon" />
            <Image src={'assets/images/star.svg'} height='100' width='83' alt="star icon" />
          </div>
    
          <h3 className="pt-[30px] pb-[9px] text-[30px] uppercase">Summary</h3>
          {summary}
        </div>
      </div>
      <div className="pt-[30px]">
        <CarouselCustomNavigation {...{slides}} />
      </div>
    </div>
  )
}
export default Showcase;
