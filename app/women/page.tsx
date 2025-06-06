import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiHeart } from "react-icons/fi";

// Women's product categories
const categories = [
  { name: "Dresses", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000", count: 18 },
  { name: "Tops", image: "https://images.unsplash.com/photo-1564257555965-35ffc85dd2fb?q=80&w=1000", count: 24 },
  { name: "Bottoms", image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=1000", count: 16 },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=1000", count: 12 },
];

// Trending products
const trendingProducts = [
  {
    id: "1",
    name: "Floral Summer Dress",
    price: 2499,
    originalPrice: 2999,
    image: "/women-1.webp",
    colors: ["#C9A9A6", "#E2D2C1", "#000000"],
    isFavorite: false,
  },
  {
    id: "2",
    name: "Casual Blouse",
    price: 1299,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1564257555965-35ffc85dd2fb?q=80&w=1000",
    colors: ["#FFFFFF", "#000000", "#E2D2C1"],
    isFavorite: true,
  },
  {
    id: "3",
    name: "Slim Fit Jeans",
    price: 1999,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=1000",
    colors: ["#4A5568", "#1A202C"],
    isFavorite: false,
  },
  {
    id: "4",
    name: "Designer Skirt",
    price: 1799,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=1000",
    colors: ["#C9A9A6", "#000000"],
    isFavorite: false,
  },
];

// Featured collections
const collections = [
  {
    id: "summer",
    name: "Summer Collection",
    description: "Light and breezy pieces for warm days",
    image: "/men-women-4.webp",
    itemCount: 24,
  },
  {
    id: "formal",
    name: "Formal Wear",
    description: "Elegant options for professional settings",
    image: "/women-1.webp",
    itemCount: 18,
  },
  {
    id: "casual",
    name: "Casual Comfort",
    description: "Everyday styles that blend comfort and fashion",
    image: "/men-women-2.webp",
    itemCount: 32,
  },
];

// Best sellers
const bestSellers = [
  {
    id: "bs1",
    name: "Elegant Evening Dress",
    price: 4999,
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000",
    rating: 4.9,
    reviewCount: 86,
  },
  {
    id: "bs2",
    name: "Classic White Blouse",
    price: 1499,
    image: "https://images.unsplash.com/photo-1564257555965-35ffc85dd2fb?q=80&w=1000",
    rating: 4.7,
    reviewCount: 124,
  },
  {
    id: "bs3",
    name: "Premium Denim Jeans",
    price: 2799,
    image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?q=80&w=1000",
    rating: 4.8,
    reviewCount: 95,
  },
  {
    id: "bs4",
    name: "Summer Floral Dress",
    price: 2299,
    image: "/women-1.webp",
    rating: 4.6,
    reviewCount: 78,
  },
  {
    id: "bs5",
    name: "Casual Cardigan",
    price: 1899,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
    rating: 4.5,
    reviewCount: 62,
  },
  {
    id: "bs6",
    name: "Designer Handbag",
    price: 3999,
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=1000",
    rating: 4.9,
    reviewCount: 47,
  },
];

export default function WomenPage() {
  return (
    <main>
      <Header />
      <div className="pt-16 md:pt-20">
        {/* Hero Banner */}
        <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000"
            alt="Women's Collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Women's Collection
            </h1>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base max-w-md">
              Elegant and stylish clothing for the modern woman
            </p>
          </div>
        </div>

        {/* Categories Section */}
        <section className="py-6 sm:py-10 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {categories.map((category) => (
                <Link href="#" key={category.name} className="group">
                  <div className="relative h-32 sm:h-40 rounded-lg overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-white font-medium text-sm sm:text-base">{category.name}</h3>
                        <p className="text-gray-200 text-xs">{category.count} items</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Now */}
        <section className="py-6 sm:py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Trending Now</h2>
              <Link href="/collection" className="text-xs sm:text-sm text-gray-700 hover:text-black flex items-center">
                View All <FiChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {trendingProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                    />
                    <button 
                      className={`absolute top-2 right-2 h-7 w-7 rounded-full flex items-center justify-center ${
                        product.isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-600'
                      }`}
                    >
                      <FiHeart className={`h-3.5 w-3.5 ${product.isFavorite ? 'fill-current' : ''}`} />
                    </button>
                    <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Quick View
                    </button>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center mt-1">
                      <div className="flex items-center">
                        <p className="text-xs sm:text-sm font-medium text-gray-900">₹{product.price}</p>
                        {product.originalPrice && (
                          <p className="ml-1 text-xs text-gray-500 line-through">₹{product.originalPrice}</p>
                        )}
                      </div>
                      <div className="flex gap-1">
                        {product.colors.map((color) => (
                          <div
                            key={color}
                            className="h-3 w-3 rounded-full border border-gray-300"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-6 sm:py-10 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {collections.map((collection) => (
                <Link href="#" key={collection.id} className="group">
                  <div className="relative h-48 sm:h-64 rounded-lg overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                      <h3 className="text-white font-medium text-sm sm:text-base">{collection.name}</h3>
                      <p className="text-gray-200 text-xs mt-1">{collection.description}</p>
                      <p className="text-white text-xs mt-2">{collection.itemCount} items</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-6 sm:py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Best Sellers</h2>
              <Link href="/collection" className="text-xs sm:text-sm text-gray-700 hover:text-black flex items-center">
                View All <FiChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {bestSellers.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-md bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xs font-medium text-gray-900 truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        <svg className="h-3 w-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 15.585l-7.07 3.716 1.35-7.87-5.72-5.573 7.91-1.149L10 0l3.53 7.709 7.91 1.149-5.72 5.573 1.35 7.87L10 15.585z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                      </div>
                      <p className="text-xs text-gray-700 ml-auto">₹{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Banner */}
        <section className="py-6 sm:py-10 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="px-4 py-8 sm:px-6 sm:py-12 md:p-16 text-center">
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                  Get 10% Off Your First Order
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm max-w-md mx-auto mb-4">
                  Subscribe to our newsletter and be the first to know about new collections and exclusive offers
                </p>
                <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-3 py-2 text-xs sm:text-sm rounded-md flex-grow"
                  />
                  <button className="bg-white text-black text-xs sm:text-sm px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
} 