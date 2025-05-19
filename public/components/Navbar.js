'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
  className={`flex justify-between items-center px-8 py-4 border-b border-[#18442A] bg-white transition-transform duration-300 z-50 fixed top-0 w-full h-20 ${
    show ? 'translate-y-0' : '-translate-y-full'
  }`}
>
  {/* Logo on the left */}
  <div className="relative w-[65px] h-[65px] min-w-[65px]">
    <Image
      src="/icons/ph.ai-logo.svg"
      alt="Pharma AI Logo"
      fill
      className="object-contain"
      priority
      sizes="65px"
    />
  </div>

  {/* Nav Items on the right */}
  <ul className="flex gap-6 text-[#18442A] font-medium">
    <li key="/">
  <Link
    href="/"
    className="block py-2 font-bold text-lg text-[#18442A] hover:text-green-500 transition-colors duration-200">
    Home
  </Link>
</li>
    <li key="medicine">
      <Link href="/medicine" className="block py-2 font-bold text-lg text-[#18442A] hover:text-green-500 transition-colors duration-200 ">
        Medicines
      </Link>
    </li>
    <li key="chatbot">
      <Link href="/chatbot" className="block py-2 font-bold text-lg text-[#18442A] hover:text-green-500 transition-colors duration-200">
        Ask AI
      </Link>
    </li>
  </ul>
</nav>
  );
};

export default Navbar;