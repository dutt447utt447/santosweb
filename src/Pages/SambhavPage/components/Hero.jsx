import {
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";
import HeroBG from "../../../assets/sambhav/images/HeroBG.png";
import sambhavLogo from "../../../assets/sambhav/images/logo.png";

export default function Hero() {
  return (
    <section
      className="hero section"
      id="home"
    >
      <img className="hero__background" src={HeroBG} alt="" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content" data-reveal>
          <span className="eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            CRPF Digital Transformation Initiative
          </span>
          <h1>
            Empowering Welfare.
            <span>Enabling the Force.</span>
          </h1>
          <p>
            SAMBHAV is an integrated platform by CRPF to streamline welfare management, grievance redressal, and service
            delivery for the force and their families.
          </p>
          <div className="hero__actions">
            <a
              className="button button--primary"
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

        <div className="hero__visual" data-reveal>
          <div className="hero-card">
            <div className="ashoka-chakra hero-card__chakra" aria-hidden="true" />
            <div className="hero-card__crest">
              <div className="hero-card__symbol">
                <img src={sambhavLogo} alt="SAMBHAV logo" />
              </div>
            </div>
            <h2>SAMBHAV</h2>
            <p>Integrated HR & Welfare Platform</p>
            <div className="hero-card__baseline">
              <span>Secure</span>
              <span>Transparent</span>
              <span>Responsive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
