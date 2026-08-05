import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

import About from "./Components/About/About";
import Technology from "./Components/Technology/Technology";
import EngineeringScale from "./Components/EngineeringScale/EngineeringScale";

import Leadership from "./Components/Leadership/Leadership";

import Achievements from "./Components/Achievements/Achievements";
import FeaturedIn from "./Components/FeaturedIn/FeaturedIn";
import Footer from "./Components/Footer/Footer";
import InfoPage from "./Pages/InfoPage/InfoPage";

const SambhavPage = lazy(() => import("./Pages/SambhavPage/SambhavPage"));

function SantosHome() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const section = document.querySelector(location.hash);

    if (!section) return;

    const targetTop =
      section.getBoundingClientRect().top + window.scrollY - 118;

    window.setTimeout(() => {
      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });
    }, 80);
  }, [location.hash]);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Leadership />
      <Technology />
      <EngineeringScale />

      <Achievements />
      <FeaturedIn />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<SantosHome />} />
      <Route path="/about-us" element={<InfoPage pageKey="aboutUs" />} />
      <Route
        path="/development-team"
        element={<InfoPage pageKey="developmentTeam" />}
      />
      <Route path="/policy" element={<InfoPage pageKey="policy" />} />
      <Route path="/disclaimer" element={<InfoPage pageKey="disclaimer" />} />
      <Route
        path="/sambhav/*"
        element={
          <Suspense fallback={null}>
            <SambhavPage />
          </Suspense>
        }
      />
      <Route path="*" element={<SantosHome />} />
    </Routes>
  );
}

export default App;
