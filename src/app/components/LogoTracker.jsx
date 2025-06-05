import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export function LogoTracker() {
  const newsTrackerRef = useRef(null);
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  useGSAP(
    () => {
      // Initialize the ticker animations
      function setupTicker(tickerElement, isRTL = false) {
        const tickerRun = tickerElement.querySelector(".ticker__run");
        const textSections = tickerRun.querySelectorAll("span");
        const tickerInnerWidth = textSections[0].offsetWidth;
        const tickerScrollSpanCount = textSections.length;
        const tickerScrollSpanWidth = tickerInnerWidth * tickerScrollSpanCount;
        const tickerScrollWidth = -tickerInnerWidth;
        const tickerDuration = Math.abs(tickerScrollSpanWidth / 1000);

        let direction = `+=${tickerScrollWidth}`;
        if (isRTL) {
          direction = `-=${tickerScrollWidth}`;
        }

        gsap.to(tickerRun, {
          x: direction,
          ease: "none",
          duration: tickerDuration,
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % tickerScrollWidth)
          }
        });
      }

      // Setup tickers after component mounts
      if (track1Ref.current && track2Ref.current) {
        setupTicker(track1Ref.current);
        setupTicker(track2Ref.current, true); // Second one moves right-to-left
      }
    },
    { scope: newsTrackerRef }
  );

  return (
    <section className="news-tracker logo-tracker" ref={newsTrackerRef}>
      <h2 className="text-center text-3">We've worked for...</h2>
      <div className="ticker" ref={track1Ref}>
        <div className="ticker__run">
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
        </div>
      </div>

      <div className="ticker arabic" ref={track2Ref}>
        <div className="ticker__run ">
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
          <span>
            <Image src="/images/casting-networks.svg" alt="Logo" width={160} height={60} />
          </span>
        </div>
      </div>
    </section>
  );
}
