"use client";

import * as React from "react";
import { PRIVACY_INTRO, PRIVACY_SECTIONS } from "./privacy-data";
import {
  LegalHeader,
  LegalFooter,
  LegalTitleBlock,
  LegalTOC,
  LegalSectionBlock,
  LegalPagination,
  useLegalPagination,
} from "./legal-primitives";

const SECTIONS_PER_PAGE = 5;

export function PrivacyPolicyPage() {
  const { currentPage, totalPages, goToPage } = useLegalPagination(
    PRIVACY_SECTIONS.length,
    SECTIONS_PER_PAGE
  );

  const startIdx = (currentPage - 1) * SECTIONS_PER_PAGE;
  const endIdx = startIdx + SECTIONS_PER_PAGE;
  const pageSections = PRIVACY_SECTIONS.slice(startIdx, endIdx);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <LegalHeader title="Privacy Policy" />

      <main className="flex-1">
        <div className="mx-auto max-w-[860px] px-5 sm:px-8 py-12 sm:py-16">
          {/* Title block */}
          <LegalTitleBlock
            eyebrow="Legal"
            title="Privacy Policy"
            effectiveDate={PRIVACY_INTRO.effectiveDate}
            lastUpdated={PRIVACY_INTRO.lastUpdated}
          />

          {/* Intro paragraphs (page 1 only) */}
          {currentPage === 1 && (
            <div className="mb-12 space-y-5">
              {PRIVACY_INTRO.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[16px] leading-[1.75] text-body text-left"
                >
                  {p}
                </p>
              ))}
            </div>
          )}

          {/* Table of contents (page 1 only) */}
          {currentPage === 1 && (
            <LegalTOC
              sections={PRIVACY_SECTIONS}
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
