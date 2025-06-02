"use client"

import type React from "react"
import Image from "next/image"
import { AutoScrollCarousel } from "@/components/ui/auto-scroll-carousel"

interface PortfolioItem {
  imageUrl: string
  title: string
  category: string
}

const PortfolioItemCard: React.FC<PortfolioItem> = ({ imageUrl, title, category }) => {
  return (
    <div className="w-[380px] sm:w-[480px] md:w-[520px] p-3 flex-shrink-0 group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-2xl">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`Maquette du projet ${title}`}
          width={600} // Largeur de base pour le calcul du ratio, l'affichage sera contraint par le conteneur
          height={450} // Hauteur de base pour le calcul du ratio
          className="object-cover w-full h-auto aspect-[4/3]" // Maintenir un ratio 4/3
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{category}</p>
        </div>
      </div>
    </div>
  )
}

const projectsData: PortfolioItem[] = [
  {
    imageUrl: "/portfolio/lumine-design-studio.jpeg",
    title: "LUMINE Design Studio",
    category: "Design d'Intérieur",
  },
  {
    imageUrl: "/portfolio/serenite-urbaine.jpeg",
    title: "Sérénité Urbaine",
    category: "Yoga & Bien-être",
  },
  {
    imageUrl: "/portfolio/saveurs-exception.jpeg",
    title: "Saveurs d'Exception",
    category: "Gastronomie sur mesure",
  },
  {
    imageUrl: "/portfolio/nomads-quest.jpeg",
    title: "Nomad's Quest",
    category: "Voyages d'Aventure",
  },
  {
    imageUrl: "/portfolio/lepi-dore.jpeg",
    title: "L'Épi Doré",
    category: "Boulangerie Artisanale",
  },
  {
    imageUrl: "/portfolio/momentum-conseil.jpeg",
    title: "Momentum Conseil",
    category: "Conseil aux Entreprises",
  },
  {
    imageUrl: "/portfolio/le-mot-juste.jpeg",
    title: "Le Mot Juste",
    category: "Librairie & Café",
  },
]

export default function PortfolioScrollSection() {
  const portfolioItems = projectsData.map((p, i) => (
    <PortfolioItemCard key={i} imageUrl={p.imageUrl} title={p.title} category={p.category} />
  ))

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl">DEPUIS DE NOMBREUSES ANNÉES,</h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Je mets mon savoir-faire et mon talent de webmaster à votre service afin de réaliser un site internet
            élégant, moderne et interactif. Je vous accompagne dans le développement de votre site web depuis sa
            conception jusqu'à sa mise en ligne en passant par l'hébergement et l'enregistrement de votre nom de
            domaine. Un site internet moderne, à savoir votre vitrine 7/7 & H24, est aujourd'hui une nécessité pour tous
            commerçants. Il consolide votre crédibilité, informe et permet l'engagement avec votre future clientèle.
          </p>
        </div>
      </div>
      {/* Carousel Section */}
      <div className="relative">
        {/* Gradient Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-24 bg-gradient-to-r from-gray-50 to-transparent z-40 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-24 bg-gradient-to-l from-gray-50 to-transparent z-40 pointer-events-none"></div>

        <AutoScrollCarousel
          items={portfolioItems}
          scrollSpeed={25}
          pauseOnHover={true}
          itemClassName="mx-1" // Réduit la marge pour un look plus compact si souhaité
        />
      </div>
    </section>
  )
}
