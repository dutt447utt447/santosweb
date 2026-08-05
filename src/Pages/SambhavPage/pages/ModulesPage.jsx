import CTA from "../components/CTA.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Modules from "../components/Modules.jsx";
import PageHero from "../components/PageHero.jsx";
import { ContentGrid } from "../components/RichContent.jsx";
import { moduleServiceDetails } from "../data/siteData.js";

export default function ModulesPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform Capabilities"
        title="SAMBHAV Modules"
        description="Explore the core modules that connect welfare services, requests, feedback, circulars, user roles, notifications, and reporting into one dependable platform."
      />
      <Modules />
      <ContentGrid
        eyebrow="Official Feature Set"
        title="Expanded Service Catalogue"
        description="These service blocks are derived from SAMBHAV's official and app-store listed features, arranged as user-facing modules."
        items={moduleServiceDetails}
        columns="four"
        variant="modules-catalog"
      />
      <HowItWorks />
      <CTA />
    </>
  );
}
