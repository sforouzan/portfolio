"use client";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "app-website", label: "App/Website" },
];

const ANIMATION_DELAY_BASE_MS = 1250;
const ANIMATION_DELAY_STEP_MS = 250;
const ANIMATION_DURATION_MS = 1000;

const FilterableGallery = ({ items }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const lastIndex = Math.max(0, (items?.length ?? 1) - 1);
    const totalMs =
      ANIMATION_DELAY_BASE_MS +
      lastIndex * ANIMATION_DELAY_STEP_MS +
      ANIMATION_DURATION_MS;
    const timer = setTimeout(() => setAnimationDone(true), totalMs);
    return () => clearTimeout(timer);
  }, [items?.length]);

  return (
    <>
      <div
        role="tablist"
        aria-label="Filter featured work"
        className="relative z-20 flex flex-col md:flex-row md:flex-wrap md:justify-center gap-2 pt-8 pb-[40px]"
      >
        {FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(filter.id)}
              className={classNames(
                "font-DMSans uppercase tracking-wide text-sm md:text-base px-5 py-2 rounded-full border transition-colors duration-300 cursor-pointer",
                isActive
                  ? "bg-milk-white text-custom-black border-milk-white"
                  : "border-milk-white/40 text-milk-white hover:border-milk-white",
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items?.map((item, i) => {
          const isVisible =
            activeFilter === "all" || item.category === activeFilter;
          const delay = ANIMATION_DELAY_BASE_MS + i * ANIMATION_DELAY_STEP_MS;
          return (
            <div
              key={item.link}
              style={
                animationDone ? undefined : { animationDelay: `${delay}ms` }
              }
              className={classNames(
                "md:h-[23vw] relative rounded-[10px]",
                !animationDone && "animate-fade-up animate-once",
                {
                  "md:col-span-2": i % 4 === 0 || i % 4 === 3,
                  hidden: !isVisible,
                },
              )}
            >
              <a
                href={item.link}
                className="block w-full h-full rounded-[10px]"
              >
                {!!item.title && (
                  <div className="select-none absolute text-cardTitle flex-col font-CocoGothic text-milk-white top-0 left-0 z-10 bg-black/60 h-full w-full flex items-center justify-center rounded-[10px] opacity-0 hover:opacity-100 transition-all duration-[.5s] leading-none text-center px-4">
                    {item.title}
                    <span className="select-none font-DMSans text-[15px] xxl:text-[20px]">
                      {item.type}
                    </span>
                  </div>
                )}
                <Image
                  src={item.image}
                  alt="portfolio item"
                  fill
                  className="hidden md:block object-cover rounded-[10px]"
                />
                <Image
                  src={item.image}
                  alt="portfolio item"
                  width={800}
                  height={800}
                  className="object-cover rounded-[10px] md:hidden"
                />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilterableGallery;
