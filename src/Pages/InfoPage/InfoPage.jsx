import { useEffect } from "react";
import { motion } from "framer-motion";

import {
  FaArrowUpRightFromSquare,
  FaCalendarCheck,
  FaDatabase,
  FaLandmark,
  FaShieldHalved,
  FaUserTie,
} from "react-icons/fa6";

import { FaCheckCircle } from "react-icons/fa";

import DevelopmentJourney from "../../Components/DevelopmentJourney/DevelopmentJourney";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { santosPages } from "../../data/santosPages";
import vitulKumarPhoto from "../../assets/santos/images/vitul.png";
import sunilDuttPhoto from "../../assets/sambhav/images/SunilDuttImage.webp";
import "./InfoPage.css";

const factIcons = [
  FaCalendarCheck,
  FaDatabase,
  FaShieldHalved,
  FaLandmark,
];

const personPhotos = {
  "IPS ADG Vitul Kumar": {
    src: vitulKumarPhoto,
    alt: "IPS ADG Vitul Kumar portrait",
  },
  "Sunil Dutt": {
    src: sunilDuttPhoto,
    alt: "ASI/Tech Sunil Dutt portrait",
  },
};

function renderPersonMedia(person) {
  const photo = personPhotos[person.name];
  const fallbackAlt = `${person.name} portrait placeholder`;

  if (photo) {
    return (
      <span className="person-photo person-photo--image">
        <img src={photo.src} alt={photo.alt} />
      </span>
    );
  }

  return (
    <span
      className="person-photo person-photo--placeholder"
      role="img"
      aria-label={fallbackAlt}
      data-alt={fallbackAlt}
    >
      <FaUserTie aria-hidden="true" />
    </span>
  );
}

function renderSection(section, index) {
  return (
    <motion.section
      className="info-section-block"
      key={section.title}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      viewport={{ once: true }}
    >
      <div className="section-number">{String(index + 1).padStart(2, "0")}</div>

      <div className="section-copy">
        <h2>{section.title}</h2>

        {section.body?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {section.bullets && (
          <ul className="info-bullet-list">
            {section.bullets.map((item) => (
              <li key={item}>
                <FaCheckCircle />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {section.metrics && (
          <div className="info-metric-grid">
            {section.metrics.map((metric) => (
              <div
                className="info-metric"
                key={`${metric.label}-${metric.value}`}
              >
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        )}

        {section.people && (
          <div className="people-grid">
            {section.people.map((person) => (
              <div
                className="person-card"
                key={`${person.role}-${person.name}`}
              >
                {renderPersonMedia(person)}
                <div className="person-card__copy">
                  <span>{person.role}</span>
                  <strong>{person.name}</strong>
                </div>
              </div>
            ))}
          </div>
        )}

        {section.timeline && (
          <div className="info-timeline">
            {section.timeline.map((item) => (
              <article
                className="timeline-card"
                key={`${item.date}-${item.title}`}
              >
                <span>{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        )}

        {section.table && (
          <div className="info-table-wrap">
            <table className="info-table">
              <thead>
                <tr>
                  {section.table.columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row) => (
                  <tr key={row.join("-")}>
                    {row.map((cell) => (
                      <td key={`${row[0]}-${cell}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </motion.section>
  );
}

function InfoPage({ pageKey }) {
  const page = santosPages[pageKey] ?? santosPages.aboutUs;
  const hasDevelopmentJourney = pageKey === "developmentTeam";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.title = `${page.title} | SANTOS`;
  }, [page.title]);

  return (
    <div className={`info-page info-page--${pageKey}`}>
      <Navbar />

      <main>
        <section className="info-hero">
          <div className="gov-accent" aria-hidden="true">
            <span className="saffron" />
            <span className="white" />
            <span className="green" />
          </div>

          <div className="info-shell">
            <motion.div
              className="info-hero-copy"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="info-eyebrow">{page.eyebrow}</span>
              <h1>{page.title}</h1>
              <p className="info-subtitle">{page.subtitle}</p>
              <p className="info-lead">{page.lead}</p>
            </motion.div>

            <motion.div
              className="info-facts-panel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              {page.heroFacts.map((fact, index) => {
                const FactIcon = factIcons[index % factIcons.length];

                return (
                  <div className="info-fact" key={`${fact.label}-${fact.value}`}>
                    <span className="fact-icon">
                      <FactIcon />
                    </span>
                    <span>{fact.label}</span>
                    <strong>{fact.value}</strong>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="info-overview">
          <div className="info-shell overview-grid">
            <div className="overview-card">
              <FaLandmark />
              <h2>Key Highlights</h2>
              <p>
                Structured facts from the SANTOS documentation and public
                references.
              </p>
            </div>

            <div className="highlight-list">
              {page.highlights.map((highlight) => (
                <div className="highlight-row" key={highlight}>
                  <FaCheckCircle />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {hasDevelopmentJourney && <DevelopmentJourney />}

        <section className="info-content-stack">
          <div className="info-shell">
            {page.sections.map((section, index) => renderSection(section, index))}
          </div>
        </section>

        {page.sourceLinks?.length > 0 && (
          <section className="source-band">
            <div className="info-shell">
              <div className="source-header">
                <span>References</span>
                <h2>Source Links</h2>
              </div>

              <div className="source-grid">
                {page.sourceLinks.map((source) => (
                  <a
                    className="source-link-card"
                    href={source.url}
                    key={source.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{source.label}</span>
                    <FaArrowUpRightFromSquare />
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default InfoPage;
