"use client";

import React, { useState } from "react";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
    { name: "O nás", link: "#co-delame" },
    { name: "Tech", link: "#technologie" },
    { name: "Realizace", link: "#realizace" },
    { name: "Recenze", link: "#recenze" },
    { name: "Mapa", link: "#kde-nas-najdete" },
];

export default function NavbarSection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed inset-x-0 top-0 z-50">
        <Navbar className="top-2">
            {/* Desktop */}
            <NavBody>
            <a
                href="#"
                className="relative z-20 flex items-center gap-2 px-2 py-1"
            >
                {/* TODO: vyměň za svoje logo */}
                <div className="h-8 w-8 rounded bg-white/10" />
                <span className="text-sm font-medium text-white">Škodík Nábytek</span>
            </a>

            <NavItems items={navItems} />

            <div className="relative z-20 flex items-center gap-2">
                <NavbarButton href="#kontakt" variant="secondary" className="text-white">
                Kontakt →
                </NavbarButton>
            </div>
            </NavBody>

            {/* Mobile */}
            <MobileNav>
            <MobileNavHeader>
                <a href="#" className="flex items-center gap-2 px-2 py-1">
                <div className="h-8 w-8 rounded bg-white/10" />
                <span className="text-sm font-medium text-white">Škodík Nábytek</span>
                </a>

                <MobileNavToggle
                isOpen={isOpen}
                onClick={() => setIsOpen((v) => !v)}
                />
            </MobileNavHeader>

            <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {navItems.map((item) => (
                <a
                    key={item.link}
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-neutral-700 dark:text-neutral-200"
                >
                    {item.name}
                </a>
                ))}

                <NavbarButton
                href="#kontakt"
                variant="primary"
                onClick={() => setIsOpen(false)}
                className="w-full"
                >
                Kontakt
                </NavbarButton>
            </MobileNavMenu>
            </MobileNav>
        </Navbar>
        </div>
    );
}
