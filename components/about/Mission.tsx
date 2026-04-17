import Image from "next/image"
import { Separator } from "@/components/ui/separator"

const PILLARS = [
  {
    icon: "🎬",
    title: "Organic Cinema",
    body: "Stories drawn from real communities, real landscapes, and real traditions — never manufactured for mass appeal.",
  },
  {
    icon: "🏔️",
    title: "Cultural Preservation",
    body: "Every frame is a document of Limbu / Yakthung heritage, ensuring these identities live on through cinema.",
  },
  {
    icon: "🤝",
    title: "Collaborative Spirit",
    body: "Working closely with Baasuri Films and Cinema Art to bring authentic Nepalese stories to the widest possible audience.",
  },
]

export function Mission() {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left — image with camera overlay */}
          <div className="">
            {/* Floating camera icon */}
            <Image
              src="/vintage-camera-on-tripod-3d-illustration.png"
              alt=""
              width={120}
              height={120}
              className="absolute h-full w-full"
              aria-hidden
            />
          </div>

          {/* Right — mission text */}
          <div className="flex flex-col gap-6">
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
              {PILLARS.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <span className="mt-0.5 text-2xl">{p.icon}</span>
                  <div>
                    <h5 className="mb-1">{p.title}</h5>
                    <p className="text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
