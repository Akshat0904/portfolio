"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Avesta HQ",
    companyUrl: "https://avestahq.com/",
    role: "Software Engineer",
    period: "July 2023 – Present",
    location: "Ahmedabad, Gujarat",
    current: true,
    projects: [
      {
        name: "Real Estate Intelligence Platform",
        subtitle: "view.com.au — Scalability & Geolocation",
        bullets: [
          "Architected a high-performance property listing engine integrating Mapbox & Google Maps with custom tooltips, visualizing thousands of real-time property listings.",
          "Engineered a highly scalable Node.js/Express.js API to handle high-traffic concurrency with seamless data retrieval from a large-scale PostgreSQL database.",
          "Developed a Broker/Agency portal enabling real estate agencies to manage and publish property inventories, streamlining the sales pipeline at national scale.",
        ],
      },
      {
        name: "AI-Driven HRMS & WhatsApp Rule Engine",
        subtitle: "Automation, AI-style Logic & Meta API",
        bullets: [
          "Built an automated discrepancy resolution system for an HRMS portal, integrating Meta's WhatsApp Cloud API for a conversational real-time manager-employee interface.",
          "Designed a custom Backend Rule Engine that processes organizational master data to automatically identify attendance and payroll anomalies.",
          "Streamlined management workflows enabling managers to resolve employee issues via WhatsApp chat, reducing resolution time by over 50%.",
        ],
      },
      {
        name: "Enterprise Industrial IoT Platform",
        subtitle: "Real-time Telemetry, Clean Architecture & TDD",
        bullets: [
          "Architected a robust IoT Backend Service using Uncle Bob's Clean Architecture and SOLID principles — highly decoupled, maintainable, and scalable for real-time machine telemetry.",
          "Implemented a comprehensive testing strategy achieving high code coverage through Unit, Integration, and Component tests — ensuring 99.9% reliability for mission-critical industrial monitoring.",
          "Designed a high-throughput data pipeline to ingest and store high-frequency machine health data into PostgreSQL, enabling long-term trend analysis and predictive maintenance.",
          "Developed a real-time Monitoring Dashboard with live widgets and an automated alarm system that triggers instant notifications when machine parameters deviate from stable thresholds.",
        ],
      },
    ],
  },
  {
    company: "Rocker Technologies",
    companyUrl: null,
    role: "Backend Developer Intern",
    period: "March 2023 – June 2023",
    location: "Vadodara, Gujarat",
    current: false,
    projects: [
      {
        name: "Backend Engineering Foundation",
        subtitle: "Node.js · Express.js · MongoDB",
        bullets: [
          "Built RESTful APIs using Node.js and Express.js, gaining hands-on expertise in backend architecture and API design patterns.",
          "Worked with MongoDB for data modeling and persistence across multiple service modules.",
          "Developed strong fundamentals in server-side development, routing, middleware design, and API security practices.",
        ],
      },
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-[#6366f1] text-sm font-mono">03.</span>
          <h2 className="text-3xl font-bold">Experience</h2>
          <div className="flex-1 h-px bg-[#262626] ml-4" />
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#161616] border border-[#262626] rounded-2xl p-7 hover:border-[#6366f1]/40 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    {exp.current && (
                      <span className="text-xs bg-[#6366f1]/20 text-[#a5b4fc] border border-[#6366f1]/30 px-2 py-0.5 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-[#6366f1] font-medium">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#a5b4fc] transition-colors flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                  </div>
                </div>
                <div className="text-right text-sm text-[#71717a]">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-6">
                {exp.projects.map((project) => (
                  <div key={project.name} className="border-l-2 border-[#6366f1]/30 pl-5">
                    <p className="font-semibold text-white mb-0.5">{project.name}</p>
                    <p className="text-xs text-[#6366f1] mb-3 font-mono">{project.subtitle}</p>
                    <ul className="space-y-2">
                      {project.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex gap-3 text-sm text-[#a1a1aa] leading-relaxed">
                          <span className="text-[#6366f1] mt-1 shrink-0">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
