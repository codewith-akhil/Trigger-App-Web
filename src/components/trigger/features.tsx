import * as React from "react";
import { SectionLabel } from "./primitives";

type Card = {
  id: string;
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
};

const CARDS: Card[] = [
  {
    id: "chat",
    title: "Real-time Chat",
    desc: "Stay connected with instant and secure messaging. Share text, photos, videos and more.",
    image: "/images/features/real-time-chat.png",
    imageAlt:
      "Smartphone chat messaging app interface with message bubbles and online indicators",
  },
  {
    id: "calls",
    title: "Audio & Video Calls",
    desc: "High-quality 1-on-1 calls with crystal-clear audio and smooth video.",
    image: "/images/features/audio-video-calls.png",
    imageAlt:
      "Smartphone video call interface with two user avatars and green call controls",
  },
  {
    id: "live",
    title: "Live Streaming",
    desc: "Go live, interact with your audience and build your community. Host free or paid live streams.",
    image: "/images/features/live-streaming.png",
    imageAlt:
      "Smartphone live streaming interface with LIVE badge, viewer count, and chat overlay",
  },
  {
    id: "discover",
    title: "Discover People",
    desc: "Find and connect with real people from around the world.",
    image: "/images/features/discover-people.png",
    imageAlt:
      "Profile discovery swipe interface with user photo and like/pass buttons",
  },
  {
    id: "live-discovery",
    title: "Live Discovery",
    desc: "Explore live streams from creators worldwide. Follow, like and support your favorites.",
    image: "/images/features/live-discovery.png",
    imageAlt:
      "Grid of live stream thumbnails with LIVE badges and viewer counts",
  },
  {
    id: "secure",
    title: "Secure & Private",
    desc: "Your privacy matters. Advanced security features to keep your conversations and data safe.",
    image: "/images/features/secure-private.png",
    imageAlt:
      "Privacy and security icons including shield, padlock, and two-step verification",
  },
  {
    id: "wallet",
    title: "Wallet & Earnings",
    desc: "Monetize your content, receive earnings and withdraw to your bank account. Transparent and secure payouts.",
    image: "/images/features/wallet-earnings.png",
    imageAlt:
      "Digital wallet card showing balance with Indian rupee symbol and withdraw button",
  },
  {
    id: "global",
    title: "Global Community",
    desc: "Trigger is a global 18+ platform. Meet, chat and connect with people from different countries and cultures.",
    image: "/images/features/global-community.png",
    imageAlt:
      "Globe with diverse user avatars connected around it representing global community",
  },
  {
    id: "safety",
    title: "User Safety",
    desc: "We are committed to a safe and respectful community. Powerful tools to report, block and stay safe.",
    image: "/images/features/user-safety.png",
    imageAlt:
      "User safety tools including report flag, block icon, and community guidelines",
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
      {/* Square feature image — unique per card, content-related */}
      <div className="mb-5 flex justify-center">
        <div className="relative w-full aspect-square max-w-[200px] rounded-xl overflow-hidden bg-brand-mint-bg border border-[#eef2f0]">
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
