import Link from "next/link"
import { Separator } from "@/components/ui/separator"

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
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container py-14">
        {/* Top row */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand blurb */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-heading text-xl font-bold no-underline"
            >
              Kabaddi<span className="text-primary">Films</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Pioneering Organic Cinema rooted in Limbu&nbsp;/&nbsp;Yakthung
              heritage and the raw beauty of Nepal&apos;s eastern hills.
            </p>
            <p className="text-xs text-muted-foreground">
              In association with{" "}
              <span className="font-medium text-foreground">Baasuri Films</span>{" "}
              &amp;{" "}
              <span className="font-medium text-foreground">Cinema Art</span>
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-3">
              <p className="label">{heading}</p>
              <ul className="flex list-none flex-col gap-2 pl-0">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground no-underline transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Kabaddi Films. All rights
            reserved.
          </p>
          <p>
            Produced by{" "}
            <span className="font-medium text-foreground">Ram Babu Gurung</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
