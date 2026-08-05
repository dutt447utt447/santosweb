import CTA from "../components/CTA.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Journey from "../components/Journey.jsx";
import PageHero from "../components/PageHero.jsx";
import { DetailRows } from "../components/RichContent.jsx";
import { workflowDetails } from "../data/siteData.js";

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Development Journey"
        title="How SAMBHAV Works"
        description="From secure login to dashboard review, SAMBHAV keeps every request moving through a clear digital workflow with accountable tracking."
      />
      <HowItWorks />
      <DetailRows
        eyebrow="Detailed User Flow"
        title="From Verification to Resolution"
        description="A practical breakdown of how verified users move through SAMBHAV's connected services."
        items={workflowDetails}
        variant="workflow"
      />
      <Journey />
      <CTA />
    </>
  );
}
