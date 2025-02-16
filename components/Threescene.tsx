"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import * as THREE from "three";

// GlowingText Component
const GlowingText = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.span
      style={{
        background: "linear-gradient(45deg, #ff007f, #00d2ff, #ff007f)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundSize: "500% auto",
      }}
      initial={{ opacity: 0, textShadow: "0px 0px 0px rgba(255, 0, 127, 0)" }}
      animate={{
        opacity: 1,
        textShadow: "0px 0px 20px rgba(0, 210, 255, 0.8)",
        backgroundPosition: "250% 50%",
      }}
      transition={{
        duration: 1.5,
        delay,
        backgroundPosition: { duration: 5, repeat: Infinity, ease: "linear" },
      }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
};

// Model Component
const Model = () => {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/models/disco_ball.glb");

  useEffect(() => {
    if (modelRef.current) {
      const textureLoader = new THREE.TextureLoader();
      const discoTexture = textureLoader.load("/textures/disco_texture.jpg");

      // Apply the new material to all meshes in the model
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            map: discoTexture,
            metalness: 1,
            roughness: 0,
            envMapIntensity: 1,
          });
        }
      });

      // GSAP animations
      const ctx = gsap.context(() => {
        gsap.fromTo(
          modelRef.current!.position,
          { y: 5 },
          { y: 0, duration: 2, ease: "bounce.out" }
        );

        gsap.to(modelRef.current!.rotation, {
          y: Math.PI * 2,
          duration: 5,
          repeat: -1,
          ease: "linear",
        });
      }, modelRef);

      return () => ctx.revert(); // Cleanup GSAP context
    }
  }, [scene]);

  return <primitive ref={modelRef} object={scene} position={[0, 0, 0]} />;
};

// HeroSection Component
export default function HeroSection() {
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 1, 5]);
  const [fov, setFov] = useState(60);

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
          <GlowingText>Neon Electric</GlowingText>
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