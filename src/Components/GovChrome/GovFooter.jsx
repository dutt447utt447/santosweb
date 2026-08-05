import "./GovChrome.css";

const officialLinks = [
  { label: "CRPF Official Website", href: "https://crpf.gov.in/" },
  { label: "CRPF WebVPN", href: "https://webvpn.crpf.gov.in" },
  { label: "Ministry of Home Affairs", href: "https://www.mha.gov.in/" },
];

export default function GovFooter({
  disclaimer,
  logoAlt,
  logoSrc,
  navLinks,
  projectSubtitle,
  projectTitle,
}) {
  return (
    <footer className="gov-footer">
      <div className="gov-footer__accent" aria-hidden="true" />
      <div className="gov-chrome-container gov-footer__grid">
        <div className="gov-footer__brand">
          <img src={logoSrc} alt={logoAlt} />
          <div>
            <span>केन्द्रीय रिजर्व पुलिस बल</span>
            <strong>{projectTitle}</strong>
            <p>{projectSubtitle}</p>
          </div>
        </div>

        <div className="gov-footer__column">
          <h2>Navigation</h2>
          <div className="gov-footer__links">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="gov-footer__column">
          <h2>Official References</h2>
          <div className="gov-footer__links">
            {officialLinks.map((link) => (
              <a href={link.href} key={link.href} rel="noreferrer" target="_blank">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="gov-footer__notice">
          <h2>Information Notice</h2>
          <p>{disclaimer}</p>
        </div>
      </div>

      <div className="gov-footer__bottom">
        <div className="gov-chrome-container">
          <span>© 2026 SANTOS / SAMBHAV Information Portal</span>
          <span>Designed in a CRPF-style government interface theme</span>
        </div>
      </div>
    </footer>
  );
}
