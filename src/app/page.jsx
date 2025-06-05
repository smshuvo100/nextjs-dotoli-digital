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
      <br />
      <br />
      <br />
      <br />
      <br />
      <RightImgSection title={"technical seo"} description={"Improve your rankings with clean, fast, search-optimized foundations."} images={"loftloom-main-landscape.webp"} />

      <LeftImgSection title={"brand development"} description={"Build a cohesive, trustworthy identity that clients remember."} images={"imusic-main-landscape.webp"} />

      <RightImgSection title={"website development"} description={"Custom-designed, mobile-friendly, and SEO-ready websites that grow with your business."} images={"technis-main-landscape.webp"} />

      {/* ======== */}

      <LeftImgSection
        title={"Digital Marketing"}
        description={"Data-driven SEO, targeted advertising, and content strategies to put you at the forefront of your market and multiply ROI."}
        images={"k1.webp"}
      />

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
        title1={"who"}
        title2={"we are"}
        paragraph={`Dotoli Digital is a Florida-based team of digital visionaries and strategists.<br/>  Since our inception, we’ve partnered with industry leaders and ambitious<br/> brands to deliver bespoke marketing solutions powered by AI and creativity.`}
        btn_text={"Meet the Team"}
        btn_link={"/about"}
      />
      <CounterSection />
      <PageTitle />
      <ClientTestimonial />
      <NewsTracker />
      <DribbbleSection />
      <JungleSection title1={"join our"} title2={"in your"} title3={"journey"} />
      <SocialSection />
    </>
  );
}
