import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { ArrowLeftIcon } from "@/components/icons";
import { projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Selected projects, with a case study for each one covering the problem, the approach and the outcome.",
};

export default function ProjectsPage() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-12 sm:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-3 font-mono text-sm text-green transition-colors hover:text-lightest-slate focus-visible:text-lightest-slate"
      >
        <ArrowLeftIcon size={16} />
        Back
      </Link>

      <h1 className="mt-10 text-3xl font-bold text-lightest-slate sm:text-4xl">
        Selected Work
        <span className="ml-3 align-middle font-mono text-base text-slate">
          ({projects.length})
        </span>
      </h1>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={projects.indexOf(project)}
            featured
            showFeaturedLabel
          />
        ))}
        {rest.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={projects.indexOf(project)}
          />
        ))}
      </ul>
    </div>
  );
}
