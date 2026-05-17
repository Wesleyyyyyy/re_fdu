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
        <div
          className="pointer-events-none fixed inset-0 z-[2] overflow-hidden"
          style={{ mixBlendMode: "difference", opacity: 0.06 }}
        >
          <img
            src="/assets/hero-bg.webp"
            alt=""
            aria-hidden="true"
            className="h-[150dvh] w-auto min-w-[100dvw] object-cover object-left-top invert"
          />
        </div>

        <div className="relative z-10">
          <header
            className="sticky top-0 z-50 border-b border-header-border backdrop-blur-md"
            style={{ backgroundColor: "var(--header-bg-scrolled)" }}
          >
            <div className="section-shell">
              <div className="grid border-l border-header-border md:grid-cols-[minmax(16rem,1.45fr)_repeat(4,minmax(0,1fr))] [&>*:last-child]:border-b-0 [&>*]:border-b [&>*]:border-header-border md:[&>*:last-child]:border-r-0 md:[&>*]:border-b-0 md:[&>*]:border-r">
                <div className="flex min-h-[5.25rem] items-center px-4 py-4 sm:px-6">
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-[clamp(1.9rem,4vw,2.8rem)] leading-none tracking-[-0.08em] text-header-logo"
                      style={{ fontFamily: '"FZCuSong", serif' }}
                    >
                      复见
                    </span>
                    <span className="font-heading text-[0.72rem] uppercase tracking-[0.28em] text-header-logo">
                      RE:FUDAN
                    </span>
                  </div>
                </div>
                <div className="flex min-h-[5.25rem] items-center px-4 py-4 sm:px-6">
                  <a
                    className="font-heading-compressed text-[0.78rem] uppercase tracking-[0.18em] text-header-nav transition-colors hover:text-header-nav-hover"
                    href="#demo"
                  >
                    Demo
                  </a>
                </div>
                <div className="flex min-h-[5.25rem] items-center px-4 py-4 sm:px-6">
                  <a
                    className="font-heading-compressed text-[0.78rem] uppercase tracking-[0.18em] text-header-nav transition-colors hover:text-header-nav-hover"
                    href="#features"
                  >
                    Features
                  </a>
                </div>
                <div className="flex min-h-[5.25rem] items-center px-4 py-4 sm:px-6">
                  <a
                    className="font-heading-compressed text-[0.78rem] uppercase tracking-[0.18em] text-header-nav transition-colors hover:text-header-nav-hover"
                    href="#interfaces"
                  >
                    Interfaces
                  </a>
                </div>
                <div className="flex min-h-[5.25rem] items-center px-4 py-4 sm:px-6">
                  <ThemeToggle />
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
