import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

export default function InvestmentIdeasInputs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    industry: '',
    stage: '',
    budgetRange: ''
  });

  const handleSearch = () => {
    console.log('Search:', searchTerm, 'Filters:', filters);
    // Add search logic here
  };

  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="  bg-[#191919] rounded-[10px] my-7">
      <div className="w-full  ">
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Search Input */}
          <div className="flex-1 md:max-w-xs">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4       text-white placeholder-gray-400 focus:outline-none focus:border-[#2abb72] focus:ring-1 focus:ring-[#2abb72] text-sm py-2 placeholder:text-sm border-r border-[#393939] "
              />
            </div>
          </div>

          {/* Filter Dropdowns - Single row on desktop */}
          <div className="flex flex-col sm:flex-row  flex-1 md:justify-center">
            {/* Location Dropdown */}
            <div className="relative flex-1 md:min-w-[120px]">
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full appearance-none py-2    px-4  pr-8 text-[#E9E9EA] font-medium text-sm focus:outline-none focus:border-[#2abb72] focus:ring-1 focus:ring-[#2abb72] cursor-pointer border-r border-[#393939]"
              >
                <option value="">Location</option>
                <option value="new-york">New York</option>
                <option value="california">California</option>
                <option value="london">London</option>
                <option value="toronto">Toronto</option>
                <option value="remote">Remote</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Industry Dropdown */}
            <div className="relative flex-1 md:min-w-[120px]">
              <select
                value={filters.industry}
                onChange={(e) => handleFilterChange('industry', e.target.value)}
                className="w-full appearance-none   px-4 py-2  pr-8 text-white text-sm focus:outline-none focus:border-[#2abb72] focus:ring-1 focus:ring-[#2abb72]  cursor-pointer border-r border-[#393939]"
              >
                <option value="">Industry</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="retail">Retail</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Stage Dropdown */}
            <div className="relative flex-1 md:min-w-[120px]">
              <select
                value={filters.stage}
                onChange={(e) => handleFilterChange('stage', e.target.value)}
                className="w-full appearance-none     px-4   pr-8 text-white text-sm focus:outline-none focus:border-[#2abb72] focus:ring-1 focus:ring-[#2abb72]  cursor-pointer border-r border-[#393939] py-2"
              >
                <option value="">Stage</option>
                <option value="idea">Idea</option>
                <option value="prototype">Prototype</option>
                <option value="development">Development</option>
                <option value="testing">Testing</option>
                <option value="launch">Launch</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>

            {/* Budget Range Dropdown */}
            <div className="relative flex-1 md:min-w-[140px]">
              <select
                value={filters.budgetRange}
                onChange={(e) => handleFilterChange('budgetRange', e.target.value)}
                className="w-full appearance-none   px-4  pr-8 text-white text-sm focus:outline-none focus:border-[#2abb72] focus:ring-1 focus:ring-[#2abb72]  cursor-pointer py-2"
              >
                <option value="">Budget Range</option>
                <option value="0-1000">$0 - $1,000</option>
                <option value="1000-5000">$1,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000-50000">$10,000 - $50,000</option>
                <option value="50000+">$50,000+</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex-shrink-0 md:ml-auto">
            <button
              onClick={handleSearch}
              className=" text-white text-base font-semibold  ai_btn_bg py-[10px] pr-4 pl-3 rounded-none lg:rounded-r-[10px] w-full mt-2 lg:mt-0"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}