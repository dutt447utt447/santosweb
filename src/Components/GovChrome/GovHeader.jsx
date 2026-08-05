import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "./GovChrome.css";

const projectLinks = [
  { key: "santos", label: "SANTOS", href: "/" },
  { key: "sambhav", label: "SAMBHAV", href: "/sambhav" },
];

export default function GovHeader({
  activeProject = "santos",
  homeHref = "/",
  logoAlt,
  logoSrc,
  navLinks,
  projectSubtitle,
  projectTitle,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("gov-nav-open", isOpen);
    return () => document.body.classList.remove("gov-nav-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`gov-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="gov-accent-bar" aria-hidden="true">
        <span className="gov-accent-bar__saffron" />
        <span className="gov-accent-bar__white" />
        <span className="gov-accent-bar__green" />
      </div>

      <div className="gov-top-strip">
        <div className="gov-chrome-container gov-top-strip__inner">
          <span>भारत सरकार | Government of India</span>
          <span>Ministry of Home Affairs</span>
        </div>
      </div>

      <div className="gov-brand-row">
        <div className="gov-chrome-container gov-brand-row__inner">
          <a className="gov-brand" href={homeHref} onClick={closeMenu}>
            <img src={logoSrc} alt={logoAlt} className="gov-brand__logo" />
            <span className="gov-brand__copy">
              <span className="gov-brand__force">केन्द्रीय रिजर्व पुलिस बल</span>
              <strong>{projectTitle}</strong>
              <small>{projectSubtitle}</small>
            </span>
          </a>

          <div className="gov-project-switch" aria-label="Project switcher">
            {projectLinks.map((link) => (
              <a
                className={activeProject === link.key ? "is-active" : ""}
                href={link.href}
                key={link.key}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="gov-menu-toggle"
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <nav className={`gov-nav-band ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        <div className="gov-chrome-container gov-nav-band__inner">
          {navLinks.map((link) => (
            <a
              className={link.active ? "is-active" : ""}
              href={link.href}
              key={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
