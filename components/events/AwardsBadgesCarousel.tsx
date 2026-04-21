// "use client"

// import Image from "next/image"
// import { useState, useEffect, useRef } from "react"
// import { Badge } from "@/components/ui/badge"
// import { ArrowLeft, ArrowRight } from "lucide-react"

// const AWARDS = [
//   {
//     year: "2023",
//     title: "National Film Award",
//     category: "Best Film",
//     film: "Jaari",
//   },
//   {
//     year: "2023",
//     title: "Box Office Champion",
//     category: "All-Time Blockbuster",
//     film: "Jaari",
//   },
//   {
//     year: "2024",
//     title: "Critics Choice Award",
//     category: "Best Director",
//     film: "Mansara",
//   },
//   {
//     year: "2022",
//     title: "Audience Favorite",
//     category: "People's Choice",
//     film: "Kabaddi 4",
//   },
//   {
//     year: "2019",
//     title: "Cultural Heritage Award",
//     category: "Best Cultural Film",
//     film: "Kabaddi Kabaddi Kabaddi",
//   },
//   {
//     year: "2015",
//     title: "Breakthrough Film",
//     category: "Best Sequel",
//     film: "Kabaddi Kabaddi",
//   },
// ]

// const N = AWARDS.length

// // Position styles: 0 = active (left/big), 3 = entering (right/tiny)
// const POS = [
//   { w: 300, h: 380, opacity: 1, scale: 1 },
//   { w: 230, h: 300, opacity: 0.75, scale: 0.93 },
//   { w: 180, h: 250, opacity: 0.5, scale: 0.86 },
//   { w: 140, h: 210, opacity: 0.28, scale: 0.78 },
// ]

// export function AwardsBadgesCarousel() {
//   const [active, setActive] = useState(0)
//   const timer = useRef<ReturnType<typeof setInterval> | null>(null)

//   function startTimer(fn: () => void) {
//     if (timer.current) clearInterval(timer.current)
//     timer.current = setInterval(fn, 3200)
//   }

//   // Advance active: next card enters from right, grows left
//   function advance() {
//     setActive((p) => (p + 1) % N)
//   }

//   function goBack() {
//     setActive((p) => (p - 1 + N) % N)
//   }

