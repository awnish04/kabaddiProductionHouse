import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"

const CREW = [
  {
    name: "Sijan Dahal",
    role: "Chief Assistant Director / Production",
    bio: "The technical backbone of the team. Sijan has served as Chief Assistant Director on the house's most successful projects, including the Jaari series. He manages the intricate details of production and ensures the director's vision is flawlessly executed on set.",
    image: "/Jaari-2_2025_2.jpg",
    badge: "Production",
  },
  {
    name: "Kiran Chamling",
    role: "Assistant Director / Artist",
    bio: "A versatile team member who contributes both behind and in front of the camera. Kiran has been instrumental in the directorial department for Jaari and Mansara, helping to ground the films in their specific cultural settings.",
    image: "/Mansara_2024_1.jpg",
    badge: "Direction & Acting",
  },
  {
    name: "Shailendra D. Karki",
    role: "Cinematographer",
    bio: "A frequent collaborator whose lens captures the raw beauty of Nepal's eastern landscapes. His visual language is inseparable from the Kabaddi Films aesthetic.",
    image: "/Kabaddi_2014_2.jpg",
    badge: "Cinematography",
  },
  {
    name: "Ram Babu Gurung",
    role: "Primary Producer / Founder",
    bio: "The driving force behind the Kabaddi brand. Ram Babu Gurung is the primary producer behind many of these titles and the founder of the Kabaddi franchise — the backbone of Nepalese commercial cinema.",
    image: "/Kabaddi_2014_3.jpg",
    badge: "Producer",
  },
]

export function Crew() {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="mb-10 flex flex-col gap-2">
          <span className="label">Behind the Scenes</span>
          <h2>The Team</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CREW.map((member) => (
            <Card
              key={member.name}
              className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg"
            >
              <AspectRatio ratio={3 / 4} className="relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute right-0 bottom-0 left-0 p-4">
                  <Badge className="bg-primary text-xs text-primary-foreground">
                    {member.badge}
                  </Badge>
                </div>
              </AspectRatio>

              <CardContent className="flex flex-col gap-2 p-4">
                <h4 className="leading-snug">{member.name}</h4>
                <p className="text-xs font-medium text-primary">
                  {member.role}
                </p>
                <p className="line-clamp-3 text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
