import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const FILMS = [
  { title: "Jaari", year: "2023", role: "Writer & Director" },
  { title: "Mansara", year: "2024", role: "Writer & Director" },
  { title: "Jaari 2", year: "2025", role: "Writer & Director" },
  { title: "Kabaddi (1–4)", year: "2014–2023", role: "Lead Writer" },
]

export function Director() {
  return (
    <section className="bg-secondary">
      <div className="container">
        <div className="mb-10 flex flex-col gap-2">
          <span className="label text-primary">The Visionary</span>
          <h2>Upendra Subba — Writer &amp; Director</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Portrait */}
          <div className="relative lg:col-span-1">
            <Card className="overflow-hidden border-border bg-card">
              <AspectRatio ratio={3 / 4}>
                <Image
                  src="/UpendraSubba.jpg"
                  alt="Upendra Subba"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </AspectRatio>
            </Card>
          </div>

          {/* Bio + filmography */}
          <div className="flex flex-col gap-2 lg:col-span-2">
            <p className="text-muted-foreground">
              A celebrated poet, lyricist, and filmmaker from Panchthar, Upendra
              Subba is a leading figure of the <em>Srijanshil Arajakta</em>{" "}
              (Creative Anarchy) literary movement. His transition to directing
              with <strong>Jaari</strong> has redefined the commercial potential
              of ethnic cinema in Nepal, proving that authentic indigenous
              stories can dominate the box office.
            </p>
            <p className="text-muted-foreground">
              As the lead writer of the Kabaddi franchise (1–4), he shaped the
              legendary character &ldquo;Kaji&rdquo; — a cultural icon in
              Nepalese popular cinema. His work bridges literary depth with
              cinematic accessibility.
            </p>

            <Separator />

            <div>
              <h4 className="mb-4">Filmography</h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {FILMS.map((f) => (
                  <Card key={f.title} className="border-border bg-card p-4">
                    <CardContent className="flex items-center justify-between p-0">
                      <div>
                        <p className="font-heading font-semibold">{f.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {f.role}
                        </p>
                      </div>
                      <Badge variant="secondary">{f.year}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
