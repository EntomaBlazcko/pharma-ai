'use client';

const FeatureSection = () => {
  const features = [
    {
      title: 'Browse OTC Medicines',
      description: 'Search and explore trusted medicines.',
      icon: '🔍', // Replace with an actual icon or SVG
    },
    {
      title: 'AI Consultation',
      description: 'Ask basic health questions anytime.',
      icon: '🤖', // Replace with an actual icon or SVG
    },
    {
      title: 'Simple & Accessible',
      description: 'No login needed, free for everyone.',
      icon: '🔒', // Replace with an actual icon or SVG
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-center text-[#18442A] mb-10">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="text-5xl text-[#18442A]">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#18442A]">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;