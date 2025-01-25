"use client";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
const Navigation = ({isSticky = true}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={classNames("z-[999]",
      {
        'sticky top-0 pt-8 px-5 xl:px-[40px]': !!isSticky, 
      })}>
      <div className="flex justify-between">
        <a href="/">
          <Image src={'/assets/images/logo.svg'} alt="logo" height="61" width="59" />
        </a>
        <div className="relative">
          <button className="cursor-pointer border-2 rounded-full border-custom-black px-[20px] py-[10px] text-[16px] leading-snug self-center uppercase relative z-[2] min-w-[100px] text-center bg-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Menu'}
          </button>
          {isOpen &&
            <menu className="border-2 border-custom-black rounded-[25px] absolute -top-4 -right-4 p-5 pb-4 w-[170px] bg-white">
              <div className="pt-12">
                <ul className="flex flex-col items-end pr-0.5 uppercase text-[16px]">
                  <li>
                    <a className="hover:underline underline-offset-4 decoration-1" href="/">Home</a>
                  </li>
                  <li>
                    <a className="hover:underline underline-offset-4 decoration-1" href="#">About</a>
                  </li>
                  <li>
                    <a className="hover:underline underline-offset-4 decoration-1" href="/projects">Projects</a>
                  </li>
                </ul>
                <div className="flex justify-end pt-3">
                  <Image src={'assets/images/star.svg'} height='33' width='28' alt="star icon" />
                  <Image src={'assets/images/star.svg'} height='33' width='28' alt="star icon" />
                  <Image src={'assets/images/star.svg'} height='33' width='28' alt="star icon" />
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
