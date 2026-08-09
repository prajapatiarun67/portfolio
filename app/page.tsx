import { Header } from "@/components/sections/Header/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import { About } from "@/components/sections/About/About";
import { Experience } from "@/components/sections/Experience/Experience";
import { Skills } from "@/components/sections/Skills/Skills";
import { Projects } from "@/components/sections/Projects/Projects";
import { Contact } from "@/components/sections/Contact/Contact";
import { Footer } from "@/components/sections/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
