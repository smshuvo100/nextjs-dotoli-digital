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
        title1="AI Agents & Chatbots - 24/7"
        title2="Intelligent Customer Engagement."
        description={`Unlock the power of artificial intelligence in customer service and sales.<br/> We create bespoke AI agents and chatbots that converse naturally,<br/> automate support, and boost conversions - all while embodying your brand's voice.`}
      />

      <PortfolioLightbox
        img1="/images/aai1.webp"
        img2="/images/aai2.webp"
        img3="/images/aai3.webp"
        img4="/images/aai4.webp"
        img5="/images/aai5.webp"
        img6="/images/aai6.webp"
        img7="/images/aai7.webp"
      />
    </>
  );
}
