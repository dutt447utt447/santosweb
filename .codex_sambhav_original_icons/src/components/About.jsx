import { ArrowRight, CheckCircle2, Eye, Layers3, Target } from "lucide-react";
import { Link } from "../lib/router.jsx";
import { aboutCards } from "../data/siteData.js";

const aboutIconMap = {
  target: Target,
  eye: Eye,
  check: CheckCircle2,
  layers: Layers3,
};

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">Unified Welfare Delivery</span>
          <h2>About SAMBHAV</h2>
          <p>
            SAMBHAV brings welfare, grievance handling, communication, service requests, and analytics into one dependable
            digital environment designed for clarity, speed, and accountable service delivery.
          </p>
        </div>

        <div className="about-grid">
          {aboutCards.map((card) => {
            const Icon = aboutIconMap[card.icon];
            return (
              <article className="feature-card" data-reveal key={card.title}>
                <div className="feature-card__icon">
                  <Icon size={26} aria-hidden="true" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            );
          })}
        </div>

        <div className="section-action" data-reveal>
          <Link className="button button--primary" to="/modules">
            Know More About SAMBHAV
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
