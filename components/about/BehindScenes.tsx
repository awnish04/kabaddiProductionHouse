import Image from "next/image"
import { Camera, Film, Lightbulb, Users } from "lucide-react"

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"

const BEHIND_SCENES_FEATURES = [
  {
    Icon: Camera,
    name: "Cinematography Excellence",
    description:
      "Witness the art of visual storytelling through our lens. Every frame is crafted with precision and passion.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/Kabaddi_2014_1.jpg"
          alt="Cinematography"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
      </div>
    ),
  },
  {
    Icon: Lightbulb,
    name: "Creative Vision",
    description:
      "Innovation meets tradition in every project. We push boundaries while honoring our cultural roots.",
    href: "#",
    cta: "Learn More",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/Jaari_2023_1.jpg"
          alt="Creative Vision"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
      </div>
    ),
  },
  {
    Icon: Film,
    name: "Production Magic",
    description:
      "From pre-production to post, witness the magic that transforms scripts into cinematic experiences.",
    href: "#",
    cta: "Discover",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/Mansara_2024_1.jpg"
          alt="Production"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
      </div>
    ),
  },
  {
    Icon: Users,
    name: "Collaborative Spirit",
    description:
      "Our talented crew works in harmony, bringing diverse skills together to create unforgettable stories.",
    href: "#",
    cta: "Meet the Team",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/Jaari-2_2025_1.jpg"
          alt="Team Collaboration"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
      </div>
    ),
  },
]

export function BehindScenes() {
  return (
    <section className="section bg-secondary">
      <div className="container">
        <div className="mb-12 flex flex-col gap-2 text-center">
          <h2 className="text-foreground">BEHIND THE SCENES INSIGHTS</h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
            Witness the enchantment unfold as creativity meets craftsmanship in
            the birth of cinematic magic. Explore whimsical sets, intricate
            costumes, and innovative cinematography, each detail contributing to
            the magic that brings the story to life.
          </p>
        </div>

        <BentoGrid>
          {BEHIND_SCENES_FEATURES.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
