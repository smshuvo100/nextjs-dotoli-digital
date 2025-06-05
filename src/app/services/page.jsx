"use client";
import { BannerSection } from "../components/BannerSection";
import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import { ServicesSection } from "../components/ServicesSection";
import { TextCounterSection } from "../components/TextCounterSection";
import { WhoWeAre } from "../components/WhoWeAre";
export default function page() {
  return (
    <>
      {/* we help you get found, 
    trusted, and chosen. 
    */}
      <HeroAllSection
        id={"secrion1"}
        title1={"we help you get found,"}
        title2={"trusted, and chosen."}
        description={`No hype. Just proven strategies to grow service-based<br/> businesses — through SEO, brand clarity, and<br/> high-converting content.`}
      />

      <TextCounterSection text={`We help service businesses turn attention<br /> into action — with technical precision, compelling<br /> messaging, and scroll-stopping visuals.<br />`} />
      <BannerSection title={"strategy meets execution. results follow."} />

      <WhoWeAre
        description={`We work with service businesses that want more than just traffic — they want trust, visibility, and qualified leads. Every service we offer is focused on one thing: measurable growth.<br />`}
      />

      <ServicesSection
        title={`seo that gets <br />you found`}
        description={`We audit, fix, and optimize your site from the ground up — site structure, speed, schema, and content — so you rank higher and stay there.`}
        list1={`<p>Site audits</p>
                  <p>Keyword strategy</p>
                  <p>Core Web Vitals</p>
                  <p>Structured data</p>
                  `}
        list2={`<p>Local SEO</p>
                  <p>On-page SEO</p>
                  <p>Performance optimization</p>`}
      />

      <ServicesSection
        title={`video that builds trust and converts`}
        description={`We create short-form, cinematic, and aerial video content that shows your expertise and elevates your brand across web and social.`}
        list1={`<p>Drone videography</p>
                  <p>Service explainers</p>
                  <p>Social video content</p>`}
        list2={`<p>Brand overviews</p>
                  <p>ouTube & web-ready formats</p>`}
      />

      <ServicesSection
        title={`branding that makes you the obvious choice`}
        description={`We craft brands that are consistent, credible, and easy to choose — from logos and color systems to tone of voice and trust-building assets.`}
        list1={`<p>Brand positioning</p>
                  <p>Messaging frameworks</p>
                  <p>Visual identity</p>`}
        list2={`<p>Logo & typography</p>
                  <p>Style guides</p>`}
      />

      <LogoTracker />
    </>
  );
}
