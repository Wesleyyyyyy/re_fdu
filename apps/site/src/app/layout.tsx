import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <header className="header">
          <div className="g">
            <div className="gc" style={{ minWidth: "14rem" }}>
              <div className="wordmark">
                <span className="wordmark-zh">复见</span>
                <span className="wordmark-en">RE:FUDAN</span>
              </div>
            </div>
            <div className="gc">
              <a className="nav-link" href="#demo">DEMO</a>
            </div>
            <div className="gc">
              <a className="nav-link" href="#features">FEATURES</a>
            </div>
            <div className="gc">
              <a className="nav-link" href="#interfaces">INTERFACES</a>
            </div>
            <div className="gc">
              <ThemeToggle />
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
