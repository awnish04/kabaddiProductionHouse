import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Play, Star } from "lucide-react"
import { getFilmBySlug, getAllFilmSlugs } from "@/lib/films-data"

export async function generateStaticParams() {
  const slugs = getAllFilmSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const film = getFilmBySlug(slug)

  if (!film) {
    return {
      title: "Film Not Found",
    }
  }

  return {
    title: `${film.title} (${film.year}) — Kabaddi Films`,
    description: film.synopsis,
  }
}

export default async function FilmDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const film = getFilmBySlug(slug)

  if (!film) {
    notFound()
  }

  // Get director for avatar
  const director = film.crew.find((member) => member.role === "Director")

  return (
    <main>
      {/* Hero Banner Section - Full Screen */}
      <section className="hero relative overflow-hidden bg-background">
        {/* Background Image */}
        <Image
          src={film.banner}
          alt={film.title}
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 container flex h-full items-center">
          <div className="max-w-2xl space-y-6 text-white">
            <h1 className="text-5xl font-bold text-white md:text-6xl">
              {film.title}
            </h1>

            {/* Director & Cast with Avatars */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Director */}
              {director && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white/60">Director</span>

                  <Avatar className="h-8 w-8 cursor-pointer border-2 border-accent">
                    <AvatarImage
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(director.name)}&background=008080&color=fff`}
                      alt={director.name}
                    />
                    <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                      {director.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-accent">
                    {director.name}
                  </span>
                </div>
              )}

              <span className="text-white/40">|</span>

              {/* Cast */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-white/60">Cast</span>
                <AvatarGroup>
                  {film.cast.slice(0, 3).map((member, idx) => (
                    <Tooltip key={idx}>
                      <TooltipTrigger asChild>
                        <Avatar className="h-8 w-8 cursor-pointer border-2 border-white/20">
                          <AvatarImage
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`}
                            alt={member.name}
                          />
                          <AvatarFallback className="bg-muted text-xs">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p className="font-medium text-white">{member.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                  {film.cast.length > 3 && (
                    <AvatarGroupCount>+{film.cast.length - 3}</AvatarGroupCount>
                  )}
                </AvatarGroup>
              </div>
            </div>

            {/* IMDB Rating, Year & Genres */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Badge */}
              <Badge className="bg-primary text-primary-foreground">
                {film.badge}
              </Badge>

              {/* IMDB Rating */}
              <div className="flex items-center gap-1.5 px-3 py-1.5">
                <span className="text-xs font-semibold text-white/80">
                  IMDB
                </span>
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="text-sm font-bold">7.5</span>
                <span className="text-xs text-white/60">/10</span>
                <span className="text-xs text-white/40">(245)</span>
              </div>

              <span className="text-white/40">•</span>

              {/* Year */}
              <span className="text-sm font-medium">{film.year}</span>

              <span className="text-white/40">•</span>

              {/* Genres */}
              {film.genres.map((genre, idx) => (
                <span key={genre} className="text-sm">
                  {genre}
                  {idx < film.genres.length - 1 && ", "}
                </span>
              ))}
            </div>

            <p className="text-lg leading-relaxed text-white/90">
              {film.fullDescription}
            </p>

            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/films">
                  <Play className="h-5 w-5" /> Watch Trailer
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white"
              >
                <Link href="/about">Book Tickets</Link>
              </Button>
            </div>

            {/* Trailers Section */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {film.trailers.map((trailer, idx) => (
                <Card
                  key={idx}
                  className="group cursor-pointer overflow-hidden border-border transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={trailer.thumbnail}
                      alt={trailer.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors group-hover:bg-black/50">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white transition-transform group-hover:scale-110">
                        <Play className="ml-1 h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cast & Crew Section */}
      {/* <section className="section bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6">Crew</h2>
              <div className="space-y-4">
                {film.crew.map((member, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border-b border-border pb-3"
                  >
                    <div>
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section className="section bg-background">
        <div className="container">
          <h2 className="mb-8">Gallery</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {film.gallery.map((image, idx) => (
              <div
                key={idx}
                className="group relative aspect-video overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${film.title} gallery ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Films */}
      <section className="section bg-muted/30">
        <div className="container text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/#featured-films">← Back to All Films</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
