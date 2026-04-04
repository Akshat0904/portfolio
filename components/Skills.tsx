"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "SQL", "MongoDB", "pgvector"],
  },
  {
    category: "AI Engineering",
    skills: ["LLM APIs", "AI Integration", "OpenAI API", "AI-powered Features"],
  },
  {
    category: "Architecture & Tools",
    skills: [
      "Clean Architecture",
      "SOLID Principles",
      "TDD",
      "Unit Testing",
      "Integration Testing",
      "Git",
      "Docker",
      "Vercel",
    ],
  },
  {
    category: "Integrations",
    skills: ["Mapbox", "Google Maps API", "Meta WhatsApp Cloud API", "Third-party APIs"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-[#6366f1] text-sm font-mono">02.</span>
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="flex-1 h-px bg-[#262626] ml-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#161616] border border-[#262626] rounded-xl p-6 hover:border-[#6366f1]/40 transition-colors"
            >
              <h3 className="text-sm font-semibold text-[#6366f1] uppercase tracking-wider mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-[#0f0f0f] border border-[#262626] text-[#a1a1aa] px-3 py-1 rounded-md hover:border-[#6366f1]/50 hover:text-white transition-colors"
                  >
                    {skill}
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
