"use client";

import React from "react";
import {
    Modal,
    ModalTrigger,
    ModalBody,
    ModalContent,
} from "@/components/ui/animated-modal";

export default function QuickContactModal() {
    return (
        <Modal>
        <ModalTrigger className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-widest text-foreground/70 hover:text-foreground hover:bg-white/5 transition">
            Rychlý kontakt
        </ModalTrigger>

        <ModalBody className="max-w-lg">
            <ModalContent>
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Kontakt</h3>

                <p className="text-sm text-foreground/70">
                Ozvěte se nám – rádi domluvíme konzultaci a navrhneme řešení na míru.
                </p>

                <div className="space-y-2 text-sm">
                <p>
                    ☎{" "}
                    <a className="hover:text-foreground transition" href="tel:+420000000000">
                    +420 000 000 000
                    </a>
                </p>
                <p>
                    ✉{" "}
                    <a
                    className="hover:text-foreground transition"
                    href="mailto:info@skodik-nabytek.cz"
                    >
                    info@skodik-nabytek.cz
                    </a>
                </p>
                </div>

                <p className="text-xs text-foreground/50">
                (Později sem můžeme přidat mini formulář “zavoláme zpět”.)
                </p>
            </div>
            </ModalContent>
        </ModalBody>
        </Modal>
    );
}
