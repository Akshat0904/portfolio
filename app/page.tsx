import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <footer className="border-t border-[#1a1a1a] py-8 text-center">
        <p className="text-[#3d3a37] text-xs tracking-widest uppercase">
          Designed & Built by{" "}
          <span className="text-[#6b6560]">Akshat Kansara</span> ·{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
