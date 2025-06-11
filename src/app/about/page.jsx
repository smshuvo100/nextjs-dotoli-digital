"use client";
import { ClientTestimonial } from "../components/ClientTestimonial";
import { CounterSection } from "../components/CounterSection";
import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import { PageTitle } from "../components/PageTitle";
import { TextCounterSection } from "../components/TextCounterSection";
import { WhoWeAre } from "../components/WhoWeAre";

export default function About() {
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <>
      <HeroAllSection
        id={"sm-bg-text-sec"}
        title1={"Driven by Innovation,"}
        title2={"Defined by Results."}
        description={`Dotoli Digital is a Florida-based team of digital visionaries and strategists. Since our inception,<br /> we've partnered with industry leadersand ambitious brands to deliver bespoke<br />  marketing solutions powered by AI and creativity.`}
      />
      <TextCounterSection text={`Ready to experience the<br /> Dotoli Digital difference?`} btn_text={"Schedule a Consultation"} btn_link={"/team"} />

      {/*  <BannerSection title={"strategic. sreative. built to convert."} /> */}

      <WhoWeAre
        title1={"Why Choose"}
        title2={"DOTOLI DIGITAL"}
        paragraph={`Highlight that all work is done by a premium U.S. team <br />(reassuring for global clients who want American quality).`}
        btn_text={"About Us"}
        btn_link={"/about"}
      />
      <CounterSection />
      <PageTitle />
      <ClientTestimonial />
      <LogoTracker />
      {/* 
      HeroAboutSection.jsx
      */}
    </>
  );
}
