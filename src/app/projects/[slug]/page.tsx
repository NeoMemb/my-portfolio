import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectSectionNav from "@/components/ProjectSectionNav";
import Reveal from "@/components/Reveal";
import {
  ArrowLeftIcon,
  ExternalIcon,
  GitHubIcon,
} from "@/components/icons";
import { getCaseStudyProjects, getProject } from "@/data/content";

export function generateStaticParams() {
  return getCaseStudyProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.name} — Case Study`,
    description: project.summary ?? project.description,
  };
}

export default async function ProjectCaseStudyPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = getProject(slug);

  // Unknown slug, or a project with no write-up yet.
  if (!project?.caseStudy) notFound();

  const { caseStudy } = project;
  const position = getCaseStudyProjects().findIndex((p) => p.slug === slug);
  const number = String(position + 1).padStart(2, "0");
  const detailStack = project.detailStack ?? project.stack;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-12 lg:py-24">
      <Link
        href="/projects"
        className="inline-flex items-center gap-3 font-mono text-sm text-green transition-colors hover:text-lightest-slate focus-visible:text-lightest-slate"
      >
        <ArrowLeftIcon size={16} />
        Back to Projects
      </Link>

      <div className="mt-12 lg:flex lg:justify-between lg:gap-16">
        <article className="lg:max-w-3xl lg:flex-1">
          <ProjectSectionNav
            sections={caseStudy.sections}
            collapsible
            className="mb-10 lg:hidden"
          />

          <p className="font-mono text-xs tracking-widest text-green uppercase">
            {number}
            {project.category && (
              <span className="text-slate"> / {project.category}</span>
            )}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
            <h1 className="text-3xl font-bold text-lightest-slate sm:text-4xl">
              {project.name}
            </h1>
            {project.status && (
              <span className="inline-flex items-center gap-2 rounded-full border border-lightest-navy px-3 py-1 font-mono text-xs text-green">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-green"
                  aria-hidden="true"
                />
                {project.status}
              </span>
            )}
          </div>

          <p className="mt-5 max-w-2xl leading-relaxed text-light-slate">
            {project.summary ?? project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-slate">
            {detailStack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-lightest-navy px-3 py-1"
              >
                {item}
              </li>
            ))}
          </ul>

          {(project.href || project.repoHref) && (
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded border border-green px-5 py-3 font-mono text-xs text-green transition-colors hover:bg-green/10 focus-visible:bg-green/10"
                >
                  Live Demo
                  <ExternalIcon size={16} />
                </a>
              )}
              {project.repoHref && (
                <a
                  href={project.repoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded border border-lightest-navy px-5 py-3 font-mono text-xs text-lightest-slate transition-colors hover:border-green hover:text-green focus-visible:border-green focus-visible:text-green"
                >
                  Source
                  <GitHubIcon size={16} />
                </a>
              )}
            </div>
          )}

          {project.attribution && (
            <p className="mt-6 font-mono text-xs text-slate">
              {project.attribution}
            </p>
          )}

          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt=""
              className="mt-10 aspect-[16/9] w-full rounded-md border border-lightest-navy object-cover"
            />
          ) : (
            caseStudy.heroNote && (
              <p className="mt-10 rounded-md border border-dashed border-lightest-navy bg-navy-light/40 p-8 text-center font-mono text-xs text-slate">
                {caseStudy.heroNote}
              </p>
            )
          )}

          {caseStudy.sections.map((section, i) => (
            <Reveal key={section.id}>
              <section id={section.id} className="scroll-mt-24 pt-16">
                <h2 className="flex items-baseline gap-3 text-xl font-bold text-lightest-slate">
                  <span className="font-mono text-base text-green">
                    {i + 1}.
                  </span>
                  {section.title}
                </h2>

                {section.body?.map((paragraph, j) => (
                  <p
                    key={j}
                    className="mt-4 leading-relaxed text-light-slate"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-4 space-y-3 text-light-slate">
                    {section.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-1 shrink-0 text-green">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.challenges && (
                  <div className="mt-6 space-y-8">
                    {section.challenges.map((challenge) => (
                      <div
                        key={challenge.title}
                        className="border-l-2 border-lightest-navy pl-6"
                      >
                        <h3 className="font-medium text-lightest-slate">
                          {challenge.title}
                        </h3>
                        <p className="mt-3 font-mono text-xs tracking-widest text-slate uppercase">
                          Problem
                        </p>
                        <p className="mt-1 leading-relaxed text-light-slate">
                          {challenge.problem}
                        </p>
                        <p className="mt-4 font-mono text-xs tracking-widest text-slate uppercase">
                          Solution
                        </p>
                        <p className="mt-1 leading-relaxed text-light-slate">
                          {challenge.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.stats && (
                  <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                    {section.stats.map((stat, j) => (
                      <li
                        key={j}
                        className="rounded-md border border-lightest-navy bg-navy-light/40 p-5"
                      >
                        <p className="font-mono text-2xl text-green">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-sm text-light-slate">
                          {stat.label}
                        </p>
                        {stat.note && (
                          <p className="mt-1 font-mono text-xs text-slate">
                            {stat.note}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </Reveal>
          ))}

          <div className="mt-20 border-t border-lightest-navy pt-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 font-mono text-sm text-green transition-colors hover:text-lightest-slate focus-visible:text-lightest-slate"
            >
              <ArrowLeftIcon size={16} />
              Back to Projects
            </Link>
          </div>
        </article>

        <aside className="hidden shrink-0 lg:block lg:w-56">
          <ProjectSectionNav
            sections={caseStudy.sections}
            className="sticky top-24"
          />
        </aside>
      </div>
    </div>
  );
}
