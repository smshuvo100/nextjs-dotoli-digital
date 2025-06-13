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
      <PortfolioImage img1="/images/ai1.webp" img2="/images/ai2.webp" img3="/images/ai3.webp" img4="/images/ai4.webp" />
    </>
  );
}
