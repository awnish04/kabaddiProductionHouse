"use client"

import Image from "next/image"
import { useState, useEffect, useRef, useCallback } from "react"
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

type SlotStyle = {
  xFactor: number
  scale: number
  opacity: number
  zIndex: number
}

const SLOT_STYLES: Record<number, SlotStyle> = {
  "-2": { xFactor: -2, scale: 0.7, opacity: 0, zIndex: 0 },
  "-1": { xFactor: -1, scale: 0.85, opacity: 0.5, zIndex: 1 },
  "0": { xFactor: 0, scale: 1, opacity: 1, zIndex: 3 },
  "1": { xFactor: 1, scale: 0.85, opacity: 0.5, zIndex: 1 },
  "2": { xFactor: 2, scale: 0.7, opacity: 0, zIndex: 0 },
}

const SLOT_STYLES_MOBILE: Record<number, SlotStyle> = {
  "-2": { xFactor: -2, scale: 0.6, opacity: 0, zIndex: 0 },
  "-1": { xFactor: -1, scale: 0.8, opacity: 0.25, zIndex: 1 },
  "0": { xFactor: 0, scale: 1, opacity: 1, zIndex: 3 },
  "1": { xFactor: 1, scale: 0.8, opacity: 0.25, zIndex: 1 },
  "2": { xFactor: 2, scale: 0.6, opacity: 0, zIndex: 0 },
}

export function AwardsBadgesCarousel() {
  const [active, setActive] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const startTimer = useCallback(() => {
    if (timer.current) clearInterval(timer.current)
    timer.current = setInterval(() => setActive((p) => (p + 1) % N), 3500)
  }, [])

  useEffect(() => {
    startTimer()
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [startTimer])

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

  // CARD Height and width
  const CARD_W = isMobile ? 290 : "clamp(320px, 28vw, 440px)"

  const CARD_H = isMobile ? 350 : "clamp(360px, 32vw, 500px)"

  // IMPORTANT: better medium-screen control
  const GAP = isMobile ? 330 : 420

  const isTablet =
    typeof window !== "undefined" &&
    window.innerWidth < 1024 &&
    window.innerWidth >= 768

  const slots = isMobile
    ? SLOT_STYLES_MOBILE
    : isTablet
      ? {
          "-2": { xFactor: -2, scale: 0.78, opacity: 0, zIndex: 0 },
          "-1": { xFactor: -1, scale: 0.9, opacity: 0.6, zIndex: 1 },
          "0": { xFactor: 0, scale: 1.05, opacity: 1, zIndex: 3 },
          "1": { xFactor: 1, scale: 0.9, opacity: 0.6, zIndex: 1 },
          "2": { xFactor: 2, scale: 0.78, opacity: 0, zIndex: 0 },
        }
      : SLOT_STYLES

  const containerH = isMobile ? 350 : "clamp(420px, 40vw, 480px)"

  return (
    <section className="overflow-hidden py-10">
      <div className="container flex flex-col items-center gap-10">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="label">Achievements</span>
          <h2 className="max-w-xl">Our Awards</h2>
          <p className="lead max-w-2xl text-center">
            Celebrating excellence in authentic Nepali storytelling. Recognised
            nationally and internationally for our contribution to cinema.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="flex w-full items-center justify-between px-2 sm:px-4 md:px-6 lg:px-10">
          {/* PREV */}
          {!isMobile && (
            <button
              onClick={handlePrev}
              className="group z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-sm hover:border-primary hover:bg-primary/5"
            >
              <ArrowLeft className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
            </button>
          )}

          {/* CARDS */}
          <div className="relative mx-4 flex-1" style={{ height: containerH }}>
            {AWARDS.map((award, i) => {
              let slot = (i - active + N) % N
              if (slot > N / 2) slot -= N
              slot = Math.max(-2, Math.min(2, slot))

              const slotStyle = slots[slot] || {
                xFactor: 3,
                scale: 0.6,
                opacity: 0,
                zIndex: 0,
              }

              const xOffset = slotStyle.xFactor * GAP
              const isActive = slot === 0

              return (
                <div
                  key={i}
                  onClick={() => handleSelect(i)}
                  className="absolute top-1/2 left-1/2 cursor-pointer"
                  style={{
                    // width: CARD_W,
                    // height: CARD_H,
                    width: typeof CARD_W === "number" ? `${CARD_W}px` : CARD_W,
                    height: typeof CARD_H === "number" ? `${CARD_H}px` : CARD_H,
                    zIndex: slotStyle.zIndex,
                    opacity: slotStyle.opacity,
                    transform: `translateX(calc(-50% + ${xOffset}px)) translateY(-50%) scale(${slotStyle.scale})`,
                    transition: "all 0.5s ease",
                  }}
                >
                  <div
                    className={`flex h-full w-full items-center justify-center overflow-hidden border bg-card ${
                      isActive
                        ? "border-border/40 shadow-xl"
                        : "border-border/20 shadow-md"
                    }`}
                  >
                    <div className="relative flex h-full w-full items-center justify-center">
                      {/* ✅ BIGGER IMAGE (fixed issue) */}
                      <div className="absolute aspect-square w-full">
                        <Image
                          src="/golden-laurel-wreath.png"
                          alt="Laurel wreath"
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* ✅ CONTROLLED TEXT (not global h4 anymore) */}
                      <div className="relative z-10 flex w-full flex-col items-center text-center leading-tight">
                        {/* YEAR */}
                        <span
                          className="font-extrabold tracking-wide text-accent"
                          style={{ fontSize: "clamp(0.65rem, 1vw, 0.95rem)" }}
                        >
                          {award.year}
                        </span>

                        {/* TITLE */}
                        <p
                          className="font-bold text-foreground"
                          style={{ fontSize: "clamp(0.6rem, 1.1vw, 0.95rem)" }}
                        >
                          {award.title}
                        </p>

                        {/* CATEGORY */}
                        <p
                          className="font-medium text-primary"
                          style={{ fontSize: "clamp(0.55rem, 0.95vw, 0.8rem)" }}
                        >
                          {award.category}
                        </p>

                        {/* FILM */}
                        <p
                          className="text-muted-foreground"
                          style={{ fontSize: "clamp(0.5rem, 0.85vw, 0.75rem)" }}
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

          {/* NEXT */}
          {!isMobile && (
            <button
              onClick={handleNext}
              className="group z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-sm hover:border-primary hover:bg-primary/5"
            >
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
            </button>
          )}
        </div>

        {/* DOTS */}
        <div className="flex gap-2">
          {AWARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className="transition-all duration-300"
              style={{
                width: active === i ? 28 : 8,
                height: 8,
                borderRadius: 9999,
                background:
                  active === i ? "var(--color-primary)" : "var(--color-border)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
