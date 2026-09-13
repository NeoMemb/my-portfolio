import SectionHeading from "./SectionHeading";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-12 lg:py-24 lg:pb-48 text-center sm:text-left"
    >
      <SectionHeading number="04" title="Contact" />
      <p className="max-w-md text-light-slate">
        I&apos;m not actively job hunting, but my inbox is always open.
        Whether you have a question or just want to say hi, I&apos;ll do my
        best to get back to you.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block rounded border border-green px-6 py-4 font-mono text-sm text-green transition-colors hover:bg-green/10 focus-visible:bg-green/10"
      >
        Say hello
      </a>
    </section>
  );
}
