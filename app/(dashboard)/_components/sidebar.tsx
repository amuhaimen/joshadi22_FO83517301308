"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useAuth } from "../../context/AuthContext";
import {
  DashboardIcon,
  InvestorIcon,
  JobSearchIcon,
  UiIcon,
  SettingsIcon,
  SoftwareDevIcon,
  WidgetStoreIcon,
  ContractsIcon,
  BreifCaseIcon,
} from "@/public/sidebar/icons/CustomIcons";
import QuestionIcon from "@/public/sidebar/icons/Question";
import logo from "@/public/header/images/logo.png";
import PhoneIcon from "@/public/sidebar/icons/PhoneIcon";
import InvestmentIcon from "@/public/sidebar/icons/InvestmentIcon";

type SubItem = {
  title: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
};
type MenuItem = {
  title: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href?: string;
  children?: SubItem[];
};

const menuItems: Record<string, MenuItem[]> = {
  manager: [
    { title: "Dashboard", icon: DashboardIcon, href: "/dashboard" },
    { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
    { title: "Investor", icon: InvestorIcon, href: "/dashboard/investor" },
    {
      title: "Investment Ideas",
      icon: InvestmentIcon,
      href: "/dashboard/investment-ideas",
    },
    { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
  ],
  investor: [
    { title: "Dashboard", icon: DashboardIcon, href: "/dashboard/investor" },
    { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
    { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
  ],
  designer: [
    { title: "Dashboard", icon: DashboardIcon, href: "/dashboard/designer" },
    { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
    {
      title: "UI / UX Designer",
      icon: UiIcon,
      href: "/dashboard/ui_ux_designer",
    },
    { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
  ],
  developer: [
    { title: "Dashboard", icon: DashboardIcon, href: "/dashboard/developer" },
    { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
    {
      title: "Software Developer",
      icon: SoftwareDevIcon,
      href: "/dashboard/software_dev",
    },
    { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
  ],
  contracts: [
    {
      title: "Contracts",
      icon: ContractsIcon,
      href: "/dashboard/contracts",
      children: [
        {
          title: "Dashboard",
          icon: DashboardIcon,
          href: "/dashboard/contracts/c-dashboard",
        },
        {
          title: "Reports",
          icon: BreifCaseIcon,
          href: "/dashboard/contracts/reports",
        },
      ],
    },
    { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
    { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
    {
      title: "Certification Store",
      icon: DashboardIcon,
      href: "/dashboard/certification-store",
    },
  ],
};

const bottomMenuItems: {
  title: string;
  icon: React.ReactNode;
  href: string;
}[] = [
  {
    title: "Widget-store",
    icon: <WidgetStoreIcon />,
    href: "/dashboard/widget-store",
  },
  { title: "Support", icon: <QuestionIcon />, href: "#" },
  { title: "Contact Us", icon: <PhoneIcon />, href: "#" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();
  const rawPath = usePathname();
  const pathname = rawPath || "";
  const { role } = useAuth();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [manuallyClosedDropdown, setManuallyClosedDropdown] = useState<string | null>(null);

  // Keep dropdown open if current path matches contracts children
  useEffect(() => {
    if (pathname.startsWith("/dashboard/contracts") && manuallyClosedDropdown !== "Contracts") {
      setOpenDropdown("Contracts");
    } else if (!pathname.startsWith("/dashboard/contracts") && manuallyClosedDropdown !== "Contracts") {
      setOpenDropdown(null);
    }
  }, [pathname, manuallyClosedDropdown]);

  const filteredMenuItems = menuItems[role || "designer"] || [];

  const filteredBottomMenuItems = bottomMenuItems.filter((item) => {
    if (role === "manager" || role === "investor" || role === "contracts") {
      return item.title !== "Widget-store";
    }
    return true;
  });

  const toggleDropdown = (title: string) => {
    setOpenDropdown((prev) => {
      const newState = prev === title ? null : title;
      if (newState === null) {
        setManuallyClosedDropdown(title);
      } else {
        setManuallyClosedDropdown(null);
      }
      return newState;
    });
  };

  const handleDropdownClick = (item: MenuItem) => {
    const isCurrentlyOpen = openDropdown === item.title;
    
    // Toggle dropdown
    toggleDropdown(item.title);
    
    // Navigate only when opening the dropdown (not when closing)
    if (!isCurrentlyOpen && item.href) {
      router.push(item.href);
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 w-64 sidebar_bg shadow-lg flex flex-col`}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-center">
          <Image src={logo} alt="logo" width={70} height={70} />
        </div>
        <button
          className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
          onClick={onClose}
        >
          <IoMdClose className="w-6 h-6" />
        </button>
      </div>

      <nav className="flex-grow overflow-y-auto">
        <div className="p-4 space-y-2">
          {filteredMenuItems.map((item, index) => {
            const Icon = item.icon;
            
            // Dropdown case
            if (item.children && item.children.length > 0) {
              const isDropdownOpen = openDropdown === item.title;
              const isContractsActive =
                item.title === "Contracts" &&
                pathname.startsWith("/dashboard/contracts");
              
              return (
                <div key={index}>
                  <button
                    onClick={() => handleDropdownClick(item)}
                    className={`flex w-full items-center justify-between p-3 rounded-lg transition-all duration-200 text-base ${
                      isContractsActive
                        ? "bg-gradient-to-r from-[#183823] via-[#193928] to-[#174a32] text-white font-semibold"
                        : "text-[#E9E9EA] hover:font-semibold"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 flex-1">
                      {Icon && (
                        <Icon
                          className={`w-5 h-5 ${
                            isContractsActive ? "text-blue-600" : "text-gray-500"
                          }`}
                        />
                      )}
                      <span className={`${isContractsActive ? "font-medium" : ""}`}>
                        {item.title}
                      </span>
                    </div>
                    <div className="p-1">
                      {isDropdownOpen ? <IoChevronUp /> : <IoChevronDown />}
                    </div>
                  </button>

                  <div
                    className={`ml-8 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                      isDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.children.map((child) => {
                      const isChildActive = pathname === child.href;
                      const ChildIcon = child.icon;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className={`flex items-center gap-3 p-2 rounded-md text-sm transition-colors duration-150 ${
                            isChildActive
                              ? "bg-[#30c47a] text-white"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          {ChildIcon && (
                            <ChildIcon
                              className={`w-4 h-4 ${
                                isChildActive ? "text-white" : "text-gray-500"
                              }`}
                            />
                          )}
                          <span>{child.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            // Normal single link
            const isActive = pathname === item.href;
            return (
              <Link
                key={index}
                href={item.href || "#"}
                className={`flex items-center gap-3.5 p-3 rounded-lg transition-all duration-200 text-base ${
                  isActive
                    ? "bg-gradient-to-r from-[#183823] via-[#193928] to-[#174a32] text-white font-semibold"
                    : "text-[#E9E9EA] hover:font-semibold"
                }`}
                onClick={onClose}
              >
                {Icon && (
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-blue-600" : "text-gray-500"
                    }`}
                  />
                )}
                <span className={`${isActive ? "font-medium" : ""}`}>
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="mt-auto p-4 space-y-2">
        {filteredBottomMenuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-3.5 p-3 rounded-lg transition-all duration-200 text-base ${
                isActive
                  ? "bg-gradient-to-r from-[#183823] via-[#193928] to-[#174a32] text-white font-semibold"
                  : "text-[#E9E9EA] hover:font-semibold"
              }`}
              onClick={onClose}
            >
              <div className="w-5 h-5">{item.icon}</div>
              <span className={`${isActive ? "font-medium" : ""}`}>
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}