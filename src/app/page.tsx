import { Header } from "@/components/trigger/header";
import { Hero } from "@/components/trigger/hero";
import { FeaturesGrid } from "@/components/trigger/features";
import { StreamingSection } from "@/components/trigger/streaming";
import { PayoutSection } from "@/components/trigger/payout";
import { ChatSection } from "@/components/trigger/chat";
import { SecuritySection } from "@/components/trigger/security";
import { AppDownloadSection } from "@/components/trigger/app-download";
import { Footer } from "@/components/trigger/footer";

export default function Home() {
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
