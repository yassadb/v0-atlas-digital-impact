"use client"

import Header from "../../header" // Ajuster le chemin si nécessaire
import Footer from "../../footer" // Ajuster le chemin si nécessaire
import PortfolioHeroSection from "./components/portfolio-hero-section"
import PortfolioGalleryWrapper from "./components/portfolio-gallery-wrapper"
import PortfolioCtaSection from "./components/portfolio-cta-section"

export default function PortfolioPage() {
  return (
    <div>
      <Header />
      <PortfolioHeroSection />
      <PortfolioGalleryWrapper />
      <PortfolioCtaSection />
      <Footer />
    </div>
  )
}
