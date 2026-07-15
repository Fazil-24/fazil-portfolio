import { GraduationCap, Compass } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading kicker="Foundation" title="Education" />

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((item, i) => {
            const Icon = item.type === "degree" ? GraduationCap : Compass;
            return (
              <RevealOnScroll key={item.institution} delay={i * 0.1}>
                <div className="glass rounded-2xl p-7 h-full transition-all hover:-translate-y-1.5 hover:border-accent-cyan/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-violet">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {item.institution}
                  </h3>
                  <p className="mt-1 text-sm text-gradient font-medium">{item.program}</p>
                  <p className="mt-2 text-sm text-muted">{item.duration}</p>
                  {item.detail && (
                    <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{item.detail}</p>
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
