import React, { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import { LogoFull } from "./Logo";
import { ActiveSection } from "../types";

interface NavbarProps {
  activeSection: ActiveSection;
  onSectionChange: (section: ActiveSection) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor page scroll to apply translucent backdrop and elevation shadows
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { id: ActiveSection; label: string }[] = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id: ActiveSection) => {
    setIsOpen(false);
    onSectionChange(id);

    if (id === "testimonials") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      // Offset by the height of the fixed navbar
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-silver-100 py-3"
          : "bg-transparent py-5"
      }`}
      id="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("home");
            }}
            className="flex-shrink-0 transition-opacity hover:opacity-90"
            id="navbar-logo-link"
          >
            <LogoFull size={40} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1.5" id="navbar-links-desktop">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-4 py-2 rounded-full font-sans text-sm font-medium tracking-wide transition-all ${
                  activeSection === link.id
                    ? "text-gold-600 bg-gold-50/70 border border-gold-200/50"
                    : "text-silver-600 hover:text-silver-900 hover:bg-silver-50"
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleLinkClick("contact")}
              className="ml-4 px-5 py-2.5 bg-silver-900 text-white rounded-full font-sans text-xs font-semibold uppercase tracking-wider hover:bg-silver-800 active:bg-silver-950 transition-all shadow-sm shadow-silver-900/10 hover:shadow-md hover:scale-[1.02] flex items-center gap-2"
              id="desktop-cta-btn"
            >
              <Mail className="w-3.5 h-3.5" />
              Let's Connect
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex md:hidden" id="mobile-menu-toggle-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-silver-600 hover:text-silver-900 hover:bg-silver-50 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-all"
              aria-label="Toggle navigation menu"
              id="mobile-hamburger-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b border-silver-100 ${
          isOpen ? "max-h-[340px] opacity-100 shadow-lg visible" : "max-h-0 opacity-0 invisible"
        }`}
        id="navbar-mobile-drawer"
      >
        <div className="px-4 pt-3 pb-6 space-y-1.5 sm:px-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl font-sans text-base font-medium transition-all ${
                activeSection === link.id
                  ? "text-gold-600 bg-gold-50/70 font-semibold border-l-4 border-gold-400"
                  : "text-silver-600 hover:text-silver-900 hover:bg-silver-50"
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="pt-4 px-2">
            <button
              onClick={() => handleLinkClick("contact")}
              className="w-full py-3.5 bg-silver-900 text-white rounded-xl font-sans text-sm font-semibold uppercase tracking-wider hover:bg-silver-800 active:bg-silver-950 transition-all flex items-center justify-center gap-2 shadow-sm"
              id="mobile-cta-btn"
            >
              <Mail className="w-4 h-4" />
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
