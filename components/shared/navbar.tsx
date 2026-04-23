"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Films", href: "/films" },
  { label: "Events", href: "/events" },
]

// Animated hamburger → X icon
function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
      {/* Top bar */}
      <motion.span
        className="block h-[2px] w-5 origin-center bg-foreground"
        animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />
      {/* Middle bar */}
      <motion.span
        className="block h-[2px] w-5 origin-center bg-foreground"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      {/* Bottom bar */}
      <motion.span
        className="block h-[2px] w-5 origin-center bg-foreground"
        animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />
    </div>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-xl font-bold tracking-tight text-foreground no-underline"
          >
            Kabaddi<span className="text-primary">Films</span>
          </Link>

          {/* Desktop nav */}
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

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Button
              variant="default"
              asChild
              size="sm"
              className="hidden md:inline-flex"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Contact
              </Link>
            </Button>

            {/* Animated hamburger button */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative flex h-10 w-10 items-center justify-center transition-colors hover:bg-muted md:hidden"
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — framer-motion */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 z-50 flex h-full w-72 flex-col bg-background shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Drawer header */}
              <div className="flex h-16 items-center justify-between border-b border-border/60 px-6">
                <Link
                  href="/"
                  className="font-heading text-lg font-bold no-underline"
                  onClick={() => setOpen(false)}
                >
                  Kabaddi<span className="text-primary">Films</span>
                </Link>

                {/* Close button inside drawer */}
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center transition-colors hover:bg-muted"
                >
                  <MenuIcon open={true} />
                </button>
              </div>

              {/* Nav links with staggered entrance */}
              <nav className="flex flex-col gap-1 px-4 pt-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.06,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block px-4 py-3 text-base font-medium text-foreground no-underline transition-colors hover:bg-muted hover:text-primary",
                        isActive(link.href) &&
                          "bg-primary/10 font-semibold text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <Separator className="mx-4 my-4 w-auto" />

              {/* CTA */}
              <motion.div
                className="px-4"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3, ease: "easeOut" }}
              >
                <Button asChild className="w-full" size="lg">
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
