"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Camera,
} from "lucide-react";
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
  images: string[];
};

const projects: Project[] = [
  {
    title: "Real Estate Intelligence Platform",
    description:
      "A national-scale property listing engine for view.com.au. Advanced Mapbox/Google Maps integrations with real-time visualization, embeddable property widgets across 50+ partner sites.",
    tech: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Mapbox",
    ],
    highlight: "Sub-second visualization · 20% referral increase",
    liveUrl: null,
    githubUrl: null,
    images: viewImages,
  },
  {
    title: "AI-Driven HRMS & WhatsApp Engine",
    description:
      "Automated HRMS with WhatsApp-based discrepancy resolution. Custom Backend Rule Engine for payroll and attendance anomaly detection.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "WhatsApp Cloud API"],
    highlight: "50% resolution time reduction",
    liveUrl: null,
    githubUrl: null,
    images: tcImages,
  },
  {
    title: "Enterprise Industrial IoT",
    description:
      "Mission-critical IIoT backend with Clean Architecture & TDD. Real-time telemetry ingestion with live monitoring dashboards and automated alarms.",
    tech: ["Node.js", "PostgreSQL", "Clean Architecture", "TDD"],
    highlight: "99.9% reliability",
    liveUrl: null,
    githubUrl: null,
    images: iiotImages,
  },
  {
    title: "Trayan Corporation",
    description:
      "Company profile for a chemical trading firm. Next.js App Router, static-optimized for fast load times and SEO.",
    tech: ["Next.js", "Tailwind CSS"],
    highlight: "High Lighthouse score",
    liveUrl: "https://trayancorp.com/",
    githubUrl: null,
    images: [
      img("trayan", "image.png"),
      img("trayan", "image copy.png"),
      img("trayan", "image copy 2.png"),
      img("trayan", "image copy 3.png"),
      img("trayan", "image copy 4.png"),
      img("trayan", "image copy 5.png"),
      img("trayan", "image copy 6.png"),
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [lb, setLb] = useState<{ imgs: string[]; idx: number } | null>(null);

  useEffect(() => {
    if (!lb) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setLb((l) => l && { ...l, idx: (l.idx + 1) % l.imgs.length });
      if (e.key === "ArrowLeft")
        setLb(
          (l) =>
            l && { ...l, idx: (l.idx - 1 + l.imgs.length) % l.imgs.length },
        );
      if (e.key === "Escape") setLb(null);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lb]);

  return (
    <section id="projects" className="py-24 px-6 bg-[#0c0c0c]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-baseline justify-between mb-16"
        >
          <h2 className="font-[var(--font-serif)] text-3xl sm:text-4xl text-[#ede9e3]">
            Selected work
          </h2>
          <span className="hidden sm:block text-[#5c5751] text-xs tracking-widest uppercase">
            Projects
          </span>
        </motion.div>

        {/* Project list */}
        <div className="space-y-20">
          {projects.map((p, i) => {
            const hasImages = p.images.length > 0;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div
                  className={`grid grid-cols-1 ${hasImages ? "lg:grid-cols-2" : ""} gap-8 lg:gap-12 items-center`}
                >
                  {/* Image */}
                  {hasImages && (
                    <button
                      onClick={() => setLb({ imgs: p.images, idx: 0 })}
                      className={`relative aspect-[16/10] w-full rounded-xl overflow-hidden group cursor-pointer bg-[#141414] border border-[#2a2a2a] hover:border-[#d4a853]/40 transition-all duration-300 ${
                        !isEven ? "lg:order-2" : ""
                      }`}
                    >
                      <Image
                        src={p.images[0]}
                        alt={p.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c]/40 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-[#c4bfb8] bg-[#0c0c0c]/60 backdrop-blur-sm rounded-full px-3 py-1.5">
                        <Camera size={12} />
                        <span>View {p.images.length} screenshots</span>
                      </div>
                    </button>
                  )}

                  {/* Content */}
                  <div className={!isEven && hasImages ? "lg:order-1" : ""}>
                    <span className="text-[11px] tracking-widest uppercase text-[#5c5751] block mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-[var(--font-serif)] text-2xl lg:text-3xl text-[#ede9e3] mb-4">
                      {p.title}
                    </h3>
                    <p className="text-[15px] text-[#908a82] leading-relaxed mb-5">
                      {p.description}
                    </p>
                    <p className="text-sm text-[#d4a853] font-medium mb-6">
                      ✦ {p.highlight}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs text-[#908a82] border border-[#2a2a2a] px-3 py-1.5 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#5c5751] hover:text-[#d4a853] transition-colors"
                        >
                          <FaGithub size={16} />
                        </a>
                      )}
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-[#908a82] hover:text-[#d4a853] transition-colors"
                        >
                          <ExternalLink size={14} /> Visit site
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lb && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0c0c0c]/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLb(null)}
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLb(null)}
                className="absolute -top-10 right-0 text-[#5c5751] hover:text-[#ede9e3] transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="relative w-full h-[80vh] rounded-xl overflow-hidden bg-[#141414] border border-[#2a2a2a]">
                <Image
                  src={lb.imgs[lb.idx]}
                  alt=""
                  fill
                  sizes="95vw"
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-between mt-3">
                <button
                  onClick={() =>
                    setLb((l) =>
                      l
                        ? {
                            ...l,
                            idx: (l.idx - 1 + l.imgs.length) % l.imgs.length,
                          }
                        : l,
                    )
                  }
                  className="flex items-center gap-1.5 text-[#908a82] hover:text-[#ede9e3] transition-colors text-sm"
                >
                  <ChevronLeft size={16} /> Prev
                </button>
                <span className="text-[#5c5751] text-sm">
                  {lb.idx + 1} / {lb.imgs.length}
                </span>
                <button
                  onClick={() =>
                    setLb((l) =>
                      l ? { ...l, idx: (l.idx + 1) % l.imgs.length } : l,
                    )
                  }
                  className="flex items-center gap-1.5 text-[#908a82] hover:text-[#ede9e3] transition-colors text-sm"
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
