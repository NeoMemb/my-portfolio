import SectionHeading from "./SectionHeading";
import { FileIcon } from "./icons";
import { availability, profile } from "@/data/content";

/** "Frontend Engineer, Full Stack Engineer or Software Engineer" */
function formatRoles(roles: string[]): string {
  if (roles.length === 0) return "engineering";
  if (roles.length === 1) return roles[0];
  return `${roles.slice(0, -1).join(", ")} or ${roles[roles.length - 1]}`;
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-12 lg:py-24 text-center sm:text-left"
    >
      <SectionHeading number="05" title="Contact" />

      {availability.open && (
        <p className="inline-flex items-center gap-2 rounded-full border border-lightest-navy px-3 py-1 font-mono text-xs text-green">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-green"
            aria-hidden="true"
          />
          Open to work
        </p>
      )}

      <p className="mt-6 max-w-xl text-light-slate">
        I&apos;m looking for {formatRoles(availability.roles)} roles.{" "}
        {availability.arrangement} — {availability.start.toLowerCase()}.
      </p>

      {availability.note && (
        <p className="mt-3 max-w-xl text-light-slate">{availability.note}</p>
      )}

      <p className="mt-3 max-w-xl text-light-slate">
        Hiring, or want to talk through a role? Email is the fastest way to
        reach me — I&apos;m happy to walk through any of the work above.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-3 rounded border border-green px-6 py-4 font-mono text-sm text-green transition-colors hover:bg-green/10 focus-visible:bg-green/10"
        >
          Email me
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded border border-lightest-navy px-6 py-4 font-mono text-sm text-lightest-slate transition-colors hover:border-green hover:text-green focus-visible:border-green focus-visible:text-green"
        >
          <FileIcon size={16} />
          Résumé
        </a>
      </div>

      <p className="mt-6 font-mono text-xs text-slate">
        {profile.email} · {profile.location}
      </p>
    </section>
  );
}
