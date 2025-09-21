import Image from 'next/image'
import React from 'react'
import profileImg from '@/public/investorProfile/images/profile-img.png'

export default function InvestorProfileTop() {
  return (
   
      <div className=' flex items-center gap-6'>
        <div>
          <Image src={profileImg} alt=' profile img' className=' rounded-full'/>
        </div>
        <div>
          <h2 className=' text-white text-[32px] font-semibold mb-2'>Jonathan Miller</h2>
          <h3 className=' text-[#E9E9EA] text-2xl mb-1'>Horizon Capital</h3>
          <p className=' text-[#E9E9EA] text-sm '>New York, USA</p>
        </div>

      </div>
      
     
  )
}
