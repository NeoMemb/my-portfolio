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
    <div
      id="top"
      className="mx-auto max-w-7xl px-6 sm:px-12 lg:flex lg:justify-between lg:gap-4 lg:px-24"
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <MobileNav />
      <Sidebar />
      {/*
        The identity column is sticky and in-flow, so the content needs no
        offset — it just takes the remaining width.
      */}
      <div className="lg:w-[52%]">
        <main id="main">
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
