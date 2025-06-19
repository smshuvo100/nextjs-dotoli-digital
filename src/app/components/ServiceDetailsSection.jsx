"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export function ServiceDetailsSection({ img, heading, text }) {
  const sectionRef = useRef(null);
  const imgBoxRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });

    tl.from(imgBoxRef.current, {
      scale: 0.95,
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out"
    })
      .from(
        headingRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out"
        },
        "-=0.6"
      )
      .from(
        textRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out"
        },
        "-=0.4"
      );
  }, []);

  return (
    <section className="work-sec1" ref={sectionRef}>
      <div className="container-w1">
        <div className="img-text-box">
          <div className="img-box" ref={imgBoxRef}>
            <Image src={img} alt="Visual" width="1240" height="700" />
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
