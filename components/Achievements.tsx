"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-12 px-6 bg-[#0c0c0c]" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto border-t border-b border-[#1a1a1a] py-6"
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between group cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <span className="text-2xl">🏆</span>
            <div className="text-left">
              <p className="text-[#ede9e3] font-medium text-sm">
                2nd Place — Internal Hackathon
              </p>
              <p className="text-[#908a82] text-xs">
                Digital Kudos Wall · Avesta HQ · 2025
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-[#5c5751] text-xs tracking-widest uppercase">
              Achievement
            </span>
            {expanded ? (
              <ChevronUp size={16} className="text-[#5c5751]" />
            ) : (
              <ChevronDown size={16} className="text-[#5c5751]" />
            )}
          </div>
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-5 pl-12 space-y-2"
          >
            <p className="text-sm text-[#908a82] leading-relaxed">
              Built a role-based internal employee recognition platform using
              BMAD methodology and AI-assisted development (Cursor IDE).
            </p>
            <p className="text-sm text-[#908a82] leading-relaxed">
              Implemented Clean Architecture with TDD across frontend, backend,
              and database layers — ranked 2nd out of 10 competing teams.
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {[
                "BMAD",
                "Clean Architecture",
                "TDD",
                "Cursor IDE",
                "AI-Assisted Dev",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-[#908a82] border border-[#2a2a2a] px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
