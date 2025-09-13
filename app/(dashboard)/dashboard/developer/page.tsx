import teamImg from '@/public/Team2.png';
import emp1 from '@/public/employees/emp1.png';
import DropDown from '@/public/icons/DropDown';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '../../_components/reusable/SectionHeader';
import TaskOverviewCard from '../../_components/reusable/TaskOverviewCard';
import TaskTable from '../../_components/reusable/TaskTable';

const taskOverview = [
  {
    name: 'Setup auth system',
    assigne: 'Phoenix Baker',
    empImage: emp1,
    priority: 25,
    dueDate: 'Aug 11, 2025',
    status: 'In Progress',
  },
  {
    name: 'API: Create order flow',
    assigne: 'Phoenix Baker2',
    empImage: emp1,
    priority: 85,
    dueDate: 'Apr 01, 2025',
    status: 'Blocked',
  },
  {
    name: 'Fix payment integration',
    assigne: 'Phoenix Baker3',
    empImage: emp1,
    priority: 12,
    dueDate: 'Sep 21, 2025',
    status: "Completed",
  },
  {
    name: 'Mobile App UI design',
    assigne: 'Phoenix Baker4',
    empImage: emp1,
    priority: 40,
    dueDate: 'Jun 15, 2025',
    status: 'In Progress',
  }
];

const projects = [
  {
    name: 'Setup auth system',
    assigne: '$125,000',
    empImage: emp1,
    priority: 25,
    dueDate: 'Aug 11, 2025',
    status: 'In Progress',
  },
  {
    name: 'API: Create order flow',
    assigne: '$52,000',
    empImage: emp1,
    priority: 85,
    dueDate: 'Apr 01, 2025',
    status: 'Blocked',
  },
  {
    name: 'Fix payment integration',
    assigne: '$65,000',
    empImage: emp1,
    priority: 12,
    dueDate: 'Sep 21, 2025',
    status: "Completed",
  },
  {
    name: 'Mobile App UI design',
    assigne: '$65,000',
    empImage: emp1,
    priority: 40,
    dueDate: 'Jun 15, 2025',
    status: 'In Progress',
  },
  {
    name: 'Develop API for user management',
    assigne: '$65,000',
    empImage: emp1,
    priority: 70,
    dueDate: 'Mar 20, 2025',
    status: 'Blocked',
  },
  {
    name: 'Client-side validation for forms',
    assigne: '$65,000',
    empImage: emp1,
    priority: 50,
    dueDate: 'May 09, 2025',
    status: 'In Progress',
  },
  {
    name: 'Create Dashboard analytics report',
    assigne: '$65,000',
    empImage: emp1,
    priority: 5,
    dueDate: 'Oct 30, 2025',
    status: 'In Progress',
  },
  {
    name: 'Refactor homepage design',
    assigne: '$65,000',
    empImage: emp1,
    priority: 90,
    dueDate: 'Jul 01, 2025',
    status: 'Blocked',
  },
  {
    name: 'Set up user authentication system',
    assigne: '$65,000',
    empImage: emp1,
    priority: 60,
    dueDate: 'Sep 01, 2025',
    status: 'In Progress',
  },
  {
    name: 'Write automated test cases for backend',
    assigne: '$65,000',
    empImage: emp1,
    priority: 100,
    dueDate: 'Dec 20, 2025',
    status: "Completed",
  },
];

