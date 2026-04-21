import { Separator } from "@/components/ui/separator"

const BADGES = [
  { icon: "🏆", title: "National Film Award", sub: "Best Film — Jaari 2023" },
  { icon: "🎬", title: "Box Office Record", sub: "All-Time Blockbuster" },
  {
    icon: "🎭",
    title: "Organic Cinema",
    sub: "Pioneer of Ethnic Storytelling",
  },
  { icon: "🎵", title: "Best Music", sub: "Chyabrung — Jaari 2" },
]

export function AwardsBadges() {
  return (
    <section className="bg-primary py-10 md:py-12">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {BADGES.map((badge, i) => (
            <div key={badge.title} className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="text-3xl">{badge.icon}</span>
                <span className="font-heading text-sm font-semibold text-primary-foreground">
                  {badge.title}
                </span>
                <span className="text-xs text-primary-foreground/70">
                  {badge.sub}
                </span>
              </div>
              {i < BADGES.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="hidden h-12 bg-primary-foreground/20 md:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
