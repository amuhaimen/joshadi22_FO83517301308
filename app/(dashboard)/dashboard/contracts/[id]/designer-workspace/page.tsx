import DropDown from "@/public/icons/DropDown";
import p1 from "@/public/uiuxImages/ui1.png";
import p2 from "@/public/uiuxImages/ui2.png";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import SectionHeaderWidget from "../../../../_components/reusable/SectionHeaderWidget";

export default function UiUxDesigner() {
  return (
    <div>
      <SectionHeaderWidget
        title={"UI/UX Designer Dashboard"}
        breadcrumb={""}
        viewAll={true}
        addWidget={true}
      />
      <div className="flex flex-col md:flex-row mt-6 gap-2 mb-6">
        <div className=" bg-gradient-to-br from-black/10  to-[#191919] rounded-[16px]  p-2 relative ">
          <div className="w-full md:max-w-[320px] lg:max-w-[380px] xl:max-w-[600px]  ">
            <Image src={p1} alt={"picture 1"} className=" rounded-[16px] " />
          </div>
          <div className="absolute bg-[#191919] hover:cursor-pointer rounded-full w-8 h-8 top-2 right-2 z-20">
            <RxCross2 className="text-red-500 mx-auto h-full" />
          </div>
        </div>
        <div className=" w-full bg-gradient-to-br from-black/10  to-[#191919] rounded-[16px]  p-2 relative ">
          <div className="w-full ">
            <Image src={p2} alt={"picture 2"} className="rounded-[16px] " />
          </div>
          <div className="absolute bg-[#191919] hover:cursor-pointer rounded-full w-8 h-8 top-2 right-2 z-20">
            <RxCross2 className="text-red-500 mx-auto h-full" />
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-br from-black/15  to-[#191919] rounded-[16px] p-4 flex flex-col">
        <div className="flex justify-between">
          <span className="justify-start text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">
            Upcoming Milestones
          </span>
          <button className="cursor-pointer h-8 px-4 py-2 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-700 inline-flex flex-col justify-center items-center gap-1.5">
            <div className="  inline-flex justify-start items-center gap-1">
              <div className="  text-nowrap justify-start text-gray-200 text-[10px] font-normal font-Urbanist leading-[10px]">
                This Week
              </div>
              <DropDown />
            </div>
          </button>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-5xl outline-1 outline-[#3a3a3b] mt-5 rounded-2xl  ">
            <thead>
              <tr>
                <th className="rounded-tl-2xl outline-[1px] outline-[#3a3a3b]  px-3 py-6  text-start text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">
                  10 Aug 2025
                </th>
                <th className="outline-[1px] outline-[#3a3a3b] px-3 py-6  text-start text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">
                  15 Aug 2025
                </th>
                <th className="outline-[1px] outline-[#3a3a3b] px-3 py-6  text-start text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">
                  25 Aug 2025
                </th>
                <th className="rounded-tr-2xl outline-[1px] outline-[#3a3a3b] px-3 py-6  text-start text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">
                  30 Aug 2025
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="rounded-bl-2xl outline-[1px] outline-[#3a3a3b] bg-[#1F1F1F] py-5 px-3">
                  {/* cards  */}
                  <div className="  py-2 px-3 rounded-[8px] outline-[1px] outline-[#3a3a3b] gap-2 flex flex-col">
                    <div className="flex itams-start justify-between">
                      <span className="  text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">
                        Final prototype ready
                      </span>
                    </div>
                    <div className="text-left justify-start text-zinc-400 text-xs font-normal font-Urbanist leading-snug">
                      For dev handoff
                    </div>
                  </div>
                </td>
                <td className="  outline-[1px] outline-[#3a3a3b] bg-[#1F1F1F] py-5 px-3">
                  {/* cards  */}
                  <div className="  py-2 px-3 rounded-[8px] outline-[1px] outline-[#3a3a3b] gap-2 flex flex-col">
                    <div className="flex itams-start justify-between">
                      <span className="  text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">
                        Design QA with developers
                      </span>
                    </div>
                    <div className="text-left justify-start text-zinc-400 text-xs font-normal font-Urbanist leading-snug">
                      Fix minor issues
                    </div>
                  </div>
                </td>
                <td className="  outline-[1px] outline-[#3a3a3b] bg-[#1F1F1F] py-5 px-3">
                  {/* cards  */}
                  <div className="  py-2 px-3 rounded-[8px] outline-[1px] outline-[#3a3a3b] gap-2 flex flex-col">
                    <div className="flex itams-start justify-between">
                      <span className="  text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">
                        Design QA with developers
                      </span>
                    </div>
                    <div className="text-left justify-start text-zinc-400 text-xs font-normal font-Urbanist leading-snug">
                      Fix minor issues
                    </div>
                  </div>
                </td>
                <td className="rounded-br-2xl outline-[1px] outline-[#3a3a3b] bg-[#1F1F1F] py-5 px-3">
                  {/* cards  */}
                  <div className="  py-2 px-3 rounded-[8px] outline-[1px] outline-[#3a3a3b] gap-2 flex flex-col">
                    <div className="flex itams-start justify-between">
                      <span className="  text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">
                        Final prototype ready
                      </span>
                    </div>
                    <div className="text-left justify-start text-zinc-400 text-xs font-normal font-Urbanist leading-snug">
                      For dev handoff
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
