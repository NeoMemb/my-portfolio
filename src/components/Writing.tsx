import SectionHeading from "./SectionHeading";
import { ExternalIcon } from "./icons";
import { writing } from "@/data/content";

export default function Writing() {
  return (
    <section id="writing" className="scroll-mt-24 py-12 lg:py-24">
      <SectionHeading number="04" title="Writing" />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {writing.map((post) => (
          <li key={post.title}>
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-md border border-lightest-navy bg-navy-light/40 transition-all duration-300 hover:-translate-y-1 hover:border-green focus-visible:border-green"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt=""
                loading="lazy"
                className="aspect-[16/10] w-full rounded-t-md object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-xs text-slate">{post.year}</p>
                <h3 className="mt-2 flex-1 text-base font-medium leading-snug text-lightest-slate group-hover:text-green transition-colors">
                  {post.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-green">
                  Read article
                  <ExternalIcon size={14} />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
