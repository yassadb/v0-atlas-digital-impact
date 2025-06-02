"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ServiceCtaSectionProps {
  title: string
  buttonText: string
  buttonLink: string
}

export default function ServiceCtaSection({ title, buttonText, buttonLink }: ServiceCtaSectionProps) {
  return (
    <section className="bg-gray-800">
      <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center">
        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl mb-8">{title}</h3>
        <Button
          asChild
          size="lg"
          className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 text-base"
        >
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  )
}
