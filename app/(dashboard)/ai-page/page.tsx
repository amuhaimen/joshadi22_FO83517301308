"use client";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewProjectPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Search for:", searchTerm);
    // Add your search logic here
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className=" ai_bg_page relative">
      <Link href='/' className=" text-black hover:bg-white/80 active:bg-white/60 absolute top-6 left-6 cursor-pointer flex items-center gap-2.5 border  py-2 px-5 rounded-xl bg-white transition-all ease-in-out text-base font-medium">
        <ArrowLeft /> Back
      </Link>

      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full   text-center">
          {/* Main Heading */}
          <h1 className="  sm:text-6xl md:text-7xl lg:text-8xl font-medium lg:font-semibold text-white    ">
            New project
          </h1>

          {/* Subtitle */}
          <p className=" text-white text-[32px] font-medium mt-5 mb-[60px]">
            Join millions of projects being worked on already!
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto">
            <div className="flex items-center border border-[#40D98B] rounded-lg py-3 pl-6 pr-3  ai_input_bg">
              <input
                type="text"
                placeholder="Search term"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1  text-lg text-white bg-transparent placeholder-white focus:outline-none  placeholder:text-2xl"
              />
              <button
                onClick={handleSearch}
                className="   ai_btn_bg text-white text-lg font-semibold rounded-xl transition-colors duration-200 focus:outline-none py-4 px-9 cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
