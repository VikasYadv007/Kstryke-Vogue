import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";

export default function Contact() {
  return (
    <main>
      <Header />
      <div className="pt-16 md:pt-20">
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="text-center mb-8 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Contact Us
              </h1>
              <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-gray-600">
                We'd love to hear from you. Get in touch with our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Contact Form */}
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Send Us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors text-xs sm:text-sm flex items-center justify-center"
                  >
                    <FiSend className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <div className="bg-gray-900 text-white rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl font-semibold mb-4">Contact Information</h2>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                        <FiMail className="h-4 w-4 text-gray-200" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-300">Email</p>
                        <a href="mailto:kstrykevogue@gmail.com" className="text-sm sm:text-base hover:underline">
                          kstrykevogue@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                        <FiPhone className="h-4 w-4 text-gray-200" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-300">Phone</p>
                        <div className="space-y-1">
                          <a href="tel:+919653215873" className="block text-sm hover:underline">
                            +91 9653215873
                          </a>
                          <a href="tel:+918268537440" className="block text-sm hover:underline">
                            +91 8268537440
                          </a>
                          <a href="tel:+919889270427" className="block text-sm hover:underline">
                            +91 9889270427
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                        <FiMapPin className="h-4 w-4 text-gray-200" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-300">Location</p>
                        <p className="text-sm">
                          Fashion Street, Mumbai<br />
                          Maharashtra, India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                        <FiClock className="h-4 w-4 text-gray-200" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-300">Business Hours</p>
                        <p className="text-sm">
                          Mon - Fri: 10:00 AM - 7:00 PM<br />
                          Sat - Sun: 11:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="rounded-lg overflow-hidden h-48 sm:h-56 bg-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.7324022536354!2d72.82714931490055!3d18.94295978716188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1a7b9a2c1d%3A0x4b2e47bf7c5fae0!2sFashion%20Street%2C%20Chhatrapati%20Shivaji%20Terminus%20Area%2C%20Fort%2C%20Mumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1653815476547!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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