import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Merriweather } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Škodík Nábytek | Nábytek na míru",
  description: "Moderní nábytek na míru s důrazem na detail. Váš prostor, naše řemeslo.",
  icons: {
    icon: [
      { url: "/icons/logo_icon-web_favicon.ico" },
      { url: "/icons/logo_icon-web_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/logo_icon-web_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/logo_icon-web_192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/logo_icon-web_512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/logo_icon-web_180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}