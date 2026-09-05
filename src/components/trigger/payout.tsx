import * as React from "react";
import { SectionLabel, ScriptTag, Avatar } from "./primitives";

export function PayoutSection() {
  return (
    <section
      id="pricing"
      className="bg-brand-mint-bg py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* decorative blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-brand-mint/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left: copy + feature cards */}
          <div className="lg:col-span-5">
            <SectionLabel>Creator Earnings</SectionLabel>
            <h2 className="mt-3 text-[40px] sm:text-[48px] lg:text-[56px] font-extrabold leading-[1.05] text-ink">
              Same Day Payments,
              <br />
              <span className="text-brand-dark">Every Day at 6 PM</span>
            </h2>
            <p className="mt-5 text-[17px] leading-[1.65] text-body max-w-[480px]">
              Trigger processes creator payouts every single day at 6:00 PM IST.
              Earn from live streams, gifts and tips — withdraw to your bank
              with full transparency and industry-leading low platform charge.
            </p>

            {/* 3 feature cards */}
            <div className="mt-8 space-y-4">
              <FeatureCard
                icon={<CalendarIcon />}
                title="Payout Schedule"
                highlight="Every Day at 6:00 PM IST"
                desc="Daily automated payouts processed directly to your registered bank account."
              />
              <FeatureCard
                icon={<CoinsIcon />}
                title="Low Platform Charge"
                bigNumber="9%"
                desc="Only 9% platform charge — keep more of what you earn, with no hidden fees."
              />
              <FeatureCard
                icon={<ShieldCheckIcon />}
                title="Safe & Compliant"
                desc="Banking partner verified, encrypted and compliant with all applicable regulations."
              />
            </div>
          </div>

          {/* Center: wallet phone */}
          <div className="lg:col-span-4 flex justify-center relative">
            <ScriptTag
              className="absolute -top-2 -right-2 text-2xl z-10 hidden lg:block"
              rotate={10}
            >
              Your Passion Pays
            </ScriptTag>
            <WalletPhone />
          </div>

          {/* Right: icon column */}
          <div className="lg:col-span-3 space-y-5">
            <FeaturePillar
              icon={<BoltIcon />}
              title="Fast Payouts"
              desc="Receive earnings in your bank the same day."
            />
            <FeaturePillar
              icon={<ShieldCheckIcon />}
              title="Secure Transfers"
              desc="Bank-grade encryption protects every transaction."
            />
            <FeaturePillar
              icon={<ChartIcon />}
              title="Transparent Earnings"
              desc="Full visibility into every gift, tip and stream."
            />
            <ScriptTag className="block text-xl" rotate={-4}>
              Create · Connect · Earn
            </ScriptTag>
          </div>
        </div>

        {/* How it works */}
        <HowItWorks />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  highlight,
  bigNumber,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  highlight?: string;
  bigNumber?: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-[#eef2f0] shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-full bg-brand-mint flex items-center justify-center text-brand-dark shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-[18px] font-bold text-ink">{title}</div>
          {highlight && (
            <div className="text-[20px] font-bold text-brand-dark mt-1">
              {highlight}
            </div>
          )}
          {bigNumber && (
            <div className="text-[36px] font-extrabold text-brand-dark leading-none mt-1">
              {bigNumber}
            </div>
          )}
          <p className="mt-2 text-[14px] text-muted-text leading-snug">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

function FeaturePillar({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-12 h-12 rounded-full bg-brand-mint flex items-center justify-center text-brand-dark shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[17px] font-bold text-ink">{title}</div>
        <div className="text-[14px] text-muted-text leading-snug mt-0.5">
          {desc}
        </div>
      </div>
    </div>
  );
}

function WalletPhone() {
  return (
    <div
      className="relative shrink-0"
      style={{
        width: 300,
        borderRadius: 42,
        background: "#0b0f17",
        padding: 12,
        boxShadow:
          "0 25px 50px -12px rgba(0,0,0,0.28), 0 8px 18px -6px rgba(0,0,0,0.18)",
      }}
    >
      {/* notch */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[16px] z-20 rounded-full bg-black"
        style={{ width: 100, height: 24 }}
      />
      <div
        className="relative overflow-hidden bg-white"
        style={{ borderRadius: 32, height: (300 - 24) * 2.05 }}
      >
        {/* status bar */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5 pt-2.5 text-[11px] font-semibold text-ink/80">
          <span>12:30</span>
          <span className="flex items-center gap-1">
            <span>•••</span>
          </span>
        </div>

        <div className="pt-9 px-4 pb-4 h-full overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="text-ink text-[16px]">‹</div>
            <div className="text-[16px] font-bold text-ink">Wallet</div>
            <div className="text-ink text-[16px]">⋯</div>
          </div>

          {/* Balance card */}
          <div
            className="mt-4 rounded-2xl p-4 text-white"
            style={{
              background: "linear-gradient(135deg, #059669, #10b981)",
              boxShadow: "0 12px 28px -8px rgba(5,150,105,0.45)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="text-[13px] opacity-90">Total Balance</div>
              <div className="text-[16px]">›</div>
            </div>
            <div className="text-[30px] font-bold mt-1">₹12,580</div>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 bg-white text-brand-dark text-[12px] font-semibold rounded-lg py-1.5 flex items-center justify-center gap-1">
                <BankIcon /> Withdraw
              </button>
              <button className="flex-1 bg-white text-brand-dark text-[12px] font-semibold rounded-lg py-1.5 flex items-center justify-center gap-1">
                <ListIcon /> Transactions
              </button>
            </div>
          </div>

          {/* Earnings overview */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="text-[13px] font-bold text-ink">
                Earnings Overview
              </div>
              <div className="text-[12px] text-muted-text">This Week ▾</div>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-[15px] font-bold text-brand-dark">
                  ₹18,450
                </div>
                <div className="text-[10px] text-muted-text">Total</div>
              </div>
              <div className="text-center">
                <div className="text-[15px] font-bold text-ink">₹5,870</div>
                <div className="text-[10px] text-muted-text">Withdrawn</div>
              </div>
              <div className="text-center">
                <div className="text-[15px] font-bold text-brand-dark">
                  ₹12,580
                </div>
                <div className="text-[10px] text-muted-text">Available</div>
              </div>
            </div>
          </div>

          {/* Recent earnings */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div className="text-[13px] font-bold text-ink">
                Recent Earnings
              </div>
              <div className="text-[12px] text-brand-dark">See all</div>
            </div>
            <div className="mt-2 space-y-2">
              {[
                {
                  n: "Live Stream Gift",
                  d: "4 Sep 2026, 10:24 PM",
                  amt: "+ ₹1,200",
                  c: "#10b981",
                },
                {
                  n: "Paid Stream",
                  d: "4 Sep 2026, 9:00 PM",
                  amt: "+ ₹800",
                  c: "#3b82f6",
                },
                {
                  n: "Tips",
                  d: "3 Sep 2026, 11:10 PM",
                  amt: "+ ₹350",
                  c: "#f59e0b",
                },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Avatar name={r.n} size={32} color={r.c} />
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-semibold text-ink truncate">
                      {r.n}
                    </div>
                    <div className="text-[11px] text-faint">{r.d}</div>
                  </div>
                  <div className="text-[14px] font-bold text-brand-light">
                    {r.amt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="absolute left-0 right-0 bottom-0 border-t border-[#e2e8f0] bg-white px-4 py-2 flex items-center justify-between">
          <NavIcon icon={<HomeIcon />} label="Home" />
          <NavIcon icon={<CameraIcon />} label="Live" />
          <div className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center text-white shadow-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <NavIcon icon={<WalletIcon2 />} label="Wallet" active />
          <NavIcon icon={<UserIcon />} label="Profile" />
        </div>
      </div>
    </div>
  );
}

function NavIcon({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <span className={active ? "text-brand-dark" : "text-faint"}>{icon}</span>
      <span
        className={`text-[9px] font-medium ${
          active ? "text-brand-dark" : "text-faint"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: 1,
      title: "Go Live & Earn",
      desc: "Receive gifts, tips and paid stream earnings.",
    },
    {
      n: 2,
      title: "Earnings in Wallet",
      desc: "Your earnings are added to your Trigger wallet.",
    },
    {
      n: 3,
      title: "Automatic Payout",
      desc: "Payouts are processed every day at 6:00 PM IST.",
    },
    {
      n: 4,
      title: "Receive in Bank",
      desc: "Amount is sent to your registered bank account.",
    },
  ];
  return (
    <div className="mt-16 bg-white rounded-3xl p-8 lg:p-10 border border-[#eef2f0]">
      <SectionLabel>How It Works</SectionLabel>
      <h3 className="mt-2 text-[26px] sm:text-[30px] font-extrabold text-ink">
        From live to bank in 4 steps
      </h3>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-start">
        {steps.map((s, i) => (
          <div key={s.n} className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-brand-mint flex items-center justify-center text-brand-dark font-extrabold text-[18px] shrink-0">
              {s.n}
            </div>
            <div>
              <div className="text-[16px] font-bold text-ink">{s.title}</div>
              <div className="text-[13px] text-muted-text leading-snug mt-1">
                {s.desc}
              </div>
            </div>
            {i < steps.length - 1 && (
              <svg
                className="hidden lg:block ml-auto text-[#cbd5e1] mt-3"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14m0 0l-6-6m6 6l-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-[13px] text-faint max-w-[680px] mx-auto">
        Payout times may be affected by bank processing, verification,
        weekends, holidays or regulatory requirements.
      </p>
    </div>
  );
}

/* ----- icons ----- */
function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function CoinsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <ellipse cx="9" cy="7" rx="6" ry="3" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7v5c0 1.7 2.7 3 6 3M3 12v5c0 1.7 2.7 3 6 3" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="16" cy="14" rx="5" ry="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M11 14v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function ShieldCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 20V4M4 20h16M8 16l3-4 3 2 4-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function BankIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path d="M3 9l9-6 9 6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M5 9v8M10 9v8M14 9v8M19 9v8M3 19h18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function ListIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path
        d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CameraIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 10l5-3v10l-5-3z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function WalletIcon2() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 7a2 2 0 0 1 2-2h12v3H5a1 1 0 0 1 0-2h12v3H5a2 2 0 0 1-2-2zm0 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2h-6a2 2 0 0 1 0-4h6V9H5a3 3 0 0 1-2-0z" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
