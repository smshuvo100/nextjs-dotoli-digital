"use client";
import { useState } from "react";
import Footer from "../../components/Footer";
import { HeroAllSection } from "../../components/HeroAllSection";
import PopupForm from "../../components/PopupForm";

export default function Page() {
  const [showPopup, setShowPopup] = useState(false);

  const videos = [
    "https://www.youtube.com/embed/awsaNuzyaXA",
    "https://www.youtube.com/embed/AKz9ut5InkQ",
    "https://www.youtube.com/embed/7huT67VBgWc",
    "https://www.youtube.com/embed/26OqPm5L8uU",
    "https://www.youtube.com/embed/UKHBKOHOIaQ",
    "https://www.youtube.com/embed/PBbVQ5OnarY",
    "https://www.youtube.com/embed/zYLLvOym6AI",
  ];

  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <HeroAllSection
        id={"team-hero"}
        title1="Immersive VR Experiences -"
        title2="Step Into the Future."
        description={`Wow your audience with fully immersive virtual reality experiences. From virtual<br/> showrooms to interactive product demos, our VR solutions create<br/> unforgettable engagements that set you apart from the competition.`}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
      />
      <div id="team-hero"></div>
      {/*  
      do iframe in this link https://tours.tommycrivello.com/stratford/ full width

      */}

      <section className="iframe-section">
        <iframe
          src="https://tours.tommycrivello.com/stratford/"
          title="Virtual Tour - Stratford"
          style={{
            width: "100%",
            height: "100vh",
            border: "none",
          }}
          allowFullScreen
        ></iframe>
      </section>

      <section className="video-section">
        <div className="container">
          <div className="video-grid">
            {videos.map((url, index) => (
              <div key={index} className="video-wrapper1">
                <iframe
                  src={url}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
