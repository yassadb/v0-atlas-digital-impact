"use client"

import { Mail, Phone, Building, Info } from "lucide-react"

export default function ContactInfoSection() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Nos Coordonnées.</h3>
      <div className="space-y-4 text-gray-700">
        <div className="flex items-start">
          <Building className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <p className="font-semibold text-gray-800">Atlas Digital Impact</p>
            <p>Boulevard du Jubilé 188</p>
            <p>1080 Bruxelles, Belgique</p>
          </div>
        </div>
        <div className="flex items-center">
          <Mail className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
          <a href="mailto:contact@ouladib.com" className="hover:text-amber-600 hover:underline">
            contact@ouladib.com
          </a>
        </div>
        <div className="flex items-center">
          <Phone className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
          <span>+32 2 XXX XX XX (BE)</span> {/* Placeholder pour le numéro */}
        </div>
        <div className="flex items-center">
          <Info className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
          <span>OULADIB SRL : BE0768.657.593</span>
        </div>
      </div>

      {/* Optionnel: Carte Google Maps */}
      <div className="mt-8">
        <h4 className="text-lg font-medium text-gray-800 mb-3">Nous trouver :</h4>
        <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden border border-gray-200">
          {/* Remplacer par votre iframe Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.606959669995!2d4.33058801560999!3d50.85711997953358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c3f5f5f5f5f5%3A0x47c3c3f5f5f5f5f5!2sBoulevard%20du%20Jubil%C3%A9%20188%2C%201080%20Molenbeek-Saint-Jean!5e0!3m2!1sfr!2sbe!4v1620000000000!5m2!1sfr!2sbe"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte Google Maps OULADIB SRL"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
