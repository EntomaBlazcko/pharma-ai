import React from "react";
import Image from "next/image";

// Components
import Sidebar from "../public/components/Sidebar";
import Navbar from "../public/components/Navbar";
import HeroSection from "../public/components/HeroSection";
import CTASection from "../public/components/CTASection";
import AboutSection from "../public/components/AboutSection";
import FeatureSection from "../public/components/FeatureSection";
import AboutUs from "../public/components/AboutUs";

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

      {/* Centered About Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AboutUs />
        </div>
      </section>
    </div>
  );
}