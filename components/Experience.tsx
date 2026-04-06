"use client";

import { motion, useInView } from "framer-motion";
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
        subtitle: "view.com.au — Geolocation & Scalability",
        bullets: [
          "Architected a high-performance property listing engine integrating Mapbox & Google Maps, visualizing thousands of real-time property listings with sub-second response.",
          "Engineered scalable Node.js/Express.js APIs with Elasticsearch and Redis caching to handle high-traffic concurrency across a large-scale PostgreSQL database.",
          "Deployed embeddable property widgets across 50+ partner sites, driving a 20% increase in referral traffic.",
        ],
      },
      {
        name: "AI-Driven HRMS & WhatsApp Rule Engine",
        subtitle: "Automation & Meta WhatsApp Cloud API",
        bullets: [
          "Built an automated discrepancy resolution system integrating Meta WhatsApp Cloud API for a conversational real-time manager-employee interface.",
          "Designed a custom Backend Rule Engine to automatically detect attendance and payroll anomalies from organizational master data.",
          "Reduced manager-to-employee issue resolution time by over 50%.",
        ],
      },
      {
        name: "Enterprise Industrial IoT Platform",
        subtitle: "Real-time Telemetry · Clean Architecture · TDD",
        bullets: [
          "Architected a mission-critical IoT backend using Clean Architecture and SOLID principles for real-time machine telemetry ingestion.",
          "Implemented Unit, Integration, and Component testing strategy achieving 99.9% reliability for industrial monitoring.",
          "Built a real-time monitoring dashboard with live widgets and an automated alarm system for instant deviation alerts.",
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
        name: "Backend Engineering",
        subtitle: "Node.js · Express.js · MongoDB",
        bullets: [
          "Built 10+ RESTful APIs using Node.js and Express.js, reducing backend response latency by 15% for internal modules.",
          "Developed strong fundamentals in server-side architecture, routing, middleware design, and API security.",
        ],
      },
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #f8fafc 0%, #eff6ff 60%, #f8fafc 100%)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.15em] mb-2">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Work History</h2>
          <div className="w-12 h-0.5 bg-blue-600 mt-3" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              {/* Card header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-6 pb-5 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    {exp.current && (
                      <span className="text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                      >
                        {exp.company} <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="font-semibold text-blue-600">{exp.company}</span>
                    )}
                    <span className="text-slate-300">·</span>
                    <span className="text-slate-500">{exp.location}</span>
                  </div>
                </div>
                <span className="text-sm text-slate-400 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>

              {/* Sub-projects */}
              <div className="space-y-5">
                {exp.projects.map((project) => (
                  <div key={project.name} className="pl-4 border-l-2 border-blue-100">
                    <p className="font-semibold text-slate-800 text-sm">{project.name}</p>
                    <p className="text-xs text-blue-600 font-medium mt-0.5 mb-3">{project.subtitle}</p>
                    <ul className="space-y-1.5">
                      {project.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex gap-2.5 text-sm text-slate-500 leading-relaxed">
                          <span className="text-blue-400 mt-1 shrink-0 text-xs">▸</span>
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
