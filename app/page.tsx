import { Hero } from "@/components/home/Hero"
import { FeaturedFilms } from "@/components/home/FeaturedFilms"
import { ComingSoon } from "@/components/home/ComingSoon"
import { AwardsBadges } from "@/components/home/AwardsBadges"
import { DirectorSpotlight } from "@/components/home/DirectorSpotlight"

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedFilms />
      <ComingSoon />
      <AwardsBadges />
      <DirectorSpotlight />
    </>
  )
}
