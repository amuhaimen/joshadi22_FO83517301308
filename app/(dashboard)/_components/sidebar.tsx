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
  // InvestorIcon,
  JobSearchIcon,
  // UiIcon,
  SettingsIcon,
  SoftwareDevIcon,
  WidgetStoreIcon,
  ContractsIcon,
} from "@/public/sidebar/icons/CustomIcons";
import QuestionIcon from "@/public/sidebar/icons/Question";
import logo from "@/public/header/images/logo.png";
import PhoneIcon from "@/public/sidebar/icons/PhoneIcon";

// ✅ Import JSON using absolute path
import contractsData from "../../(dashboard)/dashboard/contracts/data/contactsData.json";

type SubItem = {
  title: string;
  href: string;
  children?: SubItem[];
};
type MenuItem = {
  title: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  children?: SubItem[];
};

// ✅ Dynamically build Contract section from JSON
// const contractsChildren = contractsData.map((contract) => ({
  
//   title: contract.title,
//   href: `${contract.href}`,
//   children: [
//     { title: "Dashboard", href: `${contract.href}/dashboard` },
//     { title: "Workspace", href: `${contract.href}/workspace` },
//   ],
// }));



const bottomMenuItems = [
  { title: "Store", icon: <WidgetStoreIcon />, href: "/dashboard/widget-store" },
  { title: "Support", icon: <QuestionIcon />, href: "#" },
  { title: "Contact Us", icon: <PhoneIcon />, href: "#" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname() || "";
  const { role } = useAuth();
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  // 🟢 Redirect /dashboard → /dashboard/contracts
  // useEffect(() => {
  //   if (pathname === "/dashboard" || pathname === "/dashboard/") {
  //     router.replace("/dashboard/contracts");
  //   }
  // }, [pathname, router]);


// =============================================================


 const contractsChildren = contractsData.map((contract) => {
    const base = `${contract.href}`;
    const userRole = role || "manager"; // fallback if role is undefined
    return {
      title: contract.title,
      href: base,
      children: [
        { title: "Dashboard", href: `${base}/${userRole}` },
        { title: "Workspace", href: `${base}/${userRole}-workspace` },
      ],
    };
  });
// =============================================================

const menuItems: Record<string, MenuItem[]> = {


 manager: [
    {
      title: "Contracts",
      icon: ContractsIcon,
      href: "/dashboard/contracts",
      children: contractsChildren,
    },
    // { title: "Dashboard", icon: DashboardIcon, href: "/dashboard" },
    { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
    {title:"Time Keeping",icon: SoftwareDevIcon,href:"/dashboard/time-keeping"},
    // { title: "Investor", icon: InvestorIcon, href: "/dashboard/investor" },
    {title:"Project Manager Payout",icon:JobSearchIcon,href:"/dashboard/payout"},
    { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
  ],
  investor: [
    {
      title: "Contracts",
      icon: ContractsIcon,
      href: "/dashboard/contracts",
      children: contractsChildren,
    },
    // { title: "Dashboard", icon: DashboardIcon, href: "/dashboard/investor" },
    { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
    {title:"Investment Ideas",icon:JobSearchIcon,href:"/dashboard/investment-ideas"},
    { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
  ],
  designer: [
    {
      title: "Contracts",
      icon: ContractsIcon,
      href: "/dashboard/contracts",
      children: contractsChildren,
    },
    // { title: "Dashboard", icon: DashboardIcon, href: "/dashboard/designer" },
    {title:"Certificate Store",icon:DashboardIcon,href:'/dashboard/certification-store'},
    { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
    // {
    //   title: "UI / UX Designer",
    //   icon: UiIcon,
    //   href: "/dashboard/ui_ux_designer",
    // },
    { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
  ],
  developer: [
    {
      title: "Contracts",
      icon: ContractsIcon,
      href: "/dashboard/contracts",
      children: contractsChildren,
    },
    // { title: "Dashboard", icon: DashboardIcon, href: "/dashboard/developer" },
    { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
    // {
    //   title: "Software Developer",
    //   icon: SoftwareDevIcon,
    //   href: "/dashboard/software_dev",
    // },
    { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
  ],

  // contracts: [
  //   {
  //     title: "Contracts",
  //     icon: ContractsIcon,
  //     href: "/dashboard/contracts",
  //     children: contractsChildren,
  //   },
  //   { title: "Job Search", icon: JobSearchIcon, href: "/dashboard/job_search" },
  //   { title: "Settings", icon: SettingsIcon, href: "/dashboard/settings" },
  // ],
};




  // 🔥 Run only once on mount — open all dropdowns
  useEffect(() => {
    const initialState: Record<string, boolean> = {};
    const openAll = (items: (MenuItem | SubItem)[]) => {
      items.forEach((item) => {
        initialState[item.title] = true;
        if (item.children) openAll(item.children);
      });
    };
    const currentItems = menuItems[role || "contracts"] || [];
    openAll(currentItems);
    setOpenDropdowns(initialState);
  }, [role]);

  // 🧩 Collapse only “Contracts” when outside /dashboard/contracts
  useEffect(() => {
    setOpenDropdowns((prev) => ({
      ...prev,
      Contracts: pathname.startsWith("/dashboard/contracts") ? true : false,
    }));
  }, [pathname]);

  const toggleDropdown = (title: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // ✅ Utility: checks if a route or its children are active
  const isActiveParent = (parentPath: string, children?: SubItem[]): boolean => {
    if (pathname === parentPath || pathname.startsWith(parentPath + "/")) return true;
    if (children && children.length > 0) {
      return children.some(
        (child) =>
          pathname === child.href ||
          pathname.startsWith(child.href + "/") ||
          isActiveParent(child.href, child.children)
      );
    }
    return false;
  };

  // ✅ Recursive renderer for children
  const renderChildren = (children?: SubItem[]) => {
    if (!children) return null;

    return (
      <div className="ml-8 mt-2 space-y-2">
        {children.map((child) => {
          const hasChildren = child.children && child.children.length > 0;
          const isActive = isActiveParent(child.href, child.children);
          const isOpen = openDropdowns[child.title];

          return (
            <div key={child.href}>
              <button
                onClick={() => {
                  if (hasChildren) toggleDropdown(child.title);
                  router.push(child.href);
                }}
                className={`flex items-center justify-between gap-3 p-2 rounded-md w-full text-left transition-colors duration-150 text-base ${
                  isActive
                    ? "text-[#21AF68] font-semibold text-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span>{child.title}</span>
                {hasChildren && (isOpen ? <IoChevronUp /> : <IoChevronDown />)}
              </button>

              {hasChildren && isOpen && renderChildren(child.children)}
            </div>
          );
        })}
      </div>
    );
  };

  const items = menuItems[role || "contracts"] || [];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 w-72 sidebar_bg shadow-lg flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center justify-center">
          <Image src={logo} alt="logo" width={70} height={70} />
        </div>
        <button className="p-2 rounded-lg hover:bg-gray-100 md:hidden" onClick={onClose}>
          <IoMdClose className="w-6 h-6" />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-grow overflow-y-auto">
        <div className="p-4 space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const hasChildren = item.children && item.children.length > 0;
            const isOpen = openDropdowns[item.title];
            const isActive = isActiveParent(item.href, item.children);

            return (
              <div key={item.title}>
                <button
                  onClick={() => {
                    if (hasChildren) toggleDropdown(item.title);
                    router.push(item.href);
                  }}
                  className={`flex w-full items-center justify-between p-3 rounded-lg transition-all duration-200 text-base ${
                    isActive
                      ? "bg-gradient-to-r from-[#183823] via-[#193928] to-[#174a32] text-white font-semibold"
                      : "text-[#E9E9EA] hover:font-semibold"
                  }`}
                >
                  <div className="flex items-center gap-3.5 flex-1">
                    {Icon && <Icon className="w-5 h-5" />}
                    <span>{item.title}</span>
                  </div>
                  {hasChildren && (isOpen ? <IoChevronUp /> : <IoChevronDown />)}
                </button>

                {hasChildren && isOpen && renderChildren(item.children)}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Bottom Menu */}
      <div className="mt-auto p-4 space-y-2">
        {bottomMenuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3.5 p-3 rounded-lg transition-all duration-200 text-base ${
                isActive
                  ? "bg-gradient-to-r from-[#183823] via-[#193928] to-[#174a32] text-white font-semibold"
                  : "text-[#E9E9EA] hover:font-semibold"
              }`}
              onClick={onClose}
            >
              <div className="w-5 h-5">{item.icon}</div>
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
