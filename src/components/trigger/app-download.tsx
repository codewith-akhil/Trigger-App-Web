"use client";

import * as React from "react";
import QR from "qrcode";
import { PhoneFrame, SectionLabel, ScriptTag, Logo, Avatar } from "./primitives";

const FEATURES = [
  {
    icon: <BoltIcon />,
    title: "Fast & Secure",
    desc: "Smooth and reliable experience",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "100% Private",
    desc: "Your safety matters",
  },
  {
    icon: <UsersIcon />,
    title: "Global Community",
    desc: "Meet real people worldwide",
  },
  {
    icon: <DownloadIcon />,
    title: "Regular Updates",
    desc: "New features and improvements",
  },
];

export function AppDownloadSection() {
  return (
    <section
      id="download"
      className="bg-gradient-to-b from-brand-mint-bg to-brand-mint-soft py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* abstract blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-10 w-[440px] h-[440px] rounded-full bg-brand-mint/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 w-[440px] h-[440px] rounded-full bg-brand-mint/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div>
            <SectionLabel>Ready to Connect?</SectionLabel>
            <h2 className="mt-3 text-[40px] sm:text-[52px] lg:text-[60px] font-extrabold leading-[1.05] text-ink">
              Download Trigger
              <br />
              <span className="text-brand-dark">on Google Play</span>
            </h2>
            <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.65] text-body max-w-[520px]">
              Join a global 18+ community. Chat, call, stream and be part of
              something real. Real people. Real conversations. Real connections.
            </p>

            {/* Feature grid */}
            <div className="mt-10 grid sm:grid-cols-2 gap-5 max-w-[520px]">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-full bg-brand-mint flex items-center justify-center text-brand-dark shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-ink">
                      {f.title}
                    </div>
                    <div className="text-[13px] text-muted-text leading-snug">
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="https://play.google.com/store/apps/details?id=com.trigger.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-dark hover:bg-[#047857] text-white rounded-2xl px-6 py-3.5 shadow-[0_8px_24px_rgba(5,150,105,0.3)]"
              >
                <GooglePlayIcon />
                <div className="text-left leading-tight">
                  <div className="text-[11px] opacity-90 uppercase tracking-wide">
                    Get it on
                  </div>
                  <div className="text-[18px] font-bold">Google Play</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14m0 0l-6-6m6 6l-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* QR */}
              <div className="flex items-center gap-3">
                <div className="w-[88px] h-[88px] bg-white rounded-xl p-2 shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
                  <QRCode url="https://play.google.com/store/apps/details?id=com.trigger.app" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-ink">
                    Scan QR Code
                  </div>
                  <div className="text-[13px] text-muted-text">
                    to download Trigger app
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: two phones */}
          <div className="relative h-[520px] sm:h-[580px] flex items-center justify-center">
            <ScriptTag
              className="absolute right-2 top-4 text-2xl hidden sm:block z-20"
              rotate={8}
            >
              Same App Different Stories
            </ScriptTag>

            {/* Back phone: splash */}
            <div
              className="absolute hidden md:block"
              style={{
                transform: "translate(-30%, 0) rotate(-6deg) scale(0.9)",
                zIndex: 1,
              }}
            >
              <PhoneFrame width={250}>
                <SplashScreen />
              </PhoneFrame>
            </div>

            {/* Front phone: chat list */}
            <div
              className="relative z-10"
              style={{ transform: "translate(15%, 0) rotate(3deg)" }}
            >
              <PhoneFrame width={270}>
                <AppChatListScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SplashScreen() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark to-brand-darker flex flex-col items-center justify-center text-white">
      <Logo size={84} />
      <div className="mt-4 text-[26px] font-extrabold tracking-tight">
        TRIGGER
      </div>
      <div className="mt-1 text-[13px] opacity-90 tracking-wider">
        Live · Chat · Call
      </div>
      <div className="mt-12">
        <ScriptTag className="text-2xl text-white" rotate={-6}>
          Real Connections Always
        </ScriptTag>
      </div>
    </div>
  );
}

