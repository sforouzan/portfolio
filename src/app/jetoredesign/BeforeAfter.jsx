"use client";

import { useEffect, useRef } from "react";

function AutoplayVideo({ src, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}

export default function BeforeAfter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <div
        className="rounded-[10px] p-5 md:p-6"
        style={{ backgroundColor: "#2F2F2F" }}
      >
        <p className="select-none font-DMSans uppercase tracking-wide text-milk-white text-[14px] md:text-[15px] mb-4">
          Before
        </p>
        <AutoplayVideo
          src="/assets/videos/jetovid-before.mp4"
          className="w-full h-auto rounded-[6px] block"
        />
      </div>
      <div
        className="rounded-[10px] p-5 md:p-6"
        style={{ backgroundColor: "#B0C0BE" }}
      >
        <p className="select-none font-DMSans uppercase tracking-wide text-custom-black text-[14px] md:text-[15px] mb-4">
          After
        </p>
        <AutoplayVideo
          src="/assets/videos/jetovid-after.mp4"
          className="w-full h-auto rounded-[6px] block"
        />
      </div>
    </div>
  );
}
