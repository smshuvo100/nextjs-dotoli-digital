"use client";
import { useState } from "react";
import PopupForm from "../../components/PopupForm";

import Footer from "../../components/Footer";
import { HeroAllSection } from "../../components/HeroAllSection";
import { ServiceDetailsSection } from "../../components/ServiceDetailsSection";

/* 
PortfolioImage.jsx
*/
export default function Page() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <HeroAllSection
        id={"team-hero"}
        title1="Data-Driven Marketing that"
        title2="Dominates Your Market."
        description={`From SEO to social media, our expert team leverages AI insights <br/>and creative strategy to grow your traffic, leads, and revenue.<br/> We don't just run campaigns - we craft digital success stories.`}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />
      <div id="team-hero"></div>
      {/* <PortfolioLightbox
        img1="/images/dm1.webp"
        img2="/images/dm2.webp"
        img3="/images/dm3.webp"
        img4="/images/dm4.webp"
        img5="/images/dm5.webp"
        img6="/images/dm6.webp"
        img7="/images/dm7.webp"
        img8="/images/dm8.webp"
      /> */}
      {/* Canva */}
      {/* Canva */}
      {/* Canva */}
      <ServiceDetailsSection
        img="/images/x7.webp"
        heading="1.6M+ Views and 32K+ Conversions for Dotoli Group"
        text="As the digital growth partner for Dotoli Group, we've driven over 1.6 million views, 32K+ conversions, and 290+ phone leads through high-performance Google Ads campaigns. Focused on South Florida’s luxury real estate market, our ongoing collaboration combines strategic targeting, compelling creative, and full-funnel optimization to deliver scalable, qualified lead flow month after month."
      />
      <ServiceDetailsSection
        img="/images/x8.webp"
        heading="Consistent Real Estate Lead Flow with Scalable Google Ads Strategy For Abode Group"
        text="We continue to partner with a Florida-based real estate brand to drive a steady pipeline of qualified sign-ups monthly through a custom Google Ads strategy. Our approach blends hyper-local targeting, compelling creative, and conversion-focused landing experiences — resulting in scalable lead generation at a sustainable cost."
      />
      <ServiceDetailsSection
        img="/images/x9.webp"
        heading="500K+ Monthly Conversions at $15M+ Ad Spend Scale for Verizon Mobility"
        text="We managed large-scale Google Ads campaigns for Verizon Mobility, consistently driving 500 K+ monthly conversions with a $15 M+ ad spend. By leveraging advanced audience targeting, high-performing creatives, and continuous optimization, we delivered results with exceptional efficiency, even at massive scale."
      />
      <ServiceDetailsSection
        img="/images/x10.webp"
        heading="Content-Driven Meta Campaign Generates 348 Leads at $6.90 CPL"
        text="For Marina Landings, we launched a creative-led Meta Ads campaign using lifestyle visuals and mobile-friendly lead forms. The result: 348 qualified real estate leads at an average cost per lead of just $6.90, with strong engagement and over 2.4K full video views."
      />
      <ServiceDetailsSection
        img="/images/x11.webp"
        heading="4.5K+ Leads at €2.61 CPL Across Romania, Cluj,"
        text="To meet cross-border driver hiring needs, we launched lead-gen campaigns for D'Agostino Autotrasporti across Romania and Cluj. With an optimized CPL of €2.61 and over 4,500 leads generated, our creative-first Meta strategy ensured consistent, location-specific candidate flow while maximizing cost-effectiveness and reach across multiple geographies."
      />
      <ServiceDetailsSection
        img="/images/x12.webp"
        heading="2.4K+ Leads at €2.76 CPL for Italian Logistics Recruitment"
        text="For D'Agostino SRL, we executed multi-campaign Meta strategies to support high-volume logistics and warehouse recruitment across Italy. Leveraging regional targeting, compelling ad creatives, and audience segmentation, we delivered over 2.4K qualified leads at an average CPL of just €2.76, achieving exceptional scale and efficiency."
      />
      <ServiceDetailsSection
        img="/images/x13.webp"
        heading="High-Intent Leads for London-Based Plumbing & Drainage Service"
        text="We continue to drive results for a London-based plumbing and drainage company through high-intent, location-targeted Google Ads campaigns. With over 2K+ phone calls and 1,200+ conversions delivered to date — all at a cost per lead under £50 — our strategy focuses on efficiency, urgency-based keywords, and consistent lead flow in a competitive local market."
      />
      <ServiceDetailsSection
        img="/images/x14.webp"
        heading="300%+ ROAS for Smart Lighting Campaigns"
        text="Generated over 500 conversions with just £15K ad spend using Performance Max for a UK-based smart lighting brand. Efficient targeting, powerful creative, and real-time optimization drove 3X returns."
      />
      {/* Canva end */}

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

      <ServiceDetailsSection
        img="/images/x3.webp"
        heading="Surge in Referring Domains Signals Stronger Backlink Profile"
        text="The screenshot from Backlink Analytics shows a substantial rise in high-quality backlinks over the past 12 months. Referring domains increased from around 300 in July 2024 to nearly 750 by May 2025, with the most dramatic growth occurring between February and April 2025. This upward trend indicates successful link-building efforts, improved domain authority, and enhanced SEO strength for the root domain."
      />

      <ServiceDetailsSection
        img="/images/x4.webp"
        heading="Strong Growth in Organic Traffic"
        text="The Google Search Console data shows a notable increase in organic traffic over the past six months. Total clicks reached 56.6K and impressions soared to 3.25 million, with a CTR of 1.7% and an average position of 21.5. The trend reflects consistent performance and successful SEO efforts, boosting search visibility and user engagement across web search results."
      />

      <ServiceDetailsSection
        img="/images/x5.webp"
        heading="Ranking High-Volume Keywords in Top 10"
        text="This keyword performance snapshot highalights multiple high-volume keywords currently ranking in the top 10 search positions. The keywords have monthly search volumes ranging from 1.9K to 4.4K and keyword difficulty (KD) scores between 38 and 50, indicating moderate competition. Traffic percentages, although small, reflect consistent visibility. These metrics demonstrate an effective SEO strategy targeting commercial intent queries with strong potential for scaling organic traffic."
      />

      <ServiceDetailsSection
        img="/images/x6.webp"
        heading="High Traffic Achieved from Competitive, High-Volume Keywords"
        text="This snapshot shows strong organic traffic driven by a handful of high-search-volume keywords, even in high keyword difficulty (KD). One standout term delivers 19.9K clicks from a 301K search volume with an 86 KD%, highlighting success in highly competitive SERPs. Despite challenging KD values (mostly above 70), the performance demonstrates effective SEO and content strategies capable of ranking for valuable, high-intent queries."
      />

      <Footer />
    </>
  );
}
