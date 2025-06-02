"use client"

import { Award, Lightbulb, Handshake, ShieldCheck, Users, Target } from "lucide-react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

const values = [
  {
    icon: <Award className="h-8 w-8 text-amber-600" />,
    name: "Qualité",
    description: "Nous visons l'excellence dans chaque détail, pour des livrables irréprochables.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-amber-600" />,
    name: "Innovation",
    description: "Nous explorons constamment de nouvelles technologies pour vous offrir des solutions avant-gardistes.",
  },
  {
    icon: <Handshake className="h-8 w-8 text-amber-600" />,
    name: "Partenariat",
    description:
      "Nous construisons des relations de confiance durables, basées sur la collaboration et la transparence.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-amber-600" />,
    name: "Intégrité",
    description: "L'honnêteté et l'éthique sont au cœur de toutes nos interactions et décisions.",
  },
  {
    icon: <Users className="h-8 w-8 text-amber-600" />,
    name: "Orientation Client",
    description: "Votre succès est notre priorité. Nous écoutons, comprenons et adaptons nos solutions à vos besoins.",
  },
  {
    icon: <Target className="h-8 w-8 text-amber-600" />,
    name: "Rigueur",
    description:
      "Nous appliquons une méthodologie précise et un suivi rigoureux pour garantir la réussite de vos projets.",
  },
]

export default function ValuesSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Les Valeurs Qui Nous Guident.</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <Card
              key={value.name}
              className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="mb-4 p-3 bg-amber-100 rounded-full">{value.icon}</div>
              <CardTitle className="text-xl font-semibold text-gray-900 mb-2">{value.name}</CardTitle>
              <CardContent className="text-sm text-gray-600">
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
