'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ScrollVelocity from './ScrollV';
const velocity = 25;
const letterVariants = {
  hidden: { opacity: 0, filter: 'blur(5px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06, // Slightly increased stagger duration for a smoother effect
    },
  },
};

const neonTextVariants = {
  hidden: { opacity: 0, textShadow: '0 0 0px rgba(0, 0, 255, 0.8)' },
  visible: {
    opacity: 1,
    textShadow: '0 0 10px rgba(0, 0, 255, 1), 0 0 20px rgba(0, 0, 255, 0.9), 0 0 30px rgba(0, 0, 255, 0.7)',
    transition: { duration: 1, ease: 'easeOut', delay: 1.2 }, // Added delay for a smoother reveal of neon effect
  },
};

export default function HeroSection() {
  const text = 'Powering the Future  '; // Text before Neon Electric
  const neonText = 'Neon Electric'; // Neon Electric part

  return (
    <section className="w-full h-screen flex flex-col items-center justify-around text-center px-6">
      {/* Main Text Animation */}
     <div className='pb-28 pt-40'>
     <motion.h1
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg" // Adjusted font sizes for mobile
      >
        {text.split('').map((char, index) => (
          <motion.span key={index} variants={letterVariants} className="inline-block">
            {char === ' ' ? '\u00A0' : char} {/* Handle spaces */}
          </motion.span>
        ))}
      </motion.h1>

      {/* Neon Electric part with neon glow effect */}
      <motion.span
        initial="hidden"
        animate="visible"
        variants={neonTextVariants}
        className="text-blue-400 text-5xl md:text-6xl lg:text-7xl font-bold pt-4" // Made neonText larger
      >
        {neonText}
      </motion.span>

      {/* Paragraph Animation */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1.5, duration: 0.6 }} // Adjusted timing for smoother sequencing
        className="mt-4  md:text-lg text-gray-300 max-w-2xl" // Adjusted font size for mobile
      >
       Zgjidhje inovative elektrike të dizajnuara për efikasitet, qëndrueshmëri dhe performancë.
      </motion.p>

      {/* Button Animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 1.8, duration: 0.5 }} // Adjusted timing for better flow
        className="mt-6"
      >
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg font-medium rounded-xl shadow-lg moving-border">
          Get Started
        </Button>
      </motion.div>
     </div>
    <div className='w-full'>
    <ScrollVelocity
        texts={["Neon Electric", "Electric Neon"]}
        velocity={velocity} // ✅ Tani është e definuar
        className="custom-scroll-text text-gray-300 "
      />
    </div>
    </section>
  );
}