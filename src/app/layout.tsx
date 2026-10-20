import type { Metadata } from "next";
import CursorGlow from "@/components/CursorGlow";
import { availability, profile } from "@/data/content";
import "./globals.css";

// This is what shows in search results, browser tabs and link previews, so it
// leads with the role being hired for and the stack recruiters search on.
export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: `${profile.title} in ${profile.location} building accessible, performant web apps with React, Next.js and TypeScript. Open to ${availability.roles.join(", ")} roles.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className="h-full scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full bg-navy text-slate selection:bg-green selection:text-navy">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
