import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export function WhoWeAre({
  title1,
  title2,
  paragraph,
  btn_text,
  btn_link,
  img,
  smclass,
}) {
  const whoWeAreRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // Text 1 animation
  useGSAP(
    () => {
      gsap.from(text1Ref.current, {
        x: 100,
        duration: 2,
        ease: "power1.inOut",
        backgroundPositionX: "100%",
        scrollTrigger: {
          trigger: whoWeAreRef.current,
          start: "top 40%",
          end: "bottom 80%",
          scrub: 2,
        },
      });
    },
    { scope: whoWeAreRef }
  );

  // Text 2 animation
  useGSAP(
    () => {
      gsap.from(text2Ref.current, {
        x: -100,
        duration: 2,
        ease: "power1.inOut",
        backgroundPositionX: "100%",
        scrollTrigger: {
          trigger: whoWeAreRef.current,
          start: "top 40%",
          end: "bottom 80%",
          scrub: 2,
        },
      });
    },
    { scope: whoWeAreRef }
  );

  return (
    <>
      <section className="recent-work-sec who-we-are">
        <div className="container">
          <div className={`flex-box ${smclass ? smclass : ""}`}>
            <div className="text">
              <div>
                <h3 className="title-3 text-left" ref={whoWeAreRef}>
                  <span className="block sm1" ref={text1Ref}>
                    {title1}
                  </span>
                  <span className="block sm2" ref={text2Ref}>
                    {title2}
                  </span>
                </h3>
                <div className="box1">
                  <p
                    className="text-1"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />

                  {btn_link ? (
                    <div className="btn">
                      <Link href={btn_link}>{btn_text}</Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <div className="right-text">
              <div className="img-box">
                <Image
                  src={`/images/${img}`}
                  alt="loftloom"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
