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
        
        img3="/images/bxx4.webp"
        img4="/images/bxx5.webp"
        img5="/images/kqpa1.webp"
        img6="/images/kqpa2.webp"
        img7="/images/kqpa3.webp"
        img8="/images/kqpa4.webp"
        img9="/images/kqpa5.webp"
        img10="/images/kqpa6.webp"
        img11="/images/kqpa7.webp"
        img12="/images/kqpa8.webp"
        img13="/images/kqpa9.webp"
        img14="/images/kqpa10.webp"
        img15="/images/kqpa11.webp"
        img16="/images/kqpa12.webp"
        img17="/images/kqpa13.webp"
        img18="/images/kqpa14.webp"
        img19="/images/kqpa15.webp"
        img20="/images/kqpa16.webp"
        img1="/images/bxx2.webp"
        img2="/images/bxx3.webp"
      />
      <Footer />
    </>
  );
}
