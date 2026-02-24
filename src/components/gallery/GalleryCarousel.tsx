"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";

type GalleryItem = { src: string; alt: string };

export function GalleryCarousel({ items }: { items: GalleryItem[] }) {
  const hasItems = items?.length > 0;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [items]);

  const total = items.length;

  const current = useMemo(() => {
    if (!hasItems) return null;
    return items[Math.max(0, Math.min(index, total - 1))];
  }, [hasItems, items, index, total]);

  const prev = useCallback(() => {
    if (!hasItems) return;
    setIndex((i) => (i - 1 + total) % total);
  }, [hasItems, total]);

  const next = useCallback(() => {
    if (!hasItems) return;
    setIndex((i) => (i + 1) % total);
  }, [hasItems, total]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [prev, next]);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.touches[0]?.clientX ?? null);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX == null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX;
    const diff = endX - touchStartX;

    if (Math.abs(diff) > 40) {
      diff > 0 ? prev() : next();
    }
    setTouchStartX(null);
  };

  if (!hasItems || !current) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-foreground/70">
        Zatím tu nejsou žádné fotky.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Modal>
          <ModalTrigger className="w-full p-0">
            <div className="relative aspect-video w-full">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority={false}
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/15 transition" />
              <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-widest text-white/80">
                Klikni pro zobrazení v původní velikosti
              </div>
            </div>
          </ModalTrigger>

          <ModalBody className="p-0">
            <ModalContent className="p-0">
              <div className="relative w-full bg-black">
                <div className="relative aspect-video w-full">
                  <Image
                    src={current.src}
                    alt={current.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority={false}
                  />
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-white/90 hover:bg-black/60 transition"
                  aria-label="Předchozí"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-white/90 hover:bg-black/60 transition"
                  aria-label="Další"
                >
                  →
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs text-white/80">
                  {index + 1} / {total}
                </div>
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>

        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/20 px-3 py-2 text-white/80 hover:bg-black/35 transition"
          aria-label="Předchozí"
        >
          ←
        </button>

        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/20 px-3 py-2 text-white/80 hover:bg-black/35 transition"
          aria-label="Další"
        >
          →
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 px-1">
        <p className="text-xs text-foreground/60">
          {index + 1} / {total}
        </p>

        <div className="flex items-center gap-1">
          {items.slice(0, 10).map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 w-2 rounded-full transition",
                  active ? "bg-white/70" : "bg-white/20 hover:bg-white/35",
                )}
                aria-label={`Přejít na fotku ${i + 1}`}
              />
            );
          })}
          {items.length > 10 && (
            <span className="ml-1 text-xs text-foreground/50">…</span>
          )}
        </div>
      </div>
    </div>
  );
}
