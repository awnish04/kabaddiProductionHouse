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
  videoSrc = "https://www.youtube.com/embed/qh3NGpYRG3I",
  thumbnailSrcLight = "/Kabaddi_2014_Banner_1.jpg",
  thumbnailSrcDark = "/Kabaddi_2014_Banner_2.jpg",
  thumbnailAlt = "Kabaddi Films",
}: PageBannerProps) {
  const [modalOpen, setModalOpen] = useState(false)

  const embedSrc = videoSrc
    .replace("watch?v=", "embed/")
    .replace("youtu.be/", "www.youtube.com/embed/")

  const autoplaySrc = `${embedSrc}?autoplay=1`

  return (
    <>
      {/* HERO */}
      <section className="hero">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center dark:hidden"
            style={{ backgroundImage: `url(${thumbnailSrcLight})` }}
          />
          <div
            className="absolute inset-0 hidden bg-cover bg-center dark:block"
            style={{ backgroundImage: `url(${thumbnailSrcDark})` }}
          />

          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container">
          <div className="flex max-w-2xl flex-col gap-6">
            {/* Label */}
            <span className="label text-primary">Kabaddi Films</span>

            {/* Title → now uses global h1 */}
            <h1 className="text-white">{title}</h1>

            {/* Description → uses global lead */}
            <p className="lead text-white/80">{description}</p>

            {/* Play Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="group flex w-fit items-center gap-4"
            >
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-white/20">
                <div className="absolute inset-0 rounded-full border border-white/20 transition group-hover:scale-125" />

                <Play className="ml-0.5 h-5 w-5 text-white" />
              </div>

              <div className="flex flex-col text-start">
                <span className="text-sm font-semibold text-white">
                  Watch Trailer
                </span>
                <span className="text-xs text-white/60">Behind the Scenes</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-10 right-4 text-white/70 hover:text-white"
            >
              <X className="h-7 w-7" />
            </button>

            <div className="relative aspect-video w-full">
              <iframe
                src={autoplaySrc}
                title={thumbnailAlt}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
