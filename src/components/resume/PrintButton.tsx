"use client";

/** Opens the browser's print dialog — a second path to a PDF, alongside the
 *  server-rendered /resume route. */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-3 rounded border border-lightest-navy px-5 py-3 font-mono text-xs text-lightest-slate transition-colors hover:border-green hover:text-green focus-visible:border-green focus-visible:text-green"
    >
      Print
    </button>
  );
}
