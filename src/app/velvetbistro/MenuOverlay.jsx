"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const MENUS = [
  "/assets/images/velvet-bistro-body-menu-1.png",
  "/assets/images/velvet-bistro-body-menu-2.png",
];

export default function MenuOverlay() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close]);

  return (
    <>
      <div className="relative w-full overflow-hidden rounded-[10px]">
        <Image
          src="/assets/images/velvet-bistro-body-bg.png"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative flex flex-col md:flex-row-reverse md:justify-start items-center md:items-center gap-6 md:gap-[2.5%] px-[6%] md:px-[5%] py-[8%] md:py-[3%]">
          {MENUS.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group relative block w-full md:w-[30%] cursor-pointer focus:outline-none"
              aria-label={`View menu page ${i + 1} larger`}
            >
              <Image
                src={src}
                alt={`Velvet Bistro menu page ${i + 1}`}
                width={1000}
                height={1500}
                className="select-none w-full h-auto transition-transform duration-300 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
              />
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu page preview"
          onClick={close}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-custom-black/90 backdrop-blur-sm animate-fade animate-duration-200"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close preview"
            className="absolute top-4 right-4 md:top-6 md:right-6 text-milk-white border-2 border-milk-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-DMSans text-[18px] hover:bg-milk-white hover:text-custom-black transition-colors duration-200 z-[1]"
          >
            ×
          </button>
          <Image
            onClick={(e) => e.stopPropagation()}
            src={MENUS[activeIndex]}
            alt={`Velvet Bistro menu page ${activeIndex + 1} enlarged`}
            width={2000}
            height={3000}
            className="select-none h-screen w-auto max-w-[100vw] object-contain"
            priority
          />
        </div>
      )}
    </>
  );
}
