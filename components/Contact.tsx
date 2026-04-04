"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Copy, Check, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("askansara17@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12 justify-center"
        >
          <span className="text-[#6366f1] text-sm font-mono">06.</span>
          <h2 className="text-3xl font-bold">Get In Touch</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#a1a1aa] text-lg mb-3"
        >
          Let&apos;s build something together.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[#71717a] text-sm mb-10"
        >
          I&apos;m currently open to Software Engineer opportunities. Whether
          you have a role in mind or just want to connect — my inbox is always
          open.
        </motion.p>

        {/* Email block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#161616] border border-[#262626] rounded-2xl p-6 mb-8 hover:border-[#6366f1]/40 transition-colors"
        >
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center">
                <Mail size={18} className="text-[#6366f1]" />
              </div>
              <div className="text-left">
                <p className="text-xs text-[#71717a] mb-0.5">Email</p>
                <a
                  href="mailto:askansara17@gmail.com"
                  className="text-white font-medium hover:text-[#a5b4fc] transition-colors"
                >
                  askansara17@gmail.com
                </a>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white border border-[#262626] hover:border-[#6366f1]/50 px-3 py-2 rounded-lg transition-all"
              aria-label="Copy email"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  Copy
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <a
            href="https://github.com/Akshat0904"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#161616] border border-[#262626] hover:border-[#6366f1]/50 text-[#a1a1aa] hover:text-white px-5 py-3 rounded-xl transition-all"
          >
            <FaGithub size={18} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/akshat-kansara-79a20b1b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#161616] border border-[#262626] hover:border-[#6366f1]/50 text-[#a1a1aa] hover:text-white px-5 py-3 rounded-xl transition-all"
          >
            <FaLinkedin size={18} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-1.5 text-sm text-[#52525b]"
        >
          <MapPin size={13} />
          <span>Ahmedabad, Gujarat, India</span>
        </motion.div>
      </div>
    </section>
  );
}
