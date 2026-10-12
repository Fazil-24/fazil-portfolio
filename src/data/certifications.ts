export type Certification = {
  name: string;
  issuer: string;
  badge: string; // badge image in /public/images/badges
  url?: string; // public verification link
  featured?: boolean; // shown as the large hero badge
};

export const certifications: Certification[] = [
  {
    name: "Microsoft TITAN — Frontier Transformation Engineer",
    issuer: "Microsoft",
    badge: "/images/badges/frontier-transformation-engineer.png",
    url: "https://www.credly.com/badges/8586232c-cb12-4835-af90-496de82930d5",
    featured: true,
  },
  {
    name: "Agentic AI Business Solutions Architect Expert",
    issuer: "Microsoft Certified",
    badge: "/images/badges/ms-expert.svg",
  },
  {
    name: "Azure AI Engineer Associate (AI-102)",
    issuer: "Microsoft Certified",
    badge: "/images/badges/ms-associate.svg",
  },
  {
    name: "AI Transformation Leader",
    issuer: "Microsoft Certified",
    badge: "/images/badges/ai-transformation-leader.svg",
  },
  {
    name: "Generative AI Leader",
    issuer: "Google Cloud",
    badge: "/images/badges/google-genai-leader.png",
    url: "https://www.credly.com/badges/de99a33e-22cf-4c4a-bf81-3cb11cbf9d24",
  },
  {
    name: "GitHub Copilot",
    issuer: "GitHub",
    badge: "/images/badges/github-copilot.svg",
  },
  {
    name: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft Certified",
    badge: "/images/badges/azure-ai-fundamentals.png",
    url: "https://www.credly.com/badges/2cf140f5-2e8e-460f-bb88-31b278ac3e1b",
  },
  {
    name: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft Certified",
    badge: "/images/badges/ms-fundamentals.svg",
  },
  {
    name: "Prompt Design in Vertex AI",
    issuer: "Google Cloud Skill Badge",
    badge: "/images/badges/prompt-design-vertex-ai.png",
    url: "https://www.credly.com/badges/8e7cbc44-b950-4dce-b73e-b815dc437e21",
  },
];
