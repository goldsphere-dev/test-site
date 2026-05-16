import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Body Alignment South Africa",
    template: "%s | Body Alignment South Africa",
  },
  description:
    "A balanced spine means a healthy body. Find a certified Body Alignment practitioner near you in South Africa. Non-invasive pain relief — no medication, no surgery.",
  keywords: [
    "body alignment",
    "pain relief",
    "spine alignment",
    "muscle therapy",
    "South Africa",
    "non-invasive",
    "back pain",
    "neck pain",
    "sciatica",
    "headaches",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col bg-offwhite text-charcoal antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
