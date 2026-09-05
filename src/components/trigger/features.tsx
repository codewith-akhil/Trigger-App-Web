import * as React from "react";
import { PhoneFrame, SectionLabel, Avatar } from "./primitives";

type Card = {
  id: string;
  title: string;
  desc: string;
  visual: React.ReactNode;
};

const CARDS: Card[] = [
  {
    id: "chat",
    title: "Real-time Chat",
    desc: "Stay connected with instant and secure messaging. Share text, photos, videos and more.",
    visual: <ChatPhone />,
  },
  {
    id: "calls",
    title: "Audio & Video Calls",
    desc: "High-quality 1-on-1 calls with crystal-clear audio and smooth video.",
    visual: <CallPhone />,
  },
  {
    id: "live",
    title: "Live Streaming",
    desc: "Go live, interact with your audience and build your community. Host free or paid live streams.",
    visual: <LivePhone />,
  },
  {
    id: "discover",
    title: "Discover People",
    desc: "Find and connect with real people from around the world.",
    visual: <DiscoverPhone />,
  },
  {
    id: "live-discovery",
    title: "Live Discovery",
    desc: "Explore live streams from creators worldwide. Follow, like and support your favorites.",
    visual: <DiscoveryPhone />,
  },
  {
    id: "secure",
    title: "Secure & Private",
    desc: "Your privacy matters. Advanced security features to keep your conversations and data safe.",
    visual: <SecurityList />,
  },
  {
    id: "wallet",
    title: "Wallet & Earnings",
    desc: "Monetize your content, receive earnings and withdraw to your bank account. Transparent and secure payouts.",
    visual: <WalletCard />,
  },
  {
    id: "global",
    title: "Global Community",
    desc: "Trigger is a global 18+ platform. Meet, chat and connect with people from different countries and cultures.",
    visual: <GlobalIllustration />,
  },
  {
    id: "safety",
    title: "User Safety",
    desc: "We are committed to a safe and respectful community. Powerful tools to report, block and stay safe.",
    visual: <SafetyList />,
  },
];

