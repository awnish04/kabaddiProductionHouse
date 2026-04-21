"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { Badge } from "@/components/ui/badge"
import { MagicCard } from "@/components/ui/magic-card"
import { ArrowLeft, ArrowRight } from "lucide-react"

const AWARDS = [
  {
    year: "2023",
    title: "National Film Award",
    category: "Best Film",
    film: "Jaari",
  },
  {
    year: "2023",
    title: "Box Office Champion",
    category: "All-Time Blockbuster",
    film: "Jaari",
  },
  {
    year: "2024",
    title: "Critics Choice Award",
    category: "Best Director",
    film: "Mansara",
  },
  {
    year: "2022",
    title: "Audience Favorite",
    category: "People's Choice",
    film: "Kabaddi 4",
  },
  {
    year: "2019",
    title: "Cultural Heritage Award",
    category: "Best Cultural Film",
    film: "Kabaddi Kabaddi Kabaddi",
  },
  {
    year: "2015",
    title: "Breakthrough Film",
    category: "Best Sequel",
    film: "Kabaddi Kabaddi",
  },
]

const N = AWARDS.length

// Desktop (bigger cards)
const POS_DESKTOP = [
  { w: 400, h: 520, opacity: 1, scale: 1 },
  { w: 300, h: 400, opacity: 0.75, scale: 0.93 },
  { w: 230, h: 320, opacity: 0.5, scale: 0.86 },
  { w: 180, h: 260, opacity: 0.28, scale: 0.78 },
]

// Mobile (bigger but still fits)
const POS_MOBILE = [
  { w: 280, h: 360, opacity: 1, scale: 1 },
  { w: 200, h: 260, opacity: 0.55, scale: 0.9 },
  { w: 120, h: 180, opacity: 0, scale: 0.8 },
  { w: 120, h: 180, opacity: 0, scale: 0.8 },
]

// Desktop spacing (based on new widths)
const X_DESKTOP = [0, 420, 420 + 320, 420 + 320 + 250]

// Mobile spacing
const X_MOBILE = [0, 300, 900, 900]

