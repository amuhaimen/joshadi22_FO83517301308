"use client";
 
import React, { ReactNode, useState } from "react";
import TimeKeepingTable from "./_components/TimeKeepingTable";
import FinancialSum from "./_components/FinancialSum";
 



export default function page() {
  
  return (
    <div>
      <div className=" grid grid-cols-3 gap-6   p-6 -mt-6 bg-[#1F1F1F]">
        <div className="   pb-3 col-span-2  ">
      {/* table */}
        
    <TimeKeepingTable/>
          {/* charts */}

        <div className=" flex text-white mt-6 gap-6" >
              <div className=" flex-1 bg-[#151515]">1</div>
              <div className=" flex-1 bg-[#151515]">2</div>
        </div>
        </div>
        <div className="">
         <FinancialSum/>
        </div>
      </div>
    </div>
  );
}
