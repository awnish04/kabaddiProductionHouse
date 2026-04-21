import { getNowShowingFilm, getAllFilms } from "@/lib/films-data"
import { NowShowingHero } from "@/components/films/NowShowingHero"
import { AllFilmsGrid } from "@/components/films/AllFilmsGrid"

export const metadata = {
  title: "Films — Kabaddi Films",
  description:
    "Explore our collection of authentic Nepali cinema. From the Jaari Trilogy to the Kabaddi Legacy.",
}

export default function FilmsPage() {
  const nowShowing = getNowShowingFilm()
  const allFilms = getAllFilms()

  return (
    <main>
      {/* Hero Section - Now Showing Film */}
      {nowShowing && <NowShowingHero film={nowShowing} />}

      {/* All Films Grid */}
      <AllFilmsGrid films={allFilms} />
    </main>
  )
}
