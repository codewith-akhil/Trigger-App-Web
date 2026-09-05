import { Suspense } from "react";
import { Header } from "@/components/trigger/header";
import { Hero } from "@/components/trigger/hero";
import { FeaturesGrid } from "@/components/trigger/features";
import { StreamingSection } from "@/components/trigger/streaming";
import { PayoutSection } from "@/components/trigger/payout";
import { ChatSection } from "@/components/trigger/chat";
import { SecuritySection } from "@/components/trigger/security";
import { AppDownloadSection } from "@/components/trigger/app-download";
import { Footer } from "@/components/trigger/footer";
import { PrivacyPolicyPage } from "@/components/trigger/legal/privacy-policy-page";
import { TermsAndConditionsPage } from "@/components/trigger/legal/terms-conditions-page";
import { PricingPolicyPage } from "@/components/trigger/legal/pricing-policy-page";
import { AboutPage } from "@/components/trigger/about-page";
import { ContactPage } from "@/components/trigger/contact-page";
import { ReportPage } from "@/components/trigger/report-page";
import { HelpCenterPage } from "@/components/trigger/help-center-page";
import { CareersPage } from "@/components/trigger/careers-page";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = params.page;

  // Route between marketing site and legal/support pages via ?page= query param.
  if (page === "privacy-policy") {
    return (
      <Suspense fallback={<Loading />}>
        <PrivacyPolicyPage />
      </Suspense>
    );
  }

  if (page === "terms-conditions") {
    return (
      <Suspense fallback={<Loading />}>
        <TermsAndConditionsPage />
      </Suspense>
    );
  }

  if (page === "pricing-policy") {
    return (
      <Suspense fallback={<Loading />}>
        <PricingPolicyPage />
      </Suspense>
    );
  }

  if (page === "about") {
    return <AboutPage />;
  }

  if (page === "contact") {
    return <ContactPage />;
  }

  if (page === "report") {
    return <ReportPage />;
  }

  if (page === "help-center") {
    return <HelpCenterPage />;
  }

  if (page === "careers") {
    return <CareersPage />;
  }

  // Default: marketing landing page
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturesGrid />
        <StreamingSection />
        <PayoutSection />
        <ChatSection />
        <SecuritySection />
        <AppDownloadSection />
      </main>
      <Footer />
    </div>
  );
}

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center text-muted-text">
      Loading…
    </div>
  );
}
