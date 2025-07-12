// File: /app/blog/[slug]/page.js

import blogPosts from "@/data/blogPosts.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import { HeroAllSection } from "../../components/HeroAllSection";
import Footer from "../../components/Footer";

export default function SingleBlogPage({ params }) {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <>
      <div className="blog-single-header">
        <HeroAllSection title1={post.title} />
      </div>

      <main className="blog-single">
        <div className="container">
          <Image src={post.image} alt={post.title} width={800} height={500} />
          <article dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </main>

      <Footer />
    </>
  );
}
