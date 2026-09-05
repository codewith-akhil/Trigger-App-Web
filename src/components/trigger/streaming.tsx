import * as React from "react";
import { SectionLabel, ScriptTag, Avatar, PhoneImageFrame } from "./primitives";

type Column = {
  badge: string;
  badgeTone: "green" | "red" | "blue";
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  features: string[];
  cta: string;
  ctaTone: "green" | "red" | "blue";
};

const COLUMNS: Column[] = [
  {
    badge: "FREE",
    badgeTone: "green",
    title: "Free Live Stream",
    desc: "Go live instantly and connect with anyone, anytime. Share your moments, interact with your audience and grow your community.",
    image: "/images/streaming/free-stream.png",
    imageAlt:
      "Smartphone showing a free live stream interface with LIVE badge, viewer count, and chat overlay",
    features: [
      "No payment required",
      "Unlimited live streaming",
      "Real-time chat with viewers",
      "Gifts and support",
      "Perfect for casual and community streams",
    ],
    cta: "Start Free Stream",
    ctaTone: "green",
  },
  {
    badge: "PAID",
    badgeTone: "red",
    title: "Paid Live Stream",
    desc: "Monetize your content with exclusive live streams. Set your own price and give your audience a premium experience.",
    image: "/images/streaming/paid-stream.png",
    imageAlt:
      "Smartphone showing a paid live stream interface with PAID badge, lock icon, price card, and Pay & Join button",
    features: [
      "Set your own price",
      "Earn from your content",
      "Exclusive access for viewers",
      "Real-time chat and reactions",
      "Build a loyal audience",
      "Transparent earnings",
    ],
    cta: "Create Paid Stream",
    ctaTone: "red",
  },
  {
    badge: "SCHEDULE",
    badgeTone: "blue",
    title: "Schedule Live Stream",
    desc: "Plan your live streams in advance and let your audience know. Build excitement, get notifications and reach more viewers.",
    image: "/images/streaming/schedule-stream.png",
    imageAlt:
      "Smartphone showing a schedule live stream form with title, date, time fields, and Schedule Stream button",
    features: [
      "Schedule date & time",
      "Notify your followers",
      "Perfect for events, Q&A, special sessions",
      "Supports free or paid streams",
      "Auto reminders for viewers",
    ],
    cta: "Schedule Stream",
    ctaTone: "blue",
  },
];

const toneStyles = {
  green: {
    badgeBg: "bg-brand-mint",
    badgeText: "text-brand-dark",
    check: "#10b981",
    btn: "bg-brand hover:bg-brand-dark",
  },
  red: {
    badgeBg: "bg-[#fee2e2]",
    badgeText: "text-[#b91c1c]",
    check: "#ef4444",
    btn: "bg-danger hover:bg-[#dc2626]",
  },
  blue: {
    badgeBg: "bg-[#dbeafe]",
    badgeText: "text-[#1d4ed8]",
    check: "#3b82f6",
    btn: "bg-info hover:bg-[#2563eb]",
  },
};

export function StreamingSection() {
  return (
    <section id="streaming" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Header */}
        <div className="relative">
          <SectionLabel>Live Streaming</SectionLabel>
          <h2 className="mt-3 text-[36px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.1] text-ink max-w-[760px]">
            Stream Your Way{" "}
            <span className="text-brand-dark">Free, Paid or Scheduled.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.65] text-body max-w-[640px]">
            Go live instantly, monetize your content, or plan ahead. Trigger
            gives you the flexibility to connect with your audience the way you
            want.
          </p>

          {/* decorative script */}
          <ScriptTag
            className="hidden lg:block absolute right-0 top-2 text-2xl xl:text-3xl"
            rotate={-6}
          >
            Create · Connect · Grow
          </ScriptTag>
          <ScriptTag
            className="hidden lg:block absolute right-4 top-16 text-xl"
            rotate={6}
          >
            Same App Different Stories
          </ScriptTag>
        </div>

        {/* Three columns */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
          {COLUMNS.map((col) => (
            <StreamColumn key={col.title} col={col} />
          ))}
        </div>

        {/* For Creators bottom */}
        <CreatorsBlock />

        {/* Footer quote */}
        <div className="mt-16 flex items-center gap-6">
          <div className="flex-1 h-px bg-[#e5e7eb]" />
          <p className="italic text-[15px] sm:text-[17px] text-muted-text text-center">
            “Real people. Real conversations. Real connections.”
          </p>
          <div className="flex-1 h-px bg-[#e5e7eb]" />
        </div>
      </div>
    </section>
  );
}

