import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Compass, TrendingUp, Zap } from "lucide-react";
import { LogoSymbol } from "./Logo";
import { ActiveSection } from "../types";

interface HeroProps {
  onSectionChange: (section: ActiveSection) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSectionChange }) => {
  const handleScrollTo = (id: ActiveSection) => {
    onSectionChange(id);
    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 155, damping: 15 },
    },
  };

  return (
    <section
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden bg-gradient-to-tr from-silver-50 via-white to-gold-50/20"
      id="home"
    >
      {/* Decorative backdrop gradients */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold-200/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-1/4 w-[350px] h-[350px] bg-silver-200/20 rounded-full filter blur-3xl pointer-events-none" />

      {/* Grid Pattern Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f00a_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f00a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10" id="hero-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Block: Narrative, Typography & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            {/* Top Indicator */}
            <motion.div variants={badgeVariants} className="inline-flex self-center lg:self-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-silver-100 text-[#8C7355] border border-silver-150 shadow-sm font-bold">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                </span>
                AI-Powered Product & Growth
              </span>
            </motion.div>

            {/* Display Headings */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6.5xl font-normal font-display leading-[1.08] tracking-tight text-silver-900"
              >
                Where <span className="italic text-sage-500 font-medium">Product</span> Meets <span className="underline decoration-sand-300 decoration-wavy decoration-1 font-semibold text-clay-500">Growth</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-sage-600 max-w-2xl mx-auto lg:mx-0 font-sans font-light leading-relaxed"
              >
                I partner with ambitious startups and scale-ups, utilizing advanced AI tools and productivity models to orchestrate high-fidelity orchestration schemas, build sustainable activation loops, and 10x roadmap implementation velocities.
              </motion.p>
            </div>

            {/* Interactive Call to Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full"
              id="hero-cta-buttons"
            >
              <a
                href="https://calendly.com/belma-belmapmlab/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-silver-900 text-white rounded-full font-sans text-sm font-semibold uppercase tracking-wider hover:bg-sage-600 active:bg-silver-950 transition-all shadow-md shadow-silver-900/10 hover:shadow-lg hover:scale-[1.01] flex items-center justify-center gap-2 text-center decoration-none"
                id="hero-contact-cta"
              >
                Book Free Discovery Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => handleScrollTo("services")}
                className="w-full sm:w-auto px-8 py-4 bg-white/60 backdrop-blur text-silver-800 border-2 border-sand-300 rounded-full font-sans text-sm font-semibold uppercase tracking-wider hover:bg-white hover:border-silver-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="hero-portfolio-cta"
              >
                Explore Consulting Packages
              </button>
            </motion.div>

            {/* Structured Value Props List */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-sand-300 grid grid-cols-3 gap-4"
              id="hero-value-props"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
                <Compass className="w-5 h-5 text-clay-400 mb-1" />
                <span className="font-sans font-semibold text-sm text-silver-900">Roadmap Strategy</span>
                <span className="text-xs text-silver-500">Milestones & Growth</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
                <TrendingUp className="w-5 h-5 text-clay-400 mb-1" />
                <span className="font-sans font-semibold text-sm text-silver-900">Funnel Optimization</span>
                <span className="text-xs text-silver-500">Product Analytics</span>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1">
                <Zap className="w-5 h-5 text-clay-400 mb-1" />
                <span className="font-sans font-semibold text-sm text-silver-900">PLG Loop Design</span>
                <span className="text-xs text-silver-500">Activation & Expansion</span>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Logo Symbol Showcase inside a stylized Hexagonal Aura */}
          <div className="lg:col-span-5 flex items-center justify-center relative md:py-12" id="hero-graphics-container">
            {/* Pulsing Backlight */}
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-sage-200/20 to-clay-200/20 rounded-full filter blur-3xl animate-pulse" />

            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="relative bg-white/50 backdrop-blur p-10 rounded-3xl border border-sand-300 shadow-xl max-w-[340px] md:max-w-[380px] w-full flex flex-col items-center text-center group hover:shadow-2xl hover:border-sage-300/40 transition-all duration-300"
              id="hero-logo-box"
            >
              <div className="relative mb-6">
                {/* SVG Symbol rendered with generous sizing */}
                <LogoSymbol size={180} className="transform group-hover:scale-105 transition-transform duration-500" />
                
                {/* Visual shadow effect */}
                <div className="absolute bottom-0 left-12 right-12 h-4 bg-silver-900/5 rounded-full blur-md opacity-70" />
              </div>

              {/* Taglines replicating the logo's core design aesthetic */}
              <div className="space-y-2 mt-4">
                <h2 className="text-2xl font-bold font-display tracking-[0.18em] text-silver-900 uppercase">
                  Belma PM Lab
                </h2>
                <p className="text-[10px] font-bold tracking-[0.25em] text-sage-500 uppercase whitespace-nowrap">
                  Where Product Meets Growth
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
