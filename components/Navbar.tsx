"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f0f]/90 backdrop-blur-md border-b border-[#262626]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold text-white tracking-tight"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          AK<span className="text-[#6366f1]">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-sm text-[#a1a1aa] hover:text-white transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <a
          href="mailto:askansara17@gmail.com"
          className="hidden md:inline-flex items-center gap-2 text-sm border border-[#6366f1] text-[#6366f1] px-4 py-2 rounded-md hover:bg-[#6366f1] hover:text-white transition-all duration-200"
        >
          Hire Me
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#a1a1aa] hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#161616] border-b border-[#262626] px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-[#a1a1aa] hover:text-white transition-colors text-sm w-full text-left cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="mailto:askansara17@gmail.com"
                className="inline-flex text-sm border border-[#6366f1] text-[#6366f1] px-4 py-2 rounded-md hover:bg-[#6366f1] hover:text-white transition-all"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
