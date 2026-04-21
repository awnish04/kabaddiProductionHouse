import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Clapperboard, Handshake, MountainSnow } from "lucide-react"

const PILLARS = [
  {
    icon: Clapperboard,
    title: "Organic Cinema",
    body: "Stories drawn from real communities, real landscapes, and real traditions — never manufactured for mass appeal.",
  },
  {
    icon: MountainSnow,
    title: "Cultural Preservation",
    body: "Every frame is a document of Limbu / Yakthung heritage, ensuring these identities live on through cinema.",
  },
  {
    icon: Handshake,
    title: "Collaborative Spirit",
    body: "Working closely with Baasuri Films and Cinema Art to bring authentic Nepalese stories to the widest possible audience.",
  },
]

export function Mission() {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left — camera image centered */}
          <div className="relative flex items-center justify-center">
            <Image
              src="/vintage-camera-on-tripod-3d-illustration.png"
              alt="Vintage camera on tripod"
              width={640}
              height={640}
              className="h-full w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right — mission text */}
          <div className="flex flex-col gap-2">
            <span className="label text-primary">Our Mission</span>
            <h2>
              To preserve and promote the diverse cultural identities of Nepal
              through high-quality cinematic narratives.
            </h2>
            <p className="text-muted-foreground">
              Kabaddi Films is more than just a production banner — it is a
              movement in the Nepalese film industry. Known for pioneering
              &ldquo;Organic Cinema,&rdquo; the house focuses on authentic
              storytelling, indigenous cultures, and the raw beauty of
              Nepal&apos;s eastern hills.
            </p>

            <Separator />

            <div className="flex flex-col gap-5">
              {PILLARS.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.title} className="flex gap-4">
                    <Icon className="mt-0.5 h-8 w-8 text-accent" />
                    <div>
                      <h5 className="mb-1">{p.title}</h5>
                      <p className="text-sm text-muted-foreground">{p.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
