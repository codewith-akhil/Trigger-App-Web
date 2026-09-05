import * as React from "react";
import { SectionLabel, ScriptTag, Avatar } from "./primitives";

export function SecuritySection() {
  return (
    <section
      id="support"
      className="bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* subtle corner gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-brand-mint/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-brand-mint/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        {/* ============== Block 1: Privacy Control ============== */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-5">
            <SectionLabel>Your Privacy, Your Choice</SectionLabel>
            <h2 className="mt-3 text-[40px] sm:text-[52px] font-extrabold leading-[1.08] text-ink">
              Stay in Control
              <br />
              <span className="text-brand-dark">Share What You Want.</span>
            </h2>
            <p className="mt-5 text-[17px] leading-[1.65] text-body max-w-[480px]">
              Trigger gives you the freedom to connect without revealing
              personal details. Keep your identity private, share only your
              username, and control your visibility.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: <UserIcon />, title: "Hide Personal Details", desc: "Keep your real name, phone number, email and other personal information private." },
                { icon: <AtIcon />, title: "Share Username", desc: "Connect with others using your unique username instead of personal details." },
                { icon: <EyeIcon />, title: "Control Your Visibility", desc: "Choose what others can see on your profile and when to show it." },
                { icon: <ShieldCheckIcon />, title: "Stay Anonymous", desc: "Chat, stream and connect with confidence, on your own terms." },
              ].map((c) => (
                <FeatureCardSmall
                  key={c.title}
                  icon={c.icon}
                  title={c.title}
                  desc={c.desc}
                />
              ))}
            </div>
          </div>

          {/* Two phones */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <ProfilePhone />
            <div className="relative">
              <PrivacyPhone />
              <ScriptTag
                className="absolute -right-2 top-4 text-xl hidden lg:block z-20"
                rotate={10}
              >
                Same App Different Stories
              </ScriptTag>
            </div>
          </div>
        </div>

        {/* ============== Block 2: Private Vault ============== */}
        <div className="mt-20 lg:mt-28 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-5">
            <SectionLabel>Private Vault</SectionLabel>
            <h3 className="mt-3 text-[34px] sm:text-[40px] font-extrabold leading-[1.1] text-ink">
              Keep Your{" "}
              <span className="text-brand-dark">
                Photos & Videos Safe
              </span>
            </h3>
            <p className="mt-4 text-[16px] leading-[1.65] text-body max-w-[420px]">
              Hide your personal photos and videos in a secure private vault.
              Access them anytime with your PIN. Your memories stay private,
              protected and only visible to you.
            </p>
            <div className="mt-7 space-y-5">
              {[
                { icon: <LockIcon />, title: "PIN Authentication", desc: "Access your vault with a secure PIN." },
                { icon: <EyeOffIcon />, title: "Hidden from Gallery", desc: "Files are stored in a private space, not visible in your device gallery." },
                { icon: <VideoIcon />, title: "Photos & Videos", desc: "Store your intimate and personal media safely." },
                { icon: <ShieldCheckIcon />, title: "Full Privacy", desc: "Only you can access, share or delete your files." },
              ].map((f) => (
                <FeatureRow key={f.title} {...f} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 flex justify-center">
            <PinPhone />
          </div>
        </div>

        {/* ============== Block 3: Account Deletion ============== */}
        <div className="mt-20 lg:mt-28 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center">
            <DeletePhone />
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <SectionLabel>Your Account</SectionLabel>
            <h3 className="mt-3 text-[34px] sm:text-[40px] font-extrabold leading-[1.1] text-ink">
              Secure{" "}
              <span className="text-brand-dark">Account Deletion</span>
            </h3>
            <p className="mt-4 text-[16px] leading-[1.65] text-body max-w-[420px]">
              You can permanently delete your Trigger account anytime. Your data
              will be removed from our active systems as per our data retention
              policy.
            </p>
            <div className="mt-7 space-y-5">
              {[
                { icon: <TrashIcon />, title: "One-Click Request", desc: "Easily request account deletion from app or website." },
                { icon: <ShieldCheckIcon />, title: "Your Data, Your Control", desc: "Your profile, chats, media and personal information will be removed." },
                { icon: <ClockIcon />, title: "Processed Securely", desc: "Deletion requests are processed securely in accordance with our Privacy Policy." },
                { icon: <DocIcon />, title: "Clear Information", desc: "We provide clear details about what data is deleted and what may be retained as required by law." },
              ].map((f) => (
                <FeatureRow key={f.title} {...f} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCardSmall({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white border border-[#eef2f0] rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="w-11 h-11 rounded-full bg-brand-mint flex items-center justify-center text-brand-dark">
        {icon}
      </div>
      <div className="mt-3 text-[16px] font-bold text-ink">{title}</div>
      <div className="mt-1 text-[13px] text-muted-text leading-snug">{desc}</div>
    </div>
  );
}

function FeatureRow({
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
      <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center text-brand-dark shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[16px] font-semibold text-ink">{title}</div>
        <div className="text-[14px] text-muted-text leading-snug mt-0.5">
          {desc}
        </div>
      </div>
    </div>
  );
}

/* ============== Phone mockups ============== */

function ProfilePhone() {
  return (
    <PhoneShell width={260}>
      <div className="absolute inset-0 bg-white pt-8">
        {/* header */}
        <div className="px-3 py-1 flex items-center justify-between border-b border-[#f3f4f6]">
          <span className="text-ink text-[14px]">‹</span>
          <span className="text-[13px] font-semibold text-ink">Profile</span>
          <span className="text-ink text-[14px]">⋮</span>
        </div>
        {/* avatar */}
        <div className="flex flex-col items-center mt-3">
          <div className="relative">
            <Avatar name="Ananya" size={64} color="#10b981" />
            <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brand ring-2 ring-white flex items-center justify-center">
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
          </div>
          <div className="mt-1 text-[14px] font-bold text-ink">Ananya</div>
          <div className="text-[11px] text-muted-text">@ananya_official</div>
          <div className="mt-1 text-[10px] text-muted-text flex gap-3">
            <span><b className="text-ink">124</b> Following</span>
            <span><b className="text-ink">1.2K</b> Followers</span>
            <span><b className="text-ink">56</b> Live</span>
          </div>
        </div>
        {/* menu */}
        <div className="mt-3 px-3">
          {[
            { icon: <PencilIcon />, label: "Edit Profile" },
            { icon: <LockIconSmall />, label: "Privacy Settings" },
            { icon: <UserXIcon />, label: "Hide Personal Details" },
            { icon: <AtIconSmall />, label: "Share Username" },
            { icon: <BanIconSmall />, label: "Blocked Users" },
            { icon: <GearIcon />, label: "Account Settings" },
          ].map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-2.5 py-1.5 border-b border-[#f9fafb]"
            >
              <span className="text-muted-text w-4 flex justify-center">
                {m.icon}
              </span>
              <span className="text-[12px] text-ink">{m.label}</span>
              <span className="ml-auto text-muted-text text-[12px]">›</span>
            </div>
          ))}
        </div>
        {/* bottom nav */}
        <BottomNav active="profile" />
      </div>
    </PhoneShell>
  );
}

function PrivacyPhone() {
  return (
    <PhoneShell width={260}>
      <div className="absolute inset-0 bg-white pt-8">
        <div className="px-3 py-1 flex items-center justify-between border-b border-[#f3f4f6]">
          <span className="text-ink text-[14px]">‹</span>
          <span className="text-[13px] font-semibold text-ink">
            Privacy Settings
          </span>
          <span className="text-ink text-[14px]">⋮</span>
        </div>
        <div className="px-3 pt-2 space-y-1.5">
          {[
            { label: "Show Real Name", sub: "Only you can see this", type: "off" },
            { label: "Show Phone Number", sub: "Only you can see this", type: "off" },
            { label: "Show Email Address", sub: "Only you can see this", type: "off" },
            { label: "Show My Location", sub: "Nobody", type: "chevron" },
            { label: "Profile Visibility", sub: "Only username and photo", type: "chevron" },
            { label: "Allow Direct Messages", sub: "Everyone", type: "chevron" },
            { label: "Show Online Status", sub: "Only people you follow", type: "on" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 py-1.5 border-b border-[#f5f5f5]"
            >
              <div className="w-6 h-6 rounded bg-brand-mint flex items-center justify-center text-brand-dark">
                <GearIcon small />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-medium text-ink">{s.label}</div>
                <div className="text-[9px] text-faint">{s.sub}</div>
              </div>
              {s.type === "off" && <Toggle off />}
              {s.type === "on" && <Toggle />}
              {s.type === "chevron" && (
                <span className="text-muted-text text-[10px]">›</span>
              )}
            </div>
          ))}
        </div>
        {/* privacy banner */}
        <div className="mx-3 mt-2 bg-brand-mint-bg border-l-2 border-brand rounded-md p-2 flex items-center gap-2">
          <span className="text-brand-dark">
            <LockIcon small />
          </span>
          <div className="flex-1">
            <div className="text-[10px] font-semibold text-ink">
              Your privacy matters
            </div>
            <div className="text-[9px] text-muted-text">
              You are in control of what you share.
            </div>
          </div>
          <span className="text-brand-dark text-[10px]">→</span>
        </div>
      </div>
    </PhoneShell>
  );
}

function PinPhone() {
  return (
    <PhoneShell width={260} dark>
      <div className="absolute inset-0 bg-[#1f2937] pt-12 flex flex-col items-center text-white">
        {/* lock icon */}
        <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center text-brand">
          <LockIcon big />
        </div>
        <div className="mt-3 text-[16px] font-bold">Enter Your PIN</div>
        <div className="text-[11px] text-faint mt-0.5">
          Access your private vault
        </div>
        {/* pin dots */}
        <div className="mt-5 flex items-center gap-3">
          {[true, true, true, false].map((filled, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                filled ? "bg-brand" : "border-2 border-[#374151]"
              }`}
            />
          ))}
        </div>
        {/* keypad */}
        <div className="mt-6 grid grid-cols-3 gap-2 px-6">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "back"].map(
            (k, i) =>
              k === "" ? (
                <div key={i} />
              ) : (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-[#374151] flex items-center justify-center text-[16px] font-medium"
                >
                  {k === "back" ? "⌫" : k}
                </div>
              )
          )}
        </div>
      </div>
    </PhoneShell>
  );
}

function DeletePhone() {
  return (
    <PhoneShell width={260}>
      <div className="absolute inset-0 bg-white pt-8 px-5 flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-danger-soft flex items-center justify-center text-danger mt-2">
          <TrashIcon big />
        </div>
        <div className="mt-3 text-[16px] font-bold text-ink">Delete Account</div>
        <p className="mt-1 text-[12px] text-muted-text text-center max-w-[220px] leading-snug">
          This will permanently delete your account and remove your data from
          our systems.
        </p>
        {/* info box */}
        <div className="mt-3 w-full bg-[#fef2f2] rounded-xl p-3">
          <div className="text-[11px] font-semibold text-[#991b1b]">
            This Includes:
          </div>
          <ul className="mt-1 space-y-1 text-[11px] text-[#dc2626]">
            {[
              "Your profile information",
              "Photos and videos",
              "Chats and messages",
              "Followers and following",
              "Wallet and earnings data",
              "Live stream history",
            ].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#dc2626]" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-3 w-full bg-danger text-white text-[13px] font-semibold py-2.5 rounded-xl shadow-[0_4px_12px_rgba(239,68,68,0.3)]">
          Delete My Account
        </button>
      </div>
    </PhoneShell>
  );
}

/* ----- phone shell (smaller version of PhoneFrame, no notch) ----- */
function PhoneShell({
  children,
  width = 260,
  dark = false,
}: {
  children: React.ReactNode;
  width?: number;
  dark?: boolean;
}) {
  return (
    <div
      className="relative shrink-0 mx-auto"
      style={{
        width,
        borderRadius: 36,
        background: "#0b0f17",
        padding: 10,
        boxShadow:
          "0 25px 50px -12px rgba(0,0,0,0.28), 0 8px 18px -6px rgba(0,0,0,0.18)",
      }}
    >
      <div
        className={`relative overflow-hidden ${
          dark ? "bg-[#1f2937]" : "bg-white"
        }`}
        style={{
          borderRadius: 28,
          height: (width - 20) * 2.05,
        }}
      >
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 pt-2 text-[10px] font-semibold text-ink/80">
          <span>9:30</span>
          <span>•••</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function BottomNav({ active }: { active?: string }) {
  const items = [
    { key: "chats", label: "Chats", icon: <ChatIcon /> },
    { key: "calls", label: "Calls", icon: <PhoneIconSmall /> },
    { key: "plus", label: "", icon: <PlusIcon />, fab: true },
    { key: "live", label: "Live", icon: <CameraIconSmall /> },
    { key: "profile", label: "Profile", icon: <UserIconSmall /> },
  ];
  return (
    <div className="absolute left-0 right-0 bottom-0 bg-white border-t border-[#eef2f0] flex items-center justify-between px-4 py-2">
      {items.map((it) =>
        it.fab ? (
          <div
            key={it.key}
            className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white -mt-3 shadow-lg"
          >
            {it.icon}
          </div>
        ) : (
          <div key={it.key} className="flex flex-col items-center gap-0.5">
            <span
              className={active === it.key ? "text-brand-dark" : "text-faint"}
            >
              {it.icon}
            </span>
            <span
              className={`text-[8px] ${
                active === it.key ? "text-brand-dark" : "text-faint"
              }`}
            >
              {it.label}
            </span>
          </div>
        )
      )}
    </div>
  );
}

function Toggle({ off }: { off?: boolean }) {
  return (
    <div
      className={`w-8 h-[18px] rounded-full p-0.5 transition-colors ${
        off ? "bg-[#d1d5db]" : "bg-brand"
      }`}
    >
      <div
        className={`w-3.5 h-3.5 rounded-full bg-white transition-transform ${
          off ? "translate-x-0" : "translate-x-[14px]"
        }`}
      />
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
function AtIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
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
function LockIcon({ big, small }: { big?: boolean; small?: boolean }) {
  const s = big ? 26 : small ? 12 : 20;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function EyeOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
function VideoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 10l5-3v10l-5-3z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function TrashIcon({ big }: { big?: boolean }) {
  const s = big ? 24 : 20;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7h16M10 11v6M14 11v6M5 7l1 13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-13M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 3v5h5M9 13h6M9 17h6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function PencilIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M16 4l4 4-12 12H4v-4L16 4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function LockIconSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function UserXIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path d="M3 20a6 6 0 0 1 9.5-4.9M17 9l4 4M21 9l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function AtIconSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function BanIconSmall() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M5 5l14 14" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function GearIcon({ small }: { small?: boolean }) {
  const s = small ? 12 : 20;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M19 12a7 7 0 0 0-.2-1.6l2-1.5-2-3.4-2.4 1a7 7 0 0 0-2.8-1.6L13 2h-4l-.4 2.4a7 7 0 0 0-2.8 1.6l-2.4-1-2 3.4 2 1.5A7 7 0 0 0 3 12c0 .5.1 1 .2 1.6l-2 1.5 2 3.4 2.4-1a7 7 0 0 0 2.8 1.6L9 22h4l.4-2.4a7 7 0 0 0 2.8-1.6l2.4 1 2-3.4-2-1.5c.1-.5.2-1 .2-1.6z"
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
function PhoneIconSmall() {
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
function CameraIconSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="13" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M16 10l5-3v10l-5-3z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function UserIconSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
