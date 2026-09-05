"use client";

import * as React from "react";
import {
  TERMS_INTRO,
  TERMS_SECTIONS,
  TERMS_SUMMARY,
  TERMS_FINAL_NOTICE,
} from "./terms-data";
import {
  LegalHeader,
  LegalFooter,
  LegalTitleBlock,
  LegalTOC,
  LegalSectionBlock,
  LegalPagination,
  useLegalPagination,
} from "./legal-primitives";

const SECTIONS_PER_PAGE = 7;

export function TermsAndConditionsPage() {
  const { currentPage, totalPages, goToPage } = useLegalPagination(
    TERMS_SECTIONS.length,
    SECTIONS_PER_PAGE
  );

  const startIdx = (currentPage - 1) * SECTIONS_PER_PAGE;
  const endIdx = startIdx + SECTIONS_PER_PAGE;
  const pageSections = TERMS_SECTIONS.slice(startIdx, endIdx);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <LegalHeader title="Terms and Conditions" />

      <main className="flex-1">
        <div className="mx-auto max-w-[860px] px-5 sm:px-8 py-12 sm:py-16">
          {/* Title block */}
          <LegalTitleBlock
            eyebrow="Legal"
            title="Terms and Conditions"
            effectiveDate={TERMS_INTRO.effectiveDate}
            lastUpdated={TERMS_INTRO.lastUpdated}
          />

          {/* Intro paragraphs (page 1 only) */}
          {currentPage === 1 && (
            <div className="mb-12 space-y-5">
              {TERMS_INTRO.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-[16px] leading-[1.75] text-body text-left ${
                    i === 2 ? "font-semibold text-ink" : ""
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          )}

          {/* Quick summary table (page 1 only) */}
          {currentPage === 1 && (
            <div className="mb-12 border border-brand-mint rounded-2xl overflow-hidden">
              <div className="bg-brand-mint-bg px-5 py-3 border-b border-brand-mint">
                <div className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-dark">
                  Quick Summary
                </div>
              </div>
              <div className="divide-y divide-[#eef2f0]">
                {TERMS_SUMMARY.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-1 sm:gap-4 px-5 py-3 hover:bg-brand-mint-bg/40 transition-colors"
                  >
                    <div className="text-[13.5px] font-semibold text-ink">
                      {row.area}
                    </div>
                    <div className="text-[14px] text-body">{row.rule}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Table of contents (page 1 only) */}
          {currentPage === 1 && (
            <LegalTOC
              sections={TERMS_SECTIONS}
              perPage={SECTIONS_PER_PAGE}
              onPageChange={goToPage}
            />
          )}

          {/* Sections for current page */}
          <div className="space-y-12">
            {pageSections.map((section) => (
              <LegalSectionBlock key={section.id} section={section} />
            ))}
          </div>

          {/* Final legal notice — show on last page only */}
          {currentPage === totalPages && (
            <div className="mt-12 bg-brand-mint-bg border-l-2 border-brand rounded-r-xl p-5 sm:p-6">
              <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-dark mb-2">
                Final Legal Notice
              </div>
              <p className="text-[15px] leading-[1.75] text-body text-left">
                {TERMS_FINAL_NOTICE}
              </p>
            </div>
          )}

          {/* Pagination */}
          <LegalPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={goToPage}
          />
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}
