export default function MapSection() {
  return (
    <section id="kde-nas-najdete" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div /> 
          <div className="text-center md:text-right">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Kde nás najdete
            </h2>
            <p className="mt-3 text-foreground/70 max-w-2xl ml-auto">
              Nahlédněte nám pod ruce přímo ve výrobě. Rádi vás přivítáme v naší
              dílně, kde si můžete osahat materiály a společně naplánovat každý
              detail vaší budoucí realizace.
            </p>
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="aspect-16/10">
            <iframe
              title="Mapa – Škodík Nábytek"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Palack%C3%A9ho%201522%2C%20696%2003%20Dub%C5%88any&output=embed"
            />
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3 text-sm md:text-base">
            <div>
              <p className="text-foreground/60 text-xs uppercase tracking-widest">
                Adresa
              </p>
              <p className="mt-1">Palackého 1522, 696 03 Dubňany</p>
            </div>

            <div>
              <p className="text-foreground/60 text-xs uppercase tracking-widest">
                Otevírací doba
              </p>
              <p className="mt-1">Po–Pá 8:00–16:00 (nebo dle domluvy)</p>
            </div>

            <div>
              <p className="text-foreground/60 text-xs uppercase tracking-widest">
                Osobní návštěva
              </p>
              <p className="mt-1 text-foreground/70">
                Doporučujeme zavolat předem – můžeme být na montáži nebo u
                zákazníka.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.google.com/maps?q=Palack%C3%A9ho%201522%2C%20696%2003%20Dub%C5%88any"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-widest text-foreground/70 hover:text-foreground hover:bg-white/5 transition"
            >
              Otevřít v Mapách →
            </a>

            <a
              href="#kontakt"
              className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-widest text-foreground/70 hover:text-foreground hover:bg-white/5 transition"
            >
              Kontakt →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
