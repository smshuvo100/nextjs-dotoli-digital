"use client";

import { useState } from "react";
import { ClientTestimonial } from "./components/ClientTestimonial";
import { CounterSection } from "./components/CounterSection";
import { DribbbleSection } from "./components/DribbbleSection";
import Footer from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { JungleSection } from "./components/JungleSection";
import { LeftImgSection } from "./components/LeftImgSection";
import { NewsTracker } from "./components/NewsTracker";
import { PageTitle } from "./components/PageTitle";
import PopupForm from "./components/PopupForm";
import { RecentWorkSection } from "./components/RecentWorkSection";
import { RightImgSection } from "./components/RightImgSection";
import { SocialSection } from "./components/SocialSection";
import { VideoSection } from "./components/VideoSection";
import { WhoWeAre } from "./components/WhoWeAre";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroSection
        title1={"Ai-Powered Marketing"}
        title2={"For Visionary Brands."}
        text={`Elevating businesses with bespoke digital solutions, advanced AI, <br /> and unparalleled creativity - from Florida to the world.`}
        btn_text1={"Schedule Your Private Consultation"}
        onBtnClick={() => setShowPopup(true)}
        btn_text2={"Request a Proposal"}
        btn_link2={"/contact"}
      />
      <VideoSection />
      <RecentWorkSection />

      <RightImgSection
        title={"Digital Marketing"}
        description={`<strong>From traffic to traction — we turn clicks into clients with data-backed marketing.</strong> Data-driven SEO, targeted advertising, and content strategies to put you at the forefront of your market and multiply ROI.`}
        images={"k1.webp"}
        btn_text={"Explore work"}
        btn_link={"/services/digital-marketing"}
      />

      <LeftImgSection
        title={"Website Development"}
        description={"Luxury, conversion-focused websites tailored to your brand – specializing in real estate, home services, and corporate sites that impress and perform."}
        images={"technis-main-landscape.webp"}
        btn_text={"Explore work"}
        btn_link={"/services/website-development"}
      />
      <RightImgSection
        title={"Seo Expert"}
        description={"Our SEO services are designed to improve your search engine rankings, increase organic traffic, and convert visitors into customers. Let us help you dominate search results."}
        images={"loftloom-main-landscape.webp"}
        btn_text={"Explore work"}
        btn_link={"/services/seo-marketing"}
      />

      <LeftImgSection
        title={"VR Experiences"}
        description={"From lifelike 3D walkthroughs to fully immersive property tours — we bring empty plots to life before they’re built."}
        images={"sec-service.webp"}
        btn_text={"Explore work"}
        btn_link={"/services/vr-experiences"}
      />

      <RightImgSection
        title={"Branding & Creative"}
        description={"Where strategy meets style. From identity design to storytelling, we build brands that not only look good—but mean something."}
        images={"k2.webp"}
        btn_text={"Explore work"}
        btn_link={"/services/branding-creative"}
      />

      {/* ======== */}

      <LeftImgSection
        title={"CRM & Automation"}
        description={"From lead to loyalty — our CRM setups and automations (Close, HubSpot, Follow Up Boss) keep your pipeline flowing and your team focused."}
        images={"k2.webp"}
        btn_text={"Explore work"}
        btn_link={"/services/crm-automation"}
      />

      <RightImgSection
        title={"AI Agents & Chatbots"}
        description={"Custom-built AI agents and automation flows powered by tools like Make.com, Zapier, and n8n—designed to qualify leads, automate support, and run your business on autopilot."}
        images={"k3.webp"}
        btn_text={"Explore work"}
        btn_link={"/services/ai-agents-automation"}
      />

      <WhoWeAre
        title1={"Who"}
        title2={"We Are"}
        paragraph={`Dotoli Digital is a Florida-based team of digital visionaries and strategists.  Since our inception, we've partnered with industry leaders and ambitiousbrands to deliver bespoke marketing solutions powered by AI and creativity.`}
        btn_text={"Meet the Team"}
        btn_link={"/about"}
      />
      <CounterSection />
      <PageTitle />
      <ClientTestimonial />
      <NewsTracker />
      <DribbbleSection />
      <JungleSection title1={"Join "} title2={"With Us"} title3={""} />
      <SocialSection />
      <Footer />
    </>
  );
}
/*  IN YOUR
JOURNEY */
