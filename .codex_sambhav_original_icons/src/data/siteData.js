import sambhavBillsImage from "../assets/images/gallery/sambhav-bills.jpg";
import sambhavDashboardImage from "../assets/images/gallery/sambhav-dashboard.jpg";
import sambhavLeaveImage from "../assets/images/gallery/sambhav-leave.jpg";
import sambhavLoginImage from "../assets/images/gallery/sambhav-login.jpg";
import sambhavOrdersImage from "../assets/images/gallery/sambhav-orders.jpg";

export const navLinks = [
  { label: "Home", id: "home", path: "/" },
  { label: "About", id: "about", path: "/about" },
  { label: "Modules", id: "modules", path: "/modules" },
  { label: "How It Works", id: "how-it-works", path: "/how-it-works" },
  { label: "Impact", id: "impact", path: "/impact" },
  { label: "Gallery", id: "gallery", path: "/gallery" },
];

export const heroActions = [
  { label: "Users", icon: "users" },
  { label: "Security", icon: "shield" },
  { label: "Analytics", icon: "chart" },
  { label: "Technology", icon: "cpu" },
];

export const statistics = [
  {
    prefix: "Caring for",
    displayValue: "25+ Lakh",
    label: "Personnel",
    icon: "trophy",
    accent: "saffron",
  },
  {
    displayValue: "Welfare Services",
    label: "for Families across India",
    icon: "family",
    accent: "green",
  },
  {
    displayValue: "Digital Transformation",
    label: "for Better Governance",
    icon: "code",
    accent: "blue",
  },
  {
    displayValue: "Secure, Transparent",
    label: "& Role-based Access",
    icon: "database",
    accent: "saffron",
  },
  {
    displayValue: "Faster Grievance",
    label: "Redressal & Feedback",
    icon: "service",
    accent: "green",
  },
  {
    displayValue: "Integrated",
    label: "with SANTOS & Other CRPF Systems",
    icon: "monitor",
    accent: "blue",
  },
];

export const officialSnapshot = [
  {
    title: "SELO to Mobile Bridge",
    icon: "smartphone",
    meta: "Official Sambhav scope",
    description:
      "SAMBHAV works as the mobile interface for CRPF's SELO ERP, keeping verified users connected to service data through their devices.",
  },
  {
    title: "Personnel, Veterans and NOKs",
    icon: "users",
    meta: "User coverage",
    description:
      "The platform is positioned for CRPF employees, veterans and next of kin, so service access is not limited to serving personnel only.",
  },
  {
    title: "Registration and Verification",
    icon: "shield",
    meta: "Access control",
    description:
      "Core app activities are available after user registration and verification, helping protect official service information.",
  },
  {
    title: "SANTOS Integration",
    icon: "route",
    meta: "Transfer workflow",
    description:
      "The SANTOS transfer system is connected with SAMBHAV for hardship score visibility, unit preference choices and electronic communication.",
  },
];

export const aboutResearchCards = [
  {
    title: "Personal Information System",
    icon: "database",
    meta: "PIS / SELO",
    description:
      "Users can view personal information available in the SELO database, making essential service records accessible from the app.",
  },
  {
    title: "Pay and Records",
    icon: "wallet",
    meta: "Pay access",
    description:
      "SAMBHAV supports viewing and downloading pay-related information, reducing dependence on manual record requests.",
  },
  {
    title: "Official Communication",
    icon: "bell",
    meta: "Alerts",
    description:
      "General CRPF updates and personal system notifications can be delivered for bills, orders, pay, GPF, APAR, IPR and related matters.",
  },
  {
    title: "Profile Update Requests",
    icon: "user-check",
    meta: "Verified requests",
    description:
      "Users can submit updates for basic PIS details such as photo, phone number and email after due registration and verification.",
  },
  {
    title: "Veteran and NOK Support",
    icon: "hand-heart",
    meta: "Extended reach",
    description:
      "The official Sambhav description includes veterans and NOKs, matching the wider welfare support ecosystem of the force.",
  },
  {
    title: "WARB Alignment",
    icon: "network",
    meta: "Welfare board",
    description:
      "CRPF welfare board functions cover retired personnel, NOK grievances, scheme coordination and district-level liaison support.",
  },
];

