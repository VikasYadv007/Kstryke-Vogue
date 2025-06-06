import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import { FiFilter, FiChevronDown } from "react-icons/fi";

// Collection categories
const categories = [
  { name: "All", count: 48, active: true },
  { name: "Men", count: 24, active: false },
  { name: "Women", count: 24, active: false },
  { name: "Accessories", count: 12, active: false },
  { name: "Sale", count: 8, active: false },
];

// Collection products
const products = [
  {
    id: "1",
    name: "Classic Cotton Shirt",
    price: 1499,
    image: "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg",
    category: "Men",
    isNew: true,
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 2499,
    image: "https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg",
    category: "Men",
    isNew: false,
  },
  {
    id: "3",
    name: "Casual Blazer",
    price: 3999,
    image: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg",
    category: "Men",
    isNew: false,
  },
  {
    id: "4",
    name: "Summer Dress",
    price: 2299,
    image: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg",
    category: "Women",
    isNew: true,
  },
  {
    id: "5",
    name: "Elegant Blouse",
    price: 1899,
    image: "https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg",
    category: "Women",
    isNew: false,
  },
  {
    id: "6",
    name: "Formal Trousers",
    price: 2699,
    image: "https://images.pexels.com/photos/3760610/pexels-photo-3760610.jpeg",
    category: "Men",
    isNew: false,
  },
  {
    id: "7",
    name: "Designer Skirt",
    price: 1999,
    image: "https://images.pexels.com/photos/6765164/pexels-photo-6765164.jpeg",
    category: "Women",
    isNew: true,
  },
  {
    id: "8",
    name: "Casual Sweater",
    price: 2199,
    image: "https://images.pexels.com/photos/6764031/pexels-photo-6764031.jpeg",
    category: "Men",
    isNew: false,
  },
  {
    id: "9",
    name: "Evening Dress",
    price: 4999,
    image: "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg",
    category: "Women",
    isNew: true,
  },
  {
    id: "10",
    name: "Denim Jacket",
    price: 3499,
    image: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg",
    category: "Unisex",
    isNew: false,
  },
  {
    id: "11",
    name: "Casual Shirt",
    price: 1299,
    image: "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg",
    category: "Unisex",
    isNew: false,
  },
  {
    id: "12",
    name: "Summer Collection",
    price: 2599,
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
    category: "Unisex",
    isNew: true,
  },
];

// Sort options
const sortOptions = [
  { name: "Newest", value: "newest" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
  { name: "Most Popular", value: "popular" },
];

export default function Collection() {
  return (
    <main>
      <Header />
      <div className="pt-16 md:pt-20">
        <section className="bg-white">
          {/* Hero Banner */}
          <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg"
              alt="Collection banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                Our Collection
              </h1>
            </div>
          </div>

          {/* Collection Content */}
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
            {/* Filters and Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                <button className="flex items-center text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-md">
                  <FiFilter className="mr-1.5 h-3 w-3" />
                  Filter
                </button>
                <div className="text-xs sm:text-sm text-gray-500">
                  Showing <span className="font-medium">{products.length}</span> products
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-xs sm:text-sm text-gray-500 mr-2">Sort by:</span>
                <div className="relative">
                  <select className="appearance-none bg-transparent border border-gray-300 rounded-md py-1 pl-3 pr-8 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-gray-800">
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <FiChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-gray-500" />
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`text-xs sm:text-sm px-3 py-1 rounded-full ${
                    category.active
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {products.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    {product.isNew && (
                      <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-0.5 rounded">
                        New
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    <button className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Quick View
                    </button>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-xs sm:text-sm text-gray-700">₹{product.price}</p>
                      <span className="text-xs text-gray-500">{product.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-1">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-xs sm:text-sm hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-1 bg-black text-white rounded-md text-xs sm:text-sm">
                  1
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-xs sm:text-sm hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-xs sm:text-sm hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-xs sm:text-sm hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
} 