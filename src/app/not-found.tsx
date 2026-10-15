import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";

/**
 * Themed 404. Next's built-in 404 follows the OS colour scheme and ignores the
 * app theme, which would render a light page on this dark site — hence a
 * custom one. This file also catches any unmatched URL app-wide.
 */
export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-24 sm:px-12">
      <p className="font-mono text-sm text-green">404</p>
      <h1 className="mt-4 text-3xl font-bold text-lightest-slate sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md leading-relaxed text-light-slate">
        That page doesn&apos;t exist. It may have moved, or the link that
        brought you here may be out of date.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-3 font-mono text-sm text-green transition-colors hover:text-lightest-slate focus-visible:text-lightest-slate"
        >
          <ArrowLeftIcon size={16} />
          Back home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 font-mono text-sm text-slate transition-colors hover:text-green focus-visible:text-green"
        >
          All projects
          <ArrowRightIcon size={16} />
        </Link>
      </div>
    </div>
  );
}
