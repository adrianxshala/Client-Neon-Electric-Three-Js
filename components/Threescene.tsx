"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import * as THREE from "three";

// Single GlowingText component definition with the desired gradient style
const GlowingText = ({ children, delay = 0 }) => {
  return (
<motion.span
  style={{
    background: "linear-gradient(45deg, #ff007f, #00d2ff, #ff007f)", // Neon red to futuristic blue gradient
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "500% auto", // For animation effect
  }}
  initial={{ opacity: 0, textShadow: "0px 0px 0px rgba(255, 0, 127, 0)" }}
  animate={{ 
    opacity: 1, 
    textShadow: "0px 0px 20px rgba(0, 210, 255, 0.8)", // Glow effect matching the blue
    backgroundPosition: "250% 50%" // Gradient animation
  }}
  transition={{ 
    duration: 1.5, 
    delay,
    backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" } // Infinite gradient animation
  }}
  className="inline-block"
>
  {children}
</motion.span>
  );
};

const Model = () => {
  const modelRef = useRef(null);
  const { scene } = useGLTF("/models/disco_ball.glb");

  useEffect(() => {
    if (modelRef.current) {
      const textureLoader = new THREE.TextureLoader();
      const discoTexture = textureLoader.load("/textures/disco_texture.jpg");

      // Apply the new material to all meshes in the model
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            map: discoTexture,
            metalness: 1,
            roughness: 0,
            envMapIntensity: 1,
          });
        }
      });

      // Animate the model's position and scale using GSAP
      gsap.fromTo(
        modelRef.current.position,
        { y: 5, scale: 0 },
        { y: 0, scale: 1, duration: 2, ease: "bounce.out" }
      );

      // Continuously rotate the model around the Y axis
      gsap.to(modelRef.current.rotation, {
        y: Math.PI * 2,
        duration: 5,
        repeat: -1,
        ease: "linear",
      });
    }
  }, [scene]);

  return <primitive ref={modelRef} object={scene} position={[0, 0, 0]} />;
};

export default function HeroSection() {
  const [cameraPosition, setCameraPosition] = useState([0, 1, 3]);
  const [fov, setFov] = useState(50);

  useEffect(() => {
    const updateCamera = () => {
      if (window.innerWidth < 768) {
        setCameraPosition([0, 1, 5]);
        setFov(60);
      } else {
        setCameraPosition([0, 1, 3]);
        setFov(50);
      }
    };

    updateCamera();
    window.addEventListener("resize", updateCamera);
    return () => window.removeEventListener("resize", updateCamera);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Textual content */}
      <div className="text-center md:text-left max-w-2xl z-10 pt-20 md:pt-1">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-8 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <GlowingText>Neon Electric</GlowingText>{" "}
          
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-xl md:text-2xl mb-8 text-gray-300"
        >
          Powering the future with reliable electrical solutions
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="bg-white hover:bg-gray-200 text-black text-lg px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Explore Products
        </motion.button>
      </div>

      {/* Canvas for the 3D model */}
      <div className="absolute w-full h-full pb-20 md:pb-1">
        <Canvas camera={{ position: cameraPosition, fov }}>
          <ambientLight intensity={2} />
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <Suspense
            fallback={
              <Html center>
                <div style={{ color: "white" }}>Loading 3D Model...</div>
              </Html>
            }
          >
            <Model />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
          <Environment preset="studio" />
        </Canvas>
      </div>
    </section>
  );
}
// "use client";

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Environment, Html, Float, MeshDistortMaterial } from "@react-three/drei";
// import { Suspense, useRef, useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import * as THREE from "three";
// import { Zap, Battery, Cpu } from "lucide-react";

