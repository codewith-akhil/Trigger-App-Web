import * as React from "react";
import { PhoneFrame, SectionLabel, ScriptTag, Avatar } from "./primitives";

const STATS = [
  { value: "50,000+", label: "Android Installs" },
  { value: "4.8 / 5.0", label: "User Rating" },
  { value: "18+", label: "Global Community" },
  { value: "", label: "Secure & Private" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-mint-bg via-white to-white"
    >
      {/* soft mint blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-brand-mint/40 blur-3xl"
      />
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column — content */}
          <div className="max-w-[560px]">
            <SectionLabel>Features</SectionLabel>
            <h1 className="mt-4 text-[40px] sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight text-ink">
              More ways to{" "}
              <span className="text-brand-dark">connect, express</span> and{" "}
              belong.
            </h1>
            <p className="mt-6 text-[17px] sm:text-[18px] leading-[1.65] text-body max-w-[520px]">
              Trigger brings together real-time communication, live streaming and
              social interaction in one powerful app. Discover all the features
              that make Trigger a global 18+ community.
            </p>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-6">
              {STATS.map((s) => (
                <div key={s.label}>
                  {s.value && (
                    <div className="text-[22px] font-bold text-ink">
                      {s.value}
                    </div>
                  )}
                  <div className="text-[14px] text-muted-text mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — three overlapping phones */}
          <div className="relative h-[460px] sm:h-[620px] flex items-center justify-center">
            {/* decorative script — pushed to far right edge, hidden on small screens */}
            <ScriptTag
              className="absolute right-0 top-1/2 -translate-y-1/2 text-xl xl:text-2xl z-20 hidden xl:block origin-center whitespace-nowrap"
              rotate={90}
            >
              Connect · Stream · Chat · Call · Be You
            </ScriptTag>

            {/* Back-left phone: chat list */}
            <div
              className="absolute left-1/2 top-1/2 hidden md:block"
              style={{
                transform:
                  "translate(-110%, -50%) rotate(-7deg) scale(0.85)",
                zIndex: 1,
              }}
            >
              <PhoneFrame width={240}>
                <ChatListScreen />
              </PhoneFrame>
            </div>

            {/* Back-right phone: video call */}
            <div
              className="absolute left-1/2 top-1/2 hidden md:block"
              style={{
                transform: "translate(10%, -50%) rotate(6deg) scale(0.85)",
                zIndex: 1,
              }}
            >
              <PhoneFrame width={240}>
                <VideoCallScreen />
              </PhoneFrame>
            </div>

            {/* Front-center phone: live stream — scaled down on mobile to fit */}
            <div
              className="relative z-10 origin-top scale-[0.7] sm:scale-100"
              style={{ transform: "translateY(-10px)" }}
            >
              <PhoneFrame width={280}>
                <LiveStreamScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Phone screens ---------- */

function LiveStreamScreen() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#0b3d2e] via-[#0b3d2e] to-black">
      {/* streamer bg */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#1f7a5c,transparent_60%),linear-gradient(180deg,#0b3d2e,#000)]" />
      {/* streamer face placeholder */}
      <div
        className="absolute left-1/2 top-[34%] -translate-x-1/2 w-32 h-32 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, #f1c8a8, #d99a73 60%, #7a4b32)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
        }}
      />
      {/* LIVE badge */}
      <div className="absolute top-10 left-3 flex items-center gap-1 bg-danger text-white text-[10px] font-bold px-2 py-1 rounded-md">
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        LIVE
      </div>
      {/* viewer count */}
      <div className="absolute top-10 right-3 bg-black/40 text-white text-[10px] font-semibold px-2 py-1 rounded-md">
        1.2K
      </div>
      {/* creator tag */}
      <div className="absolute left-3 bottom-24 flex items-center gap-2">
        <Avatar name="Riya Sharma" size={28} />
        <div className="text-white text-[11px] font-semibold">
          Riya ·{" "}
          <span className="text-brand-light font-medium">Following</span>
        </div>
      </div>
      {/* chat overlay */}
      <div className="absolute left-3 right-12 bottom-12 flex flex-col gap-1.5">
        {[
          { n: "Arjun", t: "Looking great 🔥" },
          { n: "Neha", t: "Hi from Mumbai!" },
          { n: "Rohan", t: "Send a gift 💝" },
        ].map((m, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 bg-black/35 rounded-full pl-1 pr-3 py-1 w-fit max-w-full"
          >
            <Avatar name={m.n} size={18} />
            <span className="text-white text-[10px] truncate">
              <span className="font-semibold">{m.n}</span>{" "}
              <span className="text-white/85">{m.t}</span>
            </span>
          </div>
        ))}
      </div>
      {/* action icons */}
      <div className="absolute right-3 bottom-12 flex flex-col items-center gap-3">
        <RoundBtn>
          <HeartIcon />
        </RoundBtn>
        <RoundBtn>
          <CommentIcon />
        </RoundBtn>
        <RoundBtn>
          <ShareIcon />
        </RoundBtn>
      </div>
    </div>
  );
}

function ChatListScreen() {
  const chats = [
    { n: "Ananya", m: "Typing...", t: "12:24", badge: 2, online: true },
    { n: "Riya", m: "Photo", t: "11:50", badge: 1 },
    { n: "Neha", m: "Voice message", t: "10:12" },
    { n: "Arjun", m: "Let's catch up later", t: "Yesterday" },
    { n: "Meera", m: "Missed video call", t: "Yesterday" },
  ];
  return (
    <div className="absolute inset-0 bg-white pt-8">
      {/* App header */}
      <div className="px-3 pb-2 pt-1 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-brand" />
          <span className="text-[12px] font-bold text-ink">TRIGGER</span>
        </div>
        <div className="flex items-center gap-2 text-ink">
          <SearchIcon />
          <HomeIcon />
        </div>
      </div>
      {/* Tabs */}
      <div className="flex items-center gap-4 px-3 text-[11px] font-medium border-b border-[#f1f5f4] pb-2">
        <span className="text-brand-dark border-b-2 border-brand pb-1">
          Chats
        </span>
        <span className="text-muted-text">Calls</span>
        <span className="text-muted-text">Live</span>
        <span className="text-muted-text">People</span>
      </div>
      {/* List */}
      <div className="px-3 pt-2 space-y-2.5">
        {chats.map((c) => (
          <div key={c.n} className="flex items-center gap-2.5">
            <Avatar name={c.n} size={32} online={c.online} color="#10b981" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold text-ink truncate">
                  {c.n}
                </span>
                <span className="text-[9px] text-faint">{c.t}</span>
              </div>
              <div className="text-[10px] text-muted-text truncate">
                {c.m}
              </div>
            </div>
            {c.badge && (
              <span className="inline-flex items-center justify-center min-w-[16px] h-[16px] px-1 rounded-full bg-brand text-white text-[9px] font-bold">
                {c.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function VideoCallScreen() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#1f2937] to-black">
      {/* caller face */}
      <div
        className="absolute left-1/2 top-[28%] -translate-x-1/2 w-28 h-28 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, #f1c8a8, #d99a73 60%, #7a4b32)",
        }}
      />
      <div className="absolute top-12 left-0 right-0 text-center">
        <div className="text-white text-[13px] font-semibold">Riya</div>
        <div className="text-white/70 text-[10px]">00:34</div>
      </div>
      {/* bottom controls */}
      <div className="absolute left-0 right-0 bottom-6 flex items-center justify-center gap-3">
        <RoundBtn dark>
          <MicIcon />
        </RoundBtn>
        <RoundBtn dark>
          <VideoIcon />
        </RoundBtn>
        <RoundBtn dark>
          <SpeakerIcon />
        </RoundBtn>
        <RoundBtn danger>
          <PhoneHangIcon />
        </RoundBtn>
      </div>
    </div>
  );
}

/* tiny icons */
function RoundBtn({
  children,
  dark,
  danger,
}: {
  children: React.ReactNode;
  dark?: boolean;
  danger?: boolean;
}) {
  const cls = danger
    ? "bg-danger"
    : dark
    ? "bg-white/15 text-white"
    : "bg-white/15 text-white backdrop-blur";
  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center ${cls}`}
    >
      {children}
    </div>
  );
}
function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff5a7a">
      <path d="M12 21s-7-4.5-9.5-9A5.2 5.2 0 0 1 12 6a5.2 5.2 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}
function CommentIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 12a8 8 0 0 1-11.2 7.3L4 21l1.7-5.8A8 8 0 1 1 21 12z"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}
function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v14"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
function HomeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MicIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="3" width="6" height="11" rx="3" stroke="white" strokeWidth="2" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="white" strokeWidth="2" />
    </svg>
  );
}
function VideoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="13" height="10" rx="2" stroke="white" strokeWidth="2" />
      <path d="M16 10l5-3v10l-5-3z" stroke="white" strokeWidth="2" />
    </svg>
  );
}
function SpeakerIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 9v6h4l5 4V5l-5 4H4z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16 9a4 4 0 0 1 0 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function PhoneHangIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
      <path d="M12 9c-3 0-6 .5-7 1.5S3 13 3 14v3a1 1 0 0 0 1 1l3-1a1 1 0 0 0 .7-1L8 14c1-.5 3-.5 4 0l1.3 2a1 1 0 0 0 .7.4l3 1a1 1 0 0 0 1-1v-3c0-1-.5-2-1.5-2.5S15 9 12 9z" />
    </svg>
  );
}
