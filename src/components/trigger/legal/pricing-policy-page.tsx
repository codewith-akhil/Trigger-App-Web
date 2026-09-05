"use client";

import {
  PRICING_INTRO,
  PRICING_SECTIONS,
  PRICING_FINAL_NOTE,
} from "./pricing-data";
import {
  LegalHeader,
  LegalFooter,
  LegalTitleBlock,
  LegalSectionBlock,
} from "./legal-primitives";
import type { PolicySection } from "./privacy-data";

export function PricingPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <LegalHeader title="Pricing Policy" />

      <main className="flex-1">
        <div className="mx-auto max-w-[860px] px-5 sm:px-8 py-12 sm:py-16">
          <LegalTitleBlock
            eyebrow="Legal"
            title="Pricing Policy"
            effectiveDate={PRICING_INTRO.effectiveDate}
            lastUpdated={PRICING_INTRO.lastUpdated}
          />

          {/* Intro */}
          <div className="mb-12 space-y-5">
            {PRICING_INTRO.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[16px] leading-[1.75] text-body text-left"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Sections — cast to PolicySection since LegalSectionBlock
              accepts the extended block types via LegalBlock union. */}
          <div className="space-y-12">
            {PRICING_SECTIONS.map((section) => (
              <LegalSectionBlock
                key={section.id}
                section={section as unknown as PolicySection}
              />
            ))}
          </div>

          {/* Final notice */}
          <div className="mt-12 bg-brand-mint-bg border-l-2 border-brand rounded-r-xl p-5 sm:p-6">
            <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-dark mb-2">
              Important
            </div>
            <p className="text-[15px] leading-[1.75] text-body text-left">
              {PRICING_FINAL_NOTE}
            </p>
          </div>
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}
