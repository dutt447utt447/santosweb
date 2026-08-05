import GovFooter from "../../../Components/GovChrome/GovFooter.jsx";
import sambhavLogo from "../../../assets/sambhav/images/logo.png";
import { navLinks as sambhavNavLinks } from "../data/siteData.js";

function toSambhavHref(path) {
  return path === "/" ? "/sambhav" : `/sambhav${path}`;
}

const navLinks = [
  ...sambhavNavLinks.map((link) => ({
    href: toSambhavHref(link.path),
    label: link.label,
  })),
  { label: "SANTOS", href: "/" },
];

export default function Footer() {
  return (
    <GovFooter
      disclaimer="This website is a presentation-style informational page about SAMBHAV and is not an official CRPF service portal."
      logoAlt="SAMBHAV logo"
      logoSrc={sambhavLogo}
      navLinks={navLinks}
      projectTitle="SAMBHAV"
      projectSubtitle="Integrated HR and Welfare Platform"
    />
  );
}
