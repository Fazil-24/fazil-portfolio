export type ExperienceItem = {
  company: string;
  role: string;
  team?: string;
  duration: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Unisys",
    role: "AI Engineer",
    team: "AI Practice Team, Enterprise CTO",
    duration: "Sept 2022 — Present",
    bullets: [
      "Created an agentic AI solution for contract analysis and summarization, saving up to $70k of the procurement team's budget per year.",
      "Built a conversational interface using Azure OpenAI for frontline workers, improving overall efficiency by 82%.",
      "Worked on a multi-agent project for emergency disaster response, leveraging vision models and autonomous calling agents.",
      "Re-engineered a defective battery identification solution for manufacturing plants using Amazon Lookout for Vision, boosting ROI by 50% above plan.",
      "Built a multi-errand route optimization system for field service workers with custom task-based planning algorithms integrated with maps; designed and deployed a production-ready LLM application.",
      "Led BFSI projects for document processing and account reconciliation bots; organized workshops and customer sessions to grow visibility and customer portfolio.",
      "Core team member on Hyper-personalization, Digital Twins, and Machine Learning initiatives.",
      "Automated mail, document, and word workflows, cutting the team's manual effort by 90%.",
      "Drove ideation, design, and rapid prototyping of PoCs for client use cases.",
    ],
  },
  {
    company: "Dlithe",
    role: "IoT Intern",
    duration: "May 2022 — June 2022",
    bullets: [
      "Hands-on exposure to sensors, actuators, Arduino Uno, and Raspberry Pi across multiple experiments.",
      "Learned and applied core IoT communication protocols to build and report on working device setups.",
      "Collaborated as a team to design and build a capstone IoT project using the skills gained during the internship.",
    ],
  },
];
