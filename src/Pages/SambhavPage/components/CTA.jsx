import { ArrowRight, Download } from "lucide-react";
import LogoMark from "./LogoMark.jsx";

export default function CTA() {
  return (
    <section className="section cta-section" id="cta">
      <div className="container">
        <div className="cta-banner" data-reveal>
          <div className="cta-banner__logo">
            <LogoMark compact />
          </div>
          <div className="cta-banner__content">
            <h2>Building a Better Tomorrow for Our Force and Their Families</h2>
            <p>SAMBHAV - A Step Towards Smarter Welfare Management</p>
          </div>
          <a
            className="button button--light"
            href="https://play.google.com/store/apps/details?id=com.sambhav&pcampaignid=web_share"
            target="_blank"
            rel="noreferrer"
          >
            <Download size={18} aria-hidden="true" />
            Download SAMBHAV
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
