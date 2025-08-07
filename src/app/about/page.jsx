import Image from "next/image";

export const metadata = {
  title: "Shirin Forouzan",
  description: "UX/UI & Graphic Designer",
};

export default function Page() {
  return (
    <main className="relative 1600xl:mt-2 select-none pb-20 px-[18vw] 2xl:px-[17vw]">
      <div className="flex flex-col mb-60 md:flex-row 1600xl:flex 1600xl:pt-[30px] gap-x-[30px]">
        <div className="animate-fade-up animate-once animate-delay-[250ms]">
          <Image
            className="rounded-[10px] md:max-h-[38vw] 1600xl:max-h-[40vw] md:sticky md:top-[96px]"
            src={"/assets/images/self1.png"}
            height="1514"
            width="1170"
            alt="self"
            layout="responsive"
          />
        </div>
        <div className="flex flex-col md:flex-1 animate-fade-up animate-once animate-delay-[400ms]">
          {" "}
          <div>
            {" "}
            <h1 className="mt-10 mb-15 md:mb-5 md:ml-10 md:mt-3 text-[7vw] font-CocoGothic text-milk-white leading-[86%] uppercase">
              {" "}
              <span className="animate-fade-down animate-once animate-delay-[500ms]">
                H
              </span>
              <span className="animate-fade-down animate-once animate-delay-[600ms]">
                e
              </span>
              <span className="animate-fade-down animate-once animate-delay-[700ms]">
                y
              </span>
              <span className="animate-fade-down animate-once animate-delay-[800ms]">
                !
              </span>{" "}
              <span className="animate-fade-down animate-once animate-delay-[900ms]">
                I
              </span>
              <span className="animate-fade-down animate-once animate-delay-[1000ms]">
                '
              </span>
              <span className="animate-fade-down animate-once animate-delay-[1100ms]">
                m
              </span>
              <span className="flex items-center">
                <span className="animate-fade-down animate-once animate-delay-[1200ms]">
                  S
                </span>
                <span className="animate-fade-down animate-once animate-delay-[1300ms]">
                  h
                </span>
                <span className="animate-fade-down animate-once animate-delay-[1400ms]">
                  i
                </span>
                <span className="animate-fade-down animate-once animate-delay-[1500ms]">
                  r
                </span>
                <span className="animate-fade-down animate-once animate-delay-[1600ms]">
                  i
                </span>
                <span className="animate-fade-down animate-once animate-delay-[1700ms]">
                  n
                </span>
                <span className="animate-fade-down animate-once animate-delay-[1700ms]">
                  <Image
                    className="ml-2 w-[19px] md:w-[55px] animate-fade animate-infinite animate-duration-[1500ms] animate-delay-[2100ms] animate-ease-in animate-alternate"
                    src={"assets/images/whitestar.svg"}
                    height="100"
                    width="83"
                    alt="star icon"
                  />
                </span>
              </span>
            </h1>
          </div>
          <div className="md:ml-10 animate-fade-up animate-once animate-delay-[2100ms]">
            <a
              href="https://drive.google.com/file/d/1uW-tqSKKrC7ihe86RKhw0wi4yDhtONZG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-DMSans font-medium cursor-pointer border-2 rounded-full border-milk-white px-[16px] md:px-[20px] py-[10px] text-[14px] md:text-[16px] leading-snug self-center uppercase relative z-[2] min-w-[180px] md:min-w-[180px] text-center bg-custom-black overflow-hidden group md:mb-5 mt-10 md:mt-2">
                <div className="relative h-[20px] w-full">
                  {/* Front Text */}
                  <span className="absolute left-0 w-full group-hover:translate-y-[-30px] transition-all duration-300 group-hover:invisible">
                    VIEW RESUME
                  </span>
                  {/* Back Text */}
                  <span className="absolute left-0 w-full translate-y-[30px] transition-all duration-300 invisible group-hover:visible group-hover:translate-y-0">
                    VIEW RESUME
                  </span>
                </div>
              </button>
            </a>
            <h4 className="font-DMSans uppercase text-[5vw] md:text-[30px] pt-2 mb-2">
              A little about me...
            </h4>
            <p className="font-DMSans flex flex-col gap-y-5 mb-5 text-justify">
              I am a UX/UI + Graphic Designer, with a background in digital
              media and interior design. My journey through graphic design,
              UX/UI, and interior design has allowed me to develop a versatile
              skill set, rooted in my lifelong appreciation for all things
              creative. Driven by a passion for visual communication and
              crafting brand identities, every project to me is an opportunity
              to shape perceptions, tell stories, and leave a lasting
              impression.{" "}
            </p>
            <p className="font-DMSans flex flex-col gap-y-5 mb-5 text-justify">
              When I’m not designing, you can find me shopping at vintage
              stores, playing a cozy video game or dusting off my old guitar. My
              closest friends know me for my affinity for art history, fashion,
              fantasy and all things celestial or moon themed.{" "}
            </p>
            <p className="font-DMSans flex flex-col gap-y-5 text-justify">
              My design philosophy is shaped by my sentimentality and empathy;
              the people and the experiences I cherish fuel my creativity. I’m
              always open to new connections that spark fresh ideas and allow me
              to create something meaningful, please feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
