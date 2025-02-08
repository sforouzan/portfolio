"use client";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
const Navigation = ({isSticky = true}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={classNames("z-[999]",
      {
        'sticky top-0 pt-8 px-[15px] md:px-[40px]': !!isSticky, 
      })}>
      <div className="flex justify-between">
        <a href="/">
          <Image className="w-full max-w-[45px] md:max-w-[59px]" src={'/assets/images/whitelogo.svg'} alt="logo" height="61" width="59" />
        </a>
        <div className="relative">
          <button className="font-VisbyMed cursor-pointer border-2 rounded-full border-milk-white px-[16px] md:px-[20px] py-[10px] text-[14px] md:text-[16px] leading-snug self-center uppercase relative z-[2] min-w-[80px] md:min-w-[100px] text-center bg-custom-black" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Menu'}
          </button>
          {isOpen &&
            <menu className="border-2 border-milk-white rounded-[25px] absolute -top-4 -right-4 p-5 pb-4 w-[170px] bg-custom-black">
              <div className="pt-12">
                <ul className="flex flex-col items-end pr-0.5 uppercase text-[16px]">
                  <li>
                    <a className="font-VisbyMed hover:underline underline-offset-4 decoration-1" href="/">Home</a>
                  </li>
                  <li>
                    <a className="font-VisbyMed hover:underline underline-offset-4 decoration-1" href="#">About</a>
                  </li>
                  <li>
                    <a className="font-VisbyMed hover:underline underline-offset-4 decoration-1" href="/projects">Projects</a>
                  </li>
                </ul>
                <div className="flex justify-end pt-3">
                  <Image src={'assets/images/whitestar.svg'} height='33' width='28' alt="star icon" />
                  <Image src={'assets/images/whitestar.svg'} height='33' width='28' alt="star icon" />
                  <Image src={'assets/images/whitestar.svg'} height='33' width='28' alt="star icon" />
                </div>
              </div>
            </menu>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
