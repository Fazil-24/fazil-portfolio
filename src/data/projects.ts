export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image?: string; // custom thumbnail, takes priority over YouTube thumbnail
  github?: string;
  live?: string;
  video?: string; // youtube URL
  featured: boolean;
  comingSoon?: boolean;
};

function youtubeId(url?: string): string | undefined {
  if (!url) return undefined;
  const m = url.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]{6,})/);
  return m?.[1];
}

export function youtubeThumbnail(url?: string): string | undefined {
  const id = youtubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : undefined;
}

export function youtubeEmbed(url?: string): string | undefined {
  const id = youtubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : undefined;
}

export function projectThumbnail(project: Project): string | undefined {
  return project.image ?? youtubeThumbnail(project.video);
}

export const projects: Project[] = [
  {
    slug: "memory-immune-system",
    title: "Memory Immune System",
    tagline: "Detecting and quarantining poisoned AI agent memory",
    description:
      "AI agents accumulate memory from Slack messages, policy docs, and meeting notes — and some of it ends up wrong, outdated, or even deliberately planted. Most memory systems have no idea, and will retrieve the wrong document with the same confidence as the right one. This project detects that poisoning, quarantines it, repairs the agent's answers, and can permanently forget bad memory, all backed by Cognee's real remember / recall / improve / forget API.",
    tags: ["Cognee", "AI Agents", "Memory Systems", "RAG", "Python"],
    github: "https://github.com/Fazil-24/Memory-Immune-System",
    live: "https://memory-immune-system-coral.vercel.app/",
    video: "https://youtu.be/AAN7eL0wlI0",
    featured: true,
  },
  {
    slug: "launchappy",
    title: "LaunchHappy",
    tagline: "An AI-powered launch rehearsal studio for product teams",
    description:
      "LaunchHappy is an AI-powered launch rehearsal studio for product teams. Users can upload a pitch deck or answer a structured launch brief, and the platform converts that input into a simulated launch environment with dynamic personas, launch outcome scenarios, risk analysis, and strategy guidance.",
    tags: ["GenAI", "Multi-Agent", "Next.js", "LLM"],
    github: "https://github.com/Fazil-24/L_Happy",
    live: "https://launchappy.vercel.app/",
    video: "https://youtu.be/QXbm-aiqads",
    featured: true,
  },
  {
    slug: "lokai",
    title: "LokAI",
    tagline: "Turning messy citizen input into structured civic intelligence",
    description:
      "LokAI turns messy citizen input (text, photo, or voice, in any language) into structured civic intelligence, links it into a knowledge graph alongside real government works data (using Karnataka constituencies as an example), demographic indicators, and scheme rules, and helps an MP or constituency officer compare competing development projects using a transparent priority score, a trade-off simulator, and scheme eligibility checks.",
    tags: ["Knowledge Graph", "Multimodal", "GenAI", "Civic Tech"],
    github: "https://github.com/Fazil-24/lokAI",
    live: "https://lok-ai.vercel.app/",
    video: "https://youtu.be/vpcm0gkTEwU",
    featured: true,
  },
  {
    slug: "meeting-intelligence",
    title: "Magic Meet — Meeting Intelligence",
    tagline: "A meeting-native multi-agent planning system",
    description:
      "Magic Meet is a meeting-native multi-agent planning system that turns live enterprise conversations into grounded solution plans, architecture recommendations, business impact summaries, and sprint-ready execution outputs. Designed for Azure AI Foundry-style agent orchestration, where models, tools, knowledge sources, and governance work together in one workflow.",
    tags: ["Azure AI Foundry", "Multi-Agent", "Enterprise AI"],
    image: "/images/projects/meeting-intelligence.jpg",
    featured: false,
    comingSoon: true,
  },
  {
    slug: "alertx",
    title: "AlertX",
    tagline: "Agentic incident response for infrastructure & disaster resilience",
    description:
      "AlertX is an agentic AI solution that helps coordinate faster, smarter responses to infrastructure failures and urban disasters — protecting lives and property. A team of intelligent incident-response agents analyses incidents, validates them, and reports directly to the right authorities within minutes of chaos. Built using a combination of IBM watsonx.ai, IBM Orchestrate, multimodal LLMs, and Twilio, with an autonomous calling agent for real-time response.",
    tags: ["IBM watsonx.ai", "IBM Orchestrate", "Multimodal LLM", "Twilio", "Agentic AI"],
    image: "/images/projects/alertx.jpg",
    github: "https://github.com/Ramachandranram4/geminisustAI",
    live: "https://geminisustai.vercel.app/",
    video: "https://www.youtube.com/watch?v=iU6NxPpVRPw",
    featured: false,
  },
  {
    slug: "tradeagent",
    title: "TradeAgent",
    tagline: "AI-generated multilingual quotes & invoices for trade businesses",
    description:
      "Electricians and small trade businesses lose time and money creating quotes and invoices by hand. TradeAgent is a mobile-first PWA where an electrician describes a job or uploads photos, and AI (Gemini, with Cerebras as a fallback) generates an itemized quote in the customer's own language — English, Tamil, Hindi, Kannada, Telugu, or Malayalam. The electrician edits it if needed, shares it on WhatsApp or downloads a PDF, and tracks it from quote → approval → auto-generated invoice → paid, all from one dashboard.",
    tags: ["Gemini", "Cerebras", "PWA", "GenAI", "Multilingual"],
    image: "/images/projects/tradeagent.jpg",
    github: "https://github.com/Fazil-24/TradeAgent",
    live: "https://trade-agent-silk.vercel.app/",
    featured: false,
  },
  {
    slug: "beyond-vision",
    title: "Beyond Vision",
    tagline: "Smart SOP monitoring & crowd analytics with computer vision",
    description:
      "Beyond Vision solves the challenge of enforcing safety guidelines in busy public spaces — stations, airports, gatherings — where constant human vigilance isn't possible. It uses AI/ML with video analytics and hyper-tuned algorithms to monitor SOP compliance and track crowd movement in high-footfall areas, minimizing impact on the experience while ensuring guidelines are followed. Later extended into Retail Vision analytics (SuperEye).",
    tags: ["Computer Vision", "Video Analytics", "Machine Learning"],
    image: "/images/projects/beyond-vision.jpg",
    github: "https://github.com/Fazil-24/Beyond-Vision",
    featured: false,
  },
  {
    slug: "visipol",
    title: "VisiPol",
    tagline: "Intelligent pothole detection for safer roads",
    description:
      "VisiPol detects potholes using Intel OneAPI, harnessing deep learning and computer vision to analyze road images. The web application lets users upload road images for real-time analysis, detecting and localizing potholes within the uploaded images using the Intel OneAPI deep learning framework. Also shipped as an Android app on the Play Store.",
    tags: ["Intel OneAPI", "Computer Vision", "Deep Learning"],
    github: "https://github.com/VisiPol/Webapp",
    live: "https://play.google.com/store/apps/details?id=com.invictus.visipol&hl=en_IN",
    video: "https://youtu.be/bf1IWGSRV1s",
    featured: false,
  },
];

export const upcomingProjects = [
  "Confidence Coach App",
  "Arabic Voice Autonomous Agent",
  "Microsoft AI Project",
];
