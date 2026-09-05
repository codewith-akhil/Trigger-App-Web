"use client";

import {
  LegalHeader,
  LegalFooter,
} from "./legal/legal-primitives";
import { Logo } from "./primitives";

const FEATURES = [
  {
    icon: <ConnectIcon />,
    title: "Connect",
    desc: "Discover and connect with people.",
  },
  {
    icon: <ChatIcon />,
    title: "Chat",
    desc: "Send messages, media, voice notes, and more.",
  },
  {
    icon: <CallIcon />,
    title: "Calls",
    desc: "Communicate through voice and video calls.",
  },
  {
    icon: <LiveIcon />,
    title: "Live Streaming",
    desc: "Host and participate in live experiences.",
  },
  {
    icon: <CalendarIcon />,
    title: "Scheduled Streams",
    desc: "Plan and share upcoming live streams.",
  },
  {
    icon: <ShieldIcon />,
    title: "Private Spaces",
    desc: "Control how and with whom you share your information.",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <LegalHeader title="About Us" />

      <main className="flex-1">
        <div className="mx-auto max-w-[860px] px-5 sm:px-8 py-12 sm:py-16">
          {/* Title block */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Logo size={64} />
            </div>
            <div className="text-brand-dark font-semibold uppercase tracking-[0.18em] text-xs">
              About Us
            </div>
            <h1 className="mt-3 text-[34px] sm:text-[44px] font-extrabold leading-[1.1] text-ink">
              About Trigger
            </h1>
          </div>

          {/* Intro */}
          <section className="mb-12">
            <p className="text-[16px] leading-[1.75] text-body text-left">
              Trigger is a social communication platform designed to help people
              connect, communicate, and share experiences in one place.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-body text-left">
              Users can create profiles, chat privately, make voice and video
              calls, share media, and participate in live streams.
            </p>
          </section>

          {/* Mission */}
          <section className="mb-12 bg-brand-mint-bg border-l-2 border-brand rounded-r-xl p-6 sm:p-8">
            <h2 className="text-[22px] sm:text-[26px] font-bold text-ink mb-3">
              Our Mission
            </h2>
            <p className="text-[16px] leading-[1.75] text-body text-left">
              Our mission is simple:
            </p>
            <p className="mt-3 text-[18px] sm:text-[20px] font-bold text-brand-dark text-left">
              To make digital connection more meaningful, accessible, and
              responsible.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-body text-left">
              We want to create a platform where people can communicate
              naturally, express themselves, and build genuine connections.
            </p>
          </section>

          {/* What Trigger Offers */}
          <section className="mb-12">
            <h2 className="text-[22px] sm:text-[26px] font-bold text-ink mb-6">
              What Trigger Offers
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 bg-[#fafafa] border border-[#eef2f0] rounded-2xl p-5"
                >
                  <div className="w-11 h-11 rounded-full bg-brand-mint flex items-center justify-center text-brand-dark shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-[16px] font-bold text-ink">
                      {f.title}
                    </div>
                    <div className="text-[14px] text-muted-text leading-snug mt-0.5">
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Built With Privacy */}
          <section className="mb-12">
            <h2 className="text-[22px] sm:text-[26px] font-bold text-ink mb-4">
              Built With Privacy in Mind
            </h2>
            <p className="text-[16px] leading-[1.75] text-body text-left">
              We believe users should have meaningful control over their
              personal information.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-body text-left">
              Trigger is designed with privacy, security, user control, and
              responsible use in mind.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-body text-left">
              For details about how information is collected and handled, please
              read our{" "}
              <a
                href="/?page=privacy-policy"
                className="text-brand-dark font-semibold hover:underline underline-offset-2"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* Responsible Community */}
          <section className="mb-12">
            <h2 className="text-[22px] sm:text-[26px] font-bold text-ink mb-4">
              A Responsible Community
            </h2>
            <p className="text-[16px] leading-[1.75] text-body text-left">
              Trigger is intended for users{" "}
              <span className="font-semibold text-ink">
                18 years and older
              </span>
              .
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-body text-left">
              We do not tolerate activities such as harassment, fraud,
              exploitation, threats, illegal activity, or other serious abuse of
              the platform.
            </p>
            <p className="mt-4 text-[16px] leading-[1.75] text-body text-left">
              Users are expected to respect others and follow our{" "}
              <a
                href="/?page=terms-conditions"
                className="text-brand-dark font-semibold hover:underline underline-offset-2"
              >
                Terms &amp; Conditions
              </a>{" "}
              and Community Guidelines.
            </p>
          </section>

          {/* Who Operates Trigger */}
          <section className="mb-12">
            <h2 className="text-[22px] sm:text-[26px] font-bold text-ink mb-4">
              Who Operates Trigger
            </h2>
            <p className="text-[16px] leading-[1.75] text-body text-left">
              Trigger is operated by:
            </p>
            <div className="mt-4 space-y-3">
              <div className="bg-brand-mint-bg border border-brand-mint rounded-lg px-4 py-3">
                <div className="text-[15px] text-ink font-bold">
                  Metric Flux Solutions Pvt Ltd
                </div>
                <div className="text-[14px] text-body mt-1">
                  46/A1, PKP Tower, Ground Floor, Kannur, Kerala, India – PIN
                  670702
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href="mailto:METRICFLUXSOLUTIONS@GMAIL.COM"
                  className="bg-brand-mint-bg border border-brand-mint rounded-lg px-4 py-3 hover:bg-brand-mint/50 transition-colors"
                >
                  <div className="text-[12px] font-semibold uppercase tracking-wider text-brand-dark">
                    Email
                  </div>
                  <div className="text-[14px] text-ink font-medium break-all mt-0.5">
                    METRICFLUXSOLUTIONS@GMAIL.COM
                  </div>
                </a>
                <a
                  href="tel:+919746109569"
                  className="bg-brand-mint-bg border border-brand-mint rounded-lg px-4 py-3 hover:bg-brand-mint/50 transition-colors"
                >
                  <div className="text-[12px] font-semibold uppercase tracking-wider text-brand-dark">
                    Phone
                  </div>
                  <div className="text-[14px] text-ink font-medium mt-0.5">
                    +91 9746109569
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Our Commitment */}
          <section>
            <h2 className="text-[22px] sm:text-[26px] font-bold text-ink mb-4">
              Our Commitment
            </h2>
            <p className="text-[16px] leading-[1.75] text-body text-left">
              We are continuously improving Trigger based on technology, user
              feedback, safety requirements, and the changing ways people
              communicate online.
            </p>
            <p className="mt-4 text-[18px] sm:text-[20px] font-bold text-brand-dark text-left">
              We&apos;re building Trigger for better connections, better
              conversations, and better experiences.
            </p>
          </section>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}

/* ---- icons ---- */
function ConnectIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path d="M3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M18 20a6 6 0 0 0-3-5.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M21 12a8 8 0 0 1-11.2 7.3L4 21l1.7-5.8A8 8 0 1 1 21 12z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function CallIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function LiveIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 10l5-3v10l-5-3z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
