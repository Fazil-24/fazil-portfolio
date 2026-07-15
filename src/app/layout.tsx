import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Fazil — AI Engineer",
  description:
    "Portfolio of Mohamed Fazil, AI Engineer — agentic AI, LLM/RAG systems, computer vision, and production ML. 4+ years experience, 1 patent, 100+ projects shipped.",
  metadataBase: new URL("https://mohamedfazil.dev"),
  openGraph: {
    title: "Mohamed Fazil — AI Engineer",
    description:
      "Agentic AI, LLM/RAG systems, and computer vision engineer. Explore projects, experience, hackathon wins, and research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
