import Image from "next/image";
import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export function RightImgSection({ title, description, images, btn_text, btn_link }) {
  const rightImgSecRef = useRef(null);
  const contentRef = useRef(null);
  const images1Ref = useRef(null);

  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // content animation
  useGSAP(
    () => {
      gsap.from(contentRef.current, {
        y: 250,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: rightImgSecRef.current,
          start: "top 70%",
          end: "bottom 90%",
          scrub: 2
        }
      });
    },
    { scope: rightImgSecRef }
  );

  // images1 animation
  useGSAP(
    () => {
      gsap.from(images1Ref.current, {
        x: 350,
        rotate: 10,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: rightImgSecRef.current,
          start: "top 70%",
          end: "bottom 90%",
          scrub: 2
        }
      });
    },
    { scope: rightImgSecRef }
  );

  return (
    <>
      <section className="right-img-section" ref={rightImgSecRef}>
        <div className="container">
          <div className="flex-box">
            <div className="content" ref={contentRef}>
              <h2 className="title-2"> {title}</h2>
              <p className="text-1" dangerouslySetInnerHTML={{ __html: description }} />

              <div className="btn">
                {/* <Link href="/about">Explore work</Link> */}
                <Link href={btn_link}>{btn_text}</Link>
              </div>
            </div>
            <div className="img-box">
              <Link href={btn_link}>
                <Image ref={images1Ref} src={`/images/${images}`} alt="loftloom" width={1500} height={1000} priority />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
