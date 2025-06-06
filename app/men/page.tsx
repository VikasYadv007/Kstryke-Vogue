import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

// Men's product categories
const categories = [
  { name: "Shirts", image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg", count: 12 },
  { name: "Pants", image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg", count: 8 },
  { name: "Outerwear", image: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg", count: 10 },
  { name: "Accessories", image: "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg", count: 6 },
];

// Featured men's products
const featuredProducts = [
  {
    id: "1",
    name: "Premium Cotton Shirt",
    price: 1699,
    originalPrice: 1999,
    image: "https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg",
    rating: 4.5,
    reviewCount: 42,
  },
  {
    id: "2",
    name: "Slim Fit Chinos",
    price: 2499,
    originalPrice: null,
    image: "https://images.pexels.com/photos/1300550/pexels-photo-1300550.jpeg",
    rating: 4.8,
    reviewCount: 36,
  },
  {
    id: "3",
    name: "Casual Denim Jacket",
    price: 3499,
    originalPrice: 4299,
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
    rating: 4.6,
    reviewCount: 28,
  },
  {
    id: "4",
    name: "Wool Blend Sweater",
    price: 2899,
    originalPrice: null,
    image: "https://images.pexels.com/photos/1496647/pexels-photo-1496647.jpeg",
    rating: 4.7,
    reviewCount: 19,
  },
  {
    id: "5",
    name: "Formal Business Shirt",
    price: 1899,
    originalPrice: null,
    image: "https://images.pexels.com/photos/2254123/pexels-photo-2254123.jpeg",
    rating: 4.4,
    reviewCount: 31,
  },
  {
    id: "6",
    name: "Classic Fit Blazer",
    price: 4999,
    originalPrice: 5999,
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    rating: 4.9,
    reviewCount: 24,
  },
  {
    id: "7",
    name: "Casual T-Shirt",
    price: 899,
    originalPrice: null,
    image: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg",
    rating: 4.3,
    reviewCount: 47,
  },
  {
    id: "8",
    name: "Linen Summer Shirt",
    price: 1799,
    originalPrice: 2299,
    image: "https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg",
    rating: 4.7,
    reviewCount: 33,
  },
];

// New arrivals
const newArrivals = [
  {
    id: "101",
    name: "Lightweight Bomber Jacket",
    price: 3299,
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
  },
  {
    id: "102",
    name: "Premium Denim Jeans",
    price: 2699,
    image: "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg",
  },
  {
    id: "103",
    name: "Merino Wool Cardigan",
    price: 3499,
    image: "https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg",
  },
  {
    id: "104",
    name: "Casual Linen Shirt",
    price: 1899,
    image: "https://images.pexels.com/photos/6764007/pexels-photo-6764007.jpeg",
  },
];

export default function MenPage() {
  return (
    <main>
      <Header />
      <div className="pt-16 md:pt-20">
        {/* Hero Banner */}
        <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg"
            alt="Men's Collection"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Men&apos;s Collection
            </h1>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base max-w-md">
              Discover our premium selection of men&apos;s clothing designed for style and comfort
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
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
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

        {/* Featured Products */}
        <section className="py-6 sm:py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Featured Products</h2>
              <Link href="/collection" className="text-xs sm:text-sm text-gray-700 hover:text-black flex items-center">
                View All <FiChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Quick View
                    </button>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-3 w-3 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400"
                                : i < product.rating
                                ? "text-yellow-300"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 15.585l-7.07 3.716 1.35-7.87-5.72-5.573 7.91-1.149L10 0l3.53 7.709 7.91 1.149-5.72 5.573 1.35 7.87L10 15.585z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ))}
                        <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <div className="flex items-center">
                        <p className="text-xs sm:text-sm font-medium text-gray-900">₹{product.price}</p>
                        {product.originalPrice && (
                          <p className="ml-1 text-xs text-gray-500 line-through">₹{product.originalPrice}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-6 sm:py-10 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">New Arrivals</h2>
              <Link href="/collection" className="text-xs sm:text-sm text-gray-700 hover:text-black flex items-center">
                View All <FiChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {newArrivals.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-md bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                    />
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
                      New
                    </div>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700 mt-1">₹{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Style Guide Banner */}
        <section className="py-6 sm:py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="relative rounded-lg overflow-hidden">
              <div className="h-48 sm:h-64 md:h-80">
                <Image
                  src="/men-women-1.webp"
                  alt="Men's Style Guide"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
                  <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                    Men&apos;s Style Guide
                  </h2>
                  <p className="text-gray-200 text-xs sm:text-sm max-w-md mb-4">
                    Discover the latest trends and styling tips for the modern man
                  </p>
                  <button className="bg-white text-black text-xs sm:text-sm px-4 py-2 rounded-md hover:bg-gray-100 transition-colors">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
} 