"use client"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Clapperboard, Handshake, MountainSnow } from "lucide-react"

const PILLARS = [
  {
    icon: Clapperboard,
    title: "Organic Cinema",
    body: "Stories drawn from real communities, real landscapes, and real traditions never manufactured for mass appeal.",
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
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/vintage-camera-on-tripod-3d-illustration.png"
              alt="Vintage camera"
              width={600}
              height={600}
              className="w-40 object-contain sm:w-56 md:w-72 lg:w-[420px]"
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 280px, 420px"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <span className="label">Our Mission</span>

            {/* Heading → global h2 */}
            <h2>
              To preserve and promote the diverse cultural identities of Nepal
              through cinematic storytelling.
            </h2>

            {/* Paragraph → global p */}
            <p>
              Kabaddi Films is more than a production banner — it is a movement
              focused on Organic Cinema, indigenous culture, and raw Himalayan
              storytelling.
            </p>

            <Separator />

            {/* PILLARS */}
            <div className="flex flex-col gap-6">
              {PILLARS.map((p) => {
                const Icon = p.icon

                return (
                  <div key={p.title} className="flex gap-4">
                    {/* Icon */}
                    <div className="flex h-10 w-10 items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-1">
                      <h5>{p.title}</h5>
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
