"use client";

import { useState } from "react";
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
  { name: "Technologie", link: "#technologie" },
  { name: "Realizace", link: "#realizace" },
  { name: "Recenze", link: "#recenze" },
  { name: "Mapa", link: "#kde-nas-najdete" },
];

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <div className="fixed inset-x-0 top-0 z-[100]">
      {/* důležité: top-0, ať se netluče s top-20 uvnitř */}
      <Navbar className="top-0">
        {/* DESKTOP */}
        <NavBody className="px-6">
          <a href="#" className="relative z-20 flex items-center gap-2 px-2 py-1">
            <div className="h-8 w-8 rounded bg-white/10" />
            <span className="text-sm font-medium text-white">Škodík</span>
          </a>

          {/* když kliknu na položku, zavřít (konzistence) */}
          <NavItems items={navItems} onItemClick={close} />

          <div className="relative z-20 flex items-center gap-2">
            <NavbarButton href="#kontakt" variant="secondary" className="text-white">
              Kontakt →
            </NavbarButton>
          </div>
        </NavBody>

        {/* MOBILE */}
        {/* důležité: relative, aby MobileNavMenu (absolute) seděl správně */}
        <MobileNav className="relative px-4">
          <MobileNavHeader>
            <a href="#" className="flex items-center gap-2 px-2 py-1">
              <div className="h-8 w-8 rounded bg-white/10" />
              <span className="text-sm font-medium text-white">Škodík Nábytek</span>
            </a>

            <div className="relative z-[60]" aria-label="Otevřít menu">
  <MobileNavToggle
    isOpen={isOpen}
    onClick={() => setIsOpen((v) => !v)}
  />
</div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isOpen}
            onClose={close}
            className="z-[70]"
          >
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={close}
                className="w-full rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
              >
                {item.name}
              </a>
            ))}

            <NavbarButton
              href="#kontakt"
              variant="dark"
              onClick={close}
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