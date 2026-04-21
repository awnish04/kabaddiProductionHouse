import { PageBanner } from "@/components/about/PageBanner"
import { Mission } from "@/components/about/Mission"
import { Director } from "@/components/about/Director"
import { Crew } from "@/components/about/Crew"
import { BehindScenes } from "@/components/about/BehindScenes"

export const metadata = {
  title: "About Us — Kabaddi Films",
  description:
    "Learn about Kabaddi Films, the team behind Organic Cinema, and our mission to preserve Nepal's cultural identities through authentic storytelling.",
}

export default function AboutPage() {
  return (
    <>
      <PageBanner />
      <Mission />
      <Director />
      <Crew />
      <BehindScenes/>
    </>
  )
}
