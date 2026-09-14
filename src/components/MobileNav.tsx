"use client";

import { useEffect, useRef, useState } from "react";
import { nav } from "@/data/content";
import { CloseIcon, MenuIcon } from "./icons";
import SocialLinks from "./SocialLinks";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Lock body scroll, move focus in, and wire Escape while the menu is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={menuButtonRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Open navigation menu"
        className={`fixed top-6 right-6 z-30 rounded p-2 text-slate hover:text-green focus-visible:text-green transition-colors lg:hidden ${
          open ? "invisible" : ""
        }`}
      >
        <MenuIcon size={26} />
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col bg-navy/95 backdrop-blur-sm lg:hidden"
      >
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            menuButtonRef.current?.focus();
          }}
          aria-label="Close navigation menu"
          className="absolute top-6 right-6 rounded p-2 text-slate hover:text-green focus-visible:text-green transition-colors"
        >
          <CloseIcon size={26} />
        </button>

        <nav
          aria-label="Mobile"
          className="flex flex-1 flex-col items-start justify-center gap-2 px-12"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              ref={item.href === nav[0].href ? firstLinkRef : undefined}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-3xl font-medium text-lightest-slate hover:text-green focus-visible:text-green transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <SocialLinks size={24} className="justify-center px-12 pb-12" />
      </div>
    </>
  );
}
