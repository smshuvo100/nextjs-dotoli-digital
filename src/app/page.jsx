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
      <LeftImgSection />
      <RightImgSection title={"website development"} description={"Custom-designed, mobile-friendly, and SEO-ready websites that grow with your business."} images={"technis-main-landscape.webp"} />
      <WhoWeAre
        title1={"work that"}
        title2={"performs"}
        paragraph={`From professional service websites
                <br />
                to branded aerial videos — our work builds
                <br />
                credibility and converts attention into leads.`}
        btn_text={"See Case Studies"}
        btn_link={"/about"}
      />
      <WhoWeAre
        title1={"who"}
        title2={"we are"}
        paragraph={`We don’t do fluff. We do focused,<br /> aligned digital marketing that drives visibility,<br /> trust, and leads.`}
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
