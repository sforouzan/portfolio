"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

export default function PageGallery({ images }) {
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group relative block w-full overflow-visible cursor-pointer focus:outline-none"
            aria-label={`View page ${i + 1} larger`}
          >
            <Image
              src={src}
              alt={`Jeto article page ${i + 1}`}
              width={1000}
              height={1300}
              className="select-none w-full h-auto transition-transform duration-300 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Article page preview"
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
            src={images[activeIndex]}
            alt={`Jeto article page ${activeIndex + 1} enlarged`}
            width={2000}
            height={2600}
            className="select-none h-screen w-auto max-w-[100vw] object-contain"
            priority
          />
        </div>
      )}
    </>
  );
}
