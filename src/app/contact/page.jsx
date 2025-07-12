/*  app/contact/page.jsx  */
"use client";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/Footer";
import { HeroAllSection } from "../components/HeroAllSection";
import PopupForm from "../components/PopupForm";
import { TextCounterSection } from "../components/TextCounterSection";

/* ───────────────────────── progress bar ───────────────────────── */
function ProgressBar({ current, labels, setStep }) {
  return (
    <ol className="progress-bar">
      {labels.map((lbl, i) => (
        <li key={lbl} onClick={() => setStep(i)} className={i <= current ? "done" : ""}>
          {lbl}
        </li>
      ))}
    </ol>
  );
}

/* ───────────────────────── main page ───────────────────────── */
export default function ContactPage() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("");

  const empty = {
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    service: "",
    goal: "",
    budget: "",
    referral: ""
  };
  const [formData, setFormData] = useState(empty);

  /* keep inputs controlled */
  const onChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  /* single submit handler – advances steps & sends mail on last step */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    /* check visible required inputs on current step */
    const visibleInvalid = Array.from(form.querySelectorAll("[required]")).some((inp) => inp.closest(".form-group")?.offsetParent !== null && !inp.checkValidity());
    if (visibleInvalid) {
      form.reportValidity();
      return;
    }

    /* if not last step → just advance */
    if (step < steps.length - 1) {
      setStep(step + 1);
      return;
    }

    /* guard against totally empty payload */
    const hasContent = Object.values(formData).some((v) => typeof v === "string" && v.trim() !== "");
    if (!hasContent) {
      setStatus("Please fill in the form before submitting.");
      return;
    }

    /* final step – send email */
    setStatus("Sending…");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      setStatus(res.ok ? "Message sent successfully!" : "Failed to send message.");
      if (res.ok) {
        setFormData(empty);
        setStep(0); // reset wizard
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  /* ─────────────── step definitions ─────────────── */
  const steps = [
    {
      label: "About",
      content: (
        <>
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input id="name" name="name" required value={formData.name} onChange={onChange} placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={onChange} placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number*</label>
            <input id="phone" name="phone" required value={formData.phone} onChange={onChange} placeholder="(954) 383-8093" />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company / Brand (optional)</label>
            <input id="company" name="company" value={formData.company} onChange={onChange} placeholder="Your organisation" />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website (optional)</label>
            <input id="website" name="website" value={formData.website} onChange={onChange} placeholder="https://" />
          </div>
        </>
      )
    },
    {
      label: "Needs",
      content: (
        <>
          <div className="form-group">
            <label htmlFor="service">What do you need help with?* (select one)</label>
            <select id="service" name="service" required value={formData.service} onChange={onChange}>
              <option value="">Select</option>
              <option>Performance Marketing (Google / Meta Ads)</option>
              <option>CRM & Automation</option>
              <option>AI Agents & Chatbots</option>
              <option>Website / Landing Page</option>
              <option>VR Walkthroughs / 3D Build</option>
              <option>Branding / Creative</option>
              <option>Something Else</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="goal">Project goal or challenge* (describe briefly)</label>
            <textarea id="goal" name="goal" required rows="4" value={formData.goal} onChange={onChange} placeholder="Tell us what success looks like to you." />
          </div>
        </>
      )
    },
    {
      label: "Budget",
      content: (
        <div className="form-group">
          <label htmlFor="budget">Estimated Budget*</label>
          <select id="budget" name="budget" required value={formData.budget} onChange={onChange}>
            <option value="">Select budget</option>
            <option>Less than $1,000</option>
            <option>$1,000–$5,000</option>
            <option>$5,000–$10,000</option>
            <option>$10,000+</option>
            <option>Not sure yet</option>
          </select>
        </div>
      )
    },
    {
      label: "Finish",
      content: (
        <div className="form-group">
          <label htmlFor="referral">How did you hear about us?</label>
          <select id="referral" name="referral" value={formData.referral} onChange={onChange}>
            <option value="">Select</option>
            <option value="Google">Google</option>
            <option value="Social Media">Social Media</option>
            <option value="Referral">Referral</option>
            <option value="Saw your work">Saw your work</option>
            <option value="Other">Other</option>
          </select>
        </div>
      )
    }
  ];

  /* ─────────────── page JSX ─────────────── */
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <HeroAllSection
        title1="Let’s Talk About"
        title2="Growing Your Business"
        description={`Need better visibility, stronger branding, <br/> or scroll-stopping video? Tell us what you<br/> need — we'll help you get there.`}
        btn_text="Book a Free Strategy Call"
        onBtnClick={() => setShowPopup(true)}
        id={"team-hero"}
        
      />
      <div id="team-hero"></div>
      <TextCounterSection text="Start your project — or just start the conversation." paragraph="Tell us what’s not working — and where you want to go. We’ll respond with clear steps to help." />

      <section className="contact-sec">
        <div className="container">
          <div className="flex-box">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <ProgressBar current={step} setStep={setStep} labels={steps.map((s) => s.label)} />

              {steps[step].content}

              <div className="btn-group" style={{ marginTop: "2rem" }}>
                {step > 0 && (
                  <button type="button" className="btn prev-btn" onClick={() => setStep(step - 1)}>
                    Previous
                  </button>
                )}

                {step < steps.length - 1 ? (
                  <button type="submit" className="btn next-btn">
                    Next
                  </button>
                ) : (
                  <button type="submit" className="btn form-btn">
                    Send My Project Brief
                  </button>
                )}
              </div>

              {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
            </form>

            <div className="contact-img">
              <Image src="/images/contacct.webp" alt="contact" width={800} height={830} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
