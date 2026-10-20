import { availability } from "@/data/content";

/**
 * A live-status line — a glowing dot beside what you're doing right now.
 *
 * The glow and the pulsing ring are CSS-only (see `.status-dot` in
 * globals.css), and the ring is dropped for reduced-motion users. The whole
 * line renders nothing when `availability.currently` is empty, so it can be
 * switched off from content.ts.
 */
export default function StatusLine({ className = "" }: { className?: string }) {
  if (!availability.currently) return null;

  return (
    <p
      className={`flex max-w-xs items-start gap-2.5 font-mono text-xs text-slate ${className}`}
    >
      <span
        className="status-dot mt-1 h-1.5 w-1.5 shrink-0"
        aria-hidden="true"
      />
      <span>{availability.currently}</span>
    </p>
  );
}
