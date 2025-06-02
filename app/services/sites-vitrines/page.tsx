"use client"

import Header from "../../../header" // Ajuster le chemin
import Footer from "../../../footer" // Ajuster le chemin

import ServiceHeroSection from "./components/service-hero-section"
import TargetAudienceSection from "./components/target-audience-section"
import KeyBenefitsSection from "./components/key-benefits-section"
import ServiceFeaturesSection from "./components/service-features-section"
import ShowcaseSection from "./components/showcase-section"
import ServiceCtaSection from "./components/service-cta-section"

export default function SitesVitrinesPage() {
  return (
    <div>
      <Header />
      <ServiceHeroSection
        title="Sites Vitrines Modernes et Performants."
        subtitle="Votre site vitrine est la pierre angulaire de votre présence digitale au Maroc. Chez Atlas Digital Impact, nous concevons des sites web esthétiques, professionnels et optimisés pour convertir vos visiteurs en clients fidèles."
        backgroundImageUrl="/placeholder.svg?height=700&width=1200"
      />
      <TargetAudienceSection
        title="Ce service est idéal pour..."
        items={[
          "Les PME et TPE marocaines souhaitant renforcer leur image de marque et leur crédibilité en ligne.",
          "Les professionnels libéraux (avocats, médecins, consultants...) désirant une présence web de qualité pour présenter leur expertise.",
          "Les artisans et commerçants voulant exposer leurs produits ou services à une audience plus large.",
          "Toute entreprise ou organisation visant à générer des prospects qualifiés et à faciliter la prise de contact via le web.",
        ]}
      />
      <KeyBenefitsSection
        title="Bénéfices Clés pour Votre Entreprise au Maroc"
        benefits={[
          {
            icon: "BadgeCheck",
            name: "Crédibilité et Image de Marque Renforcées",
            description:
              "Un site professionnel inspire confiance et positionne votre entreprise comme un acteur sérieux sur le marché marocain.",
          },
          {
            icon: "TrendingUp",
            name: "Visibilité Accrue 24/7 auprès de Votre Cible",
            description:
              "Soyez accessible à tout moment par vos clients potentiels, où qu'ils soient au Maroc et au-delà.",
          },
          {
            icon: "Users",
            name: "Génération d'Opportunités Commerciales Qualifiées",
            description:
              "Transformez les visiteurs en prospects grâce à un design engageant et des appels à l'action clairs.",
          },
          {
            icon: "MessageCircle",
            name: "Communication Efficace sur Vos Offres",
            description: "Présentez clairement vos produits, services et valeurs ajoutées à votre audience cible.",
          },
        ]}
      />
      <ServiceFeaturesSection
        title="Nos Prestations pour la Création de Votre Site Vitrine"
        features={[
          {
            icon: "Palette",
            name: "Design Personnalisé et Unique à Votre Image",
            description:
              "Nous créons une identité visuelle sur mesure qui reflète votre marque et séduit votre public cible.",
          },
          {
            icon: "Smartphone",
            name: "Développement Responsive (Mobile, Tablette, Ordinateur)",
            description: "Une expérience utilisateur optimale sur tous les appareils, essentielle au Maroc.",
          },
          {
            icon: "Search",
            name: "Optimisation SEO Initiale pour les Moteurs de Recherche",
            description: "Les bases techniques pour améliorer votre référencement naturel sur Google et autres.",
          },
          {
            icon: "Settings2",
            name: "Interface pour une Gestion de Contenu Facilitée (CMS sur demande)",
            description: "Mettez à jour votre site facilement (actualités, blog...) si vous optez pour un CMS.",
          },
          {
            icon: "Lightbulb",
            name: "Conseils Stratégiques et Accompagnement Personnalisé",
            description: "Nous vous guidons à chaque étape, de la conception à la mise en ligne et au-delà.",
          },
          {
            icon: "ShieldCheck",
            name: "Sécurité et Maintenance de Base",
            description: "Nous veillons à la robustesse et à la protection de votre investissement digital.",
          },
        ]}
      />
      <ShowcaseSection
        title="Quelques Concepts Visuels de Sites Vitrines"
        images={[
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Mockup site vitrine moderne pour agence digitale",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Mockup site vitrine professionnel pour consultant",
          },
          {
            src: "/placeholder.svg?height=400&width=600",
            alt: "Mockup site vitrine élégant pour artisanat",
          },
        ]}
      />
      <ServiceCtaSection
        title="Prêt à créer un site vitrine qui marque les esprits ?"
        buttonText="Obtenir un devis pour votre site vitrine"
        buttonLink="/contact?service=site-vitrine"
      />
      <Footer />
    </div>
  )
}
