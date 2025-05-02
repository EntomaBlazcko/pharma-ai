'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <div className="py-20 bg-[#18442A] text-white">
      <div className="max-w-6xl mx-auto text-center space-y-6 px-8">
        <h2 className="text-3xl font-bold">
          Start your journey to safer self-medication with Pharma.AI today!
        </h2>
        <Link href="/medicine">
          <button className="bg-white text-[#18442A] px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition duration-300">
            Explore Medicines
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;