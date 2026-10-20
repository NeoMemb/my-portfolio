"use client";

import { useState } from "react";
import { footer } from "@/data/content";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const [spinning, setSpinning] = useState(false);

  return (
    <footer className="flex flex-col items-center gap-8 py-16 text-center lg:pb-16">
      <SocialLinks />

      <p className="max-w-md font-mono text-xs leading-relaxed text-slate">
        {footer.credit}. Built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noreferrer"
          className="text-slate hover:text-green focus-visible:text-green transition-colors"
        >
          Next.js
        </a>{" "}
        &amp;{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer"
          className="text-slate hover:text-green focus-visible:text-green transition-colors"
        >
          Tailwind CSS
        </a>
        , deployed on{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noreferrer"
          className="text-slate hover:text-green focus-visible:text-green transition-colors"
        >
          Vercel
        </a>
        .
      </p>

      <button
        type="button"
        onClick={() => setSpinning((s) => !s)}
        aria-pressed={spinning}
        className="inline-flex items-center gap-2 font-mono text-xs text-slate hover:text-green focus-visible:text-green transition-colors"
      >
        <span
          className={spinning ? "easter-egg-spin" : undefined}
          aria-hidden="true"
        >
          ✦
        </span>
        {footer.easterEggLabel}
      </button>
    </footer>
  );
}
