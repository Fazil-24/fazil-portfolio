export type ResearchItem = {
  type: "paper" | "patent";
  title: string;
  venue: string;
  description: string;
  url?: string;
};

export const research: ResearchItem[] = [
  {
    type: "paper",
    title: "Edge Driven Biometrics and Facial Recognition for Virtual Assistant",
    venue: "Published in IEEE",
    description:
      "A research paper exploring edge-deployed biometric and facial recognition techniques to power secure, low-latency virtual assistant interactions.",
    url: "https://ieeexplore.ieee.org/document/10433957",
  },
  {
    type: "patent",
    title: "Intelligent Pothole Detection for Roads using Computer Vision",
    venue: "Published Patent",
    description:
      "A patented computer vision system for detecting and localizing potholes in road imagery, later shipped as the VisiPol product.",
  },
];
