"use client";
import ElectricMaterialSlider from "@/components/Slider";
import HeroSection from "@/components/Threescene";
import Features from "@/components/Features";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollVelocity from "@/components/ScrollV";
import RollingGallery from "@/components/Img";

export default function Home() {
  const velocity = 25;
  return (
    <div className="min-h-screen">
      {/* Space Background */}
      <div className="space-background">
        <div className="stars"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      <ScrollVelocity
        texts={["Neon Electric", "Electric Neon"]}
        velocity={velocity} // ✅ Tani është e definuar
        className="custom-scroll-text text-gray-300"
      />

      <RollingGallery autoplay={true} pauseOnHover={true} />
      {/* BlurText Animation */}

      {/* Features Section */}
      <Features />

      {/* Electric Material Slider */}
      <ElectricMaterialSlider />

      {/* About Section */}
      <About />

      {/* Products Section (Desktop Only) */}
      <Products />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
