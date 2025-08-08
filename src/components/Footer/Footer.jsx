import classNames from "classnames";
import Image from "next/image";

const Footer = ({ theme }) => {
  return (
    <footer className="pb-20 px-[18vw] 2xl:px-[17vw]">
      <hr
        className={classNames("border-none m-0 w-full h-2", {
          "bg-white": theme === "dark",
          "bg-custom-black": theme === "light",
        })}
      />
      <h2 className="font-CocoGothic text-heading uppercase">Contact</h2>
      <ul>
        <li>
          <a
            className="font-DMSans font-medium uppercase text-3xl md:text-[70px] leading-snug flex item-center gap-2 md:gap-3 group relative w-fit"
            href="mailto: shirin.forouzan@yahoo.com"
          >
            <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-[280ms]">
              <Image
                className="w-full mt-3 md:mt-4 max-w-[19px] md:max-w-[55px]"
                src={"assets/images/whitestar.svg"}
                height="100"
                width="83"
                alt="star icon"
              />
            </span>
            <span className="pl-0 group-hover:pl-[30px] md:group-hover:pl-[70px] sm:group-hover:pl-[60px] transition-all duration-[300ms]">
              Email
            </span>
          </a>
        </li>
        <li>
          <a
            className="font-DMSans font-medium uppercase text-3xl md:text-[70px] leading-snug flex item-center gap-2 md:gap-3 group w-fit"
            href="https://www.linkedin.com/in/shirinforouzan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-[280ms]">
              <Image
                className="w-full mt-3 md:mt-4 max-w-[19px] md:max-w-[55px]"
                src={"assets/images/whitestar.svg"}
                height="100"
                width="83"
                alt="star icon"
              />
            </span>
            <span className="pl-0 group-hover:pl-[30px] md:group-hover:pl-[70px] sm:group-hover:pl-[60px] transition-all duration-[300ms]">
              Linkedin
            </span>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