//   useEffect(() => {
//     startTimer(advance)
//     return () => {
//       if (timer.current) clearInterval(timer.current)
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   function handleNext() {
//     advance()
//     startTimer(advance)
//   }
//   function handlePrev() {
//     goBack()
//     startTimer(advance)
//   }
//   function handleSelect(i: number) {
//     setActive(i)
//     startTimer(advance)
//   }

//   // Stable order: always render all N cards, just change their position slot
//   // position of card i = (i - active + N) % N
//   // Only show positions 0-3; cards in position 4+ are invisible (right, off-screen)
//   const cards = AWARDS.map((award, i) => {
//     const pos = (i - active + N) % N
//     return { award, i, pos }
//   })

//   return (
//     <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
//       <div className="w-full">
//         <div className="container">
//           <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[360px_1fr]">
//             {/* ── LEFT: Text + nav ── */}
//             <div className="flex flex-col gap-6">
//               <Badge className="w-fit bg-accent text-accent-foreground">
//                 Achievements
//               </Badge>

//               <h2 className="text-4xl leading-tight font-bold md:text-5xl">
//                 We&apos;ve got
//                 <br />
//                 <span className="text-foreground">Clutch awards</span>
//               </h2>

//               <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
//                 Celebrating excellence in authentic Nepali storytelling.
//                 Recognised nationally and internationally for our contribution
//                 to cinema.
//               </p>

//               <div className="mt-2 flex items-center gap-4">
//                 <button
//                   onClick={handlePrev}
//                   aria-label="Previous"
//                   className="group flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary/5"
//                 >
//                   <ArrowLeft className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
//                 </button>

//                 <div className="relative h-px max-w-[120px] flex-1 overflow-hidden bg-border">
//                   <div
//                     className="absolute top-0 left-0 h-full bg-primary transition-all duration-500"
//                     style={{ width: `${((active + 1) / N) * 100}%` }}
//                   />
//                 </div>

//                 <button
//                   onClick={handleNext}
//                   aria-label="Next"
//                   className="group flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:bg-primary/5"
//                 >
//                   <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
//                 </button>
//               </div>

//             </div>

//             {/* ── RIGHT: Cards strip ── */}
//             <div className="relative overflow-hidden" style={{ height: 420 }}>
//               {/* Right-edge fade */}
//               <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-28 bg-gradient-to-l from-background to-transparent" />

//               {/* All cards rendered, positioned absolutely, animated via CSS transitions */}
//               {cards.map(({ award, i, pos }) => {
//                 const style = POS[pos] ?? {
//                   w: 100,
//                   h: 180,
//                   opacity: 0,
//                   scale: 0.7,
//                 }
//                 const isActive = pos === 0

//                 // x offset: stack cards left-to-right based on position
//                 // pos 0 starts at 0, each subsequent card offset by previous widths + gap
//                 const xOffsets = [0, 316, 316 + 246, 316 + 246 + 196]
//                 const x = xOffsets[pos] ?? 900 // off-screen if pos >= 4

//                 const wreathSize = isActive
//                   ? 210
//                   : pos === 1
//                     ? 160
//                     : pos === 2
//                       ? 130
//                       : 105

//                 return (
//                   <div
//                     key={i} // STABLE key = card index, not position
//                     onClick={() => handleSelect(i)}
//                     className="absolute top-1/2 cursor-pointer"
//                     style={{
//                       width: style.w,
//                       height: style.h,
//                       opacity: style.opacity,
//                       transform: `translateX(${x}px) translateY(-50%) scale(${style.scale})`,
//                       transition:
//                         "width 0.55s cubic-bezier(0.4,0,0.2,1), height 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.55s ease, transform 0.55s cubic-bezier(0.4,0,0.2,1)",
//                       transformOrigin: "left center",
//                     }}
//                   >
//                     <div
//                       className={`flex h-full w-full items-center justify-center border bg-card ${
//                         isActive
//                           ? "border-border/70 shadow-md"
//                           : "border-border/30 shadow-sm"
//                       }`}
//                       style={{ borderRadius: 14 }}
//                     >
//                       {/* Wreath */}
//                       <div className="relative flex h-full w-full items-center justify-center">
//                         <div
//                           className="absolute"
//                           style={{
//                             width: wreathSize,
//                             height: wreathSize,
//                             transition: "width 0.55s ease, height 0.55s ease",
//                           }}
//                         >
//                           <Image
//                             src="/golden-laurel-wreath.png"
//                             alt="Laurel wreath"
//                             fill
//                             className="object-contain"
//                             sizes="210px"
//                           />
//                         </div>

//                         {/* Text inside wreath */}
//                         <div
//                           className="relative z-10 flex flex-col items-center justify-center text-center"
//                           style={{ width: wreathSize * 0.6 }}
//                         >
//                           <span
//                             className="mb-1 block leading-none font-bold text-accent"
//                             style={{
//                               fontSize: isActive ? "0.78rem" : "0.58rem",
//                             }}
//                           >
//                             {award.year}
//                           </span>
//                           <p
//                             className="leading-tight font-bold text-foreground"
//                             style={{
//                               fontSize: isActive ? "0.8rem" : "0.52rem",
//                             }}
//                           >
//                             {award.title}
//                           </p>
//                           <p
//                             className="mt-0.5 font-semibold text-primary"
//                             style={{
//                               fontSize: isActive ? "0.68rem" : "0.46rem",
//                             }}
//                           >
//                             {award.category}
//                           </p>
//                           <p
//                             className="mt-0.5 text-muted-foreground"
//                             style={{
//                               fontSize: isActive ? "0.62rem" : "0.42rem",
//                             }}
//                           >
//                             {award.film}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
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

// Desktop position styles
const POS_DESKTOP = [
  { w: 320, h: 420, opacity: 1, scale: 1 },
  { w: 250, h: 330, opacity: 0.75, scale: 0.93 },
  { w: 195, h: 270, opacity: 0.5, scale: 0.86 },
  { w: 150, h: 220, opacity: 0.28, scale: 0.78 },
]
// x offsets for desktop (gap=16 between cards)
const X_DESKTOP = [0, 336, 336 + 266, 336 + 266 + 211]

// Mobile: show 2 cards — active + 1 preview
const POS_MOBILE = [
  { w: 230, h: 300, opacity: 1, scale: 1 },
  { w: 160, h: 220, opacity: 0.55, scale: 0.9 },
  { w: 100, h: 160, opacity: 0, scale: 0.8 }, // hidden
  { w: 100, h: 160, opacity: 0, scale: 0.8 }, // hidden
]
const X_MOBILE = [0, 246, 900, 900]

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
  const WREATH_DESKTOP = [360, 280, 220, 180]
  const WREATH_MOBILE = [260, 180, 120, 120]
  const WREATH = isMobile ? WREATH_MOBILE : WREATH_DESKTOP

  const containerH = isMobile ? 340 : 460

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background">
      <div className="w-full py-16 lg:py-0">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[360px_1fr]">
            {/* ── LEFT: Text + nav ── */}
            <div className="flex flex-col gap-5">
              <Badge className="w-fit bg-accent text-accent-foreground">
                Achievements
              </Badge>

              <h2 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                We&apos;ve got
                <br />
                <span className="text-foreground">Clutch awards</span>
              </h2>

              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
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
                      ? "0.75rem"
                      : "0.9rem"
                    : isMobile
                      ? "0.55rem"
                      : "0.65rem",
                  title: isActive
                    ? isMobile
                      ? "0.78rem"
                      : "0.92rem"
                    : isMobile
                      ? "0.52rem"
                      : "0.62rem",
                  category: isActive
                    ? isMobile
                      ? "0.65rem"
                      : "0.78rem"
                    : isMobile
                      ? "0.44rem"
                      : "0.54rem",
                  film: isActive
                    ? isMobile
                      ? "0.6rem"
                      : "0.7rem"
                    : isMobile
                      ? "0.4rem"
                      : "0.5rem",
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
                      className={`flex h-full w-full items-center justify-center border bg-card ${
                        isActive
                          ? "border-border/70 shadow-md"
                          : "border-border/30 shadow-sm"
                      }`}
                      style={{ borderRadius: 14 }}
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
                            className="leading-none font-bold text-accent"
                            style={{
                              fontSize: fs.year,
                              transition: "font-size 0.4s ease",
                            }}
                          >
                            {award.year}
                          </span>
                          <p
                            className="leading-tight font-bold text-foreground"
                            style={{
                              fontSize: fs.title,
                              transition: "font-size 0.4s ease",
                            }}
                          >
                            {award.title}
                          </p>
                          <p
                            className="font-semibold text-primary"
                            style={{
                              fontSize: fs.category,
                              transition: "font-size 0.4s ease",
                            }}
                          >
                            {award.category}
                          </p>
                          <p
                            className="text-muted-foreground"
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

