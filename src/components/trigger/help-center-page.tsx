"use client";

import * as React from "react";
import {
  LegalHeader,
  LegalFooter,
} from "./legal/legal-primitives";

type QA = { q: string; a: string };
type Category = { title: string; icon: React.ReactNode; items: QA[] };

const CATEGORIES: Category[] = [
  {
    title: "Account & Login",
    icon: <UserIcon />,
    items: [
      {
        q: "How do I create a Trigger account?",
        a: "Create an account using the registration process in the Trigger app and complete the required verification steps.",
      },
      {
        q: "I cannot log in. What should I do?",
        a: "Check your email, verification details, and internet connection. If the problem continues, contact support with your registered email address and a description of the issue.",
      },
      {
        q: "How do I delete my account?",
        a: "You can request account deletion through the available account-deletion option in the app or through Trigger's account deletion page.",
      },
    ],
  },
  {
    title: "Profile & Connections",
    icon: <ProfileIcon />,
    items: [
      {
        q: "How do I edit my profile?",
        a: "Open your profile and use the available edit options to update your information.",
      },
      {
        q: "Who can contact me?",
        a: "Your ability to communicate with other users may depend on your account settings, connection status, and Trigger's applicable rules.",
      },
      {
        q: "How do I report another user?",
        a: "Use the report option where available or submit a report through the Report page.",
      },
    ],
  },
  {
    title: "Messaging & Calls",
    icon: <ChatIcon />,
    items: [
      {
        q: "Why can't I send a message?",
        a: "Messaging may be restricted because of account limits, privacy settings, connection requirements, safety restrictions, or temporary technical issues.",
      },
      {
        q: "Why isn't my call connecting?",
        a: "Check your internet connection and ensure that Trigger has the required microphone and camera permissions.",
      },
    ],
  },
  {
    title: "Live Streaming",
    icon: <LiveIcon />,
    items: [
      {
        q: "How do I start a live stream?",
        a: "Open the Stream section, create your stream details, configure the available settings, and choose whether to start immediately or schedule the stream.",
      },
      {
        q: "Can I create a paid live stream?",
        a: "Yes. Trigger supports paid live streams where enabled. Viewers must complete the required payment and receive verified access before joining.",
      },
      {
        q: "What happens if a paid viewer has not paid?",
        a: "A viewer without verified payment or entitlement will not be permitted to access a paid stream.",
      },
      {
        q: "What is the platform fee?",
        a: "A 3% platform fee may be added to the viewer's stream booking amount.",
      },
    ],
  },
  {
    title: "Payments & Refunds",
    icon: <WalletIcon />,
    items: [
      {
        q: "Which payment provider does Trigger use?",
        a: "Trigger may use third-party payment providers such as Razorpay and other providers depending on the payment method, region, and applicable requirements.",
      },
      {
        q: "My payment was successful but access hasn't been granted.",
        a: "Payment access is verified by Trigger's backend. If your payment was completed but access has not appeared, allow the verification process to complete and contact support with your payment/order ID if the issue continues.",
      },
      {
        q: "Can I request a refund?",
        a: "Refund eligibility depends on the transaction, applicable Trigger policies, payment-provider rules, and mandatory consumer-protection laws.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    icon: <ShieldIcon />,
    items: [
      {
        q: "How does Trigger protect my information?",
        a: "Trigger uses technical and organizational measures designed to protect user information. No online service can guarantee absolute security.",
      },
      {
        q: "How can I request deletion of my data?",
        a: "Use the available account/data deletion process or contact Trigger through the contact information provided on the website.",
      },
      {
        q: "Does Trigger share my information?",
        a: "Information may be shared with necessary service providers, legal authorities where required, or other parties as described in the Privacy Policy.",
      },
    ],
  },
];

export function HelpCenterPage() {
  const [open, setOpen] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <LegalHeader title="Help Center" />

      <main className="flex-1">
        <div className="mx-auto max-w-[860px] px-5 sm:px-8 py-12 sm:py-16">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="text-brand-dark font-semibold uppercase tracking-[0.18em] text-xs">
              Support
            </div>
            <h1 className="mt-3 text-[34px] sm:text-[44px] font-extrabold leading-[1.1] text-ink">
              Help Center
            </h1>
            <p className="mt-4 text-[16px] text-body text-left max-w-[640px] mx-auto">
              Find answers to common questions about using Trigger.
            </p>
          </div>

          {/* Categories with accordion Q&A */}
          <div className="space-y-8">
            {CATEGORIES.map((cat) => (
              <section key={cat.title}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center text-brand-dark shrink-0">
                    {cat.icon}
                  </div>
                  <h2 className="text-[20px] font-bold text-ink">{cat.title}</h2>
                </div>
                <div className="space-y-2">
                  {cat.items.map((qa, i) => {
                    const key = `${cat.title}-${i}`;
                    const isOpen = open === key;
                    return (
                      <div
                        key={key}
                        className="border border-[#eef2f0] rounded-xl overflow-hidden bg-[#fafafa]"
                      >
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? null : key)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between gap-3 px-5 py-3.5 text-left hover:bg-[#f4f4f5] transition-colors"
                        >
                          <span className="text-[15px] font-semibold text-ink">
                            {qa.q}
                          </span>
                          <span
                            className={`text-brand-dark transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            <ChevronIcon />
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-4 pt-1">
                            <p className="text-[14.5px] text-body text-left leading-[1.7]">
                              {qa.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Fee examples — pulled from live streaming & withdrawal */}
          <section className="mt-12 grid sm:grid-cols-2 gap-4">
            <FeeCard
              title="Stream Booking Example"
              rows={[
                { label: "Stream booking", amount: "₹100" },
                { label: "Platform fee (3%)", amount: "₹3" },
                { label: "Total", amount: "₹103", strong: true },
              ]}
            />
            <FeeCard
              title="Wallet Withdrawal Example"
              rows={[
                { label: "Wallet balance", amount: "₹1,000" },
                { label: "Withdrawal charge (9%)", amount: "₹90" },
                { label: "Amount received", amount: "₹910", strong: true },
              ]}
            />
          </section>
          <p className="text-[13px] text-faint mt-3 text-left">
            Payout processing is generally scheduled around 6 PM IST, but actual
            receipt may depend on payment processing, banking, verification,
            holidays, and other applicable factors.
          </p>

          {/* Safety & Community */}
          <section className="mt-12 bg-brand-mint-bg border-l-2 border-brand rounded-r-xl p-6">
            <h2 className="text-[18px] font-bold text-ink mb-2">
              Safety &amp; Community
            </h2>
            <p className="text-[15px] text-body text-left leading-relaxed">
              Trigger does not permit activities such as harassment, threats,
              scams, impersonation, illegal activity, abusive behavior, or
              prohibited content.
            </p>
            <p className="text-[15px] text-body text-left mt-3 leading-relaxed">
              If you encounter content or behavior that violates Trigger&apos;s
              rules, please{" "}
              <a
                href="/?page=report"
                className="text-brand-dark font-semibold hover:underline underline-offset-2"
              >
                report it
              </a>
              .
            </p>
          </section>

          {/* Still Need Help */}
          <section className="mt-12 border border-[#eef2f0] rounded-2xl p-6 sm:p-8">
            <h2 className="text-[22px] font-bold text-ink mb-4">
              Still Need Help?
            </h2>
            <p className="text-[15px] text-body text-left leading-relaxed">
              If you cannot find an answer here, contact our support team:
            </p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
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
            <div className="mt-4 bg-brand-mint-bg border border-brand-mint rounded-lg px-4 py-3">
              <div className="text-[14px] text-ink font-bold">
                Metric Flux Solutions Pvt Ltd
              </div>
              <div className="text-[13px] text-body mt-1">
                46/A1, PKP Tower, Ground Floor, Kannur, Kerala, India, PIN -
                670702
              </div>
            </div>
            <p className="text-[13px] text-muted-text text-left mt-4">
              For account-specific or payment-related support, include your
              Trigger username, registered email, stream ID, booking ID, or
              payment / order ID where relevant.
            </p>
          </section>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}

function FeeCard({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; amount: string; strong?: boolean }[];
}) {
  return (
    <div className="border border-brand-mint rounded-xl overflow-hidden">
      <div className="bg-brand-mint-bg px-4 py-2 border-b border-brand-mint">
        <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-dark">
          {title}
        </span>
      </div>
      <div className="divide-y divide-[#eef2f0]">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex items-center justify-between gap-4 px-4 py-2.5 ${
              row.strong ? "bg-brand-mint-bg/60" : ""
            }`}
          >
            <span
              className={`text-[14px] text-left ${
                row.strong ? "font-bold text-ink" : "text-body"
              }`}
            >
              {row.label}
            </span>
            <span
              className={`text-[14px] tabular-nums ${
                row.strong ? "font-bold text-brand-dark" : "font-medium text-ink"
              }`}
            >
              {row.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---- icons ---- */
function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function ProfileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path d="M5 20a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M21 12a8 8 0 0 1-11.2 7.3L4 21l1.7-5.8A8 8 0 1 1 21 12z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function LiveIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 10l5-3v10l-5-3z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function WalletIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10h18M16 14h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
