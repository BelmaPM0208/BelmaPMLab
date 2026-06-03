import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ActiveSection } from "./types";

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>("home");

  // Dynamically update active section relative to scroll viewport offsets
  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen bg-white text-silver-800 font-sans selection:bg-gold-200 selection:text-gold-900" id="applet-viewport">
      {/* Translucent Glass Header Nav */}
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Structured Content Flows */}
      <main id="main-scroll-layers">
        {/* Animated Landing Hero */}
        <Hero onSectionChange={setActiveSection} />

        {/* Biography & Timelines */}
        <About />

        {/* High-Fidelity Consulting Deck */}
        <Services />

        {/* Diagnostic Forms & Direct SLA details */}
        <Contact />
      </main>

      {/* Corporate Footnotes & Disclaimers */}
      <Footer />
    </div>
  );
}
