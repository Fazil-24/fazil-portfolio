"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import RevealOnScroll from "./RevealOnScroll";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <RevealOnScroll key={p.slug} delay={(i % 3) * 0.08}>
            <ProjectCard project={p} onOpen={setSelected} />
          </RevealOnScroll>
        ))}
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
