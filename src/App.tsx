import { useActiveSection } from "./hooks/useActiveSection";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

export default function App() {
  const activeSection = useActiveSection();

  return (
    <div>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero onScrollTo={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
