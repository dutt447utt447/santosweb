import Achievements from "../components/Achievements.jsx";
import CTA from "../components/CTA.jsx";
import ImpactSection from "../components/Impact.jsx";
import PageHero from "../components/PageHero.jsx";
import { ContentGrid } from "../components/RichContent.jsx";
import Statistics from "../components/Statistics.jsx";
import { impactEvidence, welfareReferenceItems } from "../data/siteData.js";

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Measurable Outcomes"
        title="SAMBHAV Impact"
        description="A digital welfare foundation focused on faster resolution, wider reach, stronger transparency, and decision-ready visibility for leadership."
      />
      <Statistics />
      <ImpactSection />
      <ContentGrid
        eyebrow="Evidence Points"
        title="Why the Impact Matters"
        description="Official descriptions show SAMBHAV as more than an app screen: it connects service data, transfer workflows and welfare support."
        items={impactEvidence}
        columns="four"
        variant="impact-evidence"
      />
      <ContentGrid
        eyebrow="Welfare Reference"
        title="Personnel and Family Support Areas"
        description="The impact story also connects with CRPF and CAPF welfare areas such as medical support, education, housing and rehabilitation."
        items={welfareReferenceItems}
        columns="three"
        variant="impact-welfare"
      />
      <Achievements />
      <CTA />
    </>
  );
}
