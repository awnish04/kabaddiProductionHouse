"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { NumberTicker } from "@/components/ui/number-ticker"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const STATS = [
  { value: 4, suffix: "+", prefix: "", label: "Films Produced" },
  { value: 1, suffix: "", prefix: "#", label: "Box Office — Jaari" },
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
    <section className="relative h-screen overflow-hidden bg-background">
      {/* Background carousel — behind everything */}
      <div className="absolute inset-0 z-0 h-screen w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="h-screen w-full"
        >
          <CarouselContent className="ml-0 h-screen">
            {CAROUSEL_IMAGES.map((src, i) => (
              <CarouselItem key={i} className="h-screen pl-0">
                <div className="relative h-screen w-full">
                  <Image
                    src={src}
                    alt={`Kabaddi Films banner ${i + 1}`}
                    fill
                    className="object-cover"
                    priority={i === 0}
                    sizes="100vw"
                  />
                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-black/80" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content — above carousel */}
      <div className="relative z-10 container flex h-full items-center my-2 lg:my-0">
        <div className="grid w-full grid-cols-1 items-center gap-4 lg:grid-cols-2 lg:gap-12">
          {/* Left — headline + CTAs */}
          <div className="flex flex-col gap-4">
            <span className="label text-primary">Organic Cinema</span>
            <h1 className="text-white drop-shadow-lg">
              Bringing the Soil of the East to the Silver Screen.
            </h1>
            <p className="lead max-w-lg text-white drop-shadow-md">
              Home of the Jaari Trilogy and the Kabaddi Legacy. Authentic
              stories rooted in Limbu&nbsp;/&nbsp;Yakthung heritage and the raw
              beauty of Nepal&apos;s eastern hills.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/films">Explore Films</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white"
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>

          {/* Right — description + animated stats */}
          <div className="flex flex-col gap-4 lg:pt-20 lg:pl-12">
            <p className="text-white drop-shadow-md">
              A movement in the Nepalese film industry pioneering authentic
              storytelling that preserves and promotes the diverse cultural
              identities of Nepal through high-quality cinematic narratives.
            </p>
            <Separator className="bg-white/70" />
            <div className="grid grid-cols-2 gap-2 md:gap-6">
              {STATS.map(({ value, suffix, prefix, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <div className="font-heading text-3xl font-bold text-primary drop-shadow-lg">
                    {prefix && <span className="text-accent">{prefix}</span>}
                    <NumberTicker
                      value={value}
                      className="font-heading text-4xl font-bold text-accent drop-shadow-lg md:text-5xl lg:text-7xl"
                    />
                    {suffix && <span className="text-accent">{suffix}</span>}
                  </div>
                  <span className="text-xs text-white drop-shadow-md md:text-sm">
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
