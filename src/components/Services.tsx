import React from "react";
import { motion } from "motion/react";
import { SERVICES_DATA } from "../data";
import * as Icons from "lucide-react";
import { HelpCircle, Check, ArrowRight } from "lucide-react";

export const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 18 },
    },
  };

  return (
    <section
      className="py-24 bg-gradient-to-br from-sand-100 via-[#FAF8F5] to-sand-200/40 px-4 sm:px-6 lg:px-8 border-b border-sand-300"
      id="services"
    >
      <div className="max-w-7xl mx-auto" id="services-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="services-header">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage-500 block mb-2">
            Services & Packages
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal font-display text-silver-900 tracking-tight">
            Consulting <span className="italic text-sage-500 font-medium font-display">Tiers</span>
          </h2>
          <p className="text-sage-600 font-sans mt-3 text-sm sm:text-base max-w-xl mx-auto font-light">
            Surgical, metrics-driven consulting to optimize user retention, construct instrumentation plans, and map sustainable activation pipelines.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          id="services-grid"
        >
          {/* Map through standard services data */}
          {SERVICES_DATA.map((service) => {
            // Safely resolve Lucide Icons dynamically
            const IconComponent = (Icons as any)[service.iconName] || HelpCircle;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`bg-white/70 backdrop-blur rounded-3xl p-8 border border-sand-300 shadow-sm hover:shadow-xl hover:border-sage-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  service.badge === "Coming Soon" ? "opacity-80 border-dashed border-sand-300" : ""
                }`}
              >
                <div>
                  {/* Top Line & Icon Placement */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-sand-100 text-silver-800 group-hover:bg-sage-50 group-hover:text-sage-600 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {service.badge && (
                      <span className={`px-2.5 py-1 rounded-full text-[9px] font-mono tracking-wider font-bold uppercase ${
                        service.badge === "Coming Soon" 
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : service.badge === "Retainer Model"
                          ? "bg-sage-50 text-sage-700 border border-sage-200"
                          : "bg-clay-50 text-clay-700 border border-clay-200"
                      }`}>
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold font-sans text-silver-900 mb-3 group-hover:text-sage-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-sage-600 leading-relaxed font-sans font-light mb-6">
                    {service.description}
                  </p>

                  {/* Key Deliverables Block */}
                  <div className="border-t border-sand-200 pt-5 mt-4 space-y-3">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-clay-500">
                      Core Scope & Focus
                    </h4>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((del, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-xs text-silver-700">
                          <span className="flex-shrink-0 p-0.5 rounded-full bg-sage-50 text-sage-600 mt-0.5">
                            <Check className="w-3 h-3" />
                          </span>
                          <span className="font-sans font-medium">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Line: Specialized Focus & Engagement Terms */}
                <div className="mt-8 pt-5 border-t border-sand-200 space-y-4">
                  {service.terms && (
                    <div className="bg-sand-50/70 rounded-xl p-3.5 border border-sand-200 text-xs text-silver-800 font-sans">
                      <span className="font-bold text-clay-500 uppercase tracking-widest text-[9px] block mb-1">Engagement & Pricing</span>
                      <span className="font-normal text-silver-750">{service.terms}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-[#8C7355] uppercase tracking-widest">
                        Growth Catalyst
                      </span>
                      <span className="text-xs font-semibold text-silver-850 tracking-tight mt-0.5">
                        {service.growthFocus}
                      </span>
                    </div>
                    {service.badge !== "Coming Soon" ? (
                      <button
                        onClick={() => {
                          const element = document.getElementById("contact");
                          if (element) {
                            window.scrollTo({
                              top: element.getBoundingClientRect().top + window.pageYOffset - 80,
                              behavior: "smooth"
                            });
                          }
                        }}
                        className="w-8 h-8 rounded-full bg-sand-100 text-sage-500 group-hover:bg-sage-500 group-hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <span className="text-[10px] font-mono tracking-widest text-amber-600 font-bold uppercase bg-amber-50 px-2 py-1 rounded">
                        Soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlight Banner / Custom Calendly Embed Link */}
        <div className="mt-16 bg-[#2C3639] text-[#F2EDE4] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-white/5" id="services-highlight-banner">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sage-400/5 rounded-full filter blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-mono bg-sage-500/20 text-sage-300 border border-sage-500/30 mb-4 font-bold">
              Actionable Strategy Consultation // Free 30-Min Call
            </span>
            <h3 className="text-2xl sm:text-3.5xl font-light font-display tracking-wide uppercase text-white leading-tight">
              Let's chat & <span className="italic text-sage-300 font-medium">co-design</span> your growth trajectory
            </h3>
            <p className="text-sm sm:text-base text-sand-100/85 mt-4 font-sans font-light leading-relaxed">
              Unlock the exact scaling opportunities for your product today! Let’s hop on a call to map out quick wins and diagnose latent friction—with absolutely zero obligation. <span className="font-semibold text-white">After this call, you decide whether you want us to work together or not.</span>
            </p>
          </div>
          <a
            href="https://calendly.com/belma-belmapmlab/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 w-full lg:w-auto px-10 py-5 bg-[#FAF8F5] text-[#2C3639] font-sans text-xs font-bold uppercase tracking-widest rounded-full transition-all hover:bg-white hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 shadow-lg min-w-[240px]"
          >
            Claim Free Call Slot
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
