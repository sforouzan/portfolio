// components/ScrollRevealSlider.js
//image covers rather than contained

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ScrollReveal2({image1, image2}) {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const maxScroll = sectionHeight - windowHeight;

        if (maxScroll > 0) {
          const scrollProgress = (scrollY - sectionTop) / maxScroll;
          setProgress(Math.min(Math.max(scrollProgress, 0), 1));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Reveal Section */}
      <section ref={sectionRef} className="h-[200vh]">
        <div className="sticky top-0 h-screen">
          <div className="relative w-full h-full">
            {/* Bottom Image */}
            <Image
              src={image1} // Replace with your bottom image path
              layout="fill"
              objectFit="cover"
              alt="Bottom Image"
            />
            {/* Top Image with clip-path */}
            <Image
              src={image2} // Replace with your top image path
              layout="fill"
              objectFit="cover"
              alt="Top Image"
              style={{ clipPath: `inset(0 0 0 ${progress * 100}%)` }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}