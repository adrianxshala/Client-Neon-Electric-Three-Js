import React from "react";

import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import {
  Zap,
  CloudLightning as Lightning,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="w-8 h-8 text-white" />
              <span className="text-xl font-bold text-white">ElectroTech</span>
            </div>
            <p className="text-gray-400">
              Powering the future with reliable electrical solutions.
            </p>
          </div>

          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Suharekë, Kosovo</li>
              <li>Xhavit Bajraktari, 23000</li>
              <li>+383 (44) 184-178</li>
              <li>neon.sb@hotmail.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-2 border-t border-white/10 text-center text-gray-400">
          <p>
            &copy; 2024 Developed by <span className="font-bold">Adrian</span>.
            All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-4 mt-2">
          {/* WhatsApp */}
          <a
            href="https://wa.me/38349153002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="h-6 w-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/adrian-shala-a80ba5198/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
