import CTA from "../components/CTA.jsx";
import Gallery from "../components/Gallery.jsx";
import Hero from "../components/Hero.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import ImpactSection from "../components/Impact.jsx";
import Overview from "../components/Overview.jsx";
import Statistics from "../components/Statistics.jsx";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <Overview />
      <HowItWorks />
      <ImpactSection />
      <Gallery />
      <CTA />
    </>
  );
}
