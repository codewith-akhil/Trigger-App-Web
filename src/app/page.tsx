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

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = params.page;

  // Route between marketing site and legal pages via ?page= query param.
  if (page === "privacy-policy") {
    return (
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-muted-text">
            Loading…
          </div>
        }
      >
        <PrivacyPolicyPage />
      </Suspense>
    );
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
