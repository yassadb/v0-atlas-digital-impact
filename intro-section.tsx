"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function IntroSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-6">
            L'expertise digitale au service de votre développement
          </h2>
          <p className="text-lg leading-8 text-gray-600 mb-8">
            <strong className="text-amber-600">Atlas Digital Impact</strong> est une agence digitale basée à Bruxelles,
            passionnément dédiée à la réussite des entreprises marocaines. Nous apportons qualité, innovation et
            stratégie pour concrétiser vos ambitions en ligne.
          </p>
          <Button asChild variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50">
            <Link href="/agence">
              En savoir plus sur notre agence
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
