"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, ChevronLeft, ChevronRight, X, Camera } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function img(folder: string, name: string) {
  return `/images/${folder}/${encodeURIComponent(name)}`;
}

const viewImages = [
  "Screenshot from 2026-04-06 18-41-24.png",
  "Screenshot from 2026-04-06 18-39-42.png",
  "Screenshot from 2026-04-06 18-40-26.png",
  "Screenshot from 2026-04-06 18-40-37.png",
  "Screenshot from 2026-04-06 18-40-50.png",
  "Screenshot from 2026-04-06 18-41-38.png",
  "Screenshot from 2026-04-06 18-41-52.png",
  "Screenshot from 2026-04-06 18-42-03.png",
  "Screenshot from 2026-04-06 18-42-16.png",
  "Screenshot from 2026-04-06 18-42-35.png",
  "Screenshot from 2026-04-06 18-42-44.png",
  "Screenshot from 2026-04-06 18-43-14.png",
  "Screenshot from 2026-04-06 18-43-37.png",
  "Screenshot from 2026-04-06 18-43-50.png",
  "Screenshot from 2026-04-06 18-44-22.png",
  "Screenshot from 2026-04-06 18-44-47.png",
  "Screenshot from 2026-04-06 18-45-10.png",
  "Screenshot from 2026-04-06 18-45-17.png",
  "Screenshot from 2026-04-06 18-45-23.png",
  "Screenshot from 2026-04-06 18-45-29.png",
  "Screenshot from 2026-04-06 18-46-32.png",
].map((n) => img("view", n));

const tcImages = [
  "Screenshot from 2026-04-06 19-03-58.png",
  "Screenshot from 2026-04-06 19-03-03.png",
  "Screenshot from 2026-04-06 19-03-28.png",
  "Screenshot from 2026-04-06 19-03-43.png",
  "WhatsApp Image 2026-04-06 at 7.08.17 PM.jpeg",
  "WhatsApp Image 2026-04-06 at 7.08.17 PM (1).jpeg",
  "WhatsApp Image 2026-04-06 at 7.08.17 PM (2).jpeg",
  "WhatsApp Image 2026-04-06 at 7.08.17 PM (3).jpeg",
].map((n) => img("tc", n));

const iiotImages = [
  "Screenshot from 2026-04-07 01-06-57.png",
  "Screenshot from 2026-04-07 01-05-26.png",
  "Screenshot from 2026-04-07 01-06-16.png",
  "Screenshot from 2026-04-07 01-06-33.png",
  "Screenshot from 2026-04-07 01-06-46.png",
].map((n) => img("iiot", n));

type Project = {
  title: string;
  description: string;
  tech: string[];
  highlight: string;
  liveUrl: string | null;
  githubUrl: string | null;
  type: "Professional" | "Personal";
  images: string[];
};

const featured: Project = {
  title: "Real Estate Intelligence Platform",
  description:
    "A national-scale property listing engine built for view.com.au (Australia). Features advanced Mapbox/Google Maps integrations with real-time visualization, a Broker/Agency management portal, and embeddable property widgets deployed across 50+ partner sites driving a 20% increase in referral traffic.",
  tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Mapbox", "Google Maps API", "Elasticsearch", "Redis"],
  highlight: "Sub-second property visualization · 20% referral traffic increase",
  liveUrl: null,
  githubUrl: null,
  type: "Professional",
  images: viewImages,
};

const gridProjects: Project[] = [
  {
    title: "AI-Driven HRMS & WhatsApp Engine",
    description:
      "Automated HRMS portal with a custom Backend Rule Engine that detects payroll and attendance anomalies, resolving them via a conversational WhatsApp interface. Cut resolution time by 50%.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Meta WhatsApp Cloud API"],
    highlight: "50% reduction in resolution time",
    liveUrl: null,
    githubUrl: null,
    type: "Professional",
    images: tcImages,
  },
  {
    title: "Enterprise Industrial IoT Platform",
    description:
      "Mission-critical IIoT backend with Clean Architecture & TDD, processing real-time machine telemetry. Live monitoring dashboards with automated alarm systems for industrial deviation alerts.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Clean Architecture", "TDD"],
    highlight: "99.9% reliability for industrial monitoring",
    liveUrl: null,
    githubUrl: null,
    type: "Professional",
    images: iiotImages,
  },
  {
    title: "Trayan Corporation",
    description:
      "Company profile website for a chemical trading and manufacturing firm. Built with Next.js App Router, static-optimized for fast load times and SEO.",
    tech: ["Next.js", "App Router", "Tailwind CSS"],
    highlight: "Fast static site · high Lighthouse score",
    liveUrl: "https://trayancorp.com/",
    githubUrl: null,
    type: "Personal",
    images: [],
  },
];

