import logo from "../../assets/santos/logos/Santos_logo.png";
import GovFooter from "../GovChrome/GovFooter.jsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Development Team", href: "/development-team" },
  { label: "Policy", href: "/policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "SAMBHAV", href: "/sambhav" },
];

export default function Footer() {
  return (
    <GovFooter
      disclaimer="This website is created for educational and informational purposes only and is not an official CRPF or Government of India service portal."
      logoAlt="SANTOS logo"
      logoSrc={logo}
      navLinks={navLinks}
      projectTitle="SANTOS"
      projectSubtitle="System For Annual Transfer Over Software"
    />
  );
}
