import Image from "next/image";

const Twocolproject = (props) => {
  const { title, type, programsUsed, images, summary } = props;
  return (
    <div className="pb-20 px-[18vw] 2xl:px-[17vw]">
      <div className="flex flex-col 1400xl:flex-row gap-12 pt-[10px] pb-[200px]">
        <div className="w-full 1400xl:w-1/2 flex-shrink-0">
          <Image
            src={images?.body || "https://placehold.co/590x572.svg"}
            alt="portfolio item"
            layout="intrinsic"
            width={1000}
            height={1000}
            className="select-none rounded-[10px] flex-shrink-0 w-auto max-w-full"
          />
        </div>
        <div className="flex flex-col pt-[30px] gap-x-[30px]">
          <div className="w-full flex-shrink-0">
            <h1 className="select-none text-[6.5vw] font-CocoGothic text-milk-white leading-[86%] uppercase">
              {title}
            </h1>
            <p className="select-none font-VisbyCF uppercase text-[30px] pt-2">
              {type}
            </p>
            <p className="select-none font-VisbyCF uppercase italic pt-2 pb-[27px]">
              Programs used: {programsUsed}
            </p>
            <h3 className="select-none font-VisbyCF 1600xl:pt-[30px] pb-[9px] text-[30px] uppercase">
              Summary
            </h3>
            <div className="flex-col justify-end w-full">
              {summary}
              <div className="flex pt-[50px] select-none">
                <Image
                  src={"assets/images/whitestar.svg"}
                  height="100"
                  width="83"
                  alt="star icon"
                />
                <Image
                  src={"assets/images/whitestar.svg"}
                  height="100"
                  width="83"
                  alt="star icon"
                />
                <Image
                  src={"assets/images/whitestar.svg"}
                  height="100"
                  width="83"
                  alt="star icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Twocolproject;
