import React from 'react'
 import contactsData from './data/contactsData.json'
import ContactCard from './_components/ContactCard'

export default function page() {
  return (
    <div>
        <div>
        <h2 className='text-white text-[32px] font-medium'>Contracts Overview</h2>
        <p className=' text-[#A5A5AB] text-sm font-medium  mt-3'>Apr 22, 2024</p>

        </div>
        <div className=' bg-[#161918] p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 rounded-2xl'>
       {
        contactsData.map((item,index)=>(
            <ContactCard 
                key={index} 
                title={item.title ?? ''} 
                dateRange={item.dateRange ?? ''} 
                timelineStatus={item.timelineStatus ?? ''} 
                message={item.message ?? ''} 
                amount={item.amount ?? ''}  
                statusType={item.statusType ?? ''} 
            />
        ))
       }

        </div>
    </div>
  )
}
