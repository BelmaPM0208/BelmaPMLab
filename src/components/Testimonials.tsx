import React, { useState, useEffect } from "react";
import { Quote, Star, Sparkles, Plus, AlertCircle, ArrowLeft, Send } from "lucide-react";
import { Testimonial } from "../types";
import { TESTIMONIALS_DATA } from "../data";

interface TestimonialsProps {
  onBackToHome: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onBackToHome }) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Form states for submitting new testimonial
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<"SaaS Product Led Growth" | "Agile Roadmap Delivery" | "Operational Systems">("SaaS Product Led Growth");
  const [impactMetric, setImpactMetric] = useState("");
  const [impactLabel, setImpactLabel] = useState("");
  const [rating, setRating] = useState(5);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  // Load from static data and localStorage
  useEffect(() => {
    const savedTestimonials = localStorage.getItem("belma_testimonials");
    if (savedTestimonials) {
      try {
        const parsed = JSON.parse(savedTestimonials) as Testimonial[];
        setTestimonials([...TESTIMONIALS_DATA, ...parsed]);
      } catch (e) {
        setTestimonials(TESTIMONIALS_DATA);
      }
    } else {
      setTestimonials(TESTIMONIALS_DATA);
    }
    // Scroll to top when this page is entered
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim() || !role.trim() || !company.trim() || !content.trim()) {
      setErrorMsg("Please fill in all mandatory fields (Name, Role, Company, and Endorsement Message).");
      return;
    }

    const newTestimonial: Testimonial = {
      id: `custom-testimonial-${Date.now()}`,
      name: name.trim(),
      role: role.trim(),
      company: company.trim(),
      avatarChar: name.trim().charAt(0).toUpperCase() || "C",
      content: content.trim(),
      impactMetric: impactMetric.trim() || "N/A",
      impactLabel: impactLabel.trim() || "Direct Reference",
      category,
      rating,
      websiteUrl: websiteUrl.trim() || undefined
    };

    const updatedCustomList: Testimonial[] = [];
    const saved = localStorage.getItem("belma_testimonials");
    if (saved) {
      try {
        updatedCustomList.push(...JSON.parse(saved));
      } catch (e) { /* fallback */ }
    }
    updatedCustomList.push(newTestimonial);
    localStorage.setItem("belma_testimonials", JSON.stringify(updatedCustomList));

    setTestimonials([...TESTIMONIALS_DATA, ...updatedCustomList]);
    setSubmitSuccess(true);

    // Reset fields
    setName("");
    setRole("");
    setCompany("");
    setContent("");
    setImpactMetric("");
    setImpactLabel("");
    setRating(5);
    setWebsiteUrl("");

    setTimeout(() => {
      setSubmitSuccess(false);
      setIsFormOpen(false);
    }, 2500);
  };

  const categories = ["All", "SaaS Product Led Growth", "Agile Roadmap Delivery", "Operational Systems"];

  const filteredTestimonials = selectedCategory === "All"
    ? testimonials
    : testimonials.filter(t => t.category === selectedCategory);

  return (
    <section className="bg-sand-50 min-h-screen py-24 px-4 sm:px-6 lg:px-8 border-b border-sand-300" id="testimonials-workspace">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Breadcrumb back to main app */}
        <div className="mb-12" id="testimonials-nav">
          <button
            onClick={onBackToHome}
            className="group flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.15em] text-sage-500 hover:text-silver-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Strategic Portfolio
          </button>
        </div>

        {/* Dynamic Display Title & Description */}
        <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-16" id="testimonials-header">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage-500 block mb-3">Client Trust</span>
            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-silver-900 leading-none">
              Validated Client <br />
              <span className="italic block mt-1">Endorsements & Impact</span>
            </h1>
            <p className="mt-4 text-sm text-sage-700 leading-relaxed font-sans max-w-lg">
              Real results, proven in the real world. Every milestone and metric here has been verified by the startup founders, engineering leads, and clients who lived them.
            </p>
          </div>

          <div className="mt-8 md:mt-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="px-6 py-3 bg-sage-500 hover:bg-sage-600 text-white rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Provide Endorsement
            </button>
          </div>
        </div>

        {/* Collapsible Endorsement Submission Form Drawer */}
        {isFormOpen && (
          <div className="mb-12 p-8 bg-white border border-sand-300 rounded-2xl shadow-sm transition-all animate-fadeIn" id="testimonial-write-form">
            <h3 className="text-2xl font-display font-semibold text-silver-900 mb-2">Provide an Advisory Endorsement</h3>
            <p className="text-xs text-sage-600 font-sans mb-6">
              Your feedback is stored directly on your browser space and integrated cleanly into the live grid view below.
            </p>

            {submitSuccess ? (
              <div className="p-4 bg-sage-100 border border-sage-300 text-sage-800 rounded-xl flex items-center gap-3 text-sm">
                <Sparkles className="w-5 h-5 text-sage-500 animate-spin" />
                <span>Thank you! Your endorsement has been verified & seamlessly integrated into the grid below.</span>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5" id="direct-testimonial-form">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2 text-xs">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Stefan Vance"
                      className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Professional Role *</label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Co-founder & VP of Growth"
                      className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Company *</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. HulkApps / Shop Circle"
                      className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sans">
                  <div className="flex flex-col">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Impact Metric (Optional)</label>
                    <input
                      type="text"
                      value={impactMetric}
                      onChange={(e) => setImpactMetric(e.target.value)}
                      placeholder="e.g. +38% client base"
                      className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Impact Label (Optional)</label>
                    <input
                      type="text"
                      value={impactLabel}
                      onChange={(e) => setImpactLabel(e.target.value)}
                      placeholder="e.g. SaaS User Expansion"
                      className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Website URL (Optional)</label>
                  <input
                    type="url"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="e.g. https://shopcircle.co"
                    className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Endorsement Message *</label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Provide detailed context of the metrics achieved, project complexity, and collaboration style..."
                    rows={4}
                    className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-2 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600">Client Satisfaction Rating:</span>
                    <div className="flex gap-1" id="star-selector">
                      {[1, 2, 3, 4, 5].map((starValue) => (
                        <button
                          key={starValue}
                          type="button"
                          onClick={() => setRating(starValue)}
                          className="text-gold-400 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star className={`w-5 h-5 ${starValue <= rating ? "fill-gold-400 text-gold-500" : "text-sand-300"}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="px-5 py-2.5 border border-sand-300 rounded-full font-sans text-xs font-semibold uppercase tracking-wider text-silver-700 hover:bg-sand-100 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-silver-900 hover:bg-silver-800 text-white rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Verify & Add Live
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Categories Filtering Index Toolbar hidden until we have more testimonials */}

        {/* Bento Grid layout of testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="testimonials-bento-grid">
          {filteredTestimonials.length === 0 ? (
            <div className="col-span-1 md:col-span-2 text-center py-16 bg-white border border-sand-300 rounded-2xl" id="empty-state">
              <AlertCircle className="w-12 h-12 text-sand-300 mx-auto mb-3 animate-pulse" />
              <p className="text-sm font-sans text-sage-600 font-semibold uppercase tracking-wider">No testimonials matching the active filters</p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="mt-4 text-xs font-mono font-bold text-sage-500 hover:text-silver-900 underline block mx-auto cursor-pointer"
              >
                Reset Filter Matrix
              </button>
            </div>
          ) : (
            filteredTestimonials.map((item, idx) => {
              const isWide = idx % 3 === 0 || item.id === "testimonial-1" || item.id === "testimonial-2" || !!item.secondaryImpactMetric;
              
              return (
                <div
                  key={item.id}
                  className={`bg-white border border-sand-300 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group ${
                    isWide ? "md:col-span-2 md:grid md:grid-cols-12 md:gap-8 items-stretch" : ""
                  }`}
                  id={`card-${item.id}`}
                >
                  {/* Visual quote accent mark in absolute layout */}
                  <div className="absolute top-6 right-6 text-sand-100 group-hover:text-gold-100 transition-colors pointer-events-none">
                    <Quote className="w-16 h-16 stroke-[1]" />
                  </div>

                  {/* Left side metrics for larger card span */}
                  {isWide ? (
                    <div className="md:col-span-4 flex flex-col justify-center border-b md:border-b-0 md:border-r border-sand-200 pb-6 md:pb-0 md:pr-8 mb-6 md:mb-0 space-y-5">
                      <div>
                        <div className="text-4xl md:text-5xl font-display font-bold text-silver-900 tracking-tight leading-none mb-1">
                          {item.impactMetric}
                        </div>
                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600">
                          {item.impactLabel}
                        </div>
                      </div>

                      {item.secondaryImpactMetric && (
                        <div className="border-t border-sand-200 pt-4">
                          <div className="text-3xl md:text-4xl font-display font-bold text-silver-900 tracking-tight leading-none mb-1">
                            {item.secondaryImpactMetric}
                          </div>
                          <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600">
                            {item.secondaryImpactLabel}
                          </div>
                        </div>
                      )}
                      
                      {/* Visual Star Rating */}
                      <div className="flex gap-0.5 pt-2">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {/* Main feedback quote & client information */}
                  <div className={`${isWide ? "md:col-span-8" : "w-full flex h-full flex-col justify-between"}`}>
                    <div className="space-y-4">
                      {!isWide && (
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex gap-0.5">
                            {Array.from({ length: item.rating }).map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                            ))}
                          </div>
                        </div>
                      )}

                      <blockquote className="text-lg md:text-xl font-display italic text-charcoal-800 leading-relaxed font-normal">
                        &ldquo;{item.content}&rdquo;
                      </blockquote>
                    </div>

                    {/* Client Metadata block */}
                    <div className={`flex items-center gap-4 mt-8 ${!isWide ? "border-t border-sand-100 pt-5" : ""}`}>
                      <div className="w-12 h-12 rounded-full bg-sand-100 border border-sand-300 flex items-center justify-center text-silver-700 font-display font-semibold text-lg uppercase shadow-inner flex-shrink-0">
                        {item.avatarChar}
                      </div>
                      <div>
                        <h4 className="font-sans font-semibold text-sm text-silver-900 leading-none">{item.name}</h4>
                        <p className="font-sans text-xs text-sage-600 mt-1.5 leading-none">
                          {item.role} at{" "}
                          {item.websiteUrl ? (
                            <a
                              href={item.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-gold-600 hover:text-gold-700 hover:underline transition-colors inline-block"
                            >
                              {item.company}
                              <span className="text-[10px] ml-0.5 select-none text-gold-500">↗</span>
                            </a>
                          ) : (
                            <span className="font-semibold">{item.company}</span>
                          )}
                        </p>
                      </div>

                       {/* Compact inline metrics for standard cards */}
                       {!isWide && item.impactMetric !== "N/A" && (
                         <div className="ml-auto text-right flex flex-col justify-center items-end">
                           <div>
                             <span className="text-base font-bold font-sans text-gold-500 block leading-none">{item.impactMetric}</span>
                             <span className="text-[9px] font-mono text-sage-500 uppercase block tracking-wider mt-1">{item.impactLabel}</span>
                           </div>
                           {item.secondaryImpactMetric && (
                             <div className="border-t border-sand-200 pt-1.5 mt-1.5 w-full text-right">
                               <span className="text-base font-bold font-sans text-gold-500 block leading-none">{item.secondaryImpactMetric}</span>
                               <span className="text-[9px] font-mono text-sage-500 uppercase block tracking-wider mt-1">{item.secondaryImpactLabel}</span>
                             </div>
                           )}
                         </div>
                       )}
                    </div>
                  </div>

                </div>
              );
            })
          )}
        </div>

        {/* Bottom CTA to encourage strategic conversion */}
        <div className="mt-16 p-12 bg-silver-900 text-white rounded-3xl text-center relative overflow-hidden shadow-inner" id="testimonials-cta">
          <div className="absolute top-0 left-0 w-64 h-64 bg-sage-500/10 rounded-full filter blur-3xl" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-[10px] font-bold font-mono uppercase tracking-[0.3em] text-gold-400 block">Orchestrate High-Performance Loops</span>
            <h2 className="text-3xl md:text-5xl font-display tracking-tight text-white leading-tight">
              Ready to Accelerate Your <br />
              <span className="italic">Product Growth Velocity?</span>
            </h2>
            <p className="text-sm font-sans font-light text-silver-300 max-w-md mx-auto leading-relaxed">
              Leverage customized strategic blueprints and generative AI specifications to turn your digital product into your primary acquisition system.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBackToHome}
                className="px-8 py-3.5 bg-white text-silver-900 hover:bg-silver-100 active:bg-silver-200 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all shadow-sm cursor-pointer"
              >
                View Services & Pricing
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
