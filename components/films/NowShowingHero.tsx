import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Film as FilmIcon } from "lucide-react"
import type { Film } from "@/lib/films-data"

interface NowShowingHeroProps {
  film: Film
}

export function NowShowingHero({ film }: NowShowingHeroProps) {
  return (
    <section className="hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={film.banner}
          alt={film.title}
          fill
          className="object-cover"
          priority
          // sizes="100vw"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container flex h-full items-center">
        <div className="w-full">
          <div className="max-w-3xl space-y-4 text-white">
            {/* Badge */}
            <Badge className="label bg-accent text-accent-foreground">
              {film.badge}
            </Badge>

            {/* Title */}
            <h1 className="text-white drop-shadow-lg">{film.title}</h1>

            {/* Meta Info */}
            <div className="label flex flex-wrap items-center gap-3 text-white/80">
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
            <p className="lead max-w-2xl text-white/90">{film.synopsis}</p>

            {/* CTAs */}

            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent">
                <Link
                  href={`/films/${film.slug}`}
                  className="flex items-center gap-2"
                >
                  <FilmIcon className="h-5 w-5" />
                  View Details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
