"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";

export function PortfolioLightbox({ ...images }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Convert { img1, img2, ... } into an array and filter out empty/undefined
  const imageArray = Object.values(images).filter(Boolean);

  return (
    <>
      <section className="sm-featured-demos-sec">
        <div className="container">
          <div className="sm-featured-demos grid-3">
            {imageArray.map((img, i) => (
              <div
                className="item"
                key={i}
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <Image src={img} alt={`Image ${i + 1}`} width={500} height={1000} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={imageArray.map((src) => ({ src }))} plugins={[Captions]} />
    </>
  );
}
