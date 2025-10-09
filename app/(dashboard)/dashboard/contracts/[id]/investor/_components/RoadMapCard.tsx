 import Image from 'next/image';
import React from 'react';

export default function   RoadMapCard () {
  const teamMembers = [
    { id: 1, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face', name: 'John' },
    { id: 2, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face', name: 'Sarah' },
    { id: 3, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face', name: 'Mike' },
    { id: 4, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face', name: 'Lisa' }
  ];

  const phases = [
    { name: 'Concept', completed: true },
    { name: 'Research', completed: true },
    { name: 'Design', completed: false  },
    { name: 'Development', completed: false },
    { name: 'Launch', completed: false }
  ];

  return (
    <div className="    py-4 px-6  bg-[#1c1c1c] rounded-lg  ">
      {/* Header */}
      <div>
        <div className=' flex items-center justify-between '>
            <h3 className=' text-md font-semibold text-white'>European Market Expansion</h3>
            <span className=' text-sm on_track_bg px-2 py-1 rounded-full'>On Track</span>
        </div>
        <div className=' flex items-center gap-1'>
            <p className=' text-sm text-[#E9E9EA]'>Marketing</p>
            <span className='  text-[#E9E9EA] font-medium text-lg'>.</span>
            <p className=' text-sm  text-[#E9E9EA]'>Due May 31, 2025</p>
        </div>

      </div>

      {/* Progress Section */}
      <div className=" mt-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-[#D2D2D5]">Progress</span>
          <span className="text-xs font-bold text-[#D2D2D5]">28%</span>
        </div>
        <div className="w-full bg-[#4A4C56] rounded-full h-2">
          <div className="roadmap_progress_bg h-2 rounded-full" style={{ width: '28%' }}></div>
        </div>
      </div>

      {/* Team and Date */}
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center">
          <div className="flex -space-x-3">
            {teamMembers.map((member) => (
              <Image
                key={member.id}
                src={member.avatar}
                alt={member.name}
                width={108}
                height={28}
                className="w-8 h-8 rounded-full border-2 border-gray-800"
              />
            ))}
          <span className="ml-2 text-sm text-gray-400 bg-gray-700 rounded-full size-7 flex items-center justify-center">
            +3
          </span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-400">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          20 Apr 2025
        </div>
      </div>

      {/* Timeline */}
        <div className="relative mt-4">
        {/* Full width background line */}
        <div className="absolute top-2.5 left-6 right-6 h-0.5 bg-gray-600"></div>
        {/* Progress line - only covers completed phases */}
        <div 
          className="absolute top-2.5 left-6 h-0.5 roadmap_progress_bg"
          style={{ width: `${(phases.filter(p => p.completed).length / (phases.length - 1)) * 100}%` }}
        ></div>
        
        <div className="flex items-center justify-between relative z-10">
          {phases.map((phase) => (
            <div key={phase.name} className="flex flex-col items-center">
              {/* Outer circle with border */}
              <div 
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  phase.completed 
                    ? 'border-white  roadmap_progress_bg' 
                    : 'border-white bg-[#585958]'
                    
                     
                }`}
              >
                {/* Inner circle */}
                <div 
                  className={`w-2 h-2 rounded-full ${
                    phase.completed 
                      ? 'bg-white' 
                       
                      : 'bg-white'
                  }`}
                />
              </div>
              <span 
                className={`text-xs mt-2 ${
                  phase.completed ? 'text-white' : 'text-gray-500'
                }`}
              >
                {phase.name}
              </span>
            </div>
          ))}
        </div>
      </div>
 
    </div>
  );
};

 