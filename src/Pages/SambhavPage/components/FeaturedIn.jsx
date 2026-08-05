import { ExternalLink, Newspaper } from "lucide-react";
import { publications } from "../data/siteData.js";

export default function FeaturedIn() {
  return (
    <section className="section featured-section" id="featured">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">Media and References</span>
          <h2>Featured In</h2>
          <p>
            Placeholder publication references can be connected to verified articles or official source pages when those
            links are provided.
          </p>
        </div>

        <div className="publication-grid">
          {publications.map((publication) => (
            <article className="publication-card" data-reveal key={publication.name}>
              <div className="publication-card__logo">
                <Newspaper size={25} aria-hidden="true" />
                <strong>{publication.name}</strong>
              </div>
              <h3>{publication.title}</h3>
              <a href={publication.url} target="_blank" rel="noreferrer">
                Read Original Article
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
