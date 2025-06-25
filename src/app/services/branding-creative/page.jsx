import Footer from "../../components/Footer";
import { HeroAllSection } from "../../components/HeroAllSection";
import { PortfolioImage } from "../../components/PortfolioImage";
export default function Page() {
  return (
    <>
      <HeroAllSection
        id="secrion1"
        title1="Branding & Creative - Design"
        title2=" That Inspires & Influences."
        description={`From concept to reality, we craft visual identities, graphics, and videos<br/> that captivate your audience. Our creative team blends artistic<br/> finesse with strategic insight to elevate your brand above the rest.`}
      />
      <PortfolioImage
        img1="/images/project-1.webp"
        img2="/images/project-2.webp"
        img3="/images/project-3.webp"
        img4="/images/project-4.webp"
        img5="/images/project-5.webp"
        img6="/images/project-6.webp"
        img7="/images/project-7.webp"
        img8="/images/project-8.webp"
        img9="/images/project-4.webp"
      />
      <Footer />
    </>
  );
}
