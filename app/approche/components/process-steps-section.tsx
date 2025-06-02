"use client"

import { Ear, LayoutTemplate, Code2, CheckCircle2, Rocket } from "lucide-react"

const processSteps = [
  {
    stepNumber: 1,
    icon: <Ear className="h-8 w-8 text-amber-600" />,
    title: "Écoute & Analyse Stratégique",
    description:
      "Nous commençons par une immersion complète dans vos besoins, vos objectifs et votre marché cible au Maroc pour définir une stratégie digitale claire et pertinente.",
  },
  {
    stepNumber: 2,
    icon: <LayoutTemplate className="h-8 w-8 text-amber-600" />,
    title: "Conception & Maquettage UX/UI",
    description:
      "Nos designers créent des interfaces intuitives et esthétiques, centrées sur l'expérience utilisateur (UX) et l'identité visuelle (UI) de votre marque.",
  },
  {
    stepNumber: 3,
    icon: <Code2 className="h-8 w-8 text-amber-600" />,
    title: "Développement & Réalisation Technique",
    description:
      "Nos développeurs transforment les maquettes en solutions web fonctionnelles, robustes et performantes, en utilisant les technologies les plus adaptées.",
  },
  {
    stepNumber: 4,
    icon: <CheckCircle2 className="h-8 w-8 text-amber-600" />,
    title: "Tests & Assurance Qualité Rigoureux",
    description:
      "Chaque fonctionnalité est testée minutieusement sur différents appareils et navigateurs pour garantir une expérience utilisateur sans faille et une qualité optimale.",
  },
  {
    stepNumber: 5,
    icon: <Rocket className="h-8 w-8 text-amber-600" />,
    title: "Lancement & Accompagnement Post-Mise en Ligne",
    description:
      "Nous assurons un déploiement fluide de votre projet et restons à vos côtés pour le suivi, la maintenance et les évolutions futures.",
  },
]

export default function ProcessStepsSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Les Étapes Clés de Votre Projet Digital.
          </h2>
        </div>
        <div className="relative">
          {/* Ligne de connexion verticale pour les grands écrans (optionnel) */}
          {/* <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 transform -translate-x-1/2"></div> */}

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-1">
            {processSteps.map((step, index) => (
              <div
                key={step.stepNumber}
                className="relative flex flex-col sm:flex-row items-start p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-700 text-2xl font-bold">
                    {step.stepNumber}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <div className="mr-3">{step.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
