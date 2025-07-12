"use client";
import { useState } from "react";
import PopupForm from "../../components/PopupForm";

import Footer from "../../components/Footer";
import { HeroAllSection } from "../../components/HeroAllSection";
import { ServiceDetailsSection } from "../../components/ServiceDetailsSection";

export default function Page() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroAllSection
       id="team-hero"
        title1="AI-Powered Agents That"
        title2="Engage, Qualify With You."
        description={`We build intelligent AI agents and chatbots powered by tools like Make.com, Zapier,<br /> and n8n—designed to engage leads, qualify prospects, and automate<br /> conversations 24/7 while staying true to your brand voice.`}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />
      <div id="team-hero"></div>
      {/* 
      <Link href="/contact">Contact Us</Link>
      <PortfolioLightbox
        img1="/images/aai1.webp"
        img2="/images/aai2.webp"
        img3="/images/aai3.webp"
        img4="/images/aai4.webp"
        img5="/images/aai5.webp"
        img6="/images/aai6.webp"
        img7="/images/aai7.webp"
      /> */}
      <ServiceDetailsSection
        img="/images/ia1.webp"
        heading="Slack + GPT Bot: AI-Powered Search Automation for Internal Teams"
        text="We built a custom Slack bot that connects to OpenAI via Make.com, allowing teams to get real-time AI-generated responses inside Slack. This setup streamlines internal queries, content generation, and task support — all automated end-to-end."
      />
      <ServiceDetailsSection
        img="/images/ia2.webp"
        heading="Fully Automated AI Workflow for Social Media Content Creation & Posting"
        text="We built a smart automation system that pulls topics from Google Sheets, generates captions and images using OpenAI + Leonardo AI, and auto-publishes to platforms like Instagram, LinkedIn, Facebook, and more — all in one flow. A game-changing AI setup to scale social media presence with zero manual effort."
      />
      <ServiceDetailsSection
        img="/images/ia3.webp"
        heading="End-to-End Lead Automation with 15+ Custom Zaps for JoshDotoliGroup"
        text="We set up over 15 custom Zaps to automate lead capture, syncing, and follow-ups across Facebook, Google Forms, Outlook, and CRMs. This system helps JoshDotoliGroup respond faster, stay organized, and scale lead handling with zero manual effort."
      />
      <ServiceDetailsSection
        img="/images/ia4.webp"
        heading="No-API Lead Automation for BiggerPockets via Email Parsing"
        text="We built an automation that extracts BiggerPockets leads directly from Outlook emails, parses the content, and logs it into Google Sheets, with no API required. By using advanced pattern matching and real-time monitoring, we enabled hands-free lead collection from a closed platform."
      />
      <ServiceDetailsSection
        img="/images/ia5.webp"
        heading="AI-Powered LinkedIn Publishing Engine Using RSS + ChatGPT"
        text="We built a fully autonomous LinkedIn posting system that fetches updates via RSS, formats them using ChatGPT for platform-optimized copy, and publishes them directly to LinkedIn. A seamless solution for brands and thought leaders to maintain consistent, high-quality content without manual effort."
      />
      <Footer />
    </>
  );
}
