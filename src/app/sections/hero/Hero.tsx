"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AuroraBackground className="h-screen">
        <div className="pointer-events-auto relative z-20 flex h-screen flex-col items-center justify-center px-6 pt-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-merriweather mb-6 text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-tight text-white drop-shadow-md dark:text-white"
          >
            Škodík Nábytek
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mb-10 max-w-xl text-[clamp(1rem,1.5vw,1.125rem)] text-white/80 dark:text-white/80"
          >
            Váš prostor, naše řemeslo. Dáváme vašim představám přesný tvar i
            rozměr.
          </motion.p>

          <motion.a
            href="#co-delame"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 transition hover:text-white dark:text-white/70 dark:hover:text-white"
          >
            Zjistit více
            <span className="transform transition group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        </div>
      </AuroraBackground>
    </section>
  );
}
