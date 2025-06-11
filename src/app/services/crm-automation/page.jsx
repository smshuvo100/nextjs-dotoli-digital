import { HeroAllSection } from "../../components/HeroAllSection";
import { PortfolioImage } from "../../components/PortfolioImage";
/* 
PortfolioImage.jsx
*/
export default function Page() {
  return (
    <>
      <HeroAllSection
        id="secrion1"
        title1="Automate Success: "
        title2="Smart CRM Solutions."
        description={`Transform your customer management with tailored CRM systemsand<br/> intelligent automation. We integrate technology that saves you time,<br/> nurtures leads, and delivers personalized experiences at scale.`}
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
    </>
  );
}
