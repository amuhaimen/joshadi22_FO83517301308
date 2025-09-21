import React from "react";
import Image from "next/image";
import cropImg from "@/public/ui-designer-profile/icons/crop.svg";
import xyzImg from "@/public/ui-designer-profile/icons/xyz.svg";
import defImg from "@/public/ui-designer-profile/icons/def.svg";
import ghiImg from "@/public/ui-designer-profile/icons/Ghi.svg";

export default function InvestorProfileBottom() {
  return (
    <div className=" flex flex-col lg:flex-row items-start gap-4 mt-6">
      {/* =========================== one =========================== */}
      <div className=" bg-[#161616] py-4 px-6 flex-1 text-white rounded-3xl space-y-6 w-full">
        {/* one */}
        <div>
          <h2 className=" text-white text-xl font-semibold">
            Former and Active Contracts
          </h2>
          <div className=" flex flex-col lg:flex-row items-center gap-4   mt-1  ">
            <div className=" bg-[#313131]/20 border border-[#5c5c5c] py-4 px-3  flex items-center gap-3 rounded-[10px] flex-1 w-full">
              <div className="ui_profile_icons_bg p-[10px] rounded-full">
                <Image src={cropImg} alt="crop img" />
              </div>
              <div>
                <h3 className=" text-base text-white font-semibold">
                  Alpha Ventures
                </h3>
                <p className=" text-white text-base">Lead Investor</p>
              </div>
            </div>
            <div className=" bg-[#313131]/20 border border-[#5c5c5c] py-4 px-3  flex items-center gap-3 rounded-[10px] flex-1 w-full">
              <div className="ui_profile_icons_bg p-[10px] rounded-full">
                <Image src={xyzImg} alt="xyz img" />
              </div>
              <div>
                <h3 className=" text-base text-white font-semibold">
                  Zenith Fund
                </h3>
                <p className=" text-white text-base">Senior Advisor</p>
              </div>
            </div>
          </div>
        </div>
        {/* two */}
        <div>
          <h2 className=" text-white text-xl font-semibold">
            Former Experience
          </h2>
          <div className=" flex flex-col lg:flex-row items-center gap-4   mt-1">
            <div className=" bg-[#313131]/20 border border-[#5c5c5c] py-4 px-3  flex items-center gap-3 rounded-[10px] flex-1 w-full">
              <div className="ui_profile_icons_bg p-[10px] rounded-full">
                <Image src={defImg} alt="def img" />
              </div>
              <div>
                <h3 className=" text-base text-white font-semibold">DEF lnc</h3>
                <p className=" text-white text-base">Portfolio Manager</p>
              </div>
            </div>
            <div className=" bg-[#313131]/20 border border-[#5c5c5c] py-4 px-3  flex items-center gap-3 rounded-[10px] flex-1 w-full">
              <div className="ui_profile_icons_bg p-[10px] rounded-full">
                <Image src={ghiImg} alt="ghi img" />
              </div>
              <div>
                <h3 className=" text-base text-white font-semibold">GHI Ltd</h3>
                <p className=" text-white text-base">Summit Investments</p>
              </div>
            </div>
          </div>
        </div>
        {/* three */}
        <div>
          <h2 className=" text-white text-xl font-semibold">Skills</h2>
          <ul className=" space-y-1 mt-3">
            <li className=" flex items-center gap-2">
              <span className=" w-1.5 h-1.5 bg-[#3FD98B] rounded-full"></span>
              <p className=" text-[#D2D2D5] text-base">Financial Modeling</p>
            </li>
            <li className=" flex items-center gap-2">
              <span className=" w-1.5 h-1.5 bg-[#3FD98B] rounded-full"></span>
              <p className=" text-[#D2D2D5] text-base">Risk Management</p>
            </li>
            <li className=" flex items-center gap-2">
              <span className=" w-1.5 h-1.5 bg-[#3FD98B] rounded-full"></span>
              <p className=" text-[#D2D2D5] text-base">
                Market Research & Analysis
              </p>
            </li>
            <li className=" flex items-center gap-2">
              <span className=" w-1.5 h-1.5 bg-[#3FD98B] rounded-full"></span>
              <p className=" text-[#D2D2D5] text-base">
                Portfolio Diversification
              </p>
            </li>
            <li className=" flex items-center gap-2">
              <span className=" w-1.5 h-1.5 bg-[#3FD98B] rounded-full"></span>
              <p className=" text-[#D2D2D5] text-base">
                Venture Capital & Private Equity
              </p>
            </li>
            <li className=" flex items-center gap-2">
              <span className=" w-1.5 h-1.5 bg-[#3FD98B] rounded-full"></span>
              <p className=" text-[#D2D2D5] text-base">
                Negotiation & Deal Structuring
              </p>
            </li>
          </ul>
        </div>
        {/* four */}
        <div>
          <h2 className=" text-white text-xl font-semibold">Certifications</h2>
          <div className="mt-3 flex flex-col lg:flex-row justify-center items-center gap-4 ">
            <div className="py-4 px-3 common_btn_bg border border-[#276d4a] rounded-[10px] text-center flex-1 w-full">
              <h2 className="text-white text-base font-semibold">
                Chartered Financial Analyst (CFA)
              </h2>
              <p className="text-[#E9E9EA] text-sm">2025</p>
            </div>
            <div className="py-4 px-3 common_btn_bg border border-[#276d4a] rounded-[10px] text-center flex-1 w-full">
              <h2 className="text-white text-base font-semibold">
                Certified Investment Manager
              </h2>
              <p className="text-[#E9E9EA] text-sm">2025</p>
            </div>
            <div className="py-4 px-3 common_btn_bg border border-[#276d4a] rounded-[10px] text-center flex-1 w-full">
              <h2 className="text-white text-base font-semibold">
                Risk Management Certification
              </h2>
              <p className="text-[#E9E9EA] text-sm">2025</p>
            </div>
          </div>
        </div>
      </div>
      {/*========================== two =============================== */}
      <div className=" bg-[#161616] py-4 px-6  flex-1 text-white rounded-3xl w-full">
        <div>
          <h2 className=" text-xl text-white font-semibold">Work Experience</h2>
          {/* one */}
          <div className=" mt-2">
            <h3 className=" text-lg text-white font-semibold">
              Senior Investment Manager
            </h3>
            <p className=" text-[#D2D2D5] text-base mt-2">
              Global Growth Partners | Jan 2015 – Present
            </p>
            <ul className=" list-disc list-outside ml-6 space-y-1 mt-2">
              <li className=" text-[#D2D2D5] text-base">
                Manage a portfolio of high-value investments across multiple{" "}
                <br /> industries.
              </li>
              <li className=" text-[#D2D2D5] text-base">
                Lead funding rounds for early-stage startups and scale-ups.
              </li>
              <li className=" text-[#D2D2D5] text-base">
                Analyze financial reports, business models, and market dynamics{" "}
                <br /> before investment.
              </li>
              <li className=" text-[#D2D2D5] text-base">
                Build strong networks with entrepreneurs, founders, and other{" "}
                <br /> investors.
              </li>
              <li className=" text-[#D2D2D5] text-base">
                Optimize risk-adjusted returns and ensure sustainable portfolio{" "}
                <br /> growth.
              </li>
            </ul>
          </div>
          <div className=" mt-2">
            <h3 className=" text-lg text-white font-semibold">Key skills</h3>

            <ul className=" list-disc list-outside ml-6 space-y-1 mt-2">
              <li className=" text-[#D2D2D5] text-base">
                Venture Capital Strategy
              </li>
              <li className=" text-[#D2D2D5] text-base">
                Private Equity Deals
              </li>
              <li className=" text-[#D2D2D5] text-base">Strategic Planning</li>
              <li className=" text-[#D2D2D5] text-base">
                Cross-border Investments
              </li>
            </ul>
          </div>
          <div className=" mt-2">
            <h3 className=" text-lg text-white font-semibold">
              Additional Achievements
            </h3>

            <ul className=" list-disc list-outside ml-6 space-y-1 mt-2">
              <li className=" text-[#D2D2D5] text-base">
                Successfully led funding for 20+ startups, 12 of which scaled
                beyond Series C.
              </li>
              <li className=" text-[#D2D2D5] text-base">
                Increased portfolio ROI by 40% over the past 3 years.
              </li>
              <li className=" text-[#D2D2D5] text-base">
                Featured as a guest speaker at Global Investment Summit 2024.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
