/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function MedicinesPage() {
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    otcStatus: 'all',
    medicineType: 'all',
    usesCategory: 'all'
  });

  // Get unique categories for filters
  const allUses = medicines.flatMap(med => med.uses.split(', '));
  const uniqueUses = [...new Set(allUses)];

  const navItems = [
    { href: '/', icon: '/icons/HOME.png', label: 'Home' },
    { href: '/chatbot', icon: '/icons/ASK AI.png', label: 'ASK-AI' }
  ];

  const pathname = usePathname();

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

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const filtered = medicines.filter((med) => {
    // Search term filter
    const matchesSearch = med.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         med.genericName.toLowerCase().includes(searchTerm.toLowerCase());
    
    // OTC status filter
    const matchesOtcStatus = filters.otcStatus === 'all' || 
                            (filters.otcStatus === 'otc' && med.isOTC) || 
                            (filters.otcStatus === 'prescription' && !med.isOTC);
    
    // Medicine type filter
    const matchesType = filters.medicineType === 'all' || 
                       med.type.toLowerCase() === filters.medicineType.toLowerCase();
    
    // Uses category filter
    const matchesUses = filters.usesCategory === 'all' || 
                       med.uses.toLowerCase().includes(filters.usesCategory.toLowerCase());
    
    return matchesSearch && matchesOtcStatus && matchesType && matchesUses;
  });

  return (
    <div className="flex min-h-screen bg-[#f5f0e7]">
      {/* Sidebar */}
      <aside
        className="fixed top-0 left-0 h-screen w-20 p-4 flex flex-col justify-between text-white z-50"
        style={{ backgroundColor: '#18442A' }}
      >
        <div className="flex justify-center mb-8">
          <div className="relative w-[65px] h-[65px] min-w-[65px]">
            <Image
              src="/icons/PH.AI.svg"
              alt="Pharma AI Logo"
              fill
              className="object-contain drop-shadow-md"
              priority
              sizes="65px"
            />
          </div>
        </div>
        <nav className="flex flex-col items-center gap-6">
          {navItems.map(({ href, icon, label }) => (
            <Link href={href} key={href}>
              <div className="relative group">
                <Image
                  src={icon}
                  alt={label}
                  width={24}
                  height={24}
                  className={`cursor-pointer transition-transform duration-200 ${
                    pathname === href ? 'drop-shadow-md scale-110' : ''
                  }`}
                />
                <span className="absolute left-full ml-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {label}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-20">
        {/* Header */}
        <div className="py-10 bg-[#18442A] text-white text-center">
          <h1 className="text-4xl font-bold">Find the Right Medicine, Fast. Explore OTC Medicines</h1>
          <p className="mt-2 text-lg">Easily browse reliable over-the-counter medicines available at Mercury Drug, Watsons, and more — all in one place.</p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by name or generic name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full lg:w-1/2 h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-[#18442A] transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">OTC Status</label>
              <select
                value={filters.otcStatus}
                onChange={(e) => handleFilterChange('otcStatus', e.target.value)}
                className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#18442A]"
              >
                <option value="all">All Medicines</option>
                <option value="otc">OTC Only</option>
                <option value="prescription">Prescription Only</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Medicine Type</label>
              <select
                value={filters.medicineType}
                onChange={(e) => handleFilterChange('medicineType', e.target.value)}
                className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#18442A]"
              >
                <option value="all">All Types</option>
                <option value="branded">Branded</option>
                <option value="generic">Generic</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Uses Category</label>
              <select
                value={filters.usesCategory}
                onChange={(e) => handleFilterChange('usesCategory', e.target.value)}
                className="w-full h-10 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#18442A]"
              >
                <option value="all">All Uses</option>
                {uniqueUses.map(use => (
                  <option key={use} value={use}>{use}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-sm text-gray-500 mb-4">
            Showing {filtered.length} of {medicines.length} medicines
          </div>
        </div>

        {/* Medicine Cards */}
        <div className="max-w-6xl mx-auto px-8 pb-20">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((med) => (
                <div key={med._id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col">
                    <div className="flex items-start space-x-4 mb-4">
                      <img
                        src={med.image}
                        alt={med.name}
                        className="w-20 h-20 object-contain"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-[#18442A]">{med.name}</h3>
                        <p className="text-sm text-gray-500">Generic: {med.genericName}</p>
                        <span className={`mt-1 px-2 py-1 text-xs rounded-full ${med.isOTC ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {med.isOTC ? 'Over-the-Counter (OTC)' : 'Prescription Required'}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div>
                        <h4 className="font-medium text-[#18442A]">Uses:</h4>
                        <p className="text-gray-700">{med.uses}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[#18442A]">Side Effects:</h4>
                        <p className="text-gray-700">{med.sideEffects}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[#18442A]">Dosage:</h4>
                        <p className="text-gray-700">{med.dosage || 'Consult your doctor for dosage information'}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[#18442A]">Precautions:</h4>
                        <p className="text-gray-700">{med.precautions || 'No specific precautions listed'}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-[#18442A]">Type:</h4>
                        <p className="text-gray-700 capitalize">{med.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-gray-500">No medicines found matching your filters.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setFilters({
                    otcStatus: 'all',
                    medicineType: 'all',
                    usesCategory: 'all'
                  });
                }}
                className="mt-4 text-[#18442A] font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}