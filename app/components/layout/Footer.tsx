"use client";

import Link from "next/link";
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

const footerLinks = [
  {
    title: "Shop",
    links: [
      { name: "Men", href: "/men" },
      { name: "Women", href: "/women" },
      { name: "New Arrivals", href: "/new-arrivals" },
      { name: "Sale", href: "/sale" },
    ],
  },
  {
    title: "About",
    links: [
      { name: "Our Story", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Sustainability", href: "/sustainability" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "/faqs" },
      { name: "Shipping", href: "/shipping" },
      { name: "Returns", href: "/returns" },
    ],
  },
];

const socialLinks = [
  { name: "Instagram", icon: FiInstagram, href: "https://instagram.com" },
  { name: "Facebook", icon: FiFacebook, href: "https://facebook.com" },
  { name: "Twitter", icon: FiTwitter, href: "https://twitter.com" },
  { name: "YouTube", icon: FiYoutube, href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Main Footer */}
        <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Brand Column */}
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-3">Kstryke Vogue</h3>
            <p className="text-xs text-gray-400 mb-4 pr-2">
              Contemporary fashion for the modern individual. Quality materials, timeless designs.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-white mb-2">{column.title}</h3>
              <ul className="space-y-1">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-3 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kstryke Vogue. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 flex space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 