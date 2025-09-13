import React from 'react'
 
import GreenMark from '@/public/icons/GreenMark';
import CrossIcon from '@/public/icons/CrossIcon';
import ProjectTable from '../../DashboardTable';
 

export default function FeaturedProject() {

 const projects = [
    {
      name: 'Landing Page Analyst',
      assigneeCount: 13,
      issueType: <GreenMark/>,
      progress: 25,
      dueDate: 'Aug 11, 2025',
      status: 'On Going',
    },
    {
      name: 'Website Redesign',
      assigneeCount: 8,
         issueType: <GreenMark/>,
      progress: 85,
      dueDate: 'Apr 01, 2025',
      status: 'Unfinished',
    },
    {
      name: 'UX Evaluation',
      assigneeCount: 5,
      issueType: <GreenMark/>,
      progress: 12,
      dueDate: 'Sep 21, 2025',
      status: 'On Going',
    },
    {
      name: 'Rebranding',
      assigneeCount: 2,
         issueType: <CrossIcon/>,
      progress: 100,
      dueDate: 'May 18, 2025',
      status: 'Complete',
    },
  ];

  return (
    <div className=' text-white  mt-6 '>

      <h2 className=' text-2xl font-semibold'>Featured Projects</h2>
      <div className=' bg-[#141414]  mt-4 rounded-t-3xl'>
        <div className=' flex justify-end pr-4 sm:pr-6 md:pr-8 pt-2'>
          <button className='header_buttons_bg py-2 px-3 rounded-[10px] cursor-pointer whitespace-nowrap'>View All Projects</button>
        </div>
        <ProjectTable projects={projects} />
      </div>
    </div>
  )
}
