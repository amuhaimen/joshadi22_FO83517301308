import React from 'react'
import InvestmentCard from './_components/InvestmentCard'

export default function page() {
  return (
    <div>
      {/* header */}
      <div>
        <h2 className=' text-white text-[32px] font-medium'>Investment Ideas Overview</h2>
         <div className=' text-sm text-[#A5A5AB] font-medium flex items-center gap-2'>
          <p >Job search</p>
          <p>Investment Ideas</p>

         </div>
      </div>
      {/* investment cards */}
      <div className=' bg-[#161616] p-4 rounded-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>

      <InvestmentCard/>
      <InvestmentCard/>
      <InvestmentCard/>

      </div>
    </div>
  )
}
