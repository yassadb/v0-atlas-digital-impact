"use client"

import { Globe, Lightbulb, Award, Users } from "lucide-react"

const differentiators = [
  {
    icon: <Globe className="h-8 w-8 text-amber-600" />,
    title: "Expertise Européenne, Approche Locale",
    description:
      "Nous marions les standards de qualité européens avec une compréhension approfondie des spécificités et des opportunités du marché marocain.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-amber-600" />,
    title: "Solutions Personnalisées et Uniques",
    description:
      "Chaque projet est une nouvelle histoire. Nous créons des solutions digitales sur mesure, parfaitement alignées avec vos objectifs et votre identité.",
  },
  {
    icon: <Award className="h-8 w-8 text-amber-600" />,
    title: "Engagement Qualité et Résultats",
    description:
      "Notre obsession ? Votre succès. Nous nous engageons à livrer des projets de haute qualité, conçus pour générer des résultats concrets et mesurables.",
  },
  {
    icon: <Users className="h-8 w-8 text-amber-600" />,
    title: "Réactivité et Accompagnement Personnalisé",
    description:
      "Nous sommes plus qu'un prestataire, nous sommes votre partenaire. Profitez d'un accompagnement attentif et d'une équipe réactive à chaque étape.",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ce qui nous distingue.</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-y-16">
          {differentiators.map((item) => (
            <div key={item.title} className="flex flex-col sm:flex-row items-start">
              <div className="flex-shrink-0 p-3 bg-amber-100 rounded-full mb-4 sm:mb-0 sm:mr-6">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-base text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
