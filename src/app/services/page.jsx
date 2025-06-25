"use client";
import Footer from "../components/Footer";
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

      {/* /services/seo-marketing */}

      <ServicesSection
        title={`Seo <br />Marketing`}
        btn_link={"/services/seo-marketing"}
        btn_text={"View project"}
        description={`Our SEO marketing services are designed to improve your search engine rankings, increase organic traffic, and convert visitors into customers. Let us help you dominate search results.`}
      />

      <ServicesSection
        title={`VR <br />Experiences`}
        btn_link={"/services/vr-experiences"}
        btn_text={"View project"}
        description={`Where strategy meets style. From identity design to storytelling, we build brands that not only look good—but mean something.`}
      />
      <ServicesSection
        title={`Branding & <br />Creative`}
        btn_link={"/services/branding-creative"}
        btn_text={"View project"}
        description={`Where strategy meets style. From identity design to storytelling, we build brands that not only look good—but mean something."}
        btn_text={"Explore work`}
      />
      <ServicesSection
        title={`CRM & <br />Automation`}
        btn_link={"/services/crm-automation"}
        btn_text={"View project"}
        description={`From lead to loyalty — our CRM setups and automations (Close, HubSpot, Follow Up Boss) keep your pipeline flowing and your team focused.`}
      />
      <ServicesSection
        title={`AI Agents & <br />Chatbots`}
        btn_link={"/services/ai-agents-chatbots"}
        btn_text={"View project"}
        description={`Custom-built AI agents and automation flows powered by tools like Make.com, Zapier, and n8n—designed to qualify leads, automate support, and run your business on autopilot.`}
      />

      <LogoTracker />
      <Footer />
    </>
  );
}
