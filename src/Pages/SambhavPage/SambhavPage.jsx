import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { useLocation } from "./lib/router-context.js";
import { RouterProvider } from "./lib/router.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import HowItWorksPage from "./pages/HowItWorksPage.jsx";
import ImpactPage from "./pages/ImpactPage.jsx";
import ModulesPage from "./pages/ModulesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import globalStyles from "./styles/global.css?raw";
import responsiveStyles from "./styles/responsive.css?raw";

const routeMap = {
  "/": HomePage,
  "/about": AboutPage,
  "/modules": ModulesPage,
  "/how-it-works": HowItWorksPage,
  "/impact": ImpactPage,
  "/gallery": GalleryPage,
};

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll("[data-reveal]");

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -80px 0px" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const { pathname } = useLocation();
  const Page = routeMap[pathname] || NotFoundPage;

  return <Page />;
}

function MainContent() {
  const { pathname } = useLocation();

  return (
    <main className={pathname === "/" ? "home-page" : undefined}>
      <AppRoutes />
    </main>
  );
}

export default function SambhavPage() {
  return (
    <RouterProvider basePath="/sambhav">
      <div className="sambhav-page app-shell">
        <SambhavStyles />
        <RouteEffects />
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </RouterProvider>
  );
}

function SambhavStyles() {
  useEffect(() => {
    const style = document.createElement("style");
    style.dataset.sambhavPage = "true";
    style.textContent = `${globalStyles}\n${responsiveStyles}`;
    document.head.append(style);

    return () => style.remove();
  }, []);

  return null;
}
