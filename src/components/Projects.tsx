import SectionHeading from "./SectionHeading";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-12 lg:py-24">
      <SectionHeading number="03" title="Projects" />
      <ul className="space-y-6">
        {projects.map((project) => (
          <li
            key={project.name}
            className="group rounded-md border border-lightest-navy p-6 transition-colors hover:border-green focus-within:border-green"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-medium text-lightest-slate">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              {project.repoHref && (
                <a
                  href={project.repoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-slate hover:text-green shrink-0"
                >
                  Source
                </a>
              )}
            </div>
            <p className="mt-2 max-w-xl text-light-slate">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-slate">
              {project.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
