import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="About Me"
          title="Turning ambitious AI ideas into production systems"
          subtitle="A quick look at how I work, what I've shipped, and the impact behind it."
        />

        <RevealOnScroll delay={0.1}>
          <div className="glass glass-glow rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto text-center">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I&apos;m an{" "}
              <span className="text-gradient font-semibold">AI Engineer</span> with close to{" "}
              <span className="text-foreground font-semibold">4 years</span> of experience
              designing, building, and deploying production AI systems in enterprise
              environments — from agentic workflows and RAG pipelines to computer vision and
              LLM-powered applications. I collaborate closely with product and platform teams,
              follow strong engineering practices, and love turning ambiguous problems into
              working, measurable solutions.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {site.stats.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={0.1 + i * 0.08}>
              <div className="glass glass-glow rounded-2xl px-4 py-8 text-center hover:-translate-y-1.5">
                <p className="text-3xl sm:text-4xl font-semibold text-gradient">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
