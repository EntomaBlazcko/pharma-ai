import React from "react";

import Image from "next/image";
import Sidebar from "../public/components/Sidebar";
import Navbar from "../public/components/Navbar";
import HeroSection from "../public/components/HeroSection";
import CTASection from "../public/components/CTASection";
import AboutSection from "../public/components/AboutSection";
import FeatureSection from "../public/components/FeatureSection";





export default function Home() {
  return (
    <div className="bg-[#f5f0e7] min-h-screen">
      {/* Navbar */}
      <div className="pt-20">
        <Navbar />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Call to Action Section */}
      <CTASection />

      {/* Sidebar and Main Content */}
      <div className="flex flex-col lg:flex-row mt-10">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 ml-20">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 p-8">
          <h2 className="text-2xl font-bold text-[#18442A]">ABOUT US</h2>
          <p className="mt-4 text-gray-600">
            THIS WILL BE THE CONTACT PLACEHOLDER.
          </p>
        </div>
      </div>
    </div>
  );
}

