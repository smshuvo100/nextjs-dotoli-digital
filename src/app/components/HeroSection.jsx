import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

import { HiOutlineArrowSmDown } from "react-icons/hi";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export function HeroSection({ title1, title2, text, btn_text1, btn_link1, onBtnClick, btn_text2, btn_link2 }) {
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const textRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);
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
  // btn 1
  useGSAP(
    () => {
      gsap.from(btn1Ref.current, {
        y: 50,
        opacity: 0,
        duration: 2,
        delay: 2,
        ease: "Expo.easeOut"
      });
    },
    { scope: heroWrapperRef }
  );
  // btn 2
  useGSAP(
    () => {
      gsap.from(btn2Ref.current, {
        y: 50,
        opacity: 0,
        duration: 2,
        delay: 2.5,
        ease: "Expo.easeOut"
      });
    },
    { scope: heroWrapperRef }
  );

  return (
    <>
      <section className="hero-wrapper" ref={heroWrapperRef}>
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
            <p className="text-center" dangerouslySetInnerHTML={{ __html: text }} />
            <div>
              <div className="scroll-next-sec">
                <Link href="#video-sec">
                  <HiOutlineArrowSmDown />
                </Link>
              </div>
            </div>
          </div>
          <div className="btn-group">
            <div className="btn" ref={btn1Ref}>
              {onBtnClick ? (
                <button type="button" onClick={onBtnClick}>
                  {btn_text1}
                </button>
              ) : btn_link1 ? (
                <Link href={btn_link1}>{btn_text1}</Link>
              ) : null}
            </div>
            <div className="btn" ref={btn2Ref}>
              {btn_text2 && btn_link2 ? <Link href={btn_link2}>{btn_text2}</Link> : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
