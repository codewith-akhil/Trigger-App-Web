"use client";

import * as React from "react";
import { Wordmark } from "./primitives";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features", active: true },
  { label: "Live Streaming", href: "#streaming" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-[#eef2f0]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="flex h-[72px] items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="shrink-0">
            <Wordmark />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-[15px] font-medium transition-colors ${
                  item.active
                    ? "text-brand-dark"
                    : "text-muted-text hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#download"
              className="hidden sm:inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg px-5 py-2.5 text-[15px] shadow-[0_4px_14px_rgba(0,200,83,0.25)] transition-colors"
            >
              <DownloadIcon />
              Get Trigger
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#e5e7eb] text-ink"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                {mobileOpen ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav drawer */}
        {mobileOpen && (
          <div className="lg:hidden pb-5">
            <nav className="flex flex-col gap-1 border-t border-[#eef2f0] pt-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                    item.active
                      ? "bg-brand-mint-bg text-brand-dark"
                      : "text-muted-text hover:bg-[#f8fafc] hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg px-5 py-3 text-[15px] shadow-[0_4px_14px_rgba(0,200,83,0.25)]"
              >
                <DownloadIcon />
                Get Trigger
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
