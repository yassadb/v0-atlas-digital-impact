"use client"

import Header from "../../header" // Ajuster le chemin si nécessaire
import Footer from "../../footer" // Ajuster le chemin si nécessaire
import AgencyHeroSection from "./components/agency-hero-section"
import MissionSection from "./components/mission-section"
import ValuesSection from "./components/values-section"
import TeamSection from "./components/team-section"
import MoroccoCommitmentSection from "./components/morocco-commitment-section" // <--- AJOUTER ICI

// Importer d'autres sections de la page agence ici si besoin

export default function AgencyPage() {
  return (
    <div>
      <Header />
      <AgencyHeroSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <MoroccoCommitmentSection /> {/* <--- AJOUTER ICI */}
      {/* Autres sections de la page "Notre Agence" viendront ici */}
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Contenu principal de la page Agence</h2>
        <p className="text-gray-700 text-center">Plus de détails sur notre culture, nos processus, etc.</p>
      </main>
      <Footer />
    </div>
  )
}
