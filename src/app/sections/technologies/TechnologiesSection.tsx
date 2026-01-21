"use client";

import Image from "next/image";
import { FocusCards } from "@/components/ui/focus-cards";
import { technologies } from "@/lib/content";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal";

export default function TechnologiesSection() {
    const cards = technologies.map((t) => ({
        title: t.title,
        src: t.image,
    }));

    return (
        <section id="technologie" className="py-24">
        <div className="mx-auto max-w-6xl px-6 mb-10 text-rig">
            <h2 className="text-3xl md:text-4xl font-semibold">Technologie</h2>
            <p className="mt-3 text-foreground/70 max-w-2xl">
            Používáme moderní postupy a technologie pro maximální přesnost a čistý detail. Klikněte na technologii pro více informací a video.
            </p>
        </div>

        {/* Jednotné modaly pod tím (čisté a srozumitelné) */}
        <div className="mx-auto max-w-6xl px-6 mt-8 grid md:grid-cols-3 gap-6">
            {technologies.map((t) => (
            <Modal key={t.title}>
                <ModalTrigger className="rounded-xl border border-white/10 bg-white/5 p-6 text-left hover:bg-white/10 transition w-full">
                <p className="text-xs uppercase tracking-widest text-foreground/60">Otevřít detail</p>
                <h3 className="mt-2 font-medium">{t.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 line-clamp-2">
                    {t.description}
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-foreground/60">
                    Zobrazit + video →
                </p>
                </ModalTrigger>

                <ModalBody className="max-w-2xl">
                <ModalContent>
                    <div className="space-y-5">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10">
                        <Image src={t.image} alt={t.title} fill className="object-cover" />
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">{t.title}</h3>
                        <p className="mt-2 text-sm text-foreground/70">{t.description}</p>
                        <p className="mt-3 text-xs text-foreground/50">
                        Video se otevře v nové záložce.
                        </p>
                    </div>

                    <a
                        href={t.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs uppercase tracking-widest hover:bg-white/15 transition"
                    >
                        Otevřít video →
                    </a>
                    </div>
                </ModalContent>
                </ModalBody>
            </Modal>
            ))}
        </div>
        </section>
    );
}
