"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MonitorPlay, ShoppingCart, AppWindow, ArrowRight } from "lucide-react"

const services = [
  {
    icon: <MonitorPlay className="h-10 w-10 text-amber-600 mb-4" />,
    title: "Sites Vitrines Impactants",
    description: "Renforcez votre crédibilité et captez de nouveaux clients.",
    href: "/services/sites-vitrines",
  },
  {
    icon: <ShoppingCart className="h-10 w-10 text-amber-600 mb-4" />,
    title: "E-commerce Performant",
    description: "Ouvrez les portes du commerce en ligne avec une boutique optimisée.",
    href: "/services/e-commerce",
  },
  {
    icon: <AppWindow className="h-10 w-10 text-amber-600 mb-4" />,
    title: "Applications Web Intuitives",
    description: "Digitalisez vos processus avec des outils sur mesure.",
    href: "/services/applications-web",
  },
]

export default function ServicesOverviewSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Des solutions sur mesure pour chaque ambition.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center text-center">
                <p className="text-sm text-gray-600 mb-6 flex-grow">{service.description}</p>
                <Button asChild variant="link" className="text-amber-600 hover:text-amber-700 p-0 h-auto">
                  <Link href={service.href}>
                    Explorer ce service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
