import { BarChart3, BellRing, ClipboardCheck, LogIn, Route, SearchCheck } from "lucide-react";
import { howItWorks } from "../data/siteData.js";

const workIconMap = {
  login: LogIn,
  search: SearchCheck,
  submit: ClipboardCheck,
  route: Route,
  bell: BellRing,
  analytics: BarChart3,
};

export default function HowItWorks() {
  return (
    <section className="section how-section" id="how-it-works">
      <div className="container">
        <div className="section-heading" data-reveal>
          <h2>
            How <span>SAMBHAV</span> Works
          </h2>
          <p>
            A simple, secure and transparent workflow connects personnel and families with the right service channel,
            status updates, and leadership visibility.
          </p>
        </div>

        <div className="work-flow" data-reveal>
          {howItWorks.map((step, index) => {
            const Icon = workIconMap[step.icon];
            return (
              <article className="work-step" key={step.title}>
                <div className="work-step__number">{String(index + 1).padStart(2, "0")}</div>
                <div className="work-step__icon">
                  <Icon size={27} aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
