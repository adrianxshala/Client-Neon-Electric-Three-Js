import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  CloudLightning as Lightning,
  Lightbulb,
  Cable,
  Power,
  Plug,
} from "lucide-react";
const products = [
  {
    icon: <Cable className="w-12 h-12 text-blue-500" />,
    title: "Electrical Cables",
    description: "High-quality cables for residential and industrial use",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Lighting Solutions",
    description: "Energy-efficient lighting for all applications",
  },
  {
    icon: <Lightning className="w-8 h-8" />,
    title: "Fuses & Circuit Breakers",
    description: "Reliable protection for electrical systems",
  },
  {
    icon: <Plug className="w-8 h-8" />,
    title: "Plugs & Sockets",
    description: "Safe and durable connection solutions",
  },
  {
    icon: <Power className="w-8 h-8" />,
    title: "Power Distribution",
    description: "Complete power management solutions",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 relative hidden md:block">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center glow">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-black/40 card-glow border-white/10">
                <div className="text-white mb-4">{product.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-400">{product.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