export const moduleServiceDetails = [
  {
    title: "PIS Data View",
    icon: "database",
    meta: "Core profile",
    description: "View personal information as available in SELO records through a verified mobile interface.",
  },
  {
    title: "Pay Download",
    icon: "wallet",
    meta: "Financial record",
    description: "Check salary details and download pay-related information from the app workflow.",
  },
  {
    title: "E-Magazine and Video",
    icon: "book-open",
    meta: "Digital content",
    description: "Access official CRPF digital content uploaded for communication, awareness and engagement.",
  },
  {
    title: "General Notifications",
    icon: "bell",
    meta: "Broadcast alerts",
    description: "Receive push updates from CRPF for important organizational information.",
  },
  {
    title: "Personal Notifications",
    icon: "mail-check",
    meta: "User-specific alerts",
    description: "Get system alerts linked to bills, orders, pay, GPF, APAR, IPR and similar service items.",
  },
  {
    title: "Request Updates",
    icon: "clipboard",
    meta: "PIS corrections",
    description: "Submit basic detail updates such as photo, phone number and email for official processing.",
  },
  {
    title: "Unit Contact Details",
    icon: "phone",
    meta: "Control room access",
    description: "View unit control room contact details for quicker official communication.",
  },
  {
    title: "SANTOS Transfers",
    icon: "route",
    meta: "Transfer choices",
    description:
      "Check hardship score, eligible and ineligible units, rankings, choices, representations and individual requests.",
  },
  {
    title: "Leave Management",
    icon: "calendar",
    meta: "Service workflow",
    description: "Use app-supported leave-related functionality as part of the expanded SAMBHAV feature set.",
  },
  {
    title: "Dependent and Family Cards",
    icon: "id-card",
    meta: "Family records",
    description: "Access dependent card and family card related features included in the official app updates.",
  },
  {
    title: "QR and Bar Code Reader",
    icon: "scan",
    meta: "Security feature",
    description: "Use QR/bar-code based support that strengthens verification and service handling flows.",
  },
  {
    title: "ID Card and Amenity Vehicle",
    icon: "bus",
    meta: "Additional services",
    description: "The latest app feature list includes ID card, amenity vehicle and deputation or attachment workflows.",
  },
];

export const workflowDetails = [
  {
    title: "Verified entry",
    description:
      "The user starts with registration and verification so that official records and service workflows are exposed only to eligible users.",
    points: ["Employee, veteran or NOK access", "Role-aware service visibility", "Protected profile-linked activity"],
  },
  {
    title: "SELO-linked information",
    description:
      "Once verified, the app connects the user to SELO-backed records such as PIS profile, pay details and official service references.",
    points: ["PIS data visibility", "Pay record download", "Personal notification context"],
  },
  {
    title: "Choose the right service",
    description:
      "Users move into focused modules instead of searching through disconnected channels for transfers, leave, contact details or records.",
    points: ["SANTOS transfer module", "Leave and card services", "Unit contact details"],
  },
  {
    title: "Submit or review request",
    description:
      "The workflow supports update requests and representation-style activity where the user needs to send corrected details or service choices.",
    points: ["Profile detail update", "Transfer representation", "Individual request handling"],
  },
  {
    title: "Receive official updates",
    description:
      "General and personal notifications keep users informed about organizational updates and items connected to their records.",
    points: ["Push notifications", "Bills and orders alerts", "Pay, GPF, APAR and IPR alerts"],
  },
  {
    title: "Leadership visibility",
    description:
      "SAMBHAV and connected systems reduce manual dependency and make service progress easier to monitor through organized digital records.",
    points: ["Transparent status flow", "Lower paperwork dependency", "Decision-ready service data"],
  },
];

export const impactEvidence = [
  {
    title: "SANTOS launched in 2022",
    icon: "calendar",
    meta: "CRPF SANTOS",
    description:
      "SANTOS automates annual transfer processes and uses factors such as tenure, hardship score and vacancies for transfer workflows.",
  },
  {
    title: "Transfer choices through SAMBHAV",
    icon: "route",
    meta: "SANTOS integration",
    description:
      "SANTOS integration helps personnel receive transfer information electronically and express preferences through the SAMBHAV ecosystem.",
  },
  {
    title: "App update tracked in 2026",
    icon: "download",
    meta: "Google Play",
    description:
      "The Google Play listing showed an update on Jul 25, 2026, with current features including SANTOS, leave, cards and ID-related services.",
  },
  {
    title: "Privacy-oriented listing",
    icon: "shield",
    meta: "Data safety",
    description:
      "The Play listing indicates no third-party data sharing and no data collection under its developer-declared data safety section.",
  },
];

