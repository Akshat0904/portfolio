"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Rocket, MapPin, Zap } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "2.5+ Years", label: "Experience" },
  { icon: Rocket, value: "5+ Projects", label: "Delivered" },
  { icon: MapPin, value: "Ahmedabad", label: "India" },
  { icon: Zap, value: "Open to Roles", label: "Software Engineer" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Accent orb */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-blue-600/[0.04] blur-[100px] pointer-events-none" />
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.15em] mb-2">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Who I Am
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 mt-3" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-4"
          >
            <p className="text-slate-400 leading-relaxed">
              I&apos;m a{" "}
              <strong className="text-white font-semibold">
                Full-Stack Developer
              </strong>{" "}
              with{" "}
              <strong className="text-blue-400 font-semibold">
                2.5+ years of experience
              </strong>{" "}
              specializing in Node.js, React.js, and Next.js. I build scalable,
              production-grade web applications with a strong focus on clean
              architecture and performance.
            </p>
            <p className="text-slate-400 leading-relaxed">
              At <strong className="text-white font-semibold">Avesta HQ</strong>
              , I&apos;ve shipped a national-scale real estate platform for
              Australia, automated HRMS workflows with WhatsApp integrations,
              and built mission-critical Industrial IoT backends achieving 99.9%
              reliability.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m currently expanding into{" "}
              <strong className="text-white font-semibold">
                AI Engineering
              </strong>{" "}
              — integrating LLM APIs and building AI-powered features to enhance
              user experiences.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m actively seeking a{" "}
              <strong className="text-blue-400 font-semibold">
                Software Engineer
              </strong>{" "}
              role where I can own complex systems and deliver real business
              impact.
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
                className="glass-card rounded-xl p-5 glow-blue-hover"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/[0.1] flex items-center justify-center mb-3">
                  <s.icon size={16} className="text-blue-400" />
                </div>
                <p className="text-base font-bold text-white leading-tight">
                  {s.value}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
