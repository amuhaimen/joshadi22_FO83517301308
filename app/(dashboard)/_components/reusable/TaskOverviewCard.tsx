import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface TaskOverview {
    name: string;
    assigne: string;
    empImage: StaticImageData;
    priority: number;
    dueDate: string;
    status: string;
}

interface TaskOverviewCardProps {
    feedbacks: TaskOverview[];
}

const TaskOverviewCard: React.FC<TaskOverviewCardProps> = ({ feedbacks }) => {
    return (
        <div>
            {feedbacks.map((Feedback, index) => (index < 3 &&

                <div  key={index}>
                    <div key={index} className=' mt-4   '>
                        <div key={index} className="w-full h-12 px-3 py-2   rounded-tl-xl rounded-tr-xl outline outline-1 outline-offset-[-1px] outline-white/5  flex justify-between items-center gap-2.5">
                            <span className="justify-between text-white text-sm font-semibold font-Urbanist leading-tight tracking-tight">Feat: add JWT refresh token</span>
                        </div>
                        <div key={index} className="w-full h-11 px-6 py-2  bg-[#1f1f1f] rounded-bl-xl rounded-br-xl border-l border-r border-b border-white/5 flex flex-col justify-center items-start gap-2.5">
                            <div key={index} className="w-full flex justify-between gap-5 items-center">
                                <div key={index} className="flex w-fit items-center gap-2">
                                    <Image key={index} src={Feedback.empImage} alt={Feedback.assigne} width={20} height={20} />
                                    <span key={index} className='text-left  text-white text-xs font-semibold font-Urbanist leading-none'>{`${Feedback.assigne}`}</span>
                                </div>
                                <span key={index} className='text-left   text-nowrap text-white text-xs font-semibold font-Urbanist leading-none'>{`${Feedback.dueDate}`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div >
    )
}

export default TaskOverviewCard