function ThumbStrip({ images, onOpen }: { images: string[]; onOpen: (i: number) => void }) {
  if (!images.length) return null;
  const shown = images.slice(0, 4);
  return (
    <div className="flex gap-2 mb-4">
      {shown.map((src, i) => (
        <button
          key={i}
          onClick={() => onOpen(i)}
          className="relative flex-1 h-20 rounded-lg overflow-hidden border border-slate-200 hover:border-blue-400 transition-colors group"
        >
          <Image src={src} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
          {i === 3 && images.length > 4 && (
            <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center text-white text-sm font-semibold">
              +{images.length - 4}
            </div>
          )}
        </button>
      ))}
    </div>
  );
}

function Card({ project, onOpen, large = false }: { project: Project; onOpen: (imgs: string[], idx: number) => void; large?: boolean }) {
  return (
    <div className={`bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col h-full ${large ? "p-8" : "p-6"}`}>
      {/* Top */}
      <div className="flex items-center justify-between mb-4">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
          project.type === "Professional"
            ? "bg-blue-50 text-blue-600 border-blue-100"
            : "bg-emerald-50 text-emerald-700 border-emerald-200"
        }`}>
          {project.type}
        </span>
        <div className="flex items-center gap-3">
          {project.images.length > 0 && (
            <button
              onClick={() => onOpen(project.images, 0)}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-600 transition-colors"
            >
              <Camera size={13} />
              {project.images.length}
            </button>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors">
              <FaGithub size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 transition-colors">
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <h3 className={`font-bold text-slate-900 mb-2 ${large ? "text-xl" : "text-lg"}`}>{project.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{project.description}</p>

      {project.images.length > 0 && (
        <ThumbStrip images={project.images} onOpen={(i) => onOpen(project.images, i)} />
      )}

      <p className="text-xs font-semibold text-blue-600 mb-4">✦ {project.highlight}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="text-xs bg-slate-50 border border-slate-200 text-slate-500 px-2.5 py-1 rounded-md">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lb, setLb] = useState<{ imgs: string[]; idx: number } | null>(null);

  useEffect(() => {
    if (!lb) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setLb((l) => l && { ...l, idx: (l.idx + 1) % l.imgs.length });
      if (e.key === "ArrowLeft")  setLb((l) => l && { ...l, idx: (l.idx - 1 + l.imgs.length) % l.imgs.length });
      if (e.key === "Escape")     setLb(null);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lb]);

  return (
    <section id="projects" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.15em] mb-2">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What I&apos;ve Built</h2>
          <div className="w-12 h-0.5 bg-blue-600 mt-3" />
        </motion.div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <Card project={featured} onOpen={(imgs, idx) => setLb({ imgs, idx })} large />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            >
              <Card project={p} onOpen={(imgs, idx) => setLb({ imgs, idx })} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLb(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLb(null)}
                className="absolute -top-11 right-0 text-white/60 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={22} />
              </button>

              <div className="relative w-full h-[80vh] rounded-xl overflow-hidden bg-slate-800">
                <Image src={lb.imgs[lb.idx]} alt="" fill className="object-contain" />
              </div>

              <div className="flex items-center justify-between mt-3 px-1">
                <button
                  onClick={() => setLb((l) => l ? { ...l, idx: (l.idx - 1 + l.imgs.length) % l.imgs.length } : l)}
                  className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 text-sm font-medium"
                >
                  <ChevronLeft size={16} /> Prev
                </button>
                <span className="text-white/40 text-sm">{lb.idx + 1} / {lb.imgs.length}</span>
                <button
                  onClick={() => setLb((l) => l ? { ...l, idx: (l.idx + 1) % l.imgs.length } : l)}
                  className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 text-sm font-medium"
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
