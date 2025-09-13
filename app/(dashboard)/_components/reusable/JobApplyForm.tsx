import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabsContent } from '@radix-ui/react-tabs'
import placeholderImage from '@/public/420x53.svg';
import Image from 'next/image';
import React from 'react'


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

interface ApplyFormProps {
    job: Jobs;
    dateFormated:  string;
}

const JobApplyForm: React.FC<ApplyFormProps> = ({ job, dateFormated }) => {
  
  return (
    <div className="w-full h-screen relative main_bg rounded-3xl  overflow-hidden"
     
    >
      <Image
        className="w-96 h-14 left-[146px] top-[975px] absolute opacity-60 blur-[78.38px]"
        src={placeholderImage}
        alt="background-image"
        width={1000}
        height={1000}
      />
      <Image
        className="w-96 h-14 left-[146px] top-[-37px] absolute opacity-60 blur-[78.38px]"
        src= {placeholderImage}
        alt="background-image"
        width={1000}
        height={1000}
      />
      <div className="w-full p-5 flex flex-col justify-start items-start gap-6">
        <div className="w-full h-[200px]  flex flex-col justify-start items-start gap-6">
          <div className=" flex-1 w-full flex justify-start items-start gap-3">
            <div className=" flex justify-center items-center">
              <div className="w-12 h-12 bg-  rounded-[999px]  flex justify-center items-center ">
                < Image src={job.brandIcon} alt={`${job.brandIcon} not available`} width={300} height={300} className='w-full' />
              </div>
            </div>
            <div className="  flex flex-col justify-start items-start gap-1">
              <div className="justify-start text-nowrap text-white text-3xl font-medium font-Urbanist leading-10">
                {job.postName}
              </div>
              <div className=" flex justify-start items-center gap-2">
                <span className="justify-start text-gray-200 text-sm font-normal font-Urbanist leading-tight tracking-tight">
                  {job.companyName}
                </span>
                <div className="flex justify-start items-center gap-1">
                  <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                  <span className="justify-start text-gray-200 text-sm font-normal font-Urbanist leading-tight tracking-tight">
                    {job.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-start items-start gap-4">
            {job.fullTime && <div className="  px-2 py-1 bg-white/5 rounded outline outline-1 outline-offset-[-1px] outline-white/5 flex justify-center items-center   ">
              <span className="justify-start text-neutral-300 text-sm font-semibold font-Urbanist leading-relaxed"> Full Time </span>
            </div>}
            {job.remote && <div className="  px-2 py-1 bg-white/5 rounded outline outline-1 outline-offset-[-1px] outline-white/5 flex justify-center items-center   ">
              <span className="justify-start text-neutral-300 text-sm font-semibold font-Urbanist leading-relaxed"> Remote </span>
            </div>}
            {job.onSite && <div className="  px-2 py-1 bg-white/5 rounded outline outline-1 outline-offset-[-1px] outline-white/5 flex justify-center items-center   ">
              <span className="justify-start text-neutral-300 text-sm font-semibold font-Urbanist leading-relaxed"> On-site</span>
            </div>}
          </div>

          {/* Job Details Section */}
          <div className="w-full flex flex-col justify-start items-start gap-4 ">
            <div className="w-full  px-4 bg-[#0f0f10]/90 rounded-xl flex justify-between items-center">
              <div className='flex flex-col items-start gap-2 p-2 w-[140px]'>
                <div className=" text-white text-xs font-normal font-Urbanist leading-none tracking-tight">Salary</div>
                <div className="  text-white text-base font-semibold font-Urbanist leading-snug tracking-tight">${job.salaryRangeFrom} - ${job.salaryRangeUpTo}</div>
              </div>
              <div className='  h-10 bg-gray-200 w-[1px]' />

              <div className='flex flex-col items-start gap-2 p-2 w-[140px] '>
                <div className=" text-white text-xs font-normal font-Urbanist leading-none tracking-tight">Posted</div>
                <div className=" text-white text-base font-semibold font-Urbanist leading-snug tracking-tight">{dateFormated}</div>
              </div>
              <div className='h-10 bg-gray-200 w-[1px] ' />
              <div className='flex flex-col items-start gap-2 p-2 w-[140px] '>
                <div className="  text-white text-xs font-normal font-Urbanist leading-none tracking-tight">Experience</div>
                <div className=" text-white text-base font-semibold font-Urbanist leading-snug tracking-tight">5+ years</div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue={'Job_Details'} className=''>
          <TabsList className='mb-2 '>
            <TabsTrigger value={'Job_Details'}>Job Details</TabsTrigger>
            <TabsTrigger value={'Interview_&_Testing_Questions'}>Interview & Testing Questions</TabsTrigger>
          </TabsList>
          <div className='h-[calc(100vh-310px)] overflow-auto rounded-3xl'>

            <TabsContent value={'Job_Details'} >

              <div className="self-stretch p-4 bg-gradient-to-br from-black/10 to-[#1f1f1f] rounded-3xl inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="w-full justify-start text-neutral-300 text-sm font-normal font-Urbanist leading-relaxed">Quantum Tech is looking for a Senior Frontend Developer to join our growing team. You will be responsible for building and maintaining high-quality web applications using modern frontend technologies.</div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                      <div className="self-stretch inline-flex justify-between items-center">
                        <div className="w-full justify-start text-white text-base font-semibold font-Urbanist leading-7">Job Description</div>
                      </div>
                    </div>
                    <div className="w-full justify-start text-neutral-300 text-sm font-normal font-Urbanist leading-relaxed">As a Senior Frontend Developer, you will work closely with our product and design teams to create intuitive and responsive user interfaces. You will be responsible for implementing new features, optimizing application performance, and ensuring a seamless user experience across different devices and browsers.</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                      <div className="self-stretch inline-flex justify-between items-center">
                        <div className="w-full justify-start text-white text-base font-semibold font-Urbanist leading-7">Responsibilities</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-1">
                      <div className="self-stretch inline-flex justify-start items-start">
                        <div className="px-2 pt-3 pb-2 flex justify-start items-center gap-2.5">
                          <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="flex-1 justify-start text-neutral-300 text-sm font-normal font-Urbanist leading-relaxed">Develop and maintain responsive web applications using React, TypeScript, and modern frontend technologies</div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-start">
                        <div className="px-2 pt-3 pb-2 flex justify-start items-center gap-2.5">
                          <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="flex-1 justify-start text-neutral-300 text-sm font-normal font-Urbanist leading-relaxed">Collaborate with UX/UI designers to implement visually appealing and user-friendly interfaces</div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-start">
                        <div className="px-2 pt-3 pb-2 flex justify-start items-center gap-2.5">
                          <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="flex-1 justify-start text-neutral-300 text-sm font-normal font-Urbanist leading-relaxed">Write clean, efficient, and reusable code with proper documentation</div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-start">
                        <div className="px-2 pt-3 pb-2 flex justify-start items-center gap-2.5">
                          <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="flex-1 justify-start text-neutral-300 text-sm font-normal font-Urbanist leading-relaxed">Collaborate with engineers to ensure design implementation</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                      <div className="self-stretch inline-flex justify-between items-center">
                        <div className="w-full justify-start text-white text-base font-semibold font-Urbanist leading-7">Requirements</div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-1">
                      <div className="self-stretch inline-flex justify-start items-start">
                        <div className="px-2 pt-3 pb-2 flex justify-start items-center gap-2.5">
                          <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="flex-1 justify-start text-neutral-300 text-sm font-normal font-Urbanist leading-relaxed">5+ years of UX design experience for digital products</div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-start">
                        <div className="px-2 pt-3 pb-2 flex justify-start items-center gap-2.5">
                          <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="flex-1 justify-start text-neutral-300 text-sm font-normal font-Urbanist leading-relaxed">Proficiency with design tools (Figma, Sketch, Adobe XD)</div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-start">
                        <div className="px-2 pt-3 pb-2 flex justify-start items-center gap-2.5">
                          <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="flex-1 justify-start text-neutral-300 text-sm font-normal font-Urbanist leading-relaxed">Excellent communication and collaboration Skills</div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-start">
                        <div className="px-2 pt-3 pb-2 flex justify-start items-center gap-2.5">
                          <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="flex-1 justify-start text-neutral-300 text-sm font-normal font-Urbanist leading-relaxed">Experience with user research methodologies</div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className=" w-full cursor-pointer pl-3 pr-4 py-2.5 bg-gradient-to-b from-green-400 to-green-500 rounded-[10px]  flex justify-center items-center  ">
                  <span className="justify-start text-white text-base font-semibold font-Urbanist leading-snug">Apply for this Job</span>
                </button>
              </div>
            </TabsContent>

            {/* Additional content for Interview & Testing Questions can go here */}
            <TabsContent value={'Interview_&_Testing_Questions'} className='h-[calc(100vh-320px)] overflow-auto'>
              asdasdasdasdasd
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default JobApplyForm;