function StreamColumn({ col }: { col: Column }) {
  const tone = toneStyles[col.badgeTone];
  return (
    <article className="bg-[#fafafa] border border-[#f3f4f6] rounded-2xl p-6 flex flex-col">
      {/* Badge */}
      <div
        className={`inline-flex items-center gap-1.5 ${tone.badgeBg} ${tone.badgeText} text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-1 w-fit`}
      >
        {col.badge === "PAID" && <CrownIcon />}
        {col.badge === "SCHEDULE" && <CalendarIcon />}
        {col.badge}
      </div>
      <h3 className="mt-3 text-[22px] font-bold text-ink">{col.title}</h3>
      <p className="mt-2 text-[14px] leading-[1.65] text-muted-text">
        {col.desc}
      </p>

      {/* Phone image */}
      <div className="mt-6 flex justify-center">
        <PhoneImageFrame
          src={col.image}
          alt={col.imageAlt}
          width={180}
        />
      </div>

      {/* Feature list */}
      <ul className="mt-6 space-y-2.5">
        {col.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[14px] text-ink">
            <span
              className="mt-0.5 shrink-0 inline-flex items-center justify-center w-4 h-4 rounded-full"
              style={{ background: tone.check }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12l4 4 10-10"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#streaming"
        className={`mt-6 inline-flex items-center justify-center gap-2 ${tone.btn} text-white font-semibold rounded-xl px-5 py-3 text-[14px] shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-colors`}
      >
        {col.cta}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14m0 0l-6-6m6 6l-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </article>
  );
}

function CreatorsBlock() {
  return (
    <div className="mt-16 bg-brand-mint-bg rounded-3xl p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <SectionLabel>For Creators</SectionLabel>
        <h3 className="mt-3 text-[30px] sm:text-[36px] font-extrabold leading-[1.15] text-ink">
          More Control. More Possibilities.
        </h3>
        <p className="mt-4 text-[16px] leading-[1.65] text-body max-w-[480px]">
          Whether it’s a spontaneous chat, an exclusive paid session, or a
          well-planned event — Trigger gives creators the tools to engage, grow
          and earn.
        </p>
        <a
          href="#streaming"
          className="mt-6 inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold rounded-xl px-6 py-3 text-[15px] shadow-[0_4px_14px_rgba(0,200,83,0.25)]"
        >
          <CameraIcon />
          Start Streaming Today
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14m0 0l-6-6m6 6l-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <ScriptTag className="block mt-4 text-xl">Stream Your Story</ScriptTag>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { icon: <ChartIcon />, title: "Engage Your Audience", desc: "Chat, interact and build a loyal community." },
          { icon: <RupeeIcon />, title: "Earn From Your Content", desc: "Monetize with paid live streams and gifts." },
          { icon: <CalendarIcon2 />, title: "Plan For Bigger Moments", desc: "Schedule streams and reach more viewers." },
        ].map((c) => (
          <div
            key={c.title}
            className="bg-white rounded-2xl p-5 border border-[#eef2f0]"
          >
            <div className="w-11 h-11 rounded-full bg-brand-mint flex items-center justify-center text-brand-dark">
              {c.icon}
            </div>
            <div className="mt-3 text-[15px] font-bold text-ink">{c.title}</div>
            <div className="mt-1 text-[12px] text-muted-text leading-snug">
              {c.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----- icons ----- */
function CrownIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 7l4 4 5-6 5 6 4-4-2 12H5L3 7z" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function CameraIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 10l5-3v10l-5-3z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 20V4M4 20h16M8 16l3-4 3 2 4-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function RupeeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 4h10M7 9h10M9 4c4 0 6 2 6 5s-2 5-6 5H8l8 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CalendarIcon2() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function LockMini() {
  return (
    <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
      <path d="M6 10V8a6 6 0 1 1 12 0v2h1v11H5V10h1zm2 0h8V8a4 4 0 1 0-8 0v2z" />
    </svg>
  );
}
