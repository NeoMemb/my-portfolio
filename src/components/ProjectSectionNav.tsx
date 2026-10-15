"use client";

import { useActiveSection } from "@/lib/useActiveSection";
import type { ProjectSection } from "@/data/content";

/**
 * The "On this page" rail on a case-study page. Reuses the same
 * IntersectionObserver hook the sidebar uses for the home page sections.
 *
 * Note: useActiveSection observes on a mount-only effect, so it won't
 * re-observe if `sections` changes. That's fine here — a case study's
 * sections are static for the life of the page.
 */
export default function ProjectSectionNav({
  sections,
  className = "",
}: {
  sections: ProjectSection[];
  className?: string;
}) {
  const active = useActiveSection(sections.map((section) => section.id));

  return (
    <nav aria-label="On this page" className={className}>
      <p className="font-mono text-xs tracking-widest text-slate uppercase">
        On this page
      </p>
      <ul className="mt-4 space-y-3">
        {sections.map((section, i) => {
          const href = `#${section.id}`;
          const isActive = active === href;
          return (
            <li key={section.id}>
              <a
                href={href}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-baseline gap-2 text-sm transition-colors ${
                  isActive
                    ? "text-green"
                    : "text-slate hover:text-lightest-slate focus-visible:text-lightest-slate"
                }`}
              >
                <span className="font-mono text-xs">{i + 1}.</span>
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
