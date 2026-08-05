import { timelineEntries } from "../data/siteData.js";

export default function Journey() {
  return (
    <section className="section journey-section" id="journey">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">From Idea to Institution</span>
          <h2>SAMBHAV Development Journey</h2>
          <p>
            A year-wise view of how SAMBHAV evolved from its early app release into a wider SELO, SANTOS and welfare
            service interface.
          </p>
        </div>

        <div className="timeline" data-reveal>
          <div className="timeline__line" aria-hidden="true" />

          {timelineEntries.map((entry, index) => (
            <article
              className={`timeline__item ${index % 2 === 0 ? "timeline__item--left" : "timeline__item--right"}`}
              key={entry.title}
            >
              <span className="timeline__connector" aria-hidden="true" />
              <span className="timeline__center-dot" aria-hidden="true" />
              <span className={`timeline__dot timeline__dot--${index % 3}`} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="timeline__content">
                <div className="timeline__meta">
                  <span className="timeline__step">Step {index + 1}</span>
                  <strong className="timeline__year">{entry.year}</strong>
                  <span className="timeline__period">{entry.period}</span>
                  <em className="timeline__version">{entry.version}</em>
                </div>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
                {entry.source && <small>{entry.source}</small>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
