"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Avesta HQ",
    companyUrl: "https://avestahq.com/",
    role: "Software Engineer",
    period: "2023 — Present",
    location: "Ahmedabad",
    current: true,
    projects: [
      {
        name: "Real Estate Intelligence Platform",
        subtitle: "view.com.au",
        bullets: [
          "Architected a high-performance property listing engine integrating Mapbox & Google Maps, visualizing thousands of real-time listings with sub-second response.",
          "Engineered scalable Node.js/Express.js APIs with Elasticsearch and Redis caching across a large-scale PostgreSQL database.",
          "Deployed embeddable property widgets across 50+ partner sites, driving a 20% increase in referral traffic.",
          "Integrated Matomo Analytics for privacy-compliant user behaviour tracking.",
        ],
      },
      {
        name: "AI-Driven HRMS & WhatsApp Rule Engine",
        subtitle: "Automation Platform",
        bullets: [
          "Built an automated discrepancy resolution system integrating Meta WhatsApp Cloud API for real-time manager-employee interface.",
          "Designed a custom Backend Rule Engine to detect attendance and payroll anomalies. Reduced resolution time by 50%.",
        ],
      },
      {
        name: "Enterprise Industrial IoT Platform",
        subtitle: "Real-time Telemetry",
        bullets: [
          "Architected a mission-critical IoT backend using Clean Architecture and SOLID principles for real-time machine telemetry ingestion.",
          "Implemented comprehensive testing strategy achieving 99.9% reliability. Built live monitoring dashboards with automated alarms.",
        ],
      },
    ],
  },
  {
    company: "Rocker Technologies",
    companyUrl: null,
    role: "Backend Developer Intern",
    period: "2023",
    location: "Vadodara",
    current: false,
    projects: [
      {
        name: "Backend Engineering",
        subtitle: "Node.js · Express.js · MongoDB",
        bullets: [
          "Built 10+ RESTful APIs using Node.js and Express.js, reducing backend response latency by 15% for internal modules.",
        ],
      },
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-24 px-6 bg-[#0c0c0c]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between mb-16"
        >
          <h2 className="font-[var(--font-serif)] text-3xl sm:text-4xl text-[#ede9e3]">
            Where I&apos;ve worked
          </h2>
          <span className="hidden sm:block text-[#5c5751] text-xs tracking-widest uppercase">
            Experience
          </span>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 rounded-xl px-4 -mx-4 hover:bg-[#141414] transition-all duration-300 ${
                i > 0 ? "border-t border-[#1a1a1a]" : ""
              }`}
            >
              {/* Left column */}
              <div className="md:col-span-3">
                <p className="font-[var(--font-serif)] text-xl text-[#ede9e3] mb-1">
                  {exp.period}
                </p>
                <div className="flex items-center gap-1.5">
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#d4a853] text-sm hover:text-[#ede9e3] transition-colors flex items-center gap-1"
                    >
                      {exp.company} <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span className="text-[#d4a853] text-sm">
                      {exp.company}
                    </span>
                  )}
                </div>
                <p className="text-[#5c5751] text-xs mt-1">{exp.location}</p>
                {exp.current && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] text-[#d4a853] mt-2 border border-[#d4a853]/20 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4a853] animate-pulse" />
                    Current
                  </span>
                )}
              </div>

              {/* Right column */}
              <div className="md:col-span-9">
                <h3 className="text-lg font-medium text-[#ede9e3] mb-6">
                  {exp.role}
                </h3>

                <div className="space-y-6">
                  {exp.projects.map((project) => (
                    <div key={project.name}>
                      <div className="flex items-baseline gap-2 mb-2">
                        <p className="text-sm font-medium text-[#c4bfb8]">
                          {project.name}
                        </p>
                        <span className="text-[#5c5751] text-xs">
                          — {project.subtitle}
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {project.bullets.map((bullet, bi) => (
                          <li
                            key={bi}
                            className="text-sm text-[#908a82] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-px before:bg-[#5c5751]"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
