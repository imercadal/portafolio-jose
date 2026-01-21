'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const pathname = usePathname();

  // Measure header height for scroll effect
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Toggle blur/shadow when scrolling past header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headerHeight]);

  const navItems = [
    { name: 'director', href: '/' },
    { name: 'producer', href: '/producer' },
    { name: 'about', href: '/about' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname.startsWith('/director/');
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header
      ref={headerRef}
      className={`fixed h-28 sm:h-32 top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? 'backdrop-blur-lg shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="mx-auto p-10 flex items-center justify-between">
        <Link href="/">
          <Image 
            src="/Logo_JMV.svg"
            width={117}
            height={65}
            alt="Logo"
          />

        </Link>

        {/* Desktop navigation */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={isActive(item.href) ? 'font-bold underline' : ''}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Popover className="sm:hidden">
          <PopoverButton className="p-2 rounded-md focus:outline-none">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="w-7 h-7" />
          </PopoverButton>

          {/* Backdrop */}
          <PopoverBackdrop className="fixed inset-0 z-40 bg-black/30 transition data-[closed]:opacity-0" />

          {/* Full-screen mobile menu */}
          <PopoverPanel
            focus
            className="
              fixed inset-0 z-50
              flex flex-col items-center justify-center
              px-6
              transition
              data-[closed]:opacity-0
              data-[closed]:translate-y-2
            "
          >
            {/* Close button (top-right) */}
            <div className="absolute top-10 right-10">
              <PopoverButton className="p-2 rounded-md focus:outline-none">
                <XMarkIcon className="w-7 h-7" />
              </PopoverButton>
            </div>

            <nav className="flex flex-col items-center">
              {navItems.map((item) => (
                <PopoverButton
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={`text-2xl/10 font-extrabold ${
                    isActive(item.href) ? 'underline' : ''
                  }`}
                >
                  {item.name}
                </PopoverButton>
              ))}

              <button className="italic mt-8 px-4 py-2 text-base">
                español
              </button>
            </nav>
          </PopoverPanel>
        </Popover>
      </div>
    </header>
  );
}


/*
          <h1 className="font-bold text-lg leading-tight">
            JOSÉ
            <br />
            MANUEL
            <br />
            VÉLEZ
          </h1>

'use client'

import Link from 'next/link';
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
                    <h1 className="font-bold text-lg">JOSÉ<br/>MANUEL<br/>VÉLEZ</h1>
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
*/