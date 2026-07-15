export type Hackathon = {
  title: string;
  event: string;
  placement: string;
  date: string;
  description: string;
  images: string[];
};

export const hackathons: Hackathon[] = [
  {
    title: "Smart AIoT Powered Bin",
    event: "IBM Call for Code — Global",
    placement: "2nd Runner-up Globally (only team from India) + BBMP Innovation Award",
    date: "2022",
    description:
      "Built a Smart AIoT-powered bin that automatically classifies and segregates waste. Finished as 2nd Runner-up globally — the only Indian team to place — and separately won an Innovation Award from BBMP, Bangalore for the project.",
    images: ["/images/hackathons/call-for-code-2022.jpg"],
  },
  {
    title: "AlertX — Autonomous Disaster Response Agents",
    event: "IBM Call for Code — Global",
    placement: "2nd Runner-up Globally",
    date: "2025",
    description:
      "Led the team in the 2025 edition, building AlertX — autonomous agents for natural disaster response and resilient infrastructure. Placed as 2nd Runner-up globally.",
    images: [
      "/images/hackathons/call-for-code-2025-1.jpg",
      "/images/hackathons/call-for-code-2025-2.jpg",
    ],
  },
  {
    title: "VisiPol",
    event: "Intel OneAPI Hackathon",
    placement: "1st Prize (National Champion) — Team Meraki",
    date: "2023",
    description:
      "Team Meraki won first prize with VisiPol — an app that accurately assesses pothole severity from a single uploaded image.",
    images: ["/images/hackathons/intel-oneapi.jpg"],
  },
  {
    title: "Beyond Vision — SOP Monitoring System",
    event: "Unisys Innovation Program",
    placement: "Runner-up",
    date: "July 2022",
    description:
      "Runner-up in one of India's biggest technical project contests for engineering students, with Beyond Vision — a smart SOP monitoring system.",
    images: ["/images/hackathons/unisys-innovation-program.jpg"],
  },
  {
    title: "AI-Based Crop Management System",
    event: "TIBCO Global Labs IoT & Sustainability Hackathon",
    placement: "1st Prize — $10,000 Cash Prize",
    date: "Jan–Feb 2022",
    description:
      "Won first prize in the Global TIBCO Labs IoT and Sustainability Hackathon, addressing global environmental challenges with an AI-based crop management system.",
    images: ["/images/hackathons/tibco.jpg"],
  },
  {
    title: "Lookate — Unlocking Contextual Place Information",
    event: "Foursquare Hackathon (Global)",
    placement: "2nd Place",
    date: "",
    description:
      "Secured second place globally by building Lookate, leveraging the Foursquare API, OpenStreetMap, and Gemini models for image-based search and a to-do list that syncs with a smart map for travel planning.",
    images: ["/images/hackathons/foursquare.jpg"],
  },
  {
    title: "AI Solution for HIV Patient Care",
    event: "Tresata Hackathon, Bangalore",
    placement: "2nd Prize",
    date: "",
    description:
      "Won second prize for an AI solution addressing a problem statement provided by the Sneha Charitable Trust, focused on AI solutions for HIV patients.",
    images: ["/images/hackathons/tresata.jpg"],
  },
  {
    title: "Google Wallet Multi-Agent System",
    event: "Google Agentic AI Day (Guinness World Record Event)",
    placement: "Participant — In-person Global Hackathon",
    date: "",
    description:
      "Built a multi-agent system reimagining receipts and passes for Google Wallet: a Pass Generator Agent, a Financial Advisor Agent powered by a Neo4j knowledge graph, a Location-Aware Agent for contextual offers, a Smart Reminder System integrated with Google Calendar, and a unique Draw-to-Add voucher feature — all in one seamless platform.",
    images: ["/images/hackathons/google-agentic-ai-day.jpg"],
  },
];
