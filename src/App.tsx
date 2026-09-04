import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Testimonials } from "./components/Testimonials";
import { CaseStudies } from "./components/CaseStudies";
import { Footer } from "./components/Footer";
import { ActiveSection } from "./types";

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>("home");

  // Sync hash routing if user opens website with /#testimonials or /#case-studies
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#testimonials") {
        setActiveSection("testimonials");
      } else if (hash === "#case-studies") {
        setActiveSection("case-studies");
      } else if (hash) {
        const sec = hash.substring(1) as ActiveSection;
        const validSections: ActiveSection[] = ["home", "about", "services", "case-studies", "testimonials", "contact"];
        if (validSections.includes(sec)) {
          setActiveSection(sec);
        }
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    // Initial check
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Dynamically update active section relative to scroll viewport offsets
  useEffect(() => {
    if (activeSection === "testimonials" || activeSection === "case-studies") return; // Skip scroll updates when on dedicated sub-pages

    const handleScroll = () => {
      const sections: ActiveSection[] = ["home", "about", "services", "contact"];
      const scrollPosition = window.scrollY + 160; // Offset matching the fixed navbar spacing buffer

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleSectionSelect = (section: ActiveSection) => {
    setActiveSection(section);
    if (section === "testimonials" || section === "case-studies") {
      window.location.hash = section;
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.hash = section;
      const element = document.getElementById(section);
      if (element) {
        const navbarOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-silver-800 font-sans selection:bg-gold-200 selection:text-gold-900" id="applet-viewport">
      {/* Translucent Glass Header Nav */}
      <Navbar activeSection={activeSection} onSectionChange={handleSectionSelect} />

      {/* Structured Content Flows */}
      <main id="main-scroll-layers" className="pt-20">
        {activeSection === "testimonials" ? (
          <Testimonials onBackToHome={() => handleSectionSelect("home")} />
        ) : activeSection === "case-studies" ? (
          <CaseStudies
            onBackToHome={() => handleSectionSelect("home")}
            onContactClick={() => handleSectionSelect("contact")}
          />
        ) : (
          <>
            {/* Animated Landing Hero */}
            <Hero onSectionChange={handleSectionSelect} />

            {/* Biography & Timelines */}
            <About />

            {/* High-Fidelity Consulting Deck */}
            <Services />

            {/* Diagnostic Forms & Direct SLA details */}
            <Contact />
          </>
        )}
      </main>

      {/* Corporate Footnotes & Disclaimers */}
      <Footer onNavigate={handleSectionSelect} />
    </div>
  );
}
