"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, Rocket } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "3+ Years Experience" },
  { icon: Rocket, label: "5+ Projects Delivered" },
  { icon: MapPin, label: "Ahmedabad, India" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-[#6366f1] text-sm font-mono">01.</span>
          <h2 className="text-3xl font-bold">About Me</h2>
          <div className="flex-1 h-px bg-[#262626] ml-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-[#a1a1aa] leading-relaxed text-base">
              I&apos;m a{" "}
              <span className="text-white font-medium">
                Full-Stack Developer
              </span>{" "}
              with{" "}
              <span className="text-[#6366f1] font-medium">
                3+ years of experience
              </span>{" "}
              specializing in the MERN stack and Next.js. I build scalable,
              production-grade web applications with a focus on clean
              architecture and performance.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed text-base">
              At <span className="text-white font-medium">Avesta HQ</span>,
              I&apos;ve shipped national-scale real estate platforms, automated
              HRMS workflows with WhatsApp integrations, and built
              mission-critical Industrial IoT backends with 99.9% reliability.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed text-base">
              I&apos;m currently expanding into{" "}
              <span className="text-white font-medium">AI Engineering</span> —
              integrating LLM APIs and building AI-powered features to enhance
              user experiences. I&apos;m passionate about combining robust web
              architecture with emerging AI technologies.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed text-base">
              I&apos;m actively looking for a{" "}
              <span className="text-[#6366f1] font-medium">
                Software Engineer
              </span>{" "}
              role where I can take ownership of complex systems and deliver
              real impact.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 bg-[#161616] border border-[#262626] rounded-xl p-5 hover:border-[#6366f1]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center shrink-0">
                  <stat.icon size={18} className="text-[#6366f1]" />
                </div>
                <span className="text-white font-medium">{stat.label}</span>
              </motion.div>
            ))}

            {/* Currently tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="bg-[#6366f1]/10 border border-[#6366f1]/30 rounded-xl p-5"
            >
              <p className="text-sm text-[#a5b4fc] font-medium mb-1">
                Currently
              </p>
              <p className="text-white text-sm">
                Software Engineer @ Avesta HQ · Open to software engineer roles
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
