"use client";

import { motion, useInView } from "framer-motion";
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
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-lg mx-auto text-center" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.15em] mb-2">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get In Touch</h2>
          <div className="w-12 h-0.5 bg-blue-600 mt-3 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-slate-600 font-medium text-lg mb-2">Let&apos;s build something together.</p>
          <p className="text-slate-400 text-sm mb-10 leading-relaxed">
            I&apos;m open to Software Engineer opportunities. Whether you have a role in mind
            or just want to connect — my inbox is always open.
          </p>
        </motion.div>

        {/* Email card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-slate-200 rounded-xl p-5 mb-4 shadow-sm hover:border-blue-200 transition-colors"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 mb-0.5">Email</p>
                <a href="mailto:askansara17@gmail.com"
                  className="text-slate-800 font-semibold text-sm hover:text-blue-600 transition-colors">
                  askansara17@gmail.com
                </a>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 border border-slate-200 hover:border-blue-200 px-3 py-2 rounded-lg transition-all bg-slate-50"
              aria-label="Copy email"
            >
              {copied ? (
                <><Check size={13} className="text-emerald-600" /><span className="text-emerald-600 font-medium">Copied!</span></>
              ) : (
                <><Copy size={13} /> Copy</>
              )}
            </button>
          </div>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-3 mb-8"
        >
          <a href="https://github.com/Akshat0904" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-200 hover:text-blue-600 text-slate-600 px-5 py-2.5 rounded-xl transition-all shadow-sm text-sm font-medium">
            <FaGithub size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/akshat-kansara-79a20b1b0/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-200 hover:text-blue-600 text-slate-600 px-5 py-2.5 rounded-xl transition-all shadow-sm text-sm font-medium">
            <FaLinkedin size={16} /> LinkedIn
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-1.5 text-sm text-slate-400"
        >
          <MapPin size={13} />
          <span>Ahmedabad, Gujarat, India</span>
        </motion.div>
      </div>
    </section>
  );
}
