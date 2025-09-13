import img1 from "@/public//svgicons/icon1.svg";
import img2 from "@/public//svgicons/icon2.svg";
import img3 from "@/public//svgicons/icon3.svg";
import img4 from "@/public//svgicons/icon4.svg";
import JobCard from "../../_components/reusable/JobCard";
import SectionHeader from "../../_components/reusable/SectionHeader";
// import SearchIcon from "@/public/header/SearchIcon";
import JobSearchIcon from "@/public/jobSearch/icons/JobSearchIcon";
import LocationIcon from "@/public/jobSearch/icons/LocationIcon";
import JobTypeIcon from "@/public/jobSearch/icons/JobTypeIcon";
import SalaryIcon from "@/public/jobSearch/icons/SalaryIcon";
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";

const SearchedJob = [
  {
    brandIcon: img1.src,
    postName: "Senior UX Designer",
    companyName: " Quantum Tech",
    location: " San Francisco, CA",
    postDetails: `Lead UX design initiatives for our enterprise SaaS platform. Collaborate with product and engineering teams to create intuitive user experiences...`,
    fullTime: true,
    remote: true,
    onSite: true,
    salaryRangeFrom: 93000,
    salaryRangeUpTo: 110000,
    postDate: `Tue Jul 12 2025 11:58:10 GMT+0600 (Bangladesh Standard Time)`,
  },
  {
    brandIcon: img3.src,
    postName: "Financial Analyst",
    companyName: " BBS Tech",
    location: " San Francisco, CA",
    postDetails: `Lead UX design initiatives for our enterprise SaaS platform. Collaborate with product and engineering teams to create intuitive user experiences...`,
    fullTime: true,
    remote: true,
    onSite: false,
    salaryRangeFrom: 90000,
    salaryRangeUpTo: 110600,
    postDate: `Tue June 12 2025 11:58:10 GMT+0600 (Bangladesh Standard Time)`,
  },
  {
    brandIcon: img1.src,
    postName: "Product Manager",
    companyName: " Quantum Tech",
    location: " San Francisco, CA",
    postDetails: `Lead UX design initiatives for our enterprise SaaS platform. Collaborate with product and engineering teams to create intuitive user experiences...`,
    fullTime: true,
    remote: true,
    onSite: true,
    salaryRangeFrom: 93000,
    salaryRangeUpTo: 110000,
    postDate: `Tue Jul 12 2025 11:58:10 GMT+0600 (Bangladesh Standard Time)`,
  },
  {
    brandIcon: img2.src,
    postName: "Senior UX Designer",
    companyName: "nightX",
    location: "san",
    postDetails: `mmm You will be responsible for the Visual design  with Understanding basic design, User Journey, Ideation and Wireframing etc..`,
    fullTime: true,
    remote: false,
    onSite: true,
    salaryRangeFrom: 40000,
    salaryRangeUpTo: 110800,
    postDate: `${new Date()}`,
  },
  {
    brandIcon: img1.src,
    postName: "Lead Product Design",
    companyName: " Quantum Tech",
    location: " San Francisco, CA",
    postDetails: `Lead UX design initiatives for our enterprise SaaS platform. Collaborate with product and engineering teams to create intuitive user experiences...`,
    fullTime: true,
    remote: true,
    onSite: true,
    salaryRangeFrom: 93000,
    salaryRangeUpTo: 110000,
    postDate: `Tue Jul 12 2025 11:58:10 GMT+0600 (Bangladesh Standard Time)`,
  },
  {
    brandIcon: img4.src,
    postName: "Lead Product Design",
    companyName: "nightX",
    location: "san",
    postDetails: `mmm You will be responsible for the Visual design  with Understanding basic design, User Journey, Ideation and Wireframing etc..`,
    fullTime: true,
    remote: false,
    onSite: true,
    salaryRangeFrom: 40000,
    salaryRangeUpTo: 110800,
    postDate: `${new Date()}`,
  },
];

 

// const { register, handleSubmit, formState: { errors } } = useForm();

