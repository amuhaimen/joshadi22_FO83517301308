import React from 'react';
import Link from 'next/link'; // Importing Link component from Next.js
import CalenderIcon from '@/public/icons/CalenderIcon';
import DropDown from '@/public/icons/DropDown';
import PlusIcon from '@/public/icons/PlusIcon';
import RightArrowIcon from '@/public/icons/RightArrowIcon';  // Assuming you have a right arrow icon

// Define types for the props
interface ProjectOverviewHeaderProps {
  title: string; // Title of the header
  breadcrumb?: string[]; // Breadcrumb items as an array of strings (optional)
  showMonthly: boolean; // Boolean to control if 'Show Monthly' button is shown
  addProject: boolean; // Boolean to control if 'Add Project' button is shown
  payoutLink?:boolean;
}

const SectionHeader: React.FC<ProjectOverviewHeaderProps> = ({ title, breadcrumb, showMonthly, addProject,payoutLink }) => {
  return (
    <div className="w-full rounded-lg">
      <div className="flex flex-col xl:flex-row justify-between items-center">
        {/* Left Side - Heading and Breadcrumb */}
        <div className="flex flex-col">
          <h1 className="text-[32px] font-medium text-white">{title}</h1>
          
          {/* Conditionally Render Breadcrumb */}
          {breadcrumb && (
            <div className="text-xs text-[#A5A5AB] flex items-center">
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  {/* Link for breadcrumb */}
                  <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className=' text-[#A5A5AB] hover:text-white '>
                     {item} 
                  </Link>

                  {/* Right Arrow icon except for the last item */}
                  <div className=' px-2'>
                  {index < breadcrumb.length - 1 && <RightArrowIcon  />}

                  </div>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>

        {/* Right Side - Buttons */}
        <div className="flex gap-4 items-center mt-2.5 xl:mt-0">
          {showMonthly && (
            <button className="text-white flex items-center gap-2 cursor-pointer header_buttons_bg py-2.5 px-3 rounded-[10px] header_buttons_border">
              <CalenderIcon />
              <span className='text-sm font-medium'>Show Monthly</span>
              <DropDown />
            </button>
          )}
          { addProject && (
            <button className="flex items-center gap-2 header_buttons_bg py-2.5 px-3 rounded-[10px] cursor-pointer header_buttons_border text-white">
              <PlusIcon />
              <span className='text-sm font-medium'>
                Add Project
              </span>
            </button>
          )}
          { payoutLink && (
            <Link href='/dashboard/payout' className="flex items-center gap-2 header_buttons_bg py-2.5 px-3 rounded-[10px] cursor-pointer header_buttons_border text-white">
             
              <span className='text-sm font-medium'>
               payout
              </span>
            </Link>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
