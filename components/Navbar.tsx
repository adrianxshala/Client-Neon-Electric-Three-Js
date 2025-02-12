import React from "react";
import {  useState } from "react";
import {  CloudLightning as Lightning, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <nav className="navbar fixed w-full z-50 top-0">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            {/* Korrigjimi i src të logos */}
            <a href="/">
              <img src="/assets/logo.png" alt="ElectroTech"  className="w-12" />
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#products"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Products
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a
              href="#about"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#products"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Products
            </a>
            <a
              href="#features"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
