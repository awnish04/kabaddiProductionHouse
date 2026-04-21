import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function DirectorSpotlight() {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — featured film card with YouTube video */}
          <Card className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/vp0LHwCf0wQ?autoplay=1&mute=1&loop=1&playlist=vp0LHwCf0wQ&controls=0&modestbranding=1&rel=0"
                title="Jaari — Behind the Scenes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </AspectRatio>
          </Card>
          {/* Right — text */}
          <div className="flex flex-col gap-6">
            <span className="label text-primary">Behind the Scenes</span>
            <h2>Where stories come to life</h2>
            <p className="text-muted-foreground">
              Step into the world of Kabaddi Films and witness the artistry,
              dedication, and passion that goes into every frame. From the
              director&apos;s vision to the crew&apos;s meticulous
              craftsmanship, discover how authentic Nepali stories are brought
              to life on the big screen.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Meet the Team</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/films">Explore Our Films</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
