import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const images = [
  { src: "/assets/130.jpg", alt: "Electric Material 1" },
  { src: "/assets/Xamax-Home-Electrical_276422742_72-1.jpg", alt: "Electric Material 2" },
  { src: "/assets/ai1.webp", alt: "Electric Material 3" },
  { src: "/assets/istockphoto-612248188-612x612.jpg", alt: "Electric Material 4" },
  { src: "/assets/depositphotos_376526554-stock-photo-electrical-tools-big-set-white.jpg", alt: "Electric Material 5" },
];

export default function ElectricMaterialSlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-transparent"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut",delay: 1 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-white glow">
          Explore Electric Materials
        </h2>
        <Swiper
          spaceBetween={90}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-xl"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill // Use fill to cover the parent element
                  style={{ objectFit: "cover" }} // Ensure proper image scaling
                  priority={index === 0} // Prioritize loading for the first image
                />
                {/* Additional overlay or elements can be added here if needed */}
                <div className="absolute inset-0 from-black/100 to-transparent flex items-center justify-center"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
