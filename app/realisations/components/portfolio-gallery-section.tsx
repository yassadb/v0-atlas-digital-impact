"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tag } from "lucide-react" // Pour les tags de service
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

// Types pour les projets et les filtres
type ServiceCategory = "Site Vitrine" | "E-commerce" | "Application Web" | "Branding"
interface Project {
  id: string
  title: string
  description: string
  imageUrl: string
  category: ServiceCategory
  services: string[] // ex: ["Design UI/UX", "Développement Frontend"]
  detailsLink?: string // Lien vers une étude de cas
}

const initialProjects: Project[] = [
  {
    id: "concept-pme-innovante",
    title: "Concept : Site Vitrine PME Innovante",
    description: "Un design moderne et épuré pour valoriser l'innovation et attirer les talents.",
    imageUrl: "/portfolio/concept-pme-innovante.jpeg",
    category: "Site Vitrine",
    services: ["Design UI/UX", "Branding Stratégique"],
    detailsLink: "#",
  },
  {
    id: "concept-ecommerce-artisanat",
    title: "Concept : E-commerce Artisanat Marocain",
    description: "Une plateforme élégante pour mettre en avant le savoir-faire local et faciliter les ventes en ligne.",
    imageUrl: "/portfolio/concept-ecommerce-artisanat.jpeg",
    category: "E-commerce",
    services: ["Design UI/UX", "Développement E-commerce", "Photographie Produits"],
  },
  {
    id: "concept-app-gestion",
    title: "Concept : Outil de Gestion Simplifié",
    description: "Interface intuitive pour une application métier visant à optimiser les processus internes.",
    imageUrl: "/portfolio/concept-app-gestion.jpeg",
    category: "Application Web",
    services: ["Design UX/UI", "Maquettage Fonctionnel", "Développement Backend"],
    detailsLink: "#",
  },
  {
    id: "concept-branding-startup",
    title: "Concept : Identité Visuelle Startup Tech",
    description: "Création d'une identité de marque forte et mémorable pour une jeune entreprise technologique.",
    imageUrl: "/portfolio/concept-branding-startup.jpeg",
    category: "Branding",
    services: ["Logo Design", "Charte Graphique Complète", "Stratégie de Marque"],
  },
  {
    id: "local-moroccan-travel-agency", // ID mis à jour
    title: "Projet : Agence de Voyage Marocaine", // Titre mis à jour
    description: "Site vitrine attrayant pour une agence de voyage locale, mettant en avant les beautés du Maroc.", // Description mise à jour
    imageUrl: "/portfolio/local-moroccan-travel-agency.jpeg", // Image mise à jour
    category: "Site Vitrine",
    services: ["Web Design", "SEO Local", "Intégration API"],
  },
  {
    id: "organic-cosmetics-brand", // ID mis à jour
    title: "Projet : Marque de Cosmétiques Bio", // Titre mis à jour
    description: "Boutique en ligne élégante et épurée pour une marque de cosmétiques biologiques et naturels.", // Description mise à jour
    imageUrl: "/portfolio/organic-cosmetics-brand.jpeg", // Image mise à jour
    category: "E-commerce",
    services: ["Plateforme E-commerce", "Marketing Digital", "Branding"],
  },
]

const serviceCategories: ServiceCategory[] = ["Site Vitrine", "E-commerce", "Application Web", "Branding"]

export default function PortfolioGallerySection() {
  const searchParams = useSearchParams()
  const [activeFilter, setActiveFilter] = useState<ServiceCategory | "Tous">("Tous")

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      // Convertir les paramètres URL en format de catégorie
      const categoryMap: { [key: string]: ServiceCategory } = {
        "Site Vitrine": "Site Vitrine",
        "E-commerce": "E-commerce",
        "Application Web": "Application Web",
        Branding: "Branding",
      }

      // categoryParam sera déjà décodé (ex: "Site Vitrine" au lieu de "Site+Vitrine")
      const mappedCategory = categoryMap[categoryParam as keyof typeof categoryMap]

      if (mappedCategory && serviceCategories.includes(mappedCategory)) {
        setActiveFilter(mappedCategory)
      } else if (serviceCategories.includes(categoryParam as ServiceCategory)) {
        // Fallback si le paramètre est déjà une catégorie valide sans mapping nécessaire
        setActiveFilter(categoryParam as ServiceCategory)
      } else {
        // Si le paramètre n'est pas reconnu, on peut choisir de revenir à "Tous" ou de ne rien faire
        // setActiveFilter("Tous");
      }
    }
  }, [searchParams])

  const filteredProjects =
    activeFilter === "Tous" ? initialProjects : initialProjects.filter((project) => project.category === activeFilter)

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-lg text-gray-700">
            Voici quelques concepts et réalisations illustrant notre
            expertise en design et développement :
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          <Button
            variant={activeFilter === "Tous" ? "default" : "outline"}
            onClick={() => setActiveFilter("Tous")}
            className={`rounded-full px-4 py-2 text-xs sm:text-sm sm:px-6 sm:py-2.5 transition-colors duration-150 ${
              activeFilter === "Tous"
                ? "bg-amber-500 text-white hover:bg-amber-600"
                : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
            }`}
          >
            Tous
          </Button>
          {serviceCategories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm sm:px-6 sm:py-2.5 transition-colors duration-150 ${
                activeFilter === category
                  ? "bg-amber-500 text-white hover:bg-amber-600"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grille de Projets */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-white group"
              >
                <CardHeader className="p-0 relative">
                  <div className="aspect-w-4 aspect-h-3">
                    {" "}
                    {/* Maintenir un ratio pour l'image */}
                    <Image
                      src={project.imageUrl || "/placeholder.svg"}
                      alt={`Image pour ${project.title}`}
                      width={400} // Base width
                      height={300} // Base height (maintaining 4:3)
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-150">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mb-4 h-16 overflow-hidden">
                    {" "}
                    {/* Hauteur fixe pour description */}
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.map((service, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800"
                      >
                        <Tag className="h-3 w-3 mr-1.5" />
                        {service}
                      </span>
                    ))}
                  </div>
                </CardContent>
                {project.detailsLink && (
                  <CardFooter className="p-6 pt-0">
                    <Button asChild variant="link" className="text-amber-600 hover:text-amber-700 p-0">
                      <Link href={project.detailsLink}>Voir plus de détails</Link>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg py-10">
            Aucun projet ne correspond à cette catégorie pour le moment.
          </p>
        )}
      </div>
    </section>
  )
}
