"use client"

import Header from "../../header" // Ajuster le chemin si nécessaire
import Footer from "../../footer" // Ajuster le chemin si nécessaire
import ContactHeroSection from "./components/contact-hero-section"
import ContactFormSection from "./components/contact-form-section"
import ContactInfoSection from "./components/contact-info-section"
import { Toaster } from "@/components/ui/toaster" // Assurez-vous que Toaster est disponible

export default function ContactPage() {
  return (
    <div>
      <Header />
      <ContactHeroSection />
      <div className="bg-gray-100">
        {" "}
        {/* Ajout d'un fond pour la section principale */}
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {" "}
            {/* Ajustement de la grille pour plus d'espace au formulaire */}
            <div className="lg:col-span-3">
              {" "}
              {/* Le formulaire prend plus de place */}
              <ContactFormSection />
            </div>
            <div className="lg:col-span-2">
              {" "}
              {/* Les coordonnées prennent moins de place */}
              <ContactInfoSection />
            </div>
          </div>
        </div>
      </div>
      <Toaster /> {/* Nécessaire pour afficher les notifications (toast) */}
      <Footer />
    </div>
  )
}
