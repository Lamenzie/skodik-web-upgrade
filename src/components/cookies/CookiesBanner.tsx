"use client";

import { useEffect, useState } from "react";
import { StickyBanner } from "@/components/ui/sticky-banner";

const STORAGE_KEY = "skodik_cookies_accepted";

export default function CookiesBanner() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const accepted = localStorage.getItem(STORAGE_KEY);
        if (!accepted) setOpen(true);
    }, []);

    if (!open) return null;

    return (
        <div className="fixed bottom-4 left-1/2 z-60 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2">
            <StickyBanner className="w-full pointer-events-auto">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-foreground/70">
                        Používáme cookies pro zlepšení funkčnosti webu a anonymní statistiky.
                    </p>

                    <div className="flex gap-2">
                        <button
                            className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-widest text-foreground/70 hover:text-foreground hover:bg-white/5 transition"
                            onClick={() => setOpen(false)}
                        >
                            Zavřít
                        </button>
                        <button
                            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-foreground hover:bg-white/15 transition"
                            onClick={() => {
                            localStorage.setItem(STORAGE_KEY, "true");
                            setOpen(false);
                            }}
                        >
                            Přijmout
                        </button>
                    </div>
                </div>
            </StickyBanner>
        </div>
    );
}
