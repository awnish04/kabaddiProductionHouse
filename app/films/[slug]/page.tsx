import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Play, Star } from "lucide-react"
import { getFilmBySlug, getAllFilmSlugs } from "@/lib/films-data"

export async function generateStaticParams() {
  return getAllFilmSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const film = getFilmBySlug(slug)

  if (!film) {
    return { title: "Film Not Found" }
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

  if (!film) notFound()

  const director = film.crew.find((m) => m.role === "Director")

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden bg-background md:min-h-screen">
        <Image
          src={film.banner}
          alt={film.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 container flex h-full items-center">
          <div className="max-w-3xl space-y-6 text-white">
            {/* Title */}
            <h1>{film.title}</h1>

            {/* Director + Cast */}
            <div className="flex flex-wrap items-center gap-4 text-white/80">
              {director && (
                <div className="flex items-center gap-2">
                  <span className="text-white/60">Director</span>

                  <Avatar className="h-8 w-8 border-2 border-accent">
                    <AvatarImage
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        director.name
                      )}&background=008080&color=fff`}
                      alt={director.name}
                    />
                    <AvatarFallback>
                      {director.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <span className="font-medium text-accent">
                    {director.name}
                  </span>
                </div>
              )}

              <span className="text-white/40">|</span>

              <div className="flex items-center gap-2">
                <span className="text-white/60">Cast</span>
                <AvatarGroup>
                  {film.cast.slice(0, 3).map((m, i) => (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <Avatar className="h-8 w-8 border-2 border-white/20">
                          <AvatarImage
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                              m.name
                            )}&background=random`}
                            alt={m.name}
                          />
                          <AvatarFallback>
                            {m.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{m.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                  {film.cast.length > 3 && (
                    <AvatarGroupCount>+{film.cast.length - 3}</AvatarGroupCount>
                  )}
                </AvatarGroup>
              </div>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-white/80">
              <Badge className="bg-primary text-primary-foreground">
                {film.badge}
              </Badge>

              <div className="flex items-center gap-1">
                <span>IMDB</span>
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-bold">7.5/10</span>
                <span className="text-white/40">(245)</span>
              </div>

              <span>{film.year}</span>

              {film.genres.map((g, i) => (
                <span key={g}>
                  {g}
                  {i < film.genres.length - 1 && ", "}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="lead max-w-2xl text-white/90">
              {film.fullDescription}
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              {film.trailers.length > 0 && (
                <Button variant="default" asChild size="lg">
                  <Link
                    href={film.trailers[0].videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Play/>
                    Watch Trailer
                  </Link>
                </Button>
              )}

              {!film.isReleased && (
                <Button variant="outline" asChild size="lg">
                  <Link href="/contact">Book Tickets</Link>
                </Button>
              )}

              {film.isReleased && film.fullMovieUrl && (
                <Button variant="outline" asChild size="lg">
                  <Link
                    href={film.fullMovieUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Play/>
                    Watch Full Movie
                  </Link>
                </Button>
              )}
            </div>

            {/* Trailers */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {film.trailers.map((t, i) => (
                <Link
                  key={i}
                  href={t.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
                    <div className="relative aspect-video">
                      <Image
                        src={t.thumbnail}
                        alt={t.title}
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-background py-16">
        <div className="container">
          <h2>Gallery</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 py-4">
            {film.gallery.map((img, i) => (
              <div key={i} className="relative aspect-video overflow-hidden">
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK */}
      <section className="bg-muted/30 py-12">
        <div className="container text-center">
          <Button variant="outline" asChild size="lg">
            <Link href="/films">← Back to All Films</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
