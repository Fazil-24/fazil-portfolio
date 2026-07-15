import type { IconType } from "react-icons";
import { SiGooglecloud, SiAnthropic, SiGithubcopilot } from "react-icons/si";
import { FaAws, FaMicrosoft, FaAward } from "react-icons/fa6";

export type Certification = {
  name: string;
  issuer: string;
  icon: IconType;
  status: "earned" | "planned";
};

export const certifications: Certification[] = [
  { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", icon: FaMicrosoft, status: "earned" },
  { name: "Azure AI Fundamentals (AI-900)", issuer: "Microsoft", icon: FaMicrosoft, status: "earned" },
  { name: "Azure AI Engineer Associate (AI-102)", issuer: "Microsoft", icon: FaMicrosoft, status: "earned" },
  { name: "AI Transformation Leader", issuer: "Certification", icon: FaAward, status: "earned" },
  { name: "Prompt Design in Vertex AI", issuer: "Google Cloud Skill Badge", icon: SiGooglecloud, status: "earned" },

  { name: "Claude Certified Architect", issuer: "Anthropic", icon: SiAnthropic, status: "planned" },
  { name: "Google GenAI Leader", issuer: "Google Cloud", icon: SiGooglecloud, status: "planned" },
  { name: "Azure MLOps (AI-300)", issuer: "Microsoft", icon: FaMicrosoft, status: "planned" },
  { name: "GitHub Copilot Certified", issuer: "GitHub", icon: SiGithubcopilot, status: "planned" },
  { name: "AWS Certified AI Practitioner", issuer: "AWS", icon: FaAws, status: "planned" },
  { name: "AWS Certified Cloud Practitioner", issuer: "AWS", icon: FaAws, status: "planned" },
];
