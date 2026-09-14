"use client";

import { useEffect, useRef } from "react";

/**
 * A soft spotlight that follows the mouse. Rendered from the root layout so
 * it shows on every page. Sits behind all content (z -1) so it only tints
 * the background, tracks the cursor 1:1 with no lag, and stays off for
 * touch users and anyone preferring reduced motion.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let visible = false;

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      if (!visible) {
        visible = true;
        el.style.opacity = "1";
      }
    };

    const onPointerLeave = () => {
      visible = false;
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onPointerMove);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 -z-10 h-[32rem] w-[32rem] rounded-full opacity-0 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(circle, rgba(100, 255, 218, 0.08) 0%, rgba(100, 255, 218, 0.04) 40%, transparent 70%)",
      }}
    />
  );
}
