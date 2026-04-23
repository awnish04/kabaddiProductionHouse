import { Metadata } from "next"
import { ContactForm } from "@/components/contact/ContactForm"

export const metadata: Metadata = {
  title: "Contact Us — Kabaddi Films",
  description:
    "Get in touch with Kabaddi Films. We'd love to hear from you about collaborations, screenings, or general inquiries.",
}

export default function ContactPage() {
  return (
    <main>
      <section className="hero">
        {/* Background — vintage camera image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/vintage_camera.png)" }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Card centered on screen */}
        <div className="relative z-10 container flex min-h-screen items-center justify-center py-4">
          <div className="w-full max-w-4xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
