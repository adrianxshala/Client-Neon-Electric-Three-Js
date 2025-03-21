"use client";

import Features from "@/components/Features";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollVelocity from "@/components/ScrollV";
import RollingGallery from "@/components/Img";
import Hero from "@/components/Hero";
import { AppleCardsCarouselDemo } from "@/components/Apple";

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
      <Hero />
      <RollingGallery autoplay={true} pauseOnHover={true} />

      <AppleCardsCarouselDemo />
     
      {/* Features Section */}
      <Features />

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