export function FeaturesGrid() {
  return (
    <section
      id="features"
      className="bg-white py-16 sm:py-20 lg:py-24 border-t border-[#f1f5f4]"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((c) => (
            <FeatureCard key={c.id} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ card }: { card: Card }) {
  return (
    <article className="group bg-[#fafafa] border border-[#f3f4f6] rounded-2xl p-6 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all">
      <div className="flex items-center gap-5 mb-5">
        <div className="shrink-0">{card.visual}</div>
      </div>
      <h3 className="text-[19px] font-bold text-ink leading-snug">
        {card.title}
      </h3>
      <p className="mt-2 text-[14px] leading-[1.65] text-muted-text">
        {card.desc}
      </p>
      <a
        href="#features"
        className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-brand-dark hover:gap-2 transition-all"
      >
        Learn more
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

/* ---------- Mini phone visuals for feature cards ---------- */

function MiniPhone({
  children,
  width = 130,
  dark = false,
}: {
  children: React.ReactNode;
  width?: number;
  dark?: boolean;
}) {
  return (
    <div
      className="relative shrink-0"
      style={{
        width,
        borderRadius: 22,
        background: "#0b0f17",
        padding: 6,
        boxShadow: "0 14px 28px -10px rgba(0,0,0,0.25)",
      }}
    >
      <div
        className={`relative overflow-hidden ${
          dark ? "bg-[#1f2937]" : "bg-white"
        }`}
        style={{
          borderRadius: 16,
          height: width * 1.95,
        }}
      >
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-3 pt-1 text-[8px] font-semibold text-ink/80">
          <span>12:30</span>
          <span>•••</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function ChatPhone() {
  return (
    <MiniPhone width={130}>
      <div className="absolute inset-0 pt-6">
        <div className="px-3 flex items-center justify-between">
          <div className="text-[10px] font-bold text-ink">Chats</div>
          <div className="text-[9px] text-muted-text">Search</div>
        </div>
        <div className="px-3 mt-2 space-y-1.5">
          {["Ananya", "Riya", "Neha", "Arjun"].map((n, i) => (
            <div key={n} className="flex items-center gap-1.5">
              <Avatar
                name={n}
                size={18}
                online={i === 0}
                color={["#10b981", "#3b82f6", "#f59e0b", "#ec4899"][i]}
              />
              <div className="flex-1 min-w-0">
                <div className="text-[8px] font-semibold text-ink truncate">
                  {n}
                </div>
                <div className="text-[7px] text-muted-text truncate">
                  {["Typing...", "Photo", "Voice msg", "Hi there!"][i]}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 left-3 right-3 bg-[#f1f5f4] rounded-full px-2 py-1 text-[7px] text-muted-text">
          Type a message...
        </div>
      </div>
    </MiniPhone>
  );
}

function CallPhone() {
  return (
    <MiniPhone width={130}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1f2937] to-black">
        <div
          className="absolute left-1/2 top-[28%] -translate-x-1/2 w-14 h-14 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, #f1c8a8, #d99a73 60%, #7a4b32)",
          }}
        />
        <div className="absolute top-9 left-0 right-0 text-center">
          <div className="text-white text-[10px] font-semibold">Ananya</div>
          <div className="text-white/70 text-[8px]">00:34</div>
        </div>
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
          <div className="w-5 h-5 rounded-full bg-white/15" />
          <div className="w-5 h-5 rounded-full bg-white/15" />
          <div className="w-5 h-5 rounded-full bg-danger" />
        </div>
      </div>
    </MiniPhone>
  );
}

function LivePhone() {
  return (
    <MiniPhone width={130}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b3d2e] to-black">
        <div
          className="absolute left-1/2 top-[34%] -translate-x-1/2 w-16 h-16 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, #f1c8a8, #d99a73 60%, #7a4b32)",
          }}
        />
        <div className="absolute top-6 left-1.5 flex items-center gap-0.5 bg-danger text-white text-[7px] font-bold px-1 py-0.5 rounded">
          <span className="w-1 h-1 rounded-full bg-white" /> LIVE
        </div>
        <div className="absolute top-6 right-1.5 bg-black/40 text-white text-[7px] font-semibold px-1 py-0.5 rounded">
          1.2K
        </div>
        <div className="absolute right-1.5 bottom-3 flex flex-col gap-1.5">
          <div className="w-4 h-4 rounded-full bg-white/15" />
          <div className="w-4 h-4 rounded-full bg-white/15" />
          <div className="w-4 h-4 rounded-full bg-white/15" />
        </div>
      </div>
    </MiniPhone>
  );
}

function DiscoverPhone() {
  return (
    <MiniPhone width={130}>
      <div className="absolute inset-0 pt-6">
        <div className="px-3 text-[10px] font-bold text-ink">Discover</div>
        <div className="mt-2 flex justify-center">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, #f1c8a8, #d99a73 60%, #7a4b32)",
              }}
            />
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-danger flex items-center justify-center text-white text-[8px] font-bold">
              ✕
            </div>
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-brand flex items-center justify-center text-white text-[8px]">
              ♥
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 left-0 right-0 text-center text-[8px] font-semibold text-ink">
          Meera · Online
        </div>
      </div>
    </MiniPhone>
  );
}

function DiscoveryPhone() {
  const lives = [
    { n: "1.2K", c: "#10b981" },
    { n: "892", c: "#3b82f6" },
    { n: "456", c: "#f59e0b" },
    { n: "234", c: "#ec4899" },
  ];
  return (
    <MiniPhone width={130}>
      <div className="absolute inset-0 pt-6">
        <div className="px-3 flex gap-2 text-[8px] font-medium">
          <span className="text-brand-dark border-b border-brand pb-0.5">
            For You
          </span>
          <span className="text-muted-text">Popular</span>
          <span className="text-muted-text">Nearby</span>
        </div>
        <div className="px-2 mt-2 grid grid-cols-2 gap-1.5">
          {lives.map((l, i) => (
            <div
              key={i}
              className="relative rounded-md overflow-hidden h-14"
              style={{
                background: `linear-gradient(135deg, ${l.c}, #064e3b)`,
              }}
            >
              <div className="absolute top-1 left-1 bg-danger text-white text-[6px] font-bold px-1 py-0.5 rounded">
                LIVE
              </div>
              <div className="absolute top-1 right-1 bg-black/40 text-white text-[6px] px-1 py-0.5 rounded">
                {l.n}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MiniPhone>
  );
}

function SecurityList() {
  const items = [
    { icon: <LockIcon />, label: "Privacy" },
    { icon: <BanIcon />, label: "Blocked Users" },
    { icon: <FlagIcon />, label: "Report User" },
    { icon: <ShieldCheckIcon />, label: "Two-Step Verification" },
  ];
  return (
    <MiniPhone width={130}>
      <div className="absolute inset-0 pt-6 px-3">
        <div className="text-[10px] font-bold text-ink">Privacy & Security</div>
        <div className="mt-2 space-y-2">
          {items.map((it) => (
            <div key={it.label} className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-mint flex items-center justify-center text-brand-dark">
                {it.icon}
              </div>
              <span className="text-[8px] font-medium text-ink">
                {it.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MiniPhone>
  );
}

function WalletCard() {
  return (
    <div
      className="relative rounded-2xl p-3 text-white"
      style={{
        width: 140,
        background: "linear-gradient(135deg, #059669, #10b981)",
        boxShadow: "0 10px 24px -8px rgba(5,150,105,0.45)",
      }}
    >
      <div className="text-[9px] opacity-90">Wallet Balance</div>
      <div className="text-[18px] font-bold mt-0.5">₹ 12,580</div>
      <div className="mt-2 inline-flex items-center bg-white text-brand-dark text-[8px] font-semibold rounded-md px-2 py-1">
        Withdraw
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1 text-[8px]">
        <div className="bg-white/15 rounded-md p-1.5">
          <div className="opacity-80">Earnings</div>
          <div className="font-bold">₹8,950</div>
        </div>
        <div className="bg-white/15 rounded-md p-1.5">
          <div className="opacity-80">Withdrawals</div>
          <div className="font-bold">₹3,630</div>
        </div>
      </div>
    </div>
  );
}

function GlobalIllustration() {
  return (
    <div className="relative w-[130px] h-[160px]">
      {/* Globe */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #34d399, #10b981 60%, #064e3b)",
          boxShadow: "0 12px 28px -8px rgba(5,150,105,0.45)",
        }}
      >
        {/* meridians */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full text-white/30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <ellipse cx="50" cy="50" rx="50" ry="20" />
          <ellipse cx="50" cy="50" rx="50" ry="40" />
          <ellipse cx="50" cy="50" rx="20" ry="50" />
          <ellipse cx="50" cy="50" rx="40" ry="50" />
        </svg>
      </div>
      {/* surrounding avatars */}
      {[
        { top: 0, left: "50%", c: "#fbbf24" },
        { top: "20%", left: "85%", c: "#f472b6" },
        { top: "70%", left: "90%", c: "#60a5fa" },
        { top: "100%", left: "55%", c: "#34d399" },
        { top: "75%", left: "0%", c: "#f87171" },
        { top: "20%", left: "0%", c: "#a78bfa" },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute w-6 h-6 rounded-full ring-2 ring-white"
          style={{
            top: p.top,
            left: p.left,
            transform: "translate(-50%, -50%)",
            background: `linear-gradient(135deg, ${p.c}, #064e3b)`,
          }}
        />
      ))}
    </div>
  );
}

function SafetyList() {
  const items = [
    { icon: <FlagIcon />, label: "Report Content" },
    { icon: <BanIcon />, label: "Block User" },
    { icon: <ShieldCheckIcon />, label: "Safety Guidelines" },
    { icon: <UsersIcon />, label: "Community Rules" },
  ];
  return (
    <MiniPhone width={130}>
      <div className="absolute inset-0 pt-6 px-3">
        <div className="text-[10px] font-bold text-ink">User Safety</div>
        <div className="mt-2 space-y-2">
          {items.map((it) => (
            <div key={it.label} className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-mint flex items-center justify-center text-brand-dark">
                {it.icon}
              </div>
              <span className="text-[8px] font-medium text-ink">{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </MiniPhone>
  );
}

/* icons */
function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function BanIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M5 5l14 14" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function FlagIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 21V4h11l-1 4 1 4H5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ShieldCheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
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
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
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
