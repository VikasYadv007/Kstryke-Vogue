"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          className="h-full w-full"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="small-grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#small-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center py-8 md:py-12 lg:py-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left lg:pr-6 mb-6 lg:mb-0"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              <span className="block">Elevate Your Style</span>
              <span className="block mt-1 text-black">With Modern Fashion</span>
            </h1>
            <p className="mt-3 max-w-lg mx-auto lg:mx-0 text-sm md:text-base text-gray-600">
              Discover our curated collection of contemporary clothing designed for comfort and style.
            </p>
            <div className="mt-5 md:mt-6 flex flex-row justify-center lg:justify-start gap-2 sm:gap-3">
              <Button
                size="sm"
                icon={<FiArrowRight className="w-3 h-3" />}
                iconPosition="right"
              >
                Shop Now
              </Button>
              <Button
                variant="outline"
                size="sm"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative w-full"
          >
            <div className="relative h-[250px] md:h-[350px] w-full">
              <div className="absolute -top-6 -left-6 w-40 h-40 md:w-48 md:h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 md:w-48 md:h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  <Image
                    src="/men-women-3.webp"
                    alt="Fashion models wearing modern clothing"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg shadow-2xl"
                    style={{ minHeight: "200px" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 