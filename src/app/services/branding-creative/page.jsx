"use client";
import { useState } from "react";
import Footer from "../../components/Footer";
import { HeroAllSection } from "../../components/HeroAllSection";
import PopupForm from "../../components/PopupForm";
import { PortfolioLightbox } from "../../components/PortfolioLightbox";
export default function Page() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <HeroAllSection
        id="team-hero"
        title1="Branding & Creative - Design"
        title2=" That Inspires & Influences."
        description={`From concept to reality, we craft visual identities, graphics, and videos<br/> that captivate your audience. Our creative team blends artistic<br/> finesse with strategic insight to elevate your brand above the rest.`}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />
      <div id="team-hero"></div>
      <PortfolioLightbox
        img1="/images/bx1.png"
        img4="/images/bx2.png"
        img3="/images/bx3.png"
        img2="/images/bx4.png"
        img5="/images/bx5.png"
        img6="/images/bx6.png"
        img7="/images/bx7.png"
        img8="/images/bxx1.webp"
        img9="/images/bxx2.webp"
        img10="/images/bxx3.webp"
        img11="/images/bxx4.webp"
        img12="/images/bxx5.webp"
      />
      <Footer />
    </>
  );
}
