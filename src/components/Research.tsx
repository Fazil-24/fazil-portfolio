import { FileText, Award, ExternalLink } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { research } from "@/data/research";

export default function Research() {
  return (
    <section id="research" className="relative py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          kicker="Research & IP"
          title="Research Projects"
          subtitle="Published work at the intersection of AI, computer vision, and applied systems."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {research.map((item, i) => {
            const Icon = item.type === "paper" ? FileText : Award;
            return (
              <RevealOnScroll key={item.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-7 h-full flex flex-col transition-all hover:-translate-y-1.5 hover:border-accent-cyan/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-violet">
                    <Icon size={20} className="text-white" />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                    {item.venue}
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed flex-1">
                    {item.description}
                  </p>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:underline w-fit"
                    >
                      Read Paper <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
