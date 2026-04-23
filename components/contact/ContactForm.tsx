"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((r) => setTimeout(r, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <Card className="border border-white/10 bg-card/10 shadow-2xl backdrop-blur-xs">
      {/* Header inside card */}
      <CardHeader className="px-8 pt-10 pb-0 text-center sm:px-10">
        <h1 className="text-white">Contact Us</h1>
        <p className="lead mt-2 text-white/80 text-center">
          Have a question or want to work with us? We&apos;d love to hear from
          you. Reach out and we&apos;ll get back to you as soon as possible.
        </p>
      </CardHeader>

      <CardContent className="p-8 sm:p-10">
        {isSubmitted ? (
          <div className="flex flex-col items-center py-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg
                className="h-8 w-8 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
            <p className="text-white/70">We&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid gap-6 sm:grid-cols-2">
              <InputField label="Name" name="name" required />
              <InputField label="Email" name="email" type="email" required />
            </div>

            {/* Row 2 */}
            <div className="grid gap-6 sm:grid-cols-2">
              <InputField label="Phone" name="phone" type="tel" />
              <InputField label="Subject" name="subject" required />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                Message <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                required
                className="resize-none"
                disabled={isSubmitting}
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto gap-2 items-center"
                disabled={isSubmitting}
              >
                <Send />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

function InputField({
  label,
  name,
  type = "text",
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-white">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      <Input id={name} name={name} type={type} required={required} />
    </div>
  )
}
