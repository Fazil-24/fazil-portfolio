import { SiMedium } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { blogs } from "@/data/blogs";

export default function Blogs() {
  return (
    <section id="blogs" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Writing"
          title="Blogs"
          subtitle="Thoughts on AI, systems, and the ideas behind what I build — published on Medium."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {blogs.map((b, i) => (
            <RevealOnScroll key={b.url} delay={(i % 2) * 0.1}>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-2xl overflow-hidden flex flex-col h-full transition-all hover:-translate-y-2 hover:border-accent-cyan/50 hover:shadow-xl hover:shadow-accent-blue/10"
              >
                <div className={`relative aspect-[21/9] bg-gradient-to-br ${b.accent} flex items-center justify-center`}>
                  <SiMedium size={40} className="text-white/90" />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-foreground leading-snug group-hover:text-gradient transition-colors">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed flex-1">
                    {b.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan">
                    Read on Medium
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
