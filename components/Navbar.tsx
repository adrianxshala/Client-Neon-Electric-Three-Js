import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-0 backdrop-blur-lg shadow-md bg-black/80">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/">
            <img src="/assets/logo.png" alt="ElectroTech" className="w-12" />
          </a>

          {/* Hamburger Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition"
            >
              About
            </a>
            <a
              href="#products"
              className="text-gray-300 hover:text-white transition"
            >
              Products
            </a>
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Sidebar Navigation */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-16 w-64 z-50 h-screen bg-black bg-opacity-30 backdrop-blur-md shadow-lg p-6 md:hidden"
      >
        <nav className="flex flex-col space-y-6 mt-10">
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition"
            onClick={closeSidebar} // Close sidebar on click
          >
            About
          </a>

          <a
            href="#features"
            className="text-gray-300 hover:text-white transition"
            onClick={closeSidebar} // Close sidebar on click
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition"
            onClick={closeSidebar} // Close sidebar on click
          >
            Contact
          </a>
          <a href="tel:+38349153002">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium rounded-xl shadow-lg moving-border"
            >
              Call us
            </Button>
          </a>
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;