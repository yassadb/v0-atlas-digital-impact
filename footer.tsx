"use client"

import Link from "next/link"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 items-center justify-center rounded bg-gradient-to-r from-amber-500 to-amber-600 px-2.5 py-1.5 text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">
                Atlas Digital Impact
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Atlas Digital Impact : Votre partenaire digital pour une croissance ambitieuse au Maroc.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0" />
                <span>Boulevard du Jubilé 188, 1080 Bruxelles, Belgique</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0" />
                <span>+32 2 XXX XX XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0" />
                <a href="mailto:contact@ouladib.com" className="hover:text-amber-600 transition-colors">
                  contact@ouladib.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/agence" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                  Notre Agence
                </Link>
              </li>
              <li>
                <Link href="/approche" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                  Notre Approche
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                  Réalisations
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Informations</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <Link href="/mentions-legales" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-de-confidentialite"
                  className="text-sm text-gray-600 hover:text-amber-600 transition-colors"
                >
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <span className="text-sm text-gray-600">OULADIB SRL : BE0768.657.593</span>
              </li>
            </ul>
            <div className="flex space-x-3">
              <Link href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-amber-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Atlas Digital Impact. Tous droits réservés. (OULADIB SRL)
          </p>
        </div>
      </div>
    </footer>
  )
}