const page = () => {
  return (
    <div>
      <SectionHeader title={'Software Engineers Dashboard'}  showMonthly={true} addProject={false} />
      <div className='flex-col flex gap-6'>
        <div className='flex gap-6 flex-col lg:flex-row'>
          {/* featured task  */}
          <div className='p-5 bg-[#141414]/70 rounded-t-3xl flex-1 w-full mt-6'>
            <div className=' text-white'>
              <div className=' flex justify-between   pb-2'>
                <p className=" m-0 px-3 py-2"><span className="text-white fs-6 fw-semibold text-2xl font-semibold font-family-Urbanist">Task Overview</span><span className="text-white text-2xl   fs-5 fw-semibold font-family-Urbanist"> </span><span className="text-white fs-6 fw-medium font-family-Urbanist">(Synced with Jira/GitHub Issues)</span></p>
                <button className='header_buttons_bg py-2 px-3 rounded-[10px] cursor-pointer'>View All</button>
              </div>
              <div className=' bg-[#141414]  mt-4 rounded-t-3xl'>
                <TaskTable tasks={projects} />
              </div>
            </div>
          </div>
          {/* Feedback & Review Log */}
          <div className='p-5 bg-[#141414]/70 rounded-3xl   w-full mt-6'>
            <div className=' text-white'>
              <div className=' flex justify-between  pb-3'>
                <h2 className=' text-2xl font-semibold'>Task Overview </h2>
                <button className='header_buttons_bg py-2 px-3 rounded-[10px] cursor-pointer text-nowrap'>View All</button>
              </div>
              <div className=' bg-[#141414]  mt-4 rounded-t-3xl'>
                <TaskOverviewCard feedbacks={taskOverview} />
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-6 justify-evenly'>
          <div className='p-5 bg-[#141414]  rounded-t-3xl w-full mt-6'>
            {/* Usability Test Results */}
            <div className=' text-white'>
              <div className=' flex justify-between  pb-2'>
                <h2 className=' text-2xl font-semibold'>Usability Test Results</h2>
                <button className='header_buttons_bg py-2 text-nowrap px-3 rounded-[10px] cursor-pointer'>View All</button>
              </div>
              <div className='   mt-4 rounded-t-3xl'>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-col gap-1'>
                    <span className="  text-zinc-500 text-sm font-semibold font-Urbanist leading-tight tracking-tight">Result Summary</span>
                    <div className="w-full h-10 px-4 py-2 bg-[#1f1f1f] rounded-xl outline outline-1 outline-offset-[-1px] outline-white/5 inline-flex flex-col justify-center items-start gap-2.5">
                      <div className="text-right justify-start text-neutral-300 text-xs font-normal font-Urbanist leading-snug">3/5 struggled to find the settings icon</div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className="  text-zinc-500 text-sm font-semibold font-Urbanist leading-tight tracking-tight">Notes</span>
                    <div className="w-full h-10 px-4 py-2 bg-[#1f1f1f] rounded-xl outline outline-1 outline-offset-[-1px] outline-white/5 inline-flex flex-col justify-center items-start gap-2.5">
                      <div className="text-right justify-start text-neutral-300 text-xs font-normal font-Urbanist leading-snug">Improve visibility on mobile view</div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-1'>
                    <span className="  text-zinc-500 text-sm font-semibold font-Urbanist leading-tight tracking-tight">Result Summary</span>
                    <div className="w-full h-10 px-4 py-2 bg-[#1f1f1f] rounded-xl outline outline-1 outline-offset-[-1px] outline-white/5 inline-flex flex-col justify-center items-start gap-2.5">
                      <div className="text-right justify-start text-neutral-300 text-xs font-normal font-Urbanist leading-snug">3/5 struggled to find the settings icon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className='p-5 bg-[#141414]  rounded-t-3xl w-full mt-6'>
            {/* Design Tools & Links */}
            <div className=' text-white'>
              <div className=' flex justify-between  pb-2'>
                <h2 className=' text-2xl font-semibold'>Design Tools & Links</h2>
                <button className='header_buttons_bg py-2 text-nowrap px-3 rounded-[10px] cursor-pointer'>View All</button>
              </div>
              <div className='   mt-4 rounded-t-3xl'>
                <div className='flex flex-col gap-3'>
                  <div>
                    <div className="w-full h-12 px-3 py-2 bg-[#191919] rounded-tl-xl rounded-tr-xl outline outline-1 outline-offset-[-1px] outline-white/5  flex justify-start items-center gap-2.5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0234 9.99995C10.0234 8.15901 11.5158 6.66663 13.3568 6.66663C15.1977 6.66663 16.6901 8.15905 16.6901 9.99995C16.6901 11.8409 15.1977 13.3333 13.3568 13.3333C11.5158 13.3333 10.0234 11.8409 10.0234 9.99995Z" fill="#00BCFF" />
                        <path d="M3.35742 16.6667C3.35742 14.8257 4.8498 13.3334 6.69074 13.3334L8.46711 12.3955L10.0241 13.3334V16.6667C10.0241 18.5077 8.53168 20 6.69074 20C4.8498 20 3.35742 18.5076 3.35742 16.6667Z" fill="#00CF7F" />
                        <path d="M10.0248 0L8.21094 3.15117L10.0248 6.66664H13.3113C15.1523 6.66664 16.6446 5.17426 16.6446 3.33332C16.6446 1.49238 15.1523 0 13.3113 0H10.0248Z" fill="#FF7361" />
                        <path d="M3.31055 3.33332C3.31055 5.17426 4.80293 6.66664 6.64387 6.66664L8.41211 7.34961L10.0239 6.66664V0H6.64383C4.80293 0 3.31055 1.49238 3.31055 3.33332Z" fill="#FF4D12" />
                        <path d="M3.35742 9.99999C3.35742 11.841 4.8498 13.3333 6.69074 13.3333H10.0241V6.66663H6.69074C4.8498 6.66663 3.35742 8.15905 3.35742 9.99999Z" fill="#B659FF" />
                      </svg>

                      <div className=" justify-start text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">Figma Files</div>
                    </div>
                    <div className="w-full h-11 px-6 py-2  bg-[#1f1f1f] rounded-bl-xl rounded-br-xl border-l border-r border-b border-white/5 flex flex-col justify-center items-start gap-2.5">
                      <div className="w-60 inline-flex justify-start items-center gap-2">
                        <div className="w-32 flex justify-start items-center gap-2">
                          <div className="flex justify-start items-center gap-1">
                            <Link className="text-right justify-start text-green-400 text-xs font-normal font-Urbanist leading-snug" href={'/figma/main_ui_design'}>/figma/main_ui_design</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="w-full h-12 px-3 py-2 bg-[#191919] rounded-tl-xl rounded-tr-xl outline outline-1 outline-offset-[-1px] outline-white/5  flex justify-start items-center gap-2.5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_4391_1113)">
                          <path d="M17.9375 3.05469H14.9609V2.0625C14.9609 0.96875 14.0703 0.078125 12.9766 0.078125H2.0625C0.96875 0.078125 0.078125 0.96875 0.078125 2.0625V14.9609C0.078125 16.0547 0.96875 16.9453 2.0625 16.9453H5.03906V17.9375C5.03906 19.0312 5.92969 19.9219 7.02344 19.9219H17.9375C19.0312 19.9219 19.9219 19.0312 19.9219 17.9375V5.03906C19.9219 3.94531 19.0312 3.05469 17.9375 3.05469ZM5.03906 5.03906V14.9609H2.0625V2.0625H12.9766V3.05469H7.02344C5.92969 3.05469 5.03906 3.94531 5.03906 5.03906ZM12.9766 15.9531H8.01562C7.46875 15.9531 7.02344 15.5078 7.02344 14.9609C7.02344 14.4141 7.46875 13.9688 8.01562 13.9688H12.9766C13.5234 13.9688 13.9688 14.4141 13.9688 14.9609C13.9688 15.5078 13.5234 15.9531 12.9766 15.9531ZM16.9453 11.9844H8.01562C7.46875 11.9844 7.02344 11.5391 7.02344 10.9922C7.02344 10.4453 7.46875 10 8.01562 10H16.9453C17.4922 10 17.9375 10.4453 17.9375 10.9922C17.9375 11.5391 17.4922 11.9844 16.9453 11.9844ZM16.9453 8.01562H8.01562C7.46875 8.01562 7.02344 7.57031 7.02344 7.02344C7.02344 6.47656 7.46875 6.03125 8.01562 6.03125H16.9453C17.4922 6.03125 17.9375 6.47656 17.9375 7.02344C17.9375 7.57031 17.4922 8.01562 16.9453 8.01562Z" fill="#EFEAEA" />
                        </g>
                        <defs>
                          <clipPath id="clip0_4391_1113">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <div className="justify-start text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">UX Docs</div>
                    </div>
                    <div className="w-full h-11 px-6 py-2  bg-[#1f1f1f] rounded-bl-xl rounded-br-xl border-l border-r border-b border-white/5 flex flex-col justify-center items-start gap-2.5">
                      <div className="w-60 inline-flex justify-start items-center gap-2">
                        <div className="w-32 flex justify-start items-center gap-2">
                          <div className="flex justify-start items-center gap-1">
                            <Link className="text-right justify-start text-green-400 text-xs font-normal font-Urbanist leading-snug" href={'/Notion/User_Research_Summary'}>/Notion/User_Research_Summary</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3  */}
          <div className='p-5 bg-[#141414]  rounded-t-3xl w-full mt-6'>
            {/* Asset Repository */}
            <div className=' text-white'>
              <div className=' flex justify-between  pb-2'>
                <h2 className=' text-2xl font-semibold'>Asset Repository  </h2>
                <button className='header_buttons_bg py-2 text-nowrap px-3 rounded-[10px] cursor-pointer'>View All</button>
              </div>
              <div className='   mt-4 rounded-t-3xl'>
                <div className='flex flex-col gap-3'>
                  {/* asset card  */}
                  <div className="w-full   px-5 py-4 bg-[#191919] rounded-xl  outline outline-1 outline-offset-[-1px] outline-white/5  flex justify-between items-center gap-2.5">
                    <div className='flex gap-2 items-center'>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="white" strokeOpacity="0.05" />
                        <path d="M17.0437 8.5H11.9375C11.4402 8.5 10.9633 8.69754 10.6117 9.04917C10.26 9.40081 10.0625 9.87772 10.0625 10.375V21.625C10.0625 22.1223 10.26 22.5992 10.6117 22.9508C10.9633 23.3025 11.4402 23.5 11.9375 23.5H20.0625C20.5598 23.5 21.0367 23.3025 21.3883 22.9508C21.74 22.5992 21.9375 22.1223 21.9375 21.625V13.3938C21.9371 12.8966 21.7392 12.42 21.3875 12.0687L18.3688 9.05C18.0175 8.69827 17.5409 8.50044 17.0437 8.5ZM18.1875 10.6312L19.8062 12.25H18.8125C18.6467 12.25 18.4878 12.1842 18.3706 12.0669C18.2533 11.9497 18.1875 11.7908 18.1875 11.625V10.6312ZM20.0625 22.25H11.9375C11.7717 22.25 11.6128 22.1842 11.4956 22.0669C11.3783 21.9497 11.3125 21.7908 11.3125 21.625V10.375C11.3125 10.2092 11.3783 10.0503 11.4956 9.93306C11.6128 9.81585 11.7717 9.75 11.9375 9.75H16.9375V11.625C16.9375 12.1223 17.135 12.5992 17.4867 12.9508C17.8383 13.3025 18.3152 13.5 18.8125 13.5H20.6875V21.625C20.6875 21.7908 20.6217 21.9497 20.5044 22.0669C20.3872 22.1842 20.2283 22.25 20.0625 22.25Z" fill="#E9E9EA" />
                        <path d="M18.8125 14.75H13.1875C13.0217 14.75 12.8628 14.8158 12.7456 14.9331C12.6283 15.0503 12.5625 15.2092 12.5625 15.375C12.5625 15.5408 12.6283 15.6997 12.7456 15.8169C12.8628 15.9342 13.0217 16 13.1875 16H18.8125C18.9783 16 19.1372 15.9342 19.2544 15.8169C19.3717 15.6997 19.4375 15.5408 19.4375 15.375C19.4375 15.2092 19.3717 15.0503 19.2544 14.9331C19.1372 14.8158 18.9783 14.75 18.8125 14.75ZM18.8125 17.25H13.1875C13.0217 17.25 12.8628 17.3158 12.7456 17.4331C12.6283 17.5503 12.5625 17.7092 12.5625 17.875C12.5625 18.0408 12.6283 18.1997 12.7456 18.3169C12.8628 18.4342 13.0217 18.5 13.1875 18.5H18.8125C18.9783 18.5 19.1372 18.4342 19.2544 18.3169C19.3717 18.1997 19.4375 18.0408 19.4375 17.875C19.4375 17.7092 19.3717 17.5503 19.2544 17.4331C19.1372 17.3158 18.9783 17.25 18.8125 17.25ZM18.8125 19.75H13.1875C13.0217 19.75 12.8628 19.8158 12.7456 19.9331C12.6283 20.0503 12.5625 20.2092 12.5625 20.375C12.5625 20.5408 12.6283 20.6997 12.7456 20.8169C12.8628 20.9342 13.0217 21 13.1875 21H18.8125C18.9783 21 19.1372 20.9342 19.2544 20.8169C19.3717 20.6997 19.4375 20.5408 19.4375 20.375C19.4375 20.2092 19.3717 20.0503 19.2544 19.9331C19.1372 19.8158 18.9783 19.75 18.8125 19.75Z" fill="#E9E9EA" />
                      </svg>

                      <div >
                        <div className="w-full justify-start text-white text-sm font-medium font-Urbanist leading-none">Finalized UI kit</div>
                        <div className="w-full justify-start text-neutral-300 text-xs font-normal font-Urbanist leading-3">50 MB</div>
                      </div>
                    </div>
                    <Link href={''}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99935 12.0833L9.99935 3.75M9.99935 12.0833C9.41583 12.0833 8.32562 10.4214 7.91602 10M9.99935 12.0833C10.5829 12.0833 11.6731 10.4214 12.0827 10" stroke="#E9E9EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.6673 13.75C16.6673 15.8183 16.2357 16.25 14.1673 16.25H5.83398C3.76565 16.25 3.33398 15.8183 3.33398 13.75" stroke="#E9E9EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                  <div className="w-full   px-5 py-4 bg-[#191919] rounded-xl  outline outline-1 outline-offset-[-1px] outline-white/5  flex justify-between items-center gap-2.5">
                    <div className='flex gap-2 items-center'>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="white" strokeOpacity="0.05" />
                        <path d="M17.0437 8.5H11.9375C11.4402 8.5 10.9633 8.69754 10.6117 9.04917C10.26 9.40081 10.0625 9.87772 10.0625 10.375V21.625C10.0625 22.1223 10.26 22.5992 10.6117 22.9508C10.9633 23.3025 11.4402 23.5 11.9375 23.5H20.0625C20.5598 23.5 21.0367 23.3025 21.3883 22.9508C21.74 22.5992 21.9375 22.1223 21.9375 21.625V13.3938C21.9371 12.8966 21.7392 12.42 21.3875 12.0687L18.3688 9.05C18.0175 8.69827 17.5409 8.50044 17.0437 8.5ZM18.1875 10.6312L19.8062 12.25H18.8125C18.6467 12.25 18.4878 12.1842 18.3706 12.0669C18.2533 11.9497 18.1875 11.7908 18.1875 11.625V10.6312ZM20.0625 22.25H11.9375C11.7717 22.25 11.6128 22.1842 11.4956 22.0669C11.3783 21.9497 11.3125 21.7908 11.3125 21.625V10.375C11.3125 10.2092 11.3783 10.0503 11.4956 9.93306C11.6128 9.81585 11.7717 9.75 11.9375 9.75H16.9375V11.625C16.9375 12.1223 17.135 12.5992 17.4867 12.9508C17.8383 13.3025 18.3152 13.5 18.8125 13.5H20.6875V21.625C20.6875 21.7908 20.6217 21.9497 20.5044 22.0669C20.3872 22.1842 20.2283 22.25 20.0625 22.25Z" fill="#E9E9EA" />
                        <path d="M18.8125 14.75H13.1875C13.0217 14.75 12.8628 14.8158 12.7456 14.9331C12.6283 15.0503 12.5625 15.2092 12.5625 15.375C12.5625 15.5408 12.6283 15.6997 12.7456 15.8169C12.8628 15.9342 13.0217 16 13.1875 16H18.8125C18.9783 16 19.1372 15.9342 19.2544 15.8169C19.3717 15.6997 19.4375 15.5408 19.4375 15.375C19.4375 15.2092 19.3717 15.0503 19.2544 14.9331C19.1372 14.8158 18.9783 14.75 18.8125 14.75ZM18.8125 17.25H13.1875C13.0217 17.25 12.8628 17.3158 12.7456 17.4331C12.6283 17.5503 12.5625 17.7092 12.5625 17.875C12.5625 18.0408 12.6283 18.1997 12.7456 18.3169C12.8628 18.4342 13.0217 18.5 13.1875 18.5H18.8125C18.9783 18.5 19.1372 18.4342 19.2544 18.3169C19.3717 18.1997 19.4375 18.0408 19.4375 17.875C19.4375 17.7092 19.3717 17.5503 19.2544 17.4331C19.1372 17.3158 18.9783 17.25 18.8125 17.25ZM18.8125 19.75H13.1875C13.0217 19.75 12.8628 19.8158 12.7456 19.9331C12.6283 20.0503 12.5625 20.2092 12.5625 20.375C12.5625 20.5408 12.6283 20.6997 12.7456 20.8169C12.8628 20.9342 13.0217 21 13.1875 21H18.8125C18.9783 21 19.1372 20.9342 19.2544 20.8169C19.3717 20.6997 19.4375 20.5408 19.4375 20.375C19.4375 20.2092 19.3717 20.0503 19.2544 19.9331C19.1372 19.8158 18.9783 19.75 18.8125 19.75Z" fill="#E9E9EA" />
                      </svg>

                      <div >
                        <div className="w-full justify-start text-white text-sm font-medium font-Urbanist leading-none">Icons Orignal Set v2</div>
                        <div className="w-full justify-start text-neutral-300 text-xs font-normal font-Urbanist leading-3">1,025 KB</div>
                      </div>
                    </div>
                    <Link href={''}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99935 12.0833L9.99935 3.75M9.99935 12.0833C9.41583 12.0833 8.32562 10.4214 7.91602 10M9.99935 12.0833C10.5829 12.0833 11.6731 10.4214 12.0827 10" stroke="#E9E9EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.6673 13.75C16.6673 15.8183 16.2357 16.25 14.1673 16.25H5.83398C3.76565 16.25 3.33398 15.8183 3.33398 13.75" stroke="#E9E9EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                  <div className="w-full   px-5 py-4 bg-[#191919] rounded-xl  outline outline-1 outline-offset-[-1px] outline-white/5  flex justify-between items-center gap-2.5">
                    <div className='flex gap-2 items-center'>
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="white" strokeOpacity="0.05" />
                        <path d="M17.0437 8.5H11.9375C11.4402 8.5 10.9633 8.69754 10.6117 9.04917C10.26 9.40081 10.0625 9.87772 10.0625 10.375V21.625C10.0625 22.1223 10.26 22.5992 10.6117 22.9508C10.9633 23.3025 11.4402 23.5 11.9375 23.5H20.0625C20.5598 23.5 21.0367 23.3025 21.3883 22.9508C21.74 22.5992 21.9375 22.1223 21.9375 21.625V13.3938C21.9371 12.8966 21.7392 12.42 21.3875 12.0687L18.3688 9.05C18.0175 8.69827 17.5409 8.50044 17.0437 8.5ZM18.1875 10.6312L19.8062 12.25H18.8125C18.6467 12.25 18.4878 12.1842 18.3706 12.0669C18.2533 11.9497 18.1875 11.7908 18.1875 11.625V10.6312ZM20.0625 22.25H11.9375C11.7717 22.25 11.6128 22.1842 11.4956 22.0669C11.3783 21.9497 11.3125 21.7908 11.3125 21.625V10.375C11.3125 10.2092 11.3783 10.0503 11.4956 9.93306C11.6128 9.81585 11.7717 9.75 11.9375 9.75H16.9375V11.625C16.9375 12.1223 17.135 12.5992 17.4867 12.9508C17.8383 13.3025 18.3152 13.5 18.8125 13.5H20.6875V21.625C20.6875 21.7908 20.6217 21.9497 20.5044 22.0669C20.3872 22.1842 20.2283 22.25 20.0625 22.25Z" fill="#E9E9EA" />
                        <path d="M18.8125 14.75H13.1875C13.0217 14.75 12.8628 14.8158 12.7456 14.9331C12.6283 15.0503 12.5625 15.2092 12.5625 15.375C12.5625 15.5408 12.6283 15.6997 12.7456 15.8169C12.8628 15.9342 13.0217 16 13.1875 16H18.8125C18.9783 16 19.1372 15.9342 19.2544 15.8169C19.3717 15.6997 19.4375 15.5408 19.4375 15.375C19.4375 15.2092 19.3717 15.0503 19.2544 14.9331C19.1372 14.8158 18.9783 14.75 18.8125 14.75ZM18.8125 17.25H13.1875C13.0217 17.25 12.8628 17.3158 12.7456 17.4331C12.6283 17.5503 12.5625 17.7092 12.5625 17.875C12.5625 18.0408 12.6283 18.1997 12.7456 18.3169C12.8628 18.4342 13.0217 18.5 13.1875 18.5H18.8125C18.9783 18.5 19.1372 18.4342 19.2544 18.3169C19.3717 18.1997 19.4375 18.0408 19.4375 17.875C19.4375 17.7092 19.3717 17.5503 19.2544 17.4331C19.1372 17.3158 18.9783 17.25 18.8125 17.25ZM18.8125 19.75H13.1875C13.0217 19.75 12.8628 19.8158 12.7456 19.9331C12.6283 20.0503 12.5625 20.2092 12.5625 20.375C12.5625 20.5408 12.6283 20.6997 12.7456 20.8169C12.8628 20.9342 13.0217 21 13.1875 21H18.8125C18.9783 21 19.1372 20.9342 19.2544 20.8169C19.3717 20.6997 19.4375 20.5408 19.4375 20.375C19.4375 20.2092 19.3717 20.0503 19.2544 19.9331C19.1372 19.8158 18.9783 19.75 18.8125 19.75Z" fill="#E9E9EA" />
                      </svg>

                      <div >
                        <div className="w-full justify-start text-white text-sm font-medium font-Urbanist leading-none">Brand Guidelines</div>
                        <div className="w-full justify-start text-neutral-300 text-xs font-normal font-Urbanist leading-3">2,250 KB</div>
                      </div>
                    </div>
                    <Link href={''}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99935 12.0833L9.99935 3.75M9.99935 12.0833C9.41583 12.0833 8.32562 10.4214 7.91602 10M9.99935 12.0833C10.5829 12.0833 11.6731 10.4214 12.0827 10" stroke="#E9E9EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.6673 13.75C16.6673 15.8183 16.2357 16.25 14.1673 16.25H5.83398C3.76565 16.25 3.33398 15.8183 3.33398 13.75" stroke="#E9E9EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className='p-5 bg-[#141414] rounded-t-3xl flex-1 w-full mt-6'>
          <div className=' text-white'>
            <div className=' flex justify-between   pb-2'>
              <h2 className=' text-2xl font-semibold'>Current Design Screens</h2>
              <button className='header_buttons_bg py-2 px-3 rounded-[10px] cursor-pointer'>View All</button>
            </div>
            <div className=' mt-4 rounded-t-3xl  flex justify-between items-center gap-4'>
              {/* current design screens  */}

              <div>
                <div className="w-full justify-start text-gray-200 text-xs font-semibold font-Urbanist leading-snug">LoginController.js</div>
                <div className="w-full max-w-[360px]  bg-[#1f1f1f] h-[140px]  px-5 py-4 mt-4  rounded-xl  outline outline-1 outline-offset-[-1px] outline-white/5 flex flex-col gap-4 ">
                  <div className='flex flex-col gap-2'>
                    <div className="w-full justify-start text-neutral-300 text-base font-normal font-Urbanist leading-snug">{`function handleLogin(req, res) {const { email, password } req.body; // Validate and authenticate user`}</div>
                    <Link className="h-[30px] w-full  text-center justify-start text-start text-green-400 text-base font-semibold font-Urbanist leading-7" href={''}>View Fll Code</Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="w-full justify-start text-gray-200 text-xs font-semibold font-Urbanist leading-snug">DashboardAPl-is</div>
                <div className="w-full max-w-[360px]  bg-[#1f1f1f] h-[140px] px-5 py-4 mt-4  rounded-xl  outline outline-1 outline-offset-[-1px] outline-white/5 flex flex-col gap-4 ">
                  <div className='flex flex-col gap-2'>
                    <div className="w-full justify-start text-neutral-300 text-base font-normal font-Urbanist leading-snug">{`app.get('/api/dashboardi, (req, res) { res.json({ stats: getUserStats (req.user.id) l);`}</div>
                    <Link className="h-[30px] w-full  text-center justify-start text-start text-green-400 text-base font-semibold font-Urbanist leading-7" href={''}>View Fll Code</Link>
                  </div>
                </div>
              </div>

              <div>
                <div className="w-full  justify-start text-gray-200 text-xs font-semibold font-Urbanist leading-snug">style.css</div>
                <div className="w-full max-w-[360px]  bg-[#1f1f1f] h-[140px] px-5 py-4 mt-4  rounded-xl  outline outline-1 outline-offset-[-1px] outline-white/5 flex flex-col gap-4 ">
                  <div className='flex flex-col gap-2'>
                    <div className="w-full justify-start text-neutral-300 text-base font-normal font-Urbanist leading-snug">{`-button-primary {background-color: #007BFF;border-radius; 8px; color: white;`}</div>
                    <Link className="h-[30px] w-full  text-center justify-start text-start text-green-400 text-base font-semibold font-Urbanist leading-7" href={''}>View Fll Code</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className=' bg-gradient-to-br from-black/15  to-[#191919] rounded-[16px] p-4 flex flex-col'>
          <div className='flex justify-between'>
            <span className="justify-start text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">Upcoming Milestones</span>
            <button className="cursor-pointer h-8 px-4 py-2 rounded-[20px] outline outline-1 outline-offset-[-1px] outline-zinc-700 inline-flex flex-col justify-center items-center gap-1.5">
              <div className="w-16 inline-flex justify-start items-center gap-1">
                <div className="w-11 text-nowrap justify-start text-gray-200 text-[10px] font-normal font-Urbanist leading-[10px]">This Week</div>
                <DropDown />
              </div>
            </button>
          </div>
          <table className=' outline-1 outline-[#3a3a3b] mt-5 rounded-2xl  ' >
            <thead  >
              <tr >
                <th className="rounded-tl-2xl outline-[1px] outline-[#3a3a3b]  px-3 py-6  text-start text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">Monday</th>
                <th className="outline-[1px] outline-[#3a3a3b] px-3 py-6  text-start text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">Tuesday</th>
                <th className="outline-[1px] outline-[#3a3a3b] px-3 py-6  text-start text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">Wednessday</th>
                <th className="rounded-tr-2xl outline-[1px] outline-[#3a3a3b] px-3 py-6  text-start text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">Thursday</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='rounded-bl-2xl outline-[1px] outline-[#3a3a3b] bg-[#1F1F1F] py-5 px-3'>
                  {/* cards  */}
                  <div className='  py-2 px-3 rounded-[8px] outline-[1px] outline-[#3a3a3b] gap-2 flex flex-col'>
                    <div className='flex itams-start justify-between'>
                      <span className="  text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">DB schema update</span>
                      <div className="w-fit h-[20px] ">
                        <Image src={teamImg} alt={''} height={20} width={80} />
                      </div>
                    </div>
                    <div className="text-left justify-start text-zinc-400 text-xs font-normal font-Urbanist leading-snug">Create new color palette for website.</div>
                  </div>
                </td>
                <td className='outline-[1px] outline-[#3a3a3b] bg-[#1F1F1F] py-5 px-3'>
                  {/* cards  */}
                  <div className='  py-2 px-3 rounded-[8px] outline-[1px] outline-[#3a3a3b] gap-2 flex flex-col'>
                    <div className='flex itams-start justify-between'>
                      <span className="  text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">DB schema update</span>
                      <div className="w-fit h-[20px] ">
                        <Image src={teamImg} alt={''} height={20} width={80} />
                      </div>
                    </div>
                    <div className="text-left justify-start text-zinc-400 text-xs font-normal font-Urbanist leading-snug">Create new color palette for website.</div>
                  </div>
                </td>
                <td className='outline-[1px] outline-[#3a3a3b] bg-[#1F1F1F] py-5 px-3'>
                  {/* cards  */}
                  <div className='  py-2 px-3 rounded-[8px] outline-[1px] outline-[#3a3a3b] gap-2 flex flex-col'>
                    <div className='flex itams-start justify-between'>
                      <span className="  text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">DB schema update</span>
                      <div className="w-fit h-[20px] ">
                        <Image src={teamImg} alt={''} height={20} width={80} />
                      </div>
                    </div>
                    <div className="text-left justify-start text-zinc-400 text-xs font-normal font-Urbanist leading-snug">Create new color palette for website.</div>
                  </div>
                </td>
                <td className='rounded-br-2xl outline-[1px] outline-[#3a3a3b] bg-[#1F1F1F] py-5 px-3'>
                  {/* cards  */}
                  <div className='  py-2 px-3 rounded-[8px] outline-[1px] outline-[#3a3a3b] gap-2 flex flex-col'>
                    <div className='flex itams-start justify-between'>
                      <span className="  text-Header-Text text-xl text-white font-semibold font-Urbanist leading-9">DB schema update</span>
                      <div className=" w-fit h-[20px] ">
                        <Image src={teamImg} alt={''} height={20} width={80} />
                      </div>
                    </div>
                    <div className="text-left justify-start text-zinc-400 text-xs font-normal font-Urbanist leading-snug">Create new color palette for website.</div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
