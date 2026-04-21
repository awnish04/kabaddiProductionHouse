// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Card } from "@/components/ui/card"
// import { AspectRatio } from "@/components/ui/aspect-ratio"

// const FILMS = [
//   {
//     title: "Jaari 2: Song of Chyabrung",
//     year: "2025",
//     synopsis:
//       "The anticipated sequel — the cultural rhythm of the Chyabrung drum amidst the backdrop of historical change.",
//     badge: "Coming Soon",
//     badgeClass: "bg-accent text-accent-foreground",
//     image: "/Jaari-2_2025_1.jpg",
//   },
//   {
//     title: "Mansara",
//     year: "2024",
//     synopsis:
//       "A social drama exploring ethnic identities, fertility, and migration in the hills of Nepal.",
//     badge: "Now Showing",
//     badgeClass: "bg-primary text-primary-foreground",
//     image: "/Mansara_2024_2.jpg",
//   },
// ]

// export function ComingSoon() {
//   return (
//     <section className="bg-secondary">
//       <div className="container">
//         {/* Section header — same pattern as FeaturedFilms */}
//         <div className="mb-10 flex flex-col gap-2">
//           <span className="label text-primary">In Theatres</span>
//           <h2>Creating unforgettable moments on the big screen</h2>
//         </div>

//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//           {FILMS.map((film) => (
//             <Card
//               key={film.title}
//               className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg"
//             >
//               <AspectRatio ratio={5 / 5}>
//                 <Image
//                   src={film.image}
//                   alt={film.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//                 {/* gradient overlay */}
//                 <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

//                 {/* overlay content */}
//                 <div className="absolute bottom-0 left-0 p-5">
//                   <Badge className={`mb-2 ${film.badgeClass}`}>
//                     {film.badge}
//                   </Badge>
//                   <h3 className="text-white">{film.title}</h3>
//                   <p className="mt-1 max-w-sm text-sm text-white/70">
//                     {film.synopsis}
//                   </p>
//                 </div>
//               </AspectRatio>
//             </Card>
//           ))}
//         </div>

//         <div className="mt-8 flex justify-center">
//           <Button
//             asChild
//             size="lg"
//             className="bg-accent text-accent-foreground hover:bg-accent/90"
//           >
//             <Link href="/films">View All Films</Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"

// const FILMS = [
//   {
//     title: "Jaari 2: Song of Chyabrung",
//     year: "2025",
//     synopsis:
//       "The anticipated sequel — the cultural rhythm of the Chyabrung drum amidst the backdrop of historical change.",
//     badge: "Coming Soon",
//     badgeVariant: "accent" as const,
//     image: "/Jaari-2_2025_1.jpg",
//     secondImage: "/Jaari-2_2025_2.jpg",
//   },
//   {
//     title: "Mansara",
//     year: "2024",
//     synopsis:
//       "A social drama exploring ethnic identities, fertility, and migration in the hills of Nepal.",
//     badge: "Now Showing",
//     badgeVariant: "primary" as const,
//     image: "/Mansara_2024_1.jpg",
//     secondImage: "/Mansara_2024_2.jpg",
//   },
//   {
//     title: "Jaari",
//     year: "2023",
//     synopsis:
//       "A story of resilience and identity set against the breathtaking landscapes of rural Nepal.",
//     badge: "Watch Now",
//     badgeVariant: "secondary" as const,
//     image: "/Jaari_2023_1.jpg",
//     secondImage: "/Jaari_2023_2.jpg",
//   },
//   {
//     title: "Kabaddi",
//     year: "2014",
//     synopsis:
//       "A groundbreaking Nepali sports drama that defined a generation of cinema.",
//     badge: "Classic",
//     badgeVariant: "secondary" as const,
//     image: "/Kabaddi_2014_1.jpg",
//     secondImage: "/Kabaddi_2014_3.jpg",
//   },
// ]

// const badgeStyles: Record<string, string> = {
//   accent: "bg-accent text-accent-foreground",
//   primary: "bg-primary text-primary-foreground",
//   secondary: "bg-white/20 text-white backdrop-blur-sm",
// }

// export function ComingSoon() {
//   const [activeIndex, setActiveIndex] = useState(0)

//   return (
//     <section className="overflow-hidden bg-secondary">
//       <div className="container">
//         {/* Section header */}
//         <div className="mb-10 flex flex-col gap-2">
//           <span className="label text-primary">In Theatres</span>
//           <h2>Creating unforgettable moments on the big screen</h2>
//         </div>

//         {/* Expanding Cards */}
//         <div
//           className="flex h-[75vh] min-h-[400px] gap-3"
//           style={{ fontFamily: "inherit" }}
//         >
//           {FILMS.map((film, i) => {
//             const isActive = activeIndex === i

//             return (
//               <div
//                 key={film.title}
//                 onClick={() => setActiveIndex(i)}
//                 className="relative cursor-pointer overflow-hidden"
//                 style={{
//                   flex: isActive ? 5 : 0.5,
//                   transition: "flex 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
//                   minWidth: 0,
//                 }}
//               >
//                 {/* Background Image */}
//                 <div className="absolute inset-0">
//                   <Image
//                     src={film.image}
//                     alt={film.title}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, 25vw"
//                     priority={i === 0}
//                   />
//                 </div>

