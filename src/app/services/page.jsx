"use client";
import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import { ServicesSection } from "../components/ServicesSection";
export default function page() {
  return (
    <>
      <HeroAllSection
        id={"secrion1"}
        title1={"Elite Digital Services,"}
        title2={"Powered by Innovation"}
        description={`Our agency blends creative brilliance with technological innovation. Explore our suite of services,<br/> each tailored to accelerate your growth and automate success.`}
      />

      <ServicesSection
        title={`Digital <br />Marketing`}
        btn_link={"/services/digital-marketing"}
        btn_text={"View project"}
        description={`Data-driven SEO, targeted advertising, and content strategies to put you at the forefront of your market and multiply ROI.`}
      />

      <ServicesSection
        title={`Website <br />Development`}
        btn_link={"/services/website-development"}
        btn_text={"View project"}
        description={`Luxury, conversion-focused websites tailored to your brand – specializing in real estate, home services, and corporate sites that impress and perform.`}
      />

      <ServicesSection
        title={`VR <br />Experiences`}
        btn_link={"/services/vr-experiences"}
        btn_text={"View project"}
        description={`Immersive virtual reality marketing experiences – from virtual showrooms to interactive storytelling – to set your brand apart.`}
      />
      <ServicesSection
        title={`Branding & <br />Creative`}
        btn_link={"/services/branding-creative"}
        btn_text={"View project"}
        description={`End-to-end creative services from brand identity design to video production – crafting a brand image that resonates and endures.`}
      />
      <ServicesSection
        title={`CRM & <br />Automation`}
        btn_link={"/services/crm-automation"}
        btn_text={"View project"}
        description={`Streamline your business with CRM implementations (like HubSpot, Salesforce) and automated workflows that save time and boost customer engagement.`}
      />
      <ServicesSection
        title={`AI Agents & <br />Chatbots`}
        btn_link={"/services/ai-agents-chatbots"}
        btn_text={"View project"}
        description={`Next-gen AI assistants and chatbots that provide 24/7 customer interaction, lead qualification, and support – custom-built for your needs.`}
      />

      <LogoTracker />
    </>
  );
}
