/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react';

export default function MedicinesPage() {
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const res = await fetch('/api/medicine');
        const data = await res.json();
        setMedicines(data);
      } catch (error) {
        console.error('Error loading medicines:', error);
      }
    };
    fetchMedicines();
  }, []);

  const filtered = medicines.filter((med) =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          className="w-full lg:w-1/2 h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-[#18442A] transition-all duration-300"
        />
      </div>

      {/* Medicine Cards */}
      <div className="max-w-6xl mx-auto px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((med) => (
            <div key={med._id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={med.image}
                alt={med.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-[#18442A]">{med.name}</h3>
              <p className="text-sm text-gray-600 italic">({med.genericName})</p>
              <p className="text-sm text-gray-700 mt-2"><strong>Type:</strong> {med.type}</p>
              <p className="text-sm text-gray-700"><strong>Form:</strong> {med.form}</p>
              <p className="text-sm text-gray-700"><strong>Uses:</strong> {med.uses}</p>
              <p className="text-sm text-gray-700"><strong>Side Effects:</strong> {med.sideEffects}</p>
              <p className="text-sm text-gray-700"><strong>Precautions:</strong> {med.precautions}</p>
              <p className="text-sm text-gray-700"><strong>Interactions:</strong> {med.interactions}</p>
              <p className="text-sm text-gray-700"><strong>Not For:</strong> {med.notFor}</p>
              <p className="text-sm text-gray-700"><strong>Storage:</strong> {med.storage}</p>
              <p className="text-sm text-gray-700">
                <strong>OTC:</strong> {med.isOTC ? 'Yes' : 'No'}
              </p>
              <Link href={`/medicine/${med._id}`}>
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
}
