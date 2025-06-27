/* ── app/components/PopupForm.jsx ── */
"use client";
import { useEffect, useRef, useState } from "react";

export default function PopupForm({ onClose }) {
  const [status, setStatus] = useState("");
  const overlayRef = useRef(null);

  /* ESC to close */
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onClose]);

  /* click-outside to close */
  const handleOverlayClick = (e) => e.target === overlayRef.current && onClose();

  /* submit → POST /api/popup */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending…");

    const ok = await fetch("/api/popup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    }).then((r) => r.ok);

    if (ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="popup-overlay" ref={overlayRef} onClick={handleOverlayClick}>
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          ×
        </button>

        <h2 className="sm-title">Need a Trusted Digital Partner? We’re In.</h2>
        <p className="text-1">Tell us what you need—we’ll show you how we can help.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input id="name" name="name" required placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input type="email" id="email" name="email" required placeholder="you@example.com" />
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
            <textarea id="message" name="message" rows="4" placeholder="Briefly share what you’re looking for." />
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
