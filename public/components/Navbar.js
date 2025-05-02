'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <div
      className={`ml-20 flex justify-between items-center px-8 py-4 border-b border-[#18442A] bg-white transition-transform duration-300 z-50 fixed top-0 w-full ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Search Section */}
      <div className="flex items-center relative">
        {/* Search Icon */}
        <Image
          src="/icons/search.svg"
          width={24}
          height={24}
          alt="Search"
          onClick={() => setShowSearch(!showSearch)}
          className="cursor-pointer z-20" // Ensure the icon stays on top
        />

        {/* Search Input (Slide In from Left) */}
        <input
          type="text"
          placeholder="Search medicine..."
          className={`h-10 pl-3 pr-10 border border-[#18442A] rounded-md bg-white text-sm text-black shadow transition-all duration-300 absolute left-10 top-1/2 transform -translate-y-1/2 ${
            showSearch ? 'w-64 opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-full ease-in-out'
          }`}
          style={{
            transitionProperty: 'width, opacity, transform',
          }}
        />
      </div>

      {/* Nav Items */}
      <ul className="ml-10 flex gap-6 text-[#18442A] font-medium w-70">
        <Link href="/">
      <li>Home</li>
      </Link>
      <Link href="medicine">
      <li>Medicines</li>
      </Link>
      <Link href="/chatbot">
      <li>Ask AI</li>
      </Link>
      </ul>
    </div>
  );
};

export default Navbar;