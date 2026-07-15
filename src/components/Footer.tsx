import { Mail, Phone, Download } from "lucide-react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa6";
import { site } from "@/data/site";

const socials = [
  { href: site.linkedin, label: "LinkedIn", icon: FaLinkedin },
  { href: site.github, label: "GitHub", icon: FaGithub },
  { href: `mailto:${site.email}`, label: "Email", icon: Mail },
  { href: `tel:${site.phone.replace(/\s/g, "")}`, label: "Phone", icon: Phone },
  ...(site.facebook ? [{ href: site.facebook, label: "Facebook", icon: FaFacebook }] : []),
];

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <div className="glass rounded-3xl px-6 py-12 sm:px-12 sm:py-16 text-center">
          <p className="kicker justify-center">Let&apos;s build something</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Have a role, a problem, or a wild AI idea?
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            I&apos;m always open to conversations about AI engineering roles, collaborations, or
            interesting problems worth solving. Reach out — I reply fast.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-accent-violet/30 hover:scale-105 active:scale-95"
            >
              <Mail size={16} />
              Email Me
            </a>
            <a
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent-cyan/50 hover:scale-105 active:scale-95"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-muted transition-all hover:text-accent-cyan hover:border-accent-cyan/50 hover:-translate-y-1"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind.
          </p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
