"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { reviews } from "@/lib/content";

export default function ReviewsSection() {
  const items = reviews.map((r) => ({
    quote: r.quote,
    name: r.name,
    title: r.location,
  }));

  return (
    <section id="recenze" className="py-24">
      <div className="mx-auto max-w-6xl px-6 mb-10 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold">Recenze</h2>
        <p className="mt-3 text-foreground/70 max-w-2xl">
          Zkušenosti těch, kterým už náš nábytek dělá radost každý den.
        </p>
        <p className="mt-3 text-foreground/70 max-w-2xl">
          Nejlepší odměnou za naši práci je vaše spokojenost, proto si zakládáme
          na poctivém přístupu a férové domluvě. Přečtěte si, jak naši práci a
          spolehlivost hodnotí lidé z okolí.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <InfiniteMovingCards items={items} direction="right" speed="slow" />
      </div>
    </section>
  );
}
