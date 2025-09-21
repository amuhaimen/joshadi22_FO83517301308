import Image from 'next/image'
import React from 'react'
import profileImg from '@/public/ui-designer-profile/images/profile-pic.png'

export default function UIProfileTop() {
  return (
    <div className=' flex flex-col lg:flex-row lg:items-end gap-3.5 lg:gap-36'>
      <div className=' flex items-center gap-6'>
        <div>
          <Image src={profileImg} alt=' profile img' className=' rounded-full'/>
        </div>
        <div>
          <h2 className=' text-white text-[32px] font-semibold mb-2'>Theresa Morgan</h2>
          <h3 className=' text-[#E9E9EA] text-2xl mb-1'>Quantum Tech</h3>
          <p className=' text-[#E9E9EA] text-sm '>San Francisco, CA</p>
        </div>

      </div>
        <p className=' text-[#E9E9EA] text-base font-medium'>$100:00 /Hour</p>
      </div>
  )
}
