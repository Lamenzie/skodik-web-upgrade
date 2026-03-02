"use client";

import Image from "next/image";
import { technologies } from "@/lib/content";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";

export default function TechnologiesSection() {
  return (
    <section id="technologie" className="pb-12 pt-24">
      <div className="mb-10 max-w-6xl px-6 text-center md:mx-auto md:text-left">
        <h2 className="text-3xl font-semibold md:text-4xl">Technologie</h2>
        <p className="mt-3 max-w-2xl text-foreground/70">
          Používáme moderní postupy a technologie pro maximální přesnost a čistý
          detail. Věříme totiž, že špičkové vybavení je klíčem k prémiovému
          vzhledu a dlouhé životnosti vašeho nábytku. Klikněte na technologii
          pro více informací a video z naší dílny.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-6 px-6 md:grid-cols-2">
        {technologies.map((t) => (
          <Modal key={t.title}>
            <ModalTrigger className="w-full rounded-xl border border-white/10 bg-white/5 p-6 text-left transition hover:bg-white/10">
              <p className="text-xs uppercase tracking-widest text-foreground/60">
                Otevřít detail
              </p>
              <h3 className="mt-2 font-medium">{t.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-foreground/70">
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
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{t.title}</h3>
                    <p className="mt-2 text-sm text-foreground/70">
                      {t.description}
                    </p>
                    <p className="mt-3 text-xs text-foreground/50">
                      Videa se otevřou v nové záložce na YouTube.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {t.videoUrl && (
                      <a
                        href={t.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs uppercase tracking-widest transition hover:bg-white/15"
                      >
                        Hlavní video →
                      </a>
                    )}

                    {t.extraVideos &&
                      t.extraVideos.map((video, idx) => (
                        <a
                          key={idx}
                          href={video.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-4 py-2 text-xs uppercase tracking-widest text-white/70 transition hover:bg-white/5 hover:text-white"
                        >
                          {video.title} ↗
                        </a>
                      ))}
                  </div>
                </div>
              </ModalContent>
            </ModalBody>
          </Modal>
        ))}
      </div>
    </section>
  );
}