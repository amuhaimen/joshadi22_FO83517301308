import InvestmentIdeaCardIcon from "@/public/investment-ideas/icons/InvestmentIdeaCardIcon";
import InvestmentIcon from "@/public/sidebar/icons/InvestmentIcon";
import React from "react";

export default function InvestmentCard() {
  return (
    <div className=" bg-[#1F1F1F] border border-[#3FD98B] p-6 rounded-2xl ">
    
        <div className="">
          <p className="inline-block text-base text-white font-semibold py-[10px] px-3 investment_idea_badge_bg   rounded-[10px] border border-[#3FD98B]">
            Mid-production
          </p>
        </div>
        {/* icon */}
        <div className="  p-[10px]  mt-5 bg-[#232826] inline-block rounded-full">
          <InvestmentIdeaCardIcon />
        </div>

        <h3 className=" text-xl text-white font-semibold mt-4">
          Boby the Solar Farm Expansion Project
        </h3>
        <p className=" text-base text-white mt-3">
          Large-scale renewable energy project expanding solar capacity across
          300 acres
        </p>
        <p className=" text-base text-white mt-3" >
          45 active engineers & contractors Estimated completion in Q4 2026
        </p>

        <h4 className=" text-lg text-[#21AF68] font-semibold mt-5">$10 M $1G0M</h4>
        <button className=" investment_idea_btn_bg text-center py-2.5 rounded-[10px] w-full text-white text-base font-semibold cursor-pointer mt-5">Invest Now</button>
     
    </div>
  );
}
