"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";

export function PortfolioLightbox({ ...images }) {
  const [open, setOpen]   = useState(false);
  const [index, setIndex] = useState(0);

  // Flatten {img1,img2,…} to an array & drop empties
  const imageArray = Object.values(images).filter(Boolean);

  return (
    <>
      <section className="sm-featured-demos-sec">
        <div className="container">
          {/* ⬇️ masonry class instead of grid-3 */}
          <div className="sm-featured-demos masonry-3-col">
            {imageArray.map((img, i) => (
              <div
                className="item"
                key={i}
                onClick={() => { setIndex(i); setOpen(true); }}
              >
                {/* 
                  width/height keep Next.js happy ⇒ intrinsic sizing,
                  but we let CSS drive the final width (100%) so heights vary.
                */}
                <Image
                  src={img}
                  alt={`Image ${i + 1}`}
                  width={500}
                  height={500}
                  sizes="(max-width:640px) 100vw,
                         (max-width:1024px) 50vw,
                         33vw"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={imageArray.map((src) => ({ src }))}
        plugins={[Captions]}
      />
    </>
  );
}
