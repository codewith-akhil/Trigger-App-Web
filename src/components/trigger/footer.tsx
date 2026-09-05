import * as React from "react";
import { Logo, LOGO_URL } from "./primitives";

const COLUMNS = [
  {
    heading: "Who we are",
    links: [
      { label: "About us", href: "/?page=about" },
      { label: "Careers", href: "/?page=careers" },
      { label: "Upcoming Features", href: "#upcoming" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms and Conditions", href: "/?page=terms-conditions" },
      { label: "Privacy Policy", href: "/?page=privacy-policy" },
      { label: "Pricing Policy", href: "/?page=pricing-policy" },
    ],
  },
  {
    heading: "Need Help ?",
    links: [
      { label: "Contact us", href: "/?page=contact" },
      { label: "Report", href: "/?page=report" },
      { label: "Help Center", href: "/?page=help-center" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#062e21] text-white overflow-hidden"
    >
      {/* Decorative chat bubble shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-10 w-[460px] h-[460px] rounded-full bg-[#0d4a35] opacity-40 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-32 -bottom-20 w-[300px] h-[300px] rounded-[40%] bg-[#0d4a35] opacity-30 blur-2xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 py-14 lg:py-16">
        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <Logo size={48} />
              <div>
                <div className="text-[22px] font-extrabold tracking-tight">
                  TRIGGER
                </div>
                <div className="text-[13px] text-white/70">
                  Live • Chat • Call
                </div>
              </div>
            </div>

            {/* Google Play button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.trigger.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 border-2 border-brand rounded-xl px-5 py-2.5 hover:bg-white/5 transition-colors"
            >
              <GooglePlayIcon />
              <div className="text-left leading-tight">
                <div className="text-[10px] uppercase tracking-wider text-white/80">
                  Get it on
                </div>
                <div className="text-[16px] font-bold">Google Play</div>
              </div>
            </a>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8 lg:gap-10 lg:border-l lg:border-white/10 lg:pl-10">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[16px] sm:text-[18px] font-semibold text-white">
                  {col.heading}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[15px] text-white/85 hover:text-white transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[13px] text-white/80 text-center sm:text-left">
            © 2026 All rights reserved by Trigger App
            <span className="mx-2 opacity-50">·</span>
            Powered by Metric Flux Solutions
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { label: "Instagram", icon: <InstagramIcon /> },
              { label: "Facebook", icon: <FacebookIcon /> },
              { label: "X", icon: <XIcon /> },
              { label: "Threads", icon: <ThreadsIcon /> },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/30 hover:border-white hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Language selector */}
          <button className="inline-flex items-center gap-1.5 text-[13px] text-white/85 hover:text-white">
            English
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

function GooglePlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 3l9 9-9 9V3z" fill="#EA4335" />
      <path d="M3 3l13 7.5L13 12 3 3z" fill="#FBBC05" />
      <path d="M3 21l10-9 3 1.5L3 21z" fill="#34A853" />
      <path d="M14 11l4-2.3c.7-.4.7-1.4 0-1.8L14 5l-2 3 2 3z" fill="#EA4335" />
      <path d="M14 13l4 2.3c.7.4.7 1.4 0 1.8L14 19l-2-3 2-3z" fill="#34A853" />
      <path d="M3 3l9 9-9 9V3z" fill="#4285F4" opacity="0.85" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="white" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M13 22v-8h3l1-4h-4V8c0-1.2.3-2 2-2h2V2.1C18.7 2 17.3 2 16 2c-3 0-5 1.8-5 5.2V10H8v4h3v8h2z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
      <path d="M17.5 3h3l-7 8 8.5 10h-6.5l-5-6-5.5 6H2l7.5-9L2 3h6.5l4.5 5.5L17.5 3zm-1 16h1.7L7.6 4.7H5.8L16.5 19z" />
    </svg>
  );
}
function ThreadsIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path
        d="M16.5 11c-.2 0-.4 0-.6.1-.1-2.6-1.6-4.1-4-4.1-1.5 0-2.7.6-3.5 1.8l1.4 1c.6-.8 1.3-1.1 2.1-1.1 1.4 0 2.2.9 2.3 2.4-.6-.1-1.2-.2-1.8-.2-2.3 0-3.8 1.3-3.7 3 0 1.7 1.4 2.9 3.2 2.9 1.4 0 2.4-.6 3-1.6.5.9 1.4 1.4 2.6 1.6 0 0 .1 0 .1.1.3.7.7 1.1 1.4 1.1 1.1 0 1.8-.9 1.8-2.5 0-1.7-.9-3.6-2.2-4.7zm-4.5 5.1c-1 0-1.6-.5-1.6-1.3 0-.9.7-1.4 2-1.4.5 0 1 .1 1.5.2-.1 1.6-.9 2.5-1.9 2.5z"
        fill="white"
      />
    </svg>
  );
}
