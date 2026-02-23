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
                Zkušenosti zákazníků, kteří už mají nábytek na míru.
            </p>
            <p className="mt-3 text-foreground/70 max-w-2xl">
                Na Vašich názorech nám záleží a dále na nich stavíme do budoucna.
            </p>
        </div>

        <div className="mx-auto max-w-6xl px-6">
            <InfiniteMovingCards items={items} direction="right" speed="slow" />
        </div>
        </section>
    );
}
