"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Films", href: "/films" },
  { label: "Director", href: "/director" },
  { label: "Crew", href: "/crew" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* ── Logo ─────────────────────────────────────────────── */}
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-tight text-foreground no-underline"
        >
          Kabaddi<span className="text-primary">Films</span>
        </Link>

        {/* ── Desktop: shadcn NavigationMenu ───────────────────── */}
        <NavigationMenu viewport={false} className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className={navigationMenuTriggerStyle()}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* ── CTA + Mobile Sheet ───────────────────────────────── */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="hidden bg-accent text-accent-foreground hover:bg-accent/90 md:inline-flex"
          >
            <Link href="/films">Watch Trailer</Link>
          </Button>

          {/* Mobile hamburger — Sheet from shadcn */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 bg-background p-6">
              <Link
                href="/"
                className="mb-6 block font-heading text-lg font-bold no-underline"
                onClick={() => setOpen(false)}
              >
                Kabaddi<span className="text-primary">Films</span>
              </Link>

              <Separator className="mb-6" />

              {/* Mobile nav — NavigationMenu in vertical mode */}
              <NavigationMenu viewport={false} className="w-full max-w-full">
                <NavigationMenuList className="w-full flex-col items-start gap-1">
                  {NAV_LINKS.map((link) => (
                    <NavigationMenuItem key={link.href} className="w-full">
                      <NavigationMenuLink asChild>
                        <Link
                          href={link.href}
                          className="block w-full rounded-none px-3 py-2 text-base font-medium text-foreground no-underline transition-colors hover:bg-muted hover:text-primary"
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <Separator className="my-6" />

              <Button
                asChild
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/films" onClick={() => setOpen(false)}>
                  Watch Trailer
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
