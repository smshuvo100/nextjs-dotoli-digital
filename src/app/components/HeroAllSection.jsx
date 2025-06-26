"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { HiOutlineArrowSmDown } from "react-icons/hi";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
export function HeroAllSection({ title1, title2, description, id, btn_text, btn_link, onBtnClick }) {
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const textRef = useRef(null);

  const heroWrapperRef = useRef(null);
  // title 1 animation

  /* 
translate: none; rotate: none; scale: none; filter: none; transform: translate(0px); opacity: 1; visibility: inherit;"  
  
  */
  useGSAP(
    () => {
      gsap.from(title1Ref.current, {
        opacity: 0,
        filter: "blur(5px)",
        transform: "translate(0%, 24%) translate3d(0px, 0px, 0px) rotateX(18deg) skew(-18deg)",
        duration: 2,
        delay: 0.5,
        ease: "Expo.easeOut"
      });
    },
    { scope: heroWrapperRef }
  );
  // title 2 animation
  useGSAP(
    () => {
      gsap.from(title2Ref.current, {
        opacity: 0,
        filter: "blur(5px)",
        transform: "translate(0%, 24%) translate3d(0px, 0px, 0px) rotateX(18deg) skew(-18deg)",
        duration: 2,
        delay: 1,
        ease: "Expo.easeOut"
      });
    },
    { scope: heroWrapperRef }
  );
  // text animation
  useGSAP(
    () => {
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 2,
        delay: 1.5,
        ease: "Expo.easeOut"
      });
    },
    { scope: heroWrapperRef }
  );

  return (
    <>
      <section className="hero-wrapper sm-all" ref={heroWrapperRef}>
        <div className="container">
          <h1 className="title-1 text-center">
            <span ref={title1Ref} className="block">
              {title1}
            </span>
            <span ref={title2Ref} className="block">
              {title2}
            </span>
          </h1>
          <div className="text" ref={textRef}>
            <p className="text-center" dangerouslySetInnerHTML={{ __html: description }} />

            {btn_text && (
              <div className="btn-group">
                <div className="btn">
                  {onBtnClick ? (
                    <button type="button" onClick={onBtnClick}>
                      {btn_text}
                    </button>
                  ) : btn_link ? (
                    <Link href={btn_link}>{btn_text}</Link>
                  ) : null}
                </div>
              </div>
            )}

            <div>
              <div className="scroll-next-sec">
                <Link href={`#${id}`}>
                  <HiOutlineArrowSmDown />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
