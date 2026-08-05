import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems } from "../data/siteData.js";

export default function Gallery() {
  const scrollerRef = useRef(null);

  const scrollGallery = (direction) => {
    if (!scrollerRef.current) return;
    const card = scrollerRef.current.querySelector(".gallery-card");
    const distance = card ? card.getBoundingClientRect().width + 24 : 360;
    scrollerRef.current.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-heading section-heading--split" data-reveal>
          <div>
            <span className="section-kicker">Field to Dashboard</span>
            <h2>
              SAMBHAV in <span>Action</span>
            </h2>
            <p>
              Representative moments from awareness, service management, training, monitoring, and digital operations.
            </p>
          </div>
          <div className="gallery-controls" aria-label="Gallery controls">
            <button
              className="icon-button"
              type="button"
              aria-label="Show previous gallery items"
              onClick={() => scrollGallery(-1)}
            >
              <ChevronLeft size={21} />
            </button>
            <button
              className="icon-button"
              type="button"
              aria-label="Show next gallery items"
              onClick={() => scrollGallery(1)}
            >
              <ChevronRight size={21} />
            </button>
          </div>
        </div>

        <div className="gallery-track" ref={scrollerRef} data-reveal tabIndex="0" aria-label="SAMBHAV action gallery">
          {galleryItems.map((item) => (
            <article className="gallery-card" key={item.title}>
              <img src={item.image} alt={`${item.title} screenshot`} loading="lazy" />
              <div className="gallery-card__overlay">
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
