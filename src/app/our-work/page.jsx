"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import PopupForm from "../components/PopupForm";
import { PortfolioImage } from "../components/PortfolioImage";
import { ServiceDetailsSection } from "../components/ServiceDetailsSection";
export default function page() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <HeroAllSection
        id={"sm-bg-text-sec"}
        title1={"Work that builds trust"}
        title2={"and drives results"}
        description={`Explore how we help service businesses stand out,<br/> rank higher, and convert better — through SEO, branding,<br/> and aerial content that moves people.`}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />
      {/* ai-agents-automation */}
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

      {/* crm-automation */}
      <ServiceDetailsSection
        img="/images/crm1.webp"
        heading="CRM Setup & Lead Activity Tracking for Trentium Capital Using Close"
        text="We configured and streamlined Close CRM for Trentium Capital to manage their full sales workflow — from lead intake to follow-up tracking. This setup enabled the team to monitor performance across 2,100+ leads, 1,100+ outbound calls, and 968 emails with clarity and consistency. With custom workflows and reporting, Trentium operates with better pipeline visibility and team accountability."
      />
      <ServiceDetailsSection
        img="/images/crm2.webp"
        heading="Full-Funnel CRM Workflows Built for Lead Nurturing & Sales Automation"
        text="We implemented an advanced CRM architecture with segmented workflows for cold, warm, and hot leads, including 3-month nurturing sequences for loan officers. From automated emails and SMS to call reminders and drip campaigns, the system ensures no lead goes untouched, improving conversion rates across the board."
      />

      {/* seo-marketing */}
      <ServiceDetailsSection
        img="/images/x1.webp"
        heading="Growth in Organic Keywords Across Multiple Assets"
        text="The screenshot highlights a positive trend in organic keyword performance across four different digital assets. One asset saw a significant increase to 13.4K keywords (+5.24%), while
                  others recorded even more impressive growth rates +66.43% (476 keywords), +58.33% (494 keywords), and +7.24% (741 keywords). This data reflects improved SEO visibility and content
                  performance, indicating successful optimization strategies and rising organic search presence."
      />

      <ServiceDetailsSection
        img="/images/x2.webp"
        heading="Growth in Organic Clicks & Impressions"
        text="The screenshot displays a positive upward trend in SEO performance over the past three months. Total organic clicks reached 13.3K, while impressions climbed to 1.48 million, reflecting increased visibility in search results. The overall trajectory indicates successful optimization efforts and rising organic reach."
      />

      {/* digital-marketing */}
      <ServiceDetailsSection
        img="/images/x1.webp"
        heading="Growth in Organic Keywords Across Multiple Assets"
        text="The screenshot highlights a positive trend in organic keyword performance across four different digital assets. One asset saw a significant increase to 13.4K keywords (+5.24%), while
                    others recorded even more impressive growth rates +66.43% (476 keywords), +58.33% (494 keywords), and +7.24% (741 keywords). This data reflects improved SEO visibility and content
                    performance, indicating successful optimization strategies and rising organic search presence."
      />

      <ServiceDetailsSection
        img="/images/x2.webp"
        heading="Growth in Organic Clicks & Impressions"
        text="The screenshot displays a positive upward trend in SEO performance over the past three months. Total organic clicks reached 13.3K, while impressions climbed to 1.48 million, reflecting increased visibility in search results. The overall trajectory indicates successful optimization efforts and rising organic reach."
      />

      {/* vr-experiences */}
      {/* branding-creative */}
      {/* website-development */}
      <PortfolioImage img1="/images/w2.webp" img2="/images/w1.webp" img3="/images/w3.webp" img4="/images/w4.webp" img5="/images/w5.webp" img6="/images/w6.webp" />

      <LogoTracker />
      <Footer />
    </>
  );
}
