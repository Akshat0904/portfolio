"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-50/60 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.15em] mb-2">Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Recognition</h2>
          <div className="w-12 h-0.5 bg-blue-600 mt-3" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-blue-200 transition-all max-w-3xl"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                <Trophy size={22} className="text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">2nd Place — Internal Hackathon</h3>
                <p className="text-blue-600 font-semibold text-sm mt-0.5">Digital Kudos Wall</p>
                <p className="text-xs text-slate-400 mt-0.5">Avesta HQ · 36-Hour Sprint · 10 Teams · Prize Money Awarded</p>
              </div>
            </div>
            <span className="text-sm text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">2025</span>
          </div>

          <ul className="space-y-2 mb-5 pl-16">
            <li className="flex gap-2.5 text-sm text-slate-500 leading-relaxed">
              <span className="text-blue-400 mt-1 shrink-0 text-xs">▸</span>
              Built a role-based internal employee recognition platform using the BMAD methodology and AI-assisted development (Cursor IDE).
            </li>
            <li className="flex gap-2.5 text-sm text-slate-500 leading-relaxed">
              <span className="text-blue-400 mt-1 shrink-0 text-xs">▸</span>
              Implemented Clean Architecture with TDD across frontend, backend, and database layers — ranked 2nd out of 10 competing teams.
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 pl-16">
            {["BMAD", "Clean Architecture", "TDD", "Cursor IDE", "AI-Assisted Dev"].map((tag) => (
              <span key={tag} className="text-xs bg-slate-50 border border-slate-200 text-slate-500 px-2.5 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
