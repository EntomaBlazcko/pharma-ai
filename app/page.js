import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "../public/components/Sidebar";
import Navbar from "../public/components/Navbar";
import MedicineCard from "../public/components/Medicine-Card";
import RelatedItems from "../public/components/RelatedItems";




export default function Home() {
  return (
    <div className=" bg-[#f5f0e7]">

<div className="pt-20">
  {/* Your page content here */}
  <Navbar />
</div>

<div className="ml-20">
<Sidebar />
</div>


    </div>
  );
}


