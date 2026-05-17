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
      aria-pressed={theme === "light"}
      className="relative inline-flex h-9 w-[4.75rem] shrink-0 items-center rounded-control border border-header-border bg-header-toggle-bg p-1 text-header-toggle-icon focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand"
    >
      <span aria-hidden="true" className="absolute left-1 top-1 text-current">
        <svg
          className="size-3.5 opacity-45"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </span>

      <span aria-hidden="true" className="absolute right-1 top-1 text-current">
        <svg
          className="size-3.5 opacity-45"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>

      <span
        aria-hidden="true"
        className={`relative size-6 rounded-full bg-brand-action transition-transform duration-200 ease-out ${
          theme === "dark"
            ? "translate-x-0"
            : "translate-x-[calc(100%+0.25rem)]"
        }`}
      />
    </button>
  );
}