export const welfareReferenceItems = [
  {
    title: "Medical and injury support",
    icon: "heart",
    meta: "CRPF welfare",
    description:
      "CRPF welfare references include injury assistance categories, sickness or hospitalization assistance and medical advances.",
  },
  {
    title: "Education support",
    icon: "graduation",
    meta: "Scholarships",
    description:
      "Official welfare references include education funds, scholarships and support for wards of personnel in defined categories.",
  },
  {
    title: "PMSS scholarships",
    icon: "book-open",
    meta: "CAPF welfare",
    description:
      "PIB notes 2,000 annual PMSS scholarships for wards and widows of CAPF and Assam Rifles personnel, split equally for boys and girls.",
  },
  {
    title: "Housing and rehabilitation",
    icon: "home",
    meta: "CAPF ecosystem",
    description:
      "Government welfare initiatives include CAPF e-Awas services and rehabilitation support through welfare board structures.",
  },
  {
    title: "Retired personnel and NOK support",
    icon: "users",
    meta: "WARB",
    description:
      "WARB functions cover data maintenance, grievance support, liaison with authorities and assistance for retired personnel and NOKs.",
  },
  {
    title: "Ayushman CAPF",
    icon: "shield",
    meta: "Health care",
    description:
      "PIB describes Ayushman CAPF as a cashless and paperless medical treatment initiative for CAPF personnel and families.",
  },
];

export const galleryNarratives = [
  {
    title: "Login Screen",
    icon: "shield",
    meta: "Secure access",
    description:
      "Represents the verified entry point before users access profile-linked services and official information.",
  },
  {
    title: "Dashboard Screen",
    icon: "chart",
    meta: "Service overview",
    description:
      "Shows the platform idea of bringing records, status, services and alerts into a single view.",
  },
  {
    title: "Orders and Circulars",
    icon: "file",
    meta: "Official communication",
    description:
      "Highlights the role of digital content and official updates in keeping users informed without paper dependency.",
  },
  {
    title: "Pay and Bills",
    icon: "wallet",
    meta: "Personal records",
    description:
      "Connects with SAMBHAV's pay and personal notification functions for user-specific financial information.",
  },
  {
    title: "Leave Management",
    icon: "calendar",
    meta: "Expanded feature",
    description:
      "Reflects one of the updated service capabilities listed for SAMBHAV across app marketplace descriptions.",
  },
];

export const aboutCards = [
  {
    title: "Mission",
    icon: "target",
    description:
      "Deliver accessible welfare and service support through a unified, secure, and transparent digital platform.",
  },
  {
    title: "Vision",
    icon: "eye",
    description:
      "Strengthen force readiness by making welfare services faster, smarter, and easier to reach for every family.",
  },
  {
    title: "Objectives",
    icon: "check",
    description:
      "Reduce manual effort, improve response tracking, and enable accountable service delivery across the organization.",
  },
  {
    title: "Overview",
    icon: "layers",
    description:
      "A modern HR and welfare ecosystem built around requests, grievances, circulars, analytics, and communication.",
  },
];

export const modules = [
  {
    title: "Welfare Management",
    icon: "heart",
    color: "blue",
    description:
      "Digitizes welfare access, benefit visibility, approvals, and service follow-up for personnel and families.",
  },
  {
    title: "Grievance Redressal",
    icon: "message",
    color: "green",
    description:
      "Tracks grievances from submission to closure with transparent status updates and accountable routing.",
  },
  {
    title: "Service Requests",
    icon: "clipboard",
    color: "saffron",
    description:
      "Centralizes common requests with priority handling, verification flows, and clear turnaround visibility.",
  },
  {
    title: "Feedback System",
    icon: "thumbs",
    color: "blue",
    description:
      "Captures structured feedback to improve service quality, user experience, and policy responsiveness.",
  },
  {
    title: "Reports and Analytics",
    icon: "bar",
    color: "green",
    description:
      "Turns service activity into actionable dashboards for leadership review and data-based decisions.",
  },
  {
    title: "User Management",
    icon: "users",
    color: "saffron",
    description:
      "Supports secure user roles, access levels, approvals, and administration across units and offices.",
  },
  {
    title: "Policy and Circulars",
    icon: "file",
    color: "blue",
    description:
      "Keeps official circulars, welfare guidelines, and policy references organized in one searchable place.",
  },
  {
    title: "Notifications",
    icon: "bell",
    color: "green",
    description:
      "Shares timely alerts, request updates, announcements, and reminders through a dependable channel.",
  },
  {
    title: "Family Welfare Services",
    icon: "home",
    color: "saffron",
    description:
      "Extends support visibility to family-focused services, schemes, communication, and assistance workflows.",
  },
  {
    title: "Help and Support",
    icon: "help",
    color: "blue",
    description:
      "Provides guided assistance, support references, and request escalation paths for faster resolution.",
  },
];

