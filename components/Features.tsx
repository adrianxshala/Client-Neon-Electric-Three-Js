import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, Clock, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-12 h-12 text-blue-500" />,
    title: "Certified Products",
    description: "All our products meet international safety standards",
  },
  {
    icon: <Clock className="w-12 h-12 text-green-500" />,
    title: "Fast Delivery",
    description: "Quick and reliable shipping to your location",
  },
  {
    icon: <ThumbsUp className="w-12 h-12 text-orange-500" />,
    title: "Expert Support",
    description: "Technical assistance from qualified professionals",
  },
];

const Features = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });

  return (
    <section id="features" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-4xl font-bold mb-16 text-center glow"
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
            >
              <Card className="p-8 bg-black/40 card-glow border-white/10 text-center">
                <div className="mb-6 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
