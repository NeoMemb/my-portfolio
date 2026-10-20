"use client";

import { useActiveSection } from "@/lib/useActiveSection";
import type { ProjectSection } from "@/data/content";

/**
 * The "On this page" rail on a case-study page. Reuses the same
 * IntersectionObserver hook the sidebar uses for the home page sections.
 *
 * Rendered as a raised card — one elevation step above the page background —
 * matching the reference site's treatment.
 *
 * Note: useActiveSection observes on a mount-only effect, so it won't
 * re-observe if `sections` changes. That's fine here — a case study's
 * sections are static for the life of the page.
 */
export default function ProjectSectionNav({
  sections,
  className = "",
  collapsible = false,
}: {
  sections: ProjectSection[];
  /** Positioning only (e.g. "sticky top-24") — the card styling lives here. */
  className?: string;
  /** Render as a native <details> disclosure, for narrow viewports. */
  collapsible?: boolean;
}) {
  const active = useActiveSection(sections.map((section) => section.id));

  const cardClass = `rounded-lg border border-lightest-navy bg-navy-light p-4 ${className}`;

  const list = (
    <ul className={collapsible ? "mt-3 space-y-2" : "mt-4 space-y-3"}>
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
  );

  const label = "On this page";

  if (collapsible) {
    return (
      <nav aria-label="On this page" className={cardClass}>
        <details>
          <summary className="cursor-pointer font-mono text-xs font-medium tracking-widest text-slate uppercase">
            {label}
          </summary>
          {list}
        </details>
      </nav>
    );
  }

  return (
    <nav aria-label="On this page" className={cardClass}>
      <p className="font-mono text-xs font-medium tracking-widest text-slate uppercase">
        {label}
      </p>
      {list}
    </nav>
  );
}
