import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Features from "./components/home/Features";
import Newsletter from "./components/home/Newsletter";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="pt-16 md:pt-20">
        <Hero />
        <FeaturedProducts />
        <Features />
        <Newsletter />
      </div>
      <Footer />
    </main>
  );
}
