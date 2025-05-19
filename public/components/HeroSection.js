'use client';

import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative bg-[#F8FAFC] py-20 px-8 flex items-center justify-center min-h-[70vh]">
      {/* Content Container */}
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Big Title */}
        <h1 className="text-5xl font-bold text-[#18442A]">
          Welcome to Pharma.AI
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600">
          Your AI companion for Over-the-Counter Medicines in the Philippines.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Link href="/medicine" className="bg-[#18442A] text-white px-6 py-3 rounded-md font-medium hover:bg-grey-200 transition duration-300">
            Explore Medicines
          </Link>
          <Link href="/chatbot" className="border border-[#18442A] text-[#18442A] px-6 py-3 rounded-md font-medium hover:bg-green-400 transition duration-300">
            Ask AI
          </Link>
        </div>
      </div>

      {/* Illustration/Image */}
      <div className="absolute right-0 top-1bottom-0 hidden lg:block">
        <Image
          src="/icons/pharmcare-hero.png" // Replace with your actual image path
          alt="Medicine Bottle"
          width={370}
          height={420}
          className="object-contain"
        />
        </div>
        <div className="absolute left-5 top-1bottom-0 hidden lg:block">
        <Image
          src="/icons/medicine-bottle.svg" // Replace with your actual image path
          alt="Medicine Bottle"
          width={370}
          height={420}
          className="object-contain"
        />
        </div>
    </div>
  );
};

export default HeroSection;