 
import React from 'react'
import UIProfileTop from './_components/UIProfileTop'
import UIProfileBottom from './_components/UIProfileBottom'

 

export default function page() {
  return (
    <div className=' bg-[#1F1F1F] py-8 px-6 -mt-6'>
      {/* first part */}
     <UIProfileTop/>


      {/* second part */}
      <UIProfileBottom/>
      
    </div>
  )
}
