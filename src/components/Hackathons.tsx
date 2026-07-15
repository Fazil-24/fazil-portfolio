import { Trophy } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { hackathons } from "@/data/hackathons";

export default function Hackathons() {
  return (
    <section id="hackathons" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Competitive Track Record"
          title="Hackathons & Achievements"
          subtitle="Global and national hackathons — built under pressure, judged on impact."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((h, i) => (
            <RevealOnScroll key={h.title} delay={(i % 3) * 0.08}>
              <div className="glass rounded-2xl overflow-hidden h-full flex flex-col transition-all hover:-translate-y-2 hover:border-accent-cyan/50 hover:shadow-xl hover:shadow-accent-blue/10">
                <div className={`grid ${h.images.length > 1 ? "grid-cols-2" : "grid-cols-1"} gap-px bg-white/5`}>
                  {h.images.map((img) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={img}
                      src={img}
                      alt={h.title}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  ))}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Trophy size={16} />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {h.placement}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-foreground leading-snug">
                    {h.title}
                  </h3>
                  <p className="mt-1 text-sm text-gradient font-medium">
                    {h.event}
                    {h.date && <span className="text-muted font-normal"> · {h.date}</span>}
                  </p>
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed flex-1">
                    {h.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