export function AwardsBadgesCarousel() {
  const [active, setActive] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  function startTimer() {
    if (timer.current) clearInterval(timer.current)
    timer.current = setInterval(() => setActive((p) => (p + 1) % N), 3200)
  }

  useEffect(() => {
    startTimer()
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleNext() {
    setActive((p) => (p + 1) % N)
    startTimer()
  }
  function handlePrev() {
    setActive((p) => (p - 1 + N) % N)
    startTimer()
  }
  function handleSelect(i: number) {
    setActive(i)
    startTimer()
  }

  const POS = isMobile ? POS_MOBILE : POS_DESKTOP
  const X = isMobile ? X_MOBILE : X_DESKTOP

  const cards = AWARDS.map((award, i) => {
    const pos = (i - active + N) % N
    return { award, i, pos }
  })

  // Wreath sizes: large enough so text fits comfortably inside the ring
  const WREATH_DESKTOP = [440, 340, 260, 200]
  const WREATH_MOBILE = [320, 240, 160, 160]
  const WREATH = isMobile ? WREATH_MOBILE : WREATH_DESKTOP

  // const containerH = isMobile ? 340 : 460
  const containerH = isMobile ? 420 : 580

  return (
    <section className="hero">
      <div className="w-full py-16 lg:py-0">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[400px_1fr]">
            {/* ── LEFT: Text + nav ── */}
            <div className="flex flex-col gap-5">
              <Badge className="w-fit bg-accent text-accent-foreground">
                Achievements
              </Badge>

              <h2>We&apos;ve got Clutch awards</h2>

              <p>
                Celebrating excellence in authentic Nepali storytelling.
                Recognised nationally and internationally for our contribution
                to cinema.
              </p>

              {/* Nav arrows + progress */}
              <div className="mt-1 flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  aria-label="Previous"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary/5"
                >
                  <ArrowLeft className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </button>

                <div className="relative h-px w-24 overflow-hidden bg-border">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary transition-all duration-500"
                    style={{ width: `${((active + 1) / N) * 100}%` }}
                  />
                </div>

                <button
                  onClick={handleNext}
                  aria-label="Next"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary/5"
                >
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </button>
              </div>
            </div>

            {/* ── RIGHT: Cards strip ── */}
            <div
              className="relative overflow-hidden"
              style={{ height: containerH }}
            >
              {/* Right-edge fade */}
              <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

              {cards.map(({ award, i, pos }) => {
                const style = POS[pos] ?? {
                  w: 100,
                  h: 160,
                  opacity: 0,
                  scale: 0.7,
                }
                const xOffset = X[pos] ?? 900
                const wreath = WREATH[pos] ?? 90
                const isActive = pos === 0

                // Text sizes scale with wreath
                const fs = {
                  year: isActive
                    ? isMobile
                      ? "0.85rem"
                      : "1.2rem"
                    : isMobile
                      ? "0.65rem"
                      : "0.75rem",
                  title: isActive
                    ? isMobile
                      ? "0.85rem"
                      : "1.2rem"
                    : isMobile
                      ? "0.7rem"
                      : "0.8rem",
                  category: isActive
                    ? isMobile
                      ? "0.8rem"
                      : "1rem"
                    : isMobile
                      ? "0.6rem"
                      : "0.7rem",
                  film: isActive
                    ? isMobile
                      ? "0.75rem"
                      : "0.85rem"
                    : isMobile
                      ? "0.55rem"
                      : "0.65rem",
                }

                return (
                  <div
                    key={i}
                    onClick={() => handleSelect(i)}
                    className="absolute top-1/2 cursor-pointer"
                    style={{
                      width: style.w,
                      height: style.h,
                      opacity: style.opacity,
                      transform: `translateX(${xOffset}px) translateY(-50%) scale(${style.scale})`,
                      transition:
                        "width 0.55s cubic-bezier(0.4,0,0.2,1), height 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.55s ease, transform 0.55s cubic-bezier(0.4,0,0.2,1)",
                      transformOrigin: "left center",
                    }}
                  >
                    <div
                      className={`ease flex h-full w-full items-center justify-center border bg-card transition-all hover:scale-105 ${
                        isActive
                          ? "border-border/30 shadow-md"
                          : "border-border/30 shadow-sm"
                      }`}
                    >
                      <div className="relative flex h-full w-full items-center justify-center">
                        {/* Wreath image — sized to fill card with breathing room */}
                        <div
                          className="absolute"
                          style={{
                            width: wreath,
                            height: wreath,
                            transition: "width 0.55s ease, height 0.55s ease",
                          }}
                        >
                          <Image
                            src="/golden-laurel-wreath.png"
                            alt="Laurel wreath"
                            fill
                            className="object-contain"
                            sizes="300px"
                          />
                        </div>

                        {/* Text layered inside wreath ring */}
                        <div
                          className="relative z-10 flex flex-col items-center justify-center gap-0.5 text-center"
                          style={{
                            width: wreath * 0.58,
                            transition: "width 0.55s ease",
                          }}
                        >
                          <span
                            className="font-heading leading-none font-bold tracking-tight text-accent"
                            style={{
                              fontSize: fs.year,
                              transition: "font-size 0.4s ease",
                            }}
                          >
                            {award.year}
                          </span>
                          <p
                            className="font-heading leading-tight font-bold tracking-tight text-foreground"
                            style={{
                              fontSize: fs.title,
                              transition: "font-size 0.4s ease",
                            }}
                          >
                            {award.title}
                          </p>
                          <p
                            className="font-heading font-semibold tracking-tight text-primary"
                            style={{
                              fontSize: fs.category,
                              transition: "font-size 0.4s ease",
                            }}
                          >
                            {award.category}
                          </p>
                          <p
                            className="font-heading font-bold tracking-tight text-muted-foreground"
                            style={{
                              fontSize: fs.film,
                              transition: "font-size 0.4s ease",
                            }}
                          >
                            {award.film}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
