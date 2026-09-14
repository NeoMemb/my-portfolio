import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { ExternalIcon, FolderIcon, GitHubIcon, ArrowRightIcon } from "./icons";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-12 lg:py-24">
      <SectionHeading number="03" title="Projects" />
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.name}
            className="group flex flex-col rounded-md border border-lightest-navy bg-navy-light/40 transition-all duration-300 hover:-translate-y-1 hover:border-green focus-within:border-green"
          >
            {project.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.image}
                alt=""
                loading="lazy"
                className="aspect-[16/9] w-full rounded-t-md object-cover"
              />
            )}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between">
                <FolderIcon className="text-green" size={32} />
                <div className="flex items-center gap-4">
                  {project.repoHref && (
                    <a
                      href={project.repoHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} source code`}
                      className="text-slate hover:text-green focus-visible:text-green transition-colors"
                    >
                      <GitHubIcon size={20} />
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
                      <ExternalIcon size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mt-5 text-lg font-medium text-lightest-slate">
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
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-light-slate">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-slate">
                {project.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <Link
        href="/archive"
        className="mt-12 inline-flex items-center gap-3 font-mono text-sm text-green transition-colors hover:text-lightest-slate focus-visible:text-lightest-slate"
      >
        View Full Project Archive
        <ArrowRightIcon size={16} />
      </Link>
    </section>
  );
}
