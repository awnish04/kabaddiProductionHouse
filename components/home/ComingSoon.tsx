import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const FILMS = [
  {
    title: "Jaari 2: Song of Chyabrung",
    year: "2025",
    synopsis:
      "The anticipated sequel — the cultural rhythm of the Chyabrung drum amidst the backdrop of historical change.",
    badge: "Coming Soon",
    badgeClass: "bg-accent text-accent-foreground",
    image: "/Jaari-2_2025_1.jpg",
  },
  {
    title: "Mansara",
    year: "2024",
    synopsis:
      "A social drama exploring ethnic identities, fertility, and migration in the hills of Nepal.",
    badge: "Now Showing",
    badgeClass: "bg-primary text-primary-foreground",
    image: "/Mansara_2024_2.jpg",
  },
]

export function ComingSoon() {
  return (
    <section className="bg-secondary">
      <div className="container">
        {/* Section header — same pattern as FeaturedFilms */}
        <div className="mb-10 flex flex-col gap-2">
          <span className="label text-primary">In Theatres</span>
          <h2>Creating unforgettable moments on the big screen</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {FILMS.map((film) => (
            <Card
              key={film.title}
              className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg"
            >
              <AspectRatio ratio={5 / 5}>
                <Image
                  src={film.image} 
                  alt={film.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

                {/* overlay content */}
                <div className="absolute bottom-0 left-0 p-5">
                  <Badge className={`mb-2 ${film.badgeClass}`}>
                    {film.badge}
                  </Badge>
                  <h3 className="text-white">{film.title}</h3>
                  <p className="mt-1 max-w-sm text-sm text-white/70">
                    {film.synopsis}
                  </p>
                </div>
              </AspectRatio>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/films">View All Films</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
