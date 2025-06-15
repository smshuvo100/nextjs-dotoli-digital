import { HeroAllSection } from "../../components/HeroAllSection";
import { PortfolioLightbox } from "../../components/PortfolioLightbox";
/* 
PortfolioImage.jsx
*/
export default function Page() {
  return (
    <>
      <HeroAllSection
        id="secrion1"
        title1="Data-Driven Marketing that"
        title2="Dominates Your Market."
        description={`From SEO to social media, our expert team leverages AI insights <br/>and creative strategy to grow your traffic, leads, and revenue.<br/> We don't just run campaigns - we craft digital success stories.`}
      />

      <PortfolioLightbox
        img1="/images/dm1.webp"
        img2="/images/dm2.webp"
        img3="/images/dm3.webp"
        img4="/images/dm4.webp"
        img5="/images/dm5.webp"
        img6="/images/dm6.webp"
        img7="/images/dm7.webp"
        img8="/images/dm8.webp"
      />
    </>
  );
}
