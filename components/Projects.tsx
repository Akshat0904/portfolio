"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Real Estate Intelligence Platform",
    description:
      "A national-scale property listing engine for view.com.au with advanced Mapbox/Google Maps integrations, real-time property visualization, and a Broker/Agency management portal.",
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Mapbox", "Google Maps API"],
    highlights: "Handles thousands of concurrent real-time property listings",
    liveUrl: null,
    githubUrl: null,
    type: "Professional",
  },
  {
    title: "AI-Driven HRMS & WhatsApp Rule Engine",
    description:
      "An automated HRMS portal with a custom Backend Rule Engine that detects payroll/attendance anomalies and resolves them via a conversational WhatsApp interface.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Meta WhatsApp Cloud API"],
    highlights: "Reduced issue resolution time by over 50%",
    liveUrl: null,
    githubUrl: null,
    type: "Professional",
  },
  {
    title: "Enterprise Industrial IoT Platform",
    description:
      "Mission-critical IIoT backend built with Clean Architecture and TDD principles, featuring real-time telemetry ingestion, live monitoring dashboards, and automated alarm systems.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Clean Architecture", "TDD"],
    highlights: "99.9% reliability for industrial monitoring systems",
    liveUrl: null,
    githubUrl: null,
    type: "Professional",
  },
  {
    title: "Trayan Corporation",
    description:
      "A professional company profile website for a chemical trading and manufacturing firm, built with Next.js App Router and optimized for performance and SEO.",
    tech: ["Next.js", "App Router", "Tailwind CSS"],
    highlights: "Static-optimized, fast-loading company website",
    liveUrl: "https://trayancorp.com/",
    githubUrl: null,
    type: "Personal",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-[#6366f1] text-sm font-mono">04.</span>
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="flex-1 h-px bg-[#262626] ml-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#161616] border border-[#262626] rounded-2xl p-6 flex flex-col hover:border-[#6366f1]/40 transition-all duration-200 hover:-translate-y-1 group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                    project.type === "Professional"
                      ? "bg-[#6366f1]/10 text-[#a5b4fc] border-[#6366f1]/30"
                      : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                  }`}
                >
                  {project.type}
                </span>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#71717a] hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#71717a] hover:text-white transition-colors"
                      aria-label="Live site"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#a5b4fc] transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Highlight */}
              <p className="text-xs text-[#6366f1] font-medium mb-4">
                ✦ {project.highlights}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-[#0f0f0f] border border-[#262626] text-[#71717a] px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
