"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, Phone, Download, ArrowDown } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { site } from "@/data/site";

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % site.roles.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block h-[1.4em] overflow-hidden align-bottom">
      {site.roles.map((role, i) => (
        <motion.span
          key={role}
          className="absolute left-0 top-0 whitespace-nowrap text-gradient font-semibold"
          initial={false}
          animate={{
            y: i === index ? 0 : i < index ? "-100%" : "100%",
            opacity: i === index ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {role}
        </motion.span>
      ))}
      <span className="invisible">{site.roles.reduce((a, b) => (a.length > b.length ? a : b))}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="kicker">{site.location} · Open to Relocate</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            Hi, I&apos;m {site.name.split(" ")[0]} {site.name.split(" ")[1]}
          </h1>
          <p className="mt-4 text-2xl sm:text-3xl font-medium text-muted">
            <RotatingRole />
          </p>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
            {site.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={site.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-accent-violet/30 hover:scale-105 active:scale-95"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
              Download CV
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent-cyan/50 hover:scale-105 active:scale-95"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-9 flex items-center gap-4">
            {[
              { href: site.linkedin, icon: FaLinkedin, label: "LinkedIn" },
              { href: site.github, icon: FaGithub, label: "GitHub" },
              { href: `mailto:${site.email}`, icon: Mail, label: "Email" },
              { href: `tel:${site.phone.replace(/\s/g, "")}`, icon: Phone, label: "Phone" },
            ].map((s) => (
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
        </motion.div>

        <motion.div
          className="relative mx-auto group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent-blue via-accent-violet to-accent-cyan opacity-60 blur-2xl animate-pulse transition-opacity duration-700 group-hover:opacity-95"
              style={{ animationDuration: "4s" }}
            />
            <motion.div
              className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/50 transition-colors duration-500 group-hover:border-accent-cyan/50"
              whileHover={{ scale: 1.045, rotate: -1 }}
              transition={{ type: "spring", stiffness: 220, damping: 16 }}
            >
              <Image
                src="/images/profile.png"
                alt={site.name}
                fill
                priority
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover grayscale-[35%] transition-all duration-700 ease-out group-hover:grayscale-0"
              />
              {/* shine sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-[120%] skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[120%]" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="/#about"
        aria-label="Scroll to About"
        className="hidden sm:flex mx-auto mt-16 w-fit items-center justify-center text-muted hover:text-accent-cyan transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
