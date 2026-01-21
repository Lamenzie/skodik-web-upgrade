"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
        <AuroraBackground className="h-screen">
            <div className="flex h-screen flex-col items-center justify-center text-center px-6 pt-24">
            <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-semibold tracking-tight mb-6"
            >
                Škodík Nábytek
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="max-w-xl text-lg md:text-xl text-foreground/70 mb-10"
            >
                Moderní nábytek na míru s důrazem na detail.
            </motion.p>

            <motion.a
                href="#co-delame"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/70 hover:text-foreground transition"
            >
                Zajímá tě toho víc
                <span className="transform transition group-hover:translate-x-1">
                →
                </span>
            </motion.a>
            </div>
        </AuroraBackground>
        </section>
    );
}
