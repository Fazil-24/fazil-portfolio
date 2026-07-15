"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Project, youtubeEmbed, projectThumbnail } from "@/data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const embed = youtubeEmbed(project?.video);
  const thumb = project ? projectThumbnail(project) : undefined;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative w-full sm:max-w-3xl glass sm:rounded-3xl overflow-hidden my-0 sm:my-auto"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition-colors hover:bg-black/70"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-video bg-gradient-to-br from-accent-blue/20 via-accent-violet/20 to-accent-cyan/20">
              {embed ? (
                <iframe
                  src={embed}
                  title={project.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : thumb ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={thumb} alt={project.title} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-white/40 text-sm">
                  Preview coming soon
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
              <p className="mt-1 text-gradient font-medium">{project.tagline}</p>

              <p className="mt-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-foreground/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.comingSoon && (
                <p className="mt-5 text-sm text-accent-cyan">
                  Full write-up, links, and demo video for this project are coming soon.
                </p>
              )}

              <div className="mt-7 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent-cyan/50 hover:scale-105"
                  >
                    <FaGithub size={16} />
                    View Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet px-5 py-2.5 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-accent-violet/30 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
