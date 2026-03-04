"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { StickyBanner } from "@/components/ui/sticky-banner";

const STORAGE_KEY = "skodik_cookies_accepted";

export default function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (accepted === "true") {
      setConsentGranted(true);
    } else if (accepted === null) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setConsentGranted(true);
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem(STORAGE_KEY, "false");
    setShowBanner(false);
  };

  return (
    <>
      {consentGranted && (
        <>
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-7CNC7WE29E"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-7CNC7WE29E', {
                                    page_path: window.location.pathname,
                                });
                            `,
            }}
          />
        </>
      )}

      {showBanner && (
        <div className="fixed bottom-4 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2">
          <StickyBanner className="pointer-events-auto w-full">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-foreground/70">
                Používáme cookies pro zlepšení funkčnosti webu a anonymní
                statistiky.
              </p>

              <div className="flex gap-2">
                <button
                  className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-widest text-foreground/70 transition hover:bg-white/5 hover:text-foreground"
                  onClick={declineCookies}
                >
                  Zavřít
                </button>
                <button
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-widest text-foreground transition hover:bg-white/15"
                  onClick={acceptCookies}
                >
                  Přijmout
                </button>
              </div>
            </div>
          </StickyBanner>
        </div>
      )}
    </>
  );
}
