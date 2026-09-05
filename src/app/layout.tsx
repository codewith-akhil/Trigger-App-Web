import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trigger App — Real Connections Anywhere",
  description:
    "Trigger brings together real-time communication, live streaming and social interaction in one powerful app. Join a global 18+ community.",
  keywords: [
    "Trigger App",
    "live streaming",
    "chat",
    "video calls",
    "social app",
    "creator earnings",
    "android app",
  ],
  authors: [{ name: "Trigger App" }],
  icons: {
    icon: "https://res.cloudinary.com/wxytzoo1/image/upload/v1788569847/LOGO_2.png",
  },
  openGraph: {
    title: "Trigger App — Real Connections Anywhere",
    description:
      "Chat, call, stream and be part of something real. Join a global 18+ community on Trigger.",
    siteName: "Trigger App",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trigger App — Real Connections Anywhere",
    description:
      "Chat, call, stream and be part of something real. Join a global 18+ community on Trigger.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${caveat.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
