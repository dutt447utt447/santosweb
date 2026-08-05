import CTA from "../components/CTA.jsx";
import Gallery from "../components/Gallery.jsx";
import PageHero from "../components/PageHero.jsx";
import { ContentGrid } from "../components/RichContent.jsx";
import { galleryNarratives } from "../data/siteData.js";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="SAMBHAV in Action"
        title="Gallery"
        description="A visual look at SAMBHAV app screens and platform moments related to service access, dashboards, orders, bills, and leave workflows."
      />
      <Gallery />
      <ContentGrid
        eyebrow="Screen Meaning"
        title="What Each View Represents"
        description="The gallery images are tied to the real SAMBHAV service ideas: access, dashboard review, official communication, pay records and leave workflow."
        items={galleryNarratives}
        columns="three"
        variant="gallery-narrative"
      />
      <CTA />
    </>
  );
}
