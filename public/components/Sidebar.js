'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/',
      icon: '/icons/1.svg',
      label: 'Home',
    },
    {
      href: '/medicines',
      icon: '/icons/  2.svg',
      label: 'Medicines',
    },
    {
      href: '/ask-ai',
      icon: '/icons/3.svg',
      label: 'Ask AI',
    },
  ];

  return (
    <div
      className="sidebar fixed top-0 left-0 h-screen w-20 p-4 flex flex-col justify-between text-white z-50 sm:flex hidden"
      style={{ backgroundColor: '#18442A' }}
    >
      <div>
        <div className="mb-6" >
          <Image
            src="/icons/LOGO.svg"
            alt="Pharma AI Logo"
            width={50}
            height={40}
            className="mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 mt-6">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            <div className="relative group">
              <Image
                src={item.icon}
                alt={item.label}
                width={24}
                height={24}
                className={`cursor-pointer transition-opacity duration-200 ${
                  pathname === item.href ? 'opacity-100' : 'opacity-50'
                }`}
              />
              <span className="absolute left-full ml-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
