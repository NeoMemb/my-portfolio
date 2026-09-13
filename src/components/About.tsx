import SectionHeading from "./SectionHeading";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-12 lg:py-24">
      <SectionHeading number="01" title="About" />
      <div className="max-w-xl space-y-4 text-light-slate">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <ul className="mt-6 grid max-w-md grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm text-slate">
        {about.skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <span className="text-green">▹</span>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
