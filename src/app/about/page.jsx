/*  app/about/page.jsx  */
"use client";
import { ClientTestimonial } from "../components/ClientTestimonial";
import { CounterSection } from "../components/CounterSection";
import Footer from "../components/Footer";
import { HeroAllSection } from "../components/HeroAllSection";
import { LogoTracker } from "../components/LogoTracker";
import { PageTitle } from "../components/PageTitle";
import { TextCounterSection } from "../components/TextCounterSection";
import { WhoWeAre } from "../components/WhoWeAre";

export default function About() {
  return (
    <>
      {/* ───── HERO ───── */}
      <HeroAllSection
        id="sm-bg-text-sec"
        title1="Built for Performance."
        title2="Driven by Innovation."
        description={`Dotoli Digital was born at the intersection of deep marketing expertise and cutting-edge automation.<br />Founded by visionary entrepreneur <strong>Jared Dotoli</strong>, we blend sharp strategy, creative excellence, <br />and AI-powered execution to help ambitious brands scale smarter.`}
      />

      {/* ───── CTA BANNER ───── */}
      <TextCounterSection text={`Not just another project.<br />Your digital breakthrough.`} btn_text="Book a Free Strategy Call" btn_link="/contact" />

      {/* ───── WHO WE ARE / WHY CHOOSE US ───── */}
      <WhoWeAre
        title1="Why Clients"
        title2="Choose Us"
        paragraph={`• <strong>Real-Industry Insight & Elite Execution — </strong>Jared’s real-estate expertise meets our team’s digital firepower.<br />
          • <strong>AI-Native Thinking — </strong>We’re not adapting to AI; we’re built on it.<br />
          • <strong>Flexible, Transparent, Fast — </strong>We move with clarity and urgency to deliver results, not fluff.`}
        btn_text="Meet the Team"
        btn_link="/team"
      />

      {/* ───── COUNTERS / METRICS ───── */}
      <CounterSection />

      {/* ───── WHAT WE DO BEST (simple title component) ───── */}
      <PageTitle title="What We Do Best" subtitle="Performance Marketing • AI Automation • CRM Setup • VR Experiences • Branding & Creative • Custom Funnels" />

      {/* ───── TESTIMONIALS & LOGOS ───── */}
      <ClientTestimonial />
      <LogoTracker />

      {/* ───── FOOTER ───── */}
      <Footer />
    </>
  );
}
