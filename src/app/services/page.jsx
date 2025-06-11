"use client";
import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import { ServicesSection } from "../components/ServicesSection";
export default function page() {
  return (
    <>
      <HeroAllSection
        id={"secrion1"}
        title1={"we help you get found,"}
        title2={"trusted, and chosen."}
        description={`No hype. Just proven strategies to grow service-based<br/> businesses — through SEO, brand clarity, and<br/> high-converting content.`}
      />

      <ServicesSection
        title={`Digital <br />Marketing`}
        btn_link={"/services/digital-marketing"}
        btn_text={"View project"}
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
        title={`Website <br />Development`}
        btn_link={"/services/website-development"}
        btn_text={"View project"}
        description={`We create short-form, cinematic, and aerial video content that shows your expertise and elevates your brand across web and social.`}
        list1={`<p>Drone videography</p>
                  <p>Service explainers</p>
                  <p>Social video content</p>`}
        list2={`<p>Brand overviews</p>
                  <p>ouTube & web-ready formats</p>`}
      />

      <ServicesSection
        title={`VR <br />Experiences`}
        btn_link={"/services/vr-experiences"}
        btn_text={"View project"}
        description={`We craft brands that are consistent, credible, and easy to choose — from logos and color systems to tone of voice and trust-building assets.`}
        list1={`<p>Brand positioning</p>
                  <p>Messaging frameworks</p>
                  <p>Visual identity</p>`}
        list2={`<p>Logo & typography</p>
                  <p>Style guides</p>`}
      />
      <ServicesSection
        title={`Branding & <br />Creative`}
        btn_link={"/services/branding-creative"}
        btn_text={"View project"}
        description={`We craft brands that are consistent, credible, and easy to choose — from logos and color systems to tone of voice and trust-building assets.`}
        list1={`<p>Brand positioning</p>
                  <p>Messaging frameworks</p>
                  <p>Visual identity</p>`}
        list2={`<p>Logo & typography</p>
                  <p>Style guides</p>`}
      />
      <ServicesSection
        title={`CRM & <br />Automation`}
        btn_link={"/services/crm-automation"}
        btn_text={"View project"}
        description={`We craft brands that are consistent, credible, and easy to choose — from logos and color systems to tone of voice and trust-building assets.`}
        list1={`<p>Brand positioning</p>
                  <p>Messaging frameworks</p>
                  <p>Visual identity</p>`}
        list2={`<p>Logo & typography</p>
                  <p>Style guides</p>`}
      />
      <ServicesSection
        title={`AI Agents & <br />Chatbots`}
        btn_link={"/services/ai-agents-chatbots"}
        btn_text={"View project"}
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
