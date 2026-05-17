"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const storageKey = "re-fudan-site-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    const initial: Theme = saved === "light" ? "light" : "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(storageKey, theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() =>
        setTheme((current) => (current === "dark" ? "light" : "dark"))
      }
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="group inline-flex w-full items-center justify-between gap-3 border border-header-border bg-header-toggle-bg px-2 py-2 text-header-toggle-icon focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand"
    >
      <span className="font-display text-[0.72rem] uppercase tracking-[0.16em]">
        Theme
      </span>
      <span className="relative grid h-7 w-[5.4rem] grid-cols-2 items-center rounded-full border border-border bg-surface p-1">
        <span
          aria-hidden="true"
          className={`absolute top-1 h-5 w-[calc(50%-0.25rem)] rounded-full bg-brand-action transition-transform ${
            theme === "dark"
              ? "translate-x-0"
              : "translate-x-[calc(100%+0.25rem)]"
          }`}
        />
        <span
          className={`relative z-10 text-center font-heading text-[0.58rem] uppercase tracking-[0.16em] ${
            theme === "dark" ? "text-canvas" : "text-header-toggle-icon"
          }`}
        >
          Dark
        </span>
        <span
          className={`relative z-10 text-center font-heading text-[0.58rem] uppercase tracking-[0.16em] ${
            theme === "light" ? "text-canvas" : "text-header-toggle-icon"
          }`}
        >
          Light
        </span>
      </span>
    </button>
  );
}
