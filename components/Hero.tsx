"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto w-full">
        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-4 md:grid-cols-12 gap-3 mb-8">
          {/* Main intro — large tile */}
          <motion.div
            {...fade(0)}
            className="col-span-4 md:col-span-8 md:row-span-2 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-8 md:p-12 flex flex-col justify-end hover:border-[#d4a853]/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <p className="text-[#908a82] text-sm tracking-widest uppercase mb-4">
              Full-Stack Developer
            </p>
            <h1 className="font-[var(--font-serif)] text-5xl sm:text-6xl lg:text-7xl font-medium text-[#ede9e3] leading-[1.1] mb-4">
              Akshat
              <br />
              <span className="text-[#d4a853]">Kansara</span>
            </h1>
            <p className="text-white/90 text-base md:text-lg max-w-lg leading-relaxed">
              I build scalable, production-grade web applications with Node.js,
              React, and Next.js — with a growing focus on AI Engineering.
            </p>
          </motion.div>

          {/* Stat — years */}
          <motion.div
            {...fade(0.1)}
            className="col-span-2 md:col-span-4 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col justify-between hover:border-[#d4a853]/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="text-[#908a82] text-xs tracking-widest uppercase">
              Experience
            </span>
            <div>
              <p className="font-[var(--font-serif)] text-4xl md:text-5xl text-[#ede9e3] font-medium">
                2.5<span className="text-[#d4a853]">+</span>
              </p>
              <p className="text-[#908a82] text-sm mt-1">Years building</p>
            </div>
          </motion.div>

          {/* Stat — projects */}
          <motion.div
            {...fade(0.15)}
            className="col-span-2 md:col-span-4 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col justify-between hover:border-[#d4a853]/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="text-[#908a82] text-xs tracking-widest uppercase">
              Projects
            </span>
            <div>
              <p className="font-[var(--font-serif)] text-4xl md:text-5xl text-[#ede9e3] font-medium">
                5<span className="text-[#d4a853]">+</span>
              </p>
              <p className="text-[#908a82] text-sm mt-1">Shipped to prod</p>
            </div>
          </motion.div>

          {/* Tech stack tile */}
          <motion.div
            {...fade(0.2)}
            className="col-span-2 md:col-span-4 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#d4a853]/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="text-[#908a82] text-xs tracking-widest uppercase">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "React", "Next.js", "TypeScript", "PostgreSQL"].map(
                (t) => (
                  <span
                    key={t}
                    className="text-xs text-[#c4bfb8] border border-[#333333] px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* Status badge tile */}
          <motion.div
            {...fade(0.25)}
            className="col-span-2 md:col-span-4 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#d4a853]/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="text-[#908a82] text-xs tracking-widest uppercase">
              Status
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d4a853] animate-pulse" />
              <span className="text-[#d4a853] text-sm font-medium">
                Open for Full-Stack Developer roles
              </span>
            </div>
          </motion.div>

          {/* Location tile */}
          <motion.div
            {...fade(0.3)}
            className="col-span-4 md:col-span-4 bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#d4a853]/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="text-[#908a82] text-xs tracking-widest uppercase">
              Based in
            </span>
            <div className="flex items-center justify-between">
              <p className="text-[#ede9e3] font-medium">Ahmedabad, India</p>
              <span className="text-2xl">🇮🇳</span>
            </div>
          </motion.div>
        </div>

        {/* ── CTA row ── */}
        <motion.div
          {...fade(0.35)}
          className="flex flex-wrap items-center gap-4 mb-6"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="flex items-center gap-2 text-sm font-medium text-[#0c0c0c] bg-[#d4a853] hover:bg-[#c49a48] px-6 py-3 rounded-full transition-colors"
          >
            View Projects <ArrowRight size={15} />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="text-sm font-medium text-[#c4bfb8] border border-[#333333] hover:border-[#d4a853] hover:text-[#d4a853] px-6 py-3 rounded-full transition-all"
          >
            Get In Touch
          </button>
          <a
            href="/Akshat Kansara Resume.pdf"
            download="Akshat Kansara Resume.pdf"
            className="flex items-center gap-2 text-sm font-medium text-[#908a82] hover:text-[#ede9e3] transition-colors"
          >
            <Download size={14} />
            Resume
          </a>
        </motion.div>

        {/* ── Socials ── */}
        <motion.div {...fade(0.4)} className="flex items-center gap-5">
          <a
            href="https://github.com/Akshat0904"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#5c5751] hover:text-[#d4a853] transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/akshat-kansara-79a20b1b0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#5c5751] hover:text-[#d4a853] transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <span className="h-px flex-1 bg-[#2a2a2a] max-w-[80px]" />
          <a
            href="mailto:askansara17@gmail.com"
            className="text-[#908a82] text-sm hover:text-[#d4a853] transition-colors"
          >
            askansara17@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
