import type { Metadata } from "next";
import CursorGlow from "@/components/CursorGlow";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jordan Avery — Software Engineer",
  description:
    "Jordan Avery is a software engineer who builds accessible, performant experiences for the web.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-navy text-slate selection:bg-green selection:text-navy">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
