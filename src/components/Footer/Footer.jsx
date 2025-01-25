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
      <h2 className="text-heading uppercase">Contact</h2>
      <ul>
        <li> 
          <a className="uppercase text-[70px] leading-snug flex item-center gap-4 group" href="/"><span className="hidden group-hover:block">
          {theme === 'light' ? 
            <Image src={'assets/images/star.svg'} height='100' width='83' alt="star icon" />
          :
          
          (<svg width="83" height="100" viewBox="0 0 83 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_58_225)">
            <path d="M83 50.0193C50.2935 55.8607 46.3766 60.619 41.5196 100.039C36.6626 60.6576 32.7065 55.8994 0.0391846 50.0193C32.7457 44.1779 36.6626 39.4197 41.5196 0C46.3766 39.381 50.3327 44.1393 83 50.0193Z" fill="#ffffff"/>
            </g>
            <defs>
            <clipPath id="clip0_58_225">
            <rect width="83" height="100" fill="white"/>
            </clipPath>
            </defs>
            </svg>)}
          </span>Email</a>
        </li>
        <li>
          <a className="uppercase text-[70px] leading-snug flex item-center gap-4 group" href="/"><span className="hidden group-hover:block">
            {theme === 'light' ? 
            <Image src={'assets/images/star.svg'} height='100' width='83' alt="star icon" />
          :
          
          (<svg width="83" height="100" viewBox="0 0 83 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_58_225)">
            <path d="M83 50.0193C50.2935 55.8607 46.3766 60.619 41.5196 100.039C36.6626 60.6576 32.7065 55.8994 0.0391846 50.0193C32.7457 44.1779 36.6626 39.4197 41.5196 0C46.3766 39.381 50.3327 44.1393 83 50.0193Z" fill="#ffffff"/>
            </g>
            <defs>
            <clipPath id="clip0_58_225">
            <rect width="83" height="100" fill="white"/>
            </clipPath>
            </defs>
            </svg>)}
            
          </span>Linkedin</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
