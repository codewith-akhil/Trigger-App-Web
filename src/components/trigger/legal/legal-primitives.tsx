"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { PolicyBlock, PolicySection } from "./privacy-data";
import { Logo } from "../primitives";

/* ------------------------------------------------------------------ */
/* Shared layout primitives used by both Privacy Policy and Terms.    */
/* ------------------------------------------------------------------ */

export function LegalHeader({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-[#eef2f0]">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
        <div className="h-[68px] flex items-center justify-between gap-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-ink hover:text-brand-dark transition-colors"
            aria-label="Back to home"
          >
            <BackIcon />
            <span className="text-[14px] font-semibold hidden sm:inline">
              Back
            </span>
          </a>

          <a href="/" className="flex items-center gap-3" aria-label="Trigger home">
            <Logo size={34} />
            <div className="leading-tight">
              <div className="font-extrabold tracking-tight text-[15px] text-ink">
                TRIGGER
              </div>
              <div className="text-[10px] text-muted-text">
                Live · Chat · Call
              </div>
            </div>
          </a>

          {/* Right-side spacer to keep logo centered */}
          <div className="w-[64px]" />
        </div>
      </div>
      <span className="sr-only">{title}</span>
    </header>
  );
}

export function LegalFooter() {
  return (
    <footer className="bg-[#062e21] text-white">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-[13px] text-white/80 text-center sm:text-left">
          © 2026 All rights reserved by Trigger App
          <span className="mx-2 opacity-50">·</span>
          Powered by Metric Flux Solutions
        </div>
        <a
          href="/"
          className="text-[13px] text-white/85 hover:text-white inline-flex items-center gap-1.5"
        >
          <BackIcon light />
          Back to Trigger
        </a>
      </div>
    </footer>
  );
}

export function LegalTitleBlock({
  eyebrow,
  title,
  effectiveDate,
  lastUpdated,
}: {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  lastUpdated: string;
}) {
  return (
    <div className="text-center mb-10 sm:mb-14">
      <div className="text-brand-dark font-semibold uppercase tracking-[0.18em] text-xs">
        {eyebrow}
      </div>
      <h1 className="mt-3 text-[34px] sm:text-[44px] font-extrabold leading-[1.1] text-ink">
        {title}
      </h1>
      <div className="mt-5 inline-flex flex-col sm:flex-row gap-2 sm:gap-6 text-[13px] text-muted-text">
        <span>
          <span className="text-faint">Effective Date:</span>{" "}
          <span className="font-medium text-ink">{effectiveDate}</span>
        </span>
        <span className="hidden sm:inline text-faint">·</span>
        <span>
          <span className="text-faint">Last Updated:</span>{" "}
          <span className="font-medium text-ink">{lastUpdated}</span>
        </span>
      </div>
    </div>
  );
}

export function LegalTOC({
  sections,
  perPage,
  onPageChange,
}: {
  sections: PolicySection[];
  perPage: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <nav className="mb-12 border border-[#eef2f0] rounded-2xl bg-[#fafafa] p-6">
      <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-dark mb-3">
        Contents
      </div>
      <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
        {sections.map((s) => {
          const pageForSection = Math.floor((s.id - 1) / perPage) + 1;
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onPageChange(pageForSection)}
                className="group inline-flex items-baseline gap-2 text-[13.5px] text-body hover:text-brand-dark text-left w-full"
              >
                <span className="text-faint tabular-nums">
                  {String(s.id).padStart(2, "0")}
                </span>
                <span className="group-hover:underline underline-offset-2">
                  {s.title}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function LegalSectionBlock({ section }: { section: PolicySection }) {
  return (
    <article id={`section-${section.id}`} className="scroll-mt-24">
      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-[13px] font-bold text-brand-dark tabular-nums">
          {String(section.id).padStart(2, "0")}
        </span>
        <h2 className="text-[22px] sm:text-[26px] font-bold text-ink leading-tight">
          {section.title}
        </h2>
      </div>
      <div className="space-y-4">
        {section.blocks.map((block, i) => (
          <LegalBlockRenderer key={i} block={block as LegalBlock} />
        ))}
      </div>
    </article>
  );
}

// Extended block type — supports an optional "table" block for fee tables.
export type LegalBlock =
  | PolicyBlock
  | {
      type: "table";
      caption?: string;
      rows: { label: string; amount: string; strong?: boolean }[];
    };

export function LegalBlockRenderer({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-[15.5px] leading-[1.75] text-body text-left">
          {block.text}
        </p>
      );
    case "h":
      return (
        <h3 className="text-[17px] font-semibold text-ink mt-2">{block.text}</h3>
      );
    case "ul":
      return (
        <ul className="space-y-2 pl-1">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[15.5px] leading-[1.7] text-body text-left"
            >
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-brand-dark shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "contact":
      return (
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 bg-brand-mint-bg border border-brand-mint rounded-lg px-4 py-3">
          <span className="text-[12px] font-semibold uppercase tracking-wider text-brand-dark shrink-0 sm:min-w-[180px]">
            {block.label}
          </span>
          <span className="text-[15px] text-ink font-medium break-all">
            {block.value}
          </span>
        </div>
      );
    case "table":
      return (
        <div className="border border-brand-mint rounded-xl overflow-hidden">
          {block.caption && (
            <div className="bg-brand-mint-bg px-4 py-2 border-b border-brand-mint">
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-dark">
                {block.caption}
              </span>
            </div>
          )}
          <div className="divide-y divide-[#eef2f0]">
            {block.rows.map((row, i) => (
              <div
                key={i}
                className={`flex items-center justify-between gap-4 px-4 py-2.5 ${
                  row.strong
                    ? "bg-brand-mint-bg/60"
                    : "hover:bg-[#fafafa] transition-colors"
                }`}
              >
                <span
                  className={`text-[14.5px] text-left ${
                    row.strong ? "font-bold text-ink" : "text-body"
                  }`}
                >
                  {row.label}
                </span>
                <span
                  className={`text-[14.5px] tabular-nums ${
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
    default:
      return null;
  }
}

export function LegalPagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages: (number | "...")[] = [];
  const push = (p: number | "...") => {
    if (pages[pages.length - 1] !== p) pages.push(p);
  };

  push(1);
  if (currentPage - 2 > 1) push("...");
  for (let p = currentPage - 1; p <= currentPage + 1; p++) {
    if (p > 1 && p < totalPages) push(p);
  }
  if (currentPage + 2 < totalPages) push("...");
  if (totalPages > 1) push(totalPages);

  return (
    <nav
      aria-label="Pagination"
      className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#eef2f0] pt-6"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[14px] font-medium transition-colors ${
          currentPage === 1
            ? "text-faint cursor-not-allowed"
            : "text-ink hover:bg-brand-mint-bg hover:text-brand-dark"
        }`}
      >
        <BackIcon />
        Previous
      </button>

      <div className="flex items-center gap-1.5">
        {pages.map((p, i) =>
          p === "..." ? (
            <span
              key={`ellipsis-${i}`}
              className="w-9 text-center text-faint text-[14px]"
            >
              …
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => onPageChange(p)}
              aria-current={p === currentPage ? "page" : undefined}
              className={`min-w-9 h-9 px-2 inline-flex items-center justify-center rounded-lg text-[14px] font-medium transition-colors ${
                p === currentPage
                  ? "bg-brand text-white"
                  : "text-ink hover:bg-brand-mint-bg hover:text-brand-dark"
              }`}
            >
              {p}
            </button>
          )
        )}
      </div>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[14px] font-medium transition-colors ${
          currentPage === totalPages
            ? "text-faint cursor-not-allowed"
            : "text-ink hover:bg-brand-mint-bg hover:text-brand-dark"
        }`}
      >
        Next
        <ForwardIcon />
      </button>
    </nav>
  );
}

export function useLegalPagination(
  totalSections: number,
  sectionsPerPage: number
) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(totalSections / sectionsPerPage);

  const rawPage = parseInt(searchParams.get("p") ?? "1", 10);
  const currentPage = Number.isNaN(rawPage)
    ? 1
    : Math.max(1, Math.min(totalPages, rawPage));

  const goToPage = React.useCallback(
    (page: number) => {
      const clamped = Math.max(1, Math.min(totalPages, page));
      const params = new URLSearchParams(searchParams.toString());
      params.set("p", String(clamped));
      router.push(`?${params.toString()}`, { scroll: true });
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [router, searchParams, totalPages]
  );

  return { currentPage, totalPages, goToPage };
}

/* ---- icons ---- */
function BackIcon({ light }: { light?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className={light ? "text-white" : ""}
    >
      <path
        d="M19 12H5m0 0l6 6m-6-6l6-6"
        stroke={light ? "white" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ForwardIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
