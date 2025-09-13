import Image from 'next/image';
import React from 'react';
// import BrandIcon from '@/public/vercel.svg'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { format, formatDistanceToNow } from 'date-fns';
import JobApplyForm from './JobApplyForm';


interface Jobs {
    brandIcon: string;
    postName: string;
    companyName: string;
    location: string;
    postDetails: string;
    fullTime: boolean;
    remote: boolean;
    onSite: boolean;
    salaryRangeFrom: number;
    salaryRangeUpTo: number;
    postDate: string;
}

interface JobCardProps {
    job: Jobs;
}
const JobCard: React.FC<JobCardProps> = ({ job }) => {
    // for 'd MMMM yyyy' formate 
    const formattedDate = format(job.postDate, 'MMMM d, yyyy');
    console.log(formattedDate);
    // for relative formate 
    const relativeTime = formatDistanceToNow(job.postDate, { addSuffix: true });
    console.log(relativeTime);
    return (
        <div className="w-full px-6 pt-5 pb-4 bg-[#1f1f1f] rounded-2xl shadow-[0px_4px_30px_0px_rgba(26,28,33,0.05)] outline outline-1 outline-offset-[-1px] outline-white/5 flex flex-col justify-start items-start gap-3  transition-all duration-100 ease-in-out transform group  hover:shadow-lg hover:outline-green-400  ">
            <div className="w-full flex flex-col justify-start items-start gap-4">
                <div className="w-full flex flex-col justify-start items-start gap-2">
                    {/* icon  */}
                    <div className="w-12 h-12 bg-  rounded-[999px]  flex justify-center items-center ">
                        < Image src={job.brandIcon} alt={`${job.brandIcon} not available`} width={300} height={300} className='w-full' />
                    </div>
                    {/* title  */}
                    <div className="  flex flex-col justify-center items-start gap-2">
                        <div className="  text-white text-base font-semibold font-Urbanist  leading-snug tracking-tight">{job.postName}</div>
                        <p className="  text-white text-xs font-normal font-Urbanist  leading-none tracking-tight">{job.postDetails}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-start items-start gap-4">
                {job.fullTime &&
                    <div className="h-6 px-2 py-1 bg-white/5 rounded flex justify-center items-center gap-2.5 overflow-hidden   text-neutral-300 text-xs font-semibold font-Urbanist  leading-snug">
                        Full Time
                    </div>
                }
                {job.remote && <div className="h-6 px-2 py-1 bg-white/5 rounded flex justify-center items-center gap-2.5 overflow-hidden   text-neutral-300 text-xs font-semibold font-Urbanist  leading-snug">
                    Remote
                </div>}
                {job.onSite && <div className="h-6 px-2 py-1 bg-white/5 rounded flex justify-center items-center gap-2.5 overflow-hidden   text-neutral-300 text-xs font-semibold font-Urbanist  leading-snug">
                    On-site
                </div>}
            </div>
            <div className="w-full h-6 flex justify-between items-center">
                <div className="justify-start text-green-400 text-lg font-semibold font-Urbanist  leading-relaxed tracking-tight">{`$${job.salaryRangeFrom} - $${job.salaryRangeUpTo}`}</div>
                <div className="flex justify-start items-center gap-1">
                    <span className="text-gray-200 text-xs font-medium font-Urbanist  leading-none tracking-tight">{relativeTime}</span>
                </div>
            </div>

            <Sheet>
                <SheetTrigger className='w-full'>
                    <div className="cursor-pointer w-full   pl-3 pr-4 py-2.5 main_bg bg-gradient-to-r from-gray-800/60 to-gray-800/5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-green-400 flex justify-center items-center gap-2  transition-all duration-100 ease-in-out transform group-hover:bg-gradient-to-t group-hover:from-green-500 group-hover:to-green-400">
                        <span className=" text-white text-base font-semibold font-Urbanist  leading-snug">Apply Now</span>
                    </div>
                </SheetTrigger>
                <SheetContent className='bg-black/70  rounded-3xl border-0 '>
                    <JobApplyForm job={job} dateFormated={relativeTime} />
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default JobCard
