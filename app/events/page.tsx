import { AwardsBadgesCarousel } from "@/components/events/AwardsBadgesCarousel"

export const metadata = {
  title: "Events & Awards — Kabaddi Films",
  description:
    "Celebrating excellence in Nepali cinema. Explore our awards, achievements, and upcoming events.",
}

export default function EventsPage() {
  return (
    <main>
      {/* Awards Carousel Hero Section */}
      <AwardsBadgesCarousel />
    </main>
  )
}
