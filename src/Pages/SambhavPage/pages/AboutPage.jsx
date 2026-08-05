import About from "../components/About.jsx";
import CTA from "../components/CTA.jsx";
import Journey from "../components/Journey.jsx";
import Leadership from "../components/Leadership.jsx";
import PageHero from "../components/PageHero.jsx";
import { ContentGrid } from "../components/RichContent.jsx";
import { aboutResearchCards, officialSnapshot, welfareReferenceItems } from "../data/siteData.js";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Unified Welfare Delivery"
        title="About SAMBHAV"
        description="A secure HR and welfare platform designed to make service access, grievance redressal, and family support more transparent and responsive for CRPF."
      />
      <About />
      <ContentGrid
        eyebrow="Official Context"
        title="What the Platform Covers"
        description="The content below is expanded from CRPF Sambhav descriptions, app marketplace listings and welfare-board references."
        items={aboutResearchCards}
        columns="three"
        variant="about-context"
      />
      <ContentGrid
        eyebrow="Welfare Ecosystem"
        title="Support Areas Around the Platform"
        description="SAMBHAV sits beside a broader welfare ecosystem that includes medical, education, rehabilitation and family-support references."
        items={welfareReferenceItems}
        columns="three"
        variant="about-welfare"
      />
      <ContentGrid
        eyebrow="Service Foundation"
        title="Core Design Principles"
        description="These points define why the platform is structured as a secure mobile bridge instead of only a static information page."
        items={officialSnapshot}
        columns="four"
        variant="about-principles"
      />
      <Journey />
      <Leadership />
      <CTA />
    </>
  );
}
