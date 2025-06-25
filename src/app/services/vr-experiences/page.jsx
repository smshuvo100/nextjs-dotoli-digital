import { HeroAllSection } from "../../components/HeroAllSection";
import { PortfolioImage } from "../../components/PortfolioImage";
import Footer from "../../components/Footer";
export default function Page() {
  return (
    <>
      <HeroAllSection
        id="secrion1"
        title1="Immersive VR Experiences -"
        title2="Step Into the Future."
        description={`Wow your audience with fully immersive virtual reality experiences. From virtual<br/> showrooms to interactive product demos, our VR solutions create<br/> unforgettable engagements that set you apart from the competition.`}
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
