import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons";

/** Shown when /projects/[slug] doesn't match a project with a case study. */
export default function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:px-12 sm:py-24">
      <p className="font-mono text-sm text-green">404</p>
      <h1 className="mt-4 text-3xl font-bold text-lightest-slate sm:text-4xl">
        Project not found
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-light-slate">
        There&apos;s no case study at this address — the project may have been
        renamed, or the link may be out of date.
      </p>

      <Link
        href="/projects"
        className="mt-10 inline-flex items-center gap-3 font-mono text-sm text-green transition-colors hover:text-lightest-slate focus-visible:text-lightest-slate"
      >
        <ArrowLeftIcon size={16} />
        Back to Projects
      </Link>
    </div>
  );
}