function AppChatListScreen() {
  const chats = [
    { n: "Ananya", m: "Hey! are you online?", t: "12:24", badge: 2, online: true },
    { n: "Riya", m: "Sent a photo", t: "11:50", badge: 1 },
    { n: "Sneha", m: "Voice message", t: "10:12" },
    { n: "Arjun", m: "Let's catch up later", t: "Yesterday" },
    { n: "Meera", m: "Missed video call", t: "Yesterday" },
    { n: "Team Trigger", m: "Welcome to Trigger!", t: "Yesterday" },
    { n: "Priya", m: "Shared a location", t: "2d" },
  ];
  return (
    <div className="absolute inset-0 bg-white pt-8">
      {/* dark header */}
      <div className="bg-brand-darker text-white px-3 py-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded bg-brand" />
          <span className="text-[11px] font-bold">TRIGGER</span>
        </div>
        <div className="flex items-center gap-2">
          <SearchIcon />
          <BellIcon />
        </div>
      </div>
      {/* tabs */}
      <div className="flex items-center gap-4 px-3 text-[11px] font-medium border-b border-[#f1f5f4] py-2">
        <span className="text-brand-dark border-b-2 border-brand pb-0.5">Chats</span>
        <span className="text-muted-text">Calls</span>
        <span className="text-muted-text">Live</span>
        <span className="text-muted-text">People</span>
      </div>
      <div className="px-3 pt-2 space-y-2.5">
        {chats.map((c, i) => (
          <div key={c.n} className="flex items-center gap-2.5">
            <Avatar
              name={c.n}
              size={30}
              online={c.online}
              color={["#10b981", "#3b82f6", "#f59e0b", "#ec4899", "#8b5cf6", "#06b6d4", "#ef4444"][i % 7]}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-ink truncate">
                  {c.n}
                </span>
                <span className="text-[9px] text-faint">{c.t}</span>
              </div>
              <div className="text-[9px] text-muted-text truncate">{c.m}</div>
            </div>
            {c.badge && (
              <span className="inline-flex items-center justify-center min-w-[15px] h-[15px] px-1 rounded-full bg-brand text-white text-[8px] font-bold">
                {c.badge}
              </span>
            )}
          </div>
        ))}
      </div>
      {/* bottom nav */}
      <div className="absolute left-0 right-0 bottom-0 bg-white border-t border-[#eef2f0] flex items-center justify-between px-4 py-2">
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-brand-dark">
            <ChatIcon />
          </span>
          <span className="text-[8px] text-brand-dark font-medium">Chats</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-faint">
            <PhoneIconSm />
          </span>
          <span className="text-[8px] text-faint">Calls</span>
        </div>
        <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white -mt-3 shadow-lg">
          <PlusIcon />
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-faint">
            <CameraIconSm />
          </span>
          <span className="text-[8px] text-faint">Live</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <span className="text-faint">
            <UserIconSm />
          </span>
          <span className="text-[8px] text-faint">Profile</span>
        </div>
      </div>
    </div>
  );
}

function QRCode({ url }: { url: string }) {
  const [dataUrl, setDataUrl] = React.useState<string>("");
  React.useEffect(() => {
    QR.toDataURL(url, {
      margin: 0,
      width: 200,
      color: { dark: "#0f172a", light: "#ffffff" },
      errorCorrectionLevel: "M",
    })
      .then(setDataUrl)
      .catch(() => setDataUrl(""));
  }, [url]);
  if (!dataUrl) {
    // skeleton while generating
    return <div className="w-full h-full bg-[#f1f5f4] animate-pulse rounded" />;
  }
  return (
    <img
      src={dataUrl}
      alt="QR code linking to Trigger on Google Play"
      className="w-full h-full object-contain"
    />
  );
}

/* icons */
function BoltIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ShieldCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M18 20a6 6 0 0 0-3-5.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
function GooglePlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M3 3l9 9-9 9V3z" fill="#EA4335" />
      <path d="M3 3l13 7.5L13 12 3 3z" fill="#FBBC05" />
      <path d="M3 21l10-9 3 1.5L3 21z" fill="#34A853" />
      <path
        d="M3 3l13 7.5c1 .6 1 1.8 0 2.4L13 12 3 21c-.4-.2-.6-.6-.6-1.1V4.1c0-.5.2-.9.6-1.1z"
        fill="#4285F4"
        opacity="0.0"
      />
      <path d="M14 11l4-2.3c.7-.4.7-1.4 0-1.8L14 5l-2 3 2 3z" fill="#EA4335" />
      <path d="M14 13l4 2.3c.7.4.7 1.4 0 1.8L14 19l-2-3 2-3z" fill="#34A853" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21l-4-4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6zM10 19a2 2 0 0 0 4 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 12a8 8 0 0 1-11.2 7.3L4 21l1.7-5.8A8 8 0 1 1 21 12z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function PhoneIconSm() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function CameraIconSm() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 10l5-3v10l-5-3z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function UserIconSm() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
