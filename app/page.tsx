import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
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
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-400">
        <p>
          Designed & Built by{" "}
          <span className="text-blue-600 font-medium">Akshat Kansara</span>{" "}
          · {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
