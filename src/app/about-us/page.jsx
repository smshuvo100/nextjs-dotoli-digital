/*  app/about/page.jsx  */
"use client";
import { useState } from "react";
import { ClientTestimonial } from "../components/ClientTestimonial";
import { CounterSection } from "../components/CounterSection";
import Footer from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { LogoTracker } from "../components/LogoTracker";
import PopupForm from "../components/PopupForm";
import { VideoSection } from "../components/VideoSection";
import { WhoWeAre } from "../components/WhoWeAre";

export default function About() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}

      <HeroSection
        title1={"Built for Performance."}
        title2={"Driven by Innovation."}
        text={`Dotoli Digital was born at the intersection of deep marketing expertise and cutting-edge automation.<br />Founded by visionary entrepreneur <strong>Jared Dotoli</strong>, we blend sharp strategy, creative excellence, <br />and AI-powered execution to help ambitious brands scale smarter.`}
        btn_text1={"Schedule Your Private Consultation"}
        onBtnClick={() => setShowPopup(true)}
        btn_text2={"Request a Proposal"}
        btn_link2={"/contact"}
      />
      <VideoSection />

      {/* ───── CTA BANNER ───── */}
      {/*  <TextCounterSection text={`Not just another project.<br />Your digital breakthrough.`} btn_text="Book a Free Strategy Call" btn_link="/contact" /> */}

      {/* ───── WHO WE ARE / WHY CHOOSE US ───── */}
      {/* 
      • <strong>Real-Industry Insight & Elite Execution — </strong>Jared’s real-estate expertise meets our team’s digital firepower.<br />
          • <strong>AI-Native Thinking — </strong>We’re not adapting to AI; we’re built on it.<br />
          • <strong>Flexible, Transparent, Fast — </strong>We move with clarity and urgency to deliver results, not fluff.
      */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <WhoWeAre
        title1="Why Clients"
        title2="Choose Us"
        img="kimg.png"
        paragraph={`<ul>
        <li><strong>Real-Industry Insight & Elite Execution — </strong>Jared’s real-estate expertise meets our team’s digital firepower.</li>
        <li><strong>AI-Native Thinking — </strong>We’re not adapting to AI; we’re built on it.</li>
        <li><strong>Flexible, Transparent, Fast — </strong>We move with clarity and urgency to deliver results, not fluff.</li>
        </ul>`}
      />

      {/* ───── WHAT WE DO BEST (simple title component) ───── */}
      <WhoWeAre
        title1="What We "
        title2="Do Best"
        img="qvv1.webp"
        paragraph={`<ul>
        <li>Performance Marketing</li>
        <li>AI Automation & Workflows</li>
        <li>CRM Setup & Optimization</li>
        <li>VR Experiences (Real Estate 3D Walkthroughs)</li>
        <li>Creative & Branding</li>
        <li>Custom Funnels & Integrations</li>
        </ul>`}
      />

      <WhoWeAre
        title1="Meet the Minds"
        title2=" Behind the Magic"
        img="qvv2.webp"
        paragraph={`We're a hands-on team that thrives on building, testing, optimizing, and growing brands through AI, automation, and creativity.Jared leads with vision. The team brings it to life.`}
      />

      <WhoWeAre
        title1="Let's Build "
        title2="Something That Lasts"
        img="qvv3.webp"
        paragraph={`If you're looking for a team that blends creativity with conversion—and automation with real human insight—you’ve just found your people.`}
        btn_text="Book a Free Consultation"
        btn_link="/contact"
      />

      <br/>
      <br/>
      <br/>
      <br/>

      {/* ───── COUNTERS / METRICS ───── */}
      <CounterSection />

      {/* ───── TESTIMONIALS & LOGOS ───── */}
      <ClientTestimonial />
      <LogoTracker />

      {/* ───── FOOTER ───── */}
      <Footer />
    </>
  );
}
