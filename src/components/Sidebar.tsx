"use client";

import { profile, nav } from "@/data/content";
import { useActiveSection } from "@/lib/useActiveSection";
import SocialLinks from "./SocialLinks";

const sectionIds = nav.map((item) => item.href.replace("#", ""));

export default function Sidebar() {
  const active = useActiveSection(sectionIds);

  return (
    <header className="lg:fixed lg:flex lg:h-screen lg:w-[400px] lg:flex-col lg:justify-between lg:py-24 px-6 pt-16 pb-10 sm:px-12 lg:px-24">
      <div>
        <h1 className="text-4xl font-bold text-lightest-slate sm:text-5xl">
          <a href="#top" className="hover:text-green transition-colors">
            {profile.name}
          </a>
        </h1>
        <h2 className="mt-3 text-lg font-medium text-lightest-slate sm:text-xl">
          {profile.title}
        </h2>
        <p className="mt-4 max-w-xs text-slate">{profile.tagline}</p>

        <nav aria-label="In-page" className="mt-16 hidden lg:block">
          <ul className="space-y-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href ? "true" : undefined}
                  className={`group flex items-center gap-3 text-sm font-medium tracking-wide transition-colors ${
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
