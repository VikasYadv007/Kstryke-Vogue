"use client";

import { motion } from "framer-motion";
import { FiTruck, FiRefreshCw, FiShield, FiHeadphones } from "react-icons/fi";
import Tabs from "../ui/Tabs";

const features = [
  {
    name: "Free Shipping",
    description: "Free shipping on all orders above ₹999",
    icon: FiTruck,
  },
  {
    name: "Easy Returns",
    description: "30-day easy return policy",
    icon: FiRefreshCw,
  },
  {
    name: "Secure Payments",
    description: "Multiple secure payment options",
    icon: FiShield,
  },
  {
    name: "24/7 Support",
    description: "Customer service available all day",
    icon: FiHeadphones,
  },
];

const tabContent = [
  {
    id: "sustainability",
    label: "Sustainability",
    content: (
      <div className="space-y-4 text-gray-800 bg-white p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900">Eco-Friendly Materials</h3>
        <p className="text-gray-600">
          We&apos;re committed to reducing our environmental footprint. Our products are made from
          sustainable materials including organic cotton, recycled polyester, and natural dyes.
          We work with suppliers who share our vision for a greener fashion industry.
        </p>
        <h3 className="text-lg font-medium text-gray-900">Ethical Production</h3>
        <p className="text-gray-600">
          All our garments are produced in factories that ensure fair wages and safe working
          conditions. We regularly audit our manufacturing partners to maintain these standards.
        </p>
      </div>
    ),
  },
  {
    id: "materials",
    label: "Materials",
    content: (
      <div className="space-y-4 text-gray-800 bg-white p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900">Premium Fabrics</h3>
        <p className="text-gray-600">
          We source the highest quality fabrics from around the world, focusing on durability,
          comfort, and sustainability. Our cotton is 100% organic, and our wool comes from
          ethically raised sheep.
        </p>
        <h3 className="text-lg font-medium text-gray-900">Innovative Textiles</h3>
        <p className="text-gray-600">
          We incorporate cutting-edge textile innovations like moisture-wicking technology,
          breathable membranes, and temperature-regulating fibers to enhance the performance
          of our clothing.
        </p>
      </div>
    ),
  },
  {
    id: "sizing",
    label: "Sizing",
    content: (
      <div className="space-y-4 text-gray-800 bg-white p-4 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900">Inclusive Range</h3>
        <p className="text-gray-600">
          We believe fashion should be for everyone. Our products come in an inclusive size range
          from XS to 3XL, with detailed size guides to help you find the perfect fit.
        </p>
        <h3 className="text-lg font-medium text-gray-900">Consistent Sizing</h3>
        <p className="text-gray-600">
          We maintain consistent sizing across all our products to make shopping easier.
          Our fit models represent diverse body types to ensure our clothes look great on everyone.
        </p>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-6 sm:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
        <div className="text-center mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl"
          >
            Why Shop With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 max-w-2xl mx-auto text-xs sm:text-sm text-gray-600"
          >
            We provide the best shopping experience with premium services.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-3 sm:p-4 rounded-lg shadow-sm text-center"
            >
              <div className="mx-auto flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-100 text-gray-600">
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-2 text-xs sm:text-sm font-medium text-gray-900">{feature.name}</h3>
              <p className="mt-1 text-xs text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tabbed Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-sm"
        >
          <Tabs tabs={tabContent} variant="pills" fullWidth />
        </motion.div>
      </div>
    </section>
  );
} 