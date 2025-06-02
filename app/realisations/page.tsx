"use client"

import Header from "../../header" // Ajuster le chemin si nécessaire
import Footer from "../../footer" // Ajuster le chemin si nécessaire
import PortfolioHeroSection from "./components/portfolio-hero-section"
import PortfolioGallerySection from "./components/portfolio-gallery-section"
import PortfolioCtaSection from "./components/portfolio-cta-section" // <--- AJOUTER ICI

export default function PortfolioPage() {
  return (
    <div>
      <Header />
      <PortfolioHeroSection />
      <PortfolioGallerySection />
      <PortfolioCtaSection /> {/* <--- AJOUTER ICI */}
      <Footer />
    </div>
  )
}
