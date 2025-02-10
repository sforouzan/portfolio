import classNames from "classnames";
import Image from "next/image";

const Footer = ({ theme }) => {
  return (
    <footer className="pb-20">
      <hr className={classNames("border-none m-0 w-full h-2",
        {
          'bg-white': theme === 'dark',
          'bg-custom-black': theme === 'light',
        }
      )} />
      <h2 className="font-CocoGothic text-heading uppercase">Contact</h2>
      <ul>
        <li> 
          <a className="font-VisbyMed uppercase text-3xl md:text-[70px] leading-snug flex item-center gap-4 group" href="/"><span className="hidden group-hover:block">
            <Image className="w-full mt-4 max-w-[40px] md:max-w-[55px]" src={'assets/images/whitestar.svg'} height='100' width='83' alt="star icon" />
          </span>Email</a>
        </li>
        <li>
          <a className="font-VisbyMed uppercase text-3xl md:text-[70px] leading-snug flex item-center gap-4 group" href="/"><span className="hidden group-hover:block">
            <Image className="w-full mt-4 max-w-[40px] md:max-w-[55px]" src={'assets/images/whitestar.svg'} height='100' width='83' alt="star icon" />
          </span>Linkedin</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
