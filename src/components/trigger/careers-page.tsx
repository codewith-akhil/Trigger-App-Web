"use client";

import {
  LegalHeader,
  LegalFooter,
} from "./legal/legal-primitives";

export function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <LegalHeader title="Careers" />

      <main className="flex-1">
        <div className="mx-auto max-w-[860px] px-5 sm:px-8 py-12 sm:py-16">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="text-brand-dark font-semibold uppercase tracking-[0.18em] text-xs">
              Careers
            </div>
            <h1 className="mt-3 text-[34px] sm:text-[44px] font-extrabold leading-[1.1] text-ink">
              Career Opportunities
            </h1>
          </div>

          {/* No openings card */}
          <div className="bg-brand-mint-bg border border-brand-mint rounded-2xl p-8 sm:p-12 text-center">
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand-dark shadow-sm">
                <BriefcaseIcon />
              </div>
            </div>
            <h2 className="text-[22px] sm:text-[26px] font-bold text-ink mb-3">
              No Open Positions Right Now
            </h2>
            <p className="text-[15px] text-body leading-relaxed max-w-[560px] mx-auto">
              There are currently{" "}
              <span className="font-semibold text-ink">
                no career opportunities available at Trigger
              </span>
              . We appreciate your interest in being part of our team. Please
              stay connected with us and check this page regularly for the
              latest career opportunities and vacancies.
            </p>
            <p className="text-[15px] text-brand-dark font-semibold mt-4">
              We&apos;ll keep this page updated whenever new positions become
              available.
            </p>
          </div>

          {/* Closing */}
          <div className="mt-10 text-center">
            <p className="text-[16px] text-body">
              Thank you for your interest in{" "}
              <span className="font-bold text-ink">Trigger App</span>.
            </p>
          </div>

          {/* Contact strip */}
          <div className="mt-10 border border-[#eef2f0] rounded-2xl p-6">
            <h3 className="text-[16px] font-bold text-ink mb-2">
              Want to reach out anyway?
            </h3>
            <p className="text-[14px] text-body mb-4">
              You&apos;re welcome to send your resume or queries to our team —
              we&apos;ll keep it on file for future openings.
            </p>
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
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