export default function JobSearch() {
  // const onSubmit = ()=> {
  //     console.log("sda");
  // }
  return (
    <div>
      <SectionHeader
        title={"Job search Overview"}
        breadcrumb={['Job search']}
        showMonthly={true}
        addProject={false}
      />

     
      {/* search bar  */}
      {/* <form
        className="mt-6  text-white   rounded-xl flex justify-between items-center gap-1.5"
        style={{
          background: "linear-gradient(176deg, #212121 -17.27%, #0A0A0A 100%)",
        }}
      >
        <div className="flex gap-3 justify-center my-3 mx-2">
          <Search />
          <input
            className="w-full bg-white/5 rounded-md px-2"
            type="text"
            id="name"
            placeholder="Search job.."
          />
        </div>
        <div className="w-0 h-11 origin-top-left   outline outline-1 outline-offset-[-0.50px] outline-white/5"></div>
        <div className="flex gap-3 justify-center my-3 mx-2">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.08398 15C4.55988 15.3431 3.58398 15.8702 3.58398 16.4614C3.58398 17.4952 6.56875 18.3333 10.2507 18.3333C13.9325 18.3333 16.9173 17.4952 16.9173 16.4614C16.9173 15.8702 15.9414 15.3431 14.4173 15"
              stroke="#A5A5AB"
            />
            <path
              d="M12.3327 7.50002C12.3327 8.65061 11.3999 9.58335 10.2493 9.58335C9.09876 9.58335 8.16602 8.65061 8.16602 7.50002C8.16602 6.34943 9.09876 5.41669 10.2493 5.41669C11.3999 5.41669 12.3327 6.34943 12.3327 7.50002Z"
              stroke="#A5A5AB"
            />
            <path
              d="M16.0827 7.66669C16.0827 12.3334 10.2493 15 10.2493 15C10.2493 15 4.41602 12.3334 4.41602 7.66669C4.41602 4.35298 7.02769 1.66669 10.2493 1.66669C13.471 1.66669 16.0827 4.35298 16.0827 7.66669Z"
              stroke="#A5A5AB"
            />
          </svg>

          <input
            className="w-full bg-white/5 rounded-md px-2"
            type="text"
            id="name2"
            placeholder="Job Location"
          />
        </div>
        <div className="w-0 h-11 origin-top-left   outline outline-1 outline-offset-[-0.50px] outline-white/5"></div>
        <div className="flex gap-3 justify-center my-3 mx-2">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4299_4919)">
              <path
                d="M5.96875 4.76562V3.02625C5.96875 2.33398 6.53516 1.76758 7.22742 1.76758H13.7726C14.4649 1.76758 15.0312 2.33398 15.0312 3.02625V4.76562M19.1328 10.3906V17.0605C19.1328 17.705 18.6054 18.2324 17.9609 18.2324H3.03906C2.39465 18.2324 1.86719 17.7051 1.86719 17.0605V10.4297"
                stroke="#A5A5AB"
                stroke-width="1.17188"
                stroke-miterlimit="22.9256"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.9375 12.3633C4.80512 12.127 1.08594 10.9453 1.08594 8.81824V6.04492C1.08594 5.39949 1.61234 4.87305 2.25781 4.87305H18.7422C19.3876 4.87305 19.9141 5.39953 19.9141 6.04492V8.81824C19.9141 10.9586 16.1479 12.1418 11.9844 12.3676"
                stroke="#A5A5AB"
                stroke-width="1.17188"
                stroke-miterlimit="22.9256"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.05469 11.2012H11.9453V12.5488C11.9453 13.29 11.3389 13.8965 10.5977 13.8965H10.4023C9.66113 13.8965 9.05469 13.29 9.05469 12.5488V11.2012Z"
                stroke="#A5A5AB"
                stroke-width="1.17188"
                stroke-miterlimit="22.9256"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_4299_4919">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>

          <input
            className="w-full bg-white/5 rounded-md px-2"
            type="text"
            id="name3"
            placeholder="Job Type"
            // {...register('name3', {
            //   required: {
            //     value: true,
            //     message: '* Registration Number is required'
            //   },
            //   minLength: {
            //     value: 8,
            //     message: "only 8 characters is valid"
            //   }
            // })}
          />
        </div>
        <div className="w-0 h-11 origin-top-left   outline outline-1 outline-offset-[-0.50px] outline-white/5"></div>
        <div className="flex gap-3 justify-center my-3 mx-2">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7875 19.2674H9.82235C9.74983 19.2674 9.68028 19.2385 9.629 19.1873C9.57772 19.136 9.54891 19.0664 9.54891 18.9939V17.7867C7.69879 17.5307 5.97263 16.7104 4.60578 15.4375C4.55467 15.3904 4.52339 15.3257 4.51831 15.2564C4.51323 15.187 4.53473 15.1184 4.57844 15.0644L6.13313 13.1425C6.15658 13.1135 6.18574 13.0896 6.21879 13.0722C6.25184 13.0549 6.28809 13.0445 6.3253 13.0418C6.36251 13.039 6.3999 13.0439 6.43516 13.0561C6.47042 13.0683 6.5028 13.0876 6.53031 13.1128C7.38092 13.9224 8.41755 14.5104 9.54891 14.825V11.1719C6.87016 10.4469 5.10063 9.39735 5.10063 6.77173C5.10063 4.36235 6.87781 2.50407 9.54891 2.08548V1.0061C9.54891 0.933583 9.57772 0.864033 9.629 0.812754C9.68028 0.761475 9.74983 0.732666 9.82235 0.732666H11.7875C11.86 0.732666 11.9296 0.761475 11.9809 0.812754C12.0321 0.864033 12.0609 0.933583 12.0609 1.0061V2.10251C13.7119 2.32462 15.2585 3.03644 16.5009 4.1461C16.5532 4.19113 16.5864 4.25422 16.5941 4.32275C16.6018 4.39127 16.5833 4.46017 16.5423 4.51563L15.0736 6.50235C15.0512 6.53265 15.0228 6.55799 14.9902 6.57679C14.9576 6.5956 14.9214 6.60745 14.884 6.61162C14.8466 6.61579 14.8087 6.61217 14.7727 6.60101C14.7368 6.58984 14.7035 6.57136 14.675 6.54673C13.9214 5.87067 13.0292 5.36724 12.0609 5.07157V8.56251C14.6456 9.17048 16.9842 10.1706 16.9842 13.0988C16.9842 15.7572 15.1053 17.5653 12.0609 17.8634V18.9939C12.0609 19.0664 12.0321 19.136 11.9809 19.1873C11.9296 19.2385 11.86 19.2674 11.7875 19.2674ZM10.0958 18.7205H11.5141V17.6111C11.5141 17.5418 11.5404 17.4751 11.5876 17.4245C11.6349 17.3738 11.6996 17.343 11.7688 17.3383C14.6484 17.1397 16.4373 15.515 16.4373 13.098C16.4373 10.6197 14.5544 9.68563 11.7272 9.04595C11.6667 9.03224 11.6126 8.99837 11.5739 8.94991C11.5352 8.90145 11.5141 8.84126 11.5141 8.77923V4.72048C11.514 4.67955 11.5231 4.63912 11.5408 4.60219C11.5584 4.56525 11.5841 4.53276 11.616 4.50709C11.6479 4.48143 11.6851 4.46326 11.725 4.45392C11.7648 4.44458 11.8063 4.44431 11.8463 4.45314C12.936 4.71153 13.9499 5.22209 14.8064 5.94376L15.9494 4.39688C14.7625 3.39686 13.3024 2.77674 11.7586 2.61704C11.6915 2.6099 11.6293 2.57819 11.5842 2.52799C11.5391 2.4778 11.5141 2.41268 11.5141 2.34517V1.27954H10.0958V2.32345C10.0958 2.39023 10.0713 2.4547 10.0271 2.5047C9.9828 2.55469 9.92176 2.58676 9.85547 2.59485C7.3386 2.90188 5.6475 4.58032 5.6475 6.77173C5.6475 9.12032 7.27125 10.0147 9.8911 10.6964C9.94969 10.7116 10.0016 10.7458 10.0386 10.7937C10.0757 10.8416 10.0958 10.9004 10.0958 10.9609V15.1719C10.0958 15.2126 10.0867 15.2529 10.0692 15.2897C10.0516 15.3265 10.0261 15.3589 9.99438 15.3845C9.96271 15.4101 9.9257 15.4284 9.88606 15.4379C9.84643 15.4474 9.80517 15.4479 9.76531 15.4394C8.50809 15.1586 7.34273 14.5632 6.37844 13.7091L5.16719 15.2063C6.4815 16.3588 8.11744 17.081 9.85469 17.2755C9.9211 17.2834 9.98231 17.3154 10.0267 17.3654C10.0711 17.4154 10.0956 17.48 10.0956 17.5469L10.0958 18.7205ZM11.7875 15.5747C11.715 15.5747 11.6454 15.5459 11.5942 15.4946C11.5429 15.4433 11.5141 15.3738 11.5141 15.3013V11.4575C11.514 11.415 11.5239 11.373 11.543 11.335C11.562 11.2969 11.5897 11.2639 11.6238 11.2384C11.6579 11.2129 11.6974 11.1958 11.7393 11.1883C11.7812 11.1808 11.8242 11.1832 11.865 11.1953C13.3978 11.6484 14.285 12.1484 14.285 13.3577C14.285 14.5269 13.3172 15.3964 11.8195 15.5728C11.8089 15.5741 11.7982 15.5747 11.7875 15.5747ZM12.0609 11.8281V14.9816C13.1036 14.7734 13.7381 14.1691 13.7381 13.3577C13.7381 12.6352 13.3214 12.2406 12.0609 11.8281ZM9.82235 8.53517C9.79141 8.53519 9.76071 8.5299 9.73156 8.51954C8.73953 8.17064 7.82141 7.68845 7.82141 6.53423C7.82141 5.54798 8.59938 4.69501 9.75735 4.41142C9.7976 4.40156 9.83956 4.40099 9.88007 4.40974C9.92058 4.41849 9.95857 4.43633 9.99117 4.46192C10.0238 4.4875 10.0501 4.52016 10.0682 4.55743C10.0864 4.5947 10.0958 4.6356 10.0958 4.67704V8.26173C10.0957 8.33424 10.0669 8.40376 10.0156 8.45503C9.96438 8.5063 9.89485 8.53512 9.82235 8.53517ZM9.54891 5.04985C8.83016 5.33298 8.36828 5.89954 8.36828 6.53423C8.36828 7.13938 8.685 7.51017 9.54891 7.86563V5.04985Z"
              fill="#A5A5AB"
            />
          </svg>

          <input
            className="w-full bg-white/5 rounded-md px-2"
            type="text"
            id="name3"
            placeholder="Salary Range"
            // {...register('name3', {
            //   required: {
            //     value: true,
            //     message: '* Registration Number is required'
            //   },
            //   minLength: {
            //     value: 8,
            //     message: "only 8 characters is valid"
            //   }
            // })}
          />
        </div>
        <div className="bg-[#3FD98B] hover:bg-green-400  py-3 px-2 rounded-r-xl cursor-pointer w-fit">
          <span>Search</span>
        </div>
      </form> */}
 
      <div >
        <form className=" mt-[30px] bg-[#191919] flex justify-between rounded-xl pl-2" >
          <div className="flex items-center  inline-flex    py-2  px-4  ">
           <JobSearchIcon/>
           <input type="text" name="" id="" placeholder="Search job..."  className=" outline-none text-[#777980] text-sm ml-1 w-full"   />
          </div>
          <div className="flex items-center  inline-flex   py-2  px-4 border-l border-[#373737]">
            <LocationIcon/>
           <input type="text" name="" id="" placeholder="Job location."  className=" outline-none text-[#777980] text-sm ml-1 w-full"   />
          </div>
          <div className="flex items-center  inline-flex   py-2  px-4 border-l border-[#373737]">
           <JobTypeIcon/>
           <input type="text" name="" id="" placeholder="Job type"  className=" outline-none text-[#777980] text-sm ml-1 w-full"   />
          </div>
          <div className="flex items-center  inline-flex   py-2  px-4 border-l border-[#373737]">
           <SalaryIcon/>
           <input type="text" name="" id="" placeholder="Salary Range"  className=" outline-none text-[#777980] text-sm ml-1 w-full"   />
          </div>
          <div>
            <div className=" flex iems-center justify-center job_search_btn_bg hover:bg-green-400  py-[10px] px-3 rounded-r-xl cursor-pointer w-fit ">
          <input type="submit" value="Submit" className=" text-white text-base font-semibold cursor-pointer py-2 pr-4 pl-3"/>

            </div>

          </div>
        </form>
      </div>

      <div
        className="p-5   rounded-t-3xl w-full mt-6"
        style={{
          background: "linear-gradient(176deg, #212121 -17.27%, #0A0A0A 100%)",
        }}
      >
        {/* job Search Results */}
        <div className=" text-white">
          <div className=" flex justify-between  pb-2">
            <h2 className=" text-2xl font-semibold">{`Showing 126 Jobs`}</h2>
            <button className="header_buttons_bg py-2 text-nowrap px-3 rounded-[10px] cursor-pointer">
              View All
            </button>
          </div>
          {/* card  */}
          <div className="flex gap-5 grid lg:grid-cols-2 xl:grid-cols-3 ">
            {SearchedJob.map((Jobs, index) => (
              <JobCard key={index} job={Jobs} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
