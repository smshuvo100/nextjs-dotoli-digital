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
        title1="AI Agents & Chatbots - 24/7"
        title2="Intelligent Customer Engagement."
        description={`Unlock the power of artificial intelligence in customer service and sales.<br/> We create bespoke AI agents and chatbots that converse naturally,<br/> automate support, and boost conversions - all while embodying your brand's voice.`}
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
