import { BadgeCheck, Clock } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  const earned = certifications.filter((c) => c.status === "earned");
  const planned = certifications.filter((c) => c.status === "planned");

  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Cloud & AI Credentials"
          title="Certifications"
          subtitle="Multi-cloud certified, with a growing badge collection across Microsoft, Google, and AWS."
        />

        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold text-muted uppercase tracking-wider mb-4">
            <BadgeCheck size={16} className="text-accent-cyan" /> Earned
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {earned.map((c, i) => (
              <RevealOnScroll key={c.name} delay={(i % 3) * 0.07}>
                <div className="glass rounded-2xl p-5 flex items-center gap-4 transition-all hover:-translate-y-1.5 hover:border-accent-cyan/40">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-violet">
                    <c.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-snug">{c.name}</p>
                    <p className="text-xs text-muted mt-0.5">{c.issuer}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {planned.length > 0 && (
          <div className="mt-12">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-muted uppercase tracking-wider mb-4">
              <Clock size={16} className="text-accent-violet" /> In Progress / Planned
            </h3>
            <div className="flex flex-wrap gap-3">
              {planned.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-2.5 rounded-full border border-dashed border-white/15 px-4 py-2.5 text-sm text-muted"
                >
                  <c.icon size={16} className="text-muted" />
                  {c.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
