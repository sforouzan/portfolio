"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
 
export function CarouselCustomNavigation({slides}) {
  return (
    <div>
      {slides.length > 1 ? 
      (
      <Carousel
        className="rounded-xl"
        transition={{ type: "spring", mass: 0.5}}
        navigation={({ setActivendex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {slides.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="slider image"
            className="h-full w-full object-cover"
          />
        ))}
      </Carousel>
      ) 
      :
      (
        <Image className="rounded-[10px] h-full w-full" src={slides[0]} width={1500} height={1500} alt="Project Image" />
      )}
    </div>
  );
}