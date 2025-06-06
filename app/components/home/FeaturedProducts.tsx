"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Modal from "../ui/Modal";

// Sample product data with actual images and Indian Rupee prices
const products = [
  {
    id: "1",
    title: "Minimalist Cotton Shirt",
    price: 1499,
    image: "https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg",
    category: "Men",
    discount: 0,
    description: "Premium cotton shirt with a minimalist design, perfect for casual and formal occasions. Features breathable fabric and comfortable fit."
  },
  {
    id: "2",
    title: "Relaxed Fit Jeans",
    price: 2499,
    image: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg",
    category: "Women",
    discount: 15,
    description: "Stylish relaxed fit jeans made from high-quality denim. Features a comfortable waistband and durable stitching for everyday wear."
  },
  {
    id: "3",
    title: "Oversized Wool Sweater",
    price: 2999,
    image: "https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg",
    category: "Men",
    discount: 0,
    description: "Warm and cozy oversized wool sweater, perfect for winter. Features a soft texture and stylish design that pairs well with any outfit."
  },
  {
    id: "4",
    title: "Structured Blazer",
    price: 3999,
    image: "https://images.pexels.com/photos/6311640/pexels-photo-6311640.jpeg",
    category: "Women",
    discount: 0,
    description: "Elegant structured blazer for a professional look. Features premium fabric, tailored fit, and versatile design suitable for office and events."
  },
  {
    id: "5",
    title: "Slim Fit Chinos",
    price: 1999,
    image: "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg",
    category: "Men",
    discount: 10,
    description: "Classic slim fit chinos made from stretchable cotton. Features a comfortable waistband and versatile design for both casual and semi-formal occasions."
  },
  {
    id: "6",
    title: "Flowy Summer Dress",
    price: 2299,
    image: "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg",
    category: "Women",
    discount: 0,
    description: "Light and breezy summer dress with a flattering silhouette. Features breathable fabric and elegant design perfect for warm weather outings."
  },
];

export default function FeaturedProducts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);

  const openProductModal = (product: typeof products[0], e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Format price with Indian Rupee symbol
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <section className="py-6 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        <div className="text-center mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl"
          >
            Featured Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 max-w-2xl mx-auto text-xs sm:text-sm text-gray-600"
          >
            Discover our handpicked selection of this season's most stylish pieces.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-2 gap-y-4 sm:gap-x-3 sm:gap-y-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer group"
            >
              <div 
                className="rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                onClick={(e) => openProductModal(product, e)}
              >
                <div className="relative aspect-h-4 aspect-w-3 h-40 sm:h-48 md:h-56">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.discount > 0 && (
                    <div className="absolute top-1 left-1 bg-red-500 text-white text-xs font-medium px-1 py-0.5 rounded-md z-10">
                      {product.discount}%
                    </div>
                  )}
                </div>

                <div className="p-2 bg-white">
                  <div className="flex justify-between items-center">
                    <div className="overflow-hidden">
                      <p className="text-xs text-gray-500 uppercase truncate">{product.category}</p>
                      <h3 className="text-xs font-medium text-gray-900 truncate">{product.title}</h3>
                    </div>
                    <div className="text-right">
                      {product.discount > 0 ? (
                        <div className="flex flex-col items-end">
                          <p className="text-xs font-medium text-gray-900">
                            {formatPrice(product.price * (1 - product.discount / 100))}
                          </p>
                          <p className="text-xs text-gray-500 line-through">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                      ) : (
                        <p className="text-xs font-medium text-gray-900">{formatPrice(product.price)}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 text-xs sm:text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View All Products
          </motion.button>
        </div>
      </div>

      {/* Product Quick View Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Quick View"
        size="lg"
      >
        {selectedProduct && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-52 md:h-64 w-full rounded-md overflow-hidden bg-gray-100">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
              />
              {selectedProduct.discount > 0 && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-1.5 py-0.5 rounded-md">
                  {selectedProduct.discount}% OFF
                </div>
              )}
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase">{selectedProduct.category}</p>
              <h3 className="mt-1 text-base sm:text-lg font-semibold text-gray-900">{selectedProduct.title}</h3>
              <div className="mt-1.5">
                {selectedProduct.discount > 0 ? (
                  <div className="flex items-center">
                    <p className="text-base sm:text-lg font-medium text-gray-900">
                      {formatPrice(selectedProduct.price * (1 - selectedProduct.discount / 100))}
                    </p>
                    <p className="ml-2 text-xs text-gray-500 line-through">
                      {formatPrice(selectedProduct.price)}
                    </p>
                  </div>
                ) : (
                  <p className="text-base sm:text-lg font-medium text-gray-900">{formatPrice(selectedProduct.price)}</p>
                )}
              </div>
              <div className="mt-2 md:mt-3">
                <h4 className="text-xs font-medium text-gray-900">Description</h4>
                <p className="mt-1 text-xs text-gray-600">
                  {selectedProduct.description}
                </p>
              </div>
              <div className="mt-3 md:mt-4 space-y-2">
                <button 
                  className="w-full bg-black text-white py-1.5 md:py-2 px-4 rounded-md hover:bg-gray-800 transition-colors text-xs sm:text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Add to Cart
                </button>
                <button 
                  className="w-full border border-gray-300 text-gray-700 py-1.5 md:py-2 px-4 rounded-md hover:bg-gray-50 transition-colors text-xs sm:text-sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
} 