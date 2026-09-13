import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div id="top" className="mx-auto max-w-6xl lg:flex">
      <Sidebar />
      <main className="px-6 sm:px-12 lg:ml-[400px] lg:flex-1 lg:px-24">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
