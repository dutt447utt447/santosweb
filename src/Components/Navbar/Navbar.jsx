import { useLocation } from "react-router-dom";
import logo from "../../assets/santos/logos/Santos_logo.png";
import GovHeader from "../GovChrome/GovHeader.jsx";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Development Team", href: "/development-team" },
  { label: "Policy", href: "/policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Navbar() {
  const location = useLocation();
  const activeProject = location.pathname.startsWith("/sambhav") ? "sambhav" : "santos";
  const navLinks = navItems.map((item) => ({
    ...item,
    active: item.href === "/" ? location.pathname === "/" : location.pathname.startsWith(item.href),
  }));

  return (
    <GovHeader
      activeProject={activeProject}
      homeHref="/"
      logoAlt="SANTOS logo"
      logoSrc={logo}
      navLinks={navLinks}
      projectTitle="SANTOS"
      projectSubtitle="System for Automated Transparent Online Transfers"
    />
  );
}
