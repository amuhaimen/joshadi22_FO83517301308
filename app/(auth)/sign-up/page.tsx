import React from "react";
import logo from '@/public/logo-fav.svg'
import Image from "next/image";

export default function page() {
  return (
    <div className=" main_bg h-screen flex justify-center items-center">
      <div className=" role_question_bg py-12 px-[42px] w-[700px]  rounded-[20px]">
        <div className=" flex items-center justify-center gap-4">
        <Image src={logo} alt="logo" width={50} height={50}/>
        <h2 className=" text-white text-[32px] font-semibold ">Sign Up</h2>
        </div>
        <div className=" space-y-6">
          {/* full name */}
          <div className=" flex flex-col w-full">
            <label
              htmlFor="fullName"
              className=" mb-3 text-[#E9E9EA] text-lg font-medium "
            >
              Full Name
            </label>
            <input
              type="text"
              name=""
              id="fullName"
              placeholder="Enter Your full name"
              className=" w-full py-3 px-6 border border-[#393939] rounded-xl placeholder:text-[#D2D2D5] placeholder:font-medium text-white"
            />
          </div>
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
              className=" w-full py-3 px-6 border border-[#393939] rounded-xl placeholder:text-[#D2D2D5] placeholder:font-medium text-white"
            />
          </div>
            {/* phone */}
          <div className=" flex flex-col w-full">
            <label
              htmlFor="phone"
              className=" mb-3 text-[#E9E9EA] text-lg font-medium"
            >
              Phone Number
            </label>
            <input
              type="text"
              name=""
              id="phone"
              placeholder="Enter your phone number"
              className="w-full py-3 px-6 border border-[#393939] rounded-xl placeholder:text-[#D2D2D5] placeholder:font-medium  text-white"
            />
          </div>
          {/* password */}
          <div className=" flex flex-col w-full">
            <label
              htmlFor="password"
              className=" mb-3 text-[#E9E9EA] text-lg font-medium "
            >
              Password
            </label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter your password"
              className=" w-full py-3 px-6 border border-[#393939] rounded-xl placeholder:text-[#D2D2D5] placeholder:font-medium text-white"
            />
          </div>
          {/* confirm password */}
          <div className=" flex flex-col w-full">
            <label
              htmlFor="cPassword"
              className=" mb-3 text-[#E9E9EA] text-lg font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name=""
              id="cPassword"
              placeholder="Enter your confirm password"
              className=" w-full py-3 px-6 border border-[#393939] rounded-xl placeholder:text-[#D2D2D5] placeholder:font-medium text-white"
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
            value="Sign Up"
            className=" auth_btn_bg w-full py-4 px-5 text-white text-lg font-semibold rounded-xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
