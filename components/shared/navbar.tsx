"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Films", href: "/films" },
  { label: "Events", href: "/events" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

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
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive(link.href) &&
                        "bg-primary/10 font-semibold text-primary"
                    )}
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
            variant="default"
            asChild
            size="sm"
            className="hidden md:inline-flex"
          >
            <Link href="/contact" className="flex text-center gap-2">
              <Phone />
              Contact
            </Link>
          </Button>

          {/* Mobile hamburger — Sheet from shadcn */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72 bg-background p-6">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

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
                          className={cn(
                            "block w-full rounded-none px-3 py-2 text-base font-medium text-foreground no-underline transition-colors hover:bg-muted hover:text-primary",
                            isActive(link.href) &&
                              "bg-primary/10 font-semibold text-primary"
                          )}
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

              <Button variant="default" asChild className="w-full">
                <Link href="/contact">Contact</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
