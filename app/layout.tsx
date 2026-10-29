import type { Metadata, Viewport } from "next";
import { Syne, Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const display = Syne({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL("https://turismosp.netlify.app"),
  title: "Rota Brasilis | Viagens autorais pelo Brasil",
  description:
    "Roteiros sob medida pelo Brasil: Lençóis Maranhenses, Fernando de Noronha, Amazônia, Pantanal, Bonito, Iguaçu e muito mais.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Rota Brasilis | Viagens autorais pelo Brasil",
    description: "Roteiros sob medida de Noronha aos cânions do Sul.",
    images: ["/assets/brasil/lencois.webp"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#03100e" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
