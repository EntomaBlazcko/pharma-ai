import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar bg-#18442A-800 text-white h-screen w-35 p-4">
      <h2 className="text-2xl font-bold mb-6">Pharma AI</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/">
              <p className="hover:text-gray-300">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/dashboard">
              <p className="hover:text-gray-300">Dashboard</p>
            </Link>
          </li>
          <li>
            <Link href="/analytics">
              <p className="hover:text-gray-300">Analytics</p>
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <p className="hover:text-gray-300">Settings</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Welcome to Pharma AI</h1>
     
      </main>
    </div>
  );
}


