import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Image from "next/image";
import { FiUsers, FiTrendingUp, FiGlobe, FiThumbsUp } from "react-icons/fi";

// Team members
const teamMembers = [
  {
    name: "Rajiv Sharma",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    bio: "With over 15 years of experience in fashion retail, Rajiv founded Kstryke Vogue with a vision to blend traditional Indian craftsmanship with modern designs.",
  },
  {
    name: "Priya Patel",
    role: "Creative Director",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    bio: "Priya leads our design team with her innovative approach and keen eye for emerging fashion trends, ensuring each collection tells a unique story.",
  },
  {
    name: "Arjun Mehta",
    role: "Head of Operations",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    bio: "Arjun ensures seamless operations from production to delivery, maintaining our commitment to quality and sustainability at every step.",
  },
  {
    name: "Neha Kapoor",
    role: "Marketing Director",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    bio: "Neha crafts our brand story and connects with our community, bringing our vision and values to customers across India and beyond.",
  },
];

// Company values
const values = [
  {
    icon: FiUsers,
    title: "Customer First",
    description: "We prioritize our customers' needs and feedback in everything we do, from design to delivery.",
  },
  {
    icon: FiTrendingUp,
    title: "Quality & Innovation",
    description: "We combine premium materials with innovative designs to create clothing that stands the test of time.",
  },
  {
    icon: FiGlobe,
    title: "Sustainability",
    description: "We're committed to ethical production practices and reducing our environmental footprint.",
  },
  {
    icon: FiThumbsUp,
    title: "Inclusivity",
    description: "We design for diverse body types, celebrating the unique beauty of every individual.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
          <Image
            src="/men-women-1.webp"
            alt="About Kstryke Vogue"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                About Kstryke Vogue
              </h1>
              <p className="text-gray-200 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
                Our journey, mission, and the people behind the brand
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Story</h2>
                <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                  <p>
                    Founded in 2018, Kstryke Vogue began as a small boutique in Mumbai with a simple mission: to create contemporary clothing that celebrates both modern aesthetics and traditional craftsmanship.
                  </p>
                  <p>
                    Our founder, Rajiv Sharma, having worked with international fashion houses, returned to India with a vision to build a brand that would showcase Indian talent and textiles on a global stage while maintaining ethical production standards.
                  </p>
                  <p>
                    What started as a small team of five passionate individuals has now grown into a nationwide brand with over 200 employees, multiple retail locations across India, and a thriving online presence serving customers worldwide.
                  </p>
                  <p>
                    Today, Kstryke Vogue stands for quality, innovation, and conscious fashion. We continue to evolve while staying true to our roots and commitment to sustainable practices.
                  </p>
                </div>
              </div>
              <div className="relative h-60 sm:h-72 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/men-women-2.webp"
                  alt="Our fashion journey"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Values</h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
                These core principles guide everything we do, from design to customer service
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <value.icon className="h-5 w-5 text-gray-700" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Meet the Team</h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
                The passionate individuals behind Kstryke Vogue who bring our vision to life
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {teamMembers.map((member) => (
                <div key={member.name} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48 sm:h-56">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm sm:text-base font-medium text-gray-900">{member.name}</h3>
                    <p className="text-xs text-gray-500 mb-2">{member.role}</p>
                    <p className="text-xs text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-8 sm:py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="relative h-60 sm:h-72 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/men-women-4.webp"
                  alt="Our commitment to sustainable fashion"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">Our Commitment</h2>
                <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                  <p>
                    At Kstryke Vogue, sustainability isn't just a buzzword—it's integrated into our business model. We carefully select our materials, prioritizing organic and recycled fabrics whenever possible.
                  </p>
                  <p>
                    We work closely with local artisans and manufacturers, ensuring fair wages and safe working conditions. Our production processes are designed to minimize waste and reduce our environmental footprint.
                  </p>
                  <p>
                    We're proud to be transparent about our journey toward more sustainable practices. While we're not perfect, we're committed to continuous improvement and innovation in this space.
                  </p>
                  <p>
                    By choosing Kstryke Vogue, you're supporting a brand that values people and planet alongside profit—a philosophy we believe is essential for the future of fashion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Journey */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">Join Our Journey</h2>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto mb-6">
              We're always looking for talented individuals who share our passion for fashion and our values. Check out our current openings or follow us on social media to stay updated.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-black text-white text-xs sm:text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                View Career Opportunities
              </button>
              <button className="border border-gray-300 text-gray-700 text-xs sm:text-sm px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                Follow Us on Social Media
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
} 