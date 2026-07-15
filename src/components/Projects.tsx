import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import ProjectsGrid from "./ProjectsGrid";
import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Selected Work"
          title="Projects"
          subtitle="A few things I've built recently. Click any card for the full story — description, links, and demo."
        />

        <ProjectsGrid projects={featured} />

        <RevealOnScroll delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent-cyan/50 hover:scale-105"
            >
              View All Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
