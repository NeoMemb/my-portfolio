import { profile, socials, nav } from "@/data/content";

export default function Sidebar() {
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
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex items-center gap-3 text-sm font-medium tracking-wide text-slate hover:text-lightest-slate focus-visible:text-lightest-slate transition-colors"
                >
                  <span className="h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-green" />
                  {String(i + 1).padStart(2, "0")}. {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="mt-10 flex gap-5 lg:mt-0">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-slate hover:text-green focus-visible:text-green transition-colors text-sm font-mono"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
