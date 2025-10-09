 import React from 'react'
import MeetingCard from './MeetingCard';


 const demoMeetings = [
  {
    title: "Board Meeting",
    time: "10:00 AM - 12:00 PM",
    description: "Strategic Planning Overview...",
    location: "Conference Room A",
    buttonText: "Join Meeting"
  },
  {
    title: "Investor Update",
    time: "2:00 PM - 3:30 PM",
    description: "Discussing financial growth and projections...",
    location: "Zoom Meeting",
    buttonText: "View Details"
  },
  {
    title: "Team Sync",
    time: "4:00 PM - 5:00 PM",
    description: "Monthly team progress review...",
    location: "Conference Room B",
    buttonText: "View Details"
  },
  {
    title: "Team Sync",
    time: "4:00 PM - 5:00 PM",
    description: "Monthly team progress review...",
    location: "Conference Room B",
    buttonText: "View Details"
  },
  {
    title: "Team Sync",
    time: "4:00 PM - 5:00 PM",
    description: "Monthly team progress review...",
    location: "Conference Room B",
    buttonText: "View Details"
  },
  {
    title: "Team Sync",
    time: "4:00 PM - 5:00 PM",
    description: "Monthly team progress review...",
    location: "Conference Room B",
    buttonText: "View Details"
  },
  {
    title: "Team Sync",
    time: "4:00 PM - 5:00 PM",
    description: "Monthly team progress review...",
    location: "Conference Room B",
    buttonText: "View Details"
  },
];
 
 export default function MeetingList() {
   return (
     <div className='   mt-5 max-h-[650px] overflow-y-auto'>
        <div className=' flex flex-col gap-4 mr-3'>

        {
            demoMeetings.map((meeting,index)=>(
                <MeetingCard
                key={index}
                title={meeting.title}
                time={meeting.time}
                description={meeting.description}
                location={meeting.location}
                buttonText={meeting.buttonText}
                />
            ))
        }
        </div>
     </div>
   )
 }
 