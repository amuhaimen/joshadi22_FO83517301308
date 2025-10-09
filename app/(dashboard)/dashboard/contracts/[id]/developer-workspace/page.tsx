import teamImg from '@/public/Team2.png';
import React from 'react'
import SectionHeaderWidget from '../../../../_components/reusable/SectionHeaderWidget'
import p1 from '@/public/softwareImages/ss1.png'
import p2 from '@/public/softwareImages/ss2.png'
import Image from 'next/image'
import DropDown from '@/public/icons/DropDown'
import { RxCross2 } from "react-icons/rx";

export default function SoftwareDev() {
  return (
    <div>
      <SectionHeaderWidget title={'Software Engineer Dashboard'} breadcrumb={''} viewAll={true} addWidget={true} />
      <div className='flex flex-col md:flex-row gap-2 mb-6'>
        <div className='w-full bg-gradient-to-br from-black/0  to-[#191919] rounded-[16px]  p-2 relative '>
          <Image src={p1} alt={'picture 1'} className='rounded-[16px]' />
          <div className='absolute bg-[#191919] hover:cursor-pointer rounded-full w-8 h-8 top-2 right-2 z-20'>
            <RxCross2 className='text-red-500 mx-auto h-full' />

          </div>
        </div>
        <div className='w-full bg-gradient-to-br from-black/0  to-[#191919] rounded-[16px]  p-2 relative '>
          <Image src={p2} alt={'picture 1'} className='rounded-[16px]' />
          <div className='absolute bg-[#191919] hover:cursor-pointer rounded-full w-8 h-8 top-2 right-2 z-20'>
            <RxCross2 className='text-red-500 mx-auto h-full' />

          </div>
        </div>
      </div>
      <div className=' bg-gradient-to-br from-black/15  to-[#191919] rounded-[16px] p-4 flex flex-col'>
        <div className='flex justify-between'>
          <span className="justify-start text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">Upcoming Sprint Tasks</span>
          <button className="cursor-pointer h-8 px-4 py-2 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-700 inline-flex flex-col justify-center items-center gap-1.5">
            <div className="w-16 inline-flex justify-start items-center gap-1">
              <div className="w-11 text-nowrap justify-start text-gray-200 text-[10px] font-normal font-Urbanist leading-[10px]">This Week</div>
              <DropDown />
            </div>
          </button>
        </div>
        <div className='w-full overflow-x-auto'>
          <table className='w-full min-w-5xl outline-1 outline-[#3a3a3b] mt-5 rounded-2xl  ' >
          <thead  >
            <tr >
              <th className="rounded-tl-2xl outline-[1px] outline-[#3a3a3b]  px-3 py-6  text-start text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">Monday</th>
              <th className="outline-[1px] outline-[#3a3a3b] px-3 py-6  text-start text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">Tuesday</th>
              <th className="outline-[1px] outline-[#3a3a3b] px-3 py-6  text-start text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">Wednessday</th>
              <th className="rounded-tr-2xl outline-[1px] outline-[#3a3a3b] px-3 py-6  text-start text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">Thursday</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='rounded-bl-2xl outline-[1px] outline-[#3a3a3b] bg-[#1F1F1F] py-5 px-3'>
                {/* cards  */}
                <div className='  py-2 px-3 rounded-[8px] outline-[1px] outline-[#3a3a3b] gap-2 flex flex-col'>
                  <div className='flex itams-start justify-between'>
                    <span className="  text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">DB schema update</span>
                    <div className="w-fit h-[20px] ">
                      <Image src={teamImg} alt={''} height={20} width={80} />
                    </div>
                  </div>
                  <div className="text-left justify-start text-zinc-400 text-xs font-normal font-Urbanist leading-snug">Create new color palette for website.</div>
                </div>
              </td>
              <td className='outline-[1px] outline-[#3a3a3b] bg-[#1F1F1F] py-5 px-3'>
                {/* cards  */}
                <div className='  py-2 px-3 rounded-[8px] outline-[1px] outline-[#3a3a3b] gap-2 flex flex-col'>
                  <div className='flex itams-start justify-between'>
                    <span className="  text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">DB schema update</span>
                    <div className="w-fit h-[20px] ">
                      <Image src={teamImg} alt={''} height={20} width={80} />
                    </div>
                  </div>
                  <div className="text-left justify-start text-zinc-400 text-xs font-normal font-Urbanist leading-snug">Create new color palette for website.</div>
                </div>
              </td>
              <td className='outline-[1px] outline-[#3a3a3b] bg-[#1F1F1F] py-5 px-3'>
                {/* cards  */}
                <div className='  py-2 px-3 rounded-[8px] outline-[1px] outline-[#3a3a3b] gap-2 flex flex-col'>
                  <div className='flex itams-start justify-between'>
                    <span className="  text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">DB schema update</span>
                    <div className="w-fit h-[20px] ">
                      <Image src={teamImg} alt={''} height={20} width={80} />
                    </div>
                  </div>
                  <div className="text-left justify-start text-zinc-400 text-xs font-normal font-Urbanist leading-snug">Create new color palette for website.</div>
                </div>
              </td>
              <td className='rounded-br-2xl outline-[1px] outline-[#3a3a3b] bg-[#1F1F1F] py-5 px-3'>
                {/* cards  */}
                <div className='  py-2 px-3 rounded-[8px] outline-[1px] outline-[#3a3a3b] gap-2 flex flex-col'>
                  <div className='flex itams-start justify-between'>
                    <span className="  text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">DB schema update</span>
                    <div className=" w-fit h-[20px] ">
                      <Image src={teamImg} alt={''} height={20} width={80} />
                    </div>
                  </div>
                  <div className="text-left justify-start text-zinc-400 text-xs font-normal font-Urbanist leading-snug">Create new color palette for website.</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        </div>


      </div>

    </div>
  )
}
