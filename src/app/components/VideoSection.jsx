"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

export function VideoSection() {
  const videoRef = useRef(null);
  const videoSecRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 1024); // Only desktop (larger than iPad)
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // Video animation - Scaling on scroll (desktop)
  useGSAP(
    () => {
      if (isDesktop) {
        gsap.from(videoRef.current, {
          y: -500,
          scale: 0.14,
          duration: 2,
          borderRadius: "50rem",
          scrollTrigger: {
            trigger: videoSecRef.current,
            start: "top 60%",
            end: "top 80%",
            toggleActions: "play none none none",
            scrub: 2,
            pin: true,
            markers: false,
            onEnter: () => {
              setPlayVideo(true); // Load video when section is visible
              gsap.to(videoRef.current, {
                y: 0,
                scale: 1
              });
            }
          }
        });
      } else {
        gsap.from(videoRef.current, {
          y: 50,
          opacity: 0,
          duration: 2,
          delay: 3,
          ease: "Expo.easeOut"
        });
        setPlayVideo(true); // Load immediately on mobile
      }
    },
    { scope: videoSecRef, dependencies: [isDesktop] }
  );

  return (
    <section id="video-sec" ref={videoSecRef} className="video-sec" aria-label="Scroll to video section">
      <div className="container">
        <div className="video-wrapper" ref={videoRef}>
          {playVideo ? (
            <video autoPlay loop muted playsInline preload="none">
              <source src="/video/intro-video.webm" type="video/webm" />
              <source src="/video/intro-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src="/video/video-thumbnail.webp" alt="Intro Video Preview" width="100%" height="auto" loading="lazy" />
          )}
        </div>
      </div>
    </section>
  );
}
