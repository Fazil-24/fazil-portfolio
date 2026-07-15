import type { IconType } from "react-icons";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiLangchain,
  SiHuggingface,
  SiGooglecloud,
  SiGooglegemini,
  SiDocker,
  SiN8N,
  SiUipath,
  SiCursor,
  SiAnthropic,
  SiOnnx,
  SiMlflow,
  SiDatabricks,
  SiFigma,
  SiNvidia,
  SiSwagger,
} from "react-icons/si";
import { FaAws, FaMicrosoft, FaRobot } from "react-icons/fa6";

export type Skill = {
  name: string;
  icon: IconType;
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C++", icon: SiCplusplus },
      { name: "C", icon: SiC },
      { name: "HTML", icon: SiHtml5 },
    ],
  },
  {
    category: "GenAI & Agents",
    skills: [
      { name: "LLM Engineering", icon: FaRobot },
      { name: "RAG / GraphRAG", icon: SiHuggingface },
      { name: "LangChain", icon: SiLangchain },
      { name: "Agent Development", icon: SiAnthropic },
      { name: "Claude", icon: SiAnthropic },
      { name: "Gemini", icon: SiGooglegemini },
      { name: "n8n", icon: SiN8N },
      { name: "UiPath", icon: SiUipath },
      { name: "Cursor", icon: SiCursor },
    ],
  },
  {
    category: "ML / Deep Learning",
    skills: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "MLflow", icon: SiMlflow },
      { name: "ONNX Runtime", icon: SiOnnx },
      { name: "NVIDIA CUDA / GPU", icon: SiNvidia },
    ],
  },
  {
    category: "Cloud & Platforms",
    skills: [
      { name: "Microsoft Azure", icon: FaMicrosoft },
      { name: "AWS", icon: FaAws },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Databricks", icon: SiDatabricks },
    ],
  },
  {
    category: "Engineering & Tools",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST / OpenAPI", icon: SiSwagger },
      { name: "Docker", icon: SiDocker },
      { name: "Figma", icon: SiFigma },
    ],
  },
];
