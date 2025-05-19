'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

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
      className={`flex justify-end items-center px-8 py-4 border-b border-[#18442A] bg-white transition-transform duration-300 z-50 fixed top-0 w-full ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Nav Items */}
      <ul className="flex gap-6 text-[#18442A] font-medium">
        <li key="home">
          <Link href="/" className="block py-2">
            Home
          </Link>
        </li>
        <li key="medicine">
          <Link href="/medicine" className="block py-2">
            Medicines
          </Link>
        </li>
        <li key="chatbot">
          <Link href="/chatbot" className="block py-2">
            Ask AI
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;