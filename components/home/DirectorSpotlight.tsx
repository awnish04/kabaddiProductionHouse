import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { FilmIcon, Group } from "lucide-react"

export function DirectorSpotlight() {
  return (
    <section className="relative bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <Image
          src="/film-vintage-negatives.png"
          alt=""
          fill
          className="h-full w-full object-cover opacity-20"
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — featured film card with YouTube video */}
          <Card className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/vp0LHwCf0wQ?autoplay=0&mute=0&loop=1&playlist=vp0LHwCf0wQ&controls=0&modestbranding=1&rel=0"
                title="Jaari — Behind the Scenes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </AspectRatio>
          </Card>
          {/* Right — text */}
          <div className="flex flex-col gap-2">
            <span className="label">Behind the Scenes</span>
            <h2>Where stories come to life</h2>
            <p className="text-muted-foreground">
              Step into the world of Kabaddi Films and witness the artistry,
              dedication, and passion that goes into every frame. From the
              director&apos;s vision to the crew&apos;s meticulous
              craftsmanship, discover how authentic Nepali stories are brought
              to life on the big screen.
            </p>

            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <Button variant="default" asChild size="lg">
                <Link href="/about" className="flex items-center gap-2">
                  <Group />
                  Meet the Team
                </Link>
              </Button>

              <Button variant="outline" asChild size="lg">
                <Link href="/films" className="flex items-center gap-2">
                  <FilmIcon />
                  Explore Our Films
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
