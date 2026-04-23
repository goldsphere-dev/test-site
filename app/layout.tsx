import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Body Alignment South Africa",
    template: "%s | Body Alignment South Africa",
  },
  description:
    "A balanced spine means a healthy body. Find a Body Alignment practitioner near you in South Africa.",
  keywords: ["body alignment", "pain relief", "spine", "muscle therapy", "South Africa"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.className} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton number="27826868291" variant="floating" />
      </body>
    </html>
  )
}
