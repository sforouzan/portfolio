"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ParallaxHero = () => {
  const heroRef = useRef(null);
  const leftImageRef = useRef(null);
  const bgImageContainer = useRef(null);
  const rightImageRef = useRef(null);
  const contentRef = useRef(null);

  const icons = [
    // left side:
    {
      src: "/assets/images/star-landing.svg",
      position: "top-[50px] left-[10%]",
      size: "6%",
    },
    {
      src: "/assets/images/star-landing.svg",
      position: "top-[100px] left-[13%]",
      size: "0%",
    },
    {
      src: "/assets/images/star-landing.svg",
      position: "top-[400px] left-[14%]",
      size: "5%",
    },
    {
      src: "/assets/images/star-landing.svg",
      position: "top-[250px] left-[6%]",
      size: "7%",
    },

    // right side:
    {
      src: "/assets/images/star-landing.svg",
      position: "top-[80px] right-[10%]",
      size: "9%",
    },
    {
      src: "/assets/images/star-landing.svg",
      position: "top-[130px] right-[16%]",
      size: "5%",
    },
  ];

  const iconRefs = useRef(icons.map(() => React.createRef()));

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set up scroll animations
    gsap.to(leftImageRef.current, {
      x: "-100%",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    gsap.to(rightImageRef.current, {
      x: "100%",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Cursor movement tracking
    const handleMouseMove = (e) => {
      const { clientX } = e;
      const { clientY } = e;
      const mouseX = clientX;
      const mouseY = clientY;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;

      gsap.to(bgImageContainer.current, {
        x: -xPos,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });

      iconRefs.current.forEach((iconRef) => {
        if (iconRef.current) {
          const rect = iconRef.current.getBoundingClientRect();
          const iconCenterX = rect.left + rect.width / 2;
          const iconCenterY = rect.top + rect.height / 2;
          const distance = Math.sqrt(
            (mouseX - iconCenterX) ** 2 + (mouseY - iconCenterY) ** 2
          );
          const maxDistance = 400; // Distance threshold for max opacity change
          const opacity = Math.max(0.25, 1 - distance / maxDistance);
          iconRef.current.style.opacity = opacity;

          iconRef.current.classList.toggle('animate-pulse', distance <= maxDistance);
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-[40vw] lg:h-[115vh] min-h-[350px] w-full overflow-hidden flex items-center justify-center bg-flat-bg bg-cover bg-top animate-fade animate-duration-[3000ms] animate-delay-[1000]"
    >
      {/* Left background image */}
      <div
        ref={bgImageContainer}
        className="absolute bottom-0 left-0 h-full w-full top-[30px]"
        style={{
          willChange: "transform",
        }}
      >
        <div
          ref={leftImageRef}
          className="absolute bottom-0 -left-[25vw] lg:-left-[190px] h-full w-3/5"
          style={{
            willChange: "transform",
          }}
        >
          <Image
            className="h-full w-auto object-contain"
            src={"/assets/images/leftclouds.png"}
            height={1000}
            width={1000}
            alt="left cloud bg"
          />
        </div>

        {/* Right background image */}
        <div
          ref={rightImageRef}
          className="absolute -bottom-[50px] lg:-bottom-[100px] -right-[25vw] lg:-right-[210px] h-full w-3/5"
          style={{
            willChange: "transform",
          }}
        >
          <Image
            className="h-full w-auto ml-auto object-contain"
            src={"/assets/images/rightclouds.png"}
            height={1000}
            width={1000}
            alt="right cloud bg"
          />
        </div>
      </div>

      {/* Center content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center rounded-lg text-white pt-[90x] animate-fade-up animate-duration-[2300] animate-delay-[2000]"
      >
        <div className="pt-20 md:pt-0">
          <h1 className="select-none font-CocoGothic text-[14vw] xl:text-hero leading-[60%] md:leading-[57%] relative text-center">
            <span className="flex flex-col items-center justify-center md:flex-row-reverse">
              <Image
                className="mb-4 max-w-[80px] md:max-w-[9vw] md:absolute -top-3 md:left-[2vw] 2xl:left-[40px] md:mb-0"
                src={"assets/images/stargroup.svg"}
                alt="starsymbol"
                height="100"
                width="83"
                layout="responsive"
              />
              <span className="text-center">shirin</span>
            </span>{" "}
            <span>forouzan</span>
          </h1>
          <h2 className="mb-[60px] select-none font-VisbyCF text-[22px] md:mb-0 md:text-heroSub leading-tight text-center md:text-center pt-1 md:pt-0">
            UX/UI & GRAPHIC DESIGNER.
          </h2>
          {/* <p className="select-none font-VisbyCF text-[20px] leading-tight text-center md:text-center pt-1 md:pt-0">This portfolio site is under construction!🚧⚠️</p> */}
        </div>
      </div>
      {/* Interactive Icons */}
      {icons.map((icon, index) => (
        <div
        key={index}
        ref={iconRefs.current[index]}
        className={`absolute ${icon.position} z-10 lg:mt-[90px] animate-infinite`}
        style={{
          opacity: 0.25,
          transition: "opacity 0.2s ease",
          width: "auto",
          height: icon.size,
          minWidth: "30px",
          minHeight: "30px",
          animationDuration: `${Math.round(600 + Math.random() * 400)}ms`,
        }}
      >
          <img src={icon.src} alt={`icon-${index}`} className="w-full h-full" />
        </div>
      ))}
      <div className="bg-gradient-to-b from-transparent to-custom-black w-full absolute bottom-0 left-0 h-[100px]"></div>
    </div>
  );
};

export default ParallaxHero;
