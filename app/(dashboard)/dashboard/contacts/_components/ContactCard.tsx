import React from 'react'

export default function ContactCard() {
  return (
    <div className='  bg-[#1c1c1a] p-5  grid grid-cols-3 gap-6 mt-5'>

    <div className='   bg-[#202020] p-5  rounded-2xl border border-[#2c6a4b]'>
        <h3 className=' text-2xl text-white font-semibold mb-2'>Acme Redesign</h3>
        <p className=' text-lg text-white mb-4'>Jan 10 - Apr 30</p>
        <p className=' contact_card_timeline_bg py-2.5 px-3  border border-[#2c6a4b] rounded-[10px] inline-block text-white text-base font-semibold mb-3'>Update timeline</p>
        <div>
            <p className=' text-white text-base mb-6'>Received a message</p>
        </div>
        <h4 className=' text-[#21AF68] text-2xl font-semibold'>$12.500</h4>
    </div>
    <div className='   bg-[#202020] p-5  rounded-2xl border border-[#2c6a4b]'>
        <h3 className=' text-2xl text-white font-semibold mb-2'>Acme Redesign</h3>
        <p className=' text-lg text-white mb-4'>Jan 10 - Apr 30</p>
        <p className=' contact_card_timeline_bg py-2.5 px-3  border border-[#2c6a4b] rounded-[10px] inline-block text-white text-base font-semibold mb-3'>Update timeline</p>
        <div>
            <p className=' text-white text-base mb-6'>Received a message</p>
        </div>
        <h4 className=' text-[#21AF68] text-2xl font-semibold'>$12.500</h4>
    </div>
    <div className='   bg-[#202020] p-5  rounded-2xl border border-[#2c6a4b]'>
        <h3 className=' text-2xl text-white font-semibold mb-2'>Acme Redesign</h3>
        <p className=' text-lg text-white mb-4'>Jan 10 - Apr 30</p>
        <p className=' contact_card_timeline_bg py-2.5 px-3  border border-[#2c6a4b] rounded-[10px] inline-block text-white text-base font-semibold mb-3'>Update timeline</p>
        <div>
            <p className=' text-white text-base mb-6'>Received a message</p>
        </div>
        <h4 className=' text-[#21AF68] text-2xl font-semibold'>$12.500</h4>
    </div>
    </div>
  )
}
