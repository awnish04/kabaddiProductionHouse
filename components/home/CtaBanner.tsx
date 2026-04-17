import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="bg-accent py-12 md:py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col gap-2">
            <h3 className="text-accent-foreground">
              Collaborate with Kabaddi Films
            </h3>
            <p className="max-w-2xl text-accent-foreground/80">
              Interested in distribution, co-production, or screening our films?
              Get in touch with our team to explore partnership opportunities.
            </p>
          </div>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="shrink-0 border-accent-foreground/20 bg-transparent text-accent-foreground hover:bg-accent-foreground/10"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
