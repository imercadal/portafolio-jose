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