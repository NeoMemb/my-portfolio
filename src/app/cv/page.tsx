import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/resume/PrintButton";
import { ArrowLeftIcon, FileIcon } from "@/components/icons";
import {
  about,
  availability,
  jobs,
  profile,
  projects,
  resume,
  socials,
} from "@/data/content";

export const metadata: Metadata = {
  title: `CV — ${profile.name}`,
  description: `Curriculum vitae for ${profile.name}, ${profile.title} in ${profile.location}. Open to ${availability.roles.join(", ")} roles.`,
};

/**
 * content.ts keeps TODO markers where real copy is still needed (summary,
 * education). Treat those as absent so a placeholder never renders on the
 * public CV — an empty section beats "TODO — your school".
 */
function isTodo(value?: string): boolean {
  return !value || value.trim().toUpperCase().startsWith("TODO");
}

function Sheet({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 first:mt-0">
      <h3 className="border-b border-paper-rule pb-1.5 text-xs font-semibold tracking-widest text-paper-accent uppercase">
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default function CvPage() {
  // Fall back to the site bio when the résumé summary is still a TODO.
  const summary = isTodo(resume.summary) ? about.paragraphs[0] : resume.summary;
  const education = isTodo(resume.education.school)
    ? undefined
    : resume.education;

  const contact = [
    profile.email,
    profile.location,
    ...socials
      .filter((s) => s.key === "github" || s.key === "linkedin")
      .map((s) => s.href.replace(/^https?:\/\//, "")),
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-12 sm:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-3 text-sm text-green transition-colors hover:text-lightest-slate focus-visible:text-lightest-slate print:hidden"
      >
        <ArrowLeftIcon size={16} />
        Back
      </Link>

      <h1 className="mt-10 text-3xl font-bold tracking-tight text-lightest-slate sm:text-4xl">
        Curriculum Vitae
      </h1>

      <div className="mt-6 flex flex-wrap items-center gap-4 print:hidden">
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded border border-green px-5 py-3 font-mono text-xs text-green transition-colors hover:bg-green/10 focus-visible:bg-green/10"
        >
          <FileIcon size={16} />
          Download PDF
        </a>
        <PrintButton />
      </div>

      {/*
        The sheet. This mirrors what the PDF renders — same copy, same paper
        palette — so the preview is a faithful preview rather than a
        dark-themed paraphrase of it.
      */}
      <article className="mt-10 rounded-xl border border-white/10 bg-paper p-8 shadow-[0_8px_30px_rgba(0,0,0,0.45)] md:p-10">
        <header className="border-b border-paper-rule pb-5">
          <h2 className="text-3xl font-bold tracking-tight text-paper-heading">
            {profile.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-paper-accent">
            {availability.roles.join(" · ")}
          </p>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-paper-ink">
            {profile.tagline}
          </p>
          <p className="mt-3 font-mono text-xs text-paper-meta">
            {contact.join("  ·  ")}
          </p>
          {availability.open && (
            <p className="mt-1 font-mono text-xs text-paper-meta">
              {availability.arrangement} — {availability.start.toLowerCase()}.
            </p>
          )}
        </header>

        <div className="mt-8">
          <Sheet title="Summary">
            <p className="max-w-prose leading-relaxed text-paper-ink">
              {summary}
            </p>
          </Sheet>

          <Sheet title="Experience">
            <div className="space-y-7">
              {jobs.map((job) => (
                <div key={job.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <h4 className="font-semibold text-paper-heading">
                      {job.role}
                      <span className="font-normal text-paper-meta">, </span>
                      {job.company}
                    </h4>
                    <p className="font-mono text-xs text-paper-meta">
                      {job.range}
                    </p>
                  </div>
                  <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-paper-ink">
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2.5">
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-paper-accent"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 font-mono text-xs text-paper-meta">
                    {job.stack.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </Sheet>

          <Sheet title="Selected Work">
            <div className="space-y-5">
              {projects.map((project) => (
                <div key={project.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <h4 className="font-semibold text-paper-heading">
                      {project.name}
                    </h4>
                    {project.status && (
                      <p className="font-mono text-xs text-paper-meta">
                        {project.status}
                      </p>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm leading-relaxed text-paper-ink">
                    {project.description}
                  </p>
                  <p className="mt-1 font-mono text-xs text-paper-meta">
                    {project.stack.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </Sheet>

          <Sheet title="Stack">
            <p className="font-mono text-xs leading-relaxed text-paper-meta">
              {about.skills.join(", ")}
            </p>
          </Sheet>

          {education && (
            <Sheet title="Education">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <h4 className="font-semibold text-paper-heading">
                  {education.degree}
                  <span className="font-normal text-paper-meta">, </span>
                  {education.school}
                </h4>
                <p className="font-mono text-xs text-paper-meta">
                  {education.range}
                </p>
              </div>
            </Sheet>
          )}
        </div>
      </article>
    </div>
  );
}
