// import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"

// interface PageBannerProps {
//   title?: string
//   description?: string
//   videoSrc?: string
//   thumbnailSrcLight?: string
//   thumbnailSrcDark?: string
//   thumbnailAlt?: string
// }

// export function PageBanner({
//   title = "ABOUT US",
//   description = "Welcome to Kabaddi Films, where storytelling meets innovation, and visual narratives come to life. As a pioneering force in the world of Nepalese cinematic production, Kabaddi Films is dedicated to pushing the boundaries of creativity, technology, and storytelling. Our passion lies in crafting compelling visual experiences that captivate, inspire, and leave a lasting impact.",
//   videoSrc = "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
//   thumbnailSrcLight = "/Kabaddi_2014_Banner_1.jpg",
//   thumbnailSrcDark = "/Kabaddi_2014_Banner_2.jpg",
//   thumbnailAlt = "Kabaddi Films — Behind the Scenes",
// }: PageBannerProps) {
//   return (
//     <section className="relative overflow-hidden bg-background">
//       {/* Desktop/Tablet — Full screen video with overlay text */}
//       <div className="relative hidden h-screen w-full md:block">
//         {/* Full screen video */}
//         <div className="absolute inset-0">
//           <HeroVideoDialog
//             className="h-screen w-full"
//             animationStyle="from-center"
//             videoSrc={videoSrc}
//             thumbnailSrc={thumbnailSrcLight}
//             thumbnailAlt={thumbnailAlt}
//           />
//         </div>

//         {/* White gradient overlay from top */}
//         <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background via-background/60 to-transparent" />

//         {/* Text content over video */}
//         <div className="pointer-events-none relative z-10 container flex items-center justify-center">
//           <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
//             <h1 className="text-foreground drop-shadow-lg">{title}</h1>
//             <p className="max-w-3xl text-base leading-relaxed text-foreground/90 drop-shadow-md md:text-lg">
//               {description}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Mobile — Stacked layout (text above video) */}
//       <div className="block md:hidden">
//         <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
//           <h1 className="px-4 text-3xl text-foreground">{title}</h1>
//           <p className="px-4 text-sm leading-relaxed text-foreground/80">
//             {description}
//           </p>

//           {/* Video below text on mobile */}
//           <div className="relative mt-4 w-full overflow-hidden">
//             <HeroVideoDialog
//               className="w-full"
//               animationStyle="from-center"
//               videoSrc={videoSrc}
//               thumbnailSrc={thumbnailSrcLight}
//               thumbnailAlt={thumbnailAlt}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Dark mode — Larger video with top margin */}
//       <div className="hidden dark:block">
//         <div className="container py-20">
//           <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
//             <h1 className="text-foreground drop-shadow-lg">{title}</h1>
//             <p className="max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
//               {description}
//             </p>

//             {/* Larger video with margin */}
//             <div className="relative mt-8 w-full">
//               <HeroVideoDialog
//                 className="w-full"
//                 animationStyle="from-center"
//                 videoSrc={videoSrc}
//                 thumbnailSrc={thumbnailSrcDark}
//                 thumbnailAlt={thumbnailAlt}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"

interface PageBannerProps {
  title?: string
  description?: string
  videoSrc?: string
  thumbnailSrcLight?: string
  thumbnailSrcDark?: string
  thumbnailAlt?: string
}

export function PageBanner({
  title = "ABOUT US",
  description = "Welcome to Kabaddi Films, where storytelling meets innovation, and visual narratives come to life. As a pioneering force in the world of Nepalese cinematic production, Kabaddi Films is dedicated to pushing the boundaries of creativity, technology, and storytelling. Our passion lies in crafting compelling visual experiences that captivate, inspire, and leave a lasting impact.",
  videoSrc = "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
  thumbnailSrcLight = "/Kabaddi_2014_Banner_1.jpg",
  thumbnailSrcDark = "/Kabaddi_2014_Banner_2.jpg",
  thumbnailAlt = "Kabaddi Films — Behind the Scenes",
}: PageBannerProps) {
  const [modalOpen, setModalOpen] = useState(false)

  // Convert any YouTube watch URL to embed URL
  const embedSrc = videoSrc
    .replace("watch?v=", "embed/")
    .replace("youtu.be/", "www.youtube.com/embed/")

  const autoplaySrc = embedSrc.includes("?")
    ? `${embedSrc}&autoplay=1`
    : `${embedSrc}?autoplay=1`

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="hero relative overflow-hidden bg-background">
        {/* ── Background thumbnail image ── */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              backgroundImage: `url('${thumbnailSrcLight}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-0 hidden dark:block"
            style={{
              backgroundImage: `url('${thumbnailSrcDark}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Heavy overlay so text is always readable */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Bottom page-bleed */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40"
          style={{
            background: "linear-gradient(to top, #000 0%, transparent 100%)",
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-20 container flex h-full items-center">
          <div className="flex max-w-2xl flex-col gap-6 text-white">
            {/* Label */}
            <span className="label text-xs font-bold tracking-widest text-primary uppercase">
              Kabaddi Films
            </span>

            {/* Title */}
            <h1
              className="leading-none font-black text-white drop-shadow-lg"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                fontFamily: "'Georgia', serif",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              className="lead text-white/80 drop-shadow-md"
              style={{
                maxWidth: "52ch",
                fontSize: "clamp(0.85rem, 1.1vw, 1.05rem)",
              }}
            >
              {description}
            </p>

            {/* ── Play Button ── */}
            <button
              onClick={() => setModalOpen(true)}
              aria-label="Play video"
              className="group mt-2 flex w-fit items-center gap-4 focus:outline-none"
            >
              {/* Circle with play icon */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25">
                {/* Ripple ring */}
                <div className="absolute inset-0 scale-110 rounded-full border border-white/20 transition-transform duration-500 group-hover:scale-125" />
                <Play className="ml-1 h-6 w-6 fill-white text-white" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm leading-tight font-semibold text-white">
                  Watch Trailer
                </span>
                <span className="text-xs text-white/50">Behind the Scenes</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ── VIDEO MODAL ── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative mx-4 w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-10 right-0 text-white/70 transition-colors hover:text-white"
              aria-label="Close video"
            >
              <X className="h-7 w-7" />
            </button>

            {/* 16:9 iframe wrapper */}
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <iframe
                src={autoplaySrc}
                title={thumbnailAlt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}