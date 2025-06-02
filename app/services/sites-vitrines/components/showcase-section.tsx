"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card" // Card ajouté pour l'encadrement

interface ShowcaseImage {
  src: string
  alt: string
}

interface ShowcaseSectionProps {
  title: string
  images: ShowcaseImage[]
}

export default function ShowcaseSection({ title, images }: ShowcaseSectionProps) {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12 sm:mb-16">{title}</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-w-4 aspect-h-3">
                {" "}
                {/* Ratio 4:3 pour les images de showcase */}
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={600}
                  height={450} // Ajusté pour ratio 4:3
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          ))}
        </div>
        {/* Optionnel: Ajouter un lien vers une page "Réalisations" plus complète */}
        {/*
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/realisations">Voir toutes nos réalisations</Link>
          </Button>
        </div>
        */}
      </div>
    </section>
  )
}
