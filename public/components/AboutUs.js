// components/AboutSection.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// components/AboutUs.jsx
export default function AboutUs() {
  return (
    <section className="relative py-20 px-4 bg-[#f5f0e7] overflow-hidden">
      {/* Background Logo Image */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <Image
          src="/icons/PH.AI.svg" // Update this path if needed
          alt="Pharma AI Logo"
          layout="fill"
          objectFit="contain"
          quality={100}
          className="mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#18442A] mb-6">ABOUT US</h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Pharma.AI is your trusted AI-powered assistant for finding safe, over-the-counter (OTC) medicines in the Philippines.
          Built to help Filipinos make smarter healthcare choices, Pharma.AI provides instant, easy-to-understand answers about medicines available at local drugstores like Mercury Drug and Watsons.
        </p>

        <ul className="text-left mx-auto space-y-3 text-gray-700 text-lg max-w-2xl mb-8">
          <li>• Medicine uses and effects</li>
          <li>• Proper precautions and side effects</li>
          <li>• Medicine types (generic vs branded)</li>
          <li>• Safe combinations and warnings</li>
          <li>• Suggestions for common symptoms</li>
        </ul>

        <p className="text-lg text-gray-700 leading-relaxed">
          We aim to make health information more accessible, accurate, and local — because every Filipino deserves safe self-medication guidance, powered by technology.
        </p>
      </div>
    </section>
  );
}