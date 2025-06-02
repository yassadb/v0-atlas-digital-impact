"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PortfolioCtaSection() {
  return (
    <section className="bg-gray-800">
      <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl mb-8">
          Vous aimez ce que vous voyez ? <br className="sm:hidden" />
          Imaginez ce que nous pouvons faire pour vous !
        </h2>
        <Button
          asChild
          size="lg"
          className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 text-base"
        >
          <Link href="/contact">Discutons de votre projet unique</Link>
        </Button>
      </div>
    </section>
  )
}
