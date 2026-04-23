"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FilmIcon } from "lucide-react"

const FILMS = [
  {
    title: "Jaari 2: Song of Chyabrung",
    year: "2025",
    synopsis:
      "The anticipated sequel — the cultural rhythm of the Chyabrung drum amidst the backdrop of historical change.",
    badge: "Coming Soon",
    image: "/Jaari-2_2025_1.jpg",
  },
  {
    title: "Mansara",
    year: "2024",
    synopsis:
      "A social drama exploring ethnic identities, fertility, and migration in the hills of Nepal.",
    badge: "Now Showing",
    image: "/Mansara_2024_1.jpg",
  },
  {
    title: "Jaari",
    year: "2023",
    synopsis:
      "A story of resilience and identity set against the breathtaking landscapes of rural Nepal.",
    badge: "Watch Now",
    image: "/Jaari_2023_1.jpg",
  },
  {
    title: "Kabaddi",
    year: "2014",
    synopsis:
      "A groundbreaking Nepali sports drama that defined a generation of cinema.",
    badge: "Classic",
    image: "/Kabaddi_2014_1.jpg",
  },
]

// ─── Desktop card (horizontal expand) ────────────────────────────────────────
function DesktopCard({
  film,
  isActive,
  onHover,
}: {
  film: (typeof FILMS)[0]
  isActive: boolean
  onHover: () => void
}) {
  return (
    <motion.div
      onHoverStart={onHover}
      onFocus={onHover}
      tabIndex={0}
      role="button"
      aria-label={film.title}
      className="relative h-full cursor-pointer overflow-hidden outline-none"
      animate={{ flexGrow: isActive ? 5 : 0.6 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      style={{ minWidth: 0 }}
    >
      <Image
        src={film.image}
        alt={film.title}
        fill
        className="object-cover"
        sizes="25vw"
        priority
      />

      {/* Gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isActive
            ? "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.3) 45%, transparent 70%)"
            : "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.15) 100%)",
        }}
        transition={{ duration: 0.55 }}
      />

      {/* Collapsed: vertical title */}
      <AnimatePresence>
        {!isActive && (
          <motion.span
            key="vtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] font-medium tracking-[0.2em] whitespace-nowrap text-white/75 uppercase"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "translateX(-50%) rotate(180deg)",
            }}
          >
            {film.title}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Expanded: content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="absolute right-0 bottom-0 left-0 p-7"
          >
            <Badge className="label bg-primary">{film.badge}</Badge>
            <div className="mb-2 flex items-baseline gap-2">
              <h3 className="text-2xl leading-tight font-bold text-white">
                {film.title}
              </h3>
              <span className="shrink-0 text-sm text-white">{film.year}</span>
            </div>
            <p className="max-w-[28ch] text-sm leading-relaxed text-white/80">
              {film.synopsis}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right edge separator */}
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-px bg-white/10" />
    </motion.div>
  )
}

// ─── Mobile card (vertical expand) ───────────────────────────────────────────
function MobileCard({
  film,
  isActive,
  onTap,
}: {
  film: (typeof FILMS)[0]
  isActive: boolean
  onTap: () => void
}) {
  return (
    <motion.div
      onClick={onTap}
      className="relative w-full cursor-pointer overflow-hidden"
      animate={{ height: isActive ? "56vw" : "16vw" }}
      transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
    >
      <Image
        src={film.image}
        alt={film.title}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      <motion.div
        className="absolute inset-0"
        animate={{
          background: isActive
            ? "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.25) 50%, transparent 75%)"
            : "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)",
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Collapsed: horizontal title */}
      <AnimatePresence>
        {!isActive && (
          <motion.span
            key="htitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute inset-0 flex items-center px-5 text-xs font-medium tracking-widest text-white/80 uppercase"
          >
            {film.title}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Expanded: content */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="mcontent"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="absolute right-0 bottom-0 left-0 p-4"
          >
            <Badge className="label bg-primary">{film.badge}</Badge>
            <div className="mb-1 flex items-baseline gap-2">
              <h3 className="text-base leading-tight font-bold text-white">
                {film.title}
              </h3>
              <span className="shrink-0 text-xs text-white/40">
                {film.year}
              </span>
            </div>
            <p className="line-clamp-2 text-xs leading-relaxed text-white/60">
              {film.synopsis}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-white/10" />
    </motion.div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function ComingSoon() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="overflow-hidden">
      <div className="container">
        {/* Section header */}
        <div className="mb-8 flex flex-col gap-2 px-4 sm:px-0">
          <span className="label">In Theatres</span>
          <h2>Creating unforgettable moments on the big screen</h2>
        </div>

        {/* Desktop layout — horizontal expanding panels */}
        <div className="hidden h-[70vh] w-full overflow-hidden sm:flex">
          {FILMS.map((film, i) => (
            <DesktopCard
              key={film.title}
              film={film}
              isActive={activeIndex === i}
              onHover={() => setActiveIndex(i)}
            />
          ))}
        </div>

        {/* Mobile layout — vertical expanding panels */}
        <div className="flex w-full flex-col overflow-hidden sm:hidden">
          {FILMS.map((film, i) => (
            <MobileCard
              key={film.title}
              film={film}
              isActive={activeIndex === i}
              onTap={() => setActiveIndex(i)}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            variant="default"
            asChild
            size="lg"
            className="w-full sm:w-auto sm:min-w-[220px]"
          >
            <Link href="/films" className="flex items-center gap-2">
              <FilmIcon />
              View All Films
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
