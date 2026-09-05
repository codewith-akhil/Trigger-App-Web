import * as React from "react";

/**
 * Trigger brand logo — green squircle with two overlapping white chat bubbles.
 * We render it from the provided 512x512 PNG asset, but also provide a CSS fallback
 * icon for cases where the asset shouldn't be loaded (e.g. small inline marks).
 */
export const LOGO_URL =
  "https://res.cloudinary.com/wxytzoo1/image/upload/v1788569847/LOGO_2.png";

export function Logo({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={LOGO_URL}
      alt="Trigger logo"
      width={size}
      height={size}
      className={`rounded-[22%] object-contain ${className}`}
      style={{ width: size, height: size }}
      loading="eager"
    />
  );
}

/** Brand wordmark — TRIGGER + Live · Chat · Call tagline */
export function Wordmark({
  showTagline = true,
  className = "",
  logoSize = 40,
  variant = "light",
}: {
  showTagline?: boolean;
  className?: string;
  logoSize?: number;
  variant?: "light" | "dark";
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo size={logoSize} />
      <div className="leading-tight">
        <div
          className={`font-extrabold tracking-tight text-[17px] ${
            variant === "light" ? "text-ink" : "text-white"
          }`}
        >
          TRIGGER
        </div>
        {showTagline && (
          <div
            className={`text-[11px] ${
              variant === "light" ? "text-muted-text" : "text-white/70"
            }`}
          >
            Live · Chat · Call
          </div>
        )}
      </div>
    </div>
  );
}

/** Small uppercase eyebrow label used above headlines */
export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-brand-dark font-semibold uppercase tracking-[0.18em] text-xs ${className}`}
    >
      {children}
    </div>
  );
}

/** Decorative handwritten-script accent text */
export function ScriptTag({
  children,
  className = "",
  rotate = -8,
}: {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <span
      className={`font-script text-brand-dark ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, display: "inline-block" }}
    >
      {children}
    </span>
  );
}

/** Primary green CTA button */
export function PrimaryButton({
  children,
  className = "",
  as: As = "button",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold rounded-xl px-6 py-3 text-[15px] shadow-[0_4px_14px_rgba(0,200,83,0.25)] transition-colors";
  if (As === "a") {
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    );
  }
  return <button className={`${base} ${className}`}>{children}</button>;
}

/** A "phone frame" — a realistic device shell with rounded corners + notch */
export function PhoneFrame({
  children,
  className = "",
  width = 280,
  screenClassName = "",
  dark = false,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  width?: number;
  screenClassName?: string;
  dark?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{
        width,
        borderRadius: 40,
        background: "#0b0f17",
        padding: 10,
        boxShadow:
          "0 25px 50px -12px rgba(0,0,0,0.28), 0 8px 18px -6px rgba(0,0,0,0.18)",
        ...style,
      }}
    >
      {/* notch */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[14px] z-20 rounded-full bg-black"
        style={{ width: 96, height: 22 }}
      />
      <div
        className={`relative overflow-hidden ${
          dark ? "bg-[#1f2937]" : "bg-white"
        } ${screenClassName}`}
        style={{
          borderRadius: 32,
          height: (width - 20) * 2.05,
        }}
      >
        {/* status bar */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5 pt-2.5 text-[11px] font-semibold text-ink/80">
          <span>12:30</span>
          <span className="flex items-center gap-1">
            <SignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

/* Tiny status bar icons */
function SignalIcon() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
      <rect x="0" y="7" width="2.5" height="3" rx="0.5" fill="currentColor" />
      <rect x="3.5" y="5" width="2.5" height="5" rx="0.5" fill="currentColor" />
      <rect x="7" y="3" width="2.5" height="7" rx="0.5" fill="currentColor" />
      <rect x="10.5" y="1" width="2.5" height="9" rx="0.5" fill="currentColor" />
    </svg>
  );
}
function WifiIcon() {
  return (
    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
      <path
        d="M6.5 9.5l1.7-2.1a2.1 2.1 0 0 0-3.4 0L6.5 9.5z"
        fill="currentColor"
      />
      <path
        d="M1 3.6a9 9 0 0 1 11 0M3 5.7a6 6 0 0 1 7 0"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
function BatteryIcon() {
  return (
    <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
      <rect
        x="0.5"
        y="0.5"
        width="18"
        height="9"
        rx="2"
        stroke="currentColor"
        opacity="0.5"
      />
      <rect x="2" y="2" width="14" height="6" rx="1" fill="currentColor" />
      <rect x="19.5" y="3" width="2" height="4" rx="1" fill="currentColor" />
    </svg>
  );
}

/** Small circular avatar (uses initials or emoji-free colored circle) */
export function Avatar({
  name,
  size = 36,
  color = "#10b981",
  online = false,
}: {
  name: string;
  size?: number;
  color?: string;
  online?: boolean;
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      <div
        className="flex items-center justify-center rounded-full text-white font-semibold"
        style={{
          width: size,
          height: size,
          background: `linear-gradient(135deg, ${color}, #064e3b)`,
          fontSize: size * 0.36,
        }}
      >
        {initials}
      </div>
      {online && (
        <span
          className="absolute bottom-0 right-0 rounded-full bg-brand ring-2 ring-white"
          style={{ width: size * 0.28, height: size * 0.28 }}
        />
      )}
    </div>
  );
}
