import QuickContactModal from "@/components/contact/QuickContactModal";

const links = [
  { href: "#technologie", label: "Technologie" },
  { href: "#realizace", label: "Realizace" },
  { href: "#recenze", label: "Recenze" },
  { href: "#kde-nas-najdete", label: "Mapa" },
];

export default function FooterSection() {
  return (
    <footer id="kontakt" className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          <div>
            <p className="text-lg font-semibold">Škodík Nábytek</p>
            <p className="mx-auto mt-3 max-w-sm text-sm text-foreground/70 md:mx-0">
              Moderní nábytek na míru s důrazem na detail, přesnost a čisté
              provedení.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/60">
              Rychlé odkazy
            </p>
            <ul className="mt-4 space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    className="text-sm text-foreground/70 transition hover:text-foreground"
                    href={l.href}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-foreground/60">
              Kontakt
            </p>
            <div className="mt-4 space-y-2 text-sm text-foreground/70">
              <p>📍 Palackého 1522, 696 03 Dubňany</p>
              <p>
                ☎{" "}
                <a
                  className="transition hover:text-foreground"
                  href="tel:+420 606 706 210"
                >
                  +420 606 706 210
                </a>
              </p>
              <p>
                ✉{" "}
                <a
                  className="transition hover:text-foreground"
                  href="mailto:skodiknabytek@seznam.cz"
                >
                  skodiknabytek@seznam.cz
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr className="mt-12 border-white/10" />
        <p className="mt-6 text-center text-xs text-foreground/50">
          © {new Date().getFullYear()} Škodík Nábytek. Všechna práva vyhrazena
          pro František Lamáček
        </p>
      </div>
    </footer>
  );
}
