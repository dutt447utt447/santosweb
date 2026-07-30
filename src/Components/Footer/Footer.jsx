import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logos/Santos_logo.png";
import "./Footer.css";

const quickLinks = [
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

function Footer() {

  const scrollToSection = (id) => {
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="footer">

      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
                <div className="footer-top">

          <div className="footer-brand">

            <img
              src={logo}
              alt="SANTOS Logo"
              className="footer-logo"
            />

            <h2>SANTOS</h2>

            <p>
              System for Automated Transparent Online Transfers
            </p>

          </div>

          <div className="footer-links">

            <h3>Quick Links</h3>

            <div className="footer-links-grid">

              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  className="footer-link"
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.title}
                </button>
              ))}

            </div>

          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-disclaimer">

          <h3>Disclaimer</h3>

          <p>
            This website is created for educational and informational
            purposes only and is not an official website of CRPF or
            any government organization.
          </p>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 SANTOS. All Rights Reserved.
          </p>

        </div>

      </motion.div>

    </footer>
  );
}

export default Footer;