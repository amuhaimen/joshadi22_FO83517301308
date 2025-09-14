import DevIcon from '@/public/welcome/icons/DevIcon'
import IdeaIcon from '@/public/welcome/icons/IdeaIcon'
import React from 'react'

export default function page() {
  return (
    <div className=' main_bg py-[106px] flex justify-center items-center'>
        <div className=' max-w-[962px] mx-auto'>

            <div className=' text-center pb-[60px]'>
            <h1 className=' text-[72px] text-white font-semibold '>Welcome to Devclock</h1>
            <p className=' text-[32px] font-medium text-[#21AF68]'>Core Features</p>
            </div>

            <div className=' flex flex-col lg:flex-row items-center  gap-10'>
                {/* left cards */}
                 <div className=' space-y-10'>
                    <div className=' flex items-start gap-5 welcome_card_bg border border-[#5c5c5c] p-5 rounded-[10px]'>
                        <IdeaIcon/>
                        <div>
                        <h3 className=' text-white text-[32px] font-semibold'>Ideation & Strategy</h3>
                        <p className=' text-2xl text-[#21AF68] font-medium'>The Visionary</p>
                        <p className=' text-xl text-[#D2D2D5]'>Spot opportunities, define project goals</p>

                        </div>
                    </div>
                    <div className=' flex items-start gap-5 welcome_card_bg border border-[#5c5c5c] p-5 rounded-[10px]'>
                        <IdeaIcon/>
                        <div>
                        <h3 className=' text-white text-[32px] font-semibold'>Ideation & Strategy</h3>
                        <p className=' text-2xl text-[#21AF68] font-medium'>The Visionary</p>
                        <p className=' text-xl text-[#D2D2D5]'>Spot opportunities, define project goals</p>

                        </div>
                    </div>
                    <div className=' flex items-start gap-5 welcome_card_bg border border-[#5c5c5c] p-5 rounded-[10px]'>
                        <IdeaIcon/>
                        <div>
                        <h3 className=' text-white text-[32px] font-semibold'>Ideation & Strategy</h3>
                        <p className=' text-2xl text-[#21AF68] font-medium'>The Visionary</p>
                        <p className=' text-xl text-[#D2D2D5]'>Spot opportunities, define project goals</p>

                        </div>
                    </div>
                    
                 </div>
                 {/* right cards */}
                 <div className=' space-y-10'>
                     <div className=' flex items-start gap-5 welcome_card_bg border border-[#5c5c5c] p-5 rounded-[10px]'>
                        <IdeaIcon/>
                        <div>
                        <h3 className=' text-white text-[32px] font-semibold'>Ideation & Strategy</h3>
                        <p className=' text-2xl text-[#21AF68] font-medium'>The Visionary</p>
                        <p className=' text-xl text-[#D2D2D5]'>Spot opportunities, define project goals</p>

                        </div>
                    </div>
                     <div className=' flex items-start gap-5 welcome_card_bg border border-[#5c5c5c] p-5 rounded-[10px]'>
                        <IdeaIcon/>
                        <div>
                        <h3 className=' text-white text-[32px] font-semibold'>Ideation & Strategy</h3>
                        <p className=' text-2xl text-[#21AF68] font-medium'>The Visionary</p>
                        <p className=' text-xl text-[#D2D2D5]'>Spot opportunities, define project goals</p>

                        </div>
                    </div>
                     <div className=' flex items-start gap-5 welcome_card_bg border border-[#5c5c5c] p-5 rounded-[10px]'>
                        <IdeaIcon/>
                        <div>
                        <h3 className=' text-white text-[32px] font-semibold'>Ideation & Strategy</h3>
                        <p className=' text-2xl text-[#21AF68] font-medium'>The Visionary</p>
                        <p className=' text-xl text-[#D2D2D5]'>Spot opportunities, define project goals</p>

                        </div>
                    </div>
                 </div>
                  
            </div>

        </div>
    </div>
  )
}
