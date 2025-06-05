import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function NewsTracker() {
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
  /* seo . branding . website development . seo . branding . website development
  seo . branding . website development
  */
  return (
    <section className="news-tracker" ref={newsTrackerRef}>
      <div className="ticker" ref={track1Ref}>
        <h2 className="ticker__run title-3">
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
        </h2>
      </div>

      <div className="ticker arabic" ref={track2Ref}>
        <h2 className="ticker__run title-3">
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
          <span>seo . branding . website development</span>
        </h2>
      </div>
    </section>
  );
}
