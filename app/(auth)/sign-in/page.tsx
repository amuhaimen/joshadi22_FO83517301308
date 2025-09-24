import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/logo-fav.svg'
import React from 'react'

export default function page() {
  return (
   <div className=" main_bg h-screen flex justify-center items-center">
      <div className=" role_question_bg py-12 px-[42px] w-[700px]  rounded-[20px]">
           <div className=" flex items-center justify-center gap-4">
        <Image src={logo} alt="logo" width={50} height={50}/>
        <h2 className=" text-white text-[32px] font-semibold ">Login</h2>
        </div>
        <div className=" space-y-6">
         
          {/* email */}
          <div className=" flex flex-col w-full">
            <label
              htmlFor="email"
              className=" mb-3 text-[#E9E9EA] text-lg font-medium"
            >
              Email
            </label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter your email"
              className=" w-full py-3 px-6 border border-[#393939] rounded-xl placeholder:text-[#D2D2D5] placeholder:font-medium"
            />
          </div>
          {/* password */}
          <div className=" flex flex-col w-full">
            <label
              htmlFor="password"
              className=" mb-3 text-[#E9E9EA] text-lg font-medium"
            >
              Password
            </label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter your password"
              className=" w-full py-3 px-6 border border-[#393939] rounded-xl placeholder:text-[#D2D2D5] placeholder:font-medium"
            />
          </div>
         
         
          {/* terms and privacy */}
          <div className="flex items-center gap-2 ">
            <input type="checkbox" name="" id="term" className=" cursor-pointer" />
            <label htmlFor="term" className="  text-[#E9E9EA] text-base  ">
           I agree to the Terms and Privacy Policy
            </label>
          </div>

          <input
            type="submit"
            value="Log in"
            className=" auth_btn_bg w-full py-4 px-5 text-white text-lg font-semibold rounded-xl cursor-pointer"
          />
        </div>
          <p className=' text-base text-[#E9E9EA] mt-8 text-center'>Already have a account? <Link href='/sign-up' className=' font-semibold text-[#21AF68] ml-2 cursor-pointer'>sign up</Link> </p>
      </div>
    </div>
  )
}
