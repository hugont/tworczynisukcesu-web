'use client';

import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  ClockIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ChartPieIcon,
  MegaphoneIcon,
  UserPlusIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const icons = [
  AcademicCapIcon,
  ClockIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ChartPieIcon,
  MegaphoneIcon,
  UserPlusIcon,
  LightBulbIcon
];

interface ServiceCardProps {
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ title, description, index }: ServiceCardProps) {
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="group relative bg-white rounded-xl p-8 border border-[#8b5a2b]/10 hover:border-[#8b5a2b]/30 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#8b5a2b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="absolute -top-2 -left-2 w-14 h-14 bg-[#8b5a2b]/10 rounded-full flex items-center justify-center group-hover:bg-[#8b5a2b]/20 transition-colors duration-300">
          <Icon className="w-7 h-7 text-[#8b5a2b]" />
        </div>
        
        <div className="pl-16">
          <h3 className="text-xl font-semibold text-[#000000] mb-4 group-hover:text-[#8b5a2b] transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-[#000000]/80 leading-relaxed group-hover:text-[#000000] transition-colors duration-300">
            {description}
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#8b5a2b]/0 group-hover:bg-[#8b5a2b] transition-colors duration-300" />
      </div>
    </motion.div>
  );
} 