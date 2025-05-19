'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <div className="py-20 bg-[#18442A] text-white">
      <div className="max-w-6xl mx-auto text-center space-y-6 px-8">
        <h2 className="text-3xl font-bold">
          Start your journey to safer self-medication with Pharma.AI today!
        </h2>
<Link 
  href="/chatbot" 
  className="border-2 border-[#e6f5ec text-[#e6f5ec] px-6 py-3 rounded-md font-semibold text-lg shadow-sm hover:bg-[#18442A] transition duration-300"
>
  Ask AI
</Link>

      </div>
    </div>
  );
};

export default CTASection;