export const technologyHighlights = [
  "Role-based secure access",
  "Modular service workflows",
  "Decision-ready analytics",
  "Responsive digital delivery",
];

export const howItWorks = [
  {
    title: "Secure Login",
    icon: "login",
    description: "Personnel, families, and officials access SAMBHAV through secure role-based authentication.",
  },
  {
    title: "Choose Service",
    icon: "search",
    description: "Users select welfare services, grievance redressal, feedback, circulars, or service requests.",
  },
  {
    title: "Submit Request",
    icon: "submit",
    description: "Relevant details are submitted digitally with clear category, priority, and tracking information.",
  },
  {
    title: "Officer Workflow",
    icon: "route",
    description: "The request moves to the correct office or officer for review, action, and timely resolution.",
  },
  {
    title: "Track Updates",
    icon: "bell",
    description: "Users receive transparent status updates, responses, and closure information through the platform.",
  },
  {
    title: "Dashboard Review",
    icon: "analytics",
    description: "Leadership monitors trends, service quality, pending items, and impact through analytics dashboards.",
  },
];

export const timelineEntries = [
  {
    year: "2021",
    period: "08 Sep 2021",
    version: "v1.0",
    title: "Initial iOS release recorded",
    description:
      "The App Store version history records SAMBHAV v1.0 on 08/09/2021. This marks the earliest official version-history milestone available in the app listing.",
    source: "Apple App Store version history",
  },
  {
    year: "2021",
    period: "01 Nov 2021",
    version: "v1.0.1",
    title: "Early stabilization release",
    description:
      "Version 1.0.1 followed the initial launch, showing that the app entered an early maintenance and improvement cycle soon after release.",
    source: "Apple App Store version history",
  },
  {
    year: "2022",
    period: "14 May 2022",
    version: "v1.02",
    title: "PIS, APAR and security enhancement",
    description:
      "The 2022 update listed performance improvement, PIS update fields such as email, mobile number, NOK number and photo, plus technical request, APAR, income-tax assessment and enhanced security settings.",
    source: "Apple App Store version history",
  },
  {
    year: "2022",
    period: "SANTOS launch year",
    version: "SANTOS",
    title: "Transfer automation foundation",
    description:
      "CRPF's official SANTOS page states that SANTOS was launched in 2022 to automate annual transfer processes using data such as tenure, hardship score and vacancies.",
    source: "CRPF SANTOS official page",
  },
  {
    year: "2023",
    period: "19 Jan 2023",
    version: "v1.03",
    title: "SANTOS module added to SAMBHAV",
    description:
      "The v1.03 update listed the SANTOS module, allowing users to check hardship score, eligible or ineligible units, ranking, transfer choices, representations and individual requests.",
    source: "Apple App Store version history",
  },
  {
    year: "2023",
    period: "09 Apr - 16 Nov 2023",
    version: "v1.0.4 - v1.0.7",
    title: "Leave, cards, QR and deputation features",
    description:
      "Subsequent 2023 releases continued the SANTOS feature set and listed leave management, dependent card, family card, security enhancement, QR/bar-code reader and deputation or attachment support.",
    source: "Apple App Store version history",
  },
  {
    year: "2024",
    period: "01 Apr - 30 Dec 2024",
    version: "v2.0 - v3.0.1",
    title: "Major version expansion",
    description:
      "The App Store history records major version movement through v2.0, v2.0.1, v3.0 and v3.0.1 in 2024, indicating continued platform maintenance and release management.",
    source: "Apple App Store version history",
  },
  {
    year: "2025",
    period: "03 Feb - 02 Dec 2025",
    version: "v4.0 - v8.0.6",
    title: "High-frequency service updates",
    description:
      "The 2025 version series moved through v4.0, v6.0.5 and multiple v8.0 releases, with release notes continuing to emphasize leave management, dependent and family cards, QR/bar-code reader and deputation support.",
    source: "Apple App Store version history",
  },
  {
    year: "2026",
    period: "25 Jul 2026",
    version: "Google Play update",
    title: "Latest Android listing update",
    description:
      "Google Play lists SAMBHAV as updated on Jul 25, 2026. The current feature notes include SANTOS, leave management, dependent and family cards, security enhancement, QR/bar-code reader, deputation/attachment, ID card and amenity vehicle.",
    source: "Google Play listing",
  },
];

