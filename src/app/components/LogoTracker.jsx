"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

// ✅ Each logo has its own dimensions
const logos = [
  { src: "/images/brand-logo/wsj-short-brand.svg", width: 180, height: 80 },
  { src: "/images/brand-logo/bloomberg.svg", width: 160, height: 80 },
  { src: "/images/brand-logo/z-logo-default.svg", width: 150, height: 80 },
  { src: "/images/brand-logo/mansionglobal.svg", width: 300, height: 80 },
  { src: "/images/brand-logo/forbes.svg", width: 140, height: 80 },
  { src: "/images/brand-logo/logo-wide-transparent-500.svg", width: 200, height: 80 },
  { src: "/images/brand-logo/zillow.svg", width: 160, height: 80 },
  { src: "/images/brand-logo/wsj-short-brand.svg", width: 180, height: 80 },
  { src: "/images/brand-logo/bloomberg.svg", width: 160, height: 80 },
  { src: "/images/brand-logo/z-logo-default.svg", width: 150, height: 80 },
  { src: "/images/brand-logo/mansionglobal.svg", width: 300, height: 80 },
  { src: "/images/brand-logo/forbes.svg", width: 140, height: 80 },
  { src: "/images/brand-logo/logo-wide-transparent-500.svg", width: 200, height: 80 },
  { src: "/images/brand-logo/zillow.svg", width: 160, height: 80 }
];

export function LogoTracker() {
  const ticker1Ref = useRef(null);
  const ticker2Ref = useRef(null);

  // Animate one ticker
  const animateTicker = (ref, reverse = false) => {
    const el = ref.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;

    gsap.fromTo(
      el,
      { x: 0 },
      {
        x: reverse ? `+=${totalWidth}` : `-=${totalWidth}`,
        duration: totalWidth / 100,
        ease: "none",
        repeat: -1
      }
    );
  };

  useGSAP(() => {
    animateTicker(ticker1Ref, false); // Top ticker: left to right
    animateTicker(ticker2Ref, true); // Bottom ticker: right to left
  });

  const renderLogos = () => (
    <>
      {[...logos, ...logos].map((logo, index) => (
        <span key={index} className="logo-wrapper">
          <Image
            src={logo.src}
            alt="Logo"
            width={logo.width}
            height={logo.height}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              console.warn("Missing image:", logo.src);
            }}
          />
        </span>
      ))}
    </>
  );

  return (
    <section className="news-tracker logo-tracker">
      <h2>We've worked for...</h2>

      <div className="ticker-wrapper">
        <div className="ticker">
          <div className="ticker__run" ref={ticker1Ref}>
            {renderLogos()}
          </div>
        </div>

        <div className="ticker reverse">
          <div className="ticker__run" ref={ticker2Ref}>
            {renderLogos()}
          </div>
        </div>
      </div>
    </section>
  );
}
