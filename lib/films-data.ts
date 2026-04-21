export interface Film {
  slug: string
  title: string
  year: string
  releaseDate: string
  genres: string[]
  synopsis: string
  fullDescription: string
  badge: string
  poster: string
  banner: string
  trailers: {
    title: string
    thumbnail: string
    videoUrl: string
  }[]
  cast: {
    name: string
    role: string
    image?: string
  }[]
  crew: {
    name: string
    role: string
  }[]
  gallery: string[]
}

export const FILMS_DATA: Film[] = [
  {
    slug: "jaari-2023",
    title: "Jaari",
    year: "2023",
    releaseDate: "15 December 2023",
    genres: ["Drama", "Cultural", "Romance"],
    synopsis:
      "A groundbreaking drama exploring the Jaari tradition within the Limbu community. An all-time blockbuster.",
    fullDescription:
      '"Jaari" begins 10 years after the dramatic events where the Limbu community faces their greatest challenge—the preservation of cultural traditions in modern times. The film explores the ancient Jaari tradition, a unique cultural practice that defines relationships and community bonds in the Limbu society of eastern Nepal.',
    badge: "Blockbuster",
    poster: "/Jaari_2023_1.jpg",
    banner: "/Jaari_2023_Banner_1.webp",
    trailers: [
      {
        title: "Official Trailer",
        thumbnail: "/Jaari_2023_1.jpg",
        videoUrl:
          "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
      },
      {
        title: "Teaser",
        thumbnail: "/Jaari_2023_2.jpg",
        videoUrl:
          "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
      },
    ],
    cast: [
      { name: "Dayahang Rai", role: "Lead Actor" },
      { name: "Miruna Magar", role: "Lead Actress" },
      { name: "Buddhi Tamang", role: "Supporting Actor" },
    ],
    crew: [
      { name: "Upendra Subba", role: "Director" },
      { name: "Ram Babu Gurung", role: "Producer" },
      { name: "Shailendra D. Karki", role: "Cinematographer" },
    ],
    gallery: ["/Jaari_2023_1.jpg", "/Jaari_2023_2.jpg"],
  },
  {
    slug: "mansara-2024",
    title: "Mansara",
    year: "2024",
    releaseDate: "8 March 2024",
    genres: ["Drama", "Social", "Cultural"],
    synopsis:
      "A social drama exploring ethnic identities, fertility, and migration in the hills of Nepal.",
    fullDescription:
      "Mansara delves deep into the complexities of ethnic identity, fertility struggles, and the migration crisis affecting Nepal's hill communities. Through intimate storytelling, the film portrays the challenges faced by families torn between tradition and modernity.",
    badge: "Now Showing",
    poster: "/Mansara_2024_1.jpg",
    banner: "/Mansara_2024_Banner_1.jpg",
    trailers: [
      {
        title: "Official Trailer",
        thumbnail: "/Mansara_2024_1.jpg",
        videoUrl:
          "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
      },
    ],
    cast: [
      { name: "Saugat Malla", role: "Lead Actor" },
      { name: "Deeya Pun", role: "Lead Actress" },
    ],
    crew: [
      { name: "Upendra Subba", role: "Director" },
      { name: "Ram Babu Gurung", role: "Producer" },
      { name: "Shailendra D. Karki", role: "Cinematographer" },
    ],
    gallery: ["/Mansara_2024_1.jpg", "/Mansara_2024_2.jpg"],
  },
  {
    slug: "jaari-2-2025",
    title: "Jaari 2",
    year: "2025",
    releaseDate: "Coming Soon 2025",
    genres: ["Drama", "Cultural", "Historical"],
    synopsis:
      "The anticipated sequel — the cultural rhythm of the Chyabrung drum amidst historical change.",
    fullDescription:
      "The highly anticipated sequel to the blockbuster Jaari returns with an even more powerful narrative. Set against the backdrop of historical change, Jaari 2 explores the cultural significance of the Chyabrung drum and its role in preserving Limbu identity through generations.",
    badge: "Coming Soon",
    poster: "/Jaari-2_2025_1.jpg",
    banner: "/Jaari-2_2025_Banner_1.webp",
    trailers: [
      {
        title: "Teaser Trailer",
        thumbnail: "/Jaari-2_2025_1.jpg",
        videoUrl:
          "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
      },
      {
        title: "Behind the Scenes",
        thumbnail: "/Jaari-2_2025_2.jpg",
        videoUrl:
          "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
      },
    ],
    cast: [
      { name: "Dayahang Rai", role: "Lead Actor" },
      { name: "Miruna Magar", role: "Lead Actress" },
    ],
    crew: [
      { name: "Upendra Subba", role: "Director" },
      { name: "Ram Babu Gurung", role: "Producer" },
      { name: "Shailendra D. Karki", role: "Cinematographer" },
    ],
    gallery: ["/Jaari-2_2025_1.jpg", "/Jaari-2_2025_2.jpg"],
  },
  {
    slug: "kabaddi-series",
    title: "Kabaddi Series",
    year: "2014–2023",
    releaseDate: "2014 - 2023",
    genres: ["Action", "Drama", "Sports"],
    synopsis:
      'The backbone of the Kabaddi (1–4) franchise. Upendra Subba shaped the legendary character "Kaji."',
    fullDescription:
      'The Kabaddi film series (2014-2023) revolutionized Nepali cinema with its authentic portrayal of rural life and the traditional sport of Kabaddi. Director Upendra Subba created the iconic character "Kaji," which became a cultural phenomenon and established new benchmarks for Nepali filmmaking.',
    badge: "Legacy",
    poster: "/Kabaddi_2014_1.jpg",
    banner: "/Kabaddi_2014_Banner_1.jpg",
    trailers: [
      {
        title: "Kabaddi 4 Trailer",
        thumbnail: "/Kabaddi_2014_1.jpg",
        videoUrl:
          "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
      },
      {
        title: "Kabaddi 3 Trailer",
        thumbnail: "/Kabaddi_2014_2.jpg",
        videoUrl:
          "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
      },
      {
        title: "Original Kabaddi",
        thumbnail: "/Kabaddi_2014_3.jpg",
        videoUrl:
          "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
      },
    ],
    cast: [
      { name: "Dayahang Rai", role: "Kaji" },
      { name: "Rishma Gurung", role: "Lead Actress" },
      { name: "Buddhi Tamang", role: "Supporting Actor" },
    ],
    crew: [
      { name: "Upendra Subba", role: "Director" },
      { name: "Ram Babu Gurung", role: "Producer" },
    ],
    gallery: [
      "/Kabaddi_2014_1.jpg",
      "/Kabaddi_2014_2.jpg",
      "/Kabaddi_2014_3.jpg",
    ],
  },
]

export function getFilmBySlug(slug: string): Film | undefined {
  return FILMS_DATA.find((film) => film.slug === slug)
}

export function getAllFilmSlugs(): string[] {
  return FILMS_DATA.map((film) => film.slug)
}
