"use client";
import React from "react";
import { useRouter } from "next/navigation";
import DevIcon from "@/public/welcome/icons/DevIcon";
import GrowthIcon from "@/public/welcome/icons/GrowthIcon";
import IdeaIcon from "@/public/welcome/icons/IdeaIcon";
import PenScaleIcon from "@/public/welcome/icons/PenScaleIcon";
import SearchIcon from "@/public/welcome/icons/SearchIcon";
import SettingsIcon from "@/public/welcome/icons/SettingsIcon";

export default function WelcomePage() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/role-questions");
  };

  return (
    <div className="main_bg flex justify-center items-center  h-screen">
      <div className="w-full max-w-screen-xl px-4 sm:px-6">
        {/* header */}
        <div className="text-center pb-7 sm:pb-9 lg:pb-11">
          <h1 className="text-3xl sm:text-4xl lg:text-[72px] text-white font-semibold">
            Welcome to Devclock
          </h1>
          <p className="text-lg sm:text-2xl lg:text-2xl font-medium text-[#21AF68]">
            Core Features
          </p>
        </div>
        {/* cards */}
        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-10">
          {/* Left Cards */}
          <div className="space-y-3 lg:space-y-10 flex-1">
            <div className="flex items-start gap-4 lg:gap-5 welcome_card_bg border border-[#5c5c5c] p-2 lg:p-3 rounded-[10px]">
              <IdeaIcon />
              <div>
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold">
                  Ideation & Strategy
                </h3>
                <p className="text-base sm:text-xl lg:text-2xl text-[#21AF68] font-medium">
                  The Visionary
                </p>
                <p className="text-sm sm:text-lg lg:text-xl text-[#D2D2D5] break-words">
                  Spot opportunities, define project goals
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5 welcome_card_bg border border-[#5c5c5c] p-2 lg:p-3 rounded-[10px]">
              <DevIcon />
              <div>
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold whitespace-nowrap">
                  Development & Engineering
                </h3>
                <p className="text-base sm:text-xl lg:text-2xl text-[#21AF68] font-medium">
                  The Builder
                </p>
                <p className="text-sm sm:text-lg lg:text-xl text-[#D2D2D5] break-words">
                  Write code, integrate systems
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5 welcome_card_bg border border-[#5c5c5c] p-2 lg:p-3 rounded-[10px]">
              <SettingsIcon />
              <div>
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold">
                  Operations & Scaling
                </h3>
                <p className="text-base sm:text-xl lg:text-2xl text-[#21AF68] font-medium">
                  The Operator
                </p>
                <p className="text-sm sm:text-lg lg:text-xl text-[#D2D2D5] break-words">
                  Maintain systems Operations
                </p>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="space-y-3 lg:space-y-10 flex-1">
            <div className="flex items-start gap-4 lg:gap-5 welcome_card_bg border border-[#5c5c5c] p-2 lg:p-3 rounded-[10px]">
              <PenScaleIcon />
              <div>
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold">
                  Design & Prototyping
                </h3>
                <p className="text-base sm:text-xl lg:text-2xl text-[#21AF68] font-medium">
                  The Creator
                </p>
                <p className="text-sm sm:text-lg lg:text-xl text-[#D2D2D5] break-words">
                  Translate ideas into wireframes, Design
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5 welcome_card_bg border border-[#5c5c5c] p-2 lg:p-3 rounded-[10px]">
              <SearchIcon />
              <div>
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold">
                  Quality & Testing
                </h3>
                <p className="text-base sm:text-xl lg:text-2xl text-[#21AF68] font-medium">
                  The Analyst
                </p>
                <p className="text-sm sm:text-lg lg:text-xl text-[#D2D2D5] break-words">
                  Spot opportunities, define project goals
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 lg:gap-5 welcome_card_bg border border-[#5c5c5c] p-2 lg:p-3 rounded-[10px]">
              <GrowthIcon />
              <div>
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold">
                  Growth & Support
                </h3>
                <p className="text-base sm:text-xl lg:text-2xl text-[#21AF68] font-medium">
                  The Connector
                </p>
                <p className="text-sm sm:text-lg lg:text-xl text-[#D2D2D5] break-words">
                  Handle marketing, improve Support
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Next Button - Bottom Right */}
        <div className=" flex justify-end mt-10">
          <button
            onClick={handleNext}
            className="px-8 py-3 bg-[#21AF68] text-white font-semibold rounded-lg hover:bg-[#1e9c5e] transition-colors duration-300 shadow-lg cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
