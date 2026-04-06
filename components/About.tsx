"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Rocket, MapPin, Zap } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "3+ Years", label: "Experience" },
  { icon: Rocket,    value: "5+ Projects", label: "Delivered" },
  { icon: MapPin,    value: "Ahmedabad", label: "India" },
  { icon: Zap,       value: "Open to Roles", label: "Software Engineer" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.15em] mb-2">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Who I Am</h2>
          <div className="w-12 h-0.5 bg-blue-600 mt-3" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Bio — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-4"
          >
            <p className="text-slate-600 leading-relaxed">
              I&apos;m a <strong className="text-slate-900 font-semibold">Full-Stack Developer</strong>{" "}
              with <strong className="text-blue-600 font-semibold">3+ years of experience</strong>{" "}
              specializing in the MERN stack and Next.js. I build scalable,
              production-grade web applications with a strong focus on clean
              architecture and performance.
            </p>
            <p className="text-slate-600 leading-relaxed">
              At <strong className="text-slate-900 font-semibold">Avesta HQ</strong>, I&apos;ve shipped
              a national-scale real estate platform for Australia, automated HRMS workflows
              with WhatsApp integrations, and built mission-critical Industrial IoT backends
              achieving 99.9% reliability.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I&apos;m currently expanding into{" "}
              <strong className="text-slate-900 font-semibold">AI Engineering</strong> — integrating
              LLM APIs and building AI-powered features to enhance user experiences.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I&apos;m actively seeking a{" "}
              <strong className="text-blue-600 font-semibold">Software Engineer</strong>{" "}
              role where I can own complex systems and deliver real business impact.
            </p>
          </motion.div>

          {/* Stat cards — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                  <s.icon size={16} className="text-blue-600" />
                </div>
                <p className="text-base font-bold text-slate-900 leading-tight">{s.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
