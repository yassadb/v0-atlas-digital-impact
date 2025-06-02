"use client"

import Link from "next/link"
import Header from "../../header" // Ajuster le chemin si nécessaire
import Footer from "../../footer" // Ajuster le chemin si nécessaire
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MonitorPlay, ShoppingCart, AppWindow } from "lucide-react"

const availableServices = [
  {
    icon: <MonitorPlay className="h-10 w-10 text-amber-600 mb-4" />,
    title: "Sites Vitrines Modernes et Performants",
    description:
      "Créez une présence en ligne professionnelle et impactante, optimisée pour convertir vos visiteurs en clients.",
    href: "/services/sites-vitrines",
    ctaText: "Découvrir les sites vitrines",
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-amber-600 mb-4" />, // Icône activée
    title: "E-commerce Performant", // Titre mis à jour
    description: "Lancez votre boutique en ligne optimisée pour le marché marocain et maximisez vos ventes.",
    href: "/realisations?category=E-commerce", // Lien mis à jour
    ctaText: "Voir nos réalisations E-commerce", // CTA mis à jour
    disabled: false, // Service activé
  },
  {
    icon: <AppWindow className="h-10 w-10 text-amber-600 mb-4" />, // Icône activée
    title: "Applications Web Intuitives", // Titre mis à jour
    description: "Digitalisez vos processus et offrez des outils sur mesure à vos clients ou à vos équipes.",
    href: "/realisations?category=Application+Web", // Lien mis à jour
    ctaText: "Découvrir nos applications web", // CTA mis à jour
    disabled: false, // Service activé
  },
]

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <section className="bg-gray-100 py-10 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
              Nos Services Digitaux pour le Maroc.
            </h1>
            <p className="mt-3 text-sm sm:text-md text-gray-700">
              Chez Atlas Digital Impact, nous offrons une gamme de solutions digitales conçues pour propulser votre
              entreprise au Maroc. Découvrez comment nous pouvons vous aider à atteindre vos objectifs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {availableServices.map((service) => (
              <Card
                key={service.title}
                className={`flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 ${
                  service.disabled ? "bg-gray-50 opacity-70" : "hover:shadow-xl bg-white"
                }`}
              >
                <CardHeader className="items-center text-center">
                  {service.icon}
                  <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col items-center text-center">
                  <CardDescription className="text-sm text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="justify-center p-6">
                  <Button
                    asChild
                    variant={service.disabled ? "outline" : "default"}
                    disabled={service.disabled}
                    className={!service.disabled ? "bg-amber-500 hover:bg-amber-600 text-gray-900" : ""}
                  >
                    <Link href={service.href}>
                      {service.ctaText}
                      {!service.disabled && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
