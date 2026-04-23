import Link from "next/link"
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"
import { Mail, Phone, MapPin } from "lucide-react"

const FOOTER_LINKS = {
  Films: [
    { label: "Jaari (2023)", href: "/films" },
    { label: "Mansara (2024)", href: "/films" },
    { label: "Jaari 2 (2025)", href: "/films" },
    { label: "Kabaddi Series", href: "/films" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Films", href: "/films" },
    { label: "Contact", href: "/contact" },
  ],
  Connect: [
    { label: "Instagram", href: "#", icon: FaInstagram },
    { label: "Facebook", href: "#", icon: FaFacebook },
    { label: "YouTube", href: "#", icon: FaYoutube },
  ],
}

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "info@kabaddifilms.com",
    href: "mailto:info@kabaddifilms.com",
  },
  {
    icon: Phone,
    label: "+977 123 456 7890",
    href: "tel:+9771234567890",
  },
  {
    icon: MapPin,
    label: "Kathmandu, Nepal",
    href: "#",
  },
]

export function Footer() {
  return (
    <footer className="h-fit w-full bg-background">
      {/* Bottom Section: Dark Background with Links */}
      <div className="bg-[#1A1A1A] text-white">
        <div className="container py-12">
          {/* Logo and Tagline */}
          <div className="mb-8 flex flex-col gap-3">
            <Link
              href="/"
              className="font-heading text-2xl font-bold no-underline"
            >
              Kabaddi<span className="text-primary">Films</span>
            </Link>
            <p className="max-w-2xl text-sm text-white/70">
              Pioneering Organic Cinema rooted in Limbu&nbsp;/&nbsp;Yakthung
              heritage and the raw beauty of Nepal&apos;s eastern hills.
            </p>
          </div>

          {/* Link Grid */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {/* Films Column */}
            <div className="flex flex-col">
              <p className="text-sm font-semibold tracking-wider text-white uppercase">
                Films
              </p>
              <ul className="flex list-none flex-col gap-2 pl-0">
                {FOOTER_LINKS.Films.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/60 no-underline transition-colors hover:text-primary lg:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold tracking-wider text-white uppercase">
                Company
              </p>
              <ul className="flex list-none flex-col gap-2 pl-0">
                {FOOTER_LINKS.Company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/60 no-underline transition-colors hover:text-primary lg:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold tracking-wider text-white uppercase">
                Contact Info
              </p>
              <div className="flex flex-col gap-3">
                {CONTACT_INFO.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex gap-1 text-xs text-white/60 no-underline transition-colors hover:text-primary lg:text-sm"
                  >
                    <div className="flex items-center justify-center rounded-full">
                      <item.icon className="h-3 w-3" />
                    </div>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect Column */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold tracking-wider text-white uppercase">
                Connect
              </p>
              <ul className="flex list-none flex-col gap-2 pl-0">
                {FOOTER_LINKS.Connect.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/60 no-underline transition-colors hover:text-primary lg:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 border-t border-white/20 pt-6">
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-white sm:flex-row sm:justify-between sm:text-left">
                © {new Date().getFullYear()} KabaddiFilms. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
