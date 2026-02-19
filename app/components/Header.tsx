'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { projects } from '../director/project-data';

export default function Header() {
    const headerRef = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuView, setMenuView] = useState<'main' | 'director'>('main');
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

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    useEffect(() => {
        if (!menuOpen) {
            const id = setTimeout(() => setMenuView('main'), 300);
            return () => clearTimeout(id);
        }
    }, [menuOpen]);

    return(
        <>
        <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
            ${scrolled ? "backdrop-blur-lg shadow-md" : "bg-transparent"}
        `}
        >
            <div className="mx-auto p-6 sm:p-10 flex items-center justify-between">
                <Link href='/'>
                    {/* Mobile logo */}
                    <Image
                        className="sm:hidden"
                        src="/Logo_JMV.svg"
                        width={75}
                        height={53}
                        alt="José Manuel Vélez — filmmaker logo"
                    />
                    {/* Desktop logo */}
                    <Image
                        className="hidden sm:block"
                        src="/Logo_JMV.svg"
                        width={117}
                        height={81}
                        alt="José Manuel Vélez — filmmaker logo"
                    />
                </Link>

                {/* Hamburger / Close toggle (mobile only) */}
                <button
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    className="sm:hidden relative w-10 h-10 flex-shrink-0"
                >
                    {/* Hamburger (3 bars) */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"
                        className={`transition-opacity duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
                    >
                        <rect width="40" height="7" rx="1" fill="white"/>
                        <rect y="32" width="40" height="7" rx="1" fill="white"/>
                        <rect y="16" width="40" height="7" rx="1" fill="white"/>
                    </svg>
                    {/* X / close */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"
                        className={`absolute inset-0 transition-opacity duration-200 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <rect x="7" y="2.1127" width="44" height="7" rx="1" transform="rotate(45 7 2.1127)" fill="white"/>
                        <rect x="2" y="33.1127" width="44" height="7" rx="1" transform="rotate(-45 2 33.1127)" fill="white"/>
                    </svg>
                </button>

                {/* Desktop nav (hidden on mobile) */}
                <nav aria-label="Main navigation" className="hidden sm:block">
                    <ul className="text-right">
                        <li>
                            <Link
                                href='/'
                                className={`text-[15px] ${
                                    pathname === "/" || pathname.startsWith("/director/")
                                    ? 'font-mono underline'
                                    : 'font-medium'
                                }`}
                            >
                                director
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/producer'
                                className={`text-[15px] ${pathname === '/producer' ? 'font-mono underline' : 'font-medium'}`}
                            >
                                producer
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/about'
                                className={`text-[15px] ${pathname === '/about' ? 'font-mono underline' : 'font-medium'}`}
                            >
                                about
                            </Link>
                        </li>
                        <li>
                            <span className="text-[15px] font-light italic">eng · esp</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        {/* Mobile menu overlay */}
        <div
            aria-hidden={!menuOpen}
            className={`
                fixed inset-0 z-40 sm:hidden
                backdrop-blur-[30px] bg-white/1
                flex items-center justify-center
                overflow-y-auto
                transition-opacity duration-300
                ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
            `}
        >
            <nav aria-label="Mobile navigation" className="relative w-full text-center text-white">

                {/* ── VIEW 1: Main menu ─────────────────────────────── */}
                <ul className={`transition-opacity duration-200
                    ${menuView === 'main'
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none absolute top-0 left-0 w-full'}`}
                >
                    <li>
                        <button
                            onClick={() => setMenuView('director')}
                            className={`w-full text-[26px] leading-10 tracking-[0.65px] font-mono lowercase
                                ${pathname === '/' || pathname.startsWith('/director/') ? 'underline' : ''}`}
                        >
                            director
                        </button>
                    </li>
                    <li>
                        <Link
                            href="/producer"
                            onClick={() => setMenuOpen(false)}
                            className={`block text-[26px] leading-10 tracking-[0.65px] font-sans font-light lowercase
                                ${pathname === '/producer' ? 'underline' : ''}`}
                        >
                            producer
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            onClick={() => setMenuOpen(false)}
                            className={`block text-[26px] leading-10 tracking-[0.65px] font-sans font-light lowercase
                                ${pathname === '/about' ? 'underline' : ''}`}
                        >
                            about
                        </Link>
                    </li>
                    <li>
                        <span className="block text-[26px] leading-10 tracking-[0.65px] font-sans font-light italic">
                            español
                        </span>
                    </li>
                </ul>

                {/* ── VIEW 2: Director submenu ──────────────────────── */}
                <ul className={`transition-opacity duration-200
                    ${menuView === 'director'
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none absolute top-0 left-0 w-full'}`}
                >
                    <li>
                        <button
                            onClick={() => setMenuView('main')}
                            aria-label="Back to main menu"
                            className="w-full text-[26px] leading-10 tracking-[0.65px] font-mono lowercase mb-2"
                        >
                            director
                        </button>
                    </li>
                    {projects.map(p => (
                        <li key={p.id}>
                            <Link
                                href={`/director/${p.slug}`}
                                onClick={() => setMenuOpen(false)}
                                className="block text-[26px] leading-10 tracking-[0.65px] font-mono lowercase"
                            >
                                {p.title}
                            </Link>
                        </li>
                    ))}
                </ul>

            </nav>
        </div>
        </>
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