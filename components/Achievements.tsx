"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "2nd Place — Internal Hackathon",
    project: "Digital Kudos Wall",
    org: "Avesta HQ",
    year: "2025",
    meta: "36-Hour Sprint · 10 Teams · Prize Money Awarded",
    bullets: [
      "Built a role-based internal employee recognition platform using the BMAD methodology and AI-assisted development (Cursor IDE).",
      "Implemented Clean Architecture with TDD across frontend, backend, and database layers — ranked 2nd out of 10 competing teams.",
    ],
    tags: ["BMAD", "Clean Architecture", "TDD", "Cursor IDE", "AI-Assisted Dev"],
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-[#6366f1] text-sm font-mono">05.</span>
          <h2 className="text-3xl font-bold">Achievements</h2>
          <div className="flex-1 h-px bg-[#262626] ml-4" />
        </motion.div>

        <div className="space-y-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#161616] border border-[#262626] rounded-2xl p-7 hover:border-[#6366f1]/40 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Trophy size={18} className="text-[#6366f1]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#6366f1] font-medium text-sm mt-0.5">
                      {item.project}
                    </p>
                    <p className="text-xs text-[#52525b] mt-0.5 font-mono">
                      {item.org} · {item.meta}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-[#52525b] font-mono">{item.year}</span>
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-5 pl-14">
                {item.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-3 text-sm text-[#a1a1aa] leading-relaxed">
                    <span className="text-[#6366f1] mt-1 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pl-14">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[#0f0f0f] border border-[#262626] text-[#71717a] px-2.5 py-1 rounded-md"
                  >
                    {tag}
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
