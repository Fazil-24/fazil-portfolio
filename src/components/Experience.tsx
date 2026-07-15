import { Briefcase } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          kicker="Career"
          title="Experience"
          subtitle="Where I've built and shipped."
        />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue via-accent-violet to-transparent" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <RevealOnScroll key={item.company} delay={i * 0.1}>
                <div className="relative">
                  <span className="absolute -left-8 sm:-left-10 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue to-accent-violet ring-4 ring-background">
                    <Briefcase size={12} className="text-white" />
                  </span>

                  <div className="glass rounded-2xl p-6 sm:p-8 transition-all hover:-translate-y-1 hover:border-accent-cyan/40">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.role} · <span className="text-gradient">{item.company}</span>
                      </h3>
                      <span className="text-sm text-muted whitespace-nowrap">{item.duration}</span>
                    </div>
                    {item.team && <p className="mt-1 text-sm text-muted">{item.team}</p>}

                    <ul className="mt-4 space-y-2.5">
                      {item.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-2.5 text-sm text-foreground/80 leading-relaxed">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
