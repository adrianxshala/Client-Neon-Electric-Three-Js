import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import CountUp from "react-countup";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="about" className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold mb-6 glow"
          >
            About Us
          </motion.h2>
          <Card className="p-6 sm:p-8 bg-black/40 card-glow border-white/10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-300 leading-relaxed"
            >
              Since our establishment in 2000, we've been at the forefront of
              electrical supply innovation. Our commitment to quality and
              reliability has made us a trusted partner for contractors,
              industries, and homeowners across the nation.
            </motion.p>
            <div
              ref={ref}
              className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1, delay: 0.5 }}
                className="text-center"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                  {isInView && <CountUp start={0} end={20} duration={4} />}k+
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Years Experience
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.5 }}
                className="text-center"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                  {isInView && <CountUp start={0} end={5} duration={4} />}k+
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">Products</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1, delay: 0.5 }}
                className="text-center col-span-2 sm:col-span-1"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                  {isInView && <CountUp start={0} end={10} duration={4} />}k+
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Happy Clients
                </p>
              </motion.div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
