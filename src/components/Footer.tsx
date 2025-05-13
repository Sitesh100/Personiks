import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Personiks</h3>
            <p className="text-gray mb-4">
              Leading medical and cosmetic clinic providing exceptional care and treatments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray hover:text-gold-light">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray hover:text-gold-light">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray hover:text-gold-light">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray hover:text-gold-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-gray hover:text-gold-light">
                  Our Treatments
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-gray hover:text-gold-light">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link href="/branches" className="text-gray hover:text-gold-light">
                  Our Branches
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray hover:text-gold-light">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-gold" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-gold" />
                <span>info@personiks.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-gold" />
                <span>123 Medical Center Dr, Suite 100, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray pt-6 text-center text-gray text-sm">
          <p>&copy; {new Date().getFullYear()} Personiks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
