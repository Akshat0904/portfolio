"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Authentication", "JWT"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "SQL", "MongoDB", "pgvector", "Elasticsearch", "Redis"],
  },
  {
    category: "AI Engineering",
    skills: ["OpenAI API", "LLM APIs", "AI Integration", "AI-powered Features"],
  },
  {
    category: "Architecture & Testing",
    skills: ["Clean Architecture", "SOLID Principles", "TDD", "Unit Testing", "Integration Testing"],
  },
  {
    category: "Cloud",
    skills: ["AWS S3", "AWS EC2", "AWS AMI", "AWS IAM"],
  },
  {
    category: "Tools & Integrations",
    skills: ["Git", "Docker", "Vercel", "Mapbox", "Google Maps API", "Meta WhatsApp Cloud API", "Matomo Analytics"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          opacity: 0.7,
        }}
      />
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.15em] mb-2">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Technical Stack</h2>
          <div className="w-12 h-0.5 bg-blue-600 mt-3" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-white border border-slate-200 text-slate-600 px-3 py-1 rounded-md"
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
