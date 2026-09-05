import * as React from "react";
import { PhoneFrame, SectionLabel, ScriptTag, Avatar } from "./primitives";

type Card = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  imageAlt: string;
};

const CARDS: Card[] = [
  {
    title: "Secure Photo & Video Sharing",
    desc: "Share photos and videos with OneShort-style secure viewing. Media is protected and cannot be easily saved or screenshotted.",
    tags: ["Secure View", "Screenshot Prevention", "Auto Expire"],
    image: "/images/chat-features/secure-media.png",
    imageAlt:
      "Smartphone gallery protected by a green shield indicating secure photo and video viewing",
  },
  {
    title: "Screenshot Prevention",
    desc: "Advanced protection to prevent screenshots and screen recording, keeping your conversations and media safe.",
    tags: ["Block Screenshots", "Block Screen Recording", "Your Privacy Matters"],
    image: "/images/chat-features/screenshot-block.png",
    imageAlt:
      "Smartphone with a red prohibition icon over a screenshot button indicating screenshot blocking",
  },
  {
    title: "Clear Messages Both Ends",
    desc: "Delete messages for everyone anytime. Keep your conversations in your control with full privacy.",
    tags: ["Delete for Everyone", "No Traces", "Chat with Confidence"],
    image: "/images/chat-features/clear-messages.png",
    imageAlt:
      "Chat message bubble with a trash icon showing delete for everyone functionality",
  },
  {
    title: "Audio & Video Calls",
    desc: "Enjoy high-quality 1-on-1 audio and video calls with crystal-clear sound and smooth performance.",
    tags: ["HD Quality", "Low Latency", "Private & Secure"],
    image: "/images/chat-features/calls.png",
    imageAlt:
      "Smartphone showing a video call interface with two avatars and green call controls",
  },
  {
    title: "Voice Messages",
    desc: "Express more with voice messages. Share your thoughts instantly, anytime.",
    tags: ["High Quality Audio", "Fast & Reliable", "Real Conversations"],
    image: "/images/chat-features/voice-messages.png",
    imageAlt:
      "Voice message player UI with a green play button and audio waveform visualization",
  },
  {
    title: "Location Sharing",
    desc: "Share your live location or current location with trusted contacts when needed.",
    tags: ["Live Location", "Current Location", "Share with Control"],
    image: "/images/chat-features/location-sharing.png",
    imageAlt:
      "Smartphone map interface with a green location pin marker showing live location sharing",
  },
];

