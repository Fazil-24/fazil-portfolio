export type Blog = {
  title: string;
  excerpt: string;
  url: string;
  accent: string;
};

export const blogs: Blog[] = [
  {
    title: "Believe It or Not: AI Can't Steal Your Food, But It Can…",
    excerpt:
      "A look at the real environmental cost of AI — energy consumption and greenhouse gas emissions — beyond the popular narratives.",
    url: "https://medium.com/@mfazil2409/believe-it-or-not-ai-cant-steal-your-food-but-it-can-e907c6a2ae3f",
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    title: "What's Beyond AI? Meet OI, the Real OG",
    excerpt:
      "Exploring Organic Intelligence and what it means when we look past artificial intelligence to the intelligence that inspired it.",
    url: "https://medium.com/@mfazil2409/whats-beyond-ai-meet-oi-the-real-og-2551fa7bd35f",
    accent: "from-fuchsia-400 to-violet-500",
  },
  {
    title: "From Data to Deployment: Sentiment Analysis of Financial News",
    excerpt:
      "An end-to-end machine learning project applying sentiment analysis to financial news headlines using SVM classification.",
    url: "https://medium.com/@mfazil2409/from-data-to-deployment-sentiment-analysis-of-financial-news-780169e85b20",
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "DiNo — Digital Nomad Companion",
    excerpt:
      "A multi-agent AI assistant for remote workers — job hunting, housing search, local recommendations, and style guidance, wherever you are.",
    url: "https://medium.com/@mfazil2409/dino-digital-nomad-companion-f82a823b893a",
    accent: "from-blue-400 to-indigo-500",
  },
];
