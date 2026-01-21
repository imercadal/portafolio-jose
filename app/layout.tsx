import type { Metadata } from "next";
import { Rubik, Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const rubikMono = Rubik_Mono_One({
  variable: "--font-rubik-mono",
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Portafolio José Manuel Vélez",
  description: "Director de cine",
};

export default function RootLayout({ children }){
  
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${rubikMono.variable} antialiased flex flex-col min-h-dvh`}>


          <main className="flex-1">{children}</main>
          <Footer />
      </body>
    </html>
  );
}

/**
 *           <Header />
 * 
  pt-28 sm:pt-32
 */