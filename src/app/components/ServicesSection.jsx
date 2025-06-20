import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection({ title, description, list1, list2, btn_text, btn_link }) {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".services-sec .box", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-sec .box",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section className="services-sec" ref={sectionRef}>
      <div className="container">
        <div className="box">
          <div className="coll sm1">
            <h2 className="title-2" dangerouslySetInnerHTML={{ __html: title }} />
          </div>
          <div className="coll sm2">
            <p className="text-1">{description}</p>
            <div className="list-flex">
              <div className="list-text" dangerouslySetInnerHTML={{ __html: list1 }} />
              <div className="list-text" dangerouslySetInnerHTML={{ __html: list2 }} />
            </div>
          </div>
          {btn_link && (
            <div className="btn">
              <Link href={btn_link}>{btn_text}</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
