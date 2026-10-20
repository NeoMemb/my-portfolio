"use client";

import Link from "next/link";
import { profile, nav } from "@/data/content";
import { useActiveSection } from "@/lib/useActiveSection";
import { FileIcon } from "./icons";
import SocialLinks from "./SocialLinks";
import StatusLine from "./StatusLine";

const sectionIds = nav.map((item) => item.href.replace("#", ""));

export default function Sidebar() {
  const active = useActiveSection(sectionIds);

  return (
    <header className="pt-16 pb-10 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:pt-24 lg:pb-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-lightest-slate sm:text-5xl">
          <a href="#top" className="hover:text-green transition-colors">
            {profile.name}
          </a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-lightest-slate sm:text-xl">
          {profile.title}
        </h2>

        {/* Sits directly under the role: it's the most time-sensitive thing
            here, so it gets the highest slot after the name. */}
        <StatusLine className="mt-5" />

        <p className="mt-4 max-w-xs leading-normal text-slate">
          {profile.tagline}
        </p>

        {/* The one action in the column — the fastest exit for a recruiter. */}
        <Link
          href="/cv"
          className="mt-8 inline-flex items-center gap-2 rounded border border-lightest-navy px-4 py-2 font-mono text-xs text-lightest-slate transition-colors hover:border-green hover:text-green focus-visible:border-green focus-visible:text-green"
        >
          <FileIcon size={14} />
          View CV
        </Link>

        <nav aria-label="In-page" className="mt-16 hidden lg:block">
          <ul className="w-max">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  className={`group flex items-center gap-3 py-3 text-sm font-medium transition-colors ${
                    active === item.href
                      ? "text-green"
                      : "text-slate hover:text-lightest-slate focus-visible:text-lightest-slate"
                  }`}
                >
                  <span
                    className={`h-px transition-all ${
                      active === item.href
                        ? "w-16 bg-green"
                        : "w-8 bg-slate group-hover:w-16 group-hover:bg-green"
                    }`}
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <SocialLinks className="mt-10 lg:mt-0" />
    </header>
  );
}
