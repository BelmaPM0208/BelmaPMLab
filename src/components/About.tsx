import React from "react";
import { motion } from "motion/react";
import { BIOGRAPHY_DATA } from "../data";
import { Award, UserCheck } from "lucide-react";

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="py-24 bg-sand-50 px-4 sm:px-6 lg:px-8 border-b border-sand-300" id="about">
      <div className="max-w-7xl mx-auto" id="about-container">
        
        {/* Section Header */}
        <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-16" id="about-header">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage-500 block mb-3">About Me</span>
            <h2 className="text-4xl sm:text-5xl font-normal font-display text-silver-900 tracking-tight">
              Meet <span className="italic text-sage-500">{BIOGRAPHY_DATA.name}</span>
            </h2>
            <p className="text-sage-600 font-sans mt-2 text-sm sm:text-base font-light">
              Turning user data into product improvements.
            </p>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-clay-400 font-medium tracking-widest">
            BELMA PM LAB 
          </div>
        </div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          id="about-grid"
        >
          {/* Column 1: Executive Philosophy & Strategic Approach */}
          <div className="lg:col-span-7 flex flex-col space-y-6" id="about-left-col">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold font-display text-silver-800 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-sage-500" />
                The Growth Philosophy & Strategy
              </h3>
              <div className="space-y-4 text-base text-silver-600 font-light leading-relaxed">
                {BIOGRAPHY_DATA.bioText.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <div className="p-5 bg-white border border-sand-250 rounded-2xl border-l-4 border-sage-500 shadow-sm mt-6">
                <p className="text-sm font-medium italic text-[#2C3639]">
                  "{BIOGRAPHY_DATA.philosophy}"
                </p>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Certifications and Accreditations */}
          <div className="lg:col-span-5 flex flex-col space-y-6" id="about-right-col">
            <motion.div variants={itemVariants} className="space-y-4" id="certifications-block">
              <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-silver-800 flex items-center gap-2">
                <Award className="w-5 h-5 text-sage-500" />
                Validated Accreditations & Specialties
              </h4>
              <p className="text-xs text-[#8C7355] font-sans font-light leading-relaxed">
                A solid multidisciplinary background combining business law, product development analytics, and growth user psychology.
              </p>
              <div className="flex flex-col gap-3">
                {BIOGRAPHY_DATA.credentials.map((cred, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl border border-silver-150 bg-white hover:border-gold-300 hover:shadow-sm transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-gold-50 text-gold-600 flex-shrink-0 group-hover:bg-gold-100 transition-all">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-display font-semibold text-xs text-silver-800 tracking-wide">
                        {cred.title}
                      </h5>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-silver-400 block mt-0.5">
                        {cred.organization}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
