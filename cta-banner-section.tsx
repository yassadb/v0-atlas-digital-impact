"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaBannerSection() {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative container mx-auto max-w-4xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-4">
            Prêt à donner une nouvelle dimension à votre présence digitale au Maroc ?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Rejoignez les entreprises qui font confiance à Atlas Digital Impact pour leur transformation digitale.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link href="/contact">
              Contactez-nous dès aujourd'hui
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
