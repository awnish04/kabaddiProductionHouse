import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const FEATURED_FILMS = [
  {
    title: "Jaari",
    year: "2023",
    synopsis:
      "A groundbreaking drama exploring the Jaari tradition within the Limbu community. An all-time blockbuster.",
    badge: "Blockbuster",
    poster: "/Jaari_2023_1.jpg",
  },
  {
    title: "Mansara",
    year: "2024",
    synopsis:
      "A social drama exploring ethnic identities, fertility, and migration in the hills of Nepal.",
    badge: "Now Showing",
    poster: "/Mansara_2024_1.jpg",
  },
  {
    title: "Jaari 2",
    year: "2025",
    synopsis:
      "The anticipated sequel — the cultural rhythm of the Chyabrung drum amidst historical change.",
    badge: "Coming Soon",
    poster: "/Jaari-2_2025_1.jpg",
  },
  {
    title: "Kabaddi Series",
    year: "2014–2023",
    synopsis:
      'The backbone of the Kabaddi (1–4) franchise. Upendra Subba shaped the legendary character "Kaji."',
    badge: "Legacy",
    poster: "/Kabaddi_2014_1.jpg",
  },
]

export function FeaturedFilms() {
  return (
    <section className="bg-secondary">
      <div className="container">
        <div className="mb-10 flex flex-col gap-2">
          <span className="label text-primary">Our Films</span>
          <h2>Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_FILMS.map((film) => (
            <Card
              key={film.title}
              className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg"
            >
              <AspectRatio ratio={2 / 3}>
                <Image
                  src={film.poster}
                  alt={`${film.title} poster`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </AspectRatio>

              <CardContent className="flex flex-col gap-2 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {film.year}
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {film.badge}
                  </Badge>
                </div>
                <h4 className="leading-snug">{film.title}</h4>
                <p className="line-clamp-3 text-sm text-muted-foreground">
                  {film.synopsis}
                </p>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="mt-1 w-fit px-0 text-primary hover:bg-transparent hover:text-accent"
                >
                  <Link href="/films">View Details →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
