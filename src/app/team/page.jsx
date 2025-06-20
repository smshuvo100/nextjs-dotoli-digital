"use client";
import { BannerSection } from "../components/BannerSection";
import { HeroAllSection } from "../components/HeroAllSection";
import { JungleSection } from "../components/JungleSection";
import { TeamMemberSection } from "../components/TeamMemberSection";
import { TextCounterSection } from "../components/TextCounterSection";
export default function page() {
  return (
    <>
      <HeroAllSection
        title1={"The Team Behind"}
        title2={"Market Target"}
        description={`Strategists, creators, and marketers with one goal:<br/> helping service businesses grow with SEO,<br/>  branding, and video that performs.`}
      />

      <TextCounterSection text={`Our results come from experience — not hype.<br/> Every project is powered by a team that understands<br/> both strategy and execution.`} />

      <TeamMemberSection />

      <JungleSection
        title1={"we're hiring"}
        title2={"talented marketers"}
        title3={"& creators"}
        description={`Passionate about SEO, storytelling, <br/>or digital content? We’d love to hear from you.`}
        btn_text={"Meet the Team"}
        btn_link={"/about"}
      />

      <BannerSection title={"Built On Strategy. Backed By Results."} />
    </>
  );
}
