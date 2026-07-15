"use client";

import { ExternalLink, PlayCircle, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Project, projectThumbnail } from "@/data/projects";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const thumb = projectThumbnail(project);

  return (
    <button
      onClick={() => onOpen(project)}
      className="group text-left glass rounded-2xl overflow-hidden transition-all hover:-translate-y-2 hover:border-accent-cyan/50 hover:shadow-xl hover:shadow-accent-blue/10 flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-accent-blue/20 via-accent-violet/20 to-accent-cyan/20">
        {thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Sparkles size={40} className="text-white/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {project.video && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <PlayCircle size={44} className="text-white drop-shadow-lg" />
          </div>
        )}
        {project.comingSoon && (
          <span className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs font-medium text-accent-cyan border border-accent-cyan/30">
            Details Coming Soon
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-gradient transition-colors">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-muted line-clamp-2">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-foreground/70"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 text-muted">
          {project.github && (
            <span className="flex items-center gap-1.5 text-xs">
              <FaGithub size={14} /> Code
            </span>
          )}
          {project.live && (
            <span className="flex items-center gap-1.5 text-xs">
              <ExternalLink size={14} /> Live
            </span>
          )}
          {project.video && (
            <span className="flex items-center gap-1.5 text-xs">
              <PlayCircle size={14} /> Demo
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
