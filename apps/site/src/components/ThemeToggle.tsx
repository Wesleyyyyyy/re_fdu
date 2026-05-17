"use client";

import { useEffect, useState } from "react";

type Theme = "cool" | "warm";

const storageKey = "re-fudan-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("cool");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey) as Theme | null;
    const initial = saved === "warm" ? "warm" : "cool";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [mounted, theme]);

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setTheme(theme === "cool" ? "warm" : "cool")}
      aria-label={`Switch to ${theme === "cool" ? "warm" : "cool"} mode`}
    >
      <span className="theme-toggle__dot" aria-hidden="true" />
      <span>{mounted ? "THEME" : "THEME"}</span>
    </button>
  );
}
