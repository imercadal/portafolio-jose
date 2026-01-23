'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const headerRef = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
    const updateHeaderHeight = () => {
      const headerEl = headerRef.current;
      if (!headerEl) return;
      setHeaderHeight(headerEl.offsetHeight);
    };

    updateHeaderHeight();

    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > headerHeight);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight]);

    return(
        <header
        ref={headerRef}
        className={`fixed h-28 sm:h-32 top-0 left-0 w-full z-50 transition-all duration-300 
            ${scrolled ? "backdrop-blur-lg shadow-md" : "bg-transparent"}
        `}
        >
            <div className="mx-auto p-10 flex items-center justify-between">
                <Link href='/'>
                    <Image
                        src="/Logo_JMV.svg"
                        width={117}
                        height={65}
                        alt="Logo"
                    />
                </Link>
                <nav>
                <ul>
                    <li className={`${
                        pathname === "/" || pathname.startsWith("/director/")
                        ? 'font-bold underline' 
                        : ''
                        }`}
                    >
                        <Link href='/'>director</Link>
                    </li>
                    <li className={`${pathname === '/producer' ? 'font-bold underline' : ''}`}><Link href='/producer'>producer</Link></li>
                    <li  className={`${pathname === '/about' ? 'font-bold underline' : ''}`}><Link href='/about'>about</Link></li>
                </ul>
                </nav>
            </div>
        </header>
    )
};

/**
 * 
 * 
 * import Image from "next/image";
 
 export default function UnderConstruction() {
   return (
     <>
 
           <div className="relative min-h-screen">
             <div
               className="
                 absolute inset-0 
                 -z-10
                 bg-cover bg-center bg-no-repeat
               "
               style={{
                 backgroundImage: "url('/Fondo_WAQB.jpg')",
               }}
             />
                 <div className="flex justify-start items-center p-8 md:p-20 h-screen">
                     <Image
                         src="/Logo_JMV.svg"
                         width={117}
                         height={65}
                         alt="Logo"
                     />
                     <p className="pl-10 italic">website under construction</p>
                 </div>
             </div>
     </>
 )
 }
 */