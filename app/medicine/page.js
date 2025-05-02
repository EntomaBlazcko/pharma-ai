/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import Link from 'next/link';
import React from "react";
import Image from "next/image";

const MedicinesPage = () => {
  const medicines = [
    {
      id: 1,
      name: 'Paracetamol',
      description: 'Relieves pain and reduces fever.',
      image: '/images/paracetamol.png', // Replace with actual image path
    },
    {
      id: 2,
      name: 'Ibuprofen',
      description: 'Reduces inflammation and relieves pain.',
      image: '/images/ibuprofen.png', // Replace with actual image path
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f5f0e7] min-h-screen">
      {/* Header */}
      <div className="py-10 bg-[#18442A] text-white text-center">
        <h1 className="text-4xl font-bold">Explore OTC Medicines</h1>
        <p className="mt-2 text-lg">Find trusted over-the-counter medicines for your needs.</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-6xl mx-auto px-8 py-10">
        <input
          type="text"
          placeholder="Search for a medicine..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full lg:w-1/2 h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-[#18442A]"
        />
      </div>

      {/* Medicine List */}
      <div className="max-w-6xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMedicines.map((medicine) => (
            <div key={medicine.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={medicine.image}
                alt={medicine.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-[#18442A]">{medicine.name}</h3>
              <p className="mt-2 text-gray-600">{medicine.description}</p>
              <Link href={`/medicine/${medicine.id}`}>
                <button className="mt-4 bg-[#18442A] text-white px-4 py-2 rounded-md hover:bg-[#143b28] transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicinesPage;