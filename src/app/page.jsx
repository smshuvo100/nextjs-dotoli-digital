"use client";

import { ClientTestimonial } from "./components/ClientTestimonial";
import { CounterSection } from "./components/CounterSection";
import { DribbbleSection } from "./components/DribbbleSection";
import { HeroSection } from "./components/HeroSection";
import { JungleSection } from "./components/JungleSection";
import { LeftImgSection } from "./components/LeftImgSection";
import { NewsTracker } from "./components/NewsTracker";
import { PageTitle } from "./components/PageTitle";
import { RecentWorkSection } from "./components/RecentWorkSection";
import { RightImgSection } from "./components/RightImgSection";
import { SocialSection } from "./components/SocialSection";
import { VideoSection } from "./components/VideoSection";
import { WhoWeAre } from "./components/WhoWeAre";
export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <RecentWorkSection />

      <RightImgSection
        title={"Digital Marketing"}
        description={`<strong>From traffic to traction — we turn clicks into clients with data-backed marketing.</strong> Data-driven SEO, targeted advertising, and content strategies to put you at the forefront of your market and multiply ROI.`}
        images={"k1.webp"}
      />

      <LeftImgSection
        title={"Website Development"}
        description={"Luxury, conversion-focused websites tailored to your brand – specializing in real estate, home services, and corporate sites that impress and perform."}
        images={"technis-main-landscape.webp"}
      />

      <RightImgSection
        title={"VR Experiences"}
        description={"Immersive virtual reality marketing experiences - from virtual showrooms to interactive storytelling - to set your brand apart."}
        images={"loftloom-main-landscape.webp"}
      />

      <LeftImgSection
        title={"Branding & Creative"}
        description={"End-to-end creative services from brand identity design to video production – crafting a brand image that resonates and endures."}
        images={"imusic-main-landscape.webp"}
      />

      {/* ======== */}

      <RightImgSection
        title={"CRM & Automation"}
        description={"Streamline your business with CRM implementations (like HubSpot, Salesforce) and automated workflows that save time and boost customer engagement."}
        images={"k2.webp"}
      />

      <LeftImgSection
        title={"AI Agents & Chatbots"}
        description={"Next-gen AI assistants and chatbots that provide 24/7 customer interaction, lead qualification, and support - custom-built for your needs."}
        images={"k3.webp"}
      />

      <WhoWeAre
        title1={"Who"}
        title2={"We Are"}
        paragraph={`Dotoli Digital is a Florida-based team of digital visionaries and strategists.<br/>  Since our inception, we’ve partnered with industry leaders and ambitious<br/> brands to deliver bespoke marketing solutions powered by AI and creativity.`}
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
    </>
  );
}
/*  IN YOUR
JOURNEY */
