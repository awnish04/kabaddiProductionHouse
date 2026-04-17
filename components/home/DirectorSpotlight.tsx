import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function DirectorSpotlight() {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — featured film card with play button */}
          <Card className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/Jaari_2023_2.jpg"
                alt="Jaari — Behind the Scenes"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Button
                  size="lg"
                  className="h-16 w-16 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <span className="text-2xl">▶</span>
                </Button>
              </div> */}
            </AspectRatio>
            <CardContent className="p-4">
              <h4>Jaari — Behind the Scenes</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Watch the making of the all-time blockbuster
              </p>
            </CardContent>
          </Card>
          {/* Right — text */}
          <div className="flex flex-col gap-6">
            <span className="label text-primary">The Visionary</span>
            <h2>Creating unforgettable moments on the big screen</h2>
            <p className="text-muted-foreground">
              Upendra Subba is a celebrated poet, lyricist, and filmmaker from
              Panchthar. He is a leading figure of the Srijanshil Arajakta
              (Creative Anarchy) literary movement. His transition to directing
              with Jaari has redefined the commercial potential of ethnic cinema
              in Nepal.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" variant="outline">
                <Link href="/director">Read Full Biography</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/films">View Filmography</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
