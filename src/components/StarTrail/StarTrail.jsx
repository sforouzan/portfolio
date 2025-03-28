"use client";
import { useEffect } from "react";

const StarTrail = () => {
  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    const minDistance = 120; // minimum distance before a new star appears

    const createStar = (e) => {
      const distance = Math.sqrt((e.clientX - lastX) ** 2 + (e.clientY - lastY) ** 2);
      if (distance < minDistance) return; 

      lastX = e.clientX;
      lastY = e.clientY;

      const star = document.createElement("img");
      star.src = "/assets/images/star-landing.svg"; 
      star.className = "star-trail";

      // random size
      const size = Math.random() * 38 + 10;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // random opacity
      star.style.opacity = Math.random() * 0.7 + 0.02;

      // random scatter effect
      const yOffset = Math.random() * 182 - 96;

      star.style.position = "absolute";
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY + yOffset + window.scrollY}px`;
      star.style.pointerEvents = "none"; // Prevent interaction
      star.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";

      document.body.appendChild(star);

      // fade out and move slightly up
      setTimeout(() => {
        star.style.opacity = "0";
        star.style.transform = `translateY(-20px) scale(0.8)`;
      }, 10);

      // remove the star after animation
      setTimeout(() => {
        star.remove();
      }, 800);
    };

    document.documentElement.addEventListener("mousemove", createStar);

    return () => {
      document.documentElement.removeEventListener("mousemove", createStar);
    };
  }, []);

  return null; 
};

export default StarTrail;
