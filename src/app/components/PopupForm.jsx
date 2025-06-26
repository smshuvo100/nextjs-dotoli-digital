"use client";
import { useEffect, useRef, useState } from "react";

export default function PopupForm({ onClose }) {
  const [status, setStatus] = useState("");
  const boxRef = useRef(null); // <-- ❶ reference to the white box

  /* Close on ESC key (nice UX) */
  useEffect(() => {
    const escListener = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", escListener);
    return () => document.removeEventListener("keydown", escListener);
  }, [onClose]);

  /* ❷ close when clicking outside */
  const handleOverlayClick = (e) => {
    // if the click happened on the semi-transparent overlay (not inside the box)
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending…");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    });
    setStatus(res.ok ? "Message sent successfully!" : "Failed to send message.");
    if (res.ok) e.target.reset();
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div ref={boxRef} className="popup-content">
        <button className="popup-close" onClick={onClose}>
          ×
        </button>

        <h2 className="sm-title">Need a Trusted Digital Partner? We’re In.</h2>
        <p className="text-1">Tell us what you need—we’ll show you how we can help.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* --- same classNames you already use --- */}
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input id="name" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="service">What do you need help with?*</label>
            <select id="service" name="service" required>
              <option value="">Select</option>
              <option>Paid Ads</option>
              <option>CRM & Automation</option>
              <option>AI Agents</option>
              <option>Website or Landing Page</option>
              <option>VR / 3D Walkthrough</option>
              <option>Branding & Creative</option>
              <option>Not Sure / Let’s Discuss</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message (optional)</label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message" />
          </div>

          <div className="btn form-btn">
            <button type="submit">Book My Free Consultation</button>
          </div>

          {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
          <p className="micro-trust">🔒 100% privacy. No spam. Just real conversations.</p>
        </form>
      </div>
    </div>
  );
}
