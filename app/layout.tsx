import type { Metadata } from "next";
import { Rubik, Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from "./components/Footer";

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
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
      </body>
    </html>
  );
}

/**
 * 
  pt-28 sm:pt-32
 */