import StarIcon from '@/public/widgetIcons/icons/StarIcon';
import Image from 'next/image'
import React from 'react'


interface WidgetCardProps {
    logo: string;
    widgetTitle: string;
    details: string;
    rating: string;
    installs: string;
}

const WidgetCard: React.FC<WidgetCardProps> = ({ logo, widgetTitle, details, rating, installs }) => {
    return (
        <div className=' bg-[#1f1f1f] px-6 pt-5 pb-4 border border-[#2a6f4b] rounded-3xl'>
         <div  className=' flex items-center gap-3'>
             <Image src={logo} alt={widgetTitle}/>
             <div>
                <h2 className=' text-white font-semibold text-xl '>{widgetTitle}</h2>
                <p className=' text-white text-base mt-1'>{details}</p>
             </div>
         </div>
         <div className='flex justify-center items-center '>
         <button className=' text-white text-base font-semibold border border-[#2a6f4b] w-full my-[18px] py-[10px] px-3 rounded-[10px] common_btn_bg cursor-pointer'>Install Widget</button>

         </div>
         <div className=' flex items-center justify-center gap-4'>
            <div className='flex items-center gap-1'>
            <h4 className=' text-white text-xl font-semibold'>{rating}</h4>
            <StarIcon/>

            </div>
            <h4 className=' text-white text-xl font-semibold'>{installs}</h4>
         </div>
                
        </div>
    )
}

export default WidgetCard






//   <div className="w-80 px-6 pt-5 pb-4 bg-stone-900 rounded-2xl shadow-[0px_4px_30px_0px_rgba(26,28,33,0.05)] outline outline-1 outline-offset-[-1px] outline-green-400 flex flex-col justify-start items-start gap-4">
//                 <div className="w-full flex justify-start items-start gap-4">
//                     <div className="flex-1 flex justify-start items-start gap-3">
//                         <div className="w-16 h-16 relative overflow-hidden">
//                             <Image src={logo} alt={`${widgetTitle} icon`} />
//                         </div>
//                         <div className="flex-1 flex flex-col justify-center items-start gap-1">
//                             <div className="justify-start text-white text-xl font-semibold font-Urbanist leading-7 tracking-tight">{widgetTitle}</div>
//                             <div className="w-full justify-start text-white text-base font-normal font-['Urbanist'] leading-snug tracking-tight">{details}</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="hover: cursor-pointer w-full pl-3 pr-4 py-2.5 bg-gradient-to-r from-gray-800/60 to-gray-800/5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-green-400 flex justify-center items-center gap-2">
//                     <div className="justify-start text-white text-base font-semibold font-Urbanist leading-snug">Install Widget</div>
//                 </div>
//                 <div className="w-full flex justify-center items-center gap-4">
//                     <div className="flex justify-start items-center gap-1">
//                         <div className="justify-start text-white text-lg font-semibold font-['Urbanist'] leading-loose">{rating}</div>
//                         <div className="w-4 h-4 relative">
//                             <div className="w-4 h-4 left-0 top-0 absolute overflow-hidden">
//                                 <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute overflow-hidden">
//                                     {/* <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <g clipPath="url(#clip0_4760_445)">
//                                             <path d="M7.5978 1.03837C7.48549 0.810814 7.25373 0.666748 6.99997 0.666748C6.74621 0.666748 6.51445 0.810814 6.40215 1.03837L4.71605 4.45478L0.945821 5.00263C0.694696 5.03912 0.486065 5.21501 0.407648 5.45635C0.329232 5.69769 0.39463 5.96263 0.576345 6.13975L3.30451 8.79906L2.66048 12.5541C2.61758 12.8042 2.72039 13.0569 2.92569 13.2061C3.13099 13.3553 3.40316 13.3749 3.62778 13.2568L6.99997 11.484L10.3722 13.2568C10.5968 13.3749 10.869 13.3553 11.0743 13.2061C11.2796 13.0569 11.3824 12.8042 11.3395 12.5541L10.6954 8.79906L13.4236 6.13975C13.6053 5.96263 13.6707 5.69769 13.5923 5.45635C13.5139 5.21501 13.3052 5.03912 13.0541 5.00263L9.28389 4.45478L7.5978 1.03837Z" fill="url(#paint0_linear_4760_445)" />
//                                         </g>
//                                         <defs>
//                                             <linearGradient id="paint0_linear_4760_445" x1="6.99997" y1="0.666748" x2="6.99997" y2="13.3334" gradientUnits="userSpaceOnUse">
//                                                 <stop stopColor="#3FD98B" />
//                                                 <stop offset="1" stopColor="#21AF68" />
//                                             </linearGradient>
//                                             <clipPath id="clip0_4760_445">
//                                                 <rect width="13.3333" height="13.3333" fill="white" transform="translate(0.333984 0.333374)" />
//                                             </clipPath>
//                                         </defs>
//                                     </svg> */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="justify-start text-white text-lg font-semibold font-['Urbanist'] leading-loose">{installs} installs</div>
//                 </div>
//             </div>