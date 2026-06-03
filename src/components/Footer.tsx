import React from "react";
import { LogoFull } from "./Logo";
import { Mail, Shield, CheckCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-silver-900 text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="footer">
      {/* Soft gradient background overlay */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-400/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" id="footer-container">
        
        {/* Main Grid: Info block vs Quick actions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-silver-800" id="footer-main">
          {/* Logo & Slogan Column */}
          <div className="md:col-span-6 space-y-5">
            <LogoFull size={40} lightText={true} />
            <p className="text-xs text-silver-400 max-w-sm font-sans font-light leading-relaxed">
              Establishing rigorous, metric-focused product telemetry where user experience matches target monetization.
            </p>
            <div className="flex items-center gap-2 text-gold-400 text-xs font-mono font-bold tracking-wide">
              <CheckCheck className="w-4 h-4" />
              <span>CONFIDENTIAL DEPLOYMENT MODULE AT ACTIVE PORTFOLIO</span>
            </div>
          </div>

          {/* Quick Jumps Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-silver-400">
              Navigation Index
            </h4>
            <ul className="space-y-2.5 text-xs text-silver-300 font-sans font-medium" id="footer-links">
              {["about", "services", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => handleScrollTo(section)}
                    className="capitalize hover:text-gold-400 transition-colors cursor-pointer block text-left"
                  >
                    {section === "about" ? "About Belma" : section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Support Guidelines Info Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-silver-400">
              Intellectual Safeguard
            </h4>
            <div className="flex gap-2 items-start text-xs text-silver-300">
              <Shield className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
              <p className="font-sans font-light leading-relaxed text-silver-400">
                All metrics, client names, and product telemetry data are sanitized for public representation under bilateral NDA conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Sign-off */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silver-500 font-mono" id="footer-legal">
          <div>
            <span>&copy; {currentYear} Belma PM Lab. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:belma@belmapmlab.com"
              className="hover:text-gold-400 transition-all flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              belma@belmapmlab.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
