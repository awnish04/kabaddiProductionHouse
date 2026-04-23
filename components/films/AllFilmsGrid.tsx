"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Info, Play } from "lucide-react"
import type { Film } from "@/lib/films-data"

interface AllFilmsGridProps {
  films: Film[]
}

export function AllFilmsGrid({ films }: AllFilmsGridProps) {
  // Separate films into released and coming soon
  const releasedFilms = films.filter((film) => film.isReleased)
  const comingSoonFilms = films.filter((film) => !film.isReleased)

  return (
    <section className="bg-background">
      <div className="container w-full space-y-16">
        {/* Released Films Section */}
        {releasedFilms.length > 0 && (
          <div>
            <div className="mb-12 text-center">
              <h2>Available to Watch</h2>
              <p className="lead mx-auto max-w-2xl text-center">
                Watch our released films and experience authentic Nepali cinema.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {releasedFilms.map((film) => (
                <div key={film.slug} className="group relative">
                  <Card className="overflow-hidden border-border bg-card transition-shadow hover:shadow-xl">
                    {/* Image Container with Play Button Overlay */}
                    <div className="relative aspect-3/4 overflow-hidden bg-muted">
                      {/* Default Poster */}
                      <Image
                        src={film.poster}
                        alt={film.title}
                        fill
                        className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Hover Poster */}
                      {film.posterAlt && (
                        <Image
                          src={film.posterAlt}
                          alt={`${film.title} alternate`}
                          fill
                          className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )}

                      {/* Play Button Overlay - Shows on Hover */}
                      {film.fullMovieUrl && (
                        <Link
                          href={film.fullMovieUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-accent transition-transform hover:scale-110">
                            <Play className="ml-1 h-10 w-10 fill-white text-white" />
                          </div>
                        </Link>
                      )}

                      {/* Overlay Badges */}
                      <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-2">
                        {film.contentRating && (
                          <Badge className="border-0 bg-black/70 text-white backdrop-blur-sm">
                            {film.contentRating}
                          </Badge>
                        )}
                        {film.quality && (
                          <Badge className="border-0 bg-black/70 text-white backdrop-blur-sm">
                            {film.quality}
                          </Badge>
                        )}
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-3 right-3 z-20">
                        <Badge className="bg-primary text-primary-foreground">
                          {film.badge}
                        </Badge>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="space-y-3 p-5">
                      {/* Title */}
                      <h3 className="line-clamp-1 text-xl font-bold">
                        {film.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{film.year}</span>
                        {film.runtime && (
                          <>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{film.runtime}</span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Genres */}
                      <div className="flex flex-wrap gap-1.5">
                        {film.genres.map((genre, idx) => (
                          <span
                            key={genre}
                            className="text-xs text-muted-foreground"
                          >
                            {genre}
                            {idx < film.genres.length - 1 && ","}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        {film.fullMovieUrl && (
                          <Button
                            variant="default"
                            asChild
                            size="sm"
                            className="flex-1"
                          >
                            <Link
                              href={film.fullMovieUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-1"
                            >
                              <Play />
                              Watch
                            </Link>
                          </Button>
                        )}

                        <Button
                          variant="outline"
                          asChild
                          size="sm"
                          className="flex-1"
                        >
                          <Link
                            href={`/films/${film.slug}`}
                            className="flex items-center justify-center"
                          >
                            <Info/>
                            Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Coming Soon Films Section */}
        {comingSoonFilms.length > 0 && (
          <div>
            <div className="mb-12 text-center">
              <h2>Coming Soon</h2>
              <p className="lead mx-auto max-w-2xl text-center">
                Upcoming releases that will continue our legacy of authentic
                storytelling.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {comingSoonFilms.map((film) => (
                <Link
                  key={film.slug}
                  href={`/films/${film.slug}`}
                  className="group"
                >
                  <Card className="overflow-hidden border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    {/* Image Container */}
                    <div className="relative aspect-3/4 overflow-hidden bg-muted">
                      {/* Default Poster */}
                      <Image
                        src={film.poster}
                        alt={film.title}
                        fill
                        className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Hover Poster */}
                      {film.posterAlt && (
                        <Image
                          src={film.posterAlt}
                          alt={`${film.title} alternate`}
                          fill
                          className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )}

                      {/* Overlay Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        {film.contentRating && (
                          <Badge className="border-0 bg-black/70 text-white backdrop-blur-sm">
                            {film.contentRating}
                          </Badge>
                        )}
                        {film.quality && (
                          <Badge className="border-0 bg-black/70 text-white backdrop-blur-sm">
                            {film.quality}
                          </Badge>
                        )}
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary text-primary-foreground">
                          {film.badge}
                        </Badge>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="space-y-3 p-5">
                      {/* Title */}
                      <h3 className="line-clamp-1 text-xl font-bold transition-colors group-hover:text-primary">
                        {film.title}
                      </h3>

                      {/* Meta Info */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{film.year}</span>
                        {film.runtime && (
                          <>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{film.runtime}</span>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Genres */}
                      <div className="flex flex-wrap gap-1.5">
                        {film.genres.map((genre, idx) => (
                          <span
                            key={genre}
                            className="text-xs text-muted-foreground"
                          >
                            {genre}
                            {idx < film.genres.length - 1 && ","}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
