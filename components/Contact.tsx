"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="py-32 px-6 bg-[#0c0c0c]" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#5c5751] text-xs tracking-widest uppercase mb-6">
            What&apos;s next?
          </p>
          <h2 className="font-[var(--font-serif)] text-4xl sm:text-5xl md:text-6xl text-[#ede9e3] leading-tight mb-6">
            Let&apos;s build
            <br />
            <span className="text-[#d4a853]">something great.</span>
          </h2>
          <p className="text-[#908a82] text-base max-w-md mx-auto mb-10 leading-relaxed">
            I&apos;m open to Software Engineer opportunities. Whether you have a
            role in mind or just want to connect — my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12"
        >
          <a
            href="mailto:askansara17@gmail.com"
            className="inline-flex text-sm font-medium text-[#0c0c0c] bg-[#d4a853] hover:bg-[#c49a48] px-8 py-3.5 rounded-full transition-colors"
          >
            askansara17@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/Akshat0904"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5c5751] hover:text-[#d4a853] transition-colors text-sm flex items-center gap-2"
          >
            <FaGithub size={16} /> GitHub
          </a>
          <span className="w-px h-4 bg-[#2a2a2a]" />
          <a
            href="https://www.linkedin.com/in/akshat-kansara-79a20b1b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5c5751] hover:text-[#d4a853] transition-colors text-sm flex items-center gap-2"
          >
            <FaLinkedin size={16} /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
