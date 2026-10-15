import Link from "next/link";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { ArrowRightIcon } from "./icons";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-12 lg:py-24">
      <SectionHeading number="03" title="Projects" />
      {/* Uniform two-up grid on the home page; the larger "featured" card
          treatment is reserved for the /projects index. */}
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </ul>

      <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 font-mono text-sm text-green transition-colors hover:text-lightest-slate focus-visible:text-lightest-slate"
        >
          All Projects
          <ArrowRightIcon size={16} />
        </Link>

        <Link
          href="/archive"
          className="inline-flex items-center gap-3 font-mono text-sm text-green transition-colors hover:text-lightest-slate focus-visible:text-lightest-slate"
        >
          View Full Project Archive
          <ArrowRightIcon size={16} />
        </Link>
      </div>
    </section>
  );
}
