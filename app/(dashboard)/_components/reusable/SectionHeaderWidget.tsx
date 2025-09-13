 import DropDown from '@/public/icons/DropDown';
import PlusIcon from '@/public/icons/PlusIcon';
import React from 'react';

// Define types for the props
interface WidgetHeaderProps {
    title: string; // Title of the header
    breadcrumb: string; // Breadcrumb text
    addWidget: boolean; // Boolean to control if 'Show Monthly' button is shown
    viewAll: boolean; // Boolean to control if 'Add Project' button is shown
}

const SectionHeaderWidget: React.FC<WidgetHeaderProps> = ({ title, breadcrumb, addWidget, viewAll }) => {
    return (
        <div className="w-full  rounded-lg">
            <div className="flex  flex-col   xl:flex-row justify-between items-center  ">
                {/* Left Side - Heading and Breadcrumb */}
                <div className="flex flex-col">
                    <h1 className="text-[32px] font-medium text-white">{title}</h1>
                    <div className="text-xs text-[#A5A5AB]">{breadcrumb}</div>
                </div>

                {/* Right Side - Buttons */}
                <div className="flex gap-4 items-center mt-2.5 xl:mt-0">
                    {viewAll && (
                        <button className="  text-white  flex items-center gap-2 cursor-pointer header_buttons_bg py-2.5 px-3 rounded-[10px] header_buttons_border">
                             <span className=' text-sm font-medium'>View All</span>
                            <DropDown />

                        </button>
                    )}
                    {addWidget && (
                        <button className="flex items-center gap-2 header_buttons_bg py-2.5 px-3 rounded-[10px] cursor-pointer header_buttons_border text-white" >
                            <PlusIcon />
                            <span className=' text-sm font-medium'>
                                Add Widget

                            </span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SectionHeaderWidget;
