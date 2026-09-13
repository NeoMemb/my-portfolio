"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { jobs } from "@/data/content";

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section id="experience" className="scroll-mt-24 py-12 lg:py-24">
      <SectionHeading number="02" title="Experience" />

      <div className="flex flex-col sm:flex-row">
        <div
          role="tablist"
          aria-label="Job history"
          className="flex overflow-x-auto sm:flex-col sm:overflow-visible border-b sm:border-b-0 sm:border-l border-lightest-navy"
        >
          {jobs.map((j, i) => (
            <button
              key={j.company}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`shrink-0 whitespace-nowrap px-4 py-3 text-left text-sm font-mono transition-colors sm:border-l-2 sm:-ml-px ${
                active === i
                  ? "text-green border-b-2 sm:border-b-0 border-green bg-navy-light sm:bg-transparent"
                  : "text-slate border-b-2 sm:border-b-0 border-transparent hover:bg-navy-light"
              }`}
            >
              {j.company}
            </button>
          ))}
        </div>

        <div className="pt-6 sm:pt-0 sm:pl-8" role="tabpanel">
          <h3 className="text-lg font-medium text-lightest-slate">
            {job.role} <span className="text-green">@ </span>
            <a
              href={job.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="text-green link-underline"
            >
              {job.company}
            </a>
          </h3>
          <p className="mt-1 font-mono text-sm text-slate">{job.range}</p>
          <ul className="mt-4 max-w-xl space-y-3 text-light-slate">
            {job.highlights.map((h, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 text-green shrink-0">▹</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-slate">
            {job.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-lightest-navy px-3 py-1"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
