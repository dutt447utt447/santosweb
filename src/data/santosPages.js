export const santosPages = {
  aboutUs: {
    eyebrow: "About SANTOS",
    title: "System For Annual Transfer Over Software",
    subtitle:
      "An in-house CRPF digital initiative built to automate, standardize, and make annual transfer processing more transparent for personnel.",
    lead:
      "SANTOS was launched in 2022 as a policy-driven transfer management platform for the Central Reserve Police Force. It combines a secure web portal, mobile-facing services integrated with SAMBHAV, transfer policy logic, preference collection, vacancy mapping, and large-scale data processing into one operational ecosystem.",
    heroFacts: [
      { label: "Launched", value: "2022" },
      { label: "Database", value: "Enterprise RDBMS" },
      { label: "Max concurrency", value: "20,000+" },
      { label: "Recognition", value: "Champion IT Project 2024" },
    ],
    highlights: [
      "In-house software developed by the CRPF IT team for annual transfer processing.",
      "Automates calculations around tenure, hardship, vacancy position, previous postings, and personnel preferences.",
      "Uses the SAMBHAV mobile app ecosystem for information flow, preference submission, and electronic communication.",
      "Available on CRPF intranet and through CRPF WebVPN for authorized internet access.",
      "Designed to reduce paperwork, manual calculations, avoidable delays, and subjective decision-making.",
      "Recognized as Champion IT Project at the 67th All India Police Duty Meet, Lucknow, February 2024.",
    ],
    sections: [
      {
        title: "Purpose And Background",
        body: [
          "CRPF handles a very large annual transfer cycle across diverse cadres, ranks, locations, operational requirements, and family constraints. Before software-driven processing, transfer work depended heavily on manual compilation, manual calculations, repeated verification, and paper-based movement of information.",
          "SANTOS was created to bring these activities into a single digital workflow. The system captures personnel data, policy parameters, choices, vacancies, tenure information, and hardship-related inputs so that transfer processing can be performed in a structured, repeatable, and data-led manner.",
        ],
        bullets: [
          "Annual transfer workflows are converted into defined digital stages.",
          "Preference filling is made available through a controlled online interface.",
          "Policy logic is implemented in software to improve consistency.",
          "Transfer orders and status communication become faster and easier to disseminate.",
        ],
      },
      {
        title: "Platform Model",
        body: [
          "SANTOS includes a web portal and a mobile-facing experience. The web portal supports authorized dealing assistants and administrative users, while mobile features are integrated with the SAMBHAV app of CRPF for personnel-facing services.",
          "On the internet, CRPF services are accessed only through secure VPN channels. SANTOS follows that access model and remains part of the CRPF controlled digital environment.",
        ],
        metrics: [
          { label: "Web stack", value: "IIS Server" },
          { label: "Mobile API", value: "Node-Express" },
          { label: "Choice filling nodes", value: "Up to 14" },
          { label: "Standby portal", value: "Active / standby setup" },
        ],
      },
      {
        title: "Operational Impact",
        body: [
          "The platform has supported very large transfer drives since 2022. The user-provided operational figures show tens of thousands of affected personnel, nearly complete digital choice submission, special cases, retention cases, and large-scale transfer processing within the annual cycle.",
          "Public reporting also highlighted that the SANTOS-based process helped complete more than 60,000 transfers in 2023 and that a significant share of personnel received preferred postings.",
        ],
        table: {
          columns: ["Year", "Personnel affected", "Choices filled", "Special cases", "Retention cases", "Transfers processed"],
          rows: [
            ["2022", "59,000", "59,000", "1,000", "4,800", "59,000"],
            ["2023", "52,000", "52,000", "1,700", "4,400", "52,000"],
          ],
        },
      },
      {
        title: "Recognition",
        body: [
          "During the 67th All India Police Duty Meet held in Lucknow from 12 to 16 February 2024, SANTOS was selected as the Champion IT Project. The trophy was received by DIG/IT Vijay Kumar on behalf of CRPF.",
          "In the programming event at the same meet, ASI/Technical Sunil Dutt and ASI/Technical Ashok Yadav represented CRPF and were awarded bronze medals for their technical performance.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Official CRPF SANTOS page", url: "https://crpf.gov.in/SANTOS" },
      { label: "HandWiki SANTOS software overview", url: "https://handwiki.org/wiki/Software:Santos" },
      {
        label: "Amar Ujala transfer coverage",
        url: "https://www.amarujala.com/india-news/crpf-more-than-60-000-jawans-transferred-75-percent-staff-get-their-preferred-posting-2023-04-14",
      },
      {
        label: "Times of India software-based posting coverage",
        url: "https://timesofindia.indiatimes.com/india/software-to-help-paramilitary-forces-in-transparent-postings/articleshow/86105698.cms",
      },
    ],
  },

  developmentTeam: {
    eyebrow: "Development Team",
    title: "CRPF IT Team Behind SANTOS",
    subtitle:
      "The platform was developed inside CRPF by officers and technical personnel who translated a complex transfer policy into operational software.",
    lead:
      "SANTOS is not a generic commercial transfer product. It was shaped by CRPF's own operational realities, transfer policy requirements, cadre diversity, and high-volume annual processing needs. The development journey shows a rapid transition from early prototype work to a scalable .NET Core MVC and Oracle-backed enterprise system.",
    heroFacts: [
      { label: "First code", value: "Jan 2022" },
      { label: "MVC migration", value: "Jan 2022" },
      { label: "Database work", value: "Feb 2022" },
      { label: "Lines of code", value: "1.9M+" },
    ],
    highlights: [
      "Initial code was written on ASP.NET Web Forms in January 2022.",
      "The project moved to .NET Core framework with C# MVC later in January 2022.",
      "Database creation began in February 2022 with initial tables and a flow diagram.",
      "The system has grown to 200+ database tables, 500+ procedures, and 50+ functions.",
      "An enterprise relational database is used as the database platform.",
      "Web server handles the portal, while separate API nodes support mobile app services.",
    ],
    sections: [
      {
        title: "Project Leadership And Core Contributors",
        body: [
          "The project was developed under the leadership of IPS ADG Vitul Kumar. The principal development and implementation work was carried out by DC/IT Vivek Kumar, AC/IT Ashish Rawat, ASI/Tech Sunil Dutt, and the wider CRPF IT team.",
          "DIG/IT Vijay Kumar received the Champion IT Project trophy at the 67th All India Police Duty Meet, representing the achievement of the CRPF IT ecosystem.",
        ],
        people: [
          { role: "Project Leadership", name: "IPS ADG Vitul Kumar" },
          { role: "DIG/IT", name: "Vijay Kumar" },
          { role: "DC/IT", name: "Vivek Kumar" },
          { role: "AC/IT", name: "Ashish Rawat" },
          { role: "ASI/Tech", name: "Sunil Dutt" },
        ],
      },
      {
        title: "Engineering Timeline",
        body: [
          "The early build moved quickly because the team had to model a live administrative process rather than a small standalone utility. Policy interpretation, workflow design, database modeling, UI development, API services, and large-scale testing had to move together.",
        ],
        timeline: [
          {
            date: "05 Jan 2022",
            title: "First ASP.NET Web Forms code",
            detail: "Initial prototype and first code base for the transfer software began.",
          },
          {
            date: "29 Jan 2022",
            title: ".NET Core MVC migration",
            detail: "Project moved to a modern C# MVC framework for cleaner structure and maintainability.",
          },
          {
            date: "07 Feb 2022",
            title: "Database design started",
            detail: "Oracle database creation started with 13 tables and a flow diagram.",
          },
          {
            date: "2022 onwards",
            title: "Operational expansion",
            detail: "System scaled into a large enterprise application with hundreds of tables and procedures.",
          },
          {
            date: "12-16 Feb 2024",
            title: "Champion IT Project",
            detail: "SANTOS received Champion IT Project recognition at the 67th AIPDM, Lucknow.",
          },
        ],
      },
      {
        title: "Technical Scale",
        body: [
          "The development team had to solve for concurrency, policy calculation, choice filling, controlled access, read-heavy periods, transaction safety, and the administrative review of special and retention cases.",
          "The choice filling phase was supported by multiple Node-Express API nodes and an active or standby web portal arrangement for continuity.",
        ],
        metrics: [
          { label: "Database tables", value: "200+" },
          { label: "Stored procedures", value: "500+" },
          { label: "Functions", value: "50+" },
          { label: "Max concurrency", value: "20,000+" },
          { label: "Transfer cycle 2022", value: "50,000+ processed" },
          { label: "Transfer cycle 2023", value: "50,000+ processed" },
        ],
      },
      {
        title: "Technical Recognition",
        body: [
          "In addition to the Champion IT Project trophy, CRPF participants also performed strongly in the programming event. ASI/Tech Sunil Dutt and ASI/Tech Ashok Yadav were awarded bronze medals for their performance.",
          "This recognition matters because it connects the operational success of SANTOS with hands-on technical capability inside the force.",
        ],
      },
    ],
    sourceLinks: [
      {
        label: "Tech View Team Champion IT Project coverage",
        url: "https://techviewteam.blogspot.com/2024/02/santos-software-champion-it-project-at.html",
      },
      {
        label: "Tech View Team SANTOS development coverage",
        url: "https://techviewteam.blogspot.com/2023/04/crpfs-innovative-transfer-software.html",
      },
      { label: "Official CRPF SANTOS page", url: "https://crpf.gov.in/SANTOS" },
    ],
  },

  policy: {
    eyebrow: "Policy Page",
    title: "Policy-Driven Transfer Processing",
    subtitle:
      "SANTOS is designed around CRPF transfer policy, authorized workflows, preference filling, data validation, and transparent transfer list generation.",
    lead:
      "This page explains the software-facing policy model used by SANTOS. Official CRPF standing orders, circulars, and transfer policy documents remain the final authority for operational decisions. SANTOS helps implement those rules in a consistent digital workflow.",
    heroFacts: [
      { label: "Policy basis", value: "CRPF transfer rules" },
      { label: "Choice filling", value: "Digital" },
      { label: "Special cases", value: "Supported" },
      { label: "Retention cases", value: "Supported" },
    ],
    highlights: [
      "Transfers are processed using predefined rules rather than manual preference alone.",
      "Choice filling allows personnel to express unit preferences through authorized digital channels.",
      "Hardship score, tenure, previous postings, vacancy position, and policy conditions are key decision inputs.",
      "Special cases and retention cases are captured separately for policy-based consideration.",
      "SANTOS improves transparency by reducing manual calculations and strengthening auditability.",
      "Access is restricted to authorized CRPF environments, intranet, and VPN-based channels.",
    ],
    sections: [
      {
        title: "Policy Objective",
        body: [
          "The policy objective behind SANTOS is to make annual transfers faster, more transparent, and more consistent. A software-based approach reduces avoidable human interface, improves adherence to rules, and helps personnel see a structured preference-filling process.",
          "Media coverage around software-based transfer policy for paramilitary forces has emphasized transparency, point-based or weightage-based decision-making, timely movement between hard and soft postings, and reduction of favoritism or delays.",
        ],
      },
      {
        title: "Core Workflow",
        body: [
          "The system workflow begins with identification of personnel due for transfer, validation of service and posting data, publication of eligible options, collection of preferences, processing of special or retention cases, and generation of transfer outputs.",
          "Choice filling is read-heavy during peak periods because personnel browse available unit options before submitting preferences. The transfer processing path is transaction-controlled so that final submissions and administrative actions remain consistent.",
        ],
        bullets: [
          "Personnel due list and cadre/rank grouping",
          "Posting history, tenure, and hardship data validation",
          "Vacancy and unit category mapping",
          "Preference window for choice filling",
          "Special case and retention case review",
          "Policy-based processing and final transfer list generation",
        ],
      },
      {
        title: "Decision Inputs",
        body: [
          "SANTOS does not treat a transfer as a simple first-come-first-served preference list. The software model considers multiple policy parameters so that the output reflects organizational requirements as well as personnel preferences wherever possible.",
        ],
        metrics: [
          { label: "Tenure", value: "Time served at present / previous postings" },
          { label: "Hardship", value: "Hard or soft posting weightage" },
          { label: "Vacancy", value: "Available sanctioned positions" },
          { label: "Preference", value: "Personnel choice filling" },
          { label: "Cadre", value: "Rank and cadre-specific eligibility" },
          { label: "Cases", value: "Special and retention requests" },
        ],
      },
      {
        title: "Special And Retention Cases",
        body: [
          "Special case and retention workflows are important because real personnel management cannot be reduced to ordinary choice matching alone. SANTOS records these cases and allows them to be considered under the applicable policy category.",
          "User-provided 2022 figures include 1,004 special cases and 4,802 retention cases, with 670 special approvals and 1,389 retention approvals. For 2023, the provided figures include 1,733 special cases and 4,472 retention cases.",
        ],
        table: {
          columns: ["Year", "Special cases", "Retention cases", "Special approved", "Retention approved"],
          rows: [
            ["2022", "1,004", "4,802", "670", "1,389"],
            ["2023", "1,733", "4,472", "As per competent authority", "As per competent authority"],
          ],
        },
      },
      {
        title: "Access And Security Policy",
        body: [
          "SANTOS is part of the CRPF controlled service environment. The public internet is not the ordinary access surface for operational use. Authorized users access CRPF services through the intranet or through CRPF WebVPN where internet access is permitted.",
          "The government-style security posture for such a system includes role-based access, controlled sessions, audit records, separation of administrative and personnel-facing functions, and careful treatment of official data.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Official CRPF SANTOS page", url: "https://crpf.gov.in/SANTOS" },
      {
        label: "Times of India software-based personnel policy coverage",
        url: "https://timesofindia.indiatimes.com/india/software-to-help-paramilitary-forces-in-transparent-postings/articleshow/86105698.cms",
      },
      {
        label: "The Statesman transparent transfer mechanism coverage",
        url: "https://www.thestatesman.com/india/software-based-transfer-policy-paramilitary-forces-soon-1503005495.html",
      },
      { label: "CRPF transfer policy page", url: "https://crpf.gov.in/transfer-policy.htm" },
    ],
  },

  disclaimer: {
    eyebrow: "Disclaimer",
    title: "Information, Attribution, And Use Notice",
    subtitle:
      "This website presents informational material about SANTOS and does not replace official CRPF portals, transfer orders, policy circulars, or authorized communication channels.",
    lead:
      "The SANTOS information pages are prepared for educational, documentation, and public-information presentation purposes. Operational transfer decisions, eligibility, access, credentials, and official orders are governed only by competent CRPF authorities and official systems.",
    heroFacts: [
      { label: "Website type", value: "Informational" },
      { label: "Official authority", value: "CRPF only" },
      { label: "Access", value: "Authorized channels" },
      { label: "Data use", value: "No confidential data" },
    ],
    highlights: [
      "This website is not the official CRPF SANTOS portal.",
      "The site must not be used for live transfer processing, official authentication, or grievance submission.",
      "Published figures are based on user-provided information and publicly accessible references.",
      "Official CRPF circulars, transfer policies, orders, and portal notices take precedence.",
      "External links are provided for reference and may change without notice.",
      "No confidential, classified, personal, or operationally sensitive data should be entered on this website.",
    ],
    sections: [
      {
        title: "No Official Portal Claim",
        body: [
          "This website is an informational presentation about SANTOS. It is not an official CRPF website, not a login surface, not an operational transfer portal, and not a substitute for the official SANTOS system available through CRPF-authorized environments.",
          "Names of CRPF, SANTOS, SAMBHAV, AIPDM, officers, publications, and public institutions are used only for factual identification and informational context.",
        ],
      },
      {
        title: "Official Information Takes Priority",
        body: [
          "All operational matters such as transfer eligibility, preference windows, merit calculation, hardship classification, special case consideration, retention approval, final posting, relieving, joining, or grievances are governed by official CRPF rules and competent authority decisions.",
          "If any information on this site differs from an official order, circular, policy document, portal notice, or instruction issued by CRPF or the Ministry of Home Affairs, the official source shall prevail.",
        ],
      },
      {
        title: "Public References And Data",
        body: [
          "The website uses user-provided SANTOS development information, public news coverage, and publicly accessible references. Figures such as database scale, lines of code, transfer cycle totals, and event recognitions are included for documentation and presentation purposes.",
          "External references are provided to support transparency. Their content, availability, language, and future updates are controlled by the respective publishers.",
        ],
      },
      {
        title: "Privacy And Security",
        body: [
          "No user should enter service numbers, passwords, transfer choices, personal details, medical records, family details, operational details, or other sensitive information into this informational website.",
          "Authorized users should access SANTOS only through CRPF-approved systems, intranet, WebVPN, SAMBHAV integration, or other official channels notified by the force.",
        ],
      },
      {
        title: "No Legal Or Administrative Reliance",
        body: [
          "This website does not create rights, eligibility, approval, claim, transfer assurance, grievance remedy, or administrative instruction. It is not legal advice, policy advice, or an official interpretation of CRPF transfer policy.",
          "For official action, personnel should rely only on competent authority instructions and official CRPF communication channels.",
        ],
      },
    ],
    sourceLinks: [
      { label: "Official CRPF SANTOS page", url: "https://crpf.gov.in/SANTOS" },
      { label: "Official CRPF website", url: "https://crpf.gov.in/Index" },
    ],
  },
};
