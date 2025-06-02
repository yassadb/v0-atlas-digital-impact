"use client"

import Header from "../../header" // Ajuster le chemin si nécessaire
import Footer from "../../footer" // Ajuster le chemin si nécessaire
import ApproachHeroSection from "./components/approach-hero-section"
import ProcessStepsSection from "./components/process-steps-section"
import QualityCommitmentsSection from "./components/quality-commitments-section"
import ClientExpectationsSection from "./components/client-expectations-section"
import ApproachCtaSection from "./components/approach-cta-section" // <--- AJOUTER ICI

export default function ApproachPage() {
  return (
    <div>
      <Header />
      <ApproachHeroSection />
      <ProcessStepsSection />
      <QualityCommitmentsSection />
      <ClientExpectationsSection />
      <ApproachCtaSection /> {/* <--- AJOUTER ICI */}
      {/* Le main n'est plus nécessaire si la page est remplie de sections */}
      {/* 
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Contenu principal de la page Approche</h2>
        <p className="text-gray-700 text-center">
          Détails sur nos outils de collaboration, notre philosophie de travail, etc.
        </p>
      </main>
      */}
      <Footer />
    </div>
  )
}
