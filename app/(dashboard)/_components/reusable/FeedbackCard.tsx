import { Button } from '@/components/ui/button';
import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface Feedback {
    name: string;
    assigne: string;
    empImage: StaticImageData;
    priority: number;
    dueDate: string;
    status: string;
}

interface FeedbackCardProps {
    feedbacks: Feedback[];
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedbacks }) => {
    return (
        <div>
            {feedbacks.map((Feedback, index) => (index < 2 &&

                <div key={index} className='w-full min-w-[300px] p-5  bg-[#1f1f1f] rounded-xl shadow-[0px_4px_30px_0px_rgba(26,28,33,0.05)] outline outline-1 outline-offset-[-1px] outline-white/5 rounded-2xl mt-4 '>
                    <div key={index} className=' flex justify-between'>
                        <div key={index} className="flex  gap-2  ">
                            <div key={index} className='w-fit'>
                                <Image src={Feedback.empImage} alt={Feedback.assigne} width={20} height={20} />
                            </div>
                            <div key={index} className='flex flex-col  gap-1'>
                                <span className='text-left  text-white text-xs font-semibold font-Urbanist leading-none'>{`${Feedback.assigne}`}</span>
                                <span className='text-left   text-gray-200 text-[10px] font-normal font-Urbanist leading-none'>{`${Feedback.assigne}`}</span>
                            </div>
                        </div>
                        <Button key={index} className=' header_buttons_bg going text-green-500' title='approved'> Approved</Button>
                    </div>
                    <div key={index} className='pt-2'>Create new color palette for website</div>
                </div>


            ))
            }
        </div >
    )
}

export default FeedbackCard