export function ChatSection() {
  return (
    <section
      id="chat"
      className="bg-[#f8fdf9] py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <SectionLabel>Private Messaging</SectionLabel>
            <h2 className="mt-3 text-[44px] sm:text-[56px] font-extrabold leading-[1.08] text-ink">
              Chat Freely,
              <br />
              <span className="text-brand-dark">Share Securely.</span>
            </h2>
            <p className="mt-5 text-[17px] sm:text-[18px] leading-[1.65] text-body max-w-[540px]">
              Stay connected with real people through instant and secure
              messaging. Share photos, videos, voice messages, make audio and
              video calls, share your location and more — all with advanced
              privacy features designed for your safety.
            </p>

            {/* Feature icons row */}
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
              {[
                { icon: <ShieldCheckIcon />, title: "Secure Conversations", sub: "Your privacy first" },
                { icon: <LockIcon />, title: "Screenshot Protection", sub: "Extra safety layer" },
                { icon: <BoltIcon />, title: "Clear Messages Both Ends", sub: "Cleared for everyone" },
              ].map((f) => (
                <div key={f.title} className="max-w-[180px]">
                  <div className="w-12 h-12 rounded-full bg-brand-mint flex items-center justify-center text-brand-dark">
                    {f.icon}
                  </div>
                  <div className="mt-3 text-[15px] font-bold text-ink">
                    {f.title}
                  </div>
                  <div className="text-[13px] text-muted-text">{f.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: two overlapping phones */}
          <div className="relative h-[480px] sm:h-[520px] flex items-center justify-center">
            <ScriptTag
              className="absolute right-2 top-2 text-2xl hidden sm:block z-20"
              rotate={8}
            >
              Real Conversations
              <br />
              Real Connections
            </ScriptTag>
            {/* decorative blob */}
            <div
              aria-hidden
              className="absolute right-1/4 top-1/4 w-72 h-72 rounded-full bg-brand-mint/40 blur-3xl"
            />
            {/* Left phone: chat list */}
            <div
              className="absolute hidden md:block"
              style={{
                transform: "translate(-30%, 0) rotate(-5deg)",
                zIndex: 1,
              }}
            >
              <PhoneFrame width={240}>
                <ChatListScreen />
              </PhoneFrame>
            </div>
            {/* Right phone: conversation */}
            <div
              className="absolute"
              style={{
                transform: "translate(15%, 0) rotate(4deg)",
                zIndex: 2,
              }}
            >
              <PhoneFrame width={250}>
                <ConversationScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>

        {/* Feature grid (6 cards) */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((c) => (
            <Card key={c.title} card={c} />
          ))}
        </div>

        {/* CTA footer */}
        <div className="mt-16 bg-brand-mint-bg rounded-3xl p-8 lg:p-10 grid lg:grid-cols-2 gap-6 items-center">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-brand-mint flex items-center justify-center text-brand-dark shrink-0">
              <ShieldCheckIcon big />
            </div>
            <div>
              <h3 className="text-[22px] font-bold text-ink">
                Your Privacy, Our Priority
              </h3>
              <p className="mt-2 text-[15px] text-body max-w-[500px] leading-relaxed">
                We use advanced security measures to keep your chats, media and
                personal information safe. Chat, share and connect with
                confidence on Trigger.
              </p>
            </div>
          </div>
          <div className="flex lg:justify-end items-center gap-6">
            <a
              href="#download"
              className="inline-flex items-center gap-2 bg-brand-dark hover:bg-[#047857] text-white font-semibold rounded-xl px-6 py-3 text-[15px] shadow-[0_4px_14px_rgba(5,150,105,0.3)]"
            >
              <CameraIcon />
              Start Chatting Now
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
            <ScriptTag className="hidden lg:block text-xl" rotate={-6}>
              Chat · Share · Connect
            </ScriptTag>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ card }: { card: Card }) {
  return (
    <article className="bg-white rounded-2xl p-6 border border-[#eef2f0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
      {/* Square feature image — unique per card, content-related */}
      <div className="mb-5 flex justify-center">
        <div className="relative w-full aspect-square max-w-[220px] rounded-xl overflow-hidden bg-brand-mint-bg border border-[#eef2f0]">
          <img
            src={card.image}
            alt={card.imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <h3 className="text-[19px] font-bold text-ink leading-snug">
        {card.title}
      </h3>
      <p className="mt-2 text-[14px] leading-[1.65] text-muted-text">
        {card.desc}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {card.tags.map((t) => (
          <span
            key={t}
            className="inline-flex items-center text-[12px] font-medium text-[#065f46] bg-brand-mint rounded-full px-3 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

/* ---- chat phone screens ---- */
function ChatListScreen() {
  const chats = [
    { n: "Ananya", m: "Typing...", t: "12:24", badge: 2, online: true },
    { n: "Riya", m: "Photo", t: "11:50", badge: 1 },
    { n: "Neha", m: "Voice message", t: "10:12" },
    { n: "Arjun", m: "Let's catch up later", t: "Yesterday" },
    { n: "Meera", m: "Missed video call", t: "Yesterday" },
    { n: "Team Trigger", m: "Welcome to Trigger!", t: "Yesterday" },
    { n: "Priya", m: "Shared a location", t: "2d" },
  ];
  return (
    <div className="absolute inset-0 bg-white pt-8">
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
      <div className="flex items-center gap-4 px-3 text-[11px] font-medium border-b border-[#f1f5f4] pb-2">
        <span className="text-brand-dark border-b-2 border-brand pb-1">Chats</span>
        <span className="text-muted-text">Calls</span>
        <span className="text-muted-text">Live</span>
        <span className="text-muted-text">People</span>
      </div>
      <div className="px-3 pt-2 space-y-2.5">
        {chats.map((c) => (
          <div key={c.n} className="flex items-center gap-2.5">
            <Avatar name={c.n} size={32} online={c.online} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold text-ink truncate">
                  {c.n}
                </span>
                <span className="text-[9px] text-faint">{c.t}</span>
              </div>
              <div className="text-[10px] text-muted-text truncate">{c.m}</div>
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

function ConversationScreen() {
  return (
    <div className="absolute inset-0 bg-[#f8fafc] pt-8">
      {/* header */}
      <div className="bg-white px-3 py-2 flex items-center gap-2 border-b border-[#eef2f0]">
        <span className="text-ink text-[14px]">‹</span>
        <Avatar name="Ananya" size={26} online />
        <div className="flex-1">
          <div className="text-[12px] font-bold text-ink">Ananya</div>
          <div className="text-[9px] text-brand-dark">Online</div>
        </div>
        <PhoneIcon />
        <VideoIconSm />
        <DotsIcon />
      </div>
      {/* chat bubbles */}
      <div className="px-3 py-3 space-y-2">
        <Bubble side="in" time="12:40 PM">
          Hey! Are you free tonight?
        </Bubble>
        <Bubble side="out" time="12:41 PM">
          Yes! 😊
        </Bubble>
        <MediaCard
          label="Photo · Secure View"
          time="12:42 PM"
        />
        <Bubble side="in" time="12:43 PM">
          This looks amazing! 🤩
        </Bubble>
        <VoiceBubble time="12:44 PM" />
        <LocationCard time="12:45 PM" />
      </div>
      {/* input */}
      <div className="absolute left-0 right-0 bottom-0 bg-white border-t border-[#eef2f0] px-3 py-2 flex items-center gap-2">
        <PaperclipIcon />
        <div className="flex-1 bg-[#f1f5f4] rounded-full px-3 py-1.5 text-[11px] text-muted-text">
          Type a message...
        </div>
        <CameraIconSm />
        <div className="w-7 h-7 rounded-full bg-brand flex items-center justify-center text-white">
          <MicIconSm />
        </div>
      </div>
    </div>
  );
}

function Bubble({
  side,
  time,
  children,
}: {
  side: "in" | "out";
  time: string;
  children: React.ReactNode;
}) {
  const isOut = side === "out";
  return (
    <div className={`flex ${isOut ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[80%]`}>
        <div
          className={`px-2.5 py-1.5 rounded-2xl text-[11px] ${
            isOut
              ? "bg-brand-dark text-white rounded-br-sm"
              : "bg-white text-ink rounded-bl-sm border border-[#eef2f0]"
          }`}
        >
          {children}
        </div>
        <div
          className={`text-[8px] text-faint mt-0.5 ${
            isOut ? "text-right" : "text-left"
          }`}
        >
          {time} {isOut && "✓✓"}
        </div>
      </div>
    </div>
  );
}

function MediaCard({ label, time }: { label: string; time: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%]">
        <div className="rounded-2xl overflow-hidden bg-[#1f2937] relative w-32 h-20">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.15), transparent 50%), radial-gradient(circle at 40% 40%, #f1c8a8, #d99a73 60%, #7a4b32)",
            }}
          />
          <div className="absolute inset-0 backdrop-blur-md flex items-center justify-center">
            <EyeOffIcon />
          </div>
          <div className="absolute bottom-1 left-1.5 right-1.5 text-white text-[8px] font-medium">
            {label}
          </div>
        </div>
        <div className="text-[8px] text-faint mt-0.5 text-right">{time} ✓✓</div>
      </div>
    </div>
  );
}

function VoiceBubble({ time }: { time: string }) {
  return (
    <div className="flex justify-end">
      <div>
        <div className="bg-brand-dark text-white px-3 py-2 rounded-2xl rounded-br-sm flex items-center gap-2 w-32">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
              <path d="M6 4l14 8-14 8V4z" />
            </svg>
          </div>
          <div className="flex items-center gap-0.5 flex-1">
            {[4, 8, 6, 10, 5, 8, 12, 6, 9, 4, 7, 11, 5, 8].map((h, i) => (
              <span
                key={i}
                className="block w-0.5 bg-white/80 rounded"
                style={{ height: h }}
              />
            ))}
          </div>
          <span className="text-[8px]">0:12</span>
        </div>
        <div className="text-[8px] text-faint mt-0.5 text-right">{time} ✓✓</div>
      </div>
    </div>
  );
}

function LocationCard({ time }: { time: string }) {
  return (
    <div className="flex justify-end">
      <div>
        <div className="bg-white border border-[#eef2f0] rounded-2xl overflow-hidden w-32">
          <div
            className="h-14 relative"
            style={{
              background:
                "linear-gradient(135deg, #d1fae5, #a7f3d0 50%, #6ee7b7)",
            }}
          >
            <svg
              viewBox="0 0 100 50"
              className="absolute inset-0 w-full h-full text-[#059669]/30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M0 30h25l5-8h20l5 8h20l5-10h20" />
              <path d="M0 40h30l5-8h15l5 8h25l5-8h15" />
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-3 h-3 rounded-full bg-danger ring-2 ring-white" />
            </div>
          </div>
          <div className="px-2 py-1.5">
            <div className="text-[10px] font-bold text-ink">Shared Location</div>
            <div className="text-[8px] text-muted-text">Live · 30 min</div>
          </div>
        </div>
        <div className="text-[8px] text-faint mt-0.5 text-right">{time} ✓✓</div>
      </div>
    </div>
  );
}

/* ---- icons ---- */
function ShieldCheckIcon({ big }: { big?: boolean }) {
  const s = big ? 28 : 22;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
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
function LockIcon({ big }: { big?: boolean }) {
  const s = big ? 28 : 22;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
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
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function VideoIconSm() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 10l5-3v10l-5-3z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function DotsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="19" cy="12" r="1.5" />
    </svg>
  );
}
function PaperclipIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 12l-7.5 7.5a5 5 0 0 1-7-7L14 5a3.5 3.5 0 0 1 5 5l-8 8a2 2 0 0 1-3-3l7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CameraIconSm() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 10l5-3v10l-5-3z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function MicIconSm() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="3" width="6" height="11" rx="3" stroke="white" strokeWidth="2" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="white" strokeWidth="2" />
    </svg>
  );
}
function EyeOffIcon({ big }: { big?: boolean }) {
  const s = big ? 32 : 16;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path
        d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.4 5.2A9.6 9.6 0 0 1 12 5c5 0 9 4.5 9 7-.4 1-1.4 2.4-2.9 3.6M6.1 6.1C4 7.4 2.7 9.2 2 11c.5 1.4 2.3 3.7 5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
