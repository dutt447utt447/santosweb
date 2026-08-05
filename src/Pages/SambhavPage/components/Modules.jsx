import {
  BarChart3,
  BellRing,
  CheckCircle2,
  CircleHelp,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Home,
  LockKeyhole,
  MessageSquareText,
  Network,
  ShieldCheck,
  ThumbsUp,
  Users,
} from "lucide-react";
import { Link } from "../lib/router.jsx";
import { modules, technologyHighlights } from "../data/siteData.js";

const moduleIconMap = {
  heart: HeartPulse,
  message: MessageSquareText,
  clipboard: ClipboardCheck,
  thumbs: ThumbsUp,
  bar: BarChart3,
  users: Users,
  file: FileText,
  bell: BellRing,
  home: Home,
  help: CircleHelp,
};

const technologyIcons = [ShieldCheck, Network, BarChart3, LockKeyhole];

export default function Modules() {
  return (
    <section className="section modules-section" id="modules">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">Platform Capabilities</span>
          <h2>Our Platform Modules</h2>
          <p>
            Every module is designed as a clear service pathway, helping personnel, families, and administrators move
            from request to resolution with confidence.
          </p>
        </div>

        <div className="module-grid">
          {modules.map((module) => {
            const Icon = moduleIconMap[module.icon];
            return (
              <article className="module-card" data-reveal key={module.title}>
                <div className={`module-card__icon accent-${module.color}`}>
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <Link to="/how-it-works" className="module-card__link">
                  Explore
                  <span className="module-card__arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="technology-strip" id="technology" data-reveal>
          <div>
            <span className="section-kicker">Technology Foundation</span>
            <h3>Built for secure, responsive and measurable service delivery</h3>
          </div>
          <div className="technology-strip__items">
            {technologyHighlights.map((item, index) => {
              const Icon = technologyIcons[index % technologyIcons.length];
              return (
                <span key={item}>
                  <Icon size={17} aria-hidden="true" />
                  {item}
                  <CheckCircle2 size={15} aria-hidden="true" />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
