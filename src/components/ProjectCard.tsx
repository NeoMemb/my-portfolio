import Link from "next/link";
import { ArrowRightIcon, ExternalIcon, FolderIcon, GitHubIcon } from "./icons";
import type { Project } from "@/data/content";

/**
 * A project card. Matches the existing card treatment on the home page
 * (border-lightest-navy / bg-navy-light, lift + green border on hover) and
 * adds the metadata row, status chip and case-study affordance.
 *
 * When `project.caseStudy` exists the title links to /projects/[slug];
 * `href` and `repoHref` stay external and open in a new tab.
 */
export default function ProjectCard({
  project,
  index,
  featured = false,
  showFeaturedLabel = false,
}: {
  project: Project;
  /** Zero-based position, rendered as the "01" badge. */
  index: number;
  /** Larger treatment for the featured cards at the top of /projects. */
  featured?: boolean;
  /** Renders a "Featured" tag above the card. */
  showFeaturedLabel?: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");
  const caseStudyHref = project.caseStudy
    ? `/projects/${project.slug}`
    : undefined;

  return (
    <li
      className={`group flex flex-col rounded-md border border-lightest-navy bg-navy-light/40 transition-all duration-300 hover:-translate-y-1 hover:border-green focus-within:border-green ${
        featured ? "sm:col-span-2" : ""
      }`}
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

      <div className={`flex flex-1 flex-col ${featured ? "p-8" : "p-6"}`}>
        {showFeaturedLabel && (
          <p className="mb-3 font-mono text-xs tracking-widest text-green uppercase">
            Featured
          </p>
        )}

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

        <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <p className="font-mono text-xs text-green">
            {number}
            {project.category && (
              <span className="text-slate"> / {project.category}</span>
            )}
          </p>
          {project.status && (
            <span className="inline-flex items-center gap-2 font-mono text-xs text-slate">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-green"
                aria-hidden="true"
              />
              {project.status}
            </span>
          )}
        </div>

        <h3
          className={`mt-4 font-medium text-lightest-slate ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {caseStudyHref ? (
            <Link
              href={caseStudyHref}
              className="group-hover:text-green focus-visible:text-green transition-colors"
            >
              {project.name}
            </Link>
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

        {caseStudyHref && (
          <Link
            href={caseStudyHref}
            className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-green transition-colors hover:text-lightest-slate focus-visible:text-lightest-slate"
          >
            Case Study
            <ArrowRightIcon size={14} />
            <span className="sr-only"> for {project.name}</span>
          </Link>
        )}
      </div>
    </li>
  );
}
