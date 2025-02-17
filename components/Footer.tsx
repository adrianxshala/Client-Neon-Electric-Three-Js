"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import logo from "../public/assets/logo.png"
import {
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Footer = () => {
  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
            <Image src={logo} alt="ElectroTech Logo" width={100} height={50} />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="hidden lg:block"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Products", "Features", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" className="ml-20">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Suharekë, Kosovo</li>
              <li>Xhavit Bajraktari, 23000</li>
              <li>+383 (44) 184-178</li>
              <li>neon.sb@hotmail.com</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="mt-12 pt-2 border-t border-white/10 text-center text-gray-400"
        >
          <p>
            &copy; 2024 Developed by <span className="font-bold">Adrian</span>.
            All rights reserved.
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center items-center space-x-4 mt-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          <motion.a
            href="https://wa.me/38349153002"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaWhatsapp className="h-6 w-6" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/adrian-shala-a80ba5198/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
