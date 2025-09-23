import React from "react";

type CardData = {
  role: string;
  rate: string;
  jobs: Array<{
    title: string;
    hours: string;
  }>;
};

const cardData: CardData[] = [
  {
    role: "UX Designer",
    rate: "$65/hr",
    jobs: [
      { title: "Acme Website Redesign", hours: "18.5b" },
      { title: "Freelance IJX Audit", hours: "12.2h" },
    ],
  },
  {
    role: "Developer",
    rate: "$70/hr",
    jobs: [
      { title: "Delta Mobile App", hours: "24.8h" },
      { title: "Backend API Development", hours: "16.5h" },
    ],
  },
  {
    role: "Investor",
    rate: "Equity Based",
    jobs: [
      { title: "Portfolio Review Sessions", hours: "8.3h" },
      { title: "Strategy Planning Meetings", hours: "6.7h" },
    ],
  },
];

export default function FinancialSum() {
  return (
    <div className=" bg-[#151515] px-4 pt-6 pb-6 rounded-3xl text-white ">
      <h3 className=" text-white text-lg font-semibold">Financial Summary</h3>
      <div className=" space-y-3 mt-3">
        {cardData.map((data, index) => (
          <div key={index} className="card">
            <div className=" bg-[#191919] flex justify-between rounded-t-[12px]  border-x border-t border-[#393939] px-4 py-2">
              <h3 className=" text-white text-base font-semibold">{data.role}</h3>
              <p className=" text-lg text-[#21AF68] font-semibold">{data.rate}</p>
            </div>
            <div className="job-list bg-[#1F1F1F] rounded-b-[12px] border-b border-x border-[#393939] py-2 px-6">
              {data.jobs.map((job, jobIndex) => (
                <div key={jobIndex} className="job">
                  <p className="job-title">{job.title}</p>
                  <p className="job-hours">{job.hours}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
