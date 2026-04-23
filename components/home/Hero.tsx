"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NumberTicker } from "@/components/ui/number-ticker"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { BookOpenText, FilmIcon } from "lucide-react"

const STATS = [
  { value: 4, suffix: "+", prefix: "", label: "Films Produced" },
  { value: 1, suffix: "#", prefix: "", label: "Box Office — Jaari" },
  { value: 10, suffix: "+", prefix: "", label: "Years of Storytelling" },
  { value: 3, suffix: "", prefix: "", label: "Production Partners" },
]

const CAROUSEL_IMAGES = [
  "/Jaari_2023_Banner_1.webp",
  "/Jaari-2_2025_Banner_1.webp",
  "/Kabaddi_2014_Banner_1.jpg",
  "/Mansara_2024_Banner_1.jpg",
]

export function Hero() {
  return (
    <section className="hero">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 3000 })]}
          className="h-full w-full"
        >
          <CarouselContent className="ml-0 h-full">
            {CAROUSEL_IMAGES.map((src, i) => (
              <CarouselItem key={i} className="pl-0">
                <div className="relative h-screen w-full">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-black/80" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="grid items-center gap-5 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <div className="flex flex-col gap-3">
            <span className="label">Organic Cinema</span>

            <h1 className="text-white">
              Bringing the Soil of the East to the Silver Screen.
            </h1>

            <p className="lead text-white/90">
              Home of the Jaari Trilogy and the Kabaddi Legacy. Authentic
              stories rooted in Limbu&nbsp;/&nbsp;Yakthung heritage and the raw
              beauty of Nepal&apos;s eastern hills.
            </p>

            {/* BUTTON FIX (important) */}
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <Button variant="default" asChild size="lg">
                <Link href="/films" className="flex items-center gap-2">
                  <FilmIcon />
                  Explore Films
                </Link>
              </Button>

              <Button variant="outline" asChild size="lg">
                <Link href="/about" className="flex items-center gap-2">
                  <BookOpenText />
                  Our Story
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            {/* <p className="text-white/80">
              A movement in the Nepalese film industry pioneering authentic
              storytelling that preserves and promotes the diverse cultural
              identities of Nepal through high-quality cinematic narratives.
            </p> */}

            {/* <Separator /> */}

            <div className="grid grid-cols-2 gap-12">
              {STATS.map(({ value, suffix, prefix, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 space-y-4"
                >
                  <div className="font-heading text-3xl font-bold text-primary drop-shadow-lg">
                    {prefix && <span className="text-accent">{prefix}</span>}
                    <NumberTicker
                      value={value}
                      className="font-heading text-6xl font-bold text-accent drop-shadow-lg lg:text-7xl"
                    />
                    {suffix && <span className="text-accent">{suffix}</span>}
                  </div>
                  <span className="text-sm text-white drop-shadow-md">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
