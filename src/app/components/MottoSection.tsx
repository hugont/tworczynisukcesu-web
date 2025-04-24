'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MottoSection() {
  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden bg-[#8b5a2b]">
      {/* Można dodać obraz tła z efektem paralaksy, jeśli chcesz */}
       <div className="absolute inset-0 z-0 opacity-40">
         <Image
           src="/foto3.png" // Używamy foto3 jako tła
           alt="Motto background"
           fill
           className="object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-[#8b5a2b] via-[#8b5a2b]/70 to-transparent" /> 
       </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hero-title text-4xl md:text-6xl lg:text-7xl text-white leading-tight"
        >
          Stwórzmy razem Twój sukces!
        </motion.h2>
      </div>
    </section>
  );
} 