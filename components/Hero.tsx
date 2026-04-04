"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#6366f1]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-full px-4 py-1.5 text-sm text-[#a5b4fc] mb-8"
        >
          <span className="w-2 h-2 bg-[#6366f1] rounded-full animate-pulse" />
          Open to Software Engineer roles
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
        >
          Akshat{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a78bfa]">
            Kansara
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl text-[#a1a1aa] font-medium mb-4"
        >
          Full-Stack Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-[#71717a] max-w-2xl mx-auto mb-10"
        >
          MERN · Next.js · AI Engineering — building scalable, production-grade
          web applications that solve real problems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-7 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="border border-[#262626] text-[#a1a1aa] hover:border-[#6366f1] hover:text-white px-7 py-3 rounded-lg font-medium transition-all duration-200"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href="https://github.com/Akshat0904"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#71717a] hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/akshat-kansara-79a20b1b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#71717a] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:askansara17@gmail.com"
            className="text-[#71717a] hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#52525b] animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
