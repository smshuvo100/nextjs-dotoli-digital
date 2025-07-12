// File: /app/blog/page.js
"use client";
import { useState } from "react";
import PopupForm from "../components/PopupForm";
import Link from "next/link";
import blogPosts from "@/data/blogPosts.json";
import Image from "next/image";
import { HeroAllSection } from "../components/HeroAllSection";
import Footer from "../components/Footer";


export default function BlogPage() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <HeroAllSection
        title1="Insights, Ideas,"
        title2="and Industry Trends"
        description={`Explore our latest thoughts on digital marketing, branding, web development,<br/> and innovation. Stay informed, stay inspired.`}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
        id={"team-hero"}
      />
      <div id="team-hero"></div>
      <main className="blog-layout">
        <div className="container">
          <div className="blog-content">
            <div className="blog-main">
              {blogPosts.map((post) => (
                <div key={post.id} className="blog-card">
                  <Link href={`/blog/${post.slug}`}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                    />
                    <h2>{post.title}</h2>
                    <span className="blog-date">{post.date}</span>
                    <p>{post.excerpt}</p>
                    
                  </Link>
                </div>
              ))}
            </div>
            {/* <aside className="blog-sidebar">
              <h3 className="blog-title">All Posts</h3>
              <ul>
                {blogPosts.map((post) => (
                  <li key={post.id}>
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={80}
                        height={60}
                      />
                      <span>{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside> */}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
