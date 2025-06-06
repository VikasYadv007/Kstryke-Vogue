"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiShoppingBag, FiHeart } from "react-icons/fi";

interface CardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category?: string;
  discount?: number;
  href?: string;
}

export default function Card({
  id,
  title,
  price,
  image,
  category,
  discount,
  href = "#",
}: CardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  const discountedPrice = discount
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price * (1 - discount / 100))
    : null;

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative"
    >
      <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-md">
        <Link href={href} onClick={(e) => e.preventDefault()}>
          <div className="relative h-64 w-full overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              {/* Product image or color block */}
              <div className="w-full h-full relative">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
                
                {/* Product title overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white bg-opacity-80 px-4 py-2 rounded-md">
                    <p className="font-medium text-gray-900">{title}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {discount && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-md z-20">
                {discount}% OFF
              </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-10 z-20" />
          </div>
        </Link>

        <div className="absolute right-2 top-2 z-30 flex flex-col gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-gray-100"
            aria-label="Add to wishlist"
            onClick={handleButtonClick}
          >
            <FiHeart className="h-4 w-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-gray-100"
            aria-label="Add to cart"
            onClick={handleButtonClick}
          >
            <FiShoppingBag className="h-4 w-4" />
          </motion.button>
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          {category && (
            <p className="text-xs text-gray-500 mb-1 uppercase">{category}</p>
          )}
          <h3 className="text-sm font-medium text-gray-900">
            <Link href={href} onClick={(e) => e.preventDefault()}>
              {title}
            </Link>
          </h3>
        </div>
        <div className="text-right">
          {discountedPrice ? (
            <div className="flex flex-col items-end">
              <p className="text-sm font-medium text-gray-900">{discountedPrice}</p>
              <p className="text-xs text-gray-500 line-through">{formattedPrice}</p>
            </div>
          ) : (
            <p className="text-sm font-medium text-gray-900">{formattedPrice}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
} 