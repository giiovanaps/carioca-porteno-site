import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL("https://turismosp.netlify.app"),
  title: "Rota Brasilis | Viagens pelo Brasil e América do Sul",
  description:
    "Roteiros sob medida pelo Brasil e América do Sul: Lençóis Maranhenses, Noronha, Amazônia, Cusco, Portillo, San Andrés e muito mais.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Rota Brasilis | Viagens pelo Brasil e América do Sul",
    description: "Roteiros sob medida do Caribe colombiano aos Andes.",
    images: ["/assets/brasil/peru-humantay.webp"],
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
