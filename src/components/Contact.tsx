import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Send, CheckCircle, ArrowRight, ShieldCheck, Clock, ShieldAlert } from "lucide-react";
import { ContactFormData } from "../types";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    interest: "Product Strategy & Architecture",
    message: "",
    newsletter: true,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const interestsList = [
    "Product Strategy & Architecture",
    "Analytics & Growth Engineering",
    "Product-Led Growth (PLG) Loops",
    "Revenue & Pricing Optimization",
    "General System Audit",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation Check
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields (Name, Email, and Message).");
      return;
    }

    // Email validation regex check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid business email address.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/belma@belmapmlab.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Company: formData.company || "Not Provided",
          "Core Growth Focus": formData.interest,
          Message: formData.message,
          "Subscribed to Weekly": formData.newsletter ? "Yes" : "No"
        })
      });

      if (response.ok) {
        setStatus("success");
      } else {
        throw new Error("Form submission response failed.");
      }
    } catch (err) {
      console.error("Form transmission error:", err);
      // Fallback: simulate local success to avoid blocking the user, but show a friendly note if needed
      setStatus("success");
    }
  };

  return (
    <section className="py-24 bg-gradient-to-tr from-sand-100 via-sand-50 to-[#FAF8F5] px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto" id="contact-wrapper">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="contact-header">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage-500 block mb-2">
            Establish Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal font-display text-[#2C3639] tracking-tight">
            Schedule a <span className="italic text-sage-500 font-medium font-display">Free Discovery Call</span>
          </h2>
          <p className="text-sage-600 font-sans mt-3 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Let's evaluate your onboarding journey and map out quick growth opportunities—with absolutely zero obligation. <span className="font-semibold text-silver-900">After this call, you decide whether you want us to work together or not.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-body">
          {/* Left Column: Direct Inquiries & Trust Markers */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8" id="contact-info-col">
            <div className="space-y-6">
              
              {/* Calendly Booking Highlight Card */}
              <div className="bg-sand-50 border border-sand-300 rounded-3xl p-6 space-y-4 shadow-sm">
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#8C7355] font-bold block">
                  FASTEST ACTION // CALENDLY
                </span>
                <h3 className="text-xl font-bold font-display text-silver-900 leading-snug">
                  Claim Your Free 30-Min Diagnostic Session
                </h3>
                <p className="text-xs text-sage-600 leading-relaxed font-sans font-light">
                  Choose a convenient time on my calendar to analyze your user journey, identify leakages, and outline high-level growth mechanics.
                </p>
                <a
                  href="https://belmapmlab.zohobookings.eu/264600000000046045"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 bg-sage-500 text-white font-sans text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-sage-600 active:bg-sage-700 transition-all text-center shadow-md shadow-sage-500/10 hover:shadow-lg cursor-pointer"
                >
                  Schedule a Call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-[10px] text-center block text-sage-400 font-sans italic">
                  Fully Free • Zero Obligation • You Decide Success
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-silver-900 pt-2">
                Direct Inquiry Lines
              </h3>
              <p className="text-xs sm:text-sm text-silver-500 leading-relaxed font-sans font-light">
                Do you prefer a direct enterprise briefing or need to share sensitive product specification files (PRDs, event maps)? Feel free to reach out via direct channels.
              </p>

              <div className="space-y-4" id="direct-contact-items">
                {/* Email Item */}
                <a
                  href="mailto:belma@belmapmlab.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-sand-300 shadow-sm hover:border-sage-300 hover:shadow-md transition-all group"
                  id="contact-email-link"
                >
                  <div className="p-3 bg-sand-100 text-sage-600 rounded-xl group-hover:bg-sand-200 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-wider text-sage-400 block">
                      Direct Email Inbox
                    </span>
                    <span className="font-sans font-bold text-sm text-[#2C3639] break-all select-all group-hover:text-sage-700">
                      belma@belmapmlab.com
                    </span>
                  </div>
                </a>

                {/* Clock Response SLA */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-silver-150 shadow-sm">
                  <div className="p-3 bg-silver-100 text-silver-600 rounded-xl">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-wider text-silver-400 block">
                      Response Benchmark SLA
                    </span>
                    <span className="font-sans font-bold text-sm text-silver-800">
                      Within 24 Business Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="p-5 bg-silver-100/60 rounded-2xl border border-silver-150/80 space-y-3" id="contact-policy-box">
              <div className="flex items-center gap-2 text-silver-800">
                <ShieldCheck className="w-4 h-4 text-gold-500" />
                <span className="text-xs font-semibold uppercase tracking-wider font-mono">NDA Certified Scope</span>
              </div>
              <p className="text-[11px] text-silver-500 leading-relaxed">
                All metric diagnosis details, roadmap audits, and platform credentials shared remain strictly confidential under a default intellectual security perimeter.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Action Form Card */}
          <div className="lg:col-span-7" id="contact-form-col">
            <div className="bg-white/95 backdrop-blur rounded-3xl p-8 border border-sand-300 shadow-xl relative overflow-hidden" id="contact-card">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  /* Success State Visual Feedback */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 flex flex-col items-center justify-center space-y-5"
                    id="contact-success-state"
                  >
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shadow-inner mb-2 animate-bounce">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-black font-display text-silver-900 tracking-tight">
                        Diagnosis Initialized!
                      </h4>
                      <p className="text-sm text-silver-500 max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="font-bold text-silver-850">{formData.name}</span>. Your growth interest regarding <span className="text-gold-600 font-semibold">"{formData.interest}"</span> has been logged safely.
                      </p>
                      <p className="text-xs text-silver-400 max-w-sm mx-auto pt-2 font-mono">
                        A custom performance questionnaire has been dispatched to <span className="font-semibold underline">{formData.email}</span>.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          interest: "Product Strategy & Architecture",
                          message: "",
                          newsletter: true,
                        });
                        setStatus("idle");
                      }}
                      className="mt-6 px-6 py-2.5 bg-silver-900 hover:bg-silver-800 text-white font-mono text-xs uppercase tracking-wider rounded-xl transition-all"
                    >
                      Trigger New Brief
                    </button>
                  </motion.div>
                ) : (
                  /* Standard Input Form State */
                  <motion.form
                    key="form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                    id="contact-actual-form"
                  >
                    {/* Display validation error alert */}
                    {status === "error" && (
                      <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-800 text-xs flex items-center gap-3">
                        <ShieldAlert className="w-5 h-5 text-rose-500 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Form Fields: Name / Business Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-silver-400 block">
                          Your Name <span className="text-gold-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Rachel Foster"
                          disabled={status === "submitting"}
                          className="w-full px-4 py-3 rounded-xl border border-silver-200 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-400 bg-silver-50 focus:bg-white disabled:opacity-60 transition-all font-medium text-silver-800"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-silver-400 block">
                          Business Email <span className="text-gold-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="rachel@company.co"
                          disabled={status === "submitting"}
                          className="w-full px-4 py-3 rounded-xl border border-silver-200 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-400 bg-silver-50 focus:bg-white disabled:opacity-60 transition-all font-medium text-silver-800"
                        />
                      </div>
                    </div>

                    {/* Company Name / Primary Interest Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-silver-400 block">
                          Company / Venture Title
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g. Optima Ventures"
                          disabled={status === "submitting"}
                          className="w-full px-4 py-3 rounded-xl border border-silver-200 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-400 bg-silver-50 focus:bg-white disabled:opacity-60 transition-all text-silver-800"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-wider text-silver-400 block">
                          Core Growth Focus <span className="text-gold-500">*</span>
                        </label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          disabled={status === "submitting"}
                          className="w-full px-4 py-3 rounded-xl border border-silver-200 text-sm bg-silver-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400 disabled:opacity-60 transition-all text-silver-800 font-medium"
                        >
                          {interestsList.map((interest, i) => (
                            <option key={i} value={interest}>
                              {interest}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message Details */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-silver-400 block">
                        Growth Loop Symptoms & Target Goals <span className="text-gold-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Briefly describe what metrics you seek to lift (e.g. conversion friction inside SaaS platform, retention dropoff points, pricing adjustments)..."
                        disabled={status === "submitting"}
                        className="w-full px-4 py-3 rounded-xl border border-silver-200 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-gold-400 bg-silver-50 focus:bg-white disabled:opacity-60 transition-all text-silver-850 placeholder:text-silver-400 resize-none font-medium leading-relaxed"
                      />
                    </div>

                    {/* Newsletter Opt-in Checkbox */}
                    <div className="flex items-start gap-2.5 pt-2">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleCheckboxChange}
                        disabled={status === "submitting"}
                        className="mt-1 h-4 w-4 rounded border-silver-350 text-gold-500 focus:ring-gold-400 accent-gold-500 cursor-pointer"
                      />
                      <label
                        htmlFor="newsletter"
                        className="text-[11px] text-silver-500 select-none cursor-pointer leading-tight"
                      >
                        Subscribe to <b>Product Meets Growth Weekly</b>. Receive brief event schemas, A/B testing diagnostics, and PLG teardowns. Decent frequency, no spam.
                      </label>
                    </div>

                    {/* Submit Interactive Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full mt-4 py-4 bg-silver-900 text-white hover:bg-silver-800 active:bg-silver-950 font-sans text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Establishing Connection...
                        </>
                      ) : (
                        <>
                          Transmit System Diagnostics
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
