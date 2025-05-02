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
          <Link href="/medicine" className="bg-[#18442A] text-white px-6 py-3 rounded-md font-medium hover:bg-[#143b28] transition duration-300">
            Explore Medicines
          </Link>
          <Link href="/chatbot" className="border border-[#18442A] text-[#18442A] px-6 py-3 rounded-md font-medium hover:bg-[#f0faf2] transition duration-300">
            Ask AI
          </Link>
        </div>
      </div>

      {/* Illustration/Image */}
      <div className="absolute right-0 bottom-0 hidden lg:block">
        <Image
          src="/images/medicine-bottle.png" // Replace with your actual image path
          alt="Medicine Bottle"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;