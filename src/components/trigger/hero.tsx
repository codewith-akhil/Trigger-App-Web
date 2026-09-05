import * as React from "react";
import { PhoneImageFrame, SectionLabel, ScriptTag } from "./primitives";

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
              <PhoneImageFrame
                src="/images/hero/hero-chat-list.png"
                alt="Trigger app chat list showing conversations with avatars and unread badges"
                width={240}
              />
            </div>

            {/* Back-right phone: video call */}
            <div
              className="absolute left-1/2 top-1/2 hidden md:block"
              style={{
                transform: "translate(10%, -50%) rotate(6deg) scale(0.85)",
                zIndex: 1,
              }}
            >
              <PhoneImageFrame
                src="/images/hero/hero-video-call.png"
                alt="Trigger app active video call with caller face and call controls"
                width={240}
              />
            </div>

            {/* Front-center phone: live stream — scaled down on mobile to fit */}
            <div
              className="relative z-10 origin-top scale-[0.7] sm:scale-100"
              style={{ transform: "translateY(-10px)" }}
            >
              <PhoneImageFrame
                src="/images/hero/hero-live-stream.png"
                alt="Trigger app live stream interface with LIVE badge, viewer count, and chat overlay"
                width={280}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

