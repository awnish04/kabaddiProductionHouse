import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { NumberTicker } from "@/components/ui/number-ticker"

const STATS = [
  { value: 4, suffix: "+", prefix: "", label: "Films Produced" },
  { value: 1, suffix: "", prefix: "#", label: "Box Office — Jaari" },
  { value: 10, suffix: "+", prefix: "", label: "Years of Storytelling" },
  { value: 3, suffix: "", prefix: "", label: "Production Partners" },
]

export function Hero() {
  return (
    <section className="hero bg-background">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — headline + CTAs */}
          <div className="flex flex-col gap-6">
            <span className="label text-primary">Organic Cinema</span>
            <h1>Bringing the Soil of the East to the Silver Screen.</h1>
            <p className="lead max-w-lg">
              Home of the Jaari Trilogy and the Kabaddi Legacy. Authentic
              stories rooted in Limbu&nbsp;/&nbsp;Yakthung heritage and the raw
              beauty of Nepal&apos;s eastern hills.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/films">Explore Films</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>

          {/* Right — description + animated stats */}
          <div className="hidden lg:flex lg:flex-col lg:gap-5 lg:pl-12 lg:pt-20">
            <p className="text-muted-foreground">
              A movement in the Nepalese film industry — pioneering authentic
              storytelling that preserves and promotes the diverse cultural
              identities of Nepal through high-quality cinematic narratives.
            </p>
            <Separator />
            <div className="grid grid-cols-2 gap-6">
              {STATS.map(({ value, suffix, prefix, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <div className="font-heading text-3xl font-bold text-primary">
                    {prefix && <span>{prefix}</span>}
                    <NumberTicker
                      value={value}
                      className="font-heading text-6xl font-bold text-primary"
                    />
                    {suffix && <span>{suffix}</span>}
                  </div>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
