// src/app/sections/about/AboutSection.tsx
"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function AboutSection() {
  const refTop = useRef<HTMLDivElement | null>(null);
  const inViewTop = useInView(refTop, {
    margin: "-20% 0px -20% 0px",
    once: true,
  });

  const refBottom = useRef<HTMLDivElement | null>(null);
  const inViewBottom = useInView(refBottom, {
    margin: "-20% 0px -20% 0px",
    once: true,
  });

  return (
    <section id="co-delame" className="pt-24 pb-12">
      <div className="mx-auto max-w-6xl px-6 space-y-16">
        {/* BLOK 1: text vlevo, fotky vpravo */}
        <motion.div
          ref={refTop}
          initial={{ opacity: 0, y: 24 }}
          animate={inViewTop ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-2 lg:items-center"
        >
          {/* Text */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Nábytek na míru. Precizně. Čistě. Moderně.
            </h2>

            <p className="mt-4 text-foreground/70">
              Navrhujeme a vyrábíme kuchyně, vestavné skříně i solitérní kusy
              nábytku. Důraz klademe na detail, přesnost a nadčasový vzhled –
              tak, aby vše fungovalo v prostoru i po letech.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-widest text-foreground/60">
                  Detail
                </p>
                <p className="mt-2 text-sm text-foreground/80">
                  Čisté hrany, přesné spáry, kvalitní kování.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-widest text-foreground/60">
                  Proces
                </p>
                <p className="mt-2 text-sm text-foreground/80">
                  Návrh → výroba → montáž. Vše pod jednou střechou.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-widest text-foreground/60">
                  Přístup
                </p>
                <p className="mt-2 text-sm text-foreground/80">
                  Osobní domluva, férové termíny, čisté provedení.
                </p>
              </div>
            </div>
          </div>

          {/* Fotky */}
          <div className="grid gap-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/gallery/kuchyne5.2.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/gallery/skrine1.jpg"
                  alt="Detail práce"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/gallery/vestavena-skrin5.jpg"
                  alt="Materiály / povrchy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* BLOK 2 */}
        <motion.div
          ref={refBottom}
          initial={{ opacity: 0, y: 24 }}
          animate={inViewBottom ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-2 lg:items-center"
        >
          {/* Foto firmy zvenku */}
          <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/gallery/dilna1.jpg"
              alt="Škodík Nábytek – exteriér dílny"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text kde nás najdete */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Kde nás najdete
            </h3>

            <p className="mt-4 text-foreground/70 max-w-2xl lg:max-w-none">
              Naše dílna se nachází v{" "}
              <span className="text-foreground">Dubňanech</span>, kde vzniká
              veškerý nábytek – od prvního návrhu až po finální montáž.
            </p>

            <p className="mt-4 text-foreground/70 max-w-2xl lg:max-w-none">
              Zakládáme si na osobním přístupu, proto je pro nás přirozené se se
              zákazníky potkat osobně, vše projít a navrhnout řešení přesně na
              míru danému prostoru.
            </p>

            <p className="mt-4 text-foreground/70 max-w-2xl lg:max-w-none">
              Realizace provádíme nejen po celé{" "}
              <span className="text-foreground">Jižní Moravě</span>, ale zakázky
              nám také sahají do vzdálenějších koutů republiky. Jedná se o naše
              hlavní město <span className="text-foreground">Praha</span>, nebo
              i zahraniční výjezdy na montáže do{" "}
              <span className="text-foreground">Vídně</span>
            </p>

            <div className="mt-6">
              <a
                href="#kde-nas-najdete"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-foreground/70 hover:text-foreground transition"
              >
                Zobrazit na mapě
                <span className="transform transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
