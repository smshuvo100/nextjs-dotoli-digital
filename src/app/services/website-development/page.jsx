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
        title1="Building Stunning "
        title2="Websites that Convert"
        description={`Our web development team crafts high-end, mobile-responsive websites<br/> that not only look exceptional but also drive business growth.Specializing<br/>   in sitesthat wow investors and customers alike.`}
      />
      <PortfolioImage
        img1="/images/w1.webp"
        img2="/images/w2.webp"
        img3="/images/w3.webp"
        img4="/images/w4.webp"
        img5="/images/w5.webp"
        img6="/images/w6.webp"
        img7="/images/w7.webp"
        img8="/images/w8.webp"
        img9="/images/project-1.webp"
        img10="/images/project-2.webp"
        img11="/images/project-3.webp"
        img12="/images/project-4.webp"
        img13="/images/project-5.webp"
        img14="/images/project-6.webp"
        img15="/images/project-7.webp"
      />
    </>
  );
}
