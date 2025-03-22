"use client";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const Navigation = ({isSticky = true}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 
  const isHomePage = pathname === "/";
  return (
    <nav
      className={classNames("z-[999] w-full", {
        "fixed top-0 pt-8 px-[15px] md:px-[40px]": isHomePage, 
        "sticky top-0 pt-8 px-[15px] md:px-[40px]": !isHomePage && isSticky, 
      })}
    >
      <div className="flex justify-between w-full">
        <a href="/">
          <Image className="w-full max-w-[45px] md:max-w-[59px]" src={'/assets/images/whitelogo.svg'} alt="logo" height="61" width="59" />
        </a>
        <div className="relative">
          <button
            className="font-VisbyMed cursor-pointer border-2 rounded-full border-milk-white px-[16px] md:px-[20px] py-[10px] text-[14px] md:text-[16px] leading-snug self-center uppercase relative z-[2] min-w-[80px] md:min-w-[100px] text-center bg-custom-black overflow-hidden group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative h-[20px] w-full">
              {/* Menu Text */}
              {!isOpen && (
                <>
                  <span className="absolute left-0 w-full group-hover:translate-y-[-30px] transition-all duration-300 group-hover:invisible">
                    Menu
                  </span>
                  <span className="absolute left-0 w-full translate-y-[30px] transition-all duration-300 invisible group-hover:visible group-hover:translate-y-0">
                    Menu
                  </span>
                </>
              )}

              {/* Close Text */}
              {isOpen && (
                <>
                  <span className="absolute left-0 w-full group-hover:translate-y-[-30px] transition-all duration-300 group-hover:invisible">
                    Close
                  </span>
                  <span className="absolute left-0 w-full translate-y-[30px] transition-all duration-300 invisible group-hover:visible group-hover:translate-y-0">
                    Close
                  </span>
                </>
              )}
            </div>
          </button>
          {isOpen &&
            <menu className="border-2 border-milk-white rounded-[25px] absolute -top-4 -right-4 p-5 pb-4 w-[170px] bg-custom-black">
              <div className="pt-12">
                <ul className="flex flex-col items-end pr-0.5 uppercase text-[16px]">
                  <li>
                  <a 
                    href="/" 
                    className="relative inline-block cursor-pointer font-VisbyMed text-white 
                              before:bg-white before:absolute before:-bottom-0 before:-left-0 
                              before:block before:h-[1px] before:w-full before:origin-bottom-right 
                              before:scale-x-0 before:transition before:duration-500 before:ease-in-out 
                              hover:before:origin-bottom-left hover:before:scale-x-100"
                  >
                    Home
                  </a>
                  </li>
                  <li>
                    <a 
                      className="relative inline-block cursor-pointer font-VisbyMed text-white 
                              before:bg-white before:absolute before:-bottom-0 before:-left-0 
                              before:block before:h-[1px] before:w-full before:origin-bottom-right 
                              before:scale-x-0 before:transition before:duration-500 before:ease-in-out 
                              hover:before:origin-bottom-left hover:before:scale-x-100" 
                      href="/about">About</a>
                  </li>
                  <li>
                    <a 
                      className="relative inline-block cursor-pointer font-VisbyMed text-white 
                              before:bg-white before:absolute before:-bottom-0 before:-left-0 
                              before:block before:h-[1px] before:w-full before:origin-bottom-right 
                              before:scale-x-0 before:transition before:duration-500 before:ease-in-out 
                              hover:before:origin-bottom-left hover:before:scale-x-100" 
                      href="/projects">Projects</a>
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
