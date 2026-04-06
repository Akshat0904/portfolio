"use client";

import { motion } from "framer-motion";
import { Mail, Download, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div className="max-w-3xl mx-auto w-full py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Open to Software Engineer roles
          </span>
        </motion.div>

        {/* Name & title */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-slate-500 font-medium text-lg mb-2">Hi, I&apos;m</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight mb-3">
            Akshat{" "}
            <span className="text-blue-600">Kansara</span>
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold text-slate-500 mb-5">
            Full-Stack Developer
          </p>
          <p className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed">
            MERN · Next.js · AI Engineering — building scalable,
            production-grade web applications that solve real problems.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            View My Work <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-white border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 font-semibold px-6 py-3 rounded-lg transition-all shadow-sm"
          >
            Contact Me
          </button>
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 font-semibold px-5 py-3 rounded-lg transition-all shadow-sm text-sm"
          >
            <Download size={15} />
            Resume
          </a>
        </motion.div>

        {/* Socials + divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-5"
        >
          <a
            href="https://github.com/Akshat0904"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-blue-600 transition-colors"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/akshat-kansara-79a20b1b0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:askansara17@gmail.com"
            aria-label="Email"
            className="text-slate-400 hover:text-blue-600 transition-colors"
          >
            <Mail size={22} />
          </a>
          <span className="h-px flex-1 bg-slate-200 max-w-[120px]" />
          <span className="text-sm text-slate-400">Ahmedabad, India</span>
        </motion.div>
      </div>
    </section>
  );
}
