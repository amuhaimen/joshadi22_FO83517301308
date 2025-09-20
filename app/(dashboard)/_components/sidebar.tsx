import React from "react"; 
import Link from "next/link"; 
import { usePathname } from "next/navigation"; 
import { IoMdClose } from "react-icons/io"; 
import { useAuth } from "../../context/AuthContext"; // Import useAuth to get the role
import { DashboardIcon, InvestorIcon, JobSearchIcon, UiIcon, SettingsIcon, SoftwareDevIcon, WidgetStoreIcon } from "@/public/sidebar/icons/CustomIcons"; 
import QuestionIcon from '@/public/sidebar/icons/Question';
import logo from '@/public/header/images/logo.png'; 
import Image from "next/image"; 
import PhoneIcon from "@/public/sidebar/icons/PhoneIcon";
import ContactsIcon from "@/public/sidebar/icons/ContactsIcon";
import InvestmentIcon from "@/public/sidebar/icons/InvestmentIcon";

// Menu items for different roles
const menuItems: {
  [key: string]: { title: string; icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; href: string }[];
} = {
  manager: [
    { title: "Dashboard", icon: DashboardIcon, href: "/dashboard" },
    { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
    { title: "Investor", icon: InvestorIcon, href: "/dashboard/investor" },
    { title: "Investment Ideas", icon: InvestmentIcon, href: "/dashboard/investment-ideas" },
    { title: "Certification Store", icon:  DashboardIcon, href: "/dashboard/certification-store" },
    { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
  ],
  investor: [
    { title: "Dashboard", icon: DashboardIcon, href: "/dashboard/investor" },
    { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
    // { title: "Investor", icon: InvestorIcon, href: "/dashboard/investor" },
    { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" }
  ],
  designer: [
    { title: "Dashboard", icon: DashboardIcon, href: "/dashboard/designer" },
    { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
    { title: "UI / UX Designer", icon: UiIcon, href: "/dashboard/ui_ux_designer" },
    {title:'Contracts',icon: ContactsIcon,href:"/dashboard/contracts"},
    { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
  ],
  developer: [
    { title: "Dashboard", icon: DashboardIcon, href: "/dashboard/developer" },
    { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
    { title: "Software Developer", icon: SoftwareDevIcon, href: "/dashboard/software_dev" },
    { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
  ]
};

const bottomMenuItems = [ 
  { title: "Widget-store", icon: <WidgetStoreIcon/>, href: "/dashboard/widget-store" },
  { title: "Support", icon: <QuestionIcon />, href: "#" },
  { title: "Contact Us", icon: <PhoneIcon />, href: "#" },
];

interface SidebarProps { 
  isOpen: boolean; 
  onClose: () => void; 
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { role } = useAuth(); // Accessing role from AuthContext

  // Filter the menu items based on the role
  const filteredMenuItems = menuItems[role || 'designer'] || []; // Default to 'designer' if no role found

    const filteredBottomMenuItems = bottomMenuItems.filter((item) => {
    if (role === 'manager' || role === 'investor') {
      return item.title !== "Widget-store";
    }
    return true; // Keep all items for other roles
  });


  return (
    <aside className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 w-64 sidebar_bg shadow-lg flex flex-col`}>
      
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-center">
          <Image src={logo} alt="logo" width={70} height={70} />
        </div>
        <button className="p-2 rounded-lg hover:bg-gray-100 md:hidden" onClick={onClose}>
          <IoMdClose className="w-6 h-6" />
        </button>
      </div>
      
      {/* Make the content scrollable if there is overflow */}
      <nav className="flex-grow overflow-y-auto">
        <div className="p-4 space-y-2">
          {filteredMenuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link key={index} href={item.href} className={`flex items-center gap-3.5 p-3 rounded-lg transition-all duration-200 text-base ${isActive ? "bg-gradient-to-r from-[#183823] via-[#193928] to-[#174a32] text-white font-semibold" : "text-[#E9E9EA] hover:font-semibold"}`} onClick={onClose}>
                <item.icon className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-500"}`} />
                <span className={`${isActive ? "font-medium" : ""}`}>{item.title}</span>
              </Link>
            );
          })}
        </div>
      </nav>
      
      {/* Bottom items */}
      <div className="mt-auto p-4 space-y-2">
        {filteredBottomMenuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link key={index} href={item.href} className={`flex items-center gap-3.5 p-3 rounded-lg transition-all duration-200 text-base ${isActive ? "bg-gradient-to-r from-[#183823] via-[#193928] to-[#174a32] text-white font-semibold" : "text-[#E9E9EA] hover:font-semibold"}`} onClick={onClose}>
              <div className="w-5 h-5">{item.icon}</div>
              <span className={`${isActive ? "font-medium" : ""}`}>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
