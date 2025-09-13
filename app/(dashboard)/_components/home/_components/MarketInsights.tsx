import Image from 'next/image'
import React from 'react'
import insightMainImg from '@/public/insights-main.png'
import insightImg1 from '@/public/insightSub1.png'
import insightImg2 from '@/public/insightSub2.png'
import insightImg3 from '@/public/insightSub3.png'
import insightImg4 from '@/public/insightSub4.png'


const insightsData = [
  {
    imageSrc: insightMainImg,
    title: 'Emerging Markets & Tech Growth',
    description: 'Global tech growth is being driven by emerging economies. India and LATAM regions are key players for remote tech hiring in 2025.',
    link: '#'
  },
  {
    imageSrc: insightImg1,
    title: 'Tech Hiring Trends 2025',
    description: 'Tech hiring in 2025 is changing rapidly with remote-first hiring, and an increase in demand for specialized skills.',
    link: '#'
  },
  {
    imageSrc: insightImg2,
    title: 'Navigating the Rising Tide of Childhood Mental Health',
    description: 'Increasing awareness of childhood mental health is impacting how schools and parents approach mental health care.',
    link: '#'
  },
  {
    imageSrc: insightImg3,
    title: 'Tech Industry’s Sustainability Focus',
    description: 'The tech industry is prioritizing sustainability in 2025, aiming for carbon-neutral products and services.',
    link: '#'
  },
  {
    imageSrc: insightImg4,
    title: 'Forbes: Market Trends 2025',
    description: 'Forbes discusses the current trends in the global market, with an in-depth analysis of economic forecasts.',
    link: '#'
  }
];

const MarketInsights = () => {
  return (
    <div >
      <h1 className="text-[24px] font-semibold text-white mt-8 mb-[10px]">Market Research Insights</h1>
      <p className="text-sm text-[#D2D2D5]">Stay Informed with the Latest Insights and Industry Trends</p>

      <div className="flex flex-col lg:flex-row bg-[#191919] gap-5 p-6 rounded-[24px] mt-[16px]">
        {/* Left Section */}
        <div className="w-full lg:w-[50%] bg-[#252527] p-4 rounded-[16px]">
          <Image src={insightsData[0].imageSrc} alt={insightsData[0].title} className="w-full rounded-[6px]" />
          <h2 className="text-[20px] font-semibold text-white mt-6 mb-4">{insightsData[0].title}</h2>
          <p className="text-base text-[#D2D2D5] mb-[18px] leading-[28px]">{insightsData[0].description}</p>
          <a href={insightsData[0].link} className="underline text-base text-white">Read More</a>
        </div>

        {/* Right Section (Grid of 4 cards) */}
        <div className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {insightsData.slice(1).map((card, index) => (
            <div key={index} className="bg-[#252527] p-3 rounded-[12px]">
              <Image src={card.imageSrc} alt={card.title} className="w-full rounded-[6px]" />
              <h3 className="text-sm font-medium text-white my-[16px]">{card.title}</h3>
              <a href={card.link} className="underline text-sm text-white">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketInsights;
