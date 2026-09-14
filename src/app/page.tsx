import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <div id="top" className="mx-auto max-w-6xl lg:flex">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <MobileNav />
      <Sidebar />
      <div className="lg:ml-[400px] lg:flex-1">
        <main id="main" className="px-6 sm:px-12 lg:px-24">
          <Reveal>
            <About />
          </Reveal>
          <Reveal>
            <Experience />
          </Reveal>
          <Reveal>
            <Projects />
          </Reveal>
          <Reveal>
            <Writing />
          </Reveal>
          <Reveal>
            <Contact />
          </Reveal>
        </main>
        <Footer />
      </div>
    </div>
  );
}
