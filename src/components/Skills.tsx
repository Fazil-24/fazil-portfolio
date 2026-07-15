import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Tech Stack"
          title="Skills & Tools"
          subtitle="The languages, frameworks, and platforms I use to design, build, and ship AI systems."
        />

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <RevealOnScroll key={group.category} delay={gi * 0.06}>
              <div>
                <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2.5 rounded-full glass px-4 py-2.5 text-sm text-foreground/90 transition-all hover:-translate-y-1 hover:border-accent-cyan/50 hover:shadow-lg hover:shadow-accent-blue/10"
                    >
                      <skill.icon
                        size={17}
                        className="text-accent-cyan transition-transform group-hover:scale-110 group-hover:rotate-6"
                      />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
