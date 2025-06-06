"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiShoppingBag, FiUser, FiSearch } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Collection", href: "/collection" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-xl md:text-2xl font-bold ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Kstryke Vogue
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled 
                    ? "text-gray-900 hover:text-black" 
                    : "text-gray-100 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-5">
            <button 
              aria-label="Search" 
              className={`${scrolled ? "text-gray-700" : "text-gray-200"} hover:text-${scrolled ? "black" : "white"}`}
            >
              <FiSearch className="w-4 h-4" />
            </button>
            <button 
              aria-label="Account" 
              className={`${scrolled ? "text-gray-700" : "text-gray-200"} hover:text-${scrolled ? "black" : "white"}`}
            >
              <FiUser className="w-4 h-4" />
            </button>
            <button 
              aria-label="Cart" 
              className={`${scrolled ? "text-gray-700" : "text-gray-200"} hover:text-${scrolled ? "black" : "white"} relative`}
            >
              <FiShoppingBag className="w-4 h-4" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`${scrolled ? "text-gray-700" : "text-gray-200"} hover:text-${scrolled ? "black" : "white"}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="h-5 w-5" aria-hidden="true" />
              ) : (
                <FiMenu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-1.5 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-around py-3 border-t border-gray-100 mt-2">
                <button aria-label="Search" className="p-2 rounded-full hover:bg-gray-100 text-gray-700">
                  <FiSearch className="w-4 h-4" />
                </button>
                <button aria-label="Account" className="p-2 rounded-full hover:bg-gray-100 text-gray-700">
                  <FiUser className="w-4 h-4" />
                </button>
                <button aria-label="Cart" className="p-2 rounded-full hover:bg-gray-100 text-gray-700 relative">
                  <FiShoppingBag className="w-4 h-4" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-3.5 h-3.5 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 