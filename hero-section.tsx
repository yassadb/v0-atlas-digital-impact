"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-20 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl mb-6">
            <span className="text-amber-400">Atlas Digital Impact</span> : Votre Partenaire Digital pour une Croissance
            Ambitieuse au Maroc
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Atlas Digital Impact combine expertise européenne et compréhension fine du marché marocain pour créer des
            expériences digitales qui transforment votre présence en ligne.
          </p>

          {/* Value Propositions */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center text-gray-300">
              <CheckCircle className="h-4 w-4 text-amber-400 mr-2" />
              <span>Expertise Européenne</span>
            </div>
            <div className="flex items-center text-gray-300">
              <CheckCircle className="h-4 w-4 text-amber-400 mr-2" />
              <span>Focus Maroc</span>
            </div>
            <div className="flex items-center text-gray-300">
              <CheckCircle className="h-4 w-4 text-amber-400 mr-2" />
              <span>Solutions Sur Mesure</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/services">
                Découvrez nos solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900 font-semibold px-8 py-3 transition-all duration-200"
            >
              <Link href="/contact">Discutons de votre projet</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
