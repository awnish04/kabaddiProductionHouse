import type { Metadata } from "next"
import { Playfair_Display, Plus_Jakarta_Sans, Mukta } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/shared/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"

/* ── Headings: literary & high-end ─────────────────────────────── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

/* ── Body / Nav: modern & geometric ────────────────────────────── */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

/* ── Nepali script ──────────────────────────────────────────────── */
const mukta = Mukta({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mukta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kabaddi Films — Organic Cinema from the East",
  description:
    "Home of the Jaari Trilogy and the Kabaddi Legacy. Pioneering Organic Cinema rooted in Limbu/Yakthung heritage and the raw beauty of Nepal's eastern hills.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "flex min-h-screen flex-col",
        playfair.variable,
        jakarta.variable,
        mukta.variable
      )}
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          <TooltipProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
