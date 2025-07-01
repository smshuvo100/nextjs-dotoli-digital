"use client";
import { useState } from "react";
import Footer from "../../components/Footer";
import { HeroAllSection } from "../../components/HeroAllSection";
import PopupForm from "../../components/PopupForm";
import { ServiceDetailsSection } from "../../components/ServiceDetailsSection";
export default function Page() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <HeroAllSection
        id="secrion1"
        title1="Automate Success: "
        title2="Smart CRM Solutions."
        description={`Transform your customer management with tailored CRM systemsand<br/> intelligent automation. We integrate technology that saves you time,<br/> nurtures leads, and delivers personalized experiences at scale.`}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />
      {/* <PortfolioImage
        img1="/images/project-1.webp"
        img2="/images/project-2.webp"
        img3="/images/project-3.webp"
        img4="/images/project-4.webp"
        img5="/images/project-5.webp"
        img6="/images/project-6.webp"
        img7="/images/project-7.webp"
        img8="/images/project-8.webp"
        img9="/images/project-4.webp"
      /> */}
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
      <ServiceDetailsSection
        img="/images/crm3.webp"
        heading="Strategic Email Drip Campaigns for Nurturing Real Estate Finance Leads"
        text="We created a robust library of 50+ pre-built email templates and drip sequences mapped to every stage of the borrower journey — from cold intros to deal readiness. These templates educate, build trust, and drive conversion through expert messaging that aligns perfectly with financing timelines and borrower intent."
      />{" "}
      <Footer />
    </>
  );
}
