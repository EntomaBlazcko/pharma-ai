/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div
      className="sidebar text-white h-screen w-20 p-4 flex flex-col justify-between"
      style={{ backgroundColor: "#18442A" }}
    >
      <div>
        <div className="mb-6">
          <Image
            src="/icons/LOGO.svg"
            alt="Pharma AI Logo"
            width={50}
            height={40}
            className="mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 mt-6">
        <img
          src="/icons/pills.svg"
          alt="Icon 1"
          className="w-6 h-6 hover:opacity-70 cursor-pointer"
        />
        <img
          src="/icons/pharmacy-symbol.svg"
          alt="Icon 2"
          className="w-6 h-6 hover:opacity-70 cursor-pointer"
        />
        <img
          src="/icons/menu-burger.svg"
          alt="Icon 3"
          className="w-6 h-6 hover:opacity-70 cursor-pointer"
        />
      </div>
    </div>
  );
};



export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold">PHARMA.AI</h1>
      </main>
    </div>
  );
}




