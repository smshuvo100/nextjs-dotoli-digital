import { HeroAllSection } from "../../components/HeroAllSection";
import { ServiceDetailsSection } from "../../components/ServiceDetailsSection";
export default function page() {
  return (
    <>
      <HeroAllSection
        id="secrion1"
        title1="Expert SEO Marketing"
        title2="Services That Deliver Results"
        description={`Our SEO marketing services are designed to improve your search engine rankings, increase organic traffic, and convert visitors into customers. Let us help you dominate search results.`}
      />

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
        text="This keyword performance snapshot highlights multiple high-volume keywords currently ranking in the top 10 search positions. The keywords have monthly search volumes ranging from 1.9K to 4.4K and keyword difficulty (KD) scores between 38 and 50, indicating moderate competition. Traffic percentages, although small, reflect consistent visibility. These metrics demonstrate an effective SEO strategy targeting commercial intent queries with strong potential for scaling organic traffic."
      />

      <ServiceDetailsSection
        img="/images/x6.webp"
        heading="High Traffic Achieved from Competitive, High-Volume Keywords"
        text="This snapshot shows strong organic traffic driven by a handful of high-search-volume keywords, even in high keyword difficulty (KD). One standout term delivers 19.9K clicks from a 301K search volume with an 86 KD%, highlighting success in highly competitive SERPs. Despite challenging KD values (mostly above 70), the performance demonstrates effective SEO and content strategies capable of ranking for valuable, high-intent queries."
      />
    </>
  );
}
