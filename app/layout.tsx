import type {Metadata} from "next";
import "./globals.css";
import "./premium.css";
import "./motion.css";
import "./flash-brand.css";
import {SiteMotion} from "../components/site-motion";
export const metadata:Metadata={metadataBase:new URL("https://carioca-porteno-tour.giiovanapatriciia.chatgpt.site"),title:{default:"Carioca Porteño Tour | Passeios no Rio de Janeiro",template:"%s | Carioca Porteño Tour"},description:"Passeios, traslados e experiências no Rio de Janeiro com atendimento em português e espanhol.",icons:{icon:"/assets/logo-carioca-porteno.png",apple:"/assets/logo-carioca-porteno.png"},robots:{index:true,follow:true},other:{"theme-color":"#032b46"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}<SiteMotion/></body></html>;}
