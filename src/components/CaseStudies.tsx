import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight, TrendingUp, Compass, Target, Calendar, Sparkles } from "lucide-react";
import { CaseStudy } from "../types";

interface CaseStudiesProps {
  onBackToHome: () => void;
  onContactClick?: () => void;
}

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "case-study-1",
    number: "01",
    title: "Increasing Retention from 20% to 43%",
    subtitle: "End-to-End Activation Architecture & Journey Restructuring for an Early-Stage Self-Serve SaaS",
    category: "Product-Led Growth & Activation",
    diagnostic:
      "An early-stage self-serve product was struggling to turn new signups into returning users. While 85% of users completed onboarding, only 27% reached the first key product action, suggesting the retention problem actually started much earlier in the journey. I analyzed the end-to-end experience through the lens of activation, time-to-value, and user psychology to identify where users were failing to experience enough value to return.",
    strategy:
      "Rather than adding more features, we focused on improving the journey from signup → first value → activation → repeat usage. This included reducing friction before value, strengthening the first meaningful product experience, and creating clearer reasons for users to return after their initial session.",
    outcome:
      "Following the changes, retention increased from 20% to 43% — a 115% relative improvement. The project demonstrated that retention wasn't an isolated problem: improving how quickly users experience and understand the product's value can fundamentally change repeat behavior.",
    metrics: [
      {
        value: "20% → 43%",
        label: "Repeat Retention",
        detail: "+115% relative improvement",
      },
      {
        value: "85% vs 27%",
        label: "Diagnostic Gap",
        detail: "Onboarding done vs key action taken",
      },
      {
        value: "Signup → Return",
        label: "Journey Restructure",
        detail: "Focus on time-to-value over features",
      },
    ],
  },
];

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onBackToHome, onContactClick }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const primaryStudy = CASE_STUDIES_DATA[0];

  return (
    <section className="bg-sand-50 min-h-screen py-24 px-4 sm:px-6 lg:px-8 border-b border-sand-300" id="case-studies-workspace">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-12" id="case-studies-nav">
          <button
            onClick={onBackToHome}
            className="group flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.15em] text-sage-500 hover:text-silver-900 transition-colors cursor-pointer"
            id="back-to-home-btn"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Strategic Portfolio
          </button>
        </div>

        {/* Page Header */}
        <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-16" id="case-studies-header">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage-500 block mb-3">
              Proven Outcomes & Methodologies
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-silver-900 leading-none">
              Case <span className="italic">Studies</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-sage-700 leading-relaxed font-sans max-w-xl font-light">
              Real product interventions that shift core metrics. Deep dives into how diagnosing activation gaps and psychological friction drives sustainable SaaS growth.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <a
              href="https://calendly.com/belma-belmapmlab/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-silver-900 hover:bg-silver-800 active:bg-silver-950 text-white rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-sm"
              id="case-studies-header-cta"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              Book a Diagnostic Call
            </a>
          </div>
        </div>

        {/* Main Case Study Article Card */}
        <div className="bg-white border border-sand-300 rounded-3xl shadow-sm overflow-hidden" id="case-study-1-card">
          
          {/* Card Top Banner with Tags & Key Numbers */}
          <div className="p-8 sm:p-12 border-b border-sand-200 bg-gradient-to-br from-[#FAF8F5] via-white to-sand-100/40">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-sage-50 border border-sage-200 text-[11px] font-mono font-bold uppercase tracking-wider text-sage-600">
                Case Study #{primaryStudy.number}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-sand-100 border border-sand-300 text-[11px] font-mono font-semibold uppercase tracking-wider text-silver-700">
                {primaryStudy.category}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-normal text-silver-950 tracking-tight max-w-3xl leading-tight">
              {primaryStudy.title}
            </h2>
            
            <p className="mt-4 text-base sm:text-lg text-sage-600 font-sans font-light max-w-3xl leading-relaxed">
              {primaryStudy.subtitle}
            </p>

            {/* High-Impact Stat Strip */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-sand-200">
              {primaryStudy.metrics.map((metric, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-sand-50/80 border border-sand-200/80">
                  <div className="text-2xl sm:text-3xl font-display font-semibold text-silver-900 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-sage-500 mt-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-sage-600 font-sans mt-0.5 font-light">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Journey Blueprint */}
          <div className="px-8 sm:px-12 py-8 bg-sand-50/60 border-b border-sand-200">
            <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-sage-500 mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4" />
              Restructured User Journey Model
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 rounded-xl bg-white border border-sand-200">
                <div className="text-[10px] font-mono text-sage-500 uppercase font-semibold">Stage 1</div>
                <div className="text-sm font-semibold text-silver-900 mt-1">Signup</div>
                <div className="text-xs text-sage-600 font-light mt-0.5">Friction reduced before value</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-sand-200">
                <div className="text-[10px] font-mono text-sage-500 uppercase font-semibold">Stage 2</div>
                <div className="text-sm font-semibold text-silver-900 mt-1">First Value</div>
                <div className="text-xs text-sage-600 font-light mt-0.5">Accelerated time-to-value</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-sand-200">
                <div className="text-[10px] font-mono text-sage-500 uppercase font-semibold">Stage 3</div>
                <div className="text-sm font-semibold text-silver-900 mt-1">Activation</div>
                <div className="text-xs text-sage-600 font-light mt-0.5">Meaningful first product action</div>
              </div>
              <div className="p-4 rounded-xl bg-sage-50 border border-sage-300">
                <div className="text-[10px] font-mono text-sage-600 uppercase font-semibold">Stage 4 · Outcome</div>
                <div className="text-sm font-semibold text-sage-900 mt-1">Repeat Usage</div>
                <div className="text-xs text-sage-700 font-medium mt-0.5">Retention doubled (20% → 43%)</div>
              </div>
            </div>
          </div>

          {/* Narrative Content: Diagnostic -> Strategy -> Measurable Outcome */}
          <div className="p-8 sm:p-12 space-y-12">
            
            {/* 1. Diagnostic */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4 space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-sage-500 block">
                  Phase 01
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-silver-900">
                  The Retention Diagnostic
                </h3>
                <p className="text-xs text-sage-500 font-mono">
                  Symptom vs. Root Cause
                </p>
              </div>
              <div className="md:col-span-8 bg-sand-50/50 p-6 sm:p-7 rounded-2xl border border-sand-200">
                <p className="text-sm sm:text-base text-silver-800 font-sans font-light leading-relaxed">
                  {primaryStudy.diagnostic}
                </p>
                <div className="mt-4 pt-4 border-t border-sand-200 flex items-center gap-2 text-xs font-mono text-sage-600">
                  <Target className="w-4 h-4 text-sage-500 flex-shrink-0" />
                  <span>Key Discovery: 85% completed onboarding, but only 27% reached first value action.</span>
                </div>
              </div>
            </div>

            {/* 2. Strategy */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4 space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-sage-500 block">
                  Phase 02
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-silver-900">
                  Strategic Intervention
                </h3>
                <p className="text-xs text-sage-500 font-mono">
                  Friction Reduction & Value Delivery
                </p>
              </div>
              <div className="md:col-span-8 bg-sand-50/50 p-6 sm:p-7 rounded-2xl border border-sand-200">
                <p className="text-sm sm:text-base text-silver-800 font-sans font-light leading-relaxed">
                  {primaryStudy.strategy}
                </p>
                <div className="mt-4 pt-4 border-t border-sand-200 flex items-center gap-2 text-xs font-mono text-sage-600">
                  <Compass className="w-4 h-4 text-sage-500 flex-shrink-0" />
                  <span>Principle: Value before friction. Provide immediate clarity on why to return.</span>
                </div>
              </div>
            </div>

            {/* 3. Outcome */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4 space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-sage-500 block">
                  Phase 03
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-silver-900">
                  Measurable Impact
                </h3>
                <p className="text-xs text-sage-500 font-mono">
                  +115% Relative Improvement
                </p>
              </div>
              <div className="md:col-span-8 bg-sage-50/70 p-6 sm:p-7 rounded-2xl border border-sage-200">
                <p className="text-sm sm:text-base text-silver-900 font-sans font-normal leading-relaxed">
                  {primaryStudy.outcome}
                </p>
                <div className="mt-4 pt-4 border-t border-sage-200 flex items-center gap-2 text-xs font-mono font-semibold text-sage-700">
                  <TrendingUp className="w-4 h-4 text-sage-600 flex-shrink-0" />
                  <span>Verified Result: Retention surged from 20% to 43%.</span>
                </div>
              </div>
            </div>

            {/* Key Takeaway Banner */}
            <div className="p-6 sm:p-8 rounded-2xl bg-silver-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-mono font-bold uppercase tracking-widest">
                  <Sparkles className="w-4 h-4" />
                  Core Strategic Takeaway
                </div>
                <p className="text-sm text-silver-300 font-sans font-light leading-relaxed">
                  Retention is rarely an isolated problem at the end of the lifecycle. When users experience and comprehend product value quickly during their initial session, repeat behavior changes permanently.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href="https://calendly.com/belma-belmapmlab/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-white text-silver-900 hover:bg-sand-100 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 text-center"
                >
                  Book 30-Min Diagnostic
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                {onContactClick && (
                  <button
                    onClick={onContactClick}
                    className="px-5 py-3 border border-silver-700 hover:border-silver-500 text-silver-300 hover:text-white rounded-xl font-sans text-xs font-semibold uppercase tracking-wider transition-all text-center cursor-pointer"
                  >
                    Contact Belma
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
