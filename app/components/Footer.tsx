import Image from 'next/image';

export default function Footer() {
const navigation = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/imercadal/',
      icon: () => (
        <Image 
            src='/icons/instagram-icon.webp'
            alt='Instagram Logo'
            width={20}
            height={20}
        />
      ),
    },
    {
      name: 'Vimeo',
      href: 'https://vimeo.com/jmvelez',
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Vimeo">
          <path d="M22.396 7.164c-.093 2.026-1.507 4.799-4.245 8.32C15.322 19.16 12.928 21 10.97 21c-1.214 0-2.24-1.119-3.079-3.359l-1.68-6.172C5.54 9.23 4.893 8.11 4.2 8.11c-.16 0-.71.334-1.653.996L1.5 7.787c1.047-.92 2.08-1.84 3.094-2.76C5.988 3.95 7.08 3.328 7.8 3.264c1.72-.166 2.78.998 3.186 3.492.43 2.69.727 4.364.893 5.02.494 2.252 1.04 3.375 1.636 3.375.46 0 1.155-.73 2.082-2.189.928-1.459 1.426-2.569 1.492-3.33.133-1.26-.364-1.892-1.492-1.892-.531 0-1.08.123-1.647.366 1.093-3.583 3.18-5.322 6.262-5.217 2.285.067 3.36 1.548 3.184 4.275z" fill="white"/>
        </svg>
      ),
    },
]

  return(
    <footer>
      <div className="mt-10 mb-5 px-10 md:flex md:items-center md:justify-between">
          <div className="flex justify-center items-center gap-x-6 md:order-2">
              {navigation.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className="dark hover:opacity-50"
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className="sr-only">{item.name}</span>
                    {item.icon()}
                  </a>
              ))}
          </div>
          <p className="mt-2 text-center text-xs/6 text-dark md:order-1 md:mt-0">
              &copy; 2025 - Designed by José Manuel Vélez / Developed by Irene Mercadal 
          </p>
      </div>
    </footer>
  )
};
/*

import Image from 'next/image';
import React from 'react';
import { MdEmail } from 'react-icons/md';

const navigation = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/imercadal/',
      icon: () => (
        <Image 
            src='/30_instagram-icon.webp'
            alt='Instagram Logo'
            width={20}
            height={20}
        />
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/irene-mercadal/',
      icon: () => (
        <Image 
            src='/31_linkedin-logo.webp'
            alt='LinkedIn Logo'
            width={30}
            height={30}
        />
      ),
    },
    {
      name: 'Email',
      href: 'mailto:irenemercadal@duck.com',
      icon: () => <MdEmail size={25} />,
    },
  ]


export default function Footer() {

  return(
    <footer>
        <div className="md:h-16 h-24 mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-around lg:px-20">
            <div className="flex justify-center items-center gap-x-6 md:order-2">
                {navigation.map((item) => (
                    <a 
                      key={item.name} 
                      href={item.href} 
                      className="dark hover:text-accent"
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                    <span className="sr-only">{item.name}</span>
                    {item.icon()}
                    </a>
                ))}
            </div>
            <p className="mt-2 text-center text-xs/6 text-dark md:order-1 md:mt-0">
                &copy; 2025 Developed by Irene Mercadal Albornoz with ♥.
            </p>
        </div>
    </footer>

  )
}
*/