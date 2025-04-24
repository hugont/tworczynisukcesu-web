'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const menuItems = [
  { label: 'O mnie', targetId: 'o-mnie' },
  { label: 'Oferta', targetId: 'oferta' },
  { label: 'Kontakt', targetId: 'kontakt' },
];

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pokaż menu dopiero po przewinięciu trochę w dół (np. 100px)
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Sprawdź pozycję na początku

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Zamknij menu po kliknięciu
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 20 } },
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 0.5 } },
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50 flex items-center space-x-3"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={buttonVariants}
        >
          {/* Przycisk otwierania/zamykania */}
          <button
            onClick={toggleMenu}
            className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-[#8b5a2b] hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#8b5a2b] focus:ring-offset-2"
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <XMarkIcon className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Bars3Icon className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Panel Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-white/90 backdrop-blur-md rounded-lg shadow-xl overflow-hidden py-3 px-4 border border-[#8b5a2b]/10"
              >
                <ul className="space-y-1">
                  {menuItems.map((item) => (
                    <li key={item.targetId}>
                      <button
                        onClick={() => scrollToSection(item.targetId)}
                        className="block w-full text-left px-3 py-2 rounded text-[#000000]/80 hover:bg-[#8b5a2b]/10 hover:text-[#8b5a2b] transition-colors text-sm font-medium"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 