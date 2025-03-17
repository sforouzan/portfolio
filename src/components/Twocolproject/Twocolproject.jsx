import Image from "next/image";

const Twocolproject = (props) => {
  const { title, type, programsUsed, images, summary } = props;
return (
    <div className="flex flex-col 1600xl:flex-row gap-12 1600xl:w-1/2 pt-[10px] pb-[200px]">
          <Image
            src={images?.body || 'https://placehold.co/590x572.svg'}
            alt="portfolio item"
            layout="responsive"
            width={1000}
            height={1000}
            className="select-none rounded-[10px] w-full"
          />
      <div className="1600xl:flex flex-col pt-[30px] 1600xl:w-[90%] gap-x-[30px]">
        <div className="w-full flex-shrink-0">
          <h1 className="select-none text-[6.5vw] font-CocoGothic text-milk-white leading-[86%] uppercase">{title}</h1>
          <p className="select-none font-VisbyCF uppercase text-[30px] pt-2">{type}</p>
          <p className="select-none font-VisbyCF uppercase italic pt-2 pb-[27px]">Programs used: {programsUsed}</p>
          <h3 className="select-none font-VisbyCF pt-[30px] pb-[9px] text-[30px] uppercase">Summary</h3>
          <div className="flex-col justify-end">
            {summary}
            <div className="flex pt-[50px] select-none">
              <Image src={'assets/images/whitestar.svg'} height='100' width='83' alt="star icon" />
              <Image src={'assets/images/whitestar.svg'} height='100' width='83' alt="star icon" />
              <Image src={'assets/images/whitestar.svg'} height='100' width='83' alt="star icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Twocolproject;
