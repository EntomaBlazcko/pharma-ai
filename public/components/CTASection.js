'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <div className="py-20 bg-[#18442A] text-white">
      <div className="max-w-6xl mx-auto text-center space-y-6 px-8">
        <h2 className="text-3xl font-bold">
          Start your journey to safer self-medication with Pharma.AI today!
        </h2>
<<<<<<< HEAD
<Link 
  href="/chatbot" 
  className="border-2 border-[#e6f5ec text-[#e6f5ec] px-6 py-3 rounded-md font-semibold text-lg shadow-sm hover:bg-[#18442A] transition duration-300"
>
  Ask AI
</Link>

=======
        <Link href="/medicine">
          <button className="bg-white text-[#18442A] px-6 py-3 rounded-md font-medium hover:bg-green-400 transition duration-300">
            Explore Medicines
          </button>
        </Link>
>>>>>>> 69ebd381b5527574ac279f38dd525ba718fdb678
      </div>
    </div>
  );
};

export default CTASection;