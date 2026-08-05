import GovHeader from "../../../Components/GovChrome/GovHeader.jsx";
import sambhavLogo from "../../../assets/sambhav/images/logo.png";
import { navLinks as sambhavNavLinks } from "../data/siteData.js";
import { useLocation } from "../lib/router-context.js";

function toSambhavHref(path) {
  return path === "/" ? "/sambhav" : `/sambhav${path}`;
}

export default function Navbar() {
  const { pathname } = useLocation();
  const navLinks = sambhavNavLinks.map((link) => ({
    href: toSambhavHref(link.path),
    label: link.label,
    active: link.path === "/" ? pathname === "/" : pathname === link.path || pathname.startsWith(`${link.path}/`),
  }));

  return (
    <GovHeader
      activeProject="sambhav"
      homeHref="/sambhav"
      logoAlt="SAMBHAV logo"
      logoSrc={sambhavLogo}
      navLinks={navLinks}
      projectTitle="SAMBHAV"
      projectSubtitle="Integrated HR and Welfare Platform"
    />
  );
}