//                 {/* Gradient overlay — always present */}
//                 <div
//                   className="absolute inset-0 transition-opacity duration-500"
//                   style={{
//                     background: isActive
//                       ? "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 40%, transparent 70%)"
//                       : "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.25) 100%)",
//                   }}
//                 />

//                 {/* Collapsed state — vertical title */}
//                 <div
//                   className="absolute inset-0 flex items-end justify-center pb-6 transition-opacity duration-300"
//                   style={{ opacity: isActive ? 0 : 1 }}
//                 >
//                   <span
//                     className="text-sm font-semibold whitespace-nowrap text-white/90"
//                     style={{
//                       writingMode: "vertical-rl",
//                       textOrientation: "mixed",
//                       transform: "rotate(180deg)",
//                       letterSpacing: "0.08em",
//                     }}
//                   >
//                     {film.title}
//                   </span>
//                 </div>

//                 {/* Expanded state — overlay content */}
//                 <div
//                   className="absolute right-0 bottom-0 left-0 p-6 transition-all duration-500"
//                   style={{
//                     opacity: isActive ? 1 : 0,
//                     transform: isActive ? "translateY(0)" : "translateY(12px)",
//                     transitionDelay: isActive ? "0.35s" : "0s",
//                     pointerEvents: isActive ? "auto" : "none",
//                   }}
//                 >
//                   <Badge
//                     className={`mb-3 text-xs font-semibold tracking-wide ${
//                       badgeStyles[film.badgeVariant] ?? badgeStyles.secondary
//                     }`}
//                   >
//                     {film.badge}
//                   </Badge>

//                   <div className="mb-1 flex items-baseline gap-2">
//                     <h3 className="text-xl leading-tight font-bold text-white">
//                       {film.title}
//                     </h3>
//                     <span className="text-sm font-normal text-white/50">
//                       {film.year}
//                     </span>
//                   </div>

//                   <p className="max-w-sm text-sm leading-relaxed text-white/70">
//                     {film.synopsis}
//                   </p>
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         {/* Responsive: hide last 2 on mobile (matches original pattern) */}
//         <style>{`
//           @media (max-width: 480px) {
//             .expanding-cards > div:nth-child(n+3) {
//               display: none;
//             }
//           }
//         `}</style>

//         <div className="mt-8 flex justify-center">
//           <Button
//             asChild
//             size="lg"
//             className="bg-accent text-accent-foreground hover:bg-accent/90"
//           >
//             <Link href="/films">View All Films</Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const FILMS = [
  {
    title: "Jaari 2: Song of Chyabrung",
    year: "2025",
    synopsis:
      "The anticipated sequel — the cultural rhythm of the Chyabrung drum amidst the backdrop of historical change.",
    badge: "Coming Soon",
    badgeClass: "bg-accent text-accent-foreground",
    image: "/Jaari-2_2025_1.jpg",
  },
  {
    title: "Mansara",
    year: "2024",
    synopsis:
      "A social drama exploring ethnic identities, fertility, and migration in the hills of Nepal.",
    badge: "Now Showing",
    badgeClass: "bg-primary text-primary-foreground",
    image: "/Mansara_2024_1.jpg",
  },
  {
    title: "Jaari",
    year: "2023",
    synopsis:
      "A story of resilience and identity set against the breathtaking landscapes of rural Nepal.",
    badge: "Watch Now",
    badgeClass: "bg-white/20 text-white backdrop-blur-sm",
    image: "/Jaari_2023_1.jpg",
  },
  {
    title: "Kabaddi",
    year: "2014",
    synopsis:
      "A groundbreaking Nepali sports drama that defined a generation of cinema.",
    badge: "Classic",
    badgeClass: "bg-white/20 text-white backdrop-blur-sm",
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
            <Badge
              className={`mb-3 text-[10px] font-bold tracking-widest uppercase ${film.badgeClass}`}
            >
              {film.badge}
            </Badge>
            <div className="mb-2 flex items-baseline gap-2">
              <h3 className="text-2xl leading-tight font-bold text-white">
                {film.title}
              </h3>
              <span className="shrink-0 text-sm text-white/40">
                {film.year}
              </span>
            </div>
            <p className="max-w-[28ch] text-sm leading-relaxed text-white/60">
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
            <Badge
              className={`mb-2 text-[10px] font-bold tracking-widest uppercase ${film.badgeClass}`}
            >
              {film.badge}
            </Badge>
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
      <div className="container px-0 sm:px-4 lg:px-0">
        {/* Section header */}
        <div className="mb-8 flex flex-col gap-2 px-4 sm:px-0">
          <span className="label text-primary">In Theatres</span>
          <h2>Creating unforgettable moments on the big screen</h2>
        </div>

        {/* Desktop layout — horizontal expanding panels */}
        <div className="hidden h-[78vh] min-h-[460px] w-full overflow-hidden sm:flex">
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

        <div className="mt-8 flex justify-center px-4 sm:px-0">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/films">View All Films</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
