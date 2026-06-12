
import React, { useState } from "react";
import { Star, MessageSquare, Plus, Check, ArrowRight, X, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";
import { Testimonial } from "../types";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // Form dialog state
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Add testimonial form state
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [content, setContent] = useState("");
  const [impactMetric, setImpactMetric] = useState("");
  const [impactLabel, setImpactLabel] = useState("");
  const [secondaryImpactMetric, setSecondaryImpactMetric] = useState("");
  const [secondaryImpactLabel, setSecondaryImpactLabel] = useState("");
  const [rating, setRating] = useState(5);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [category, setCategory] = useState<"SaaS Product Led Growth" | "Agile Roadmap Delivery" | "Operational Systems">("SaaS Product Led Growth");

  const categories = ["All", "SaaS Product Led Growth", "Agile Roadmap Delivery", "Operational Systems"];

  const filteredTestimonials = selectedCategory === "All" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !role || !company || !content) return;

    const newTestimonial: Testimonial = {
      id: `testimonial-custom-${Date.now()}`,
      name,
      role,
      company,
      avatarChar: name.charAt(0).toUpperCase(),
      content,
      impactMetric: impactMetric || "N/A",
      impactLabel: impactLabel || "Outcome Verified",
      secondaryImpactMetric: secondaryImpactMetric || undefined,
      secondaryImpactLabel: secondaryImpactLabel || undefined,
      category,
      rating,
      websiteUrl: websiteUrl || undefined
    };

    setTestimonials(prev => [...prev, newTestimonial]);
    setSuccess(true);
    
    // Reset form fields
    setTimeout(() => {
      setIsOpen(false);
      setSuccess(false);
      setName("");
      setRole("");
      setCompany("");
      setContent("");
      setImpactMetric("");
      setImpactLabel("");
      setSecondaryImpactMetric("");
      setSecondaryImpactLabel("");
      setWebsiteUrl("");
    }, 1500);
  };

  return (
    <section className="py-24 bg-sand-50 relative overflow-hidden text-silver-900 border-t border-sand-200" id="testimonials">
      {/* Visual background details */}
      <div className="absolute top-0 left-12 w-64 h-64 bg-gold-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-96 h-96 bg-sand-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gold-600 px-3 py-1 bg-gold-50 border border-gold-200 rounded-full inline-block mb-3">
              Performance Verification
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-light text-silver-950 tracking-tight leading-none">
              Client Proof & 
              <span className="italic block mt-1">Endorsements & Impact</span>
            </h1>
            <p className="mt-4 text-sm text-sage-700 leading-relaxed font-sans max-w-lg">
              Real results, proven in the real world. Every milestone and metric here has been verified by the startup founders, engineering leads, and clients who lived them.
            </p>
          </div>

          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 bg-silver-950 hover:bg-silver-900 text-white font-sans text-xs font-semibold px-5 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all tracking-wide cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Submit Endorsement
            </button>
          </div>
        </div>

        {/* Modal Form Dialog */}
        {isOpen && (
          <div className="fixed inset-0 bg-silver-950/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white border border-sand-300 rounded-2xl max-w-2xl w-full p-8 relative shadow-2xl my-8">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-sage-400 hover:text-silver-900 p-1.5 hover:bg-sand-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {success ? (
                <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-gold-50 border border-gold-200 text-gold-600 rounded-full flex items-center justify-center shadow-md">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-silver-950">Endorsement Received</h3>
                  <p className="font-sans text-xs text-sage-600 max-w-xs">
                    Thank you for verifying your strategic metrics! Your reference has been updated.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-silver-950 flex items-center gap-2">
                      <MessageSquare className="w-6 h-6 text-gold-500" />
                      Verify Strategic Metrics
                    </h3>
                    <p className="text-xs text-sage-600 mt-1 font-sans">
                      Add your impact outcomes and performance reference metrics directly to my validated growth matrix.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sans">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alen Malkoč"
                        className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Your Role / Title</label>
                      <input
                        type="text"
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="e.g. Founder & CEO"
                        className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sans">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Company Name</label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Shop Circle"
                        className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Company Website (Optional)</label>
                      <input
                        type="url"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="https://example.com"
                        className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
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
                        placeholder="e.g. +27% MoM"
                        className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Metric Label (Optional)</label>
                      <input
                        type="text"
                        value={impactLabel}
                        onChange={(e) => setImpactLabel(e.target.value)}
                        placeholder="e.g. Revenue Growth"
                        className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sans">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Secondary Metric (Optional)</label>
                      <input
                        type="text"
                        value={secondaryImpactMetric}
                        onChange={(e) => setSecondaryImpactMetric(e.target.value)}
                        placeholder="e.g. -35%"
                        className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Secondary Metric Label (Optional)</label>
                      <input
                        type="text"
                        value={secondaryImpactLabel}
                        onChange={(e) => setSecondaryImpactLabel(e.target.value)}
                        placeholder="e.g. Ticket Volume Drop"
                        className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600 mb-1.5">Endorsement & Strategic Value Added</label>
                    <textarea
                      required
                      rows={4}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Share exact strategic changes made, funnel optimization milestones, or engineering team outcomes we hit..."
                      className="px-4 py-2.5 bg-sand-50 border border-sand-300 rounded-lg text-sm text-silver-900 focus:outline-none focus:ring-1 focus:ring-sage-500 font-sans resize-none"
                    />
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-sand-200">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sage-600">Verification Rating:</span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setRating(star)}
                            className="p-0.5 cursor-pointer hover:scale-110 transition-transform"
                          >
                            <Star 
                              className={`w-5 h-5 ${
                                star <= rating 
                                  ? "text-gold-400 fill-gold-400" 
                                  : "text-sand-300 fill-none"
                              }`} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="flex items-center gap-1.5 bg-gold-500 hover:bg-gold-600 text-silver-950 font-sans text-xs font-bold px-5 py-3 rounded-lg transition-all cursor-pointer"
                    >
                      Authenticate Outflow
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Categories Filtering Index Toolbar hidden until we have more testimonials */}

        {/* Bento Grid layout of testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="testimonials-bento-grid">
          {filteredTestimonials.length === 0 ? (
            <div className="col-span-1 md:col-span-2 text-center py-16 bg-white border border-sand-300 rounded-2xl">
              <span className="text-sage-500 text-sm font-sans block mb-4">No active references fit this category filter.</span>
              <button 
                onClick={() => setSelectedCategory("All")}
                className="text-xs font-mono font-bold uppercase tracking-wider text-gold-600 hover:text-gold-700 underline"
              >
                Show All References
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

      </div>
    </section>
  );
}