export const achievementItems = [
  { title: "25+ Lakh Personnel Impacted", icon: "users" },
  { title: "100% Secure and Role-Based", icon: "lock" },
  { title: "90%+ Process Efficiency", icon: "trending" },
  { title: "High Availability", icon: "server" },
  { title: "Faster Grievance Resolution", icon: "timer" },
  { title: "Transparent Service Delivery", icon: "eye" },
];

export const impactItems = [
  { value: "25+ Lakh", label: "Personnel Impacted", icon: "users" },
  { value: "100%", label: "Secure & Role-based Access", icon: "shield" },
  { value: "90%+", label: "Faster Grievance Resolution", icon: "timer" },
  { value: "Data-driven", label: "Decision Making", icon: "chart" },
  { value: "Enhanced", label: "Transparency & Trust", icon: "thumb" },
];

export const leadership = {
  name: "CRPF IT Wing",
  designation: "Dovelopment team of CRPF",
  quote:
    "SAMBHAV represents our commitment to responsive welfare delivery, transparent service access, and a stronger support ecosystem for the force.",
};

export const teamMembers = [
  {
    name: "Vitul Kumar",
    role: "IPS ADG",
    
  },
  {
    name: "Ashish Rawat",
    role: "AC / Tech",

  },
  {
    name: "Sunil Dutt",
    role: "ASI /Tech",
    
  },
  
];

export const galleryItems = [
  {
    title: "SAMBHAV Login",
    image: sambhavLoginImage,
  },
  {
    title: "Digital Dashboard",
    image: sambhavDashboardImage,
  },
  {
    title: "Orders and Circulars",
    image: sambhavOrdersImage,
  },
  {
    title: "Pay and Bills",
    image: sambhavBillsImage,
  },
  {
    title: "Leave Management",
    image: sambhavLeaveImage,
  },
];

// export const publications = [
//   {
//     name: "Official CRPF",
//     title: "SAMBHAV strengthens official welfare service delivery",
//     url: "https://placeholder.example/official-crpf/sambhav",
//   },
//   {
//     name: "Amar Ujala",
//     title: "Digital welfare platform supports personnel and families",
//     url: "https://placeholder.example/amar-ujala/sambhav",
//   },
//   {
//     name: "The Times of India",
//     title: "Government technology initiative improves service access",
//     url: "https://placeholder.example/times-of-india/sambhav",
//   },
//   {
//     name: "The Statesman",
//     title: "Modern HR and welfare systems for a connected force",
//     url: "https://placeholder.example/the-statesman/sambhav",
//   },
//   {
//     name: "Wikipedia",
//     title: "Reference entry placeholder for SAMBHAV platform",
//     url: "https://placeholder.example/wikipedia/sambhav",
//   },
//   {
//     name: "HandWiki",
//     title: "Knowledge article placeholder for digital welfare services",
//     url: "https://placeholder.example/handwiki/sambhav",
//   },
//   {
//     name: "Technology Publication",
//     title: "Technology-led governance in welfare management",
//     url: "https://placeholder.example/technology-publication/sambhav",
//   },
// ];

export const footerQuickLinks = ["About", "Modules", "Features", "Gallery"];

export const footerImportantLinks = [
  { label: "CRPF Official Website", url: "https://crpf.gov.in/" },
  { label: "SANTOS Portal", url: "https://crpf.gov.in/SANTOS" },
  { label: "Welfare Schemes", url: "https://crpf.gov.in/welfare-Activities" },
  { label: "Policies and Circulars", url: "https://crpf.gov.in/Media-Centre/CRPF-Policy" },
  { label: "Help and Support", url: "https://crpf.gov.in/Contact-Us/Helpline-Numbers" },
];
