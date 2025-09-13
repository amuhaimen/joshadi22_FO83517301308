'use client';
import React, { useState } from 'react';

type TabProps = {
  name: string; // Tab name (e.g., 'all', 'ui-ux', etc.)
  content: React.ReactNode; // Content to display inside the tab
};

type TabsComponentProps = {
  tabs: TabProps[]; // Array of tabs with their name and content
};

const  CustomTab: React.FC<TabsComponentProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.name || 'all');

  return (
    <div className="  flex flex-col gap-6 min-w-0">
      <div className="w-full min-w-0 overflow-x-auto">
        <div className="flex flex-nowrap gap-6 border-b border-[#1D2025]  ">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`px-4 py-2.5 text-sm font-medium text-left whitespace-nowrap shrink-0 transition-all ${
                activeTab === tab.name
                  ? 'border-green-500 border-b text-[#21AF68]'
                  : 'border-gray-300 text-[#A5A5AB] hover:text-[#3FD98B] '
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      <div className="">
        {tabs.map(
          (tab) =>
            activeTab === tab.name && (
              <div key={tab.name} className="   rounded-md">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CustomTab;
