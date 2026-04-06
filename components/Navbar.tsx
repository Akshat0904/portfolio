"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
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

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry that is most visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm" : "bg-transparent"
    }`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-base font-bold text-slate-900 tracking-tight">
          AK<span className="text-blue-600">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = activeSection === l.href.slice(1);
            return (
              <li key={l.href}>
                <button
                  onClick={() => handleNav(l.href)}
                  className={`relative text-sm font-medium transition-colors cursor-pointer pb-0.5 ${
                    isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <a href="mailto:askansara17@gmail.com"
          className="hidden md:inline-flex text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
          Hire Me
        </a>

        <button className="md:hidden text-slate-500 hover:text-slate-900"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pb-5 shadow-sm">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => {
              const isActive = activeSection === l.href.slice(1);
              return (
                <li key={l.href}>
                  <button onClick={() => handleNav(l.href)}
                    className={`text-sm font-medium transition-colors w-full text-left cursor-pointer ${
                      isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-900"
                    }`}>
                    {l.label}
                  </button>
                </li>
              );
            })}
            <li>
              <a href="mailto:askansara17@gmail.com"
                className="inline-flex text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
