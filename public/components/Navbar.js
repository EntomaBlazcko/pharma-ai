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
          width={35}
          height={30}
          alt="Search"
          onClick={() => setShowSearch(!showSearch)}
          className="cursor-pointer z-20" // Ensure the icon stays on top
        />

        {/* Search Input with smoother transition */}
        <input
          type="text"
          placeholder="Search medicine..."
          className={`absolute left-10 top-1/2 h-10 -translate-y-1/2 border border-[#18442A] rounded-md bg-white pl-3 pr-10 text-sm text-black shadow transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            showSearch 
              ? 'w-64 opacity-100 translate-x-0' 
              : 'w-0 opacity-0 -translate-x-4 pointer-events-none'
          }`}
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