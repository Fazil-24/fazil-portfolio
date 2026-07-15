"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#research", label: "Research" },
  { href: "/#hackathons", label: "Hackathons" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#blogs", label: "Blogs" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tight text-lg text-foreground hover:text-gradient transition-colors"
        >
          Mohamed Fazil
        </Link>

        <ul className="hidden lg:flex items-center gap-7 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center">
          <a
            href={site.resumeUrl}
            download
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-accent-violet/30 hover:scale-105 active:scale-95"
          >
            <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
            Download CV
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass border-t border-border">
          <ul className="flex flex-col px-5 py-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-muted hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={site.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet px-4 py-2 text-sm font-medium text-white"
              >
                <Download size={16} />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
