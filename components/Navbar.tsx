"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy — observe each section
  useEffect(() => {
    const sectionIds = ["experience", "projects", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0c0c]/90 backdrop-blur-md border-b border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("");
          }}
          className="font-[var(--font-serif)] text-xl font-semibold tracking-[0.08em] bg-gradient-to-r from-[#d4a853] to-[#ede9e3] bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
        >
          Akshat Kansara
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = activeSection === l.href;
            return (
              <li key={l.href}>
                <button
                  onClick={() => handleNav(l.href)}
                  className={`group relative text-[13px] uppercase tracking-[0.15em] transition-colors cursor-pointer py-1 ${
                    isActive
                      ? "text-[#d4a853]"
                      : "text-[#908a82] hover:text-[#d4a853]"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-0 bottom-0 h-px bg-[#d4a853] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <a
          href="mailto:askansara17@gmail.com"
          className="hidden md:inline-flex text-[13px] uppercase tracking-[0.15em] text-[#d4a853] hover:text-[#ede9e3] transition-colors border border-[#d4a853]/30 hover:border-[#d4a853] px-4 py-1.5 rounded-full"
        >
          Say Hello
        </a>

        <button
          className="md:hidden text-[#908a82] hover:text-[#ede9e3]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#0c0c0c] border-b border-[#2a2a2a] px-6 pb-6">
          <ul className="flex flex-col gap-5 pt-4">
            {links.map((l) => {
              const isActive = activeSection === l.href;
              return (
                <li key={l.href}>
                  <button
                    onClick={() => handleNav(l.href)}
                    className={`text-sm uppercase tracking-[0.15em] transition-colors w-full text-left cursor-pointer ${
                      isActive
                        ? "text-[#d4a853]"
                        : "text-[#908a82] hover:text-[#d4a853]"
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              );
            })}
            <li>
              <a
                href="mailto:askansara17@gmail.com"
                className="text-sm uppercase tracking-[0.15em] text-[#d4a853]"
              >
                Say Hello
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
