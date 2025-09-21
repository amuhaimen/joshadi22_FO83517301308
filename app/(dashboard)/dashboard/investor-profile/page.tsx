import React from 'react'
import InvestorProfileTop from './_components/InvestorProfileTop'
import InvestorProfileBottom from './_components/InvestorProfileBottom'

export default function page() {
  return (
    <div className=' bg-[#1F1F1F] py-8 px-6 -mt-6'>
        {/* one */}
        <InvestorProfileTop/>
        {/* two */}
        <InvestorProfileBottom/>
    </div>
  )
}
