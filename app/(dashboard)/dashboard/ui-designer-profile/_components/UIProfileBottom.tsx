import React from "react";
import cropImg from "@/public/ui-designer-profile/icons/crop.svg";
import xyzImg from "@/public/ui-designer-profile/icons/xyz.svg";
import defImg from "@/public/ui-designer-profile/icons/def.svg";
import ghiImg from "@/public/ui-designer-profile/icons/Ghi.svg";
import xdImg from "@/public/ui-designer-profile/images/xd.png";
import figmaImg from "@/public/ui-designer-profile/images/figma.png";
import sketchImg from "@/public/ui-designer-profile/images/sketch.png";
import Image from "next/image";

export default function UIProfileBottom() {
  return (
    <div className=" flex items-start gap-4 mt-6">
      <div className=" bg-[#161616] py-4 px-6 flex-1 text-white rounded-3xl space-y-6">
        {/* one */}
        <div>
          <h2 className=" text-white text-xl font-semibold">
            Former and Active Contracts
          </h2>
          <div className=" flex items-center gap-4   mt-1">
            <div className=" bg-[#313131]/20 border border-[#5c5c5c] py-4 px-3  flex items-center gap-3 rounded-[10px] flex-1">
              <div className="ui_profile_icons_bg p-[10px] rounded-full">
                <Image src={cropImg} alt="crop img" />
              </div>
              <div>
                <h3 className=" text-base text-white font-semibold">
                  ABC corp
                </h3>
                <p className=" text-white text-base">Lead UX Designer</p>
              </div>
            </div>
            <div className=" bg-[#313131]/20 border border-[#5c5c5c] py-4 px-3  flex items-center gap-3 rounded-[10px] flex-1">
              <div className="ui_profile_icons_bg p-[10px] rounded-full">
                <Image src={xyzImg} alt="xyz img" />
              </div>
              <div>
                <h3 className=" text-base text-white font-semibold">
                  XYZ Agency
                </h3>
                <p className=" text-white text-base">Senior UX Designer</p>
              </div>
            </div>
          </div>
        </div>
        {/* two */}
        <div>
          <h2 className=" text-white text-xl font-semibold">
            Former Experience
          </h2>
          <div className=" flex items-center gap-4   mt-1">
            <div className=" bg-[#313131]/20 border border-[#5c5c5c] py-4 px-3  flex items-center gap-3 rounded-[10px] flex-1">
              <div className="ui_profile_icons_bg p-[10px] rounded-full">
                <Image src={defImg} alt="def img" />
              </div>
              <div>
                <h3 className=" text-base text-white font-semibold">DEF lnc</h3>
                <p className=" text-white text-base">Lead UX Designer</p>
              </div>
            </div>
            <div className=" bg-[#313131]/20 border border-[#5c5c5c] py-4 px-3  flex items-center gap-3 rounded-[10px] flex-1">
              <div className="ui_profile_icons_bg p-[10px] rounded-full">
                <Image src={ghiImg} alt="ghi img" />
              </div>
              <div>
                <h3 className=" text-base text-white font-semibold">GHI Ltd</h3>
                <p className=" text-white text-base">Senior UX Designer</p>
              </div>
            </div>
          </div>
        </div>
        {/* three */}
        <div>
          <h2 className=" text-white text-xl font-semibold">Skills</h2>
          <div className=" flex items-center gap-7 mt-3">
            <div className=" flex flex-col items-center px-7">
              <Image src={xdImg} alt=" xd logo" />
              <h2 className=" text-base text-white font-semibold mt-3">
                Adobe XD
              </h2>
            </div>
            <div className=" flex flex-col items-center px-7">
              <Image src={figmaImg} alt=" figma logo" />
              <h2 className=" text-base text-white font-semibold mt-3">
                Figma
              </h2>
            </div>
            <div className=" flex flex-col items-center px-7">
              <Image src={sketchImg} alt=" sketch logo " />
              <h2 className=" text-base text-white font-semibold mt-3">
                Sketch
              </h2>
            </div>
          </div>
        </div>
        {/* four */}
        <div>
          <h2 className=" text-white text-xl font-semibold">Certifications</h2>
          <div className="mt-3 flex justify-center items-center gap-4">
            <div className="py-4 px-3 common_btn_bg border border-[#276d4a] rounded-[10px] text-center flex-1">
              <h2 className="text-white text-base font-semibold">
                Certified UX <br /> Designer
              </h2>
              <p className="text-[#E9E9EA] text-sm">2025</p>
            </div>
            <div className="py-4 px-3 common_btn_bg border border-[#276d4a] rounded-[10px] text-center flex-1">
              <h2 className="text-white text-base font-semibold">
                Certified UX <br /> Designer
              </h2>
              <p className="text-[#E9E9EA] text-sm">2025</p>
            </div>
            <div className="py-4 px-3 common_btn_bg border border-[#276d4a] rounded-[10px] text-center flex-1">
              <h2 className="text-white text-base font-semibold">
                Certified UX <br /> Designer
              </h2>
              <p className="text-[#E9E9EA] text-sm">2025</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#161616] py-4 px-6  flex-1 text-white rounded-3xl">
        2
      </div>
    </div>
  );
}
