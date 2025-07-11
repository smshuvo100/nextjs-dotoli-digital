"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function PortfolioImage({ ...images }) {
  const containerRefs = useRef([]);
  const imageRefs = useRef([]);

  const imagesArray = Object.values(images);

  useEffect(() => {
    const cleanupFns = [];

    imagesArray.forEach((_, index) => {
      const container = containerRefs.current[index];
      const image = imageRefs.current[index];

      if (!container || !image) return;

      const handleMouseOver = () => {
        const heightDiff = image.offsetHeight - container.offsetHeight;

        if (heightDiff > 0) {
          // Normalize speed: 100px = 1s
          const speed = heightDiff / 300; // 300px per second
          image.style.transition = `transform ${speed}s linear`;
          image.style.transform = `translateY(-${heightDiff}px)`;
        }
      };

      const handleMouseOut = () => {
        image.style.transition = `transform 1s linear`; // consistent reset speed
        image.style.transform = "translateY(0px)";
      };

      container.addEventListener("mouseover", handleMouseOver);
      container.addEventListener("mouseout", handleMouseOut);

      cleanupFns.push(() => {
        container.removeEventListener("mouseover", handleMouseOver);
        container.removeEventListener("mouseout", handleMouseOut);
      });
    });

    return () => cleanupFns.forEach((cleanup) => cleanup());
  }, [imagesArray]);

  return (
    <section className="sm-featured-demos-sec sm">
      <div className="container">
        <div className="sm-featured-demos grid-3">
          {imagesArray.map((src, index) => (
            <div className="sm-demo-single" key={index}>
              <div className="sm-thumbaa" ref={(el) => (containerRefs.current[index] = el)}>
                <div className="c-pointer">
                  <Image ref={(el) => (imageRefs.current[index] = el)} src={src} alt={`Project ${index + 1}`} width={500} height={1000} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
