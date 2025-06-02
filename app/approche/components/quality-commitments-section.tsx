"use client"

import { MessageSquare, CalendarCheck, InfinityIcon, UserCheck } from "lucide-react"

const commitments = [
  {
    icon: <MessageSquare className="h-8 w-8 text-amber-600" />,
    title: "Communication Transparente et Régulière",
    description:
      "Nous vous tenons informés à chaque étape clé du projet et restons disponibles pour répondre à toutes vos questions.",
  },
  {
    icon: <CalendarCheck className="h-8 w-8 text-amber-600" />,
    title: "Respect des Délais Convenus",
    description:
      "Nous nous engageons sur un planning réaliste et mettons tout en œuvre pour livrer votre projet dans les temps impartis.",
  },
  {
    icon: <InfinityIcon className="h-8 w-8 text-amber-600" />,
    title: "Solutions Digitales Évolutives et Pérennes",
    description:
      "Nous concevons des sites et applications capables de s'adapter à vos besoins futurs et aux évolutions technologiques.",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-amber-600" />,
    title: "Support Réactif et Personnalisé",
    description:
      "Notre équipe reste à votre écoute après la mise en ligne pour vous assister et assurer la maintenance de votre solution.",
  },
]

export default function QualityCommitmentsSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Engagements pour une Collaboration Réussie.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {commitments.map((commitment) => (
            <div key={commitment.title} className="flex items-start">
              <div className="flex-shrink-0 p-3 bg-amber-100 rounded-full mr-6">{commitment.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{commitment.title}</h3>
                <p className="text-base text-gray-600">{commitment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