// const NeonSphere = () => {
//   const meshRef = useRef();
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     if (meshRef.current) {
//       gsap.to(meshRef.current.material, {
//         distort: hovered ? 0.6 : 0.4,
//         duration: 0.8,
//         ease: "power2.out"
//       });
//     }
//   }, [hovered]);

//   return (
//     <Float speed={2} rotationIntensity={2} floatIntensity={2}>
//       <mesh
//         ref={meshRef}
//         onPointerOver={() => setHovered(true)}
//         onPointerOut={() => setHovered(false)}
//       >
//         <sphereGeometry args={[1, 64, 64]} />
//         <MeshDistortMaterial
//           color="#00ff88"
//           envMapIntensity={1}
//           clearcoat={1}
//           clearcoatRoughness={0}
//           metalness={0.1}
//           distort={0.4}
//         />
//       </mesh>
//     </Float>
//   );
// };

// const GlowingText = ({ children, delay = 0 }) => (
//   <motion.span
//     initial={{ opacity: 0, filter: "blur(10px)" }}
//     animate={{ 
//       opacity: 1, 
//       filter: "blur(0px)",
//       textShadow: ["0 0 20px #0ff", "0 0 10px #0ff", "0 0 20px #0ff"]
//     }}
//     transition={{ 
//       duration: 1.5,
//       delay,
//       repeat: Infinity,
//       repeatType: "reverse"
//     }}
//     className="inline-block"
//   >
//     {children}
//   </motion.span>
// );

// const FeatureCard = ({ icon: Icon, title, description, delay }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8, delay }}
//     className="bg-black/30 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all"
//   >
//     <Icon className="w-8 h-8 mb-4 text-[#00ff88]" />
//     <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
//     <p className="text-gray-400">{description}</p>
//   </motion.div>
// );

// export default function HeroSection() {
//   const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);
//   const containerRef = useRef();

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       const { width, height } = containerRef.current.getBoundingClientRect();
//       const x = (clientX / width - 0.5) * 2;
//       const y = (clientY / height - 0.5) * 2;
      
//       gsap.to(cameraPosition, {
//         x: x * 2,
//         y: -y * 2,
//         duration: 1,
//         ease: "power2.out"
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div ref={containerRef} className="relative min-h-screen bg-black">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
      
//       {/* Grid Pattern */}
//       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634413150038-2b51c2cdb4e4')] opacity-10" />

//       <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24">
//         <div className="absolute w-full h-full top-0 left-0">
//           <Canvas camera={{ position: cameraPosition, fov: 50 }}>
//             <ambientLight intensity={0.5} />
//             <pointLight position={[10, 10, 10]} intensity={2} color="#0ff" />
//             <pointLight position={[-10, -10, -10]} intensity={2} color="#0f0" />
//             <Suspense fallback={null}>
//               <NeonSphere />
//             </Suspense>
//             <OrbitControls enableZoom={false} enablePan={false} />
//             <Environment preset="night" />
//           </Canvas>
//         </div>

//         <div className="container mx-auto z-10 text-center">
//           <motion.h1 
//             className="text-6xl md:text-8xl font-bold mb-8 tracking-tight"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <GlowingText>Neon</GlowingText>{" "}
//             <GlowingText delay={0.2}>Electric</GlowingText>
//           </motion.h1>

//           <motion.p
//             className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             Powering tomorrow's innovations with cutting-edge electrical solutions
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.7 }}
//             className="flex flex-wrap justify-center gap-8 mt-16"
//           >
//             <FeatureCard
//               icon={Zap}
//               title="High Voltage Solutions"
//               description="Advanced power distribution systems for modern infrastructure"
//               delay={0.8}
//             />
//             <FeatureCard
//               icon={Battery}
//               title="Energy Storage"
//               description="Next-generation battery technology for sustainable power"
//               delay={1}
//             />
//             <FeatureCard
//               icon={Cpu}
//               title="Smart Grid"
//               description="Intelligent power management systems for optimal efficiency"
//               delay={1.2}
//             />
//           </motion.div>

//           <motion.button
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 1.4 }}
//             className="mt-12 px-8 py-4 bg-transparent border-2 border-[#00ff88] text-[#00ff88] rounded-full 
//                      hover:bg-[#00ff88] hover:text-black transition-all duration-300
//                      shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]"
//           >
//             Explore Our Technology
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// }
     {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
        >
          {Array.from("Neon").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1.5,
                delay: index * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1> */}