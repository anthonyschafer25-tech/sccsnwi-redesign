"use client";

import { Phone } from "@/components/Icons";
import { motion, useReducedMotion } from "motion/react";

export function EmergencyCTA() {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href="tel:+12194642000"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-safety-500 text-white shadow-elevated hover:bg-safety-400 transition-colors duration-200 active:scale-[0.97]"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 1 }}
    >
      {!reduce && (
        <span className="absolute inset-0 rounded-full bg-safety-500 animate-pulse opacity-30" />
      )}
      <Phone className="w-4 h-4 relative z-10" />
      <span className="text-sm font-semibold relative z-10">
        24/7 Emergency
      </span>
    </motion.a>
  );
}
