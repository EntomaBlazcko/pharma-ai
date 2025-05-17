'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
  { href: '/', icon: '/icons/HOME.png', label: 'Home' },
  { href: '/medicines', icon: '/icons/MEDICINE.png', label: 'Medicines' },
  { href: '/ask-ai', icon: '/icons/ASK AI.png', label: 'Ask AI' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="sidebar fixed top-0 left-0 h-screen w-20 p-4 flex flex-col justify-between text-white z-50 sm:flex hidden"
      style={{ backgroundColor: '#18442A' }}
    >
      {/* Logo Container - Optimized for 80px sidebar */}
      <div className="flex justify-center mb-8">
        <div className="relative w-[65px] h-[65px] min-w-[65px]"> {/* Fixed size container */}
          <Image
            src="/icons/PH.AI.svg" // Update this path if using new logo
            alt="Pharma AI Logo"
            fill
            className="object-contain drop-shadow-md"
            priority
            sizes="65px" // Helps with performance
          />
        </div>
      </div>

      {/* Navigation Icons (unchanged) */}
      <nav className="flex flex-col items-center gap-6">
        {navItems.map(({ href, icon, label }) => (
          <Link href={href} key={href}>
            <div className="relative group">
              <Image
                src={icon}
                alt={label}
                width={24}
                height={24}
                className={`cursor-pointer transition-transform duration-200 ${
                  pathname === href ? 'drop-shadow-md scale-110' : ''
                }`}
              />
              <span className="absolute left-full ml-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {label}
              </span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}