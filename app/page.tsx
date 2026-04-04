import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="border-t border-[#262626] py-6 text-center text-sm text-[#52525b]">
        <p>
          Designed & Built by{" "}
          <span className="text-[#6366f1]">Akshat Kansara</span> · {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}
