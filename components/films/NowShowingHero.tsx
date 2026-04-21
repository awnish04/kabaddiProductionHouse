import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Film as FilmIcon } from "lucide-react"
import type { Film } from "@/lib/films-data"

interface NowShowingHeroProps {
  film: Film
}

export function NowShowingHero({ film }: NowShowingHeroProps) {
  return (
    <section className="relative h-screen overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={film.banner}
          alt={film.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex h-full items-center">
        <div className="w-full">
          <div className="max-w-3xl space-y-6 text-white">
            {/* Badge */}
            <Badge className="bg-accent px-4 py-1.5 text-sm text-accent-foreground">
              {film.badge}
            </Badge>

            {/* Title */}
            <h1 className="text-5xl font-bold text-white drop-shadow-lg md:text-6xl lg:text-7xl">
              {film.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="font-medium">{film.year}</span>
              <span className="text-white/40">•</span>
              {film.runtime && (
                <>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{film.runtime}</span>
                  </div>
                  <span className="text-white/40">•</span>
                </>
              )}
              {film.contentRating && (
                <>
                  <Badge
                    variant="outline"
                    className="border-white/30 text-white"
                  >
                    {film.contentRating}
                  </Badge>
                </>
              )}
              {film.quality && (
                <>
                  <Badge
                    variant="outline"
                    className="border-white/30 text-white"
                  >
                    {film.quality}
                  </Badge>
                </>
              )}
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2">
              {film.genres.map((genre) => (
                <span key={genre} className="text-sm text-white/80">
                  {genre}
                </span>
              ))}
            </div>

            {/* Synopsis */}
            <p className="max-w-2xl text-lg leading-relaxed text-white/90">
              {film.synopsis}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href={`/films/${film.slug}`}>
                  <FilmIcon className="h-5 w-5" />
                  View Details
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white"
              >
                <Link href="https://www.youtube.com/watch?v=_wGYG3sKHgQ">
                  <Play className="h-5 w-5" /> Watch Trailer
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
