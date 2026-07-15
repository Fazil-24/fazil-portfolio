import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AmbientBackground from "@/components/AmbientBackground";
import SectionHeading from "@/components/SectionHeading";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects, upcomingProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Mohamed Fazil",
  description: "All projects by Mohamed Fazil — agentic AI, GenAI, RAG, and computer vision systems.",
};

export default function ProjectsPage() {
  return (
    <div className="relative py-20">
      <AmbientBackground />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="mt-8">
          <SectionHeading
            kicker="All Work"
            title="Every Project"
            subtitle="Agentic AI, GenAI, RAG, computer vision, and full-stack systems — built solo and in teams."
          />
        </div>

        <ProjectsGrid projects={projects} />

        {upcomingProjects.length > 0 && (
          <div className="mt-16 text-center">
            <p className="kicker justify-center">Coming Soon</p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {upcomingProjects.map((p) => (
                <span
                  key={p}
                  className="rounded-full glass px-4 py-2 text-sm text-muted"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
