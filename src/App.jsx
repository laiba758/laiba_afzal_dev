import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import WhyWorkWithMe from "./sections/WhyWorkWithMe";
import Process from "./sections/Process";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Services />
        <WhyWorkWithMe />
        <Process />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
