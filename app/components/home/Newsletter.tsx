"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setEmail("");
    }, 500);
  };

  return (
    <section className="py-6 sm:py-10 bg-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
          >
            Join Our Newsletter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-xs sm:text-sm text-gray-300"
          >
            Subscribe to get special offers, free giveaways, and new arrivals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 sm:mt-6"
          >
            {submitted ? (
              <div className="bg-green-100 text-green-800 px-3 py-2 rounded-md text-xs sm:text-sm">
                Thank you for subscribing! We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="sm:flex sm:max-w-md mx-auto">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-w-0 px-3 py-2 text-xs sm:text-sm text-gray-900 placeholder-gray-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  placeholder="Enter your email"
                />
                <div className="mt-2 sm:mt-0 sm:ml-2 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full bg-white border border-transparent rounded-md py-2 px-3 flex items-center justify-center text-xs sm:text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 