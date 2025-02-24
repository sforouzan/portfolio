import { CarouselCustomNavigation } from "../Carousel/Carousel";
import Image from "next/image";
import classNames from "classnames";

const Showcase = (props) => {
  const { title, type, programsUsed, images, summary, slides, gallery } = props;
return (
    <div className="pt-[190px] pb-[55px]">
      <h1 className="text-[12vw] font-CocoGothic text-milk-white leading-[86%] uppercase">{title}</h1>
      <p className="font-VisbyCF uppercase text-[30px] pt-2">{type}</p>
      <p className="font-VisbyCF uppercase italic pt-2 pb-[27px]">Programs used: {programsUsed}</p>
      <Image
        src={images?.header || 'https://placehold.co/1140x450.svg'}
        alt="portfolio item"
        layout="responsive"
        width={1000}
        height={1000}
        className="rounded-[10px]"
      />
      <div className="1600xl:flex pt-[30px] gap-x-[30px] items-center">
        <div className="w-full 1600xl:w-1/2 flex-shrink-0">
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
            <Image src={'assets/images/whitestar.svg'} height='100' width='83' alt="star icon" />
            <Image src={'assets/images/whitestar.svg'} height='100' width='83' alt="star icon" />
            <Image src={'assets/images/whitestar.svg'} height='100' width='83' alt="star icon" />
          </div>
    
          <h3 className="font-VisbyCF pt-[30px] pb-[9px] text-[30px] uppercase">Summary</h3>
          {summary}
        </div>
      </div>
      {!!slides && (
      <div className="pt-[30px]">
        <CarouselCustomNavigation {...{slides}} />
      </div>
      )}
      {!!gallery && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-10">
           {gallery.map((image, index) => (
            <div
            key={index}
            className={classNames("bg-gray-100 h-auto relative rounded-[10px]")}
          >
              <Image
                src={image} 
                alt="gallery item"
                width={800}
                height={800}
                className="object-cover rounded-[10px]" 
                />
            </div>
            ))}
        </div>
      )}
    </div>
  )
}
export default Showcase;
