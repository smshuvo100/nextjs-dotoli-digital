"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export  function ServiceDetailsSection({ img, heading, text }) {
  const sectionRef   = useRef(null);
  const imgBoxRef    = useRef(null);
  const headingRef   = useRef(null);
  const textRef      = useRef(null);

  // animation
  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        })
        .from(imgBoxRef.current, {
          scale: 0.95,
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: "power2.out",
        })
        .from(
          headingRef.current,
          { opacity: 0, y: 30, duration: 0.8, ease: "power2.out" },
          "-=0.6",
        )
        .from(
          textRef.current,
          { opacity: 0, y: 20, duration: 0.8, ease: "power2.out" },
          "-=0.4",
        );
    },
    { scope: sectionRef }, // ⬅ cleans up automatically
  );

  return (
    <section className="work-sec1" ref={sectionRef}>
      <div className="container-w1">
        <div className="img-text-box">
          <div className="img-box" ref={imgBoxRef}>
            <Image
              src={img}
              alt={heading}
              width={1240}
              height={700}
              priority={false}
              onLoadingComplete={() => ScrollTrigger.refresh()} // ⚠️ key fix
            />
          </div>

          <div className="content">
            <h2 className="title-4" ref={headingRef}>
              <span>{heading}</span>
            </h2>
            <p className="text-1" ref={textRef}>
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
