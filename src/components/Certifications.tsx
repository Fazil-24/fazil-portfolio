import Image from "next/image";
import { BadgeCheck, ExternalLink, Sparkles } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { certifications, type Certification } from "@/data/certifications";

function BadgeLink({ cert, className, children }: { cert: Certification; className: string; children: React.ReactNode }) {
  return cert.url ? (
    <a href={cert.url} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );
}

export default function Certifications() {
  const featured = certifications.find((c) => c.featured);
  const rest = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Cloud & AI Credentials"
          title="Certifications"
          subtitle="Verified badges across Microsoft, Google Cloud, and GitHub — led by Microsoft's elite TITAN programme."
        />

        {featured && (
          <RevealOnScroll>
            <BadgeLink
              cert={featured}
              className="group relative glass glass-glow rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden transition-all hover:border-accent-cyan/50"
            >
              <div className="pointer-events-none absolute -inset-24 bg-gradient-to-br from-accent-cyan/15 via-transparent to-accent-violet/15 blur-2xl" />
              <div className="relative shrink-0 w-48 h-48 sm:w-60 sm:h-60">
                <div className="absolute inset-6 rounded-full bg-accent-cyan/30 blur-3xl transition-opacity duration-700 group-hover:opacity-100 opacity-70" />
                <Image
                  src={featured.badge}
                  alt={`${featured.name} badge`}
                  fill
                  sizes="(max-width: 640px) 192px, 240px"
                  className="relative object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-3 py-1 text-xs font-medium text-accent-cyan">
                  <Sparkles size={13} /> Elite Credential
                </span>
                <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-foreground leading-tight">
                  {featured.name}
                </h3>
                <p className="mt-2 text-muted">{featured.issuer}</p>
                {featured.url && (
                  <p className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent-cyan">
                    Verify on Credly <ExternalLink size={14} />
                  </p>
                )}
              </div>
            </BadgeLink>
          </RevealOnScroll>
        )}

        <h3 className="mt-14 flex items-center gap-2 text-sm font-semibold text-muted uppercase tracking-wider mb-4">
          <BadgeCheck size={16} className="text-accent-cyan" /> Earned
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {rest.map((c, i) => (
            <RevealOnScroll key={c.name} delay={(i % 4) * 0.07}>
              <BadgeLink
                cert={c}
                className="glass rounded-2xl p-5 h-full flex flex-col items-center text-center transition-all hover:-translate-y-1.5 hover:border-accent-cyan/40"
              >
                <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                  <Image src={c.badge} alt={`${c.name} badge`} fill sizes="96px" className="object-contain" />
                </div>
                <p className="mt-4 text-sm font-semibold text-foreground leading-snug">{c.name}</p>
                <p className="text-xs text-muted mt-1">{c.issuer}</p>
              </BadgeLink>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
