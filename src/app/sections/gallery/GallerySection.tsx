"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { gallery } from "@/lib/content";
import { Compare } from "@/components/ui/compare";

type Tab = "kuchyne" | "skrine" | "jine";

const tabs: { key: Tab; label: string }[] = [
    { key: "kuchyne", label: "Kuchyně" },
    { key: "skrine", label: "Skříně" },
    { key: "jine", label: "Jiné" },
];

export default function GallerySection() {
    const [active, setActive] = useState<Tab>("kuchyne");
    const items = useMemo(() => gallery[active], [active]);

    return (
        <section id="realizace" className="py-24">
        <div className="mx-auto max-w-6xl px-6">

            {/* HEADER – vpravo */}
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div /> 

            <div className="text-right">
                <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Realizace
                </h2>
                <p className="mt-3 text-foreground/70 max-w-2xl ml-auto">
                Ukázky vybraných realizací. Každý detail je navržený na míru prostoru.
                </p>

                {/* Tabs – vpravo */}
                <div className="mt-6 flex flex-wrap gap-2 justify-end">
                {tabs.map((t) => {
                    const isActive = active === t.key;
                    return (
                    <button
                        key={t.key}
                        onClick={() => setActive(t.key)}
                        className={[
                        "rounded-full px-4 py-2 text-sm transition border",
                        isActive
                            ? "border-white/30 bg-white/10"
                            : "border-white/10 hover:bg-white/5",
                        ].join(" ")}
                    >
                        {t.label}
                    </button>
                    );
                })}
                </div>
            </div>
            </div>

            {/* GRID – zůstává normálně */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((img) => (
                <div
                key={img.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"
                >
                <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition" />
                </div>
            ))}
            </div>
{/* 
        <div className="mt-16">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                <div />

                <div className="text-right">
                <h3 className="text-xl font-medium mb-2">Před / Po</h3>
                <p className="text-sm md:text-base text-foreground/70 max-w-2xl ml-auto mb-6">
                    Posuňte kurzor a porovnejte prostor před realizací a finální podobu
                    nábytku na míru. Rozdíl je často větší, než se na první pohled zdá.
                </p>
                </div>
            </div>

            <div className="mt-6">
                <div className="mx-auto max-w-6xl">
                    <div className="rounded-2xl overflow-hidden border border-white/10">
                        <Compare
                        firstImage="/compare/kuchyne2.4-compare.jpg"
                        secondImage="/compare/kuchyne2.4.jpg"
                        firstImageClassName="object-cover"
                        secondImageClassName="object-cover"
                        className="h-[520px] md:h-[620px] w-full"
                        slideMode="hover"
                        />
                    </div>

                    <div className="mt-3 flex justify-between px-1 text-xs text-foreground/60">
                        <span>Před</span>
                        <span>Po</span>
                    </div>
                </div>
            </div>
        </div>
*/}

        </div>
        </section>
    );
}
