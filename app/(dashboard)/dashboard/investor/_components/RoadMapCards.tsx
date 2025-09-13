 import React from 'react'
import RoadMapCard from './RoadMapCard'
 
 export default function RoadMapCards() {
   return (
     <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <RoadMapCard/>
      <RoadMapCard/>
      <RoadMapCard/>
     </div>
   )
 }
 