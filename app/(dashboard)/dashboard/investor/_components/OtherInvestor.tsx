import React from "react";
import InvestorCard from "./InvestorCard";
import investorImg1 from '@/public/investor/image/investor-1.png'
import investorImg2 from '@/public/investor/image/investor-2.png'
import investorImg3 from '@/public/investor/image/investor-3.png'
import investorImg4 from '@/public/investor/image/investor-4.png'
// import investorImg5 from '@/public/investor/image/investor-5.png'
// import investorImg6 from '@/public/investor/image/investor-6.png'
// import investorImg7 from '@/public/investor/image/investor-7.png'
 



const demoInvestors = [
  {
    investorName: "Acme Ventures",
    equity: "8.0%",
    status: "active",  // 'active' or 'inactive'
    imageUrl:  investorImg1
  },
  {
    investorName: "Beta Investments",
    equity: "5.0%",
    status: "inactive",  // 'active' or 'inactive'
    imageUrl: investorImg2
  },
  {
    investorName: "Gamma Holdings",
    equity: "12.5%",
    status: "active",  // 'active' or 'inactive'
    imageUrl: investorImg3
  },
  {
    investorName: "Delta Capital",
    equity: "4.5%",
    status: "inactive",  // 'active' or 'inactive'
    imageUrl: investorImg4
  }
];

 

export default function OtherInvestor() {
  return (
    <div className="bg-[#161616] p-4 rounded-3xl">
      <div className=" flex justify-between items-center">
        <h2 className=" text-[20px] font-semibold text-white cursor-pointer">
          Other Investors
        </h2>
        <button className=" common_btn_bg px-3 cursor-pointer py-2 text-md font-semibold text-white rounded-[10px]">
          View All
        </button>
      </div>

<div className=" p-4 bg-[#191919]  rounded-2xl mt-4 border border-[#1F1F1F] flex flex-col gap-4  h-[970.5px]  overflow-y-auto ">
   {
    demoInvestors.map((investor,index)=>(
      <InvestorCard
      key={index}
        investorName={investor.investorName}
        equity={investor.equity}
        status={investor.status}
        imageUrl={investor.imageUrl}
      />

    ))
   }

</div>
    </div>
  );
}
