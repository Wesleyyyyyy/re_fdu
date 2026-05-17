import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import "./globals.css";

const themeScript = `
(() => {
  const storageKey = "re-fudan-site-theme";
  const saved = window.localStorage.getItem(storageKey);
  const theme = saved === "light" || saved === "dark" ? saved : "dark";
  document.documentElement.setAttribute("data-theme", theme);
})();
`;

const headerCellClass =
  "flex min-h-[9rem] items-start px-4 py-4 sm:px-6 sm:py-5";
const headerLinkClass =
  "font-display text-[1.04rem] uppercase tracking-[0.18em] text-header-nav transition-colors hover:text-header-nav-hover";
const headerLabelClass =
  "font-display text-[0.98rem] uppercase tracking-[0.18em] text-header-nav";
const headerWordmarkChineseClass =
  "block text-[clamp(2rem,3.6vw,2.85rem)] leading-[0.78] tracking-[-0.08em] text-header-wordmark";
const headerWordmarkEnglishClass =
  "block font-heading text-[1.18rem] font-bold uppercase leading-none tracking-[0.18em] text-header-wordmark";
const githubHref = "https://github.com/abraxas914/re_fdu";

export const metadata: Metadata = {
  title: "RE:FUDAN | Your Experience, Before You Arrive",
  description:
    "A campus agent-native social system. Your agent meets them first. You follow when it matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="bg-canvas text-body antialiased">
        <Script id="re-fudan-theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <div className="relative">
          <header
            className="sticky top-0 z-50 border-b border-header-border backdrop-blur-md"
            style={{ backgroundColor: "var(--header-bg-scrolled)" }}
          >
            <div className="section-shell">
              <div className="grid border-l border-header-border md:grid-cols-[minmax(16rem,1.35fr)_repeat(5,minmax(0,1fr))] [&>*:last-child]:border-b-0 [&>*]:border-b [&>*]:border-header-border md:[&>*:last-child]:border-r-0 md:[&>*]:border-b-0 md:[&>*]:border-r">
                <div className={headerCellClass}>
                  <div className="flex flex-col items-start gap-0.5 pt-1 leading-none">
                    <span
                      className={headerWordmarkChineseClass}
                      style={{
                        fontFamily: '"FZCuSong", serif',
                        transform: "scaleX(0.96) scaleY(1.08)",
                        transformOrigin: "left top",
                      }}
                    >
                      复见
                    </span>
                    <span className={headerWordmarkEnglishClass}>RE:FUDAN</span>
                  </div>
                </div>
                <div className={headerCellClass}>
                  <a
                    className={`${headerLinkClass} pt-1`}
                    href="#demo"
                  >
                    Demo
                  </a>
                </div>
                <div className={headerCellClass}>
                  <a
                    className={`${headerLinkClass} pt-1`}
                    href="#features"
                  >
                    Features
                  </a>
                </div>
                <div className={headerCellClass}>
                  <a
                    className={`${headerLinkClass} pt-1`}
                    href="#interfaces"
                  >
                    Interfaces
                  </a>
                </div>
                <div className={headerCellClass}>
                  <div className="flex w-full items-start justify-between gap-4 pt-1">
                    <span className={headerLabelClass}>Socials</span>
                    <a
                      aria-label="GitHub repository"
                      className="inline-flex items-center justify-center text-header-nav transition-colors hover:text-header-nav-hover"
                      href={githubHref}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-[1.15rem] w-[1.15rem]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.477 2 2 6.58 2 12.25c0 4.54 2.865 8.396 6.839 9.757.5.096.682-.22.682-.489 0-.242-.01-.88-.015-1.727-2.782.617-3.37-1.372-3.37-1.372-.455-1.194-1.11-1.512-1.11-1.512-.908-.638.069-.625.069-.625 1.004.073 1.532 1.063 1.532 1.063.892 1.56 2.341 1.11 2.91.849.09-.66.349-1.11.635-1.366-2.22-.258-4.555-1.14-4.555-5.07 0-1.12.39-2.035 1.029-2.753-.103-.258-.446-1.298.099-2.706 0 0 .84-.275 2.75 1.052A9.27 9.27 0 0 1 12 6.84c.85.004 1.705.117 2.505.344 1.909-1.327 2.747-1.052 2.747-1.052.547 1.408.204 2.448.1 2.706.64.718 1.028 1.633 1.028 2.753 0 3.939-2.338 4.808-4.566 5.06.359.318.678.946.678 1.907 0 1.377-.012 2.488-.012 2.826 0 .272.18.591.688.487A10.27 10.27 0 0 0 22 12.25C22 6.58 17.523 2 12 2Z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className={headerCellClass}>
                  <div className="flex w-full items-start justify-between gap-4 pt-1">
                    <span className={headerLabelClass}>Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
