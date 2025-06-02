"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ApproachCtaSection() {
  return (
    <section className="bg-gray-800">
      <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center">
        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl mb-8">
          Prêt à démarrer votre projet avec une équipe structurée et à votre écoute ?
        </h3>
        <Button
          asChild
          size="lg"
          className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 text-base"
        >
          <Link href="/contact">Planifions votre réussite</Link>
        </Button>
      </div>
    </section>
  )
}
