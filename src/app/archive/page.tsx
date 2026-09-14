import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, ExternalIcon, GitHubIcon } from "@/components/icons";
import { archiveProjects } from "@/data/content";

export const metadata: Metadata = {
  title: "Project Archive — Jordan Avery",
  description:
    "A full archive of things Jordan Avery has designed, built, and broken over the years.",
};

export default function ArchivePage() {
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
        Projects
        <span className="ml-3 align-middle font-mono text-base text-slate">
          ({archiveProjects.length})
        </span>
      </h1>

      <ul className="mt-12">
        {archiveProjects.map((project) => (
          <li
            key={project.name}
            className="group grid gap-x-6 gap-y-3 border-b border-lightest-navy py-6 sm:grid-cols-[4rem_1fr_auto] sm:items-baseline"
          >
            <p className="font-mono text-xs text-slate sm:pt-1">{project.year}</p>

            <div>
              <h2 className="font-medium text-lightest-slate">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group-hover:text-green transition-colors"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h2>
              <p className="mt-1 max-w-xl text-sm text-light-slate">
                {project.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-slate">
                {project.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 sm:pt-1">
              {project.repoHref && (
                <a
                  href={project.repoHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} source code`}
                  className="text-slate hover:text-green focus-visible:text-green transition-colors"
                >
                  <GitHubIcon size={18} />
                </a>
              )}
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} live site`}
                  className="text-slate hover:text-green focus-visible:text-green transition-colors"
                >
                  <ExternalIcon size={18} />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
