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
  posterAlt?: string // Alternative poster for hover effect
  banner: string
  runtime?: string
  contentRating?: string // PG, PG-13, R, etc.
  quality?: string // HD, HDR, 4K, etc.
  nowShowing?: boolean
  isReleased?: boolean // true if movie is released and available to watch
  fullMovieUrl?: string // YouTube URL for full movie (if available)
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
      '"Jaari" begins 10 years after the dramatic events where the Limbu community faces their greatest challenge the preservation of cultural traditions in modern times. The film explores the ancient Jaari tradition, a unique cultural practice that defines relationships and community bonds in the Limbu society of eastern Nepal.',
    badge: "Blockbuster",
    poster: "/Jaari_2023_1.jpg",
    posterAlt: "/Jaari_2023_2.jpg",
    banner: "/Jaari_2023_Banner_1.webp",
    runtime: "2h 15m",
    contentRating: "PG-13",
    quality: "HD",
    nowShowing: false,
    isReleased: true,
    fullMovieUrl: "https://www.youtube.com/watch?v=kQZq8KrtQJ0", // Replace with actual full movie URL
    trailers: [
      {
        title: "Trailer",
        thumbnail: "/Jaari_2023_1.jpg",
        videoUrl: "https://www.youtube.com/watch?v=5O3K8JXch1E",
      },
      {
        title: "Teaser",
        thumbnail: "/Jaari_2023_2.jpg",
        videoUrl: "https://www.youtube.com/watch?v=4sx0nvVDYA8",
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
    posterAlt: "/Mansara_2024_2.jpg",
    banner: "/Mansara_2024_Banner_1.jpg",
    runtime: "2h 8m",
    contentRating: "PG-13",
    quality: "HD",
    nowShowing: true,
    isReleased: true,
    fullMovieUrl: "https://www.youtube.com/watch?v=yDp15-gHRtU", // Replace with actual full movie URL
    trailers: [
      {
        title: "Trailer",
        thumbnail: "/Mansara_2024_1.jpg",
        videoUrl: "https://www.youtube.com/watch?v=_wGYG3sKHgQ",
      },
      {
        title: "Teaser",
        thumbnail: "/Mansara_2024_2.jpg",
        videoUrl: "https://www.youtube.com/watch?v=C2j5IXIM7-0",
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
    posterAlt: "/Jaari-2_2025_2.jpg",
    banner: "/Jaari-2_2025_Banner_1.webp",
    runtime: "2h 20m",
    contentRating: "PG-13",
    quality: "4K",
    nowShowing: false,
    isReleased: false,
    trailers: [
      {
        title: "Trailer",
        thumbnail: "/Jaari-2_2025_1.jpg",
        videoUrl: "https://www.youtube.com/watch?v=qa7tHd560cE",
      },
      {
        title: "Teaser",
        thumbnail: "/Jaari-2_2025_2.jpg",
        videoUrl: "https://www.youtube.com/watch?v=Lk5klPgwbCc",
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
    slug: "kabaddi-4-2022",
    title: "Kabaddi 4: The Final Match",
    year: "2022",
    releaseDate: "27 May 2022",
    genres: ["Action", "Drama", "Sports"],
    synopsis:
      "The epic conclusion to the Kabaddi franchise. Kaji faces his ultimate challenge in this thrilling finale.",
    fullDescription:
      "Kabaddi 4: The Final Match brings the beloved franchise to a spectacular conclusion. Kaji returns for one last match that will determine not just his legacy, but the future of his village. With higher stakes and more intense action, this film delivers an emotional and satisfying end to the iconic series.",
    badge: "Released",
    poster: "/Kabaddi_2022_1.jpg",
    posterAlt: "/Kabaddi_2022_2.jpg",
    banner: "/Kabaddi_2022_Banner_1.jpg",
    runtime: "2h 10m",
    contentRating: "PG",
    quality: "HD",
    nowShowing: false,
    isReleased: true,
    fullMovieUrl: "https://www.youtube.com/watch?v=7WR3qzB40V8&t=1s",
    trailers: [
      {
        title: "Trailer",
        thumbnail: "/Kabaddi_2022_1.jpg",
        videoUrl: "https://www.youtube.com/watch?v=7WR3qzB40V8",
      },
      {
        title: "Teaser",
        thumbnail: "/Kabaddi_2022_2.jpg",
        videoUrl: "https://www.youtube.com/watch?v=aAFTcXtRvDg",
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
      "/Kabaddi_2022_1.jpg",
      "/Kabaddi_2022_2.jpg",
      "/Kabaddi_2022_Banner_1.jpg",
    ],
  },

  {
    slug: "kabaddi-kabaddi-kabaddi-2019",
    title: "Kabaddi Kabaddi Kabaddi",
    year: "2019",
    releaseDate: "13 September 2019",
    genres: ["Action", "Drama", "Sports", "Comedy"],
    synopsis:
      "The third installment brings Kaji back with more humor, heart, and high-stakes kabaddi action.",
    fullDescription:
      "Kabaddi Kabaddi Kabaddi continues the beloved franchise with Kaji facing new challenges both on and off the kabaddi court. This installment balances comedy with drama as Kaji navigates family responsibilities while preparing for the biggest tournament of his life.",
    badge: "Released",
    poster: "/Kabaddi_2019_1.jpg",
    posterAlt: "/Kabaddi_2019_2.jpg",
    banner: "/Kabaddi_2019_Banner_1.jpg",
    runtime: "2h 5m",
    contentRating: "PG",
    quality: "HD",
    nowShowing: false,
    isReleased: true,
    fullMovieUrl: "https://www.youtube.com/watch?v=JLV26lOElSY",
    trailers: [
      {
        title: "Trailer",
        thumbnail: "/Kabaddi_2019_1.jpg",
        videoUrl: "https://www.youtube.com/watch?v=c4HswWvFzWY",
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
      "/Kabaddi_2019_1.jpg",
      "/Kabaddi_2019_2.jpg",
      "/Kabaddi_2019_Banner_1.jpg",
    ],
  },

  {
    slug: "kabaddi-kabaddi-2015",
    title: "Kabaddi Kabaddi",
    year: "2015",
    releaseDate: "27 November 2015",
    genres: ["Action", "Drama", "Sports"],
    synopsis:
      "The sequel that expanded the Kabaddi universe. Kaji returns with new rivals and greater challenges.",
    fullDescription:
      "Kabaddi Kabaddi builds on the success of the original, taking Kaji on a journey beyond his village. Facing new opponents and personal struggles, this sequel deepened the emotional core of the franchise while delivering thrilling kabaddi sequences.",
    badge: "Released",
    poster: "/Kabaddi_Kabaddi_2015_1.jpg",
    posterAlt: "/Kabaddi_Kabaddi_2015_2.jpg",
    banner: "/Kabaddi_Kabaddi_2015_Banner_1.jpg",
    runtime: "2h 8m",
    contentRating: "PG",
    quality: "HD",
    nowShowing: false,
    isReleased: true,
    fullMovieUrl: "https://www.youtube.com/watch?v=XJ6xDpxgbL0",
    trailers: [
      {
        title: "Trailer",
        thumbnail: "/Kabaddi_Kabaddi_2015_1.jpg",
        videoUrl: "https://www.youtube.com/watch?v=_aqNQY5zfZQ",
      },
      {
        title: "Teaser",
        thumbnail: "/Kabaddi_Kabaddi_2015_2.jpg",
        videoUrl: "https://www.youtube.com/watch?v=lrB8ojw0ah4",
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

  {
    slug: "kabaddi-2014",
    title: "Kabaddi",
    year: "2014",
    releaseDate: "25 November 2014",
    genres: ["Action", "Drama", "Sports"],
    synopsis:
      "The film that started it all. Meet Kaji, the legendary character who revolutionized Nepali cinema.",
    fullDescription:
      "Kabaddi (2014) introduced audiences to Kaji, a simple village man with extraordinary kabaddi skills. This groundbreaking film authentically portrayed rural Nepali life and the traditional sport of Kabaddi, becoming a cultural phenomenon and establishing new benchmarks for Nepali filmmaking.",
    badge: "Classic",
    poster: "/Kabaddi_2014_1.jpg",
    posterAlt: "/Kabaddi_2014_2.jpg",
    banner: "/Kabaddi_2014_Banner_1.jpg",
    runtime: "2h 5m",
    contentRating: "PG",
    quality: "HD",
    nowShowing: false,
    isReleased: true,
    fullMovieUrl: "https://www.youtube.com/watch?v=fCfhY0E4GRo",
    trailers: [
      {
        title: "Trailer",
        thumbnail: "/Kabaddi_2014_3.jpg",
        videoUrl: "https://www.youtube.com/watch?v=QPsblfsA_0w",
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

export function getNowShowingFilm(): Film | undefined {
  return FILMS_DATA.find((film) => film.nowShowing === true)
}

export function getAllFilms(): Film[] {
  return FILMS_DATA
}
