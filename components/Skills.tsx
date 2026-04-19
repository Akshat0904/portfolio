"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "Authentication",
      "JWT",
    ],
  },
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "pgvector",
      "SQL",
    ],
  },
  {
    category: "AI & Cloud",
    skills: [
      "OpenAI API",
      "LLM Integration",
      "AWS S3",
      "AWS EC2",
      "AWS Lambda",
      "Docker",
    ],
  },
  {
    category: "Architecture",
    skills: [
      "Clean Architecture",
      "SOLID Principles",
      "TDD",
      "Unit Testing",
      "Integration Testing",
    ],
  },
  {
    category: "Integrations",
    skills: [
      "Mapbox",
      "Google Maps API",
      "Meta WhatsApp API",
      "Matomo Analytics",
      "Git",
      "Vercel",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 px-6 bg-[#0c0c0c]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between mb-14"
        >
          <h2 className="font-[var(--font-serif)] text-3xl sm:text-4xl text-[#ede9e3]">
            What I work with
          </h2>
          <span className="hidden sm:block text-[#5c5751] text-xs tracking-widest uppercase">
            Skills
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#141414] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#d4a853]/30 transition-colors"
            >
              <h3 className="text-[11px] tracking-widest uppercase text-[#d4a853] mb-5">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[13px] text-[#c4bfb8] bg-[#1a1a1a] border border-[#2a2a2a] px-3 py-1.5 rounded-lg hover:text-[#ede9e3] hover:border-[#d4a853]/30 transition-all cursor-default"
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
