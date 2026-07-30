import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from "../../assets/logos/Santos_logo.png";
import "./Navbar.css";

const navLinks = [
  { title: "Home", href: "#hero" },
  { title: "About", href: "#about" },
  { title: "Journey", href: "#journey" },
  { title: "Technology", href: "#technology" },
  { title: "Engineering Scale", href: "#engineering-scale" },
  { title: "Leadership", href: "#leadership" },
  { title: "Impact", href: "#quick-stats" },
  { title: "Achievements", href: "#achievements" },
  { title: "Featured In", href: "#featured-in" },
];

const NAV_OFFSET = 118;

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [activeProject, setActiveProject] = useState("santos");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getSections = () =>
      navLinks
        .map((item) => ({
          href: item.href,
          section: document.querySelector(item.href),
        }))
        .filter((item) => item.section);

    const updateActiveSection = () => {
      const sections = getSections();

      if (!sections.length) return;

      const scrollPosition = window.scrollY + NAV_OFFSET + 24;
      let currentSection = sections[0].href;

      sections.forEach(({ href, section }) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = href;
        }
      });

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      setActiveSection(
        isAtBottom ? sections[sections.length - 1].href : currentSection
      );
    };

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);

    if (!section) return;

    const targetTop =
      id === "#hero"
        ? 0
        : section.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: "smooth",
    });

    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const handleSantos = () => {
    setActiveProject("santos");
    scrollToSection("#hero");
  };

  const handleSambhav = () => {
    setActiveProject("sambhav");

    // Add Sambhav project URL here when it is ready.
    window.location.href = "http://localhost:5174/";
  };

  return (
    <motion.header
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="navbar-container">
        <button
          type="button"
          className="navbar-brand"
          onClick={() => scrollToSection("#hero")}
        >
          <img src={logo} alt="SANTOS Logo" className="navbar-logo" />
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <button
              type="button"
              key={item.href}
              className={`nav-link ${
                activeSection === item.href ? "active" : ""
              }`}
              onClick={() => scrollToSection(item.href)}
            >
              {item.title}
            </button>
          ))}
        </nav>

        <div className="navbar-actions">
          <div className="project-switch">
            <motion.div
              className="switch-slider"
              animate={{
                left: activeProject === "santos" ? "4px" : "calc(50% + 2px)",
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
            />

            <button
              type="button"
              className={`switch-btn ${
                activeProject === "santos" ? "selected" : ""
              }`}
              onClick={handleSantos}
            >
              SANTOS
            </button>

            <button
              type="button"
              className={`switch-btn ${
                activeProject === "sambhav" ? "selected" : ""
              }`}
              onClick={handleSambhav}
            >
              SAMBHAV
            </button>
          </div>

          <button
            type="button"
            className="mobile-toggle"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navLinks.map((item) => (
                <button
                  type="button"
                  key={item.href}
                  className={`mobile-nav-link ${
                    activeSection === item.href ? "active" : ""
                  }`}
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.title}
                </button>
              ))}

              <div className="mobile-project-switch">
                <button
                  type="button"
                  className={`mobile-switch-btn ${
                    activeProject === "santos" ? "selected" : ""
                  }`}
                  onClick={handleSantos}
                >
                  SANTOS
                </button>

                <button
                  type="button"
                  className={`mobile-switch-btn ${
                    activeProject === "sambhav" ? "selected" : ""
                  }`}
                  onClick={handleSambhav}
                >
                  SAMBHAV
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